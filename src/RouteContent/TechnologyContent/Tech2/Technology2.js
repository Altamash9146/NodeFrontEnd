import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import axios from "axios";

const  Tech2Content = ()=>{
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
    <div className="Tech2-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech2-Heading">!!!{d.title2}!!!</h2>
        <Link to={"/Technology"}><button className="Tech2-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech2-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Tech2-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Tech2-Social-Media-Logo"/>
        </div>

        <div className="Tech2-Date-Container">
        <p className="Tech2-Dimitry">Dimitry Nozhenko</p>
        <p className="Tech2-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img2} alt="Not-Found" className="Tech2-Image"/>
        <div className="Tech2-Image-Name">Image:{d.title2}</div>
        <div className="Tech2-Para-Container">
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

export default Tech2Content