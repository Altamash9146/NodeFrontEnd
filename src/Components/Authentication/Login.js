import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Authentication.style.css'

const Login = () => {

    const[formdata, setFormdata] = useState({EmailAdress:"",Password:""})
    const[formSubmission, setFormsubmission] = useState([])
    // const [LoggedIn, setLoggedIn] = useState(false)

    const handleOnchange = (event)=>{
        const  {name, value} = event.target
        setFormdata({...formdata , [name]:value})
    }

    const handleOnSubmit  = (event)=>{
            event.preventDefault()
            setFormsubmission([...formSubmission, formdata])
            setFormdata({EmailAdress:"",Password:""}) 

            //Sending the Login request//
             axios.post('http://localhost:9002/login?email=' + formdata.EmailAdress + '&password=' + formdata.Password)
            .then((response) => {
            console.log(response.data);
            // setLoggedIn(true)
            })
            .catch((error) => {
            console.error(error);
            });

    }

  return (
    <>
    
    <h1 className='Store-Heading'>All in One Store</h1>

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
    <input type='password' name='Password' placeholder='Password' value={formdata.Password} required onChange={handleOnchange}/>
    </label>
 

    <button className='Auth-Login'>LOGIN</button></div>
    <div><Link to="./Signup" className='Signup-Link'>Don't have an account? Sign Up</Link></div>
</form></div>

    </>
  )
}

export default Login