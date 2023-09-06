import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { subcategories } from "../../../api/Subcategories.js";
import "./responsiveSubcat.css";

function ResponsiveSubcat(props) {
  const state = useContext(GlobalState);

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;
  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [categoryNameToggle, setCategoryNameToggle] = state.categoryNameToggle;

  return (
    <div className="responsive-subcat">
      <div className="buttons-container">
        {subcategories.map((subcategory) => {
          if (subcategory.category == categoryNameToggle) {
            return <button>{subcategory.title}</button>;
          }
        })}
      </div>
    </div>
  );
}

export default ResponsiveSubcat;
