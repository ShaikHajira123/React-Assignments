import { useState } from 'react'
import { Button } from './components/Button'
import './App.css'

function App() {
  const [theme, setTheme] = useState(true)

  return (
    <div className="App">
      <Button theme={theme}>Click Me</Button>
      <Button onClick={()=>{
        setTheme(!theme)
      }}
      theme={theme}
      >{theme ? 'black' : 'pink'}</Button>
    </div>
  )
}

export default App
