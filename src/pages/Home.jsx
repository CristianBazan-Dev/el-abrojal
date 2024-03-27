import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import HomeSection from "../components/mainPages/Home/Home";
import { GlobalState } from "../GlobalState";
import { useSEO } from "../hooks/useSEO";

import { Helmet } from "react-helmet";

function Home(props) {
  const state = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fábrica de cadenas | Metalúrgica El Abrojal </title>
        <meta
          name="description"
          content="Fábrica de cadenas con más de 30 años en el rubro. Cadenas. Clavos. Torniquetes. Ganchos. Y muchos productos más. ¡Envíenos su consulta!"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="googlebot" content="index, follow"></meta>
        <meta name="bingbot" content="index, follow"></meta>

        <link rel="canonical" href="https://elabrojal.com/" />

        <meta property="og:locale" content="es_ES"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:title"
          content="Fábrica de cadenas | Metalúrgica El Abrojal"
        ></meta>
        <meta
          property="og:description"
          content="Fábrica de cadenas con más de 30 años en el rubro. Cadenas. Clavos. Torniquetes. Ganchos. Y muchos productos más. ¡Envíenos su consulta!"
        ></meta>
        <meta property="og:url" content="https://elabrojal.com"></meta>
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

        <meta
          name="thumbnail"
          content="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571060/Logos/logo_h2y6cy_ppunp1.png"
        />

        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Morrison" />
        <meta name="geo.position" content="-34.996496;-64.967282" />
        <meta name="ICBM" content="-34.996496, -64.967282" />
      </Helmet>

      <article className="app">
        <Header />
        <main>
          <HomeSection />
        </main>
        <Contact id="contact" className="contact-section" />
        <Footer />
        <Modal />
      </article>
    </>
  );
}

export default Home;
