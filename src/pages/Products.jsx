import React from 'react';
import Header from '../components/header/Header';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Modal from '../components/utils/modal/Modal';

import ProductsSection from '../components/mainPages/Products/Products'
function Products(props) {
    return (
        <article className="app">
        <Header />

        <main>

            <ProductsSection/>
        </main>
        
        <Contact id="contact" className="contact-section"/>
        <Footer />
         <Modal/> 
      </article>
    );
}

export default Products;