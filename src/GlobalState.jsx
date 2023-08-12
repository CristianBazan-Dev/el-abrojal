import {useState, useEffect, createContext} from 'react';
    
import CategoriesAPI from './api/CategoriesAPI';

export const GlobalState = createContext(); 

export const DataProvider = ({ children }) => {

    

    const state = {
        categories: CategoriesAPI()
    }

    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}
