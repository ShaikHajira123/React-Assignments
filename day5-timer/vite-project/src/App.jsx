import { useState } from 'react'
import {Timer} from './components/Timer'
import './App.css'

function App() {
    const end=10 
     const initial =0
  return (
    <div className="App">
       <Timer end={end} initial={initial}/>
    </div>
  )
}

export default App
