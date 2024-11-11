"use client"

import React, { useState } from 'react'
import Image from 'next/image'

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
    name: "Mr. Deepak Belade",
    role: "VMG - Procurement Head",
    company: "CSG",
    companyLogo: "/assets/Client_Logos/CSG.jpg",
    quote: "ISCS Tech from the date of inception has been the top vendor in deploying TIBCO resources across PAN India (locations) which helped TIBCO Software in addressing all external & global implementations. 35+ resources of ISCS Tech have been deployed to implement and support on foreign implementation"
  },
  {
    id: 2,
    name: "Mr. Harsh Mathur",
    role: "Solution Architect - Salesforce",
    company: "ANSYS",
    companyLogo: "/assets/Client_Logos/ANSYS.jpg",
    quote: "An American multinational co. It develops and markets CAE/Multiphysics engineering simulation software used to predict how product designs will behave in real-world environments. With 40000+ customers worldwide ISCS Tech has been deploying Tech Consultants from 2021 at ANSYS to deliver the implementation of an external CRM project. It has been a great pleasure working with them. I wish the best to ISCS for all their future endeavors."
  },
  {
    id: 3,
    name: "Mr. Naveen Kumar Alagapally",
    role: "Techno - Functional Architect",
    company: "ERPA",
    companyLogo: "/assets/Client_Logos/ERPA.png",
    quote: "We would like to commend and thank you for completing our project requirements of Build & Run Phase within the agreed upon scope and timelines.Your project team and personnel have exhibited professional excellence and cooperative attitude. They are worthy of our appreciation for a timely and satisfactory completion. We hope to be working with your company on future projects."
  },
  {
    id: 4,
    name: "Mr. Tanmay Singh Pandeer",
    role: "CTO & Co-Founder",
    company: "DGLiger Consulting",
    companyLogo: "/assets/Client_Logos/dgliger.png",
    quote: "They adapt to our needs seamlessly, maintaining regular communication. The quality of their resource is outstanding, fostering a strong and make them an invaluable asset. Fruitful partnership, Their flexibility and reliability."
  },
  {
    id: 5,
    name: "Mr. Shashanka Surjanarayana",
    role: "Client Engagement Manager",
    company: "Prowess",
    companyLogo: "/assets/Client_Logos/PROWESS.png",
    quote: "ISCS has always been a go to partner to leverage niche skills and their aggressive approach sets them apart. It's being precise and strategic in providing with capabilities to fit our client needs."
  }
]

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          What Our CLIENTS say about us?
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src={testimonials[activeTestimonial].companyLogo}
                  alt={testimonials[activeTestimonial].company}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-blue-900">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonials[activeTestimonial].role} @ {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              />
            ))}
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonials;