
import React, {useState , useEffect} from 'react'

export const Timer  = ({end , initial}) => {
    const [count , setCount] = useState(initial)

    useEffect(() => {
        let interval = setInterval(() => {
            setCount((prevValue) => {
                if(prevValue === end){
                    clearInterval(interval)
                    return end
                }
                return prevValue+1
            })
        },1000)
        return () => {
            clearInterval(interval)
        }
    },[])


    


    return(
        <div>
           <h1>Timer</h1>
           <h2>{count}</h2>
        </div>
    )
}
