import React from "react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Modal from "../components/utils/modal/Modal";

import HomeSection from "../components/mainPages/Home/Home";

useEffect(() => {
  window.scrollTo(0, 0); 
}, [])

function Home(props) {
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
