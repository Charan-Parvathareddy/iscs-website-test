import Img1 from "@/public/assets/Products/G-Nayana.png";
import Img2 from "@/public/assets/elearning.png";
import Img3 from "@/public/assets/middleware.png";
import Img4 from "@/public/assets/ihrms.png";

import Banner from "@/components/Products/Banner";
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

const BannerData2 = {
  image: Img3,
  tag: "Mi-ware: Middleware Tool",
  title: "A Python-based Middleware Tool designed as a free alternative to TIBCO ",
  subtitle: "At ISCS Technologies, we are proud to offer Mi-ware, a Python-based Middleware Tool designed as an low-cost alternative to TIBCO. Mi-ware facilitates seamless integration between applications, automates data flow, and enhances process management efficiency. With its robust features, Mi-ware empowers organizations to streamline their operations and improve productivity.",
  link: "#",
};

const BannerData3 = {
  image: Img4,
  tag: " i-HRMS",
  title: "i-HRMS: Automated Human Resource Management Solution ",
  subtitle: "i-HRMS is a home-grown application developed by the ISCS tech team to streamline human resource management activities within organizations. Designed to automate critical HR functions, it efficiently handles tasks such as administration, recruitment, attendance management, and leave management. By minimizing reliance on manual processes, i-HRMS empowers HR teams to focus on more strategic initiatives while ensuring that essential operations run smoothly.",
  link: "#",
};

const BannerData4 = {
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
      <Banner {...BannerData} />
      </div>
      <div id="mi-ware" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData2} reverse={true} />
      </div>
      <div id="i-hrms" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData3} />
</div>
<div id="ogcom-elp" className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData4} reverse={true} />
      </div>
    </>
  );
}
