import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import ProductsSection from "../components/mainPages/Products/Products";
import { GlobalState } from "../GlobalState";
import { useSEO } from "../hooks/useSEO";

import { Helmet } from "react-helmet";
import CategoriesCards from "../components/utils/categories-cards/CategoriesCards";
import CategoriesSection from "../components/utils/categories-section/Categories";
import { useParams } from "react-router-dom";

import axios from "axios";
import SectionBanner from "../components/utils/section-banner/SectionBanner";
import SecondaryBanner from "../components/utils/secondary-banner/SecondaryBanner";

function Categories(props) {
  const state = useContext(GlobalState);

  const [headerAlt, setHeaderAlt] = state.headerAlt;
  const params = useParams();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Metalúrgica El Abrojal | Productos</title>
        <meta
          name="description"
          content="Dedicados a expandir nuestra oferta de manera constante"
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
          content="Dedicados a expandir nuestra oferta de manera constante"
        ></meta>
        <meta
          property="og:url"
          content="https://elabrojal.com/#/products"
        ></meta>
        <meta property="og:site_name" content="El Abrojal"></meta>

        <meta name="generator" content="react"></meta>
        <meta
          name="subject"
          content="Landing page of Metalúrgica El Abrojal chains factory"
        />
        <meta
          name="subject"
          content="Página web de la fábrica de cadenas El Abrojal"
        />
        <meta name="referrer" content="no-referrer" />

        <meta name="thumbnail" content="./logo.jpg" />
        <link rel="canonical" href="https://elabrojal.com/#/products" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Morrison" />
        <meta name="geo.position" content="-34.996496;-64.967282" />
        <meta name="ICBM" content="-34.996496, -64.967282" />
      </Helmet>

      <article className="app">
        <Header />

        <main>
          <SectionBanner
            title="Categorías"
            img="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571238/Productos/Categor%C3%ADas/Argollas_cfwvan_xx7sxa.png"
          />
          <section>
            <div className="products-page">
              <div className="categories">
                <CategoriesSection />
              </div>

              <div className="products">
                <CategoriesCards />
              </div>
            </div>

            <SecondaryBanner />
          </section>
        </main>

        <Contact />
        <Footer />
        <Modal />
      </article>
    </>
  );
}

export default Categories;
