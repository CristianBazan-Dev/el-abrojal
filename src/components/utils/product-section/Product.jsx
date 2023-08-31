import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import "./product.css";
import Modal from "../modal/Modal";
import { subcategories } from "../../../api/Subcategories";
import ProductCard from "../product-card/ProductCard";

function Product(props) {
  const state = useContext(GlobalState);
  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const handleGallery = (url) => {
    setShowModal(!showModal);
    setImgModal(url);
  };



  return (
    <div className="products">


      <div className="title">
        <h2> {productSelected.category}</h2>
        <h5>{productSelected.title}</h5>
      </div>

      <div className="gallery">
        <div className="main-img">
          {productSelected.imgs && (
            <img
              src={productSelected.imgs[0]}
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
              <div className="treatments-container">
                {productSelected.treatments.map((treatment, index) => {
                  return (
                    <div className="treatment-container" key={index}>
                      <div className="title">
                        {" "}
                        <h5>{treatment.title}</h5>{" "}
                      </div>

                      <div className="treatment-info">
                        <div>
                          <img src={treatment.img} alt="" />

                          <div className="paragraph">
                            <p>{treatment.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="separator" />

        <div className="measurement">
          <h4>Medidas y existencias</h4>
        </div>

        <div className="measures">
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
                        <ul key={index}>
                          <td>{row.descripcion}</td>
                        </ul>
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
                    } else if (productSelected.id == "tor01") {
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
                        <p>
                          No hay información sobre este producto. Contactese con
                          la empresa{" "}
                        </p>
                      );
                    }
                  })}
                </tbody>
              ) : (
                ""
              )}
            </table>
          </div>

          {/* <div className="responsive-measures">
            {productSelected.rows.map((row, index) => {
              if (
                productSelected.id == "cad01" ||
                productSelected.id == "cad02"
              ) {
                return (
                  <ul key={index}>
                    <h4>{row.denominacion}</h4>

                    <li>
                      - Diámetro: <p>{row.diametro}</p>
                    </li>
                    <li>
                      - Ancho interno: <p>{row.anchoInt}</p>
                    </li>
                    <li>
                      - Largo interno: <p>{row.largoInt}</p>
                    </li>
                    <li>
                      - Kg x mt: <p>{row.kgxmt}</p>
                    </li>
                    <li>
                      - Mt x kg: <p>{row.mtxkg}</p>
                    </li>
                    <li>
                      - Carga: <p>{row.carga}</p>
                    </li>
                  </ul>
                );
              } else if (productSelected.id == "cad04") {
                return (
                  <ul key={index}>
                    <h4>{row.cadena}</h4>

                    <li>
                      - Largo: <p>{row.largo}</p>
                    </li>
                    <li>
                      - Punta: <p>{row.punta}</p>
                    </li>
                  </ul>
                );
              } else if (productSelected.id == "cad05") {
                return (
                  <ul key={index}>
                    <h4>{row.descripcion}</h4>
                  </ul>
                );
              } else if (
                productSelected.id == "clav01" ||
                productSelected.id == "clav02" ||
                productSelected.id == "cad03"
              ) {
                return (
                  <ul key={index}>
                    <h4>- {row.denominacion}</h4>
                  </ul>
                );
              } else if (productSelected.id == "tor01") {
                return (
                  <ul key={index}>
                    <h4>{row.descripcion}</h4>

                    <li>
                      - Plancha: <p>{row.plancha}mm</p>
                    </li>
                    <li>
                      - Perno: <p>{row.perno}mm</p>
                    </li>
                  </ul>
                );
              } else if (productSelected.id == "gan02") {
                return (
                  <ul key={index}>
                    <h4>Espesor S/16"</h4>

                    <li>
                      - Largo: <p>{row.largo}</p>
                    </li>
                  </ul>
                );
              } else if (productSelected.id == "arg01") {
                return (
                  <ul key={index}>
                    <li>
                      - Espesor x diámetro interno:{" "}
                      <p>
                        {row.espesor}x{row.diametroInt}
                      </p>
                    </li>
                  </ul>
                );
              } else if (productSelected.id == "arg01") {
                return (
                  <ul key={index}>
                    <li>
                      - Espesor x diámetro interno:{" "}
                      <p>
                        {row.espesor}x{row.diametroInt}
                      </p>
                    </li>
                  </ul>
                );
              } else if (
                productSelected.id == "mosq01" ||
                productSelected.id == "mosq02" ||
                productSelected.id == "mosq03"
              ) {
                return (
                  <ul key={index}>
                    <h4>Numero {row.n}</h4>

                    <li>- Largo: {row.largo}mm</li>
                    <li>
                      - Giratorio (destorcedor) : {row.giratorio ? "✓" : "✗"}
                    </li>
                  </ul>
                );
              } else if (
                productSelected.id == "mosq04" ||
                productSelected.id == "mosq05"
              ) {
                return (
                  <ul key={index}>
                    <li>- Largo: {row.largo}</li>
                    <li>
                      - Giratorio (destorcedor): {row.giratorio ? "✓" : "✗"}
                    </li>
                  </ul>
                );
              } else if (
                productSelected.id == "mosq06" ||
                productSelected.id == "mosq07"
              ) {
                return (
                  <ul key={index}>
                    <h4>Numero {index}</h4>
                    <li>
                      - Largo: <p>{row.largo}mm</p>
                    </li>
                    <li>
                      - Espesor: <p>{row.espesor}mm</p>
                    </li>
                  </ul>
                );
              } else if (productSelected.id == "mosq08") {
                return (
                  <ul key={index}>
                    <h4>Numero {row.n}</h4>

                    <li>
                      - Eslabón: <p>{row.eslabon ? "✓" : "✗"}</p>
                    </li>
                  </ul>
                );
              } else {
                return (
                  <p>
                    No hay información sobre este producto. Contactese con la
                    empresa{" "}
                  </p>
                );
              }
            })}
          </div> */}
        </div>

        <div className="separator" />

        <div className="related-products">
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
        </div>
      </div>
    </div>
  );
}

export default Product;
