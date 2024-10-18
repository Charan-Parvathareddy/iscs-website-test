import Img1 from "@/public/assets/Products/G-Nayana.png";
import Img2 from "@/public/assets/elearning.png";
import Img3 from "@/public/assets/middleware.png";
import Img4 from "@/public/assets/ihrms.png";

import Banner from "@/components/Products/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerData = {
  image: Img1,
  tag: " G-Nayana",
  title: "Severity Classification for Diabetic Retinopathy Leveraging AI ",
  subtitle: "Diabetic retinopathy (DR) is a leading cause of vision impairment and blindness among diabetic patients, significantly impacting their quality of life. Early detection and timely intervention are crucial for preventing permanent damage and preserving vision. However, traditional diagnostic methods can be time-consuming, labor-intensive, and subjective, often relying on manual image review by specialized ophthalmologists. In response to this pressing challenge, ISCS has developed an innovative AI-powered solution that harnesses advanced deep learning techniques, including Convolutional Neural Networks (CNNs) and Vision Transformers. This cutting-edge technology delivers accurate and rapid predictions of diabetic retinopathy stages, enabling healthcare professionals to make informed decisions and initiate appropriate treatments sooner. By streamlining the diagnostic process, ISCS aims to enhance patient outcomes and reduce the burden of diabetes-related vision loss.",
  link: "#",
};

const BannerData2 = {
  image: Img3,
  tag: "Mi-ware: Middleware Tool",
  title: "A Python-based Middleware Tool designed as a free alternative to TIBCO ",
  subtitle: "At ISCS Technologies, we are proud to offer Mi-ware, a Python-based Middleware Tool designed as a free alternative to TIBCO. Mi-ware facilitates seamless integration between applications, automates data flow, and enhances process management efficiency. With its robust features, Mi-ware empowers organizations to streamline their operations and improve productivity.",
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
    <>  <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData} />
      </div>
      <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData2} reverse={true} />
      </div>
      <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData3} />
</div>
<div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData4} reverse={true} />
      </div>
    </>
  );
}
