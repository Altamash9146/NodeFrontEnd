import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BollywoodTopPost = () => {

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
  return (
   <>
      <div className="Bollywood-Top-Post-Container">
    <h2><span  className="Bollywood-Top-Post-Heading">Top</span> Post</h2>

{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,item)=>{
return(
<div key={item}>
<div>
<div>
  <Link to={'/BollywoodContent/Sultan'} className='Link-Text'><img src={d.img8} alt='Not-Found' className="Bollywood-Top-post-Image-2"/></Link>
  <Link to={'/BollywoodContent/Sultan'} className='Link-Text'><h4 className="Bollywood-Top-Post-Image-Name">{d.title8}</h4></Link>

  <div>
  <div className="Bollywood-Top-Post-Image-Container">
  <Link to={'/BollywoodContent/Sanju'}><img src={d.img9}
  alt="Not-Found" className="Bollywood-Top-Post-Image"/></Link>
  <Link to={'/BollywoodContent/War'}><img src={d.img10}
  alt="Not-Found" className="Bollywood-Top-Post-Image"/></Link>
  <Link to={'/BollywoodContent/Sahoo'}><img src={d.img11}
  alt="Not-Found" className="Bollywood-Top-Post-Image"/></Link>
     </div>

  <div className="Bollywood-Top-Post-Data-Container">

<div>
<Link to={'/BollywoodContent/Sanju'} className='Link-Text'><h4>{d.title9}<div>Ranbir Kapoor </div><div>Plays...</div></h4></Link>
   </div>


<div>
<Link to={'/BollywoodContent/War'} className='Link-Text'><h4>{d.title10}<div>The movie</div><div>Hri...</div></h4></Link>
</div>   


<div>
<Link to={'/BollywoodContent/Sahoo'} className='Link-Text'><h4>{d.title11}<div>When it</div><div>Comes...</div></h4></Link>
</div>
</div>

<div className="Bollywood-Top-Post-Number-Container">
        <h1 className="Number">1</h1>
        <br/>  <br/>
        <h1  className="Number">2</h1>
        <br/>  <br/>
        <h1  className="Number" >3</h1>
        <br/>
        <h1  className="Number">4</h1>

        </div>
</div>
</div>
</div>

<div className="Bollywood-Advertisement-Container">
        <h4>Advertisement</h4>
  </div>

</div>

)
})}
</div>
    </>
  )
}

export default  BollywoodTopPost