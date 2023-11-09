import React, { useContext, useEffect, useState } from "react";

import { categories } from "../../../api/Categories.js";
import { subcategories } from "../../../api/Subcategories.js";
import { GlobalState } from "../../../GlobalState";

import "./categories.css";
import { Link } from "react-router-dom";

function Categories(props) {
  const state = useContext(GlobalState);

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [catIsActive, setCatIsActive] = state.catIsActive;
  const [categoryToggle, setCategoryToggle] = state.categoryToggle;
  const [categoryNameToggle, setCategoryNameToggle] = state.categoryNameToggle;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

    const reload = () =>{
     
    }

  return (
    <div className="categories-selection">
      <h2>Categorías</h2>

      <div className="cats-container">
        {categories.map((data, index) => {
          return (
            <Link to={`/categories/${data.id}`} >
              <div
                className="cat-item"
                key={index}
                onClick={() => {
                  setCatIsActive(!catIsActive);
                }}
              >
                <div className="cat-info">
                  <img src={data.icon} className="cat-icon" />
                  <p
                    className={
                      categorySelected == data.id
                        ? "cat-title active"
                        : "cat-title"
                    }
                  >
                    {data.category}
                  </p>

                  {/* {data.haveSubcat && (
                <div
                  className={
                    catIsActive && categoryToggle == index
                      ? "selection-icon active"
                      : "selection-icon"
                  }
                  id={data.id}
                  onClick={(e) => {
                    setToggleButton(e.target.id);
                  }}
                >
                  <div className="bar-1"></div>
                  <div className="bar-2"></div>
                </div>
              )} */}
                </div>

                {/* {catIsActive && (
              <ul>
                {subcategories.map((subcategory) => {
                  if (
                    subcategory.catId == data.id &&
                    subcategory.category == categoryNameToggle
                  ) {
                    return (
                      <p
                        key={subcategory.id}
                        onClick={() => {
                          setProductSelected(subcategory);
                        }}
                      >
                        {subcategory.title ? `- ${subcategory.title}` : ""}
                      </p>
                    );
                  }
                })}
              </ul>
            )} */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
