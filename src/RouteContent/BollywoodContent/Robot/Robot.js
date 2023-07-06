import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Robot.style.css"


const  RobotContent = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:9002/api/blog/Bollywood-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Robot-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Robot-Heading">!!!{d.title7}!!!</h2>
        <Link to={"/Bollywood"}><button className="Robot-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Bahubali-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Bahubali-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Bahubali-Social-Media-Logo"/>
        </div>

        <div className="Robot-Date-Container">
        <p className="Robot-Dimitry">Dimitry Nozhenko</p>
        <p className="Robot-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img7} alt="Not-Found" className="Robot-Image"/>
        <div className="Robot-Image-Name">Image:{d.title7}</div>
        <div className="Robot-Para-Container">
        <p>{d.gpara1}</p>
        <p>{d.gpara2}</p>
        <p>{d.gpara3}</p>
        </div>
        </div>
    )
 })}    
        
       
    </div>
    </>
)
}

export default RobotContent