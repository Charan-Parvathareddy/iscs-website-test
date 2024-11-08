"use client";
import Img1 from "@/public/assets/tibco/tibco.jpg";
import Img2 from "@/public/assets/ai/ai.png";
import Img3 from "@/public/assets/salesforce/salesforce.webp";
import Img4 from "@/public/assets/Oracle/oracle-consulting.png";
import Img5 from "@/public/assets/staffing/it-consulting.png";
import Img6 from "@/public/assets/Oracle/oracle-peoplesoft-min.png";
import Img7 from "@/public/assets/cloud-services.jpg";

import Banner1 from "@/components/Products/Banner1";
import Banner from "@/components/Products/Banner";
import Banner3 from "@/components/Products/Banner3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';


const BannerData = {
  image: Img1,
  tag: "TIBCO",
  title: "Seamless Data Integration and Process Automation with TIBCO",
  subtitle: [
    "In today's competitive business environment, seamless data integration and process automation are essential for driving innovation and maintaining operational agility. At ISCS, we leverage TIBCO's industry-leading software solutions to help organizations connect, unify, and harness real-time data across their enterprise systems.",
    "TIBCO's platform is designed to integrate data, applications, and processes, empowering businesses to automate complex workflows and improve decision-making through advanced analytics. With powerful tools for API management, process orchestration, and predictive insights, TIBCO enables enterprises to achieve faster digital transformation and optimize operations efficiently.",
    "From retail to healthcare and manufacturing, TIBCO solutions are trusted by a diverse range of industries to streamline business operations, reduce bottlenecks, and enhance customer experiences. ISCS ensures that each implementation aligns with the client's goals, enabling them to unlock the full potential of their data and drive measurable business outcomes.",
    "At ISCS, our team of TIBCO experts partners with clients through every step of the journey—from integration design to execution—delivering scalable, future-ready solutions that position businesses for success in an increasingly data-driven world."
  ],
  link: "/Services/TIBCO",
};

const BannerData2 = {
  image: Img2,
  tag: "AI/ML Solutions",
  title: "Transforming Businesses with AI and Machine Learning",
  subtitle: [
    "Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing industries by enabling businesses to harness the power of data for smarter decision-making and automation. AI/ML solutions offer advanced analytics, predictive modeling, and intelligent automation to optimize processes, enhance customer experiences, and drive innovation.",
    "With a wide range of applications—from natural language processing and computer vision to predictive maintenance and personalized recommendations—AI/ML solutions can be tailored to meet the unique needs of any business.",
    "By leveraging powerful algorithms, these solutions can process large datasets, uncover hidden patterns, and provide actionable insights in real time, helping companies stay ahead of the competition."
  ],
  link: "/Services/AI-ML",
};

const BannerData3 = {
  image: Img3,
  tag: "Salesforce Solutions",
  title: "Tailored Salesforce Solutions for Every Business Need",
  subtitle: [
    "Salesforce Solutions provide a comprehensive suite of tools and services designed to address the unique challenges of businesses across industries. Whether you're looking to enhance customer engagement, streamline sales processes, or improve operational efficiency, Salesforce offers customized solutions that empower businesses to achieve their goals.",
    "With Salesforce Sales Cloud, teams can manage leads, track customer interactions, and close deals faster through robust sales automation and real-time insights. Service Cloud enables businesses to deliver exceptional customer support with intelligent case management, automated workflows, and AI-driven assistance.",
    "Marketing Cloud helps marketers create personalized campaigns, track customer journeys, and measure the effectiveness of their efforts, while Commerce Cloud powers seamless, scalable e-commerce experiences."
  ],
  link: "/Services/Salesforce",
};

const BannerData4 = {
  image: Img4,
  tag: "Oracle Solutions",
  title: "Comprehensive Oracle Solutions for Digital Transformation",
  subtitle: [
    "Oracle Solutions offer a robust suite of cloud applications, database services, and infrastructure that empower businesses to drive innovation, streamline operations, and achieve digital transformation. With a focus on data management, enterprise applications, and cloud infrastructure, Oracle provides tailored solutions for organizations across industries.",
    "For organizations looking to leverage emerging technologies, Oracle's AI, ML, and blockchain solutions enable automation, data-driven insights, and secure digital transactions.",
    "Whether it's modernizing legacy systems, migrating to the cloud, or transforming business processes, Oracle Solutions offer the flexibility, scalability, and intelligence needed to stay competitive in a rapidly changing market."
  ],
  link: "/Services/Oracle",
};

const BannerData5 = {
  image: Img5,
  tag: "Professional Staffing Services",
  title: "Connecting Talent with Opportunity Through Professional Staffing Services",
  subtitle: [
    "Professional Staffing Services provide businesses with the expertise they need to build agile, high-performing teams. Whether you're looking to fill temporary roles, project-based positions, or permanent placements, professional staffing services offer tailored recruitment solutions that match the right talent to your business needs.",
    "From executive search to flexible workforce solutions, professional staffing services can support various staffing needs, including temporary staffing, contract-to-hire, and direct-hire placements.",
    "Whether it's scaling up for a short-term project or finding the perfect candidate for a permanent role, professional staffing services help businesses stay competitive by ensuring access to the right talent at the right time."
  ],
  link: "/Services/Staffing",
};

const BannerData6 = {
  image: Img6,
  "tag": "Oracle PeopleSoft Solutions",
  title: "Modernizing Operations and Maximizing Efficiency with Oracle PeopleSoft Solutions",
  subtitle: [
    "Our PeopleSoft solutions streamline HR, finance, and supply chain operations, providing organizations with the tools to enhance productivity and data-driven decision-making. Tailored to fit your unique needs, we help improve workflows and increase data visibility.",
    "With seamless PeopleSoft upgrades and cloud migration to Oracle Cloud, we support businesses in modernizing their infrastructure, improving system performance, scalability, and security, all while reducing costs.",
    "Our PeopleSoft consulting offers customized support for implementations, integrations, and optimizations, maximizing the capabilities of your PeopleSoft systems to foster productivity and operational resilience."
  ],
  link: "#",
};

const BannerData7 = {
  image: Img7,
  tag: "Cloud Services",
  title: "Transforming Your Business with Scalable, Secure Cloud Solutions",
    subtitle: [
      "Our cloud services provide secure, scalable solutions to streamline operations and drive growth. We offer tailored public, private, and hybrid cloud options that align with your business needs, enhancing flexibility and collaboration.",
      "Cloud migration is made easy with our expert team guiding each step, ensuring a smooth, efficient transition that maximizes benefits like performance and security. We support you throughout, from data migration to application adaptation.",
      "With cloud security as a top priority, we protect your data through advanced protocols, including encryption and continuous monitoring, to ensure safety and resilience in the cloud.",
      "Our cloud consulting offers customized strategies to fully leverage cloud potential, from performance optimization to cost control, delivering solutions designed for flexibility and growth.",
      "Cloud optimization services enhance efficiency and reduce costs. We analyze your environment, streamlining resources and implementing automation tools for optimal performance and savings."
    ],
    link: "#"
  
  
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
      <div id="tibco-services" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner {...BannerData} />
      </div>

      <div id="ai-ml-solutions" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner {...BannerData2} reverse={true} />
      </div>

      <div id="salesforce-solutions" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner {...BannerData3} />
      </div>

      <div id="oracle-solutions" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner3 {...BannerData4} reverse={true} />
      </div>

      <div id="oracle-peoplesoft" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...BannerData6} />
      </div>

      <div id="cloud-services" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...BannerData7} reverse={true} />
      </div> 

      <div id="professional-staffing" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner {...BannerData5} />
      </div>
    </>
  );
}
