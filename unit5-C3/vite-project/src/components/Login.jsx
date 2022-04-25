import React,{useState,useContext} from "react";
import {AuthContext}from "../contexts/AuthContext"
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
    //  use reqres to log user in.
 
    // const[form,setForm]=useState({})
    const {handleAuth}=useContext(AuthContext)
    const navigate = useNavigate()
    // const  handlechange=(e)=>{
    //     let{name,value}=e.target
    //     setForm({
    //         ...form,
    //         [name]:value
    //     })
    // }

    // const postForm = () => {
    //     fetch("https://reqres.in/api/register", {
    //         method : "POST",
    //         body : JSON.stringify(form),
    //         headers : {
    //             "Content-Type" : "application/json"
    //         }
    //     })
    //     .then(res => res.json())
    //     .then((res) =>  {
    //         if(res.error) {
    //             alert("user not found")
    //         }else {
    //             toggleAuth(res.token)
               
    //         }
    //     })
    // }
    const handleSubmit=(e)=> {
        e.preventDefault()
            handleAuth(true)
            navigate(-2,{replace:true})
        
    }
  
    return (
      <form className="loginform" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
          
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
       
        />
       
        <input type="submit" value="SIGN IN" className="login_submit"
        />
      
      
      </form>
    );
  };