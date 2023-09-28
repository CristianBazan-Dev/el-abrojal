import React, { useContext, useEffect } from 'react';
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Modal from '../components/utils/modal/Modal';

import AboutSection from '../components/mainPages/About/About'
import { GlobalState } from '../GlobalState';
import { useTitle } from '../hooks/useTitle';

function About(props) {
    const state = useContext(GlobalState)
    const [headerAlt, setHeaderAlt] = state.headerAlt

    
useEffect(() => {
    window.scrollTo(0, 0); 
    setHeaderAlt(true)
}, [])

useTitle({title: "Sobre nosotros"})


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