"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Define types for course data
interface Course {
  id: number;
  title: string;
  ageGroup: string;
  description: string;
  image: StaticImageData;
  rating: number;
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
  onClick,
}) => (
  <button
    className={twMerge(
      "absolute right-45 -top-16 border border-blue-600 rounded-2xl p-2 h-[43px] w-[59px] shadow-md z-10"
    )}
    onClick={onClick}
  >
    <ArrowLeft className="w-6 h-6 font-bold text-blue-600 mx-auto" />
  </button>
);

const NextArrow: React.FC<{ className?: string; onClick?: () => void }> = ({
  onClick,
}) => (
  <button
    className={twMerge(
      "absolute right-25 -top-16  border border-blue-600 rounded-2xl p-2 h-[43px] w-[59px] shadow-md z-10"
    )}
    onClick={onClick}
  >
    <ArrowRight className="w-6 h-6 text-blue-600 mx-auto" />
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
    <section className="py-11 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-semibold text-center text-black"
        >
          {title}
        </motion.h2>

        {/* Slider */}
        <div className="relative pt-25">
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
                <div className="bg-gradient-to-r from-[#A1C4FD20] to-[#ffffff20] rounded-4xl p-5 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex-1">
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
                    <h3 className="text-lg font-semibold text-black mb-1 mt-3.5">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium mb-1 flex items-center gap-2">
                      <User className="h-4.5 w-4.5" />{" "}
                      <span className="text-[#6696FA]">
                        {course.ageGroup} Years
                      </span>
                    </p>
                    <p className="text-[#1B1B1B]/90 text-sm mb-1">
                      {course.description}
                    </p>

                    {/* Rating and Price */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-[#0953E9] text-base">
                          {"★".repeat(Math.floor(course.rating))}
                          {"☆".repeat(5 - Math.floor(course.rating))}
                        </span>
                        <span className="ml-2 text-[#1b1b1b]/60 text-sm">
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
          className="text-center mt-8"
        >
          <Link href={buttonLink}>
            <button className="bg-blue-600 text-white font-semibold py-4.5 px-7.25 rounded-2xl hover:bg-blue-700 transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
