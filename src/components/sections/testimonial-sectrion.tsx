import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "My child absolutely enjoys the coding sessions! The classes are highly interactive, making learning fun and exciting. The one-hour sessions fly by, and even after months, the enthusiasm remains high. A fantastic experience for young minds! Thank you, CODEMantra team!",
    author: "Samer S.",
  },
  {
    quote:
      "Our son loved the robotics classes with Poorvima. Each session brought new challenges that kept him engaged and eager to learn more. The perfect blend of hands-on learning and fun made him look forward to every class. We highly recommend this program for young tech enthusiasts!",
    author: "Adrian Stezar",
  },
  {
    quote:
      "My child loved the coding classes! The interactive projects kept them engaged, and they are now building their own games. The one-hour sessions fly by, and even after months, the enthusiasm remains high. A fantastic experience for young minds! Thank you, team!",
    author: "Sarah M.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0B0B0B] mb-8 text-center">
          Trusted by Parents Like You!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 testimonial">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-lightBlue rounded-lg shadow-sm"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-[#0953E9] opacity-50" />
              <p className="mt-8 text-[#484646] font-medium text-base">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-4 text-[#484646] text-base font-semibold text-right">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
