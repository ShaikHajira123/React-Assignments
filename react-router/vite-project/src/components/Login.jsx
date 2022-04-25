import { AuthContext } from "../contexts/AuthContext"
 import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


export const Login =()=>{
 const {handleAuth}  = useContext(AuthContext)
 const navigate = useNavigate()
    return (
        <div>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password"/>
        <button onClick={()=>{
            handleAuth(true)
            navigate(-2,{replace:true})
        }}>Submit</button>
        </div>
    )
}