import React, { useContext, useEffect } from 'react';
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Modal from '../components/utils/modal/Modal';

import AboutSection from '../components/mainPages/About/About'
import { GlobalState } from '../GlobalState';
import { useSEO } from "../hooks/useSEO";

function About(props) {
    const state = useContext(GlobalState)
    const [headerAlt, setHeaderAlt] = state.headerAlt

    
useEffect(() => {
    window.scrollTo(0, 0); 
    setHeaderAlt(true)
}, [])

useSEO({description: "En Metalúrgica El Abrojal somos más que una empresa: somos un legado de más de 30 años de excelencia en la industria.",title: "Sobre nosotros"})


    return (
        <article className="app">
        <Header />
        <main>
        
        <AboutSection/>


        </main>
        <Contact id="contact" className="contact-section"/>
        <Footer />
         <Modal/> 
      </article>
    );
}

export default About;