"use client";
import Img1 from "@/public/assets/ai/ai-strategy-ml.jpg";
import Img2 from "@/public/assets/ai/mlmodels-ml.png";

import Banner1 from "@/components/Products/Banner1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';


const Banner1Data = {
  image: Img1,
  tag: "Our Solution",
  title: "Streamlining Data Flow with Middleware Integration",
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
  tag: "Low Cost",
  title: "Efficient Integration Solution",
  subtitle:  [
    "Designed with affordability in mind, our middleware integration solution leverages the power of open-source Python libraries to eliminate the high costs associated with proprietary software. Unlike traditional integration tools that come with expensive licensing fees, our solution provides a robust, scalable platform that avoids these recurring expenses. This allows enterprises to redirect resources toward innovation and other strategic initiatives rather than costly maintenance or software renewals.",
    "Beyond initial cost savings, our integration model is designed for low ongoing expenses. It requires fewer resources for maintenance, thanks to its streamlined architecture and Python’s clean, simple syntax, which reduces technical debt and minimizes downtime.",
    "The cost-effective nature of our solution also supports the needs of growing businesses by offering scalability without additional fees, making it ideal for companies looking to expand. With a strong focus on operational efficiency, our solution reduces the cost of ownership while maintaining the high standards of performance and connectivity expected in today’s digital landscape.",
    "Our solution’s affordability extends to lower training and onboarding costs for technical teams, as Python’s popularity ensures that talent is readily available and proficient.",
    "Moreover, the open-source community continuously supports and innovates Python, ensuring our middleware solution remains at the cutting edge without additional investment from the enterprise. This makes our solution an excellent fit for businesses that seek both immediate and long-term cost savings."
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
      <div id="our-solution" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data} />
      </div>

      <div id="mi-ware" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <Banner1 {...Banner1Data2} reverse={true} />
      </div>

      
    </>
  );
}
