import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import HomeSection from "../components/mainPages/Home/Home";
import { GlobalState } from "../GlobalState";
import { useSEO } from "../hooks/useSEO";

function Home(props) {
  const state = useContext(GlobalState);
  const [headerAlt, setHeaderAlt] = state.headerAlt;

  useEffect(() => {
    setHeaderAlt(false);
    window.scrollTo(0, 0);
  }, []);

  useSEO({ description: "Fábrica de cadenas con más de 30 años en el rubro. Cadenas. Torniquetes. Ganchos. Y muchos productos más. ¡Envíenos su consulta!", title: "Fábrica de cadenas" });

  return (
    <article className="app">
      <Header />
      <main>
        <HomeSection />
      </main>
      <Contact id="contact" className="contact-section" />
      <Footer />
      <Modal />
    </article>
  );
}

export default Home;
