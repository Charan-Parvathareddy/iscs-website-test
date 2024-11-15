import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "AI/ML | Data Engg & Science",
      description: "Transform your business with our tailored AI and machine learning solutions that enhance insights, automate processes, and drive innovation.",
      image: "/assets/ai/ai.png",
      slug: "ai-ml-solutions"
    },
    {
      title: "TIBCO Services",
      description: "Leverage our TIBCO services to enhance data integration, analytics, and application connectivity. We offer tailored solutions to streamline your processes.",
      image: "/assets/tibco/tibco-logo.webp",
      slug: "tibco-services"
    },
    {
      title: "Cloud Services",
      description: "Maximize your enterprise potential with our Oracle solutions. We offer tailored services in database management, cloud applications, and analytics to enhance operational efficiency.",
      image: "/assets/cloud-services.jpg",
      slug: "cloud-services"
    },
    {
      title: "Salesforce Services",
      description: "Optimize your business operations with our comprehensive Salesforce solutions. We provide expert implementation, customization, and support.",
      image: "/assets/salesforce/salesforce-logo.png",
      slug: "salesforce-solutions"
    },
    {
      title: "Oracle Services",
      description: "Maximize your enterprise potential with our Oracle solutions. We offer tailored services in database management, cloud applications, and analytics to enhance operational efficiency.",
      image: "/assets/Oracle/Oracle_logo.svg",
      slug: "oracle-solutions"
    },
    {
      title: "PeopleSoft Services",
      description: "Maximize your enterprise potential with our Oracle solutions. We offer tailored services in database management, cloud applications, and analytics to enhance operational efficiency.",
      image: "/assets/Oracle/download.png",
      slug: "oracle-peoplesoft"
    },
    {
      title: "Strategic IT Resource Consulting ",
      description: "Find the right talent for your business with our professional staffing services. We specialize in connecting you with skilled professionals across various industries.",
      image: "/assets/staffing/professional-staffing.webp",
      slug: "professional-staffing"
    }
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-8"
      style={{
        backgroundImage: "url('/background-2.png')",
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Our Services
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {services.map((service, index) => (
          <Card key={index} className="w-full flex flex-col">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-base sm:text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-2 sm:p-4 flex flex-col">
              <div className="relative flex items-center justify-center w-full h-28 sm:h-40 mb-3 sm:mb-6">
                {/* Mobile view: 80% size wrapper */}
                <div className="w-full h-full relative sm:hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="80vw"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Desktop view: full size wrapper */}
                <div className="hidden sm:block w-full h-full relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 40vw, 25vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <CardDescription className="hidden lg:block">{service.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto p-3 sm:p-6">
              <Link
                href={`/Services#${service.slug}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Know more →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Services;