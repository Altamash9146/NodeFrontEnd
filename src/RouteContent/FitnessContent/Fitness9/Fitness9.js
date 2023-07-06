import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness9.style.css"
import axios from "axios";

const  Fitness9Content = ()=>{
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
    <div className="Fitness9-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness9-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness9-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness9-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness9-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness9-Social-Media-Logo"/>
        </div>

        <div className="Fitness9-Date-Container">
        <p className="Fitness9-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness9-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Fitness9-Image"/>
        <div className="Fitness9-Image-Name">Image:{d.title9}</div>
        <div className="Fitness9-Para-Container">
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

export default Fitness9Content