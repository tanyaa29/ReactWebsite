import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./image/img1.png"
import Common from "./Common"

const Home=()=>{
    return(
        <>
        <Common name="Grow Your Business Now with" imgsrc={web} visit='/service' 
        btname="Get Started"/>
        </>
    )
}
export default Home;