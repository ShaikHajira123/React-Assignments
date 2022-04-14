import {useState} from 'react'
import { Todoitem } from './Todoitem'


export const Todolist = ({getData}) => {
    const [text ,setText] = useState("")

    return (
        
        <div className="todoist">
            
        <input onChange = {(e) =>{
             setText(e.target.value)
        }} 
        type="text" placeholder="Write Something"/>
        <button onClick={()=>{getData(text)}}>+</button>
      
       </div>
    )
}


