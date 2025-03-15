import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
import TechnologySection from "@/components/sections/technology-section";
import {
  COURSES_CONTENT,
  FOOTER_CONTENT,
  PURCHASE_LESSONS_CONTENT,
} from "../lib/constants";
import PurchaseLessonsSection from "@/components/sections/purchase-lession-section";
import CoursesSection from "@/components/sections/course-section";
import WhatYouGetSection from "@/components/sections/benefits-section";
import HowItWorksSection from "@/components/sections/how-it-work-section";
import CtaSection from "@/components/sections/cta-section";
import TestimonialsSection from "@/components/sections/testimonial-sectrion";
import FaqSection from "@/components/sections/faqs-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <TechnologySection />
        <CoursesSection
          title={COURSES_CONTENT.title}
          buttonText={COURSES_CONTENT.buttonText}
          buttonLink={COURSES_CONTENT.buttonLink}
          courses={COURSES_CONTENT.courses}
        />
        <PurchaseLessonsSection
          title={PURCHASE_LESSONS_CONTENT.title}
          description={PURCHASE_LESSONS_CONTENT.description}
          buttonText={PURCHASE_LESSONS_CONTENT.buttonText}
          buttonLink={PURCHASE_LESSONS_CONTENT.buttonLink}
          illustration={PURCHASE_LESSONS_CONTENT.illustration}
        />
        <WhatYouGetSection />
        <HowItWorksSection />
        <CtaSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer
        getInTouch={FOOTER_CONTENT.getInTouch}
        company={FOOTER_CONTENT.company}
        courses={FOOTER_CONTENT.courses}
        copyright={FOOTER_CONTENT.copyright}
        socialIcons={FOOTER_CONTENT.socialIcons}
      />
    </div>
  );
}
