import React, { useContext, useEffect, useState } from "react";
import "./products.css";
import { categories } from "../../../api/Categories.js";
import { subcategories } from "../../../api/Subcategories.js";
import { GlobalState } from "../../../GlobalState";
import Modal from "../../utils/modal/Modal";

function Products(props) {
  const state = useContext(GlobalState);
  const [isActive, setIsActive] = useState(false);

  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;
  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [haveSubcategory, setHaveSubcategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [toggleButton, setToggleButton] = useState("");

  console.log(subcategorySelected);

  useEffect(() => {
    window.scrollTo(0, 0);
    subcategories.filter((subcat) => {
      if (
        categorySelected == subcat.catId &&
        `${categorySelected}01` == subcat.id
      ) {
        setSubcategorySelected(subcat);
      }
    });
  }, []);

  const firstCategorySelected = (cat) => {
    setCategorySelected(cat.id);
    setHaveSubcategory(cat.haveSubcat);
  };

  console.log(categorySelected, subcategorySelected);

  const handleGallery = (img) => {
    setImgModal(img);
    setShowModal(!showModal);
  };

  const searchCategory = (id) => {
    subcategories.filter((subcat) => {
      if (id == subcat.id) {
        setSubcategorySelected(subcat);
      }
    });
  };

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
                      setIsActive(!isActive);
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
                          isActive ? "selection-icon active" : "selection-icon"
                        }
                        id={data.id}
                        onClick={(e) => {
                          setToggleButton(e.target.id);
                        }}
                      >
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                      </div>
                    )}
                  </div>

                  {isActive && (
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
                              {subcategory.title
                                ? `- ${subcategory.title}`
                                : ""}
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

          <div className="responsive-categories-selection">
            <select
              name="subcategories"
              id=""
              onChange={(e) => {
                searchCategory(e.target.value);
              }}
            >
              {subcategories.map((subcategory) => {
                {
                  return (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.title
                        ? `${subcategory.category} - ${subcategory.title} `
                        : `${subcategory.category}`}
                    </option>
                  );
                }
              })}
            </select>
          </div>
        </div>

        <div className="products">
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
                      onClick={() => {
                        handleGallery(imgs);
                      }}
                    ></div>
                  );
                })}
            </div>

            <Modal />
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
                          subcategorySelected.id == "cad02"
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
                        } else if (
                          subcategorySelected.id == "clav01" ||
                          subcategorySelected.id == "cad03"
                        ) {
                          return (
                            <tr key={index}>
                              <td>{row.denominacion}</td>
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
                        } else if (subcategorySelected.id == "mosq08") {
                          return (
                            <tr key={index}>
                              <td>{row.n}</td>
                              <td>{row.eslabon ? "✓" : "✗"}</td>
                            </tr>
                          );
                        } else {
                          return (
                            <p>
                              No hay información sobre este producto. Contactese
                              con la empresa{" "}
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

              <div className="responsive-measures">
                {subcategorySelected.rows.map((row, index) => {
                  if (
                    subcategorySelected.id == "cad01" ||
                    subcategorySelected.id == "cad02"
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
                  } else if (subcategorySelected.id == "cad04") {
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
                  } else if (
                    subcategorySelected.id == "clav01" ||
                    subcategorySelected.id == "cad03"
                  ) {
                    return (
                      <ul key={index}>
                        <h4>- {row.denominacion}</h4>
                      </ul>
                    );
                  } else if (subcategorySelected.id == "tor01") {
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
                  } else if (subcategorySelected.id == "gan01") {
                    return (
                      <ul key={index}>
                        <h4>{row.descripcion}</h4>
                      </ul>
                    );
                  } else if (subcategorySelected.id == "gan02") {
                    return (
                      <ul key={index}>
                        <h4>Espesor S/16"</h4>

                        <li>
                          - Largo: <p>{row.largo}</p>
                        </li>
                      </ul>
                    );
                  } else if (subcategorySelected.id == "arg01") {
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
                  } else if (subcategorySelected.id == "arg01") {
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
                    subcategorySelected.id == "mosq01" ||
                    subcategorySelected.id == "mosq02" ||
                    subcategorySelected.id == "mosq03"
                  ) {
                    return (
                      <ul key={index}>
                        <h4>Numero {row.n}</h4>

                        <li>- Largo: {row.largo}mm</li>
                        <li>
                          - Giratorio (destorcedor) :{" "}
                          {row.giratorio ? "✓" : "✗"}
                        </li>
                      </ul>
                    );
                  } else if (
                    subcategorySelected.id == "mosq04" ||
                    subcategorySelected.id == "mosq05"
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
                    subcategorySelected.id == "mosq06" ||
                    subcategorySelected.id == "mosq07"
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
                  } else if (subcategorySelected.id == "mosq08") {
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
                        No hay información sobre este producto. Contactese con
                        la empresa{" "}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
