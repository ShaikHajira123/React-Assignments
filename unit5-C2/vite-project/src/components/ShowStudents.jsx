import React , {useState,useEffect} from 'react'
import { AddStudent } from './AddStudent';
import {Tablebody} from './Tablebody'
import './Table.css'



export const ShowStudents = () => {
    
      
       const [tableData , setTable] = useState([])
       const [filter,setFilter]=useState([])

    



    useEffect(
        () => {
            fetch("http://localhost:8080/students")
               .then((res) => res.json())
                .then((data) => {
                    setTable(data)
                    setFilter(data)
                }
                
                )
                
        
        },[])

        useEffect(
            ()=>{
               console.log(tableData)
            },[tableData]
        )
        const handlesort=(e)=>{
            if(e.target.value=="age"){
               let item= tableData.sort((a,b)=>b.age-a.age)
               setFilter([...item])
               
            }
            else if(e.target.value=="first_name"){
             let item= tableData.sort((a,b)=>b.first_name-a.first_name)
             setFilter([...item])
             
            }
            else if(e.target.value=="gender"){
             let item= tableData.sort((a,b)=>b.gender-a.gender)
             setFilter([...item])
             
            }
            else if(e.target.value=="tenth_score"){
             let item= tableData.sort((a,b)=>b.tenth_score-a.tenth_score)
             setFilter([...item])
             
            }
            else{
             let item= tableData.sort((a,b)=>b.twelth_score-a.twelth_score)
             setFilter([...item])
            }
         }

    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              onChange={handlesort}
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table" >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
     
         
                <tbody className="tbody">
   
                
                {filter.map((e)=>{

return <Tablebody student={e}/>
})}
               
            
              </tbody>  
     
              
              </table>
              {/* <AddStudent handleChage={handleChange} handleSubmit={handleSubmit}/> */}
        
      </div>
    );
  };