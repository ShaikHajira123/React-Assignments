import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [counter , setCounter]=useState(2)

  const handlechange = (value)=>{
   
    setCounter(counter+value)

 
  }
  const handlechanges =(value)=>{
    setCounter(counter*value)
  }
  return (
    <div className="App">
      <h1>Counter</h1>
       <h1 className= {`${counter % 2===0 ?"evencolor" : "oddcolor"}`}>{counter}</h1>
       <button onClick = {()=>{handlechange(1)}}>Add</button>
       <button onClick={()=>{handlechange(-1)}}>Substract</button>
       <button onClick={()=>{handlechanges(2)}}>Double</button>

    </div>
    
  );
}

export default App;
