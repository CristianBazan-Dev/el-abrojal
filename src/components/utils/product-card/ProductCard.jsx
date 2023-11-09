import React, { useContext, useState } from "react";
import "./productCard.css";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";

function ProductCard({ item, index }) {
  const state = useContext(GlobalState);

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [showSlideCard, setShowSlideCard] = useState(false);

  const [toggle, setToggle] = useState({});

  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const OpenImg = (url) => {
    setShowModal(true);
    setImgModal(url);
  };

  return (
    <Link to={`/products/${item.id}`} className="product-card">
      <div className="product-card">
        <div className={!showSlideCard ? "front-card" : "front-card active"}>
          <img src={item.imgs[0]} alt="" />

          <div className="text">
            <p>{item.category}</p>
            <h5>{item.title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
