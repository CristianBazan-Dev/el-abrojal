import React, { useEffect, useState } from "react";
import { categories } from "./Categories";
import { subcategories } from "./Subcategories";

function CategoriesAPI(props) {
  const [subcategorySelected, setSubcategorySelected] = useState(
    subcategories[0]
  );
  const [categorySelected, setCategorySelected] = useState(categories[0]);




  return {
    subcategorySelected: [subcategorySelected, setSubcategorySelected],
    categorySelected: [categorySelected, setCategorySelected],
  };
}

export default CategoriesAPI;
