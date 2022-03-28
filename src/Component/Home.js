import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import '../Css/HomeContent.css'

const Home=()=>{
return(
    <>
        <ImageSlider slides={SliderData}/>
        <div className="homeClass">
        <p className="homeOne">
            We are ISO 9001:2015 accredited Type A Inspection Body, Providing Third Party Inspection Services To
        </p>
        <p className="homeTwo">
            Oil & Gas, Power, Cement, Chemical, Infrastructure, Fertilizer, Pharma, Aerospace, Transportation and Manufacturing sectors.
        </p>
        </div>
    </>
)
}

export default Home;