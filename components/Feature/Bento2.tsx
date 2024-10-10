"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Globe from "@/components/magicui/globe";
import { Phone, Mail } from 'lucide-react';

export function Bento2() {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat py-16" style={{
      backgroundImage: "url('/background-3.png')"
    }}>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(
            "[&>p:text-lg]",
            "border border-neutral-200 dark:border-white/[0.2]",
            item.className
          )}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-col rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-4 items-start space-y-2 bg-white dark:bg-black"
      >
        <div className="flex items-center space-x-2">
          <h3 className="font-bold text-lg">Quality Management System</h3>
        </div>
        <p className="text-sm font-medium">ISO 9001:2015</p>
        <a 
          href="/path-to-certificate.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          View Certificate
        </a>
      </motion.div>
    </motion.div>
  );
};


const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-col rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-4 items-start space-y-2 bg-white dark:bg-black"
      >
        <div className="flex items-center space-x-2">
          
          <h3 className="font-bold text-lg">Information Security Management System</h3>
        </div>
        <p className="text-sm font-medium">ISO/IEC 27001:2013</p>
        <a 
          href="/path-to-certificate.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          View Certificate
        </a>
      </motion.div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[16rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={variants}
        className="h-full w-1/4 rounded-2xl bg-orange-50/80 dark:bg-orange-900/20 p-3 border border-orange-200 flex flex-col relative overflow-hidden"
      >
        <h3 className="font-bold text-base text-orange-700 dark:text-orange-300">India</h3>
        <p className="text-xs font-medium text-orange-600 dark:text-orange-400">Corporate Office & Delivery Center</p>
        <p className="text-[10px] text-orange-600 dark:text-orange-400 mt-1">Level 4, Gumidelli Towers, Old Airport Rd, Begumpet, Hyderabad, TS- 500016, India.</p>
        <div className="mt-auto pt-2">
          <p className="text-[10px] text-orange-600 dark:text-orange-400 flex items-center">
            <Phone className="h-2.5 w-2.5 mr-1" /> +91 75695 38823
          </p>
          <p className="text-[10px] text-orange-600 dark:text-orange-400 flex items-center mt-0.5">
            <Mail className="h-2.5 w-2.5 mr-1" /> info@iscstech.com
          </p>
        </div>
      </motion.div>

      <motion.div 
        variants={variants}
        className="h-full w-1/4 rounded-2xl bg-red-50/80 dark:bg-red-900/20 p-3 border border-red-200 flex flex-col relative overflow-hidden"
      >
        <h3 className="font-bold text-base text-red-700 dark:text-red-300">Canada</h3>
        <p className="text-[10px] text-red-600 dark:text-red-400 mt-1">165 Matheson Blvd East, Unit #5A, Mississauga, ON, Canada - L4Z 3K2.</p>
        <div className="mt-auto pt-2">
          <p className="text-[10px] text-red-600 dark:text-red-400 flex items-center">
            <Phone className="h-2.5 w-2.5 mr-1" /> +1-647-846-2033
          </p>
          <p className="text-[10px] text-red-600 dark:text-red-400 flex items-center mt-0.5">
            <Phone className="h-2.5 w-2.5 mr-1" /> +1-416-829-6643
          </p>
          <p className="text-[10px] text-red-600 dark:text-red-400 flex items-center mt-0.5">
            <Mail className="h-2.5 w-2.5 mr-1" /> info@iscstech.com
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        className="h-full w-1/4 rounded-2xl bg-blue-50/80 dark:bg-blue-900/20 p-3 border border-blue-200 flex flex-col relative overflow-hidden"
      >
        <h3 className="font-bold text-base text-blue-700 dark:text-blue-300">USA</h3>
        <p className="text-[10px] text-blue-600 dark:text-blue-400 mt-1">2055 Limestone Road STE 200-C, Wilmington, Delaware, 19702</p>
        <div className="mt-auto pt-2">
          <p className="text-[10px] text-blue-600 dark:text-blue-400 flex items-center">
            <Phone className="h-2.5 w-2.5 mr-1" /> +1-302-725-4554
          </p>
          <p className="text-[10px] text-blue-600 dark:text-blue-400 flex items-center mt-0.5">
            <Mail className="h-2.5 w-2.5 mr-1" /> info@iscstech.com
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={variants}
        className="h-full w-1/4 rounded-2xl bg-green-50/80 dark:bg-green-900/20 p-3 border border-green-200 flex flex-col relative overflow-hidden"
      >
        <h3 className="font-bold text-base text-green-700 dark:text-green-300">Australia</h3>
        <p className="text-[10px] text-green-600 dark:text-green-400 mt-1">10 Keilor Road, Essendon North, Victoria 3041 Australia.</p>
        <div className="mt-auto pt-2">
          <p className="text-[10px] text-green-600 dark:text-green-400 flex items-center">
            <Phone className="h-2.5 w-2.5 mr-1" /> +61 302-503-5426
          </p>
          <p className="text-[10px] text-green-600 dark:text-green-400 flex items-center mt-0.5">
            <Mail className="h-2.5 w-2.5 mr-1" /> info@iscstech.com
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};


const SkeletonFive = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-8 py-16">
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
        <div className="absolute bottom-[-50%] w-full h-full flex items-center justify-center">
          <Globe className="scale-150" />
        </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
      </div>
    </motion.div>
  );
};
export default SkeletonFive;
const items = [
  {
    title: "Quality Management System",
    description: (
      <span className="text-sm">
        ISO 9001:2015 certified for excellence in quality management.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Information Security Management System",
    description: (
      <span className="text-sm">
        ISO/IEC 27001:2013 certified for robust information security practices.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "",
    description: (
      <span className="text-xs">
       
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: '',
  },

  {
    title: "",
    description: (
      <span className="text-sm">
        
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: '',
  },
];
