import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Bajrangi.style.css"

const  BajrangiBhaijanContent = ()=>{
    const [data,setData] = useState([])

  useEffect(()=>{
    Fetchdata()
  },[])

  const Fetchdata = async ()=>{
      try{
          const response = await axios.get(`http://localhost:9002/api/blog/Bollywood-Images`)
          setData(response.data)
      }

      catch(error){
        console.log(error);
      }
  }
return(
    <>
    <div className="BajrangiBhaijan-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="BajrangiBhaijan-Heading">!!!{d.title6}!!!</h2>
        <Link to={"/Bollywood"}><button className="BajrangiBhaijan-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="BajrangiBhaijan-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="BajrangiBhaijan-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="BajrangiBhaijan-Social-Media-Logo"/>
        </div>

        <div className="BajrangiBhaijan-Date-Container">
        <p className="BajrangiBhaijan-Dimitry">Dimitry Nozhenko</p>
        <p className="BajrangiBhaijan-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img6} alt="Not-Found" className="BajrangiBhaijan-Image"/>
        <div className="BajrangiBhaijan-Image-Name">Image:{d.title6}</div>
        <div className="BajrangiBhaijan-Para-Container">
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

export default BajrangiBhaijanContent