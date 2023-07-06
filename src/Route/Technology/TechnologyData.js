import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';

const TechnologyData = () => {
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

  
return (
<>
<div className='Technology-Container'>
<h2 className="Technology-Heading">Technology</h2>

{data.filter((item)=>item.cat ==='Technology-Images').map((d,item)=>{
  return(
 <div key={item}>
    <div className="Technology-Image-Container">
  <Link to={"/TechnologyContent/Tech1"}>  <img src={d.img1} alt='Not-Found'className='Technology-Image'/></Link> 
  <Link to={"/TechnologyContent/Tech2"}>  <img src={d.img2} alt='Not-Found'className='Technology-Image'/></Link>
  <Link to={"/TechnologyContent/Tech3"}>  <img src={d.img3} alt='Not-Found'className='Technology-Image'/></Link>
  <Link to={"/TechnologyContent/Tech4"}>  <img src={d.img4} alt='Not-Found'className='Technology-Image'/></Link>
  <Link to={"/TechnologyContent/Tech5"}>  <img src={d.img5} alt='Not-Found'className='Technology-Image T5'/></Link>
  <Link to={"/TechnologyContent/Tech6"}>  <img src={d.img6} alt='Not-Found'className='Technology-Image T6'/></Link>
  <Link to={"/TechnologyContent/Tech7"}>  <img src={d.img7} alt='Not-Found'className='Technology-Image T7'/></Link>
    </div>

    <div className="Technology-Data-Container">

    <div>
    <Link to={"/TechnologyContent/Tech1"} className='H2-Link-Text'><h2>{d.title1}</h2></Link>
    <Link to={"/TechnologyContent/Tech1"}  className='Link-Text'>  <div>{d.info1}</div></Link>
    </div>
   <br/> <br/>

    <div>
    <Link to={"/TechnologyContent/Tech2"} className='H2-Link-Text'><h2>{d.title2}</h2></Link>
    <Link to={"/TechnologyContent/Tech2"} className='Link-Text'>  <div>{d.info2}</div></Link>
    </div>
    <br/>

    <div>
    <Link to={"/TechnologyContent/Tech3"} className='H2-Link-Text'><h2>{d.title3}</h2></Link>
    <Link to={"/TechnologyContent/Tech3"} className='Link-Text'>  <div>{d.info3}</div></Link>
    </div>
    <br/>

    <div>
    <Link to={"/TechnologyContent/Tech4"} className='H2-Link-Text'><h2>{d.title4}</h2></Link>
    <Link to={"/TechnologyContent/Tech4"} className='Link-Text'>  <div>{d.info4}</div></Link>
    </div>
    <br/> <br/> <br/>

    <div>
    <Link to={"/TechnologyContent/Tech5"} className='H2-Link-Text'><h2>{d.title5}</h2></Link>
    <Link to={"/TechnologyContent/Tech5"} className='Link-Text'>  <div>{d.info5}</div></Link>
    </div>
    <br/>

    <div>
    <Link to={"/TechnologyContent/Tech6"} className='H2-Link-Text'><h2>{d.title6}</h2></Link>
    <Link to={"/TechnologyContent/Tech6"} className='Link-Text'>  <div>{d.info6}</div></Link>
    </div>
    <br/><br/>

    <div>
    <Link to={"/TechnologyContent/Tech7"} className='H2-Link-Text'><h2>{d.title7}</h2></Link>
    <Link to={"/TechnologyContent/Tech7"} className='Link-Text'><div>{d.info7}</div></Link>
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

export default TechnologyData