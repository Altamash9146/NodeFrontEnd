import React from "react";
import "./Fitness.style.css"
import FitnessData from "./FitnessData";
import FitnessTopPost from "./FitnessTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
const Fitness = () => {
  return (
   <>
    <Logo/>
    <MobileRoute/>
    <TopNavigation/>   
      <FitnessData/>
      < FitnessTopPost/>
   </>
  )
}

export default Fitness