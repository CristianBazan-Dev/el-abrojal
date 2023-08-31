import { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider, GlobalState } from "./GlobalState";

import Header from "./components/header/Header";
import MainPages from "./components/mainPages/MainPages";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Modal from "./components/utils/modal/Modal";

function App() {



  return (
    <DataProvider>
      <Router>
        <article className="app">
          <Header />
          <MainPages />
          <Contact id="contact" className="contact-section"/>
          <Footer />
           <Modal/> 
        </article>
      </Router>
    </DataProvider>
  );
}

export default App;
