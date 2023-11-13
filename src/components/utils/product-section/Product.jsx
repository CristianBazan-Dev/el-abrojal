import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import "./product.css";
import { subcategories } from "../../../api/Subcategories";

import { ReactComponent as Back } from "../../../assets/icons/utils/back.svg";
import { saveAs } from "file-saver";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Product(props) {
  const state = useContext(GlobalState);
  const [product, setProduct] = useState([]);
  const [cat, setCat] = useState("");
  const [catIsActive, setCatIsActive] = state.catIsActive;

  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const [isChangeMainImg, setIsChangeMainImg] = useState(false);
  const [mainImg, setMainImg] = state.mainImg;

  const params = useParams();

  const handleGallery = (url) => {
    setShowModal(!showModal);
    setImgModal(url);
  };

  const handleMainImg = (url) => {
    setMainImg(url);
    setIsChangeMainImg(true);
  };

  useEffect(() => {}, []);

  const DownloadTable = (url) => {
    saveAs(
      `${url}`,
      `El Abrojal - Tabla de  ${product.category} ${product.title}.jpg`
    );
  };

  const getProducts = () => {
    const res = axios.get("./products.json").then((res) => {
      res.data.map((product) => {
        if (product.id == params.id) {
          setProduct(product);
          setCatIsActive(product.catId);
        }
      });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, []);

  return (
    <div className="products">
      <div className="title">
        <div className="main-title">
          <h3> {product.category}</h3>

          <h3>{product.title}</h3>
        </div>

        <div className="goBack-container">
          <Link to={`/categories/${catIsActive}`} className="goBack-button">
            <Back />
            <p>Atrás</p>
          </Link>
        </div>
      </div>

      <div className="gallery">
        <div className="main-img">
          {product.imgs && (
            <img
              src={!isChangeMainImg ? product.imgs[0] : mainImg}
              alt=""
              onClick={() => {
                handleGallery(product.imgs[0]);
              }}
            />
          )}
        </div>

        <div className="galleries-imgs">
          {product.imgs &&
            product.imgs.map((imgs, index) => {
              if (index < 4) {
                return (
                  <div
                    className="card-img"
                    style={{ backgroundImage: `url(${imgs})` }}
                    key={index}
                    onClick={() => {
                      handleGallery(imgs);
                    }}
                    onMouseEnter={() => {
                      handleMainImg(imgs);
                    }}
                  ></div>
                );
              }
            })}
        </div>
      </div>

      <div className="details">
        <div className="description">
          <div className="text">
            <h4>Descripción</h4>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="separator"></div>

        {product.treatments ? (
          <div className="treatments">
            <div className="text">
              <h4>Tratamientos</h4>
            </div>

            <div className="treatments-container">
              {product.treatments.map((treatment, index) => {
                return (
                  <div className="treatment-container" key={index}>
                    <div className="treatment-info">
                      <h5>{treatment.title}:</h5> <p>{treatment.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="separator" />

        <div className="measures">
          <div className="text">
            <h4>Medidas y existencias</h4>
          </div>
          <div className="center-table">
            <table>
              <thead>
                {product.columns ? (
                  <tr>
                    {product.columns.map((column, index) => {
                      return <th key={index}>{column}</th>;
                    })}
                  </tr>
                ) : (
                  ""
                )}
              </thead>

              {product.rows ? (
                <tbody>
                  {product.rows.map((row, index) => {
                    if (product.id == "cad01" || product.id == "cad02") {
                      return (
                        <tr key={index}>
                          <td>{row.denominacion}</td>
                          <td>{row.diametro}</td>
                          <td>{row.anchoInt}</td>
                          <td>{row.largoInt}</td>
                          <td>{row.kgxmt}</td>
                          <td>{row.mtxkg}</td>
                          <td>{row.carga}</td>
                        </tr>
                      );
                    } else if (product.id == "cad04") {
                      return (
                        <tr key={index}>
                          <td>{row.cadena}</td>
                          <td>{row.largo} mts</td>
                          <td>{row.punta}</td>
                        </tr>
                      );
                    } else if (product.id == "cad05") {
                      return (
                        <tr key={index}>
                          <td>{row.descripcion}</td>
                        </tr>
                      );
                    } else if (
                      product.id == "clav01" ||
                      product.id == "clav02" ||
                      product.id == "cad03"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.denominacion}</td>
                        </tr>
                      );
                      // } else if (product.id == "tor01" || product.id == "tor02") {
                      return (
                        <tr key={index}>
                          <td>{row.descripcion}</td>
                          <td>{row.plancha}mm</td>
                          <td>{row.perno}mm</td>
                        </tr>
                      );
                    } else if (product.id == "gan02") {
                      return (
                        <tr key={index}>
                          <td>{row.espesor}</td>
                          <td>{row.largo}</td>
                        </tr>
                      );
                    } else if (product.id == "arg01") {
                      return (
                        <tr key={index}>
                          <td>
                            {row.espesor}x{row.diametroInt}
                          </td>
                        </tr>
                      );
                    } else if (product.id == "arg01") {
                      return (
                        <tr key={index}>
                          <td>
                            {row.espesor}x{row.diametroInt}
                          </td>
                        </tr>
                      );
                    } else if (
                      product.id == "mosq01" ||
                      product.id == "mosq02" ||
                      product.id == "mosq03"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.n}</td>
                          <td>{row.largo}</td>
                          <td>{row.giratorio ? "✓" : "✗"}</td>
                        </tr>
                      );
                    } else if (
                      product.id == "mosq04" ||
                      product.id == "mosq05"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.largo}</td>
                          <td>{row.giratorio ? "✓" : "✗"}</td>
                        </tr>
                      );
                    } else if (
                      product.id == "mosq06" ||
                      product.id == "mosq07"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.largo}</td>
                          <td>{row.espesor}</td>
                        </tr>
                      );
                    } else if (product.id == "mosq08") {
                      return (
                        <tr key={index}>
                          <td>{row.n}</td>
                          <td>{row.eslabon ? "✓" : "✗"}</td>
                        </tr>
                      );
                    } else {
                      return (
                        <p key={index}>
                          Estamos actualizando la disponibilidad de medidas.
                          <a
                            href="https://wa.link/2s3t1s"
                            style={{ color: "blue" }}
                          >
                            {" "}
                            Contáctenos y recibirá la información deseada
                          </a>{" "}
                        </p>
                      );
                    }
                  })}
                </tbody>
              ) : (
                ""
              )}
            </table>

            <button
              onClick={() => {
                DownloadTable(product.imgTable);
              }}
            >
              Descargar tabla
            </button>
          </div>

          <div className="responsive-measure">
            <img src={product.imgTable} alt="" />
            <button
              onClick={() => {
                DownloadTable(product.imgTable);
              }}
            >
              Descargar tabla
            </button>
          </div>
        </div>
      </div>

      {/* <div className="related-products">
          <h4>Productos relacionados</h4>
          <div className="related-grid">
            {subcategories.map((subcat, index) => {
              if (
                subcat.id != product.id &&
                subcat.catId == product.catId
              ) {
                return <ProductCard item={subcat} index={index} />;
              }
            })}
          </div>
        </div> */}
    </div>
  );
}

export default Product;
