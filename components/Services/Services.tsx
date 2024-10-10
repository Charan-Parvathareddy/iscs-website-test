import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      title: "AI/ML Solutions",
      description: "Transform your business with our tailored AI and machine learning solutions that enhance insights, automate processes, and drive innovation.",
      image: "/assets/ai/ai.png"
    },
    {
      title: "Salesforce Solutions",
      description: "Optimize your business operations with our comprehensive Salesforce solutions. We provide expert implementation, customization, and support.",
      image: "/assets/salesforce/salesforce.webp"
    },
    {
      title: "TIBCO Services",
      description: "Leverage our TIBCO services to enhance data integration, analytics, and application connectivity. We offer tailored solutions to streamline your processes.",
      image: "/assets/tibco/tibco.jpg"
    },
    {
      title: "Oracle Solutions",
      description: "Maximize your enterprise potential with our Oracle solutions. We offer tailored services in database management, cloud applications, and analytics to enhance operational efficiency.",
      image: "/assets/Oracle/oracle.webp"
    },
    {
      title: "Professional Staffing Services",
      description: "Find the right talent for your business with our professional staffing services. We specialize in connecting you with skilled professionals across various industries.",
      image: "/assets/staffing/professional-staffing.webp"
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
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
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