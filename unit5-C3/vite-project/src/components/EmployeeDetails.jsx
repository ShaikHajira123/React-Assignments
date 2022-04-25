import axios from "axios"
import { useParams } from "react-router-dom"
import {useState ,useEffect} from 'react'
import { DataContext } from "../contexts/DataContext";
import {useContext} from 'react'

export const EmployeeDetails = () => {
    const  [user,setUser] = useState([])
    
    const { handleData } = useContext(DataContext);
    const {id} = useParams()
    useEffect(()=> {
       axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
           setUser (data)
       })
    },[])
    const handleChange = (name) => {
        handleData(1, name);
     };
    return (
      <div className="user_details">
          
        <img className="user_image" src={user.image}/>
        <h4 className="user_name">{user.username}</h4>
        <span className="user_salary">${user.salary}</span>
        <span className="tasks">
          <li className="task">{user.tasks}</li>
        </span>
        Status: <b className="status">{user.status}</b>
        Title: <b className="title">{user.title}</b>
            
        {/* Show this button only if user is not already terminated (users status is working) */}
        {user.status === "terminated" ? null : (
        <button className="fire" onClick={() => handleChange("terminated")} 
        >Fire Employee</button>)}
        {/* Show this button only if user is not already team lead or terminated */}
        {user.title === "Team Lead" ? null : (
        <button className="promote"onClick={() => handleChange("promoted")}>promote</button>)}
            
      </div>
    );
  };


// export const Users = () => {
    
//     return (
//         <div>
//             {users.map((user)=>(
//             <p key={user.id}>
//                 <Link  to={`/users/${user.id}`}>
//                     {user.id}.{user.first_name}
//                 </Link>
            
//             </p>
//             ))}
//         </div>
//     )
// }