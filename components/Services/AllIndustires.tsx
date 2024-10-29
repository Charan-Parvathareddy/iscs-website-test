import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function AllIndustries() {
  const industries = [
    {
      title: "Banking & Financial Services",
      description: "We provide innovative solutions for risk management, compliance, and digital transformation to help your organization thrive in a competitive landscape.",
      image: "/assets/Industries/Banking-Industry.jpg"
    },
    {
      title: "Communication Technologies",
      description: "We offer solutions that enhance collaboration, streamline communication, and improve operational efficiency, ensuring your organization stays connected.",
      image: "/assets/Industries/Communication-Industry.jpg"
    },
    {
      title: "High-Tech & Semiconductor",
      description: "We provide cutting-edge technology consulting, process optimization, and supply chain management services.",
      image: "/assets/Industries/motherboard-background.jpg"
    },

    {
        "title": "Education & e-Learning",
        "description": "We empower educational institutions with advanced e-learning solutions, curriculum design, and digital transformation strategies to enhance learning outcomes.",
        image: "/assets/Industries/education-industry.png"
    },
   
    {
      title: "Information Services",
      description: "We specialize in data management, analytics, and IT consulting, delivering insights that drive informed decision-making and enhance operational efficiency for your organization.",
      image: "/assets/Industries/Information-Services.jpg"
    },
    {
      title: "Retail & Consumer Goods",
      description: "We focus on enhancing customer experiences, optimizing supply chains, and leveraging data analytics to drive sales and improve operational efficiency in a competitive market.",
      image: "/assets/Industries/Retail-Industry.jpg"
    },
    {
      title: "Trading & Distribution",
      description: "We specialize in optimizing supply chains, enhancing inventory management, and improving logistics to ensure efficient product flow and maximize profitability in your business.",
      image: "/assets/Industries/Distribution.jpg"
    },
    {
        "title": "Industrial Manufacturing",
        "description": "We drive innovation in manufacturing with solutions for automation, process optimization, and supply chain management to enhance efficiency and productivity.",
        image: "/assets/Industries/manufacturing-industry.png"
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
            Industries
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {industries.map((industry, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle>{industry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={industry.image}
                alt={industry.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <CardDescription>{industry.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Try now →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllIndustries;