"use client";
import React from 'react';

import { cn } from "@/lib/utils";
import Image from 'next/image';
import cafImage from '@/public/caf.png';


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


const FeatureComponent = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background-3.png')" }}
    >
       <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">CAF Approach - ISCS Success Mantra</h2>
          <p className="text-base text-gray-600">
            At ISCS, we pride ourselves on redefining client support through our innovative CAF (Capable | Available | Flexible) approach, designed to seamlessly align with the evolving demands of each project. This agile framework ensures that our expertise and resources are deployed precisely when and where they are needed, maximizing efficiency and responsiveness.
          </p>
          <p className="text-base text-gray-600">
            Our CAF approach empowers clients with scalable support, whether they require immediate technical assistance or long-term strategic collaboration, fostering adaptability in an ever-changing business environment.
          </p>
          <p className="text-base text-gray-600">
            As a fast-growing global IT services provider, we have established ourselves as a trusted partner to leading technology giants, including Oracle and TIBCO. Our commitment to building enduring partnerships and delivering innovative solutions has positioned us as a preferred ally for organizations seeking excellence in IT consulting and integration.
          </p>
          
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <div className="h-[30rem] flex items-center justify-center w-full">
            <Image 
              src={cafImage} 
              alt="CAF Approach illustration" 
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeatureComponent;
