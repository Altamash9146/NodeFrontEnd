import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FitnessData = () => {
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
<div className='Fitness-Container'>
<h2 className="Fitness-Heading">Fitness</h2>

{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
  return(
 <div key={item}>
    <div className="Fitness-Image-Container">
    <Link to={"/FitnessContent/Fitness1"}><img src={d.img1} alt='Not-Found'className='Fitness-Image'/></Link>
    <Link to={"/FitnessContent/Fitness2"}><img src={d.img2} alt='Not-Found'className='Fitness-Image'/></Link>
    <Link to={"/FitnessContent/Fitness3"}><img src={d.img3} alt='Not-Found'className='Fitness-Image'/></Link>
    <Link to={"/FitnessContent/Fitness4"}><img src={d.img4} alt='Not-Found'className='Fitness-Image'/></Link>
    <Link to={"/FitnessContent/Fitness5"}><img src={d.img5} alt='Not-Found'className='Fitness-Image'/></Link>
    <Link to={"/FitnessContent/Fitness6"}><img src={d.img6} alt='Not-Found'className='Fitness-Image F6'/></Link>
    <Link to={"/FitnessContent/Fitness7"}><img src={d.img7} alt='Not-Found'className='Fitness-Image F7'/></Link>
    </div>

    <div className="Fitness-Data-Container">

    <div>
    <Link to={"/FitnessContent/Fitness1"} className='H2-Link-Text'><h3>{d.title1}</h3></Link>
    <Link to={"/FitnessContent/Fitness1"}  className='Link-Text'><div>{d.info1}</div></Link>
    </div>
   <br/> <br/> <br/> <br/> <br/>

    <div>
    <Link to={"/FitnessContent/Fitness2"} className='H2-Link-Text'><h3>{d.title2}</h3></Link>
    <Link to={"/FitnessContent/Fitness2"}  className='Link-Text'><div>{d.info2}</div></Link>
    </div>
    <br/> <br/> <br/> <br/>

    <div>
    <Link to={"/FitnessContent/Fitness3"} className='H2-Link-Text'><h3>{d.title3}</h3></Link>
    <Link to={"/FitnessContent/Fitness3"}  className='Link-Text'><div>{d.info3}</div></Link>
    </div>
    <br/> <br/> <br/> <br/>

    <div>
    <Link to={"/FitnessContent/Fitness4"} className='H2-Link-Text'><h3>{d.title4}</h3></Link>
    <Link to={"/FitnessContent/Fitness4"}  className='Link-Text'><div>{d.info4}</div></Link>
    </div>
    <br/> <br/> <br/> <br/>

    <div>
    <Link to={"/FitnessContent/Fitness5"} className='H2-Link-Text'><h3>{d.title5}</h3></Link>
    <Link to={"/FitnessContent/Fitness5"}  className='Link-Text'><div>{d.info5}</div></Link>
    </div>
    <br/> <br/> <br/> <br/>

    <div>
    <Link to={"/FitnessContent/Fitness6"} className='H2-Link-Text'><h3>{d.title6}</h3></Link>
    <Link to={"/FitnessContent/Fitness6"}  className='Link-Text'><div>{d.info6}</div></Link>
    </div>
    <br/><br/> <br/> <br/> <br/> 

    <div>
    <Link to={"/FitnessContent/Fitness7"} className='H2-Link-Text'><h3>{d.title7}</h3></Link>
    <Link to={"/FitnessContent/Fitness7"}  className='Link-Text'><div>{d.info7}</div></Link>
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

export default FitnessData