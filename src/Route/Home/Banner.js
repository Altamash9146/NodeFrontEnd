import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Banner = () =>{
    const [data,setData] = useState([])
    const [Techdata,setTechData] = useState([])

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

    useEffect(()=>{
        Fetchtechdata()
      },[])
    
      const Fetchtechdata = async ()=>{
          try{
              const response = await axios.get(`http://localhost:9002/api/blog/Technology-Images`)
              setTechData(response.data)
          }
    
          catch(error){
            console.log(error);
          }
      }

    return(
        <div className="Banner-Main-Container">
        <div className="Banner-Container">
      
{data.filter((item)=>item.cat ==="Hollywood-Images").map((d,item)=>{
    return(
        <div key={item}>
        <Link to={"/HollywoodContent/Movie7"} className='Link-Text'><img src={d.img7} 
         className="Banner-Img-1" alt="Not-Found"/></Link>

        <div className="Banner-Img-Text">
        <div >
            <h2>THE FLASH OFFICIAL TRAILER 2</h2>
            <p>Travel/August 21 2017</p>
        </div> 
        </div>
      </div>
    )
})}
       
       {Techdata.filter((item)=>item.cat ==="Technology-Images").map((d,item)=>{
    return(
      
        <div key={item}> 
        <Link to={"/TechnologyContent/Tech6"} className='Link-Text'><img src={d.img6}
         className="Banner-Img-2" alt="Not-Found"/></Link>

        <div className="Banner-Img2-Text">
        <h4>I hope that you’ll still  <div>want to read my stuff</div></h4>
        <p>Travel/August 21 2017</p>
        </div> 

        <Link to={"/TechnologyContent/Tech7"} className='Link-Text'><img src={d.img7}
         className="Banner-Img-3" alt="Not-Found"/></Link>
    
        <div className="Banner-Img3-Text">
               <h4>My dream of never<div>having to drive again is</div></h4> 
               <p>Travel/August 21 2017</p>
        </div> 

        </div>
    
    )
})}
       </div>
        </div>
    )
}

export default Banner