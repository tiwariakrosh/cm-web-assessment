import MiniCoderImg from "../../public/assets/mimicoder-image.png";
import RisingCodersImg from "../../public/assets/risingcoder-image.png";
import YoungInnovatorsImg from "../../public/assets/youngdev-image.png";
import FutureInnovators from "../../public/assets/futureinoovator-image.png";
import matheMaticsImg from "../../public/assets/math-image.png";
import AIMLImg from "../../public/assets/ai-image.png";
import roboticsImg from "../../public/assets/robotics-image.png";
import gameDevImg from "../../public/assets/gamedev-image.png";
import PurchaseImg from "../../public/assets/purchase-your-lession.svg";

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
      description: "Independently code simple projects in Scratch Jr.",
      image: MiniCoderImg,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Rising Coders",
      ageGroup: "10 - 13",
      description:
        "Engage in Project-Based Learning for the real-world application with scratch.",
      image: RisingCodersImg,
      rating: 4.7,
    },
    {
      id: 3,
      title: "Young Innovators",
      ageGroup: "7 - 10",
      description:
        "Create simple web pages and understand web structure & styling.",
      image: YoungInnovatorsImg,
      rating: 4.8,
    },
    {
      id: 4,
      title: "Future Innovators",
      ageGroup: "12-16",
      description:
        "Master database, networking, and abstraction through AI along with python.",
      image: FutureInnovators,
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 5,
      title: "Mathematics",
      ageGroup: "8-14",
      description:
        "Build a strong foundation in key math topics & apply math skills in programming.",
      image: matheMaticsImg,
      rating: 4.6,
      reviews: 112,
    },
    {
      id: 6,
      title: "AI/ML",
      ageGroup: "14-18",
      description:
        "Learn the necessary tools & learn basic data science and machine learning.",
      image: AIMLImg,
      rating: 4.9,
      reviews: 128,
    },
    {
      id: 7,
      title: "Robotics",
      ageGroup: "10-16",
      description:
        "Understand how robots work and how to program them for real-world applications.",
      image: roboticsImg,
      rating: 4.8,
      reviews: 145,
    },
    {
      id: 8,
      title: "Game Development",
      ageGroup: "12-18",
      description:
        "Master game genre, logic, design, and art to create your own games.",
      image: gameDevImg,
      rating: 4.9,
      reviews: 167,
    },
  ],
};

// Purchase Lessons
export const PURCHASE_LESSONS_CONTENT = {
  title: "Purchase Your Lessons & Learn the Best!",
  description:
    "Join interactive courses and get hands-on experience online with our platform; we have the perfect learning banner for you!",
  buttonText: "Book Your Lessons",
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
