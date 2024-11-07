import Img1 from "@/public/assets/Products/G-Nayana.png";
import Img2 from "@/public/assets/elearning.png";
import Img3 from "@/public/assets/middleware.png";
import Img4 from "@/public/assets/ihrms.png";

import Banner1 from "@/components/Products/Banner1";
import Banner from "@/components/Products/Banner";
import Banner3 from "@/components/Products/Banner3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerData = {
  image: Img1,
  tag: "G-Nayana",
  title: "AI-Driven Severity Classification for Diabetic Retinopathy",
  subtitle: [
    "Diabetic retinopathy (DR) is one of the most common complications of diabetes and a leading cause of vision impairment and blindness worldwide, affecting millions of patients. Timely detection and intervention are critical to preserving vision and preventing long-term damage. However, traditional diagnostic methods are often labor-intensive, time-consuming, and dependent on subjective assessments by ophthalmologists, which can delay treatment.",
    
    "ISCS addresses this challenge with an AI-powered solution leveraging advanced deep learning models such as Convolutional Neural Networks (CNNs) and Vision Transformers. This cutting-edge technology ensures precise and rapid detection of diabetic retinopathy stages, enabling healthcare providers to act swiftly.",
    
    "With this solution, medical professionals can access real-time, automated predictions of DR severity, eliminating bottlenecks caused by manual image reviews. Our AI-driven classification not only improves diagnostic accuracy but also ensures that patients receive timely treatments, minimizing the risk of vision loss.",
    
    "By streamlining the diagnostic workflow through automation and predictive analytics, we empower healthcare providers to enhance patient outcomes and reduce diabetes-related vision loss, ultimately improving the quality of life for diabetic patients."
  ],
  link: "https://ai-ra.vercel.app/",
};

const Banner1Data2 = {
  image: Img3,
  tag: "Mi-Ware",
  title: "Cost-Effective Middleware Integration Solution for Enterprises",
  subtitle: [
    "In today’s digital world, enterprise systems are built on a wide variety of applications that require seamless data integration for efficient operations. However, traditional middleware solutions are often costly, rigid, and complex, making integration challenging for businesses aiming to balance cost with performance.",
    
    "Mi-Ware by ISCS Technologies provides an affordable, flexible solution for middleware integration, designed to empower enterprises of all sizes. Built on a Python-based platform, Mi-Ware enables robust connectivity between diverse software systems, simplifying data management and enhancing operational efficiency without the heavy licensing fees typical of other middleware tools.",
    
    "Our solution combines cost-effectiveness, flexibility, and scalability with the power of open-source technology, enabling businesses to focus on growth and innovation rather than integration challenges. Mi-Ware’s Python foundation also allows for faster implementation and greater customizability, ensuring that each business can tailor the system to meet unique requirements.",
    
    "By choosing Mi-Ware, enterprises gain the freedom to expand and adapt to evolving demands without incurring prohibitive costs, making it an ideal solution for companies seeking streamlined integration with a high return on investment."
  ],
  link: "https://ai-ra.vercel.app/",
};

const Banner1Data3 = {
  image: Img4,
  tag: " i-HRMS",
  title: "i-HRMS: Automated Human Resource Management Solution ",
  subtitle: "i-HRMS is a home-grown application developed by the ISCS tech team to streamline human resource management activities within organizations. Designed to automate critical HR functions, it efficiently handles tasks such as administration, recruitment, attendance management, and leave management. By minimizing reliance on manual processes, i-HRMS empowers HR teams to focus on more strategic initiatives while ensuring that essential operations run smoothly.",
  link: "#",
};

const Banner1Data4 = {
  image: Img2,
  tag: "OGcom-eLP",
  title: "An  Interactive E-Learning Platform ",
  subtitle: "An innovative e-Learning platform created in collaboration with leading educationists from prominent universities. This interactive online portal features a comprehensive repository of multinational-level competitive exam papers, providing students with the tools they need to excel in various competitive exams. With its stunning user interface designed for optimal viewing and readability, OGcom-eLP covers a broad range of subjects, including Mathematics, Physics, and Chemistry, and offers a diverse selection of competitive exams from multiple organizations across different countries.",
  link: "#",
};

export default function Home() {
  return (
    <>  <div id="g-nayana" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner3 {...BannerData} />
      </div>
      <div id="mi-ware" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...Banner1Data2} reverse={true} />
      </div>
      <div id="i-hrms" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner1 {...Banner1Data3} />
</div>
<div id="ogcom-elp" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner1 {...Banner1Data4} reverse={true} />
      </div>
    </>
  );
}
