import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const HollywoodData = () => {

    const [data,setData] = useState([])

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

  
return (
<>
<div className='Hollywood-Container'>
<h2 className="Hollywood-Heading">Hollywood</h2>

{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
  return(
 <div key={item}>
    <div className="Hollywood-Image-Container">
    <Link to={"/HollywoodContent/Movie1"} className='Link-Text'> <img src={d.img1} alt='Not-Found'className='Hollywood-Image'/></Link>
    <Link to={"/HollywoodContent/Movie2"} className='Link-Text H2'> <img src={d.img2} alt='Not-Found'className='Hollywood-Image'/></Link>
    <Link to={"/HollywoodContent/Movie3"} className='Link-Text H3'> <img src={d.img3} alt='Not-Found'className='Hollywood-Image'/></Link>
    <Link to={"/HollywoodContent/Movie4"} className='Link-Text H4'> <img src={d.img4} alt='Not-Found'className='Hollywood-Image'/></Link>
    <Link to={"/HollywoodContent/Movie5"} className='Link-Text H5'> <img src={d.img5} alt='Not-Found'className='Hollywood-Image'/></Link>
    <Link to={"/HollywoodContent/Movie6"} className='Link-Text H6'> <img src={d.img6} alt='Not-Found'className='Hollywood-Image'/></Link>
    <Link to={"/HollywoodContent/Movie7"} className='Link-Text H7'> <img src={d.img7} alt='Not-Found'className='Hollywood-Image'/></Link>
    </div>

    <div className="Hollywood-Data-Container">

    <div>
    <Link to={"/HollywoodContent/Movie1"} className='H2-Link-Text'><h3>{d.title1}</h3></Link>
    <Link to={"/HollywoodContent/Movie1"} className='Link-Text'><div>{d.info1}</div></Link>
    </div>
   <br/><br/><br/><br/>

    <div>
    <Link to={"/HollywoodContent/Movie2"} className='H2-Link-Text'><h3>{d.title2}</h3></Link>
    <Link to={"/HollywoodContent/Movie2"} className='Link-Text'><div>{d.info2}</div></Link>
    </div>
    <br/><br/> 

    <div>
    <Link to={"/HollywoodContent/Movie3"} className='H2-Link-Text'><h3>{d.title3}</h3></Link>
    <Link to={"/HollywoodContent/Movie3"} className='Link-Text'><div>{d.info3}</div></Link>
    </div>
    <br/><br/><br/>

    <div>
    <Link to={"/HollywoodContent/Movie4"} className='H2-Link-Text'><h3>{d.title4}</h3></Link>
    <Link to={"/HollywoodContent/Movie4"} className='Link-Text'><div>{d.info4}</div></Link>
    </div>
    <br/><br/><br/>

    <div>
    <Link to={"/HollywoodContent/Movie5"} className='H2-Link-Text'><h3>{d.title5}</h3></Link>
    <Link to={"/HollywoodContent/Movie5"} className='Link-Text'><div>{d.info5}</div></Link>
    </div>
    <br/><br/><br/>

    <div>
    <Link to={"/HollywoodContent/Movie6"} className='H2-Link-Text'><h3>{d.title6}</h3></Link>
    <Link to={"/HollywoodContent/Movie6"} className='Link-Text'><div>{d.info6}</div></Link>
    </div>
    <br/><br/><br/><br/> 

    <div>
    <Link to={"/HollywoodContent/Movie7"} className='H2-Link-Text'><h3>{d.title7}</h3></Link>
    <Link to={"/HollywoodContent/Movie7"} className='Link-Text'><div>{d.info7}</div></Link>
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

export default HollywoodData