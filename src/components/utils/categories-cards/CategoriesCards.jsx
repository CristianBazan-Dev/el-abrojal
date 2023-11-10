import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";

import "./categoriesCards.css";
import { Link } from "react-router-dom";


function CategoriesCards(props) {
  const state = useContext(GlobalState);
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    const res = axios.get("./categories.json").then((res) => {
      setCategories(res.data)
    });
  };

  useEffect(() => {
    getCategories(); 
  }, [])

  return (
    <section className="category-selection-section">
      {categories.map((data, index) => {
        return (
          <Link to={`/categories/${data.id}`} key={index}>
            <div
              className="product-card"
              style={{ backgroundImage: `url(${data.categoryImg})` }}
            >
              <h2>{data.category}</h2>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default CategoriesCards;
