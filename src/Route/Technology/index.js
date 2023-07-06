import React from "react";
import "./Technology.style.css"
import TechnologyData from "./TechnologyData";
import TechnologyTopPost from "./TopPost";
import { Logo,TopNavigation } from "../../Components";
import MobileRouteNavi from "./MobileRouteNavi";
const Technology = () => {
  return (
   <>
      <Logo/>
      <MobileRouteNavi/>
      <TopNavigation/>
      <TechnologyData/>
      <TechnologyTopPost/>
   </>
  )
}

export default Technology