import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import ProductsSection from "../components/mainPages/Products/Products";
import { GlobalState } from "../GlobalState";
import { useSEO } from "../hooks/useSEO";

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

  useSEO({description:"Los productos de El Abrojal se caracterizan por la calidad de su materia prima y la dedicación en su fabricación.", title: "Productos" });

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
