import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie6.style.css"
import axios from "axios";

const  Movie6Content = ()=>{
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
    <div className="Movie6-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie6-Heading">!!!{d.title6}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie6-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie6-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie6-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie6-Social-Media-Logo"/>
        </div>

        <div className="Movie6-Date-Container">
        <p className="Movie6-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie6-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="Movie6-Image"/>
        <div className="Movie6-Image-Name">Image:{d.title6}</div>
        <div className="Movie6-Para-Container">
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

export default Movie6Content