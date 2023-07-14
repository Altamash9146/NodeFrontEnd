import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Authentication.style.css'

const Signup = () => {

    const navi = useNavigate()
    const[formdata, setFormdata] = useState({FirstName:"", LastName:"",EmailAdress:"",password:""})

    const handleOnchange = (event)=>{
        const  {name, value} = event.target
        setFormdata({...formdata , [name]:value})
    }

    const handleOnSubmit  = (event)=>{
            event.preventDefault()           
            axios.post('http://localhost:9002/register',formdata)
            
            .then((response) => {
                if(response.data.token){
                    navi('/')
                    localStorage.setItem("token",response.data.token)
                    localStorage.setItem("FirstName",response.data.FirstName)
                }
                console.log(response.data);
            })
            .catch((error) => {
            console.error(error);
            });
            setFormdata({FirstName:"", LastName:"",EmailAdress:"",password:""}) 
    }

    
    return (
    <>
    <h1 className='Store-Heading'>The Siren</h1>

    <div className='Image-Container'>
    <img src='https://media.istockphoto.com/id/1139724620/vector/white-lock-icon-on-blue-circle-safety-sign-security-locked-button.jpg?s=612x612&w=0&k=20&c=xyEQH3pwbLhfOXN80F1TRp3qTaeinBz7_hwz1P1nHFs='
    alt='Not-Found' height={"50px"} width={"50px"}/></div>

    <h2  className='Authorisation-Heading'> Sign Up</h2>

    <div className='Signup-Form-Container'>
    <form onSubmit={handleOnSubmit} className='Signup-Form'>
        
        <label>
            First Name:</label>
        <input type='text' name='FirstName' placeholder='First Name' value={formdata.FirstName} required onChange={handleOnchange} />
        <br/>

        <label>
            Last Name:</label>
        <input type='text' name='LastName' placeholder='Last Name' value={formdata.LastName} required onChange={handleOnchange} />
          <br/>  

        <label>
            Email Address:</label>
        <input type='email' name='EmailAdress' placeholder='Email Address' value={formdata.EmailAdress} required onChange={handleOnchange}/>
        <br/>

        <label >
        Password:</label>
        <input type='password' name='password' placeholder='Password' value={formdata.password} required onChange={handleOnchange} />
        


    <button className='Auth-Signup'  >SIGN UP</button>
     <Link to="/Login" className='Login-Link'>Already have an account? Sign In</Link>
    </form>
    </div>

   


    </>
    )
    }

    export default Signup