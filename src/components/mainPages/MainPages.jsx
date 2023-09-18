import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Products from './Products/Products'
import About from './About/About'
import { GlobalState } from '../../GlobalState';
// import Categories from './Products/CategoriesPage/CategoriesPage';
// import CategoriesPage from './Products/CategoriesPage/CategoriesPage';

function MainPages(props) {
    const state = useContext(GlobalState); 

    
  const [categorySelected, setCategorySelected] =
  state.categories.categorySelected;
const [subcategorySelected, setSubcategorySelected] =
  state.categories.subcategorySelected;

const [productSelected, setProductSelected] =
  state.categories.productSelected;

    return (
        <main>
            <Routes>
                {/* For development */}
                {/* <Route path="/" element={<Home/>}/> */}


                {/* For production  */}
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                {/* <Route path ="/categories" element={<CategoriesPage/>} /> */}
      
                <Route path="/about" element={<About/>}/>


            </Routes>
        </main>
    );
}

export default MainPages;