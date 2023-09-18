import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import "./product.css";
import { subcategories } from "../../../api/Subcategories";
import ProductCard from "../product-card/ProductCard";

import { ReactComponent as Back } from "../../../assets/icons/utils/back.svg";
import { saveAs } from "file-saver";

function Product(props) {
  const state = useContext(GlobalState);
  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const [isChangeMainImg, setIsChangeMainImg] = useState(false);
  const [mainImg, setMainImg] = state.mainImg;

  const handleGallery = (url) => {
    setShowModal(!showModal);
    setImgModal(url);
  };

  const handleMainImg = (url) => {
    setMainImg(url);
    setIsChangeMainImg(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DownloadTable = (url) => {
    saveAs(
      `${url}`,
      `El Abrojal - Tabla de  ${productSelected.category} ${productSelected.title}.jpg`
    );
  };

  console.log(mainImg);

  return (
    <div className="products">
      <div className="title">
        <div className="main-title">
          {
            (productSelected.catId = "cad" ? (
              <h3> Cadena </h3>
            ) : (
              <h3> {productSelected.category}</h3>
            ))
          }

          <h3>{productSelected.title}</h3>
        </div>

        <div className="goBack-container">
          <div
            className="goBack-button"
            onClick={() => {
              setProductSelected("");
            }}
          >
            <Back />
            <p>Atrás</p>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="main-img">
          {productSelected.imgs && (
            <img
              src={!isChangeMainImg ? productSelected.imgs[0] : mainImg}
              alt=""
              onClick={() => {
                handleGallery(productSelected.imgs[0]);
              }}
            />
          )}
        </div>

        <div className="galleries-imgs">
          {productSelected.imgs &&
            productSelected.imgs.map((imgs, index) => {
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
            })}
        </div>
      </div>

      <div className="details">
        <div className="description">
          <div className="text">
            <h4>Descripción</h4>
            <p>{productSelected.description}</p>
          </div>
        </div>

        <div className="separator"></div>

        {productSelected.treatments ? (
          <div className="treatments">
            <div className="text">
              <h4>Tratamientos</h4>
            </div>

            <div className="treatments-container">
              {productSelected.treatments.map((treatment, index) => {
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
                {productSelected.columns ? (
                  <tr>
                    {productSelected.columns.map((column, index) => {
                      return <th key={index}>{column}</th>;
                    })}
                  </tr>
                ) : (
                  ""
                )}
              </thead>

              {productSelected.rows ? (
                <tbody>
                  {productSelected.rows.map((row, index) => {
                    if (
                      productSelected.id == "cad01" ||
                      productSelected.id == "cad02"
                    ) {
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
                    } else if (productSelected.id == "cad04") {
                      return (
                        <tr key={index}>
                          <td>{row.cadena}</td>
                          <td>{row.largo}</td>
                          <td>{row.punta}</td>
                        </tr>
                      );
                    } else if (productSelected.id == "cad05") {
                      return (
                        <tr key={index}>
                          <td>{row.descripcion}</td>
                        </tr>
                      );
                    } else if (
                      productSelected.id == "clav01" ||
                      productSelected.id == "clav02" ||
                      productSelected.id == "cad03"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.denominacion}</td>
                        </tr>
                      );
                      // } else if (productSelected.id == "tor01" || productSelected.id == "tor02") {
                      return (
                        <tr key={index}>
                          <td>{row.descripcion}</td>
                          <td>{row.plancha}mm</td>
                          <td>{row.perno}mm</td>
                        </tr>
                      );
                    } else if (productSelected.id == "gan02") {
                      return (
                        <tr key={index}>
                          <td>{row.espesor}</td>
                          <td>{row.largo}</td>
                        </tr>
                      );
                    } else if (productSelected.id == "arg01") {
                      return (
                        <tr key={index}>
                          <td>
                            {row.espesor}x{row.diametroInt}
                          </td>
                        </tr>
                      );
                    } else if (productSelected.id == "arg01") {
                      return (
                        <tr key={index}>
                          <td>
                            {row.espesor}x{row.diametroInt}
                          </td>
                        </tr>
                      );
                    } else if (
                      productSelected.id == "mosq01" ||
                      productSelected.id == "mosq02" ||
                      productSelected.id == "mosq03"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.n}</td>
                          <td>{row.largo}</td>
                          <td>{row.giratorio ? "✓" : "✗"}</td>
                        </tr>
                      );
                    } else if (
                      productSelected.id == "mosq04" ||
                      productSelected.id == "mosq05"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.largo}</td>
                          <td>{row.giratorio ? "✓" : "✗"}</td>
                        </tr>
                      );
                    } else if (
                      productSelected.id == "mosq06" ||
                      productSelected.id == "mosq07"
                    ) {
                      return (
                        <tr key={index}>
                          <td>{row.largo}</td>
                          <td>{row.espesor}</td>
                        </tr>
                      );
                    } else if (productSelected.id == "mosq08") {
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
                DownloadTable(productSelected.imgTable);
              }}
            >
              Descargar tabla
            </button>
          </div>

          <div className="responsive-measure">
            <img src={productSelected.imgTable} alt="" />
            <button
              onClick={() => {
                DownloadTable(productSelected.imgTable);
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
              subcat.id != productSelected.id &&
              subcat.catId == productSelected.catId
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
