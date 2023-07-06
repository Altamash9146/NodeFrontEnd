import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const FoodTopPost = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
      Fetchdata()
    },[])
  
    const Fetchdata = async ()=>{
        try{
            const response = await axios.get(`http://localhost:9002/api/blog/Food-Images`)
            setData(response.data)
        }
  
        catch(error){
          console.log(error);
        }
    }
  return (
   <>
      <div className="Food-Top-Post-Container">
    <h2><span  className="Food-Top-Post-Heading">Top</span> Post</h2>

{data.filter((item)=>item.cat ==='Food-Images').map((d,index)=>{
return(
<div key={index}>
<div>
<div>
<Link to={"/FoodContent/Food8"}  className='Link-Text'><img src={d.img8} alt='Not-Found' className="Food-Top-post-Image-2"/></Link>
<Link to={"/FoodContent/Food8"}  className='Link-Text'><h4 className="Food-Top-Post-Image-Name">{d.title8}</h4></Link>

  <div>
  <div className="Food-Top-Post-Image-Container">
  <Link to={"/FoodContent/Food9"}  className='Link-Text'><img src={d.img9}
  alt="Not-Found" className="Food-Top-Post-Image"/></Link>
  <Link to={"/FoodContent/Food10"}  className='Link-Text'><img src={d.img10}
  alt="Not-Found" className="Food-Top-Post-Image"/></Link>
  <Link to={"/FoodContent/Food11"}  className='Link-Text'><img src={d.img11}
  alt="Not-Found" className="Food-Top-Post-Image"/></Link>
     </div>

  <div className="Food-Top-Post-Data-Container">

<div>
<Link to={"/FoodContent/Food9"}  className='Link-Text'><h4>{d.title9}</h4></Link>
    

</div>
<br/>

<div>
<Link to={"/FoodContent/Food10"}  className='Link-Text'><h4>{d.title10}</h4></Link>
</div>   
<br/>

<div>
<Link to={"/FoodContent/Food11"}  className='Link-Text'><h4>{d.title11}</h4></Link>
</div>
</div>

<div className="Food-Top-Post-Number-Container">
        <h1 className="Number">1</h1>
   
        <h1  className="Number">2</h1>
      <br/>
        <h1  className="Number" >3</h1>
        <br/>
        <h1  className="Number">4</h1>

        </div>
</div>
</div>
</div>

<div className="Food-Advertisement-Container">
        <h4>Advertisement</h4>
  </div>

</div>

)
})}
</div>
    </>
  )
}

export default  FoodTopPost