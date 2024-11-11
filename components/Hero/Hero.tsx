'use client';

import React from 'react';
import { MoveRight, PhoneCall} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/wobble-card";
import Autoplay from "embla-carousel-autoplay";
import { useScroll } from '@/contexts/ScrollContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cardContent = [
  {
    title: "Next-Generation Enterprise Solutions",
    description: "Harness the power of AI/ML, Cloud Computing, and Enterprise Integration to transform your business operations. Our certified experts deliver scalable, secure, and innovative solutions.",
    image: "/assets/ISCS/Innovation.jpg",
  },
  {
    title: "AI-Powered Industry Solutions",
    description: "Purpose-built products designed for specific industry challenges, combining cutting-edge technology with domain expertise in Healthcare, HR, and Learning Management.",
    image: "/assets/ISCS/Strategic.jpg",
  },
  {
    title: "Strategic Technology Consulting",
    description: "Transform your business vision into reality with our comprehensive consulting services, backed by global expertise and local insights across continents.",
    image: "/hero.webp",
  },
];


const colors = {
  primary: '#0066CC',    // Blue
  secondary: '#FF3366',  // Red
  accent: '#FFB800',     // Yellow
  green: '#009944',      // Green from ISCS logo
  text: '#333333'
}

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const refs = useScroll();

  const scrollToContact = () => {
    refs.contact.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeature = () => {
    refs.feature.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      {/* Responsive Certification Banner */}
      

      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
            <Badge
              variant="outline"
              className="border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white transition-colors px-4 py-1"
            >
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text hover:text-white">
                Your Trusted Global IT Partner
              </span>
            </Badge>
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text hover:text-black">
               
              Experienced | Enriched | Envisioned
            </span>

            <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold">
              Innovative Strategic Consulting Services
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
        ISCS Technologies stands at the forefront of digital transformation, delivering end-to-end IT solutions that empower businesses to thrive in a competitive landscape. Our tailored, industry-specific products leverage the latest in AI , cloud computing and data analytics, ensuring clients not only keep pace with technological advancements but lead their industries.
</p>
<p className="text-sm text-muted-foreground leading-relaxed">
With a strong presence across continents, our team of seasoned consultants brings deep domain expertise and strategic insights to help organizations seamlessly bridge the gap between innovative technology and tangible business success. From enterprise integration to customized digital solutions, we are committed to driving growth, efficiency, and resilience for our clients worldwide.
</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button 
                size="lg" 
                className="gap-2" 
                style={{
                  backgroundColor: colors.primary,
                  color: 'white'
                }}
                onClick={scrollToContact}
              >
                Contact Us <PhoneCall className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                className="gap-2"
                style={{
                  backgroundColor: colors.secondary,
                  color: 'white'
                }}
                onClick={scrollToFeature}
              >
                Know More <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="hidden lg:block w-full max-w-xl mx-auto relative">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {cardContent.map((card, index) => (
                  <CarouselItem key={index}>
                    <WobbleCard containerClassName="bg-green-1200  overflow-hidden">
                      <div className="px-6 py-4">
                        <h2 className="text-2xl font-semibold text-black mb-3">
                          {card.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {card.description}
                        </p>
                      </div>
                      <div className="relative w-full h-48">
                        <Image
                          src={card.image}
                          alt={`${card.title} illustration`}
                          fill
                          className="object-cover grayscale filter"
                        />
                      </div>
                    </WobbleCard>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-[-30px] w-full flex justify-center gap-2">
                <CarouselPrevious className="relative left-0" />
                <CarouselNext className="relative right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;