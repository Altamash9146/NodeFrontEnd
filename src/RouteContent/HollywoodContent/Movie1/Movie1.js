import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie1.style.css"
import axios from "axios";

const  Movie1Content = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:9002/api/blog/Hollywood-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Movie1-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie1-Heading">!!!{d.title1}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie1-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie1-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie1-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie1-Social-Media-Logo"/>
        </div>

        <div className="Movie1-Date-Container">
        <p className="Movie1-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie1-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img1} alt="Not-Found" className="Movie1-Image"/>
        <div className="Movie1-Image-Name">Image:{d.title1}</div>
        <div className="Movie1-Para-Container">
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

export default Movie1Content