import React from "react";
import "./Food.style.css"
import FoodData from "./FoodData";
import FoodTopPost from "./FoodTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";

const Food = () => {
  return (
   <>
   <Logo/>
  <MobileRoute/>
   <TopNavigation/>
      <FoodData/>
      < FoodTopPost/>
   </>
  )
}

export default Food