import { useState, useEffect} from "react";
import './Table.css'
export const Table = () => {
    const [tableData , setTable] = useState([])
      
    useEffect(
        () => {
            fetch(`http://localhost:8080/employees`)
             .then((res) => res.json())
            .then((data) => {
                setTable(data)
            })
        },[])
    
        useEffect(
            ()=>{
               console.log(tableData)
            },[tableData]
        )

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>MaritalStatus</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                             tableData.map((e) => {
                                 return(
                                     <tr>
                                         <td>{e.name}</td>
                                         <td>{e.age}</td>
                                         <td>{e.address}</td>
                                         <td>{e.department}</td>
                                         <td>{e.salary}</td>
                                         <td>{e.maritalStatus}</td>
                                     </tr>
                                 )
                             })
                         }
                    </tbody>
                </table>
            </div>
        )
}