"use client";
import Img1 from "@/public/assets/salesforce/integration-services.jpg";
import Img2 from "@/public/assets/salesforce/SF-infographics.png";

import Banner1 from "@/components/Products/Banner1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';


const Banner1Data = {
  image: Img1,
  tag: "Implementation",
  title: "Salesforce CRM Integration",
  subtitle: [
    "Salesforce CRM integration enables businesses to centralize their customer data, creating a unified platform that connects sales, marketing, and customer service teams.",
    "By integrating Salesforce with existing tools and systems, businesses streamline workflows, improve customer engagement, and make data-driven decisions, ensuring all teams have access to the most up-to-date customer information.",
    "With real-time data access, Salesforce CRM enables personalized interactions, enhances collaboration, and boosts operational efficiency by automating manual tasks.",
    "Integrating Salesforce CRM helps businesses improve customer satisfaction, increase sales opportunities, and optimize resource management, positioning them for sustainable growth and success."
  ],
  link: "#",
};

const Banner1Data2 = {
  image: Img2,
  tag: "Service Cloud",
  title: "Salesforce Service Cloud",
  subtitle: [
    "With Salesforce Service Cloud, we enable businesses to provide fast, personalized, and proactive customer service through a unified, omnichannel platform. Service Cloud consolidates customer interactions from multiple channels, including phone, email, social media, and live chat, into a single interface, giving your support team a comprehensive view of each customer’s journey.",
    "By implementing intelligent case management, Service Cloud automatically assigns cases to the right agents based on skills and availability, allowing for quicker and more effective responses. This empowers support teams to handle inquiries efficiently, improving response times and overall customer satisfaction.",
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
      <div id="salesforce-crm" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data} />
      </div>

      <div id="salesforce-servicecloud" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data2} reverse={true} />
      </div>

      
    </>
  );
}
