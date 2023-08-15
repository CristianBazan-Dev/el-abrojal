import {useState, useEffect, createContext} from 'react';
    
import CategoriesAPI from './api/CategoriesAPI';

export const GlobalState = createContext(); 

export const DataProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false); 
    const [imgModal, setImgModal] = useState(false); 



    const state = {
        categories: CategoriesAPI(),
        showModal: [showModal, setShowModal],
        imgModal: [imgModal, setImgModal]
    }

    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}
