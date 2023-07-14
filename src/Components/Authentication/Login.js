import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Authentication.style.css'

const Login = () => {
  const navi  = useNavigate()

    const[formdata, setFormdata] = useState({EmailAdress:"",password:""})

    const handleOnchange = (event)=>{
        const  {name, value} = event.target
        setFormdata({...formdata , [name]:value})
    }

    const handleOnSubmit  = (event)=>{
            event.preventDefault()
             axios.post('http://localhost:9002/login',formdata)
            .then((response) => {
              if(response.data.token){
                navi('/')
                localStorage.setItem("token",response.data.token)
                localStorage.setItem("FirstName",response.data.FirstName)
            }
            console.log(response.data);
            })
            .catch((error) => {
              if (error.response) {
                console.error(error.response.data.message); 
                alert(`${error.response.data.message}`)
              } else {
                console.error(error.message);
                alert(`${error.response.data.message}`)
              }
            });
            console.log(formdata);
            setFormdata({EmailAdress:"",password:""}) 
    }

  return (
    <>
    
    <h1 className='Store-Heading'>The Siren</h1>

    <div className='Image-Container'>
    <img src='https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-lock-icon-on-white-background-png-image_4859938.png'
    alt='Not-Found' className='Login-Image'/></div>

    <h2 className='Authorisation-Heading'>Login</h2>

   <div className='Login-Container'>
    <form onSubmit={handleOnSubmit} className='Login-Form'>
 
    <div className='Login-Section'>
    <label>
        Email Address
    <input type='email' name='EmailAdress' placeholder='Email Address' value={formdata.EmailAdress} required onChange={handleOnchange}/>
    </label>

    
    <label className='Login-Password-Section'>
       Password
    <input type='password' name='password' placeholder='Password' value={formdata.password} required onChange={handleOnchange}/>
    </label>
 

    <button className='Auth-Login'>LOGIN</button></div>
    <div><Link to="./Signup" className='Signup-Link'>Don't have an account? Sign Up</Link></div>
</form></div>

    </>
  )
}

export default Login