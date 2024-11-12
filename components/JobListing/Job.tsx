"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const Job = () => {
  const [showModal, setShowModal] = useState(false);

  const job = {
    title: 'Java Full Stack Developer',
    company: 'Oracle',
    rating: 3.8,
    reviews: 4632,
    experience: '3 - 5 years',
    salary: 'Not Disclosed',
    location: 'Hyderabad/ Secunderabad, Pune, Bangalore/ Bengaluru',
    posted: '5 days ago',
    openings: 15,
    applicants: 487,
    description: `With tremendous market success in our Cloud Applications, especially in ERP Cloud, Higher Ed institutions have expressed unprecedented interest in embarking a cloud adoption journey with Oracle. Student Information Systems, a critical functional area to complete in our SaaS footprint for Higher Ed, is one top investment priority for Oracle. With over 800+ institutions using Campus Solutions today, our charter is to strike the balance of accelerating the delivery of Student Cloud while continue to deliver value for existing Campus Solutions customers. We leverage an agile development methodology (scrum) to facilitate the development of our products. Our development practices include empowered scrum teams, continuous build and integration, weekly sprint reviews, and a heavy emphasis on testing early and often.

You should be able to work independently, mentor others and be a highly contributing member of an agile team. She/he has excellent organizational, planning and time management skills, with a successful track record of managing multiple priorities in a fast paced environment.

We are looking for a hands-on senior engineer with a passion for developing our Student Cloud solution.`,
    responsibilities: [
      'Delivering large-scale projects on-time with high quality.',
      'Guiding developers in day-to-day design and coding tasks',
      'Design, Development and implementation of projects.',
      'Working closely with Product Architects, Product Managers, Quality Assurance, and other development teams.',
      'UI development of the application using HTML, JavaScript, ES6 , JQuery, AJAX etc.',
      'Participating in code reviews',
      'Engaging actively in developing technical designs',
      'Keeping abreast of the latest technologies (including Oracle technologies) and assimilating them into the product suites',
      'Pro-actively mentoring and keeping track of team mates progress',
      'Ensuring compliance with development methodology and technical process'
    ],
    requirements: [
      'Well rounded full stack developer with exposure to all layers of application development. Advanced UI development skills using js frameworks is preferred.',
      'Excellent product development skills - designing, coding, and debugging skills in JavaScript',
      'Experience of database design/modelling, knowledge of RDBMS concepts is required',
      'Experience of 5-12 yrs. in product development is required.',
      'Fusion Applications Development experience preferred.',
      'Experience with cloud platforms, cloud technologies/deployments',
      'Experience in Java technologies like JSP, Servlets, Web services, REST etc.',
      'Experience developing web applications using at least one popular web framework (JSF, GWT, Spring MVC)',
      'Experience developing web UIs using JavaScript libraries and/or frameworks (jQuery, JavaScript, Angular, React etc)',
      'Thorough understanding of OO principles',
      'Experience in higher education product/domain or Fusion Tech Stack (Jdeveloper, TypeScript, OJET, ADF) will be preferred'
    ],
    additionalSkills: [
      'Excellent analysis and prioritization skills',
      'Self-starter, able to deliver projects on time meeting high quality standards',
      'Aggressive, ability to find solutions',
      'Multi-tasking',
      'Effective communication skills (written and spoken) and strong problem solving skills'
    ],
    role: 'Full Stack Developer',
    industryType: 'Software Product',
    department: 'Engineering - Software & QA',
    employmentType: 'Full Time, Permanent',
    roleCategory: 'Software Development',
    education: 'UG: B.Tech/B.E. in Any Specialization',
    keySkills: [
      'Rest',
      'Api',
      'Development',
      'JavaScript',
      'Web Framework',
      'Java',
      'Fullstack'
    ]
  };

  const handleApply = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShowModal(true), 500);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  
  return (
    <div className="bg-gray-100 min-h-screen">
        
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            <Card className="mb-8">
              <CardHeader>
                <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
                <div className="flex flex-col md:flex-row items-center text-gray-600">
                  <Image
                    src="/oracle-logo.png"
                    alt={job.company}
                    width={72}
                    height={72}
                    className="mr-2 mb-2 md:mb-0"
                  />
                  <div className="flex flex-col md:flex-row items-center">
                    <span>{job.company}</span>
                    <span className="hidden md:inline mx-2">•</span>
                    <span>{job.rating} ★</span>
                    <span className="hidden md:inline mx-2">•</span>
                    <span>{job.reviews} Reviews</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <strong>Experience:</strong> {job.experience}
                  </div>
                  <div>
                    <strong>Salary:</strong> {job.salary}
                  </div>
                  <div>
                    <strong>Location:</strong> {job.location}
                  </div>
                  <div>
                    <strong>Posted:</strong> {job.posted}
                  </div>
                  <div>
                    <strong>Openings:</strong> {job.openings}
                  </div>
                  <div>
                    <strong>Applicants:</strong> {job.applicants}
                  </div>
                </div>
                <div className="mb-4">
                  <strong>Job Description</strong>
                  <p className="text-sm md:text-base">{job.description}</p>
                </div>
                <div className="mb-4">
                  <strong>Responsibilities</strong>
                  <ul className="list-disc pl-5 text-sm md:text-base">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <strong>Job Requirements</strong>
                  <ul className="list-disc pl-5 text-sm md:text-base">
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <strong>Additional Skills</strong>
                  <ul className="list-disc pl-5 text-sm md:text-base">
                    {job.additionalSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4 text-sm md:text-base">
                  <strong>Role:</strong> <p>{job.role}</p>
                  <strong>Industry Type:</strong> <p>{job.industryType}</p>
                  <strong>Department:</strong> <p>{job.department}</p>
                  <strong>Employment Type:</strong> <p>{job.employmentType}</p>
                  <strong>Role Category:</strong> <p>{job.roleCategory}</p>
                  <strong>Education:</strong> <p>{job.education}</p>
                  <strong>Key Skills:</strong>
                  <ul className="list-disc pl-5">
                    {job.keySkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleApply} className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>

          
          </div>
        </div>
      
      </main>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-2 text-blue-500" />
              <span>+91 75695 38823</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2 text-blue-500" />
              <Link href='/contact'>
                <span>info@iscstech.com</span>
              </Link>
            </div>
            <Button onClick={handleCloseModal} className="w-full">Close</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;