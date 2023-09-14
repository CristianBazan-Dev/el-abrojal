import React, { useContext, useState } from "react";

import { categories } from "../../../api/Categories.js";
import { subcategories } from "../../../api/Subcategories.js";
import { GlobalState } from "../../../GlobalState";

import "./categories.css";

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

  return (
    <div className="categories-selection">
      {/* <h2>Categorías</h2> */}
      {categories.map((data, index) => {
        return (
          <div
            className="cat-item"
            key={index}
            onClick={() => {
              setCategoryToggle(index);
              setCategoryNameToggle(data.category);
              setCatIsActive(!catIsActive);
              setCategorySelected(data.id);
            }}
          >
            <div className="cat-info">
              <img src={data.icon} className="cat-icon" />
              <p
                className={
                  categorySelected == data.id ? "cat-title active" : "cat-title"
                }
                onClick={() => {
                  setSubcategorySelected(data);
                }}
              >
                {data.category}
              </p>

              {data.haveSubcat && (
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
              )}
            </div>

            {catIsActive && (
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
            )}
          </div>
        );
      })}

      {/* <select
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
        </select> */}
    </div>
  );
}

export default Categories;
