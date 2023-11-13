import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";
function Cards({ link, title, img, id }) {
  return (
    <Link to={link} key={id}>
      <div style={{ backgroundImage: `url(${img})` }} className="product-card">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Cards;
