"use client";
import Img1 from "@/public/assets/ai/ai-strategy-ml.jpg";
import Img2 from "@/public/assets/ai/ml-models-ml.png";

import Banner1 from "@/components/Products/Banner1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';


const Banner1Data = {
  image: Img1,
  tag: "AI Strategy",
  title: "Develop AI-Driven Solutions",
  subtitle: [
    "In today’s data-driven business landscape, AI is essential for gaining meaningful insights, automating complex tasks, and achieving long-term growth. At ISCS, we provide comprehensive AI strategies to help organizations make data-driven decisions and foster innovation.",
    "Our AI capabilities include NLP for improved customer interactions, predictive analytics for trend forecasting, and intelligent automation to streamline operations. We work collaboratively with clients to identify business goals and pain points, ensuring a tailored AI strategy that maximizes value.",
    "Our end-to-end approach—from strategy and model design to deployment and support—empowers businesses to thrive in a data-rich environment, helping them adapt proactively to market shifts.",
    "AI is transforming industries such as healthcare, finance, and retail. ISCS’s expertise in delivering future-ready AI solutions enables businesses to remain competitive and agile, positioning them for growth in the digital era."
  ],
  link: "#",
};

const Banner1Data2 = {
  image: Img2,
  tag: "Machine Learning Models",
  title: "Build and Deploy ML Models",
  subtitle: [
    "ISCS specializes in building and deploying advanced ML models to unlock real-time insights and automate business processes. Our ML solutions include Computer Vision for anomaly detection in manufacturing, Predictive Maintenance to reduce downtime in logistics, and personalized recommendations to increase customer engagement in e-commerce.",
    "Our ML models are powered by robust frameworks like TensorFlow, PyTorch, and Scikit-Learn, ensuring high scalability and integration flexibility across cloud, on-premise, or hybrid setups.",
    "With predictive maintenance and anomaly detection, our models help prevent operational disruptions and mitigate risks in industries such as finance and manufacturing.",
    "Our step-by-step approach—from model development to training and support—ensures seamless integration and empowers businesses to harness the power of ML. By partnering with ISCS, organizations are equipped with state-of-the-art ML tools that enable them to navigate today’s data-driven environment confidently."
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
        backgroundImage: "url('/background-2.png')"
      }}>
        <Banner1 {...Banner1Data2} reverse={true} />
      </div>

      
    </>
  );
}
