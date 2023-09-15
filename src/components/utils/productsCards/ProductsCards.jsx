import React, { useContext, useEffect, useState } from "react";
import "./productsCards.css";
import { categories } from "../../../api/Categories";
import { subcategories } from "../../../api/Subcategories";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";

function ProductsCards(props) {
  const state = useContext(GlobalState);
  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;
  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;
  const [productSelected, setProductSelected] = state.categories.productSelected

  // useEffect(() => {
  //   subcategories.filter((subcat) => {
  //     if (
  //       categorySelected == subcat.catId &&
  //       `${categorySelected}01` == subcat.id
  //     ) {
  //       setSubcategorySelected(subcat);
  //     }
  //   });
  // }, []);

  const firstCategorySelected = (cat) => {
    setCategorySelected(cat.id);
    setSubcategorySelected("");
    setProductSelected(""); 
  };



  return (
    <div className="productsCards-section">
      <div className="title">
        <h2>Productos</h2>
        <p>
        En constante expansión, nuestros productos son fabricados con dedicación y materia prima de calidad. 
        </p>
      </div>

      <div className="grid-container">
        <div className="categories-container">
          {categories.map((data, index) => {
            return (
              <Link to={`/products`} key={index}>
                <div
                  className="product-card"
                  style={{ backgroundImage: `url(${data.categoryImg})` }}
                  onClick={() => {
                    firstCategorySelected(data);
                  }}
                >
                  <h2>{data.category}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
