import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness10.style.css"
import axios from "axios";

const  Fitness10Content = ()=>{
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
    <div className="Fitness10-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness10-Heading">!!!{d.title10}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness10-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness10-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness10-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness10-Social-Media-Logo"/>
        </div>

        <div className="Fitness10-Date-Container">
        <p className="Fitness10-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness10-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img10} alt="Not-Found" className="Fitness10-Image"/>
        <div className="Fitness10-Image-Name">Image:{d.title10}</div>
        <div className="Fitness10-Para-Container">
        <p>{d.jpara1}</p>
        <p>{d.jpara2}</p>
        <p>{d.jpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness10Content