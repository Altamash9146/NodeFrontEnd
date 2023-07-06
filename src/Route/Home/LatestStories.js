import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

const LatestStories = () =>{
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:9002/api/blog/Fitness-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
    return(
        <>
       
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div className="Latest-Stories-Container" key={item}>
        <h2><span className="Latest-Stories-Heading">Latest</span> Stories</h2>
        <div className="Latest-Stories-Name-Data-Container">
        <Link to={"/FitnessContent/Fitness5"} className='H2-Link-Text'><h2 className="Latest-Stories-Name">{d.title5}</h2></Link>
        <Link to={"/FitnessContent/Fitness6"} className='H2-Link-Text'><h2 className="Latest-Stories-Name">{d.title6}</h2></Link>
        <Link to={"/FitnessContent/Fitness7"} className='H2-Link-Text'><h2 className="Latest-Stories-Name">{d.title7}</h2></Link>
    </div>

    <div className="Latest-Stories-Data-Container">
        <Link to={"/FitnessContent/Fitness5"}  className='Link-Text '><div className="Latest-Stories-Data">{d.info5}
        <p>Travel/August 21 2017</p>
        </div></Link>
    
        <Link to={"/FitnessContent/Fitness6"}  className='Link-Text LSD2'><div className="Latest-Stories-Data">{d.info6}
        <p>Travel/August 21 2017</p>
        </div></Link>
   
        <Link to={"/FitnessContent/Fitness7"}  className='Link-Text LSD3'><div className="Latest-Stories-Data">{d.info7}
        <p>Travel/August 21 2017</p>
        </div></Link>
    
    </div>
    </div>
    )
})}
       
      
        </>
    )
}

export default LatestStories