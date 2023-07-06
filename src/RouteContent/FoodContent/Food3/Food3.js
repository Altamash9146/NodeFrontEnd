import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Food3.style.css"
import axios from "axios";

const  Food3Content = ()=>{
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
    <div className="Food3-Container">
 
         
{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Food3-Heading">!!!{d.title3}!!!</h2>
        <Link to={"/Food"}><button className="Food3-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Food3-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Food3-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Food3-Social-Media-Logo"/>
        </div>

        <div className="Food3-Date-Container">
        <p className="Food3-Dimitry">Dimitry Nozhenko</p>
        <p className="Food3-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img3} alt="Not-Found" className="Food3-Image"/>
        <div className="Food3-Image-Name">Image:{d.title3}</div>
        <div className="Food3-Para-Container">
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

export default Food3Content