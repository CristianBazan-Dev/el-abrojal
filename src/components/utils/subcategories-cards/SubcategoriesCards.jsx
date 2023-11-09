import React, { useContext, useEffect, useState } from "react";
import "./subcategoriesCards.css";
import { subcategories } from "../../../api/Subcategories";
import { GlobalState } from "../../../GlobalState";
import Modal from "../../utils/modal/Modal";

import { ReactComponent as Back } from "../../../assets/icons/utils/back.svg";
import ProductCard from "../product-card/ProductCard";
import { Link, useParams } from "react-router-dom";

function SubcategoriresCards(props) {
  const state = useContext(GlobalState);

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  const [subcategorySelected, setSubcategorySelected] =
    state.categories.subcategorySelected;

  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const [showSlideCard, setShowSlideCard] = useState(false);

  const [toggle, setToggle] = useState({});

  const params = useParams();

  const OpenImg = (url) => {
    setShowModal(!showModal);
    setImgModal(url);
  };

  return (
    <section className="subcategories-selection-section">


      <Link
        className="goBack-button"
        to={`/products/`}
      >
        <Back />
        <p>Volver a las categorías</p>
      </Link>

      <div className="subcategories-grid">
        {subcategories.map((subcat, index) => {
          if (subcat.catId == params.id) {
            return <ProductCard item={subcat} index={index} key={index} />;
          }
        })}
      </div>
    </section>
  );
}

export default SubcategoriresCards;
