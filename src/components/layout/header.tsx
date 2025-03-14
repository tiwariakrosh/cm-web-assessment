"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/button";
import Logo from "../../../public/assets/cm_logo 1.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-50">
      <Image src={Logo} alt="Logo" width={140} height={40} className="mr-2" />

      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="#"
          className="text-gray-600 nav-item hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Courses
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          About
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Contact
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 shadow-md absolute top-full left-0 right-0"
          >
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <>
              <Button variant="outline" className="w-full">
                Login
              </Button>
              <Button variant="primary" className="w-full">
                Sign Up
              </Button>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
