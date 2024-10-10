"use client";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Lottie from "lottie-react";
import aboutAnimation from "@/public/About-Animation.json";

export const Benefits = () => (
  <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat py-8" style={{
    backgroundImage: "url('/background-3.png')"
  }}>
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container py-4 grid-cols-1 gap-20 items-center lg:grid-cols-2 ">
          <div className="rounded-md aspect-square">
            <Lottie animationData={aboutAnimation} loop={true} />
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex gap-2 flex-col">
              <div>
                <Badge variant="outline">At ISCS</Badge>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-2xl lg:text-4xl tracking-tighter max-w-md text-left font-regular">
                Benefits
                </h2>
              
              </div>
            </div>
            <div className="grid lg:pl-3 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-3">
              <div className="flex flex-row gap-3 items-start">
                <Check className="w-3 h-3 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>We provide competitive benefits appropriate to the industry, worldwide.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-start">
                <Check className="w-3 h-3 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Our attractive benefits include performance-related pay, variable remuneration, incentive plans, retirement plans, and medical coverage.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-start">
                <Check className="w-3 h-3 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>We offer flexible working arrangements and focus on developing skills, fostering experience, and enriching working life globally, promoting an inclusive culture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);