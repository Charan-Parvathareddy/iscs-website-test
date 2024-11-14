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
  tag: "Cloud Migration and Modernization",
  title: "Elevating IT Infrastructure with ISCS",
  subtitle: [
    "At ISCS, we offer comprehensive cloud migration and modernization services designed to help businesses unlock the power of the cloud. Our approach is tailored to each client’s unique needs, guiding organizations through every stage of the migration journey, from assessment and strategy development to deployment and ongoing optimization.",
    "By transitioning legacy systems to the cloud, ISCS enables businesses to reduce operational costs, improve system reliability, and enhance security.",
    "We leverage cloud-native architectures and tools that maximize scalability, allowing infrastructure to grow with the business while adapting seamlessly to changing market conditions.",
    "Our modernization efforts go beyond simple migration; we help clients transform their IT landscape with automated workflows, advanced analytics capabilities, and enhanced disaster recovery to ensure resilience and business continuity.",
    "With ISCS’s expertise in cloud environments, including multi-cloud and hybrid solutions, organizations benefit from a flexible, future-proof infrastructure that supports continuous innovation, operational efficiency, and sustained growth.",
    "Partner with ISCS to establish a robust digital foundation that drives long-term success in an increasingly digital world."
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

      <div id="cloud-migration" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data2}  />
      </div>
      
    </>
  );
}
