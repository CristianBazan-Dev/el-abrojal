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

  const [isActive, setIsActive] = useState(false);
  const [categoryToggle, setCategoryToggle] = useState("");
  const [categoryNameToggle, setCategoryNameToggle] = useState("");

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;


  return (
    <div className="categories-selection">
      {categories.map((data, index) => {
        return (
          <div key={index}>
            <div
              className="cat-item"
              key={index}
              onClick={() => {
                setCategoryToggle(index);
                setCategoryNameToggle(data.category);
                setIsActive(!isActive);
                setCategorySelected(data.id);
              }}
            >
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
                    isActive && categoryToggle == index
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

            {isActive && (
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
  );
}

export default Categories;
