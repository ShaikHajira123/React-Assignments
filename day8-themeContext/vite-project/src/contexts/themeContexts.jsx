

import {createContext  ,useState } from 'react'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [theme , setTheme] = useState(false)
   

     const toggleTheme = () => {
       setTheme(theme===false?true:false)
    }

   return  (<ThemeContext.Provider value={{toggleTheme , theme}}>
        {children}
        </ThemeContext.Provider>
   )
}