"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type TechBaseProps = {
  name: string;
  icon: StaticImageData | string;
  className?: string;
};

export default function TechBase({ name, icon, className }: TechBaseProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-2.5 px-9 py-4.5 rounded-[20px] shadow-sm border border-gray-300 transition-all bg-linear-to-t to-[#5485E920] from-[#69C6FE20]",
        "hover:shadow-md cursor-pointer",
        className
      )}
    >
      <div className="w-5 h-5 relative">
        <Image
          src={icon}
          alt={`${name} icon`}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-xl font-medium text-[#383737]">{name}</span>
    </motion.div>
  );
}
