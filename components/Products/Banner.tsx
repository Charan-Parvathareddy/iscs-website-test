"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "@/components/utility/animation";
import Image from "next/image";
import { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import { Button } from "@/components/ui/button";

interface BannerProps {
  image: StaticImageData;
  title: string;
  subtitle: string | string[];  // Accept either a single string or array of strings
  link?: string;
  tag: string;
  reverse?: boolean;
}

const Banner: React.FC<BannerProps> = ({ image, title, subtitle, link , tag, reverse }) => {
  // Convert subtitle to array if it's a single string
  const paragraphs = Array.isArray(subtitle) ? subtitle : [subtitle];

  return (
    <div className="pb-14">
      <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <div className="container pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className={`flex justify-start items-center ${reverse ? "md:order-last md:justify-end" : ""}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="relative w-[400px] h-[400px]"
              >
                <Image
                  src={image}
                  alt="Banner"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6 lg:max-w-[600px]">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView="visible"
                className="text-sm text-orange-600 font-semibold uppercase tracking-wide"
              >
                {tag}
              </motion.p>
              
              <motion.h2
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView="visible"
                className="text-2xl lg:text-3xl font-bold leading-tight text-gray-900"
              >
                {title}
              </motion.h2>
              
              <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={SlideUp(0.9 + index * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    className="text-base text-gray-600 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              
              <motion.div
                variants={SlideUp(1.1)}
                initial="hidden"
                whileInView="visible"
                className="pt-4"
              >
                <Button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors">
                  {link ? <a href={link}>Know More</a> : "Get Started"}
                </Button> 
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;