import React from "react";
import "./card.css";
function Cards({ product, title, img }) {
  return (
    <Link to={`/categories/${product.id}`} key={index}>
      <div className="product-card" style={{ backgroundImage: `url(${img})` }}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Cards;
