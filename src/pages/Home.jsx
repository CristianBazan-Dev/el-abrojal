import React, { useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import HomeSection from "../components/mainPages/Home/Home";
import { GlobalState } from "../GlobalState";
import { useTitle } from "../hooks/useTitle";

function Home(props) {
  const state = useContext(GlobalState);
  const [headerAlt, setHeaderAlt] = state.headerAlt;

  useEffect(() => {
    setHeaderAlt(false);
    window.scrollTo(0, 0);
  }, []);

  useTitle({ title: "Fábrica de cadenas" });

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
