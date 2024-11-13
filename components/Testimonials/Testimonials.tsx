'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  companyLogo: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Naveen Kumar Alagapally",
    role: "Techno - Functional Architect",
    company: "ERPA",
    companyLogo: "/assets/Client_Logos/ERPA.png",
    quote: "We would like to commend and thank you for completing our project requirements of Build & Run Phase within the agreed upon scope and timelines.Your project team and personnel have exhibited professional excellence and cooperative attitude. They are worthy of our appreciation for a timely and satisfactory completion. We hope to be working with your company on future projects."
  },
  {
    id: 2,
    name: "Mr. Deepak Belade",
    role: "VMG - Procurement Head",
    company: "CSG",
    companyLogo: "/assets/Client_Logos/CSG.jpg",
    quote: "ISCS Tech from the date of inception has been the top vendor in deploying TIBCO resources across PAN India (locations) which helped TIBCO Software in addressing all external & global implementations. 35+ resources of ISCS Tech have been deployed to implement and support on foreign implementation"
  },
  {
    id: 3,
    name: "Mr. Tanmay Singh Pandeer",
    role: "CTO & Co-Founder",
    company: "DGLiger Consulting",
    companyLogo: "/assets/Client_Logos/dgliger.png",
    quote: "They adapt to our needs seamlessly, maintaining regular communication. The quality of their resource is outstanding, fostering a strong and make them an invaluable asset. Fruitful partnership, Their flexibility and reliability."
  },
  {
    id: 4,
    name: "Mr. Shashanka Surjanarayana",
    role: "Client Engagement Manager",
    company: "Prowess",
    companyLogo: "/assets/Client_Logos/PROWESS.png",
    quote: "ISCS has always been a go to partner to leverage niche skills and their aggressive approach sets them apart. It's being precise and strategic in providing with capabilities to fit our client needs."
  },
  {
    id: 5,
    name: "Mr. Harsh Mathur",
    role: "Solution Architect - Salesforce",
    company: "ANSYS",
    companyLogo: "/assets/Client_Logos/ANSYS.jpg",
    quote: "An American multinational co. It develops and markets CAE/Multiphysics engineering simulation software used to predict how product designs will behave in real-world environments. With 40000+ customers worldwide ISCS Tech has been deploying Tech Consultants from 2021 at ANSYS to deliver the implementation of an external CRM project. It has been a great pleasure working with them. I wish the best to ISCS for all their future endeavors."
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 15000)

    return () => clearInterval(timer)
  }, [activeIndex])

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -30 : 30
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 30 : -30
    })
  }

  const transition = {
    type: "spring",
    bounce: 0.25,
    duration: 0.7
  }

  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-4 md:py-8" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <div className="absolute inset-0" />
      <div className="container relative mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
          What Our Clients Say About Us
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800 shrink-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="w-full"
                >
                  <Card className="overflow-hidden shadow-lg border-blue-200">
                    <CardContent className="p-6 flex flex-col">
                      <div className="flex flex-col items-start justify-between mb-4 gap-4">
                        <div className="w-full h-24 rounded-lg flex items-center justify-center">
                          <Image
                            src={testimonials[activeIndex].companyLogo}
                            alt={testimonials[activeIndex].company}
                            width={testimonials[activeIndex].company === 'DGLiger Consulting' ? 70 : 200}
                            height={testimonials[activeIndex].company === 'DGLiger Consulting' ? 35 : 100}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-lg">
                            {testimonials[activeIndex].name}
                          </p>
                          <p className="text-xs">
                            {testimonials[activeIndex].role} @ {testimonials[activeIndex].company}
                          </p>
                        </div>
                      </div>
                      
                      <blockquote className="text-xs md:text-sm text-blue-800 leading-relaxed flex-grow">
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800 shrink-0"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <Button
                key={testimonial.id}
                variant="ghost"
                size="icon"
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                aria-label={`View testimonial from ${testimonial.name}`}
                className={`w-3 h-3 p-0 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-600 scale-125' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}