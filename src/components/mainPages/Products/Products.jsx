import React, { useEffect, useState } from "react";
import "./products.css";
import { categories } from "../../../api/Categories.js";
import { subcategories } from "../../../api/Subcategories.js";

function Products(props) {
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [subcategorySelected, setSubcategorySelected] = useState([]);

  console.log("Subcat selected info: ", subcategorySelected);

  return (
    <section>
      <div className="products-page">
        <div className="categories">
          <h2>Categorías</h2>

          <div className="categories-selection">
            {categories.map((data, index) => {
              return (
                <>
                  <div
                    className="cat-item"
                    key={index}
                    onClick={(e) => {
                      setShowSubcategories(!showSubcategories);
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
                </>
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
                  subcategorySelected.imgs.map((imgs) => {
                    return (
                      <div
                        className="card-img"
                        style={{ backgroundImage: `url(${imgs})` }}
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

              <div className="treatments">
                <h4>Tratamientos</h4>

                <div className="treatments-container">
                  {subcategorySelected.treatments &&
                    subcategorySelected.treatments.map((treatment) => {
                      return (
                        <div className="treatment-container">
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

              <div className="separator"></div>

              <div className="measures">
                <h4>Medidas</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
