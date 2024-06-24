 "use client"
import {createContext,useState,useEffect,useContext} from 'react';
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

// Create a context with a default value of [false, () => {}]
const AppContext = createContext([""]);

export const AppWrapper = ({children}) =>{
   
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = Cookies.get('token'); // Replace 'token' with your cookie name
        if (token) {
          const decoded = jwtDecode(token);
          setUser(decoded);
        }
      }, []);

    let userId = user ? user.id : null;
    return(
        <AppContext.Provider value={[userId]}>
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