import React from "react";
import "./home.style.css"
import "../../Global.css"
import Banner from "./Banner";
import Latest from "./Latest";
import LatestArticle from "./LatestArticle";
import TopPost from "./TopPost";
import LatestStories from "./LatestStories";
import { Logo,TopNavigation,Footer } from "../../Components";
import MobileN from "../../Components/MobileNavigation1";

const Home = () =>{


return(
<>
<Logo/>
<MobileN/>
<TopNavigation/>
<Banner/>
<Latest/>
<LatestArticle/>
<TopPost/>
<LatestStories/>
<Footer/>

</>
)
}

export default Home