"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp, SlideRight } from "@/components/utility/animation"; // Import your animation functions
import { FaBullseye, FaLightbulb, FaShieldAlt } from "react-icons/fa"; // Icons for sections

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* About ISCS Technologies section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView="visible"
      >
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          About ISCS Technologies
        </span>
      </motion.h1>

      {/* Our Mission and Vision Section with SlideLeft and SlideRight */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaBullseye className="text-xl text-purple-600" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our mission is to empower organizations through intelligent automation and reliable management systems, enabling businesses to streamline operations and achieve their goals with efficiency and precision.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={SlideRight(0.3)}
          initial="hidden"
          whileInView="visible"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FaLightbulb className="text-xl text-orange-500" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
              We envision a future where organizations leverage cutting-edge technology for efficiency and excellence without complexity. Our solutions are built to scale and adapt to clients' evolving needs.
               </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Core Values Section with SlideUp animation */}
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView="visible"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FaShieldAlt className="text-xl text-blue-600" /> Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Innovation:</strong> We push the boundaries of what&apos;s possible, especially in AI-driven healthcare applications and middleware solutions.</li>
              <li><strong>Integrity:</strong> We build secure and efficient solutions to ensure the confidentiality of our clients&apos; data.</li>
              <li><strong>Collaboration:</strong> We work closely with our clients to provide tailored solutions that address their unique challenges.</li>
              <li><strong>Customer Focus:</strong> Our solutions prioritize ease of use, flexibility, and long-term value.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
