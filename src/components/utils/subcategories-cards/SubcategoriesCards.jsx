import React, { useContext, useEffect, useState } from "react";
import "./subcategoriesCards.css";
import { subcategories } from "../../../api/Subcategories";
import { GlobalState } from "../../../GlobalState";
import Modal from "../../utils/modal/Modal";

import { ReactComponent as Back } from "../../../assets/icons/utils/back.svg";

import { Link, useParams } from "react-router-dom";
import {} from "../../../../products.json";
import axios from "axios";
import Cards from "../cards/Cards";

function SubcategoriesCards(props) {
  const state = useContext(GlobalState);

  const [catIsActive, setCatIsActive] = state.catIsActive;
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
            setCatIsActive(product.catId);

            return (
              <Cards
                link={`/product/${product.id}`}
                img={product.imgs[0]}
                title={product.title}
                id={product.id}
              />
            );
          }
        })}
      </div>
    </section>
  );
}

export default SubcategoriesCards;
