 "use client"
import {createContext, useState, useContext} from 'react';
// Create a context with a default value of [false, () => {}]
const AppContext = createContext(["dark", () => {},""]);

export const AppWrapper = ({children}) =>{
    let [themeName,setThemeName]=useState("dark");
    return(
        <AppContext.Provider value={[themeName,setThemeName]}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}


// to use contex outsider ,
 /*

 import {useAppContext} from "@/context/context
 ..
 const [wht i need] =  useAppContext()

  */