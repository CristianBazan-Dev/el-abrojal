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
import SectionBanner from "../components/utils/section-banner/SectionBanner";
import SecondaryBanner from "../components/utils/secondary-banner/SecondaryBanner";

function Category(props) {
  const state = useContext(GlobalState);

  useEffect(() => {
    window.scroll(-10, -10);
  }, []);

  return (
    <>
      <Helmet>
        <title>Metalúrgica El Abrojal | Productos</title>
        <meta
          name="description"
          content="Contamos con variedad de productos para que se ajusten a sus necesidades."
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
          content="Contamos con variedad de productos para que se ajusten a sus necesidades."
        ></meta>
        <meta
          property="og:url"
          content="https://elabrojal.com/#/products"
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

        <meta
          name="thumbnail"
          content="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571060/Logos/logo_h2y6cy_ppunp1.png"
        />
        <link rel="canonical" href="https://elabrojal.com/#/products" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Morrison" />
        <meta name="geo.position" content="-34.996496;-64.967282" />
        <meta name="ICBM" content="-34.996496, -64.967282" />
      </Helmet>

      <article className="app">
        <Header />

        <main>
          <section>
            <SectionBanner
              title="Productos"
              img="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571238/Productos/Categor%C3%ADas/Argollas_cfwvan_xx7sxa.png"
            />
            <div className="products-page">
              <div className="categories">
                <Categories />
              </div>
              <div className="products">
                <SubcategoriesCards />
              </div>
            </div>
          </section>
          <SecondaryBanner/>
        </main>
        <Contact/>
        <Footer />
        <Modal />
      </article>
    </>
  );
}

export default Category;
