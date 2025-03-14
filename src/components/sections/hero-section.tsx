"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// assets
import HtmlLogo from "../../../public/assets/html.png";
import PythonLogo from "../../../public/assets/python.png";
import JSLogo from "../../../public/assets/javascript.png";
import AILogo from "../../../public/assets/ai-image.png";
import ScratchLogo from "../../../public/assets/scratch.png";
import RobotLogo from "../../../public/assets/robotics-image.png";
import HeroImage from "../../../public/assets/heroImage.png";
import { Eye, Monitor } from "lucide-react";

export default function HeroSection() {
  const floatingIcons = [
    {
      src: HtmlLogo,
      alt: "HTML5",
      className: "top-4 right-[15%] w-16 h-16",
      delay: 0,
    },
    {
      src: AILogo,
      alt: "AI",
      className: "top-4 right-4 w-20 h-20",
      delay: 0.2,
    },
    {
      src: PythonLogo,
      alt: "Python",
      className: "bottom-[20%] right-4 w-16 h-16",
      delay: 0.4,
    },
    {
      src: JSLogo,
      alt: "JavaScript",
      className: "bottom-[30%] right-[15%] w-16 h-16",
      delay: 0.6,
    },
    {
      src: ScratchLogo,
      alt: "Scratch",
      className: "top-[40%] left-[10%] w-16 h-16",
      delay: 0.8,
    },
    {
      src: RobotLogo,
      alt: "Robot Assistant",
      className: "top-[30%] right-[30%] w-16 h-16",
      delay: 1,
    },
  ];

  return (
    <section className="relative min-h-[500px] px-4 pt-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#e0e9fa] via-purple-100 to-[#b1aafe] opacity-80" />

      {/* Pattern Overlay */}
      <div className="relative inset-0 bg-gradient-to-br from-blue-50 via-purple-100 to-blue-300 opacity-80 w-[90%] mx-auto" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Empowering Young Minds with{" "}
              <span className="text-blue-600">Future-Ready Skills!</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Join us in shaping the leaders of tomorrow through innovative
              learning experiences.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm"
              >
                <Monitor className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Live 1:1 classes</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm"
              >
                <Eye className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">For Ages 5-17</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
              >
                Start Learning Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/80 backdrop-blur text-gray-700 rounded-full font-medium shadow-sm hover:bg-white transition-colors"
              >
                Talk to the Advisor
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image & Floating Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </motion.div>

            {/* Floating Icons */}
            {floatingIcons.map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: icon.delay,
                  },
                }}
                className={`absolute ${icon.className}`}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Image
                    src={icon.src || "/placeholder.svg"}
                    alt={icon.alt}
                    width={64}
                    height={64}
                    className="w-full h-full drop-shadow-lg"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
