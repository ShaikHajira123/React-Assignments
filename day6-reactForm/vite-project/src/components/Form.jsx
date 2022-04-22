import './form.css'

import React , {useState} from 'react'

export const Form = () => {
    const [formData , setForm] = useState({
        name : "",
        age : "",
        address : "",
        department : "",
        salary : "",
        maritalStatus : "",
    })
    
    const handleChange = (e) =>{
        const {name , value } = e.target
        setForm({...formData , [name] :value})
}

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        fetch(`http://localhost:8080/employees`,{
            method:'POST',
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify(formData)
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="name" type="text" placeholder='Enter Name' /><br></br>
                <input onChange={handleChange} name="age" type="text" placeholder='Enter Age'/><br></br>
                <textarea  onChange={handleChange} name="address" type="text" placeholder='Enter Address'></textarea><br />
                <label htmlFor="department">Department : </label>
                <select onChange={handleChange} id="" name="department">
                    <option value="--">--</option>
                    <option value="sales">Sales</option>
                    <option value="finance">Finance</option>
                    <option value="executive">Executive</option>
                </select><br />
                <input onChange={handleChange} name="salary" type="number" placeholder='Enter Expected Salary'/><br />
                <input onChange={handleChange}  value={"Married"}name="maritalStatus" type="radio"  />Married
                <input onChange={handleChange}  value={"Single"} name="maritalStatus" type="radio" />Single
                <br></br>
                <input type="submit" value="submit" />
                
            </form>
        </div>
    )
}