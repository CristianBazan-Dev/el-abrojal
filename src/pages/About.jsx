import React from 'react';
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Modal from '../components/utils/modal/Modal';

import AboutSection from '../components/mainPages/About/About'

function About(props) {
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