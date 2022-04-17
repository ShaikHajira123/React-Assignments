import { useState } from "react";

export const Todolist =  ({getData}) => {

    const [text , setText] = useState("")

    return(
    <div>
        <input className="input"
            onKeyPress = {e => {
                if(e.key==="Enter"){
                   getData(text)
                }
            }}
            onChange={(e) => {
                setText(e.target.value)
                }}
             type="text" placeholder="Add a to-do..."/>
       
    </div>
    )
}