import React, { useEffect,useState } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';

const BollywoodData = () => {

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
<div className='Background-Color'></div>
<div className='Bollywood-Container'>
<h2 className="Bollywood-Heading">Bollywood</h2>

{data.filter((item)=>item.cat ==='Bollywood-Images').map((d,index)=>{
  return(
 <div key={index}>
    <div className="Bollywood-Image-Container">
    <Link to={"/BollywoodContent/Dangal"} className='Link-Text'><img src={d.img1} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/Bahubali"} className='Link-Text'><img src={d.img2} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/kgf"} className='Link-Text'><img src={d.img3} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/Rrr"} className='Link-Text'><img src={d.img4} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/SecretSuperstar"} className='Link-Text'><img src={d.img5} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/BajrangiBhaijan"} className='Link-Text'><img src={d.img6} alt='Not-Found'className='Bollywood-Image'/></Link>
    <Link to={"/BollywoodContent/Robot"} className='Link-Text'><img src={d.img7} alt='Not-Found'className='Bollywood-Image'/></Link>
    </div>

    <div className="Bollywood-Data-Container">

    <div>
    <Link to={"/BollywoodContent/Dangal"} className='H2-Link-Text'><h2>{d.title1}</h2></Link>
    <Link to={"/BollywoodContent/Dangal"} className='Link-Text'><div>{d.info1}</div></Link>
    </div>
   <br/> <br/> <br/>

    <div className='BD'>
    <Link to={"/BollywoodContent/Bahubali"} className='H2-Link-Text'><h2>{d.title2}</h2></Link>
    <Link to={"/BollywoodContent/Bahubali"} className='Link-Text'><div >{d.info2}</div></Link>
    </div>
    <br/><br/><br/><br/>

    <div className='KD'>
    <Link to={"/BollywoodContent/kgf"} className='H2-Link-Text'><h2>{d.title3}</h2></Link>
    <Link to={"/BollywoodContent/kgf"} className='Link-Text'><div>{d.info3}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
    <br/>

    <div className='RD'>
    <Link to={"/BollywoodContent/Rrr"} className='H2-Link-Text'><h2>{d.title4}</h2></Link>
    <Link to={"/BollywoodContent/Rrr"} className='Link-Text'><div>{d.info4}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
    <br/> 

    <div className='SD'>
    <Link to={"/BollywoodContent/SecretSuperstar"} className='H2-Link-Text'><h2>{d.title5}</h2></Link>
    <Link to={"/BollywoodContent/SecretSuperstar"} className='Link-Text'><div>{d.info5}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
    <br/>

    <div className='BBD'>
    <Link to={"/BollywoodContent/BajrangiBhaijan"} className='H2-Link-Text'><h2>{d.title6}</h2></Link>
    <Link to={"/BollywoodContent/BajrangiBhaijan"} className='Link-Text'><div>{d.info6}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
    <br/>

    <div className='D2'>
    <Link to={"/HollywoodContent/Robot"} className='H2-Link-Text'><h2>{d.title7}</h2></Link>
    <Link to={"/BollywoodContent/Robot"} className='Link-Text'><div>{d.info7}</div></Link>
    <p>Travel/August 21 2017</p>
    </div>
  

    </div>
    </div>
  )
})
}
</div>
</>
  )
}

export default BollywoodData