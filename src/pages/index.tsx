import { useState } from "react";
import NavBar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero";

import Cta from "@/components/cta";
import Statistics from "@/components/Statsistics";

import Blogs from "@/components/blogs";
import Testimonial from "@/components/testimonial";

import Features from "@/components/features";
import Newsletter from "@/components/Newsletter";




export default function  Index() {
    

    return (
      <>

      
        
        <Hero/>
        <Features/>
        <Cta/>
        <Newsletter/>
        <Statistics/>
        <Testimonial/>
        <Blogs/> 
{/* 
     <HeroSection/>
     
      <Features/>
      <Newsletter/>
      <Pricing/>
      <Company/> */}

        
     
        </>
    );
     
      
}
