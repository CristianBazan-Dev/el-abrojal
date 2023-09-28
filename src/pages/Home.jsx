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
  const [headerAlt, setHeaderAlt] = state.headerAlt;

  useEffect(() => {
    setHeaderAlt(false);
    window.scrollTo(0, 0);
  }, []);

  // useSEO({
  //   description:
  //     "",
  //   title: "Fábrica de cadenas",
  // });

  return (
    <>
      <Helmet>
        <title>El Abrojal | Fábrica de cadenas</title>
        <meta name="description"  content="Fábrica de cadenas con más de 30 años en el rubro. Cadenas. Torniquetes. Ganchos. Y muchos productos más. ¡Envíenos su consulta!"/>
        <meta name="thumbnail" content="https://res.cloudinary.com/dz6lrvj7u/image/upload/v1694571060/Logos/logo_h2y6cy_ppunp1.png"/>
        <link rel="canonical" href="https://elabrojal.com"/>

        
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
