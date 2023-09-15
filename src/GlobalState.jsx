import {useState, useEffect, createContext} from 'react';
    
import CategoriesAPI from './api/CategoriesAPI';

export const GlobalState = createContext(); 

export const DataProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false); 
    const [imgModal, setImgModal] = useState(false); 
    const [blurred, setBlurred] = useState(false); 

    const [catIsActive, setCatIsActive] = useState(false);
    const [categoryToggle, setCategoryToggle] = useState("");
    const [categoryNameToggle, setCategoryNameToggle] = useState("");
  


    const state = {
        categories: CategoriesAPI(),
        showModal: [showModal, setShowModal],
        imgModal: [imgModal, setImgModal],
        blurred: [blurred, setBlurred], 
        catIsActive: [catIsActive, setCatIsActive], 
        categoryToggle: [categoryToggle, setCategoryToggle],
        categoryNameToggle: [categoryNameToggle, setCategoryNameToggle]

    }

    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}
