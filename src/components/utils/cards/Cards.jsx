import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

function Cards({ link, title, img, id }) {
  return (
    <Link
      to={link}
      key={id}
      className="product-card"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="product-card-title">
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default Cards;
