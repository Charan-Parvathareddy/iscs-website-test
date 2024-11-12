'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CaseStudy {
  id: string
  title: string
  description: string
  category: string
  client: string
  date: string
  imageUrl: string
  results: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-commerce Platform Overhaul",
    description: "Redesigned and optimized an e-commerce platform, resulting in significant improvements in user experience and sales.",
    category: "E-commerce",
    client: "GlobalShop Inc.",
    date: "2023-05-15",
    imageUrl: "/placeholder.svg?height=200&width=300",
    results: ["50% increase in conversion rate", "30% reduction in cart abandonment", "2x increase in mobile sales"]
  },
  {
    id: "2",
    title: "AI-Powered Customer Service Chatbot",
    description: "Developed an AI chatbot that revolutionized customer service operations for a large telecom company.",
    category: "Artificial Intelligence",
    client: "TechComm Solutions",
    date: "2023-06-22",
    imageUrl: "/placeholder.svg?height=200&width=300",
    results: ["70% reduction in support tickets", "24/7 customer support coverage", "95% positive user feedback"]
  },
  {
    id: "3",
    title: "Blockchain-based Supply Chain Tracking",
    description: "Implemented a blockchain solution for end-to-end supply chain tracking in the pharmaceutical industry.",
    category: "Blockchain",
    client: "PharmaTrack",
    date: "2023-07-10",
    imageUrl: "/placeholder.svg?height=200&width=300",
    results: ["100% traceability of products", "60% reduction in counterfeit incidents", "Improved regulatory compliance"]
  },
  {
    id: "4",
    title: "Cloud Migration and Optimization",
    description: "Migrated a legacy on-premise system to a cloud-based infrastructure, improving scalability and reducing costs.",
    category: "Cloud Computing",
    client: "IndustrialTech Corp",
    date: "2023-08-05",
    imageUrl: "/placeholder.svg?height=200&width=300",
    results: ["40% reduction in IT infrastructure costs", "99.99% uptime achieved", "Scalability to handle 10x traffic spikes"]
  },
  {
    id: "5",
    title: "IoT-Enabled Smart City Solution",
    description: "Designed and implemented an IoT solution for smart waste management and energy optimization in urban areas.",
    category: "Internet of Things",
    client: "MetroGov Systems",
    date: "2023-09-18",
    imageUrl: "/placeholder.svg?height=200&width=300",
    results: ["30% reduction in waste collection costs", "25% decrease in energy consumption", "Real-time monitoring of city resources"]
  }
]

const categories = Array.from(new Set(caseStudies.map(study => study.category)))

export function CaseStudiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all') // Changed initial value to 'all'

  const filteredStudies = caseStudies.filter(study => 
    study.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || study.category === selectedCategory) // Updated condition
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
            <SelectItem value="all">All Categories</SelectItem> {/* Changed value from empty string to 'all' */}
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
                <Button asChild className="w-full">
                  <Link href={`/case-studies/${study.id}`}>View Full Case Study</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}