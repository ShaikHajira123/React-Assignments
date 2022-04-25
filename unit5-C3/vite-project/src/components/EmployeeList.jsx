import {useEffect ,useState} from 'react'
import axios from 'axios'
 import {Link} from 'react-router-dom'


export const EmployeeList = () => {
    const[users , setUsers] =useState([])
    useEffect(() => {

        axios.get(`http://localhost:8080/employee`).then(({data})=>{
            setUsers(data)
    })
    },[])
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {users.map((user)=>(
            <Link to={`/employees/${user.id}`}>
        <div className="employee_card">
          <img className="employee_image" src={user.image}/>
          <span className="employee_name">{user.employee_name}</span>
          <span className="employee_title">{user.title}</span>
        </div>
        </Link>
        ))}
      </div>
    );
  };