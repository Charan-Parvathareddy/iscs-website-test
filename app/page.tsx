import HorizontalScroller2 from "@/components/BrandLogos/Clients";
import { Contact } from "@/components/Contact/Contact";
import { Bento2 } from "@/components/Feature/Bento2";
import FeatureComponent from "@/components/Feature/Feature";
import { Feature1 } from "@/components/Feature/Feature1";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import { Industries } from "@/components/Services/Industries";
import { Services } from "@/components/Services/Services";



export default function Home() {
  return (
    <>
    <Hero/>
    <FeatureComponent/>
    
 
 

  <Services/>
  <HorizontalScroller2/>
  <Feature1/>
  <Industries/>
    <Projects/>
    
    {/* <Bento2/> */}
  
    <Contact/>

   
    </>
  );
}
