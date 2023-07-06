import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Secret.style.css"
import { useState,useEffect } from "react";

const  SecretContent = ()=>{
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
    <div className="Secret-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Secret-Heading">!!!{d.title5}!!!</h2>
        <Link to={"/Bollywood"}><button className="Secret-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Secret-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Secret-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Secret-Social-Media-Logo"/>
        </div>

        <div className="Secret-Date-Container">
        <p className="Secret-Dimitry">Dimitry Nozhenko</p>
        <p className="Secret-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img5} alt="Not-Found" className="Secret-Image"/>
        <div className="Secret-Image-Name">Image:{d.title5}</div>
        <div className="Secret-Para-Container">
        <p>{d.epara1}</p>
        <p>{d.epara2}</p>
        <p>{d.epara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default SecretContent