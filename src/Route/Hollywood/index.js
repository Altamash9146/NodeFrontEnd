import React from "react";
import "./Hollywood.style.css"
import HollywoodData from "./HollywoodData";
import HollywoodTopPost from "./HollywoodTopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRoute from "./MobileRouteNavi";
const Hollywood = () => {
  return (
   <>
   <Logo/>
   <MobileRoute/>
   <TopNavigation/>
    < HollywoodData/>
    < HollywoodTopPost/>
   </>
  )
}

export default Hollywood