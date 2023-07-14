import React, { useEffect, useState } from "react";
import "./Logo.style.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  // const name = localStorage.getItem("FirstName")
  // console.log(name);

  const navi = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

              useEffect(()=>{
                const data = localStorage.getItem("token")
                      if(data){
                        setIsLoggedIn(true)
                      }
              },[isLoggedIn])

  const handleLogin = ()=>{
      navi('/login')
  }

  const handleSignup = ()=>{
    navi('/signup')
  }

  const handleLogout = ()=>{
    localStorage.clear()
    window.location.reload()
  }


  return (
    <>
    <div className="border">
      <h1 className="Heading">
          <span className="Vertical-Text">The</span>Siren
        </h1>
        <div>
          {isLoggedIn && 
          <>
            <button className="Logo-Logout-Button"  onClick={handleLogout}>
                Logout 
            </button>
            {/* <h3 className="Name-Container">Welcome, <span className="Name">{name}</span></h3> */}
            </>
}
          {!isLoggedIn && 
          <>
            <button className="Logo-Login-Button" onClick={handleLogin}>
                  Login</button>
            <button className="Logo-Signup-Button"  onClick={handleSignup}>
                  Signup
                </button>
                </>
}

           
         
        </div>
      </div>
    </>
  );
};

export default Logo;
