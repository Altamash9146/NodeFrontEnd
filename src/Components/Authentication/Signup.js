import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Authentication.style.css'

const Signup = () => {

    const[formdata, setFormdata] = useState({FirstName:"", LastName:"",EmailAdress:"",Password:""})
    // const[formSubmission, setFormsubmission] = useState([])

    const handleOnchange = (event)=>{
        const  {name, value} = event.target
        setFormdata({...formdata , [name]:value})
    }

    const handleOnSubmit  = (event)=>{
            event.preventDefault()
            // setFormsubmission([...formSubmission, formdata])
            setFormdata({FirstName:"", LastName:"",EmailAdress:"",Password:""}) 
            axios.post('http://localhost:9002/register',formdata)
            .then((response) => {
            console.log(response.data);
            })
            .catch((error) => {
            console.error(error);
            });

    }

    
    return (
    <>
    <h1 className='Store-Heading'>All in One Store</h1>

    <div className='Image-Container'>
    <img src='https://media.istockphoto.com/id/1139724620/vector/white-lock-icon-on-blue-circle-safety-sign-security-locked-button.jpg?s=612x612&w=0&k=20&c=xyEQH3pwbLhfOXN80F1TRp3qTaeinBz7_hwz1P1nHFs='
    alt='Not-Found' height={"50px"} width={"50px"}/></div>

    <h2  className='Authorisation-Heading'> Sign Up</h2>

    <div className='Signup-Form-Container'>
    <form onSubmit={handleOnSubmit} className='Signup-Form'>
        
        <label>
            First Name:
        <input type='text' name='FirstName' placeholder='First Name' value={formdata.FirstName} required onChange={handleOnchange}/>
        </label><br/>

        <label>
            Last Name:
        <input type='text' name='LastName' placeholder='Last Name' value={formdata.LastName} required onChange={handleOnchange}/>
        </label>  <br/>  

        <label>
            Email Address:
        <input type='email' name='EmailAdress' placeholder='Email Address' value={formdata.EmailAdress} required onChange={handleOnchange}/>
        </label><br/>

        <label>
        Password:
        <input type='password' name='Password' placeholder='Password' value={formdata.Password} required onChange={handleOnchange}/>
        </label>


    <button className='Auth-Signup'  >SIGN UP</button>
     <Link to="/Login" className='Login-Link'>Already have an account? Sign In</Link>
    </form>
    </div>

   


    </>
    )
    }

    export default Signup