// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-12 px-6 md:px-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div>
//           <div className="flex items-center mb-4">
//             <Image
//               src="/placeholder.svg?height=40&width=40"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="mr-2"
//             />
//             <span className="font-bold text-xl">EduSkills</span>
//           </div>
//           <p className="text-gray-400 mb-4">
//             Empowering young minds with future-ready skills through interactive
//             and engaging learning experiences.
//           </p>
//           <div className="flex space-x-4">
//             {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
//               (social, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
//                 >
//                   <span className="sr-only">{social}</span>
//                   <div className="w-4 h-4 bg-white rounded-sm"></div>
//                 </a>
//               )
//             )}
//           </div>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             {["Home", "Courses", "About Us", "Contact", "Blog"].map(
//               (link, index) => (
//                 <li key={index}>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-4">Support</h3>
//           <ul className="space-y-2">
//             {[
//               "Help Center",
//               "FAQs",
//               "Terms of Service",
//               "Privacy Policy",
//               "Cookie Policy",
//             ].map((link, index) => (
//               <li key={index}>
//                 <a
//                   href="#"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>123 Education Street</li>
//             <li>New York, NY 10001</li>
//             <li>info@eduskills.com</li>
//             <li>+1 (555) 123-4567</li>
//           </ul>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
//         <p>&copy; {new Date().getFullYear()} EduSkills. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

import { FooterProps } from "@/types";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer: React.FC<FooterProps> = ({
  getInTouch,
  company,
  courses,
  copyright,
  socialIcons,
}) => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8">
      {/* Vertical Line (Optional, can be part of the layout above footer) */}
      <div className="border-l-4 border-blue-600 h-16 mx-auto mb-4 hidden md:block"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get In Touch Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{getInTouch.title}</h3>
            <ul className="space-y-2">
              {getInTouch.items.map((item, index) => (
                <li key={index}>
                  <span className="text-sm">{item.label}: </span>
                  <span className="text-sm font-medium">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{company.title}</h3>
            <ul className="space-y-2">
              {company.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{courses.title}</h3>
            <ul className="space-y-2">
              {courses.items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4">
          <p className="text-sm text-gray-500">{copyright}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialIcons.map((icon, index) => {
              const IconComponent = {
                facebook: Facebook,
                twitter: Twitter,
                instagram: Instagram,
                youtube: Youtube,
              }[icon];
              return (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
