"use client";  // Ensures this component is treated as a client-side component

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
  subtitle: string;
  link?: string;
  tag: string;
  reverse?: boolean;
}

const Banner: React.FC<BannerProps> = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className="pb-14">
      <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/background-1.png')"
      }}>
        <div className="container pt-20"> {/* Added pt-20 for 20 points padding from the top */}
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
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
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
            {/* Banner text section */}
            <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView="visible"
                className="text-sm text-orange-600 font-semibold capitalize"
              >
                {tag}
              </motion.p>
              <motion.p
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView="visible"
                className="text-xl lg:text-2xl font-semibold capitalize"
              >
                {title}
              </motion.p>
              <motion.p
                variants={SlideUp(0.9)}
                initial="hidden"
                whileInView="visible"
                className="text-sm text-slate-500"
              >
                {subtitle}
              </motion.p>
              <motion.div
                variants={SlideUp(1.1)}
                initial="hidden"
                whileInView="visible"
                className="flex justify-center md:justify-start"
              >
                <Button className="mt-5">
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