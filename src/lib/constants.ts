import GameDevImg from "../../public/assets/gamedev-image.png";
import PurchaseImg from "../../public/assets/Group.png";

// Courses Section
export const COURSES_CONTENT = {
  title: "Courses We Provide",
  buttonText: "View All Courses",
  buttonLink: "/courses",
  courses: [
    {
      id: 1,
      title: "Mini Coders",
      ageGroup: "9 - 14",
      description: "Introduce simple coding projects through Scratch",
      image: GameDevImg,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Rising Coders",
      ageGroup: "10 - 13",
      description: "Project-based learning for the future",
      image: GameDevImg,
      rating: 4.7,
    },
    {
      id: 3,
      title: "Young Innovators",
      ageGroup: "7 - 10",
      description: "Create simple web pages and understand coding",
      image: GameDevImg,
      rating: 4.8,
    },
  ],
};

// Purchase Lessons
export const PURCHASE_LESSONS_CONTENT = {
  title: "Purchase Your Lessons & Learn the Best!",
  description:
    "Join interactive courses and get hands-on experience online with our platform; we have the perfect learning banner for you!",
  buttonText: "Get Started",
  buttonLink: "/courses",
  illustration: {
    src: PurchaseImg,
    alt: "Student learning illustration",
    width: 500,
    height: 500,
  },
};

// footer section
export const FOOTER_CONTENT = {
  getInTouch: {
    title: "Get In Touch",
    items: [
      { label: "E-mail", value: "info@cademantra.io" },
      { label: "Phone no.", value: "+1571-931-5701" },
      { label: "Headquarter", value: "Reston VA, USA" },
    ],
  },
  company: {
    title: "Company",
    items: ["Home", "About Us", "Courses", "Careers", "Contact Us", "Blogs"],
  },
  courses: {
    title: "Courses we provide?",
    items: [
      "Scratch",
      "Web Development",
      "Python",
      "Game Development",
      "Robotics",
      "AI/ML",
      "Mathematics",
    ],
  },
  copyright: "© CodeMantra 2025 - All rights reserved.",
  socialIcons: ["facebook", "twitter", "instagram", "youtube"],
};
