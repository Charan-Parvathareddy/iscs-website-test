import React from 'react';
import { Code, Database, Cpu, LineChart, Users, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export  function Feature1() {
  const stats = [
    {
      icon: Code,
      number: "500+",
      title: "Projects Delivered",
      description: "Across various industries",
    },
    {
      icon: Database,
      number: "99.99%",
      title: "Uptime Guaranteed",
      description: "For our cloud solutions",
    },
    {
      icon: Cpu,
      number: "50+",
      title: "AI Models Deployed",
      description: "Enhancing business intelligence",
    },
    {
      icon: LineChart,
      number: "30%",
      title: "Average Efficiency Boost",
      description: "For our clients' operations",
    },
    {
      icon: Users,
      number: "100+",
      title: "Expert Consultants",
      description: "Ready to tackle your challenges",
    },
    {
      icon: Zap,
      number: "40%",
      title: "Faster Time-to-Market",
      description: "For software products we develop",
    },
  ];

  return (
  
      <div className="w-full min-h-screen bg-gradient-to-br from-cyan-50 via-pink-50 to-purple-50 pt-24 pb-12 px-4">
 
       <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Delivering </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Innovative Solutions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies and industry best practices to deliver tailored software solutions that drive business growth and operational excellence.
            </p>
          </div>

          <h3 className="text-center text-gray-700 text-xl mb-8">Our Expertise and Impact, By the Numbers</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                      <div className="font-medium text-gray-900 mb-1">{stat.title}</div>
                      <div className="text-sm text-gray-600">{stat.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
   
  );
}





