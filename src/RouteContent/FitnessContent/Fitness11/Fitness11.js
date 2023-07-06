import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness11.style.css"
import axios from "axios";

const  Fitness11Content = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:9002/api/blog/Fitness-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Fitness11-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness11-Heading">!!!{d.title11}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness11-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness11-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness11-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness11-Social-Media-Logo"/>
        </div>

        <div className="Fitness11-Date-Container">
        <p className="Fitness11-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness11-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img11} alt="Not-Found" className="Fitness11-Image"/>
        <div className="Fitness11-Image-Name">Image:{d.title11}</div>
        <div className="Fitness11-Para-Container">
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

export default Fitness11Content