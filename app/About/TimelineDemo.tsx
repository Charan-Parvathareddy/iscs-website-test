"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Lottie from "lottie-react";
import aboutTibcoAnimation from "@/public/assets/About/About-tibco.json";
import aboutBeginning from "@/public/assets/About/About-beginning.json";
import aboutOracle from "@/public/assets/About/About-Oracle.json";

export function TimelineDemo() {
  const data = [
    {
      title: "2020",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl tracking-tighter font-regular">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Beginning of ISCS
            </span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          ISCS Tech has started its journey - Incorporation July 2020 . India Operations with 4 employees at ODC , Hyderabad .
          </p>
          <div className="grid grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Lottie
                animationData={aboutBeginning}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <Image
              src="/assets/About/beginning-1.png"
              alt="startup template"
              width={200}
              height={200}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2020",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl tracking-tighter font-regular">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Middleware & Integration Services Practice
            </span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          ISCS Tech started building its Middleware & Integration Services Practice . Partnering with TIBCO , Competency Development , Trainings and Support Services . Started consulting services by partnering with IT Clients .
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/About/About-tibco.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Lottie
                animationData={aboutTibcoAnimation}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2021",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl tracking-tighter font-regular">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Oracle Solutions Practice
            </span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          ISCS Tech has partnered with Oracle Corporation for both OSI and OFSS to support it's RDC requirements.
           </p>
           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
           Started developing our ODC with certified and experienced consultants to support clients.
           </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/About/About-oracle12.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Lottie
                animationData={aboutOracle}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2021",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl tracking-tighter font-regular">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Middleware & Integration Services Practice
            </span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          ISCS Tech started building its Middleware & Integration Services Practice . Partnering with TIBCO , Competency Development , Trainings and Support Services . Started consulting services by partnering with IT Clients .
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/About/About-tibco.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Lottie
                animationData={aboutTibcoAnimation}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2020",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl tracking-tighter font-regular">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Middleware & Integration Services Practice
            </span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          ISCS Tech started building its Middleware & Integration Services Practice . Partnering with TIBCO , Competency Development , Trainings and Support Services . Started consulting services by partnering with IT Clients .
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/About/About-tibco.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Lottie
                animationData={aboutTibcoAnimation}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2020",
      content: (
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl tracking-tighter font-regular">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
            Middleware & Integration Services Practice
            </span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
          ISCS Tech started building its Middleware & Integration Services Practice . Partnering with TIBCO , Competency Development , Trainings and Support Services . Started consulting services by partnering with IT Clients .
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/About/About-tibco.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              <Lottie
                animationData={aboutTibcoAnimation}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      ),
    },
   
  ];
  return (
    <div className="w-full">
      
      <Timeline data={data} />
      
    </div>
  );
}
