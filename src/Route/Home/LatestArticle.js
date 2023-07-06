import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const LatestArticle = ()=>{
    const [data,setData] = useState([])
    const [fitnessData, setfitnessData] = useState([])

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

    useEffect(()=>{
        FetchFitnessdata()
      },[])
    
      const FetchFitnessdata = async ()=>{
          try{
              const response = await axios.get(`http://localhost:9002/api/blog/Fitness-Images`)
              setfitnessData(response.data)
          }
    
          catch(error){
            console.log(error);
          }
      }
  
    return(
        <>
       
{data.filter((item)=> item.cat ==='Bollywood-Images').map((d,item)=>{

    return(
       
        <div className="Latest-Article-Container" key={item}>

        <h2><span className="Latest-Article-Heading">Latest</span> Article</h2>

        <div className="Latest-Article-Image-Container" >
        <Link to={"/BollywoodContent/BajrangiBhaijan"} className='Link-Text'><img src={d.img6}
        alt="Not-Found" className="Latest-Article-Image"/></Link>
        <Link to={"/BollywoodContent/Robot"} className='Link-Text'><img src={d.img7}
        alt="Not-Found" className="Latest-Article-Image"/></Link>
        <Link to={"/BollywoodContent/kgf"} className='Link-Text Kgf'><img src={d.img3}
        alt="Not-Found" className="Latest-Article-Image"/></Link>
        <Link to={"/BollywoodContent/Bahubali"} className='Link-Text Bahubali'><img src={d.img2}
        alt="Not-Found" className="Latest-Article-Image"/></Link>

        </div>

        <div className="Latest-Article-Data-Container">

        <div>
        <Link to={"/BollywoodContent/BajrangiBhaijan"} className='H2-Link-Text'><h2>{d.title6}</h2></Link>
        <Link to={"/BollywoodContent/BajrangiBhaijan"} className='Link-Text'><div>{d.info6}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>
        <br/>  <br/>

        <div>
        <Link to={"/HollywoodContent/Robot"} className='H2-Link-Text'><h2>{d.title7}</h2></Link>
        <Link to={"/BollywoodContent/Robot"} className='Link-Text'><div>{d.info7}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>
        <br/>   <br/>   

        <div>
        <Link to={"/BollywoodContent/kgf"} className='H2-Link-Text'><h2>{d.title3}</h2></Link>
         <Link to={"/BollywoodContent/kgf"} className='Link-Text'><div>{d.info3}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>
      

        <div>
        <Link to={"/BollywoodContent/Bahubali"} className='H2-Link-Text'><h2>{d.title2}</h2></Link>
         <Link to={"/BollywoodContent/Bahubali"} className='Link-Text'><div >{d.info2}</div></Link>
            <p>Travel/August 21 2017</p>
        </div>

        </div>

         </div>
     

     
    )
})}

            {fitnessData.filter((items)=> items.cat === 'Fitness-Images').map((a,index)=>{
    return(
<div key={index}>
<Link to={"/FitnessContent/Fitness1"} className='Link-Text'><img src={a.img1} alt="Not-Found" className="Top-post-Image"/></Link>
</div>

    )
})}

        <div className="Advertisement-Container">
        <h4>Advertisement</h4>
         </div>

        </>
    )
}

export default LatestArticle