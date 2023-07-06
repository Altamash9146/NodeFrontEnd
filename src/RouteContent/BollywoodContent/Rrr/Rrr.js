import axios from "axios";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Rrr.style.css"
import { useEffect,useState } from "react";

const  RrrContent = ()=>{
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
    <div className="Rrr-Container">
 
         
{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Rrr-Heading">!!!{d.title4}!!!</h2>
        <Link to={"/Bollywood"}><button className="Rrr-Back-Button">Let's Explore More Bollywood</button></Link> 
        <div className="Rrr-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Rrr-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Rrr-Social-Media-Logo"/>
        </div>

        <div className="Rrr-Date-Container">
        <p className="Rrr-Dimitry">Dimitry Nozhenko</p>
        <p className="Rrr-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img4} alt="Not-Found" className="Rrr-Image"/>
        <div className="Rrr-Image-Name">Image:{d.title4}</div>
        <div className="Rrr-Para-Container">
        <p>{d.dpara1}</p>
        <p>{d.dpara2}</p>
        <p>{d.dpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default RrrContent