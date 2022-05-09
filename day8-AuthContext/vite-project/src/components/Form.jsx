
import React , {useState , useContext} from 'react'

import { AuthContext } from '../contexts/AuthContext'

 export const Form = () => {
    const [form , setForm] =useState({
        email:"eve.holt@reqres.in",
        password:"cityslicka",
    })
    const {toggleAuth}  = useContext(AuthContext)

    const handleChange = (e) => {
        let {name,value} = e.target
        setForm({...form,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
          fetchData()
        console.log(form)
    }
    //     const fetchform = () => {
    //     fetch(`https://reqres.in/api/login`,{
    //         method : 'POST',
    //         headers : {
    //             "Content-Type" : 'application/json'
    //         },
    //         body : JSON.stringify(form)
    //     })
    //     .then((res) => res.json)
    //     .then((res) => {
    //         if(res.error){
    //             alert("user not found with this details")
    //         }else{
    //             toggleAuth(res.json)
    //         }
    //     })
    // }
    
    const fetchData = async () => {
        let data = await fetch("https://reqres.in/api/login", {
           method: "POST",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify(form),
        });
  
        data = await data.json();
        if (data.error !== "Missing email or username") {
           toggleAuth(data.token);
        }
     };
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter email' 
        onChange={handleChange}/>
        <input type="password" placeholder='Enter password'
        onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

