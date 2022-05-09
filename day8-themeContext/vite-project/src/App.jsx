
import {useContext} from "react"
import { ThemeContext } from './contexts/themeContexts'

import './App.css'

function App() {
  const {toggleTheme} = useContext(ThemeContext)
  const { theme } = useContext(ThemeContext);
  // console.log({theme})
  const handleToggle=()=>{
       toggleTheme(theme)
        console.log({theme})
  }

  return (
    <div className={theme===false? "black" : "pink"}>
        <button onClick={handleToggle}>Toggle Theme</button>
        <h1>My Name is Hajira </h1>
    </div>
  )
}

export default App
