import React, { useContext, useEffect, useState } from "react";
import "./subcategoriesCards.css";
import { subcategories } from "../../../api/Subcategories";
import { GlobalState } from "../../../GlobalState";
import Modal from "../../utils/modal/Modal";

import { ReactComponent as Back } from "../../../assets/icons/utils/back.svg";
import ProductCard from "../product-card/ProductCard";
import { Link, useParams } from "react-router-dom";
import {} from "../../../../products.json";
import axios from "axios";

function SubcategoriesCards(props) {
  const state = useContext(GlobalState);

  const [showModal, setShowModal] = state.showModal;
  const [imgModal, setImgModal] = state.imgModal;

  const [showSlideCard, setShowSlideCard] = useState(false);
  const [subcategories, setSubcategories] = useState([]);

  const [toggle, setToggle] = useState({});

  const params = useParams();

  const [products, setProducts] = useState([]);

  const OpenImg = (url) => {
    setShowModal(!showModal);
    setImgModal(url);
  };

  const getSubcategories = () => {
    const res = axios.get("../../../../products.json").then((res) => {
      setSubcategories(res.data);
    });
  };

  useEffect(() => {
    getSubcategories();
  }, []);

  return (
    <section className="subcategories-selection-section">
      <Link className="goBack-button" to={`/categories`}>
        <Back />
        <p>Volver a las categorías</p>
      </Link>

      <div className="subcategories-grid">
        {subcategories.map((product, index) => {
          if (product.catId == params.id) {
            return <ProductCard item={product} index={index} key={index} />;
          }
        })}
      </div>
    </section>
  );
}

export default SubcategoriesCards;
