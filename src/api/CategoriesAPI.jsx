import React, { useEffect, useState } from "react";
import { categories } from "./Categories";
import { subcategories } from "./Subcategories";

function CategoriesAPI(props) {
  const [subcategorySelected, setSubcategorySelected] = useState(subcategories[0])


  return {
    subcategorySelected: [subcategorySelected, setSubcategorySelected]
  };
}

export default CategoriesAPI;
