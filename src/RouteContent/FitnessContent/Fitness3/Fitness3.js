import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness3.style.css"
import { useState,useEffect } from "react";

const  Fitness3Content = ()=>{
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
    <div className="Fitness3-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness3-Heading">!!!{d.title3}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness3-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness3-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness3-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness3-Social-Media-Logo"/>
        </div>

        <div className="Fitness3-Date-Container">
        <p className="Fitness3-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness3-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img3} alt="Not-Found" className="Fitness3-Image"/>
        <div className="Fitness3-Image-Name">Image:{d.title3}</div>
        <div className="Fitness3-Para-Container">
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

export default Fitness3Content