import React, { useContext, createContext, useEffect, useReducer } from 'react';
import useFetchDoc from '../hooks/useFirebase';
import Reducer from '../reducer/Reducer';

export const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
    const initialValues = {
        theme: 'light',
        activeTab: '0',
    }
    
    const [state, dispatch] = useReducer(Reducer, initialValues)

    useEffect(()=>{
        localStorage.setItem('theme', state.theme)
    }, [state.theme])

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);