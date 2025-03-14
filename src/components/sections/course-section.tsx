"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Define types for course data
interface Course {
  id: number;
  title: string;
  ageGroup: string;
  description: string;
  image: string;
  rating: number;
  price: string;
}

// Define props type for the section
interface CoursesSectionProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  courses: Course[];
}

// Custom arrow components for the slider
const PrevArrow: React.FC<{ className?: string; onClick?: () => void }> = ({
  className,
  onClick,
}) => (
  <button
    className={twMerge(
      "absolute right-20 -top-16 border border-blue-600 rounded-xl p-2 shadow-md z-10",
      className
    )}
    onClick={onClick}
  >
    <ArrowLeft className="w-6 h-6 text-blue-600" />
  </button>
);

const NextArrow: React.FC<{ className?: string; onClick?: () => void }> = ({
  className,
  onClick,
}) => (
  <button
    className={twMerge(
      "absolute right-10 -top-16  border border-blue-600 rounded-xl p-2 shadow-md z-10",
      className
    )}
    onClick={onClick}
  >
    <ArrowRight className="w-6 h-6 text-blue-600" />
  </button>
);

const CoursesSection: React.FC<CoursesSectionProps> = ({
  title,
  buttonText,
  buttonLink,
  courses,
}) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          {title}
        </motion.h2>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="px-4"
              >
                <div className="bg-gradient-to-r from-[#A1C4FD20] to-[#ffffff20] rounded-4xl p-5 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  {/* Course Image */}
                  <div className="relative">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={300}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Course Details */}
                  <div className="">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                      <User className="h-3 w-3" />{" "}
                      <span className="text-blue-300">
                        {course.ageGroup} Years
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {course.description}
                    </p>

                    {/* Rating and Price */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-yellow-500 text-sm">
                          {"★".repeat(Math.floor(course.rating))}
                          {"☆".repeat(5 - Math.floor(course.rating))}
                        </span>
                        <span className="ml-2 text-gray-600 text-sm">
                          ({course.rating})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href={buttonLink}>
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
