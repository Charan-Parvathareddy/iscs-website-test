"use client";
import React from 'react';
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import cafImage from '@/public/caf.png'; // Adjust the path to the location of caf.png


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        <Highlight>CAPABLE</Highlight> 
        
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I don't like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of <Highlight>Fight Club</Highlight> is that you do not
        talk about fight club. The second rule of{" "}
        <Highlight>Fight Club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

const FeatureComponent = () => {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-3.png')"
    }}>
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">CAF Approach - ISCS Success Mantra</h2>
            <p className="text-base text-gray-600">
              CAF (Capable | Available | Flexible) - ISCS Tech innovated the process of Client Support through a unique model - CAF based upon client's project's demands as and when need arises.
            </p>
            <p className="text-base text-gray-600">
              ISCS is a fast-growing global IT Services company maintaining trusted client partner relationships with top IT global players such as Oracle & TIBCO.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded">
              Get in Touch
            </button>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <div className="h-[30rem] flex items-center justify-center w-full">
              {/* <CardStack items={CARDS} /> */}
              <Image 
        src={cafImage} 
        alt="Description of the image" 
        layout="responsive" // Use "responsive" or "intrinsic" based on your needs
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
      />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
