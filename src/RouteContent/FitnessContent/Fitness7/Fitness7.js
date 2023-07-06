import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness7.style.css"
import { useState,useEffect } from "react";

const  Fitness7Content = ()=>{
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
    <div className="Fitness7-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness7-Heading">!!!{d.title7}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness7-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness7-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness7-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness7-Social-Media-Logo"/>
        </div>

        <div className="Fitness7-Date-Container">
        <p className="Fitness7-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness7-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img7} alt="Not-Found" className="Fitness7-Image"/>
        <div className="Fitness7-Image-Name">Image:{d.title7}</div>
        <div className="Fitness7-Para-Container">
        <p>{d.gpara1}</p>
        <p>{d.gpara2}</p>
        <p>{d.gpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness7Content