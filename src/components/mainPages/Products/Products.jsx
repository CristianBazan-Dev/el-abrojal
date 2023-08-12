import React, { useState } from "react";
import "./products.css";
import { categories } from "../../../api/Categories.js";
import { subcategories } from "../../../api/Subcategories.js";

function Products(props) {
  const [showSubcategories, setShowSubcategories] = useState(false);

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
                    <p className="cat-title">{data.category}</p>

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
                          return <p>- {subcategory.titulo}</p>;
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
          <h2>Productos</h2>

          <div className="gallery">
            <div className="main-img">
              <img src="" alt="" />
            </div>
          </div>

          <div className="details">
            <div className="description">
              <h4>Descripción</h4>
            </div>

            <div className="separator"></div>

            <div className="treatments">
              <h4>Tratamientos</h4>
            </div>

            <div className="separator"></div>

            <div className="measures">
              <h4>Medidas</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
