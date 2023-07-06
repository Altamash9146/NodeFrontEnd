import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Sahoo.style.css"
import { useState,useEffect } from "react";

const  SahooContent = ()=>{
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
    <div className="Sahoo-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Sahoo-Heading">!!!{d.title11}!!!</h2>
        <Link to={"/Bollywood"}><button className="Sahoo-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Sahoo-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Sahoo-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Sahoo-Social-Media-Logo"/>
        </div>

        <div className="Sahoo-Date-Container">
        <p className="Sahoo-Dimitry">Dimitry Nozhenko</p>
        <p className="Sahoo-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img11} alt="Not-Found" className="Sahoo-Image"/>
        <div className="Sahoo-Image-Name">Image:{d.title11}</div>
        <div className="Sahoo-Para-Container">
        <p>{d.kpara1}</p>
        <p>{d.kpara2}</p>
        <p>{d.kpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default SahooContent