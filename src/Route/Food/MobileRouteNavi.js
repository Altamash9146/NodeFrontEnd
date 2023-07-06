import React, { useState}  from "react";
import {  NavLink} from "react-router-dom";

const MobileRoute = () =>{
const [open,setopen] = useState(true)

const togglenav = () =>{
    setopen(!open)
}

    return(
        <>

<div className="Mobile-Route-Border">
        <h1 className="MHeading"><span className="MVertical-Text">The</span>Siren</h1></div>

 <div className="Mobile-Route-Menu-Container" onClick={togglenav}>
        <div className="line1" onClick={togglenav}></div>
        <div className="line0" onClick={togglenav}></div>
        <div className="line2" onClick={togglenav}></div>
        <div className="line0" onClick={togglenav}></div>
        <div className="line0" onClick={togglenav}></div>
        <div className="line3" onClick={togglenav}></div>
        </div>

{open && <div className="Mobile-Route-Navigation-Container"  onClick={togglenav}>
        <NavLink to={"/"} activeclassname="active">Home</NavLink><hr/>
        <NavLink to={"/Bollywood"} activeclassname="active">Bollywood</NavLink><hr/>
        <NavLink to={"/Technology"} activeclassname="active">Technology</NavLink><hr/>
        <NavLink to={"/Hollywood"} activeclassname="active">Hollywood</NavLink><hr/>
        <NavLink to={"/Fitness"} activeclassname="active">Fitness</NavLink><hr/>
        <NavLink to={"/Food"} activeclassname="active" >Food</NavLink>
        </div>
  
}

        {/* <hr className="Navigation-Horizontal-Line"/> */}
        
        </>
    )
}
export default MobileRoute