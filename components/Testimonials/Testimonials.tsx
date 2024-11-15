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
    quote: "We would like to commend and thank you for completing our project “Integration of Bulhorn ATS with Salesforce”, within agreed timelines.Your project team and personnel have exhibited professional excellence and cooperative attitude. They are worthy of our appreciation for a timely and satisfactory completion. We hope to be working with your company on future projects."
  },
  {
    id: 2,
    name: "Mr. Deepak Bedade",
    role: "VMG - Procurement Head",
    company: "CSG",
    companyLogo: "/assets/Client_Logos/CSG.jpg",
    quote: "ISCS Tech from the date of inception has been the top vendor in deploying TIBCO resources across PAN India locations which helped TIBCO Software in addressing the execution of its global assignments. 35+ resources of ISCS Tech have been deployed to implement and support modern integrations at TIBCO."
  },
  {
    id: 3,
    name: "Mr. Tanmay Singh Pandeer",
    role: "CTO & Co-Founder",
    company: "DGLiger Consulting",
    companyLogo: "/assets/Client_Logos/dgliger.png",
    quote: "They adapt to our needs seamlessly, maintaining regular communication. The quality of their resources is outstanding, fostering a strong and fruitful partnership. Their flexibility and reliability make them an invaluable asset."
  },
  {
    id: 4,
    name: "Mr. Shashanka Suryanarayana",
    role: "Client Engagement Manager",
    company: "Prowess",
    companyLogo: "/assets/Client_Logos/PROWESS.png",
    quote: "ISCS has always been a go to partner to leverage niche skills and their aggressive approach sets them apart“.  It’s being precise and strategic in providing with capabilities to fit our client needs."
  },
  {
    id: 5,
    name: "Mr. Harsh Mathur",
    role: "Solution Architect - Salesforce",
    company: "ANSYS",
    companyLogo: "/assets/Client_Logos/ANSYS.jpg",
    quote: "ISCS Tech has been deploying Tech Consultants from 2021 at ANSYS to support the implementation of an internal CRM project. It has been a great pleasure working with them. I wish the best to ISCS for all their future endeavours."
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="overflow-hidden shadow-lg border-blue-200 h-full">
 <CardContent className="p-4 flex flex-col h-full"> {/* Reduced padding from p-6 to p-4 */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-28 h-28 shrink-0"> {/* Reduced size from w-28 h-28 to w-24 h-24 */}
          <Image
            src={testimonial.companyLogo}
            alt={testimonial.company}
            width={testimonial.company === 'DGLiger Consulting' ? 35 : 100} // Reduced width for DGLiger by 50%
            height={testimonial.company === 'DGLiger Consulting' ? 17.5 : 50} // Reduced height for DGLiger by 50%
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xxs text-gray-600">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>
      <blockquote className="text-xxs md:text-xs text-blue-800 leading-relaxed flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </CardContent>
  </Card>
)


export  function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 15000)

    return () => clearInterval(timer)
  }, [activeIndex])

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 2) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
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
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-blue-700">
          What Our Clients Say About Us
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            {!isMobile && (
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800 shrink-0"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
            )}

            <div className="overflow-hidden flex-1">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <TestimonialCard testimonial={testimonials[activeIndex]} />
                  {!isMobile && activeIndex + 1 < testimonials.length && (
                    <TestimonialCard testimonial={testimonials[activeIndex + 1]} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {!isMobile && (
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800 shrink-0"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
            )}
          </div>

          <div className="mt-4 md:mt-8 flex justify-center gap-2 md:gap-3">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => {
                  setDirection(index * 2 > activeIndex ? 1 : -1)
                  setActiveIndex(index * 2)
                }}
                aria-label={`View testimonial ${index * 2 + 1}`}
                className={`w-2 h-2 md:w-3 md:h-3 p-0 rounded-full transition-all duration-300 ${
                  index * 2 === activeIndex
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}