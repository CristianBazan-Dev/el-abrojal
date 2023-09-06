import React, { useEffect, useState } from "react";
import { categories } from "./Categories";
import { subcategories } from "./Subcategories";
import { setProductInfo } from "@tomtom-international/web-sdk-maps";

function CategoriesAPI(props) {
  const [subcategorySelected, setSubcategorySelected] = useState(""
  );
  const [categorySelected, setCategorySelected] = useState("");

  const [productSelected, setProductSelected] = useState([]);


  return {
    subcategorySelected: [subcategorySelected, setSubcategorySelected],
    categorySelected: [categorySelected, setCategorySelected],
    productSelected: [productSelected, setProductSelected]
  };
}

export default CategoriesAPI;
