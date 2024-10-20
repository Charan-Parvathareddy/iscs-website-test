import HorizontalScroller2 from "@/components/BrandLogos/Clients";
import { Contact } from "@/components/Contact/Contact";
import FeatureComponent from "@/components/Feature/Feature";
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
    <Projects/>
    <Industries/>
    <Contact/>
    </>
  );
}
