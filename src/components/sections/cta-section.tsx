"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import CTAImg from "../../../public/assets/cta-image.png";
import ctaDecorationImg from "../../../public/assets/cta-decoration.png";

function CtaSection() {
  return (
    <section className="py-8 md:py-16 px-4 overflow-hidden">
      <div className="bg-[#0953E9] rounded-[2rem] max-w-7xl mx-auto relative">
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="absolute top-10 left-40 hidden lg:block">
          <Image
            src={ctaDecorationImg}
            alt="Decorative element"
            width={713}
            height={300}
            className=""
          />
        </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 p-6 md:p-12 lg:pl-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Shape the Future of Tech?
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-8">
              Be part of an innovative journey, collaborate with industry
              experts, and make a real impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0953E9] font-semibold py-3 px-8 rounded-2xl flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Start Learning
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 p-6 md:p-0"
          >
            <div className="relative md:max-w-[380px] ml-auto">
              <Image
                src={CTAImg}
                alt="Young girl using a laptop"
                width={380}
                height={268}
                className="rounded-2xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
