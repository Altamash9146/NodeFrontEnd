import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Food6.style.css"
import axios from "axios";

const  Food6Content = ()=>{
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
    <div className="Food6-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Food6-Heading">!!!{d.title6}!!!</h2>
        <Link to={"/Food"}><button className="Food6-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Food6-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Food6-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Food6-Social-Media-Logo"/>
        </div>

        <div className="Food6-Date-Container">
        <p className="Food6-Dimitry">Dimitry Nozhenko</p>
        <p className="Food6-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="Food6-Image"/>
        <div className="Food6-Image-Name">Image:{d.title6}</div>
        <div className="Food6-Para-Container">
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

export default Food6Content