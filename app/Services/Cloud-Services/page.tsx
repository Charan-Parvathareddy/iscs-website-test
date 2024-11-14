"use client";

import Banner1 from "@/components/Products/Banner1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';

import Img1 from "@/public/assets/cloud-service-models-2.webp";
import Img2 from "@/public/assets/cloud-service-models-2.webp";




const Banner1Data1 = {
  image: Img1,
  tag: "Cloud Services",
  title: "Transforming Your Business with Scalable, Secure Cloud Solutions",
  subtitle: [
    "Our cloud services provide secure, scalable solutions to streamline operations and drive growth. We offer tailored public, private, and hybrid cloud options that align with your business needs, enhancing flexibility and collaboration.",
    "Cloud migration is made easy with our expert team guiding each step, ensuring a smooth, efficient transition that maximizes benefits like performance and security. We support you throughout, from data migration to application adaptation.",
    "With cloud security as a top priority, we protect your data through advanced protocols, including encryption and continuous monitoring, to ensure safety and resilience in the cloud.",
    "Our cloud consulting offers customized strategies to fully leverage cloud potential, from performance optimization to cost control, delivering solutions designed for flexibility and growth.",
    "Cloud optimization services enhance efficiency and reduce costs. We analyze your environment, streamlining resources and implementing automation tools for optimal performance and savings."
  ],
  link: "#",
};

const Banner1Data2 = {
  image: Img2,
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
      <div id="cloud-solutions" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data1} reverse={true} />
      </div>

      <div id="tibco-consulting" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data2}  />
      </div>
      
    </>
  );
}
