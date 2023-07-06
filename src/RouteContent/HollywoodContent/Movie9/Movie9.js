import React ,{useState, useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie9.style.css"
import axios from "axios"

const  Movie9Content = ()=>{
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
    <div className="Movie9-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie9-Heading">!!!{d.title9}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie9-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie9-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie9-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie9-Social-Media-Logo"/>
        </div>

        <div className="Movie9-Date-Container">
        <p className="Movie9-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie9-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img9} alt="Not-Found" className="Movie9-Image"/>
        <div className="Movie9-Image-Name">Image:{d.title9}</div>
        <div className="Movie9-Para-Container">
        <p>{d.ipara1}</p>
        <p>{d.ipara2}</p>
        <p>{d.ipara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie9Content