import axios from "axios"
import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'



export const UserDetails = () => {
    const  [user,setUser] = useState([])
    const {id} = useParams()
    useEffect(()=> {
       axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
           setUser (data.data)
       })
    },[])
   
    return(
        <div>
            <img src={user.avatar} alt="" />
           {user.first_name}<br></br>
           {user.last_name}
        </div>
    )
}