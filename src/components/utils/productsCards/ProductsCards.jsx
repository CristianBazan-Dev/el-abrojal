import React, { useState } from "react";
import "./productsCards.css";
import { categories } from "../../../api/Categories";
import { Link } from "react-router-dom";

function ProductsCards(props) {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <div className="productsCards-section">
      <div className="title">
        <h2>Productos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Venenatis tincidunt egestas
          dolor elementum mi amet quis lobortis.
        </p>
      </div>

      <div className="grid-container">
        <div className="categories-container">
          {categories.map((data, index) => {
            return (
              <Link to={`/products`}>
                <div
                  className="product-card"
                  style={{ backgroundImage: `url(${data.categoryImg})` }}
                  onClick={() => {
                    setCategorySelected(index);
                  }}
                >
                  <h2>{data.category}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
