"use client";
import Img1 from "@/public/assets/Oracle/oracle-ebs.png";
import Img2 from "@/public/assets/Oracle/oracle.webp"
import Img3 from "@/public/assets/Oracle/oracle-consulting.png";

import Banner2 from "@/components/Products/Banner2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';


const Banner2Data = {
  image: Img1,
  tag: "E-Business Suite",
  title: "Comprehensive Solutions with Oracle E-Business Suite",
  subtitle: [
    "Oracle’s E-Business Suite (EBS) streamlines core business functions, from finance to HR, supply chain, and CRM. At ISCS, we deploy and optimize EBS to drive seamless collaboration and efficient operations across departments.",
    "EBS centralizes data and automates tasks, improving visibility and control over processes. We offer migration services to integrate EBS with legacy systems, allowing businesses to retain valuable data while gaining scalability and flexibility.",
    "Our customized EBS implementations reduce redundancy and eliminate data silos, creating a connected digital environment that supports sustainable growth and data-driven decision-making."
  ],
  link: "#",
};

const Banner2Data2 = {
  image: Img2,
  tag: "Oracle Fusion Cloud",
  title: "Intelligent Business Insights with Oracle",
  subtitle: [
    "Oracle Fusion Cloud delivers a unified suite of cloud applications that enables organizations to streamline operations, enhance productivity, and drive strategic growth. At ISCS, we implement Oracle Fusion Cloud solutions to empower businesses with the flexibility and innovation they need to stay ahead.",
    "With Oracle Fusion Cloud, we offer a comprehensive, integrated platform that spans ERP, HCM, SCM, and more, allowing seamless connectivity across all departments. This centralized approach optimizes workflows, enhances collaboration, and provides actionable insights for smarter decision-making.",
    "Our team customizes Oracle Fusion Cloud applications to meet specific industry needs, providing businesses with the tools to modernize processes, boost operational efficiency, and gain a competitive advantage in an ever-evolving market."
  ],
  link: "#",
};

const Banner2Data3 = {
  image: Img3,
  tag: " Oracle IT Consulting",
  title: "Expert Oracle IT Consulting Services for Digital Transformation",
  subtitle: [
    "ISCS’s Oracle IT Consulting services guide businesses through digital transformation with tailored Oracle solutions. Our Oracle-certified consultants develop strategic roadmaps for system integration, cloud migration, and application development.",
    "Beyond implementation, we offer ongoing support and performance monitoring to ensure Oracle solutions adapt to changing business needs. Our approach helps integrate cloud applications, legacy systems, and advanced analytics for improved productivity and efficiency.",
    "With a focus on strategic planning and innovation, our consulting services enable businesses to modernize their IT infrastructure, optimize performance, and drive measurable, long-term growth."
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
      <div id="oracle-e-business" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner2 {...Banner2Data} />
      </div>

      <div id="oracle-fusion-cloud" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner2 {...Banner2Data2} reverse={true} />
      </div>

      <div id="oracle-it-consulting" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner2 {...Banner2Data3}  />
      </div>
      
    </>
  );
}
