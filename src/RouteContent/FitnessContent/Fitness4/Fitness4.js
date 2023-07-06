import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness4.style.css"
import { useState,useEffect } from "react";

const  Fitness4Content = ()=>{
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
    <div className="Fitness4-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness4-Heading">!!!{d.title4}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness4-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness4-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness4-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness4-Social-Media-Logo"/>
        </div>

        <div className="Fitness4-Date-Container">
        <p className="Fitness4-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness4-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img4} alt="Not-Found" className="Fitness4-Image"/>
        <div className="Fitness4-Image-Name">Image:{d.title4}</div>
        <div className="Fitness4-Para-Container">
        <p>{d.dpara1}</p>
        <p>{d.dpara2}</p>
        <p>{d.dpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness4Content