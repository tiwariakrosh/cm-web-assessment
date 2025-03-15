// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Button from "../ui/button";
// import Logo from "../../../public/assets/cm_logo 1.png";
// import { cn } from "@/lib/utils";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [active, setActive] = useState(true);

//   return (
//     <nav className="bg-white py-4.75 px-6 md:px-10.25 flex justify-between items-center shadow-sm sticky md:relative top-0 z-50">
//       <Image src={Logo} alt="Logo" width={119} height={63} />
//       <div className="hidden md:flex items-center space-x-8">
//         <Link
//           href="#"
//           className={cn(active ? "active" : ""), text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors)}
//         >
//           Home
//         </Link>
//         <Link
//           href="#"
//           className="text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors"
//         >
//           Courses
//         </Link>
//         <Link
//           href="#"
//           className="text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors"
//         >
//           About
//         </Link>
//         <Link
//           href="#"
//           className="text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors"
//         >
//           Contact
//         </Link>
//       </div>
//       <div className="hidden md:flex items-center space-x-7">
//         <Button variant="outline" size="md" className="w-[97px] h-9.75">
//           Login
//         </Button>
//         <Button variant="primary" size="md" className="w-[97px] px-4 h-9.75">
//           Sign Up
//         </Button>
//       </div>
//       {/* Mobile Menu Toggle Button */}
//       <button
//         className="md:hidden text-gray-600"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>
//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 shadow-md absolute top-full left-0 right-0"
//           >
//             <Link
//               href="#"
//               className="text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               href="#"
//               className="text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors"
//             >
//               Courses
//             </Link>
//             <Link
//               href="#"
//               className="text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors"
//             >
//               About
//             </Link>
//             <Link
//               href="#"
//               className="text-black font-medium text-base nav-item hover:!text-[#0953E9] transition-colors"
//             >
//               Contact
//             </Link>
//             <>
//               <Button variant="outline" className="w-full">
//                 Login
//               </Button>
//               <Button variant="primary" className="w-full">
//                 Sign Up
//               </Button>
//             </>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/button";
import Logo from "../../../public/assets/cm_logo 1.png";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = ["Home", "Courses", "About", "Contact"];

  return (
    <nav className="bg-white py-4.75 px-6 md:px-10.25 flex justify-between items-center shadow-sm sticky md:relative top-0 z-50">
      <Image src={Logo} alt="Logo" width={119} height={63} />
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <Link
            key={item}
            href="#"
            onClick={() => setActiveItem(item)}
            className={cn(
              "text-black font-medium text-base nav-item transition-colors",
              activeItem === item
                ? "text-[#0953E9] active-menu"
                : "hover:text-[#0953E9]"
            )}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center space-x-7">
        <Button variant="outline" size="md" className="w-[97px] h-9.75">
          Login
        </Button>
        <Button variant="primary" size="md" className="w-[97px] px-4 h-9.75">
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
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => {
                  setActiveItem(item);
                  setIsMenuOpen(false);
                }}
                className={cn(
                  "text-black font-medium text-base nav-item transition-colors",
                  activeItem === item
                    ? "text-[#0953E9] active-menu"
                    : "hover:text-[#0953E9]"
                )}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button variant="primary" className="w-full">
              Sign Up
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
