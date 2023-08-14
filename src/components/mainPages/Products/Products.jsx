import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import { categories } from "../../../api/Categories.js";
import { subcategories } from "../../../api/Subcategories.js";
import { GlobalState } from "../../../GlobalState";

function Products(props) {
  const state = useContext(GlobalState);
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [haveSubcategory, setHaveSubcategory] = useState(false);

  const firstCategorySelected = (cat) => {
    setHaveSubcategory(cat.haveSubcat);
    setShowSubcategories(!showSubcategories);

    subcategories.filter((subcat) => {
      if (cat.id == subcat.catId && `${cat.id}01` == subcat.id) {
        setSubcategorySelected(subcat);
      }
    });
  };

  console.log(subcategorySelected.id);

  return (
    <section>
      <div className="products-page">
        <div className="categories">
          <h2>Categorías</h2>

          <div className="categories-selection">
            {categories.map((data, index) => {
              return (
                <div key={index}>
                  <div
                    className="cat-item"
                    key={index}
                    onClick={() => {
                      firstCategorySelected(data);
                    }}
                  >
                    <img src={data.icon} className="cat-icon" />
                    <p
                      className="cat-title"
                      onClick={() => {
                        setSubcategorySelected(data);
                      }}
                    >
                      {data.category}
                    </p>

                    {data.haveSubcat && (
                      <div
                        className={
                          showSubcategories
                            ? "selection-icon active"
                            : "selection-icon"
                        }
                      >
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                      </div>
                    )}
                  </div>

                  {showSubcategories && (
                    <ul>
                      {subcategories.map((subcategory) => {
                        if (subcategory.catId == data.id) {
                          return (
                            <p
                              key={subcategory.id}
                              onClick={() => {
                                setSubcategorySelected(subcategory);
                              }}
                            >
                              - {subcategory.title}
                            </p>
                          );
                        }
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="products">
          <div className="container">
            <div className="title">
              <h2> {subcategorySelected.category}</h2>
              <h5>{subcategorySelected.title}</h5>
            </div>

            <div className="gallery">
              <div className="main-img">
                {subcategorySelected.imgs && (
                  <img src={subcategorySelected.imgs[0]} alt="" />
                )}
              </div>

              <div className="galleries-imgs">
                {subcategorySelected.imgs &&
                  subcategorySelected.imgs.map((imgs, index) => {
                    return (
                      <div
                        className="card-img"
                        style={{ backgroundImage: `url(${imgs})` }}
                        key={index}
                      ></div>
                    );
                  })}
              </div>
            </div>

            <div className="details">
              <div className="description">
                <h4>Descripción</h4>
                <p>{subcategorySelected.description}</p>
              </div>

              <div className="separator"></div>

              {subcategorySelected.treatments ? (
                <div className="treatments">
                  <h4>Tratamientos</h4>

                  <div className="treatments-container">
                    {subcategorySelected.treatments.map((treatment, index) => {
                      return (
                        <div className="treatment-container" key={index}>
                          <div className="title">
                            <h5>{treatment.title}</h5>
                          </div>

                          <div className="treatment-info">
                            <div
                              className="treatment-img"
                              style={{
                                backgroundImage: `url(${treatment.img})`,
                              }}
                            ></div>

                            <div className="paragraph">
                              <p>{treatment.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="separator"></div>

              <div className="measures">
                <h4>Medidas</h4>

                <table>
                  <thead>
                    {subcategorySelected.columns ? (
                      <tr>
                        {subcategorySelected.columns.map((column, index) => {
                          return <th key={index}>{column}</th>;
                        })}
                      </tr>
                    ) : (
                      ""
                    )}
                  </thead>

                  {subcategorySelected.rows ? (
                    <tbody>
                      {subcategorySelected.rows.map((row, index) => {
                        if (
                          subcategorySelected.id == "cad01" ||
                          subcategorySelected.id == "cad02" ||
                          subcategorySelected.id == "cad03"
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
                        } else if (subcategorySelected.id == "cad04") {
                          return (
                            <tr key={index}>
                              <td>{row.cadena}</td>
                              <td>{row.largo}</td>
                              <td>{row.punta}</td>
                            </tr>
                          );
                        } else if (subcategorySelected.id == "clav01") {
                          return (
                            <tr key={index}>
                              <td>{row.denominacion}</td>
                              <td>{row.largo}</td>
                            </tr>
                          );
                        } else if (subcategorySelected.id == "tor01") {
                          return (
                            <tr key={index}>
                              <td>{row.descripcion}</td>
                              <td>{row.plancha}mm</td>
                              <td>{row.perno}mm</td>
                            </tr>
                          );
                        } else if (subcategorySelected.id == "gan01") {
                          return (
                            <tr key={index}>
                              <td>{row.descripcion}</td>
                            </tr>
                          );
                        } else if (subcategorySelected.id == "gan02") {
                          return (
                            <tr key={index}>
                              <td>{row.espesor}</td>
                              <td>{row.largo}</td>
                            </tr>
                          );
                        } else if (subcategorySelected.id == "arg01") {
                          return (
                            <tr key={index}>
                              <td>
                                {row.espesor}x{row.diametroInt}
                              </td>
                            </tr>
                          );
                        } else if (subcategorySelected.id == "arg01") {
                          return (
                            <tr key={index}>
                              <td>
                                {row.espesor}x{row.diametroInt}
                              </td>
                            </tr>
                          );
                        } else if (
                          subcategorySelected.id == "mosq01" ||
                          subcategorySelected.id == "mosq02" ||
                          subcategorySelected.id == "mosq03"
                        ) {
                          return (
                            <tr key={index}>
                              <td>{row.n}</td>
                              <td>{row.largo}</td>
                              <td>{row.giratorio ? "✓" : "✗"}</td>
                            </tr>
                          );
                        } else if (
                          subcategorySelected.id == "mosq04" ||
                          subcategorySelected.id == "mosq05"
                        ) {
                          return (
                            <tr key={index}>
                              <td>{row.largo}</td>
                              <td>{row.giratorio ? "✓" : "✗"}</td>
                            </tr>
                          );
                        } else if (
                          subcategorySelected.id == "mosq06" ||
                          subcategorySelected.id == "mosq07"
                        ) {
                          return (
                            <tr key={index}>
                              <td>{row.largo}</td>
                              <td>{row.espesor}</td>
                        
                            </tr>
                          );
                        }else if (
                          subcategorySelected.id == "mosq08" 
                        ) {
                          return (
                            <tr key={index}>
                              <td>{row.n}</td>
                              <td>{row.eslabon ? "✓" : "✗"}</td>
                        
                            </tr>
                          );
                        } else {
                          return <p>No hay información sobre este producto. Contactese con la empresa </p>
                        }
                      })}
                    </tbody>
                  ) : (
                    ""
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
