import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie10.style.css"
import axios from "axios";

const  Movie10Content = ()=>{
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
    <div className="Movie10-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie10-Heading">!!!{d.title10}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie10-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie10-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie10-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie10-Social-Media-Logo"/>
        </div>

        <div className="Movie10-Date-Container">
        <p className="Movie10-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie10-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img10} alt="Not-Found" className="Movie10-Image"/>
        <div className="Movie10-Image-Name">Image:{d.title10}</div>
        <div className="Movie10-Para-Container">
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

export default Movie10Content