import React, { useContext, useEffect, useState } from "react";

import { categories } from "../../../api/Categories.js";
import { subcategories } from "../../../api/Subcategories.js";
import { GlobalState } from "../../../GlobalState";
import Modal from "../../utils/modal/Modal";
import CategoriesCards from "../../utils/categories-cards/CategoriesCards.jsx";
import SubcategoriesCards from "../../utils/subcategories-cards/SubcategoriesCards.jsx";
import "./products.css";
import Categories from "../../utils/categories-section/Categories.jsx";
import Product from "../../utils/product-section/Product.jsx";

function Products(props) {
  const state = useContext(GlobalState);

  const [showModal, setShowModal] = state.showModal;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;
  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <section>
      <div className="products-page">
        <div className="categories">
          <h2>Categorías</h2>
          <Categories />
        </div>

        {productSelected ? (
          <Product />
        ) : categorySelected ? (
          <SubcategoriesCards />
        ) : (
          <CategoriesCards />
        )}
      </div>
    </section>
  );
}

export default Products;
