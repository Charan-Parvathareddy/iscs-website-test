'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Integration of Bullhorn ATS with Salesforce",
    description: "Successfully completed the integration of Bullhorn ATS with Salesforce, achieving the project's objectives within the specified timeline.",
    category: "Software Integration",
    client: "ERP Analysts (INDIA) Pvt. Ltd.",
    date: "2023-12-04",
    imageUrl: "/bullhorn.jpg",
    pdfUrl: "/assets/bullhorn.pdf",
    results: ["Professional excellence and cooperative attitude demonstrated", "Appreciated for timely and satisfactory completion", "Positive feedback from ERP Analysts for future collaboration"]
  },
]

const categories = Array.from(new Set(caseStudies.map(study => study.category)))

export function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

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
              <CardFooter className="flex-col items-start mt-auto">
                <h4 className="font-semibold mb-2">Key Results:</h4>
                <ul className="list-disc list-inside mb-4">
                  {study.results.map((result, index) => (
                    <li key={index} className="text-sm text-muted-foreground">{result}</li>
                  ))}
                </ul>
                <Button 
                  className="w-full"
                  onClick={() => setSelectedPdf(study.pdfUrl)}
                >
                  View Full Case Study
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <PDFModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf || ''}
      />
    </div>
  )
}

export default CaseStudiesPage;