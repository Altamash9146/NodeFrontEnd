import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness6.style.css"
import { useState,useEffect } from "react";

const  Fitness6Content = ()=>{
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
    <div className="Fitness6-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness6-Heading">!!!{d.title6}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness6-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness6-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness6-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness6-Social-Media-Logo"/>
        </div>

        <div className="Fitness6-Date-Container">
        <p className="Fitness6-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness6-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="Fitness6-Image"/>
        <div className="Fitness6-Image-Name">Image:{d.title6}</div>
        <div className="Fitness6-Para-Container">
        <p>{d.fpara1}</p>
        <p>{d.fpara2}</p>
        <p>{d.fpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness6Content