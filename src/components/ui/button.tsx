"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "right",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "rounded-lg font-medium transition-colors flex items-center justify-center";

  const variantStyles = {
    primary:
      "bg-[#0953e9] text-white border hover:border-[#0953e9] hover:text-[#0953e9] hover:bg-transparent",
    secondary: "bg-white text-[#0953e9] hover:bg-blue-50",
    outline:
      "border border-[#0953e9] text-[#0953e9] hover:bg-[#0953e9] hover:text-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-6 py-4 text-xl",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
}
