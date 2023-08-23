import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Products from './Products/Products'
import About from './About/About'
import { GlobalState } from '../../GlobalState';

function MainPages(props) {

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    );
}

export default MainPages;