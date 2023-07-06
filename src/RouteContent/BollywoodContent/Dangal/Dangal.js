import axios from "axios"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Dangal.style.css"

const  DangalContent = ()=>{
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
    <div className="Dangal-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Dangal-Heading">!!!{d.title1}!!!</h2>
        <Link to={"/Bollywood"}><button className="Dangal-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Bahubali-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Bahubali-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Bahubali-Social-Media-Logo"/>
        </div>

        <div className="Dangal-Date-Container">
        <p className="Dangal-Dimitry">Dimitry Nozhenko</p>
        <p className="Dangal-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img1} alt="Not-Found" className="Dangal-Image"/>
        <div className="Dangal-Image-Name">Image:{d.title1}</div>
        <div className="Dangal-Para-Container">
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

export default DangalContent