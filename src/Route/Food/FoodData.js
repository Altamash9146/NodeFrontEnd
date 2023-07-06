import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const FoodData = () => {
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
<div className='Food-Container'>
<h2 className="Food-Heading">Food</h2>

{data.filter((item)=>item.cat ==='Food-Images').map((d,item)=>{
  return(
 <div key={item}>
    <div className="Food-Image-Container">
    <Link to={"/FoodContent/Food1"}> <img src={d.img1} alt='Not-Found'className='Food-Image'/></Link>
    <Link to={"/FoodContent/Food2"}> <img src={d.img2} alt='Not-Found'className='Food-Image FO2'/></Link>
    <Link to={"/FoodContent/Food3"}> <img src={d.img3} alt='Not-Found'className='Food-Image FO3'/></Link>
    <Link to={"/FoodContent/Food4"}> <img src={d.img4} alt='Not-Found'className='Food-Image FO4'/></Link>
    <Link to={"/FoodContent/Food5"}> <img src={d.img5} alt='Not-Found'className='Food-Image FO5'/></Link>
    <Link to={"/FoodContent/Food6"}> <img src={d.img6} alt='Not-Found'className='Food-Image FO6'/></Link>
    <Link to={"/FoodContent/Food7"}> <img src={d.img7} alt='Not-Found'className='Food-Image FO7'/></Link>
    </div>

    <div className="Food-Data-Container">

    <div>
    <Link to={"/FoodContent/Food1"} className='H2-Link-Text'><h2>{d.title1}</h2></Link>
    <Link to={"/FoodContent/Food1"}  className='Link-Text'> <div>{d.info1}</div></Link>
    </div>
   <br/> <br/> <br/><br/>

    <div>
    <Link to={"/FoodContent/Food2"} className='H2-Link-Text'><h2>{d.title2}</h2></Link>
    <Link to={"/FoodContent/Food2"}  className='Link-Text'> <div>{d.info2}</div></Link>
    </div>
    <br/><br/>

    <div>
    <Link to={"/FoodContent/Food3"} className='H2-Link-Text'><h2>{d.title3}</h2></Link>
    <Link to={"/FoodContent/Food3"}  className='Link-Text'> <div>{d.info3}</div></Link>
    </div>
    <br/><br/><br/>

    <div>
    <Link to={"/FoodContent/Food4"} className='H2-Link-Text'><h2>{d.title4}</h2></Link>
    <Link to={"/FoodContent/Food4"}  className='Link-Text'> <div>{d.info4}</div></Link>
    </div>
    <br/> <br/> <br/><br/><br/>

    <div>
    <Link to={"/FoodContent/Food5"} className='H2-Link-Text'><h2>{d.title5}</h2></Link>
    <Link to={"/FoodContent/Food5"}  className='Link-Text'> <div>{d.info5}</div></Link>
    </div>
    <br/><br/><br/><br/>  <br/>

    <div>
    <Link to={"/FoodContent/Food6"} className='H2-Link-Text'><h2>{d.title6}</h2></Link>
    <Link to={"/FoodContent/Food6"}  className='Link-Text'> <div>{d.info6}</div></Link>
    </div>
    <br/><br/>

    <div>
    <Link to={"/FoodContent/Food7"} className='H2-Link-Text'><h2>{d.title7}</h2></Link>
    <Link to={"/FoodContent/Food7"}  className='Link-Text'> <div>{d.info7}</div></Link>
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

export default FoodData