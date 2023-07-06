import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Kgf.style.css"


const  KgfContent = ()=>{
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
    <div className="Kgf-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Kgf-Heading">!!!{d.title3}!!!</h2>
        <Link to={"/Bollywood"}><button className="Kgf-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Kgf-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Kgf-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Kgf-Social-Media-Logo"/>
        </div>

        <div className="Kgf-Date-Container">
        <p className="Kgf-Dimitry">Dimitry Nozhenko</p>
        <p className="Kgf-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img3} alt="Not-Found" className="Kgf-Image"/>
        <div className="Kgf-Image-Name">Image:{d.title3}</div>
        <div className="Kgf-Para-Container">
        <p>{d.cpara1}</p>
        <p>{d.cpara2}</p>
        <p>{d.cpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default KgfContent