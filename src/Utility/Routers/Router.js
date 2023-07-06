
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

                      //Route Folder Imports
import { Bollywood, Home, Technology,Hollywood, Fitness, Food, Error,} from "../../Route";
            
                    // Bollywood Content Imports
import {Bahubali,BajrangiBhaijan,Dangal,Kgf,Rrr,Secret,Robot,Sultan,Sanju,War,Sahoo} from "../../RouteContent/BollywoodContent"

                    //Technology Content Imports
import {Tech1,Tech2,Tech3,Tech4,Tech5,Tech6,Tech7,Tech8,Tech9,Tech10,Tech11} from "../../RouteContent/TechnologyContent"

                        //Hollywood Content Imports//
import { Movie1,Movie2,Movie3,Movie4,Movie5,Movie6,Movie7,Movie8,Movie9,Movie10,Movie11 } from "../../RouteContent/HollywoodContent";

                        //Food Content Imports
import { Food1,Food2,Food3,Food4,Food5,Food6,Food7,Food8,Food9,Food10,Food11   } from "../../RouteContent/FoodContent";

                        //Fitness Content Imports
import { Fitness1,Fitness2,Fitness3,Fitness4,Fitness5,Fitness6,Fitness7,Fitness8,Fitness9,Fitness10,Fitness11 } from "../../RouteContent/FitnessContent";

 import { Login,Signup } from "../../Components";
// import axios from "axios";
// import { useState } from "react";

const Router = ()=>{
  // const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  
  // const handleSignup = (formdata) => {
       // setIsUserSignedUp(true); 
  // };

  // console.log(data);

  // console.log("Reached the conditional operator");
  
return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/Bollywood" element = {<Bollywood/>}/>  
        <Route path="/Technology" element = {<Technology/>}/>  
        <Route path="/Hollywood" element = {<Hollywood/>}/> 
        <Route path="/Fitness" element = {<Fitness/>}/>  
        <Route path="/Food" element = {<Food/>}/>   
        <Route path="*" element = {<Error/>}/>  
        <Route path='/Signup' element={ <Signup  />}/>
        <Route path='/Login' element={ <Login />}/>
        <Route path="/Signup/Login" element={<Login/>} />
        <Route path="/Login/Signup" element={<Signup  />} />

  

    {/* Bollywood Content */}
   {/* {isUserSignedUp ? (
    <> */}
        <Route path="/BollywoodContent/Bahubali" element = {<Bahubali/>}/>
        <Route path="/BollywoodContent/BajrangiBhaijan" element = {<BajrangiBhaijan/>}/>
        <Route path="/BollywoodContent/Dangal" element = { <Dangal/>}/>
        <Route path="/BollywoodContent/Kgf" element = { <Kgf/>}/>
        <Route path="/BollywoodContent/Robot" element = {<Robot/>}/>
        <Route path="/BollywoodContent/Rrr" element = { <Rrr/>}/>
        <Route path="/BollywoodContent/Sahoo" element = { <Sahoo/>}/>
        <Route path="/BollywoodContent/Sanju" element = {<Sanju/>}/>
        <Route path="/BollywoodContent/SecretSuperstar" element = { <Secret/>}/>
        <Route path="/BollywoodContent/Sultan" element = {<Sultan/>}/>
        <Route path="/BollywoodContent/War" element = {  <War/>}/>  
    {/* </>
    ):(
      <Route path="/BollywoodContent/*" element={< Navigate to="/Signup" replace/>} />
    )} */}
  
   {/* Technology Content */}
        <Route path= "/TechnologyContent/Tech1" element={<Tech1/>}/>
        <Route path= "/TechnologyContent/Tech2" element={<Tech2/>}/>
        <Route path= "/TechnologyContent/Tech3" element={<Tech3/>}/>
        <Route path= "/TechnologyContent/Tech4" element={<Tech4/>}/>
        <Route path= "/TechnologyContent/Tech5" element={<Tech5/>}/>
        <Route path= "/TechnologyContent/Tech6" element={<Tech6/>}/>
        <Route path= "/TechnologyContent/Tech7" element={<Tech7/>}/>
        <Route path= "/TechnologyContent/Tech8" element={<Tech8/>}/>
        <Route path= "/TechnologyContent/Tech9" element={<Tech9/>}/>
        <Route path= "/TechnologyContent/Tech10" element={<Tech10/>}/>
        <Route path= "/TechnologyContent/Tech11" element={<Tech11/>}/> 


 {/* Hollywood Content */}

          <Route path= "/HollywoodContent/Movie1" element={<Movie1/>}/>
        <Route path= "/HollywoodContent/Movie2" element={<Movie2/>}/>
        <Route path= "/HollywoodContent/Movie3" element={<Movie3/>}/>
        <Route path= "/HollywoodContent/Movie4" element={<Movie4/>}/>
        <Route path= "/HollywoodContent/Movie5" element={<Movie5/>}/>
        <Route path= "/HollywoodContent/Movie6" element={<Movie6/>}/>
        <Route path= "/HollywoodContent/Movie7" element={<Movie7/>}/>
        <Route path= "/HollywoodContent/Movie8" element={<Movie8/>}/>
        <Route path= "/HollywoodContent/Movie9" element={<Movie9/>}/>
        <Route path= "/HollywoodContent/Movie10" element={<Movie10/>}/>
        <Route path= "/HollywoodContent/Movie11" element={<Movie11/>}/> 

{/* Food Content */}
          <Route path= "/FoodContent/Food1" element={<Food1/>}/>
        <Route path= "/FoodContent/Food2" element={<Food2/>}/>
        <Route path= "/FoodContent/Food3" element={<Food3/>}/>
        <Route path= "/FoodContent/Food4" element={<Food4/>}/>
        <Route path= "/FoodContent/Food5" element={<Food5/>}/>
        <Route path= "/FoodContent/Food6" element={<Food6/>}/>
        <Route path= "/FoodContent/Food7" element={<Food7/>}/>
        <Route path= "/FoodContent/Food8" element={<Food8/>}/>
        <Route path= "/FoodContent/Food9" element={<Food9/>}/>
        <Route path= "/FoodContent/Food10" element={<Food10/>}/>
        <Route path= "/FoodContent/Food11" element={<Food11/>}/> 

{/* Fitness Content */}
        <Route path= "/FitnessContent/Fitness1" element={<Fitness1/>}/>
        <Route path= "/FitnessContent/Fitness2" element={<Fitness2/>}/>
        <Route path= "/FitnessContent/Fitness3" element={<Fitness3/>}/>
        <Route path= "/FitnessContent/Fitness4" element={<Fitness4/>}/>
        <Route path= "/FitnessContent/Fitness5" element={<Fitness5/>}/>
        <Route path= "/FitnessContent/Fitness6" element={<Fitness6/>}/>
        <Route path= "/FitnessContent/Fitness7" element={<Fitness7/>}/>
        <Route path= "/FitnessContent/Fitness8" element={<Fitness8/>}/>
        <Route path= "/FitnessContent/Fitness9" element={<Fitness9/>}/>
        <Route path= "/FitnessContent/Fitness10" element={<Fitness10/>}/>
        <Route path= "/FitnessContent/Fitness11" element={<Fitness11/>}/> 
 

   </Routes>
    </BrowserRouter>
    </>
)

}

export default Router