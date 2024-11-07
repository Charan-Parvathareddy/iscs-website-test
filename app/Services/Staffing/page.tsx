"use client";
import Img1 from "@/public/assets/staffing/it-consulting.png";
import Img2 from "@/public/assets/staffing/talent-assessment.png";

import Banner2 from "@/components/Products/Banner2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';


const Banner1Data = {
  image: Img1,
  tag: "IT Consulting Services",
  title: "Expert IT Solutions and Consulting",
  subtitle: [
      "ISCS offers comprehensive IT consulting services, guiding businesses through complex technology challenges and implementing solutions aligned with strategic goals.",
      
      "Our expertise spans system integration, cloud migration, cybersecurity, and infrastructure optimization, providing tailored IT roadmaps that enhance performance, scalability, and security.",
      
      "With end-to-end support, ISCS ensures seamless solution integration and optimization for future growth, enabling businesses to stay agile and competitive in a digital landscape.",
      
      "Our services extend beyond deployment, including performance monitoring, training, and support. We help organizations adopt advanced technologies like AI, machine learning, and blockchain to drive innovation and improve decision-making, empowering them to thrive in an evolving marketplace."
  ],  
  link: "#",
};

const Banner1Data2 = {
  image: Img2,
  tag: "Talent Assessment and Management",
title: "Comprehensive Talent Solutions",
subtitle: [
    "ISCS’s Talent Assessment and Management services help organizations identify, evaluate, and develop talent aligned with strategic goals.",
    
    "Our advanced assessment approach includes behavioral assessments, skills testing, and performance simulations, providing a data-driven view of candidates' abilities for informed hiring decisions.",
    
    "Beyond hiring, ISCS offers tailored talent management solutions focused on continuous learning, skill development, and career progression to build a future-ready workforce.",
    
    "Our customized development plans enhance productivity and retention, fostering a high-performing team and cultivating leaders from within. This investment helps businesses bridge skill gaps, sustain a competitive workforce, and drive long-term success."
],
  link: "#",
};





export default function Home() {

  useEffect(() => {
    // Handle scroll to section on page load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a slight delay to ensure smooth scrolling after page load
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, []);

  return (
    <>
      <div id="consulting-services" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner2 {...Banner1Data} />
      </div>

      <div id="talent-assessment" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner2 {...Banner1Data2} reverse={true} />
      </div>

      
    </>
  );
}
