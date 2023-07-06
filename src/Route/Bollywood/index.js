import React from "react";
import "./Bollywood.style.css"
import BollywoodData from "./BollywoodData";
import BollywoodTopPost from "./TopPost";
import { Logo,TopNavigation} from "../../Components";
import MobileRoute from "./MobileRouteNavi";
const Bollywood = () =>{
    return(
        <>
        <Logo/>
        <MobileRoute/>
        <TopNavigation/>
        <BollywoodData/>
        <BollywoodTopPost/>
        </>
    )
}

export default Bollywood