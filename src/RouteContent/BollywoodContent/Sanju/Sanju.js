import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Sanju.style.css"
import { useState,useEffect } from "react";

const  SanjuContent = ()=>{
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
    <div className="Sanju-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Sanju-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Bollywood"}><button className="Sanju-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Sanju-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Sanju-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Sanju-Social-Media-Logo"/>
        </div>

        <div className="Sanju-Date-Container">
        <p className="Sanju-Dimitry">Dimitry Nozhenko</p>
        <p className="Sanju-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Sanju-Image"/>
        <div className="Sanju-Image-Name">Image:{d.title9}</div>
        <div className="Sanju-Para-Container">
        <p>{d.ipara1}</p>
        <p>{d.ipara2}</p>
        <p>{d.ipara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default SanjuContent