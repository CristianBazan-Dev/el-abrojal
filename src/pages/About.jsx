import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import AboutSection from "../components/mainPages/About/About";
import { GlobalState } from "../GlobalState";
import { useSEO } from "../hooks/useSEO";

import { Helmet } from "react-helmet";

function About(props) {
  const state = useContext(GlobalState);
  const [headerAlt, setHeaderAlt] = state.headerAlt;

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeaderAlt(true);
  }, []);

  useSEO({
    description:
      "En Metalúrgica El Abrojal somos más que una empresa: somos un legado de más de 30 años de excelencia en la industria.",
    title: "Sobre nosotros",
  });

  return (
    <>
      <Helmet>
        <title>El Abrojal | Sobre nosotros</title>
        <meta
          name="description"
          content="Somos más que una empresa: somos un legado con más de 30 años de experiencia en la industtria. "
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="googlebot" content="index, follow"></meta>
        <meta name="bingbot" content="index, follow"></meta>

        <meta property="og:locale" content="es_ES"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="El Abrojal | Sobre nosotros"></meta>
        <meta property="og:description" content="Somos más que una empresa: somos un legado con más de 30 años de experiencia en la industria."></meta>
        <meta property="og:url" content="https://elabrojal.com/#/about"></meta>
        <meta property="og:site_name" content="El Abrojal"></meta>

        <meta name="generator" content="react"></meta>
        <meta
          name="subject"
          content="Landing page of El Abrojal chains factory"
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
        <link rel="canonical" href="https://elabrojal.com/#/about" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Morrison" />
        <meta name="geo.position" content="-34.996496;-64.967282" />
        <meta name="ICBM" content="-34.996496, -64.967282" />
      </Helmet>

      <article className="app">
        <Header />
        <main>
          <AboutSection />
        </main>
        <Contact id="contact" className="contact-section" />
        <Footer />
        <Modal />
      </article>
    </>
  );
}

export default About;
