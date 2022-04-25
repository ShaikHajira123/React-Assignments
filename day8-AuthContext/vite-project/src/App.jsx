import { useState } from 'react'
import { Form } from './components/Form'
import { Logged } from './components/Logged'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Form />
       <Logged />
    </div>
  )
}

export default App
