"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What age group is best suited for your courses?",
    answer:
      "Our courses are beginner-friendly, and we start with block-based coding for young learners. As they progress, they will be ready for more advanced topics.",
  },
  {
    question: "Does my child need prior coding experience?",
    answer:
      "No! Our courses are designed for beginners, starting with the basics and gradually building skills.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "Classes are conducted live online through our interactive learning platform. Each session is 60-90 minutes long, combining theory with hands-on practice. We maintain small class sizes (maximum 6-8 students) to ensure personalized attention. Students also have access to recorded sessions and practice materials.",
  },
  {
    question: "What programming languages do you teach?",
    answer:
      "We teach a variety of programming languages based on age and skill level. Beginners start with Scratch Jr. and Scratch, then progress to Python, JavaScript, and HTML/CSS. Advanced students can learn Java, React, and other modern technologies. Our focus is on building a strong foundation in programming concepts.",
  },
  {
    question: "How can I enroll my child in a course?",
    answer:
      "Enrolling is easy! Simply click the 'Get Started' button, choose your preferred course, and complete the registration form. Our team will then schedule a free assessment session to understand your child's current level and recommend the most suitable program. You can also contact us directly for personalized guidance.",
  },
  {
    question: "Will my child build real projects?",
    answer:
      "Project-based learning is at the core of our curriculum. Students work on real-world projects like games, websites, apps, and animations. These projects help reinforce concepts learned in class and build a portfolio. By the end of each course, students will have completed multiple projects they can proudly showcase.",
  },
  {
    question: "How can I track my child's progress?",
    answer:
      "We provide comprehensive progress tracking through our parent dashboard. You'll receive regular progress reports, project updates, and skill assessments. Parents can also schedule monthly meetings with instructors to discuss their child's development. Additionally, we celebrate student achievements through certificates and showcase opportunities.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B0B0B] mb-7 text-center">
          FAQs
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center p-3 gap-1.5 text-left font-medium text-[#0953E9]"
              >
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-primary" />
                ) : (
                  <Plus className="w-6 h-6 text-primary" />
                )}
                <span className="text-2xl font-medium text-[#0953E9]">
                  {faq.question}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
