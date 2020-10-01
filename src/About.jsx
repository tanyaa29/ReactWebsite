import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./image/img2.png"
import Common from "./Common"
const About=()=>{
    return(
        <>
        <Common name="Welcome to My Page" imgsrc={web} visit='/contact' 
        btname="Contact Now"/>
        </>
    )
}
export default About;