import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import ProductsSection from "../components/mainPages/Products/Products";
import { GlobalState } from "../GlobalState";
import { useSEO } from "../hooks/useSEO";

import { Helmet } from "react-helmet";

function Products(props) {
  const state = useContext(GlobalState);
  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  const [headerAlt, setHeaderAlt] = state.headerAlt;

  useEffect(() => {
    setProductSelected("");
    setCategorySelected("");
    window.scrollTo(0, 0);
    setHeaderAlt(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>El Abrojal | Productos</title>
        <meta
          name="description"
          content="Nuestros productos se encuentran realizados con materia prima de calidad y con dedicación."
        />
        <meta
          name="thumbnail"
          content="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571060/Logos/logo_h2y6cy_ppunp1.png"
        />  
        <link rel="canonical" href="https://elabrojal.com/#/products" />
      </Helmet>

      <article className="app">
        <Header />

        <main>
          <ProductsSection />
        </main>

        <Contact id="contact" className="contact-section" />
        <Footer />
        <Modal />
      </article>
    </>
  );
}

export default Products;
