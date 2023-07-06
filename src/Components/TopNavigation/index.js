import React from "react";
import {  NavLink} from "react-router-dom";
import "./TopNavigation.style.css"

const TopNavigation = () =>{

    return(
        <>

<div className="Mobile-Navigation-Border"></div>
 
 <div className="Navigation-Container">
        <NavLink to={"/"} activeclassname="active">Home</NavLink>
        <NavLink to={"/Bollywood"} activeclassname="active">Bollywood</NavLink>
        <NavLink to={"/Technology"} activeclassname="active">Technology</NavLink>
        <NavLink to={"/Hollywood"} activeclassname="active">Hollywood</NavLink>
        <NavLink to={"/Fitness"} activeclassname="active">Fitness</NavLink>
        <NavLink to={"/Food"} activeclassname="active" >Food</NavLink>
        </div>
  

        {/* <hr className="Navigation-Horizontal-Line"/> */}
        </>
    )
}
export default TopNavigation