import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import ProductsSection from "../components/mainPages/Products/Products";
import { GlobalState } from "../GlobalState";

function Products(props) {
  const state = useContext(GlobalState);
  const [productSelected, setProductSelected] =
    state.categories.productSelected;

  const [categorySelected, setCategorySelected] =
    state.categories.categorySelected;

  useEffect(() => {
    setProductSelected("");
    setCategorySelected("");
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <article className="app">
      <Header />

      <main>
        <ProductsSection />
      </main>

      <Contact id="contact" className="contact-section" />
      <Footer />
      <Modal />
    </article>
  );
}

export default Products;
