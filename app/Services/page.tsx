import Img1 from "@/public/assets/tibco/tibco.jpg";
import Img2 from "@/public/assets/ai/ai.png";
import Img3 from "@/public/assets/salesforce/salesforce.webp";
import Img4 from "@/public/assets/Oracle/oracle1.png";
import Img5 from "@/public/assets/staffing/it-consulting.png";

import Banner from "@/components/Products/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerData = {
  image: Img1,
  tag:"TIBCO",
  title: "Seamless Data Integration and Process Automation with TIBCO ",
  subtitle: "In today's fast-paced business landscape, seamless data integration and efficient process automation are critical for success. TIBCO is a leading software solution that enables organizations to connect, unify, and leverage real-time data across their enterprise systems.TIBCO’s platform supports various industries in automating complex business processes, enhancing decision-making, and accelerating digital transformation. With robust features for data analytics, process orchestration, and API management, TIBCO empowers businesses to unlock the full potential of their data, driving innovation and operational efficiency.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "AI/ML Solutions",
  title: "Transforming Businesses with AI and Machine Learning",
  subtitle: "Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing industries by enabling businesses to harness the power of data for smarter decision-making and automation. AI/ML solutions offer advanced analytics, predictive modeling, and intelligent automation to optimize processes, enhance customer experiences, and drive innovation.With a wide range of applications—from natural language processing and computer vision to predictive maintenance and personalized recommendations—AI/ML solutions can be tailored to meet the unique needs of any business. By leveraging powerful algorithms, these solutions can process large datasets, uncover hidden patterns, and provide actionable insights in real time, helping companies stay ahead of the competition.",
  link: "#",
};

const BannerData3 = {
  image: Img3,
  tag: " Salesforce Solutions",
  title: "Tailored Salesforce Solutions for Every Business Need",
  subtitle: "Salesforce Solutions provide a comprehensive suite of tools and services designed to address the unique challenges of businesses across industries. Whether you’re looking to enhance customer engagement, streamline sales processes, or improve operational efficiency, Salesforce offers customized solutions that empower businesses to achieve their goals.With Salesforce Sales Cloud, teams can manage leads, track customer interactions, and close deals faster through robust sales automation and real-time insights. Service Cloud enables businesses to deliver exceptional customer support with intelligent case management, automated workflows, and AI-driven assistance.Marketing Cloud helps marketers create personalized campaigns, track customer journeys, and measure the effectiveness of their efforts, while Commerce Cloud powers seamless, scalable e-commerce experiences. ",
  link: "#",
};

const BannerData4 = {
  image: Img4,
  tag: "Oracle Solutions",
  title: "Comprehensive Oracle Solutions for Digital Transformation ",
  subtitle: "Oracle Solutions offer a robust suite of cloud applications, database services, and infrastructure that empower businesses to drive innovation, streamline operations, and achieve digital transformation. With a focus on data management, enterprise applications, and cloud infrastructure, Oracle provides tailored solutions for organizations across industries.For organizations looking to leverage emerging technologies, Oracle’s AI, ML, and blockchain solutions enable automation, data-driven insights, and secure digital transactions. Whether it’s modernizing legacy systems, migrating to the cloud, or transforming business processes, Oracle Solutions offer the flexibility, scalability, and intelligence needed to stay competitive in a rapidly changing market.",
  link: "#",
};


const BannerData5 = {
  image: Img5,
  tag: "Professional Staffing Services",
  title: "Connecting Talent with Opportunity Through Professional Staffing Services ",
  subtitle: "Professional Staffing Services provide businesses with the expertise they need to build agile, high-performing teams. Whether you’re looking to fill temporary roles, project-based positions, or permanent placements, professional staffing services offer tailored recruitment solutions that match the right talent to your business needs.From executive search to flexible workforce solutions, professional staffing services can support various staffing needs, including temporary staffing, contract-to-hire, and direct-hire placements. Whether it’s scaling up for a short-term project or finding the perfect candidate for a permanent role, professional staffing services help businesses stay competitive by ensuring access to the right talent at the right time.",
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
      <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <Banner {...BannerData5} />
</div>

    </>
  );
}
