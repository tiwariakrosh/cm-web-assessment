"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import benifitsImg from "../../../public/assets/image-1.png";

const benefits = [
  {
    title: "Project-based Learning",
    description:
      "Our hands-on approach ensures that students learn by creating real applications rather than just memorizing concepts. Each lesson is designed around practical projects that reinforce coding principles and help students develop problem-solving skills.",
  },
  {
    title: "Expert-Led Sessions",
    description:
      "Learn from industry professionals and experienced educators who are passionate about teaching coding. Our instructors provide personalized attention, ensuring that every student understands concepts and progresses at their own pace.",
  },
  {
    title: "Structured Progression",
    description:
      "Our age-wise curriculum is designed to build skills gradually, ensuring students advance step by step. Whether starting with block coding or moving into real world programming, each course provides a strong foundation for future success.",
  },
  {
    title: "Course completion Certificate",
    description:
      "After completing each course, students receive a certificate recognizing their achievements. This can be showcased in their academic portfolio, helping them stand out in school and future career opportunities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function WhatYouGetSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src={benifitsImg}
                alt="Professional instructor"
                width={500}
                height={600}
                className="rounded-3xl object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100/30 rounded-3xl -z-10"></div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:pl-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold text-[#393939] mb-7"
            >
              What Will You{" "}
              <span className="relative text-[#0953E9]">Get {"  "}</span>?
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 items-start rounded-2xl shadow-[0_-2px_128px_rgba(0,59,179,0.14)] px-3.75 pt-[17px] pb-5.5"
                >
                  <div className="flex-shrink-0 w-10.75 h-10.75 rounded-xl bg-[#0953E9] flex items-center justify-center mt-1">
                    <Check className="w-5 h-6 font-bold text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-2 text-[#393939]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm font-medium text-[#484848] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
