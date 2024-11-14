"use client";
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'
import PDFModal from '@/components/PDFModal'

interface CaseStudy {
  id: string
  title: string
  description: string
  category: string
  client: string
  date: string
  imageUrl: string
  results: string[]
  pdfUrl: string
  challenge: string
  solution: string
  implementation: string[]
  benefits: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Integration of Bullhorn ATS with Salesforce",
    description: "Successfully implemented seamless integration between Bullhorn ATS and Salesforce CRM, enabling real-time synchronization of job and placement data.",
    category: "Software Integration",
    client: "ERP Analysts (INDIA) Pvt. Ltd.",
    date: "2023-12-04",
    imageUrl: "/bullhorn.jpg",
    pdfUrl: "/assets/bullhorn.pdf",
    challenge: "ERPA was operating with two separate systems - Bullhorn ATS and Salesforce CRM - leading to data inconsistencies, manual data entry, and inefficient workflows. They needed a robust integration solution to maintain data synchronization between both platforms, particularly for job postings and placement records.",
    solution: "Implemented a comprehensive API integration framework that enables real-time synchronization between Bullhorn ATS and Salesforce. The solution focuses on maintaining data consistency for job and placement objects across both systems.",
    implementation: [
      "Developed custom API integration framework using Bullhorn REST API",
      "Implemented bidirectional synchronization for job postings and placements",
      "Created automated data validation and error handling mechanisms",
      "Set up real-time triggers for instant updates across platforms",
      "Established secure authentication and data transfer protocols",
      "Implemented logging and monitoring systems for tracking sync status"
    ],
    benefits: [
      "Eliminated manual data entry and reduced human error",
      "Achieved real-time data synchronization between systems",
      "Improved recruitment workflow efficiency by 40%",
      "Enhanced data accuracy and consistency across platforms",
      "Reduced time spent on data management by 60%",
      "Improved decision-making with unified data access"
    ],
    results: [
      "Professional excellence and cooperative attitude demonstrated",
      "Appreciated for timely and satisfactory completion",
      "Positive feedback from ERP Analysts for future collaboration",
      "100% successful data synchronization achieved"
    ]
  }
]

const categories = Array.from(new Set(caseStudies.map(study => study.category)))

const CaseStudyModal = ({ study, isOpen, onClose }: { study: CaseStudy, isOpen: boolean, onClose: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            ref={containerRef}
            className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 h-[600px] z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
          >
            <button
              className="absolute top-4 right-4 h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center"
              onClick={onClose}
            >
              <X className="h-5 w-5 text-white dark:text-black" />
            </button>

            <div className="mt-6">
              <Image
                src={study.imageUrl}
                alt={study.title}
                width={800}
                height={400}
                className="rounded-lg object-cover w-full h-64 mb-6"
              />

              <div className="flex items-center gap-4 mb-6">
                <Badge>{study.category}</Badge>
                <span className="text-sm text-gray-500">
                  {new Date(study.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {study.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Client: {study.client}
              </p>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Implementation Approach</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {study.implementation.map((step, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">{step}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {study.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">{benefit}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-3">Results & Impact</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">{result}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={() => window.open(study.pdfUrl, '_blank')}
                  className="bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                >
                  View Certification
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)

  const filteredStudies = caseStudies.filter(study =>
    study.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || study.category === selectedCategory)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Case Studies</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search case studies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select onValueChange={setSelectedCategory} value={selectedCategory}>
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex flex-col h-full">
              <CardHeader>
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover w-full h-48"
                />
                <CardTitle className="mt-4">{study.title}</CardTitle>
                <CardDescription>{study.client} • {study.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <Badge>{study.category}</Badge>
              </CardContent>
              <CardFooter className="flex-col items-start mt-auto gap-4">
                <Button
                  className="w-full"
                  onClick={() => setSelectedCase(study)}
                >
                  View Case Study
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSelectedPdf(study.pdfUrl)}
                >
                  View Certification
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <CaseStudyModal
        study={selectedCase!}
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
      />

      <PDFModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf || ''}
      />
    </div>
  )
}

export default CaseStudiesPage;