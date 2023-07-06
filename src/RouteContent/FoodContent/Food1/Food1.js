import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Food1.style.css"
import { useState,useEffect } from "react";

const  Food1Content = ()=>{
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
    <div className="Food1-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Food1-Heading">!!!{d.title1}!!!</h2>
        <Link to={"/Food"}><button className="Food1-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Food1-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Food1-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Food1-Social-Media-Logo"/>
        </div>

        <div className="Food1-Date-Container">
        <p className="Food1-Dimitry">Dimitry Nozhenko</p>
        <p className="Food1-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img1} alt="Not-Found" className="Food1-Image"/>
        <div className="Food1-Image-Name">Image:{d.title1}</div>
        <div className="Food1-Para-Container">
        <p>{d.apara1}</p>
        <p>{d.apara2}</p>
        <p>{d.apara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Food1Content