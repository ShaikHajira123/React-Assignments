
import React , {useState , useContext} from 'react'

import { AuthContext } from '../contexts/AuthContext'

 export const Form = () => {
    const [form , setForm] =useState({
        email:"",
        password:"",
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
        let fetched = await fetch("https://reqres.in/api/login", {
           method: "POST",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify(form),
        });
  
        fetched = await fetched.json();
        console.log(fetched);
        if (fetched.error !== "Missing email or username") {
           toggleAuth(fetched.token);
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

