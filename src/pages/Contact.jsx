import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import ProductsSection from "../components/mainPages/Products/Products";
import { GlobalState } from "../GlobalState";
import { useSEO } from "../hooks/useSEO";

import { Helmet } from "react-helmet";
import Categories from "../components/utils/categories-section/Categories";
import SubcategoriesCards from "../components/utils/subcategories-cards/SubcategoriesCards";
import ContactPage from "../components/mainPages/Contact/ContactPage";

function Category(props) {
  const state = useContext(GlobalState);

  useEffect(() => {
    window.scroll(-10, -10);
  }, []);

  return (
    <>
      <Helmet>
        <title>Metalúrgica El Abrojal | Contacto</title>
        <meta
          name="description"
          content="Consultas personalizadas para responder cualquier duda. ¡Contáctenos!"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="googlebot" content="index, follow"></meta>
        <meta name="bingbot" content="index, follow"></meta>

        <meta property="og:locale" content="es_ES"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Metalúrgica El Abrojal | Productos"
        ></meta>
        <meta
          property="og:description"
          content="Consultas personalizadas para responder cualquier duda. ¡Contáctenos!"
        ></meta>
        <meta
          property="og:url"
          content="https://elabrojal.com/#/contact"
        ></meta>
        <meta property="og:site_name" content="Fábrica de cadenas | Metalúrgica El Abrojal"></meta>

        <meta name="generator" content="react"></meta>
        <meta
          name="subject"
          content="Landing page of Metalúrgica El Abrojal chains and steel nails factory"
        />
        <meta
          name="subject"
          content="Página web de la fábrica de cadenas y clavos Metalúrgica El Abrojal"
        />
        <meta name="referrer" content="no-referrer" />

        <meta name="thumbnail" content="./logo.jpg" />
        <link rel="canonical" href="https://elabrojal.com/#/contact" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Morrison" />
        <meta name="geo.position" content="-34.996496;-64.967282" />
        <meta name="ICBM" content="-34.996496, -64.967282" />
      </Helmet>

      <article className="app">
        <Header />

        <main>
          <ContactPage />
        </main>
        <Footer />
        <Modal />
      </article>
    </>
  );
}

export default Category;
