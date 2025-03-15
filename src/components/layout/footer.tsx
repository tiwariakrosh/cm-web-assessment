// import { FooterProps } from "@/types";
// import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
// import React from "react";

// const Footer: React.FC<FooterProps> = ({
//   getInTouch,
//   company,
//   courses,
//   copyright,
//   socialIcons,
// }) => {
//   return (
//     <footer className="bg-gray-200 text-black py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Get In Touch Column */}
//           <div>
//             <h3 className="text-lg font-semibold mb:4 lg:mb-9.75 ">
//               {getInTouch.title}
//             </h3>
//             <ul className="space-y-4 lg:space-y-8 ">
//               {getInTouch.items.map((item, index) => (
//                 <li key={index} className="flex flex-col">
//                   <span className="text-base text-black">{item.label}</span>
//                   <span className="text-xl font-medium text-black">
//                     {item.value}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company Column */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">{company.title}</h3>
//             <ul className="space-y-8">
//               {company.items.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className="text-xl font-medium text-black hover:text-blue-600 transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Courses Column */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">{courses.title}</h3>
//             <ul className="space-y-8">
//               {courses.items.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className="text-xl font-medium text-black hover:text-blue-600 transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Copyright and Social Icons */}
//         <div className="mt-8 flex flex-col md:flex-row justify-between items-center pt-4">
//           <p className="text-sm text-gray-500">{copyright}</p>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             {socialIcons.map((icon, index) => {
//               const IconComponent = {
//                 facebook: Facebook,
//                 twitter: Twitter,
//                 instagram: Instagram,
//                 youtube: Youtube,
//               }[icon];
//               return (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-700 hover:text-blue-600 transition-colors"
//                 >
//                   <IconComponent size={20} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import type React from "react";
import { motion } from "framer-motion";

// Define the types if not already defined in @/types
interface FooterItem {
  label?: string;
  value?: string;
}

interface FooterSection {
  title: string;
  items: (FooterItem | string)[];
}

interface FooterProps {
  getInTouch: FooterSection;
  company: FooterSection;
  courses: FooterSection;
  copyright: string;
  socialIcons: string[];
}

const Footer: React.FC<FooterProps> = ({
  getInTouch,
  company,
  courses,
  copyright,
  socialIcons,
}) => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Get In Touch Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 lg:mb-6 text-gray-900">
              {getInTouch.title}
            </h3>
            <ul className="space-y-4 lg:space-y-6">
              {getInTouch.items.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="text-sm text-gray-600">
                    {(item as FooterItem).label}
                  </span>
                  <span className="text-base md:text-lg font-medium text-gray-900 mt-1">
                    {(item as FooterItem).value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 lg:mb-6 text-gray-900">
              {company.title}
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              {company.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base md:text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 inline-block"
                  >
                    {typeof item === "string"
                      ? item
                      : (item as FooterItem).value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 lg:mb-6 text-gray-900">
              {courses.title}
            </h3>
            <ul className="space-y-3 lg:space-y-4">
              {courses.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base md:text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200 inline-block"
                  >
                    {typeof item === "string"
                      ? item
                      : (item as FooterItem).value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-8 md:my-10"></div>

        {/* Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-black mb-4 md:mb-0">{copyright}</p>
          <div className="flex items-center space-x-6">
            {socialIcons.map((icon, index) => {
              const IconComponent = {
                facebook: Facebook,
                twitter: Twitter,
                instagram: Instagram,
                youtube: Youtube,
              }[icon];

              return IconComponent ? (
                <motion.a
                  key={index}
                  href="#"
                  className="text-black hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={22} strokeWidth={1.5} />
                </motion.a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
