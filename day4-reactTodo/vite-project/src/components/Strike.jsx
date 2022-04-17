
import { useState } from "react";
 export const Strike = ({hide,todolist}) => {
    return (
        <div className='todolist'>
           {
              todolist.filter(data => {
                 return data.status === true;
              }).map((data, prop) => {
                 return <div>
                    <input  type="checkbox" className="check" />
                    {data.title}
                    <button  onClick={() => { hide(prop) }}>Remove</button>
                 </div>
              })
           }
        </div>
     ) 
}