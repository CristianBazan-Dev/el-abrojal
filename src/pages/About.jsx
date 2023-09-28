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
          content="Fábrica de cadenas con más de 30 años en el rubro. Cadenas. Torniquetes. Ganchos. Y muchos productos más. ¡Envíenos su consulta!"
        />
        <meta
          name="thumbnail"
          content="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571060/Logos/logo_h2y6cy_ppunp1.png"
        />
        <link rel="canonical" href="https://elabrojal.com/#/about" />
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
