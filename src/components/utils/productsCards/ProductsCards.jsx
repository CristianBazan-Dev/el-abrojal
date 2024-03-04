import React, { useContext, useEffect, useState } from "react";
import "./productsCards.css";
import { categories } from "../../../api/Categories";
import { subcategories } from "../../../api/Subcategories";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import Cards from "../cards/Cards";
import ProductsCarousel from "../productsCarousel/ProductsCarousel";

function ProductsCards(props) {
  const state = useContext(GlobalState);
  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;
  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;
  const [productSelected, setProductSelected] =
    state.categories.productSelected;

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




  return (
    <div className="productsCards-section">
      <div className="title">
        <h2>Productos</h2>
      </div>

      <div className="grid-container">
        <div className="categories-container">
          {categories.map((data, index) => {
            return (
              <Cards
                link={`/categories/${data.id}`}
                title={data.category}
                img={data.categoryImg}
                key={data.id}
              />
            );
          })}
        </div>
      </div>

      <ProductsCarousel/>
      

   
    </div>
  );
}

export default ProductsCards;
