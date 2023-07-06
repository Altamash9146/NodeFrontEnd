import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie7.style.css"
import axios from "axios";

const  Movie7Content = ()=>{
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
    <div className="Movie7-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie7-Heading">!!!{d.title7}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie7-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie7-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie7-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie7-Social-Media-Logo"/>
        </div>

        <div className="Movie7-Date-Container">
        <p className="Movie7-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie7-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img7} alt="Not-Found" className="Movie7-Image"/>
        <div className="Movie7-Image-Name">Image:{d.title7}</div>
        <div className="Movie7-Para-Container">
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

export default Movie7Content