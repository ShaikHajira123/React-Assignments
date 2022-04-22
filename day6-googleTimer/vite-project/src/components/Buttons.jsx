
import React from 'react'
import './Buttons.css'

export const Buttons = (prop) => {
    return(
        <div className='Buttons'>
       <button className='btn' onClick=
           {prop.handleStart}
       >
           Start</button>
           <button className='btn' onClick=
               {prop.handleStop}
           
            >Stop</button>
           <button className='btn' onClick=
               {prop.handleReset}
           >Reset</button>
           </div>
    )
}