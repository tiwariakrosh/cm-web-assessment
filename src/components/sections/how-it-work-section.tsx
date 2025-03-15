"use client";

import { motion } from "framer-motion";
import { CalendarDays, LaptopMinimal, List } from "lucide-react";
import Image from "next/image";
import HowItWorkImg from "../../../public/assets/image-3.png";

const steps = [
  {
    icon: List,
    title: "Register",
    description:
      "Click on the Enroll button and complete your registration form.",
  },
  {
    icon: CalendarDays,
    title: "Choose your Course",
    description: "Choose the best course for you.",
  },
  {
    icon: LaptopMinimal,
    title: "Start Learning",
    description: "You're on the way to become a professional personal.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold mb-8 text-[#393939]"
            >
              Here&apos;s how it{" "}
              <span className="relative text-[#0953E9]">
                works
                <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200/50 -z-10"></span>
                {"  "}!
              </span>
            </motion.h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex gap-5.5 shadow-[0_4px_4px_rgba(120,163,252,0.15)] rounded-2xl py-4.75 pl-4.5 pr-7.25"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#5287F2] text-white flex items-center justify-center">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base text-black font-semibold mb-3.5">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-[#403F3F]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden">
              <Image
                src={HowItWorkImg}
                alt="Online learning platform"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
