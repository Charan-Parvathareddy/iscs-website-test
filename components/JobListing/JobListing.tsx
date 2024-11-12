"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { FaSearch, FaBuilding, FaMapMarkerAlt} from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export const JobListingPage = () => {
  const [searchJob, setSearchJob] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
 
  const job = {
    id: 1,
    title: 'Java Full Stack Developer',
    company: 'Oracle',
    location: 'Hyderabad/ Secunderabad, Pune, Bangalore/ Bengaluru',
    logo: '🔗'
  };
  

  return (
    <div className="bg-gray-100 min-h-screen">
   
      <main className="container mx-auto px-8 py-8">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-3xl font-semibold mb-2 text-blue-600">Ready to switch a career?</h2>
          <p className="text-xl text-gray-800 mb-6">Let&apos;s get started!</p>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <div className="relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search Job here.."
                className="pl-10"
                value={searchJob}
                onChange={(e) => setSearchJob(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaBuilding className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by company"
                className="pl-10"
                value={searchCompany}
                onChange={(e) => setSearchCompany(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by location"
                className="pl-10"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
            </div>
            <Button className="w-[300px] px-3 py-1.5 text-sm">Search</Button>

          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
            <div className="flex-1 flex items-center space-x-2">
              <span>Sort by:</span>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="salary">Salary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <span>Type:</span>
              <Select defaultValue="full-time">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 flex items-center space-x-2">
              <span>Level:</span>
              <Select defaultValue="senior">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="senior">Senior</SelectItem>
                  <SelectItem value="mid">Mid-level</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="ghost" className="text-blue-600 w-full sm:w-auto">Clear All</Button>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="group hover:bg-blue-600 hover:text-white transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-white">{job.title}</h3>
                  <span className="text-gray-400 group-hover:text-blue-200">Now</span>
                </div>
                <p className="text-gray-600 group-hover:text-blue-100 mb-4">{job.location}</p>
                <p className="text-sm text-gray-500 group-hover:text-blue-100 mb-4">
                  This is a job description for a Java Full Stack Developer position at Oracle.
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">{job.logo}</span>
                  <span className="font-semibold group-hover:text-white">{job.company}</span>
                </div>
                <Link href="/Resources/careers/job">
                  <Button variant="outline" className="w-full group-hover:bg-white group-hover:text-blue-600">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
        
  

      </main>

    </div>
  );
};