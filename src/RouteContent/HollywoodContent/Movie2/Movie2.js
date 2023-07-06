import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie2.style.css"
import axios from "axios";

const  Movie2Content = ()=>{
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
    <div className="Movie2-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie2-Heading">!!!{d.title2}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie2-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie2-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie2-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie2-Social-Media-Logo"/>
        </div>

        <div className="Movie2-Date-Container">
        <p className="Movie2-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie2-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img2} alt="Not-Found" className="Movie2-Image"/>
        <div className="Movie2-Image-Name">Image:{d.title2}</div>
        <div className="Movie2-Para-Container">
        <p>{d.bpara1}</p>
        <p>{d.bpara2}</p>
        <p>{d.bpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie2Content