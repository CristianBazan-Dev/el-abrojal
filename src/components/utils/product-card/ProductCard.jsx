import React, { useContext, useState } from "react";
import "./productCard.css";
import { GlobalState } from "../../../GlobalState";

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

  return (
    <div
      className="product-card"
      
      onMouseEnter={() => {
        setShowSlideCard(!showSlideCard);
        setToggle(index);
      }}
      onMouseLeave={() => {
        setShowSlideCard(false);
        setToggle("");
      }}
      onClick={() => {
        setProductSelected(item);
        window.scrollTo(0, 0);
      }}
    >
      <div className="front-card">
        <img src={item.imgs[0]} alt="" />

        <div className="text">
          <p>{item.category}</p>
          <h5>{item.title}</h5>
        </div>
      </div>

      <div
        className={
          showSlideCard && toggle == index ? "slide-card active" : "slide-card"
        }
      >
        <div className="subcategory-gallery">
          {item.imgs.map((img, e) => {
            return (
              <div className="container">
                <img
                  src={img}
                  onClick={() => {
                    OpenImg(img);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
