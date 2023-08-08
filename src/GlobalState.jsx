import {useState, useEffect, createContext} from 'react';

export const GlobalState = createContext(); 

export const DataProvider = ({ children }) => {

    const [hola, setHola] = useState("Hola, desde el contexto")

    const state = {
        hola: [hola, setHola]
    }

    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}
