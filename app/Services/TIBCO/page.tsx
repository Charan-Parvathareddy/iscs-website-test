"use client";
import Img1 from "@/public/assets/ai/ai-strategy-ml.jpg";
import Img2 from "@/public/assets/ai/mlmodels-ml.png";
import Img3 from "@/public/assets/ai/mlmodels-ml.png";

import Banner1 from "@/components/Products/Banner1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';


const Banner1Data = {
  image: Img1,
  tag: "Integration Strategy",
  title: "Expert Integration Planning",
  subtitle: [
    "At ISCS, our integration strategy leverages TIBCO’s powerful platforms to create a cohesive and interconnected digital environment. We focus on seamless connectivity across legacy and cloud-based systems, breaking down silos and enabling real-time data sharing for holistic insights across the enterprise.",
    "Using TIBCO’s API management and microservices architecture, our integration planning ensures that each application remains adaptable and scalable to meet evolving business needs. This approach facilitates rapid integration of new data sources and applications, empowering organizations to respond quickly to market changes and regulatory demands.",
    "Our expert planning incorporates key considerations such as security, compliance, and scalability, resulting in integrations that are both future-proof and resilient. By enhancing operational agility and providing a unified data view, ISCS enables fast, informed decision-making for sustained business success."
  ],
  link: "#",
};

const Banner1Data2 = {
  image: Img2,
  tag: "Training and Development",
  title: "Empower Your Team",
  subtitle: [
    "ISCS’s training and development programs equip employees with the skills and knowledge to independently manage and optimize TIBCO solutions. Led by certified TIBCO trainers, our practical, hands-on training covers areas like workflow automation, API management, and data visualization.",
    "Tailored to each client’s specific environment, our programs ensure training is relevant and immediately applicable. We offer training on TIBCO’s BusinessWorks and Flogo platforms, enabling employees to automate workflows, streamline processes, and extract actionable insights from data.",
    "Beyond technical skills, our training fosters a strategic understanding of TIBCO’s solutions, aligning them with organizational goals. Through continuous support, ISCS builds internal capabilities, empowering teams to maintain and expand TIBCO implementations for long-term success."
  ],
  link: "#",
};

const Banner1Data3 = {
  image: Img3,
  tag: "TIBCO Consulting",
  title: "Expert TIBCO Consulting",
  subtitle: [
    "ISCS’s TIBCO consulting services offer expert guidance at every stage of the integration journey, from strategic planning to implementation. Our TIBCO-certified consultants tailor solutions to align with each client’s unique business goals, modernizing systems, streamlining operations, and driving data-driven insights.",
    "We conduct in-depth assessments to inform a customized integration roadmap that addresses both immediate challenges and long-term objectives. Our consultants’ expertise in API management, data integration, and predictive analytics ensures holistic solutions that enhance connectivity and operational efficiency.",
    "ISCS’s consulting approach includes ongoing optimization and support, allowing clients to adapt to evolving demands and advancements. By partnering with ISCS, businesses unlock the full potential of their data, establishing a digital infrastructure that drives measurable outcomes and sustainable growth."
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
      <div id="ai-strategy" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data} />
      </div>

      <div id="ml-models" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data2} reverse={true} />
      </div>

      <div id="ml-models" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data3}  />
      </div>
      
    </>
  );
}
