import axios from "axios";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Latest = () =>{
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

    return(
        <>
        <div className="Latest-Container">
        <h2 ><span className="Latest-Heading">The </span>Latest</h2>
        <br/>

{data.filter((item)=>item.cat=== 'Food-Images').map((d,item)=>{
    return(

        <div className="Latest-Image-Container" key={item}>

        <Link to={"/FoodContent/Food5"} className='Link-Text'><img src={d.img5}
        alt="Not-Found" className="Latest-Image LI1"/></Link>
        

        <Link to={"/FoodContent/Food6"} className='Link-Text'><img src={d.img6}
        alt="Not-Found" className="Latest-Image LI2"/></Link>

        <Link to={"/FoodContent/Food7"} className='Link-Text'><img src={d.img7}
        alt="Not-Found" className="Latest-Image LI3"/></Link>

        <div/>

        <div className="Latest-Image-Name-Container">
        <Link to={"/FoodContent/Food5"} className='H2-Link-Text'><h2 className="Latest-Image-Name LIN1">{d.title5}</h2></Link>
        <Link to={"/FoodContent/Food6"} className='H2-Link-Text'><h2 className="Latest-Image-Name LIN2">{d.title6}</h2></Link>
        <Link to={"/FoodContent/Food7"} className='H2-Link-Text'><h2 className="Latest-Image-Name LIN3">{d.title7}</h2></Link>

        </div>

        <div className="Latest-Data-Container">

        <div className="Latest-Description LD1">{d.info5}
        <p>Travel/August 21 2017</p>
            </div> 
       

        <div className="Latest-Description LD2">{d.info6}
        <p>Travel/August 21 2017</p>
            </div> 

    
        <div className="Latest-Description LD3" >{d.info7}
        <p>Travel/August 21 2017</p>
            </div>
        </div>
        </div>
    )
})}
       

       

        

</div>
</>
    )
}
export default Latest