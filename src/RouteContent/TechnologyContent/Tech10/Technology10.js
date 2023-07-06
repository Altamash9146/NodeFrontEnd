import React ,{useEffect,useState}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import axios from "axios";

const  Tech10Content = ()=>{
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
    <div className="Tech10-Container">
 
         
{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Tech10-Heading">!!!{d.title10}!!!</h2>
        <Link to={"/Technology"}><button className="Tech10-Back-Button">Let's Explore More Technology</button></Link> 
        <div className="Tech10-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Tech10-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Tech10-Social-Media-Logo"/>
        </div>

        <div className="Tech10-Date-Container">
        <p className="Tech10-Dimitry">Dimitry Nozhenko</p>
        <p className="Tech10-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img10} alt="Not-Found" className="Tech10-Image"/>
        <div className="Tech10-Image-Name">Image:{d.title10}</div>
        <div className="Tech10-Para-Container">
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

export default Tech10Content