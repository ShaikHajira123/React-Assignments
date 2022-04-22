
import React, {useState , useEffect} from 'react'
import { Buttons } from './Buttons'
import {Timer} from './Timer'
import './Timer.css'

export const Stopwatch  = () => {
    const [start , setStart] = useState(false)
    const [stop , setStop] = useState(true)
    const [count , setCount] = useState(0)
    
 
    useEffect(() => {
        let interval =null
        if(start && stop ===false){
            interval = setInterval(() => {
                setCount((count) =>  count+10 )
            },10)
        }else{
            clearInterval(interval)
        }
         
        return () => {
            clearInterval(interval)
        }
    },[start,stop])

    const handleStart= () => {
         setStart(true)
         setStop(false)
    }
    
    const handleReset = () => {
        setStart(false)
        setCount(0)
    }
    
    const handleStop = () => {
        setStop(!stop)
    }
    
    


    return(
        <div className='stopwatch'>
            <div>
            <Timer count={count} />
            </div>
           
           <div  className='buttons'>
           <Buttons 
           handleStart={handleStart}
           handleReset={handleReset}
           handleStop={handleStop}
           />
           </div>
           
        </div>
    )
}