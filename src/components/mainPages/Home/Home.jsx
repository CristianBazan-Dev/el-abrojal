import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

import Hero from '../../utils/hero/Hero'
import Banner from '../../utils/banner/Banner'
import ProductsCards from '../../utils/productsCards/ProductsCards'

function Home(props) {
    return (
        <section className='home'>
            <Hero/>
            <Banner/>
            <ProductsCards/>
        </section>
    );
}

export default Home;