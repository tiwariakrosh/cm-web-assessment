"use client";

import { motion } from "framer-motion";
import HtmlLogo from "../../../public/assets/html.png";
import JSLogo from "../../../public/assets/javascript.png";
import pythonLogo from "../../../public/assets/python.png";
import scratchLogo from "../../../public/assets/scratch.png";
import TechBase from "../ui/technology-base";

const technologies = [
  {
    name: "Scratch",
    icon: scratchLogo,
    backgroundColor: "#FFF8F0",
  },
  {
    name: "HTML",
    icon: HtmlLogo,
    backgroundColor: "#FFF4F0",
  },
  {
    name: "CSS",
    icon: JSLogo,
    backgroundColor: "#F0F7FF",
  },
  {
    name: "Javascript",
    icon: JSLogo,
    backgroundColor: "#FFFBF0",
  },
  {
    name: "Python",
    icon: pythonLogo,
    backgroundColor: "#F0FAFF",
  },
];

export default function TechnologySection() {
  const marqueeVariants = {
    animate: {
      x: [100, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 100,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden bg-white p-9.5">
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        className="flex gap-8 whitespace-nowrap"
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="flex-shrink-0">
            <TechBase name={tech.name} icon={tech.icon} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
