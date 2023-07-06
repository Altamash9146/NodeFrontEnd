import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import axios from "axios";

const  Tech5Content = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:9002/api/blog/Technology-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
return(
    <>
    <div className="Tech5-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech5-Heading">!!!{d.title5}!!!</h2>
        <Link to={"/Technology"}><button className="Tech5-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech5-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Tech5-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Tech5-Social-Media-Logo"/>
        </div>

        <div className="Tech5-Date-Container">
        <p className="Tech5-Dimitry">Dimitry Nozhenko</p>
        <p className="Tech5-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img5} alt="Not-Found" className="Tech5-Image"/>
        <div className="Tech5-Image-Name">Image:{d.title5}</div>
        <div className="Tech5-Para-Container">
        <p>{d.epara1}</p>
        <p>{d.epara2}</p>
        <p>{d.epara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Tech5Content