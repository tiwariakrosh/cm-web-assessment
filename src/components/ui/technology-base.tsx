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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center gap-2 px-9 py-5.5 rounded-[20px] shadow-sm transition-all bg-[#F8F9FA] bg-linear-0 to-0% from-100%",
        "hover:shadow-md cursor-pointer",
        className
      )}
    >
      <div className="w-5 h-5 relative">
        <Image
          src={icon || "/placeholder.svg"}
          alt={`${name} icon`}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </motion.div>
  );
}
