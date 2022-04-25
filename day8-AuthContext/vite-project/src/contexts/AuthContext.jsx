
import {createContext  ,useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [isAuth , setAuth] = useState('Login')
    const [token , setToken] = useState("")

     const toggleAuth = (token) => {
        if(token){
            setAuth(isAuth === "Login" ? "Logout" : "Login");
            setToken(token)
        }
    }

   return  (<AuthContext.Provider value={{toggleAuth , isAuth , token}}>
        {children}
        </AuthContext.Provider>
   )
}