"use client";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Lottie from "lottie-react";

import aboutAnimation from "@/public/About-Benefits.json";


export const Culture = () => (
  <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat py-8" style={{
    backgroundImage: "url('/background-3.png')"
  }}>
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container py-4 grid-cols-1 gap-4 items-center lg:grid-cols-2">
          <div className="flex gap-5 flex-col">
            <div className="flex gap-2 flex-col">
              <div>
                <Badge variant="outline">At ISCS</Badge>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-2xl lg:text-4xl tracking-tighter max-w-md text-left font-regular">
                  Our Culture
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                  Managing a small business today is already tough.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-3 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-3">
              <div className="flex flex-row gap-3 items-start">
                <Check className="w-3 h-3 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>At ISCS, our performance-oriented culture and responsible approach
                     are the foundations of our success. We strive to maintain a fun 
                     and positive work environment.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-start">
                <Check className="w-3 h-3 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>We believe in individual interest and letting employees find their 
                    own rhythm. Work must be appealing to gain maximum quality in the work force.</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-start">
                <Check className="w-3 h-3 mt-1 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>We recognize that our business depends on employee creativity and dedication. 
                    We encourage achievement through collaboration and innovation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md aspect-square">
            <Lottie animationData={aboutAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  </div>
);