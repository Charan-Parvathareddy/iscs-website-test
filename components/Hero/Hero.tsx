'use client'

import React, { useRef } from 'react'
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { WobbleCard } from "@/components/ui/wobble-card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const cardContent = [
  {
    title: "Innovative Enterprise Solutions",
    description: "Delivering cutting-edge IT solutions that transform businesses and drive growth in digital era.",
    image: "/assets/ISCS/Innovation.jpg"
  },
  {
    title: "Global Resource Consulting",
    description: "Expert talent acquisition and management services to help your business thrive in a competitive landscape.",
    image: "/assets/ISCS/Strategic.jpg"
  },
  {
    title: "Industry-Specific IT Products",
    description: "Tailored technology solutions designed to meet the unique challenges of various industry sectors.",
    image: "/hero.webp"
  }
]

export default function Hero() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-8 flex-col items-center lg:items-start"> {/* Increased gap-4 to gap-8 */}
            <div>
              <Badge variant="outline">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                
              ISCS Technologies
              </span></Badge>
            </div>
            <div className="flex gap-8 flex-col"> {/* Increased gap-4 to gap-8 */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-lg tracking-tighter text-center lg:text-left font-regular">
                Innovative&nbsp;Strategic<br />
                Consulting&nbsp;Services
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-center lg:text-left">
                ISCS Technologies offers IT Enterprise Business Solutions, 
                Various Industry Specific IT Products and Resource Consulting Services Globally.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4"> {/* Added mt-4 for extra spacing */}
              <Button size="lg" className="gap-2" variant="outline">
                Contact Us <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-2">
                Know More  <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block w-full max-w-xl mx-auto relative">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {cardContent.map((card, index) => (
                  <CarouselItem key={index}>
                    <WobbleCard containerClassName="bg-green-1200 min-h-[500px] lg:min-h-[300px] overflow-hidden">
                      <div className="max-w-xs relative z-10">
                        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
                          {card.title}
                        </h2>
                        <p className="mt-4 text-left text-base/6 text-grey-200">
                          {card.description}
                        </p>
                      </div>
                      <div className="absolute -right-[20%] lg:-right-[30%] -bottom-10 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                        <div className="relative w-full h-full">
                          <Image
                            src={card.image}
                            fill
                            alt={`${card.title} illustration`}
                            className="grayscale filter object-contain"
                          />
                        </div>
                      </div>
                    </WobbleCard>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -bottom-12 w-full flex justify-center gap-2">
                <CarouselPrevious className="relative translate-y-0 left-0" />
                <CarouselNext className="relative translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}