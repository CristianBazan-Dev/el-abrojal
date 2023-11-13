import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";

import "./categoriesCards.css";
import { Link } from "react-router-dom";
import Cards from "../cards/Cards";

function CategoriesCards(props) {
  const state = useContext(GlobalState);
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    const res = axios.get("./categories.json").then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="category-selection-section">
      {categories.map((data, index) => {
        return (
          <Cards
            link={`/categories/${data.id}`}
            title={data.category}
            img={data.categoryImg}
            id={data.id}
          />
        );
      })}
    </section>
  );
}

export default CategoriesCards;
