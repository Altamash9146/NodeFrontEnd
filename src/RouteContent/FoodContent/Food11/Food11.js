import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Food11.style.css"
import axios from "axios";

const  Food11Content = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:9002/api/blog/Food-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Food11-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Food11-Heading">!!!{d.title11}!!!</h2>
        <Link to={"/Food"}><button className="Food11-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Food11-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Food11-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Food11-Social-Media-Logo"/>
        </div>

        <div className="Food11-Date-Container">
        <p className="Food11-Dimitry">Dimitry Nozhenko</p>
        <p className="Food11-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img11} alt="Not-Found" className="Food11-Image"/>
        <div className="Food11-Image-Name">Image:{d.title11}</div>
        <div className="Food11-Para-Container">
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

export default Food11Content