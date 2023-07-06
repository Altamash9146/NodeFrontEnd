import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
const FitnessTopPost = () => {
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
  return (
   <>
      <div className="Fitness-Top-Post-Container">
    <h2><span  className="Fitness-Top-Post-Heading">Top</span> Post</h2>

{data.filter((item)=>item.cat ==='Fitness-Images').map((d,index)=>{
return(
< div key={index}>
<div >
<div>
<Link to={"/FitnessContent/Fitness8"}  className='Link-Text'><img src={d.img8} alt='Not-Found' className="Fitness-Top-post-Image-2"/></Link>
<Link to={"/FitnessContent/Fitness8"}  className='Link-Text'><h4 className="Fitness-Top-Post-Image-Name">{d.title8}</h4></Link>

  <div>
 <div className="Fitness-Top-Post-Image-Container">
 <Link to={"/FitnessContent/Fitness9"}  className='Link-Text'> <img src={d.img9}
  alt="Not-Found" className="Fitness-Top-Post-Image"/></Link>
  <Link to={"/FitnessContent/Fitness10"}  className='Link-Text'><img src={d.img10}
  alt="Not-Found" className="Fitness-Top-Post-Image"/></Link>
  <Link to={"/FitnessContent/Fitness11"}  className='Link-Text'><img src={d.img11}
  alt="Not-Found" className="Fitness-Top-Post-Image"/></Link>
     </div>

  <div className="Fitness-Top-Post-Data-Container">

<div>
<Link to={"/FitnessContent/Fitness9"}  className='Link-Text'><h4>{d.title9}</h4></Link>
 
</div>
<br/>

<div>
<Link to={"/FitnessContent/Fitness10"}  className='Link-Text'><h4>{d.title10}</h4></Link>
</div>   

<br/>
<div>
<Link to={"/FitnessContent/Fitness11"}  className='Link-Text'><h4>{d.title11}</h4></Link>
</div>
</div>

<div className="Fitness-Top-Post-Number-Container">
        <h1 className="Number">1</h1>
        <br/>
        <h1  className="Number">2</h1>
        <br/> 
        <h1  className="Number" >3</h1>
        <br/><br/> 
        <h1  className="Number">4</h1>

        </div>
</div>
</div>
</div>

<div className="Fitness-Advertisement-Container">
        <h4>Advertisement</h4>
  </div>

</div>

)
})}
</div>
    </>
  )
}

export default  FitnessTopPost