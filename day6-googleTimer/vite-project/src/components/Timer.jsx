
import React from 'react'
import './Timer.css'

export const Timer  = (prop) => {
    return(
        <div>
            <span className='digits'>
                {("0"+Math.floor((prop.count/600000) % 60)).slice(-2)}:
            </span>
        <span className="digits">
        {("0" + Math.floor((prop.count / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((prop.count / 1000) % 60)).slice(-2)}:
      </span>
      <span className="digits mili-sec">
        {("0" + ((prop.count / 10) % 100)).slice(-2)}
      </span>
        </div>
        
    )
}