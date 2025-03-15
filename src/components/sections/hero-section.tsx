"use client";

import { motion } from "framer-motion";
import { Baby, Monitor } from "lucide-react";
import Image from "next/image";

// assets
import HeroImage from "../../../public/assets/Hero-banner.png";
import Button from "../ui/button";
import { TriangleIcon } from "../../../public/assets/icons/TriangleIcon";
import { StarIcon } from "../../../public/assets/icons/StarIcon";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-89px)] px-4 pt-10 md:pt-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e0e9fa] via-purple-100 to-[#b1aafe] opacity-80 z-0" />

      {/* Glassmorphism Content Container */}
      <div className="relative z-10 mx-auto max-w-[95vw]">
        <div
          className="bg-white/20 backdrop-blur-md rounded-t-2xl shadow-lg p-3.5 pb-0 w-full h-full mx-auto relative z-10"
          style={{ width: "95%" }}
        >
          <TriangleIcon className="absolute rotate-25 h-16 w-20 top-5 left-10 z-0 opacity-5" />
          <TriangleIcon className="absolute rotate-25 h-25 w-25 top-10 left-25 z-0 opacity-5" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text and Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left relative z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight mb-6">
                Empowering Young Minds with{" "}
                <span className="text-blue-500">Future-Ready Skills!</span>
              </h1>
              <p className="text-[#6C6C6C] text-lg font-medium md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                Join us in shaping the leaders of tomorrow through innovative
                learning experiences.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <motion.div className="flex items-center gap-1.5 text-[#6C6C6C] text-base font-medium">
                  <Monitor className="w-5 h-5 text-blue-600" />
                  <span>Live 1:1 classes</span>
                </motion.div>
                <motion.div className="flex items-center gap-1.5 text-[#6C6C6C] text-base font-medium">
                  <Baby className="w-5 h-5 text-blue-600" />
                  <span>For Ages 5-17</span>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5 md:gap-7.5 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  size="lg"
                  className="md:h-14 md:w-62 transition-colors text-xl"
                >
                  Start Learning Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="md:h-14 md:w-62 transition-colors"
                >
                  Talk to the Advisor
                </Button>
              </div>
              <StarIcon className="absolute h-15 w-15 bottom-20 right-25 z-0 opacity-5" />
              <StarIcon className="absolute  h-25 w-25 bottom-2 right-3 z-0 opacity-5" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Main Image */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <Image
                  src={HeroImage}
                  alt="Student learning with tablet"
                  width={680}
                  height={650}
                  className="rounded-lg object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
