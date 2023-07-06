import React, { useState}  from "react";
import {  NavLink} from "react-router-dom";
import "./MobileN.css"

const MobileN = () =>{
const [open,setOpen] = useState(false)
const [show, setShow] = useState(false)

const togglenav = () =>{
    setOpen(!open)
    console.log(open,"Result");
//     console.log("YIIIIIIIIIi");
}

// const toggleBar = () =>{
//     setShow(prev=> !prev)
    
// }

return(
        <>
<div className="Top-Mobile-Adjuster">
<div className="Mobile-Border">
<h1 className="Heading"><span className="Vertical-Text">The</span>Siren</h1>
</div>


 <div className="Mobile-Menu-Container" onClick={togglenav}>
        <div className="line1"></div>
        <div className="line0"></div>
        <div className="line2"></div>
        <div className="line0"></div>
        <div className="line0"></div>
        <div className="line3"></div>
        </div>
        </div>

{open && ( <div className="Mobile-Navigation-Container" >
        <div onClick={togglenav}><NavLink to={"/"} activeclassname="active">Home</NavLink></div><hr/>
        <div onClick={togglenav}><NavLink to={"/Bollywood"} activeclassname="active">Bollywood</NavLink></div><hr/>
        <div onClick={togglenav}><NavLink to={"/Technology"} activeclassname="active">Technology</NavLink></div><hr/>
        <div onClick={togglenav}><NavLink to={"/Hollywood"} activeclassname="active">Hollywood</NavLink></div><hr/>
        <div onClick={togglenav}><NavLink to={"/Fitness"} activeclassname="active">Fitness</NavLink></div><hr/>
        <div onClick={togglenav}><NavLink to={"/Food"} activeclassname="active" >Food</NavLink></div>
        </div>)
  
}

        
        </>
    )
}
export default MobileN