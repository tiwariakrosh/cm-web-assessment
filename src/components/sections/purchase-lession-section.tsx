import { PurchaseLessonsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PurchaseLessonsSection: React.FC<PurchaseLessonsProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  illustration,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#030303] mb-5">
              {title}
            </h2>
            <p className="text-[#6C6C6C] font-medium text-xl mb-6">
              {description}
            </p>
            <Link href={buttonLink}>
              <button className="bg-[#0953E9] text-white font-semibold py-3 px-5 md:py-4.5 md:px-6.5 rounded-2xl hover:bg-blue-700 transition-colors duration-300">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2  mb-10">
            <Image
              src={illustration.src}
              alt={illustration.alt}
              width={illustration.width}
              height={illustration.height}
              className="w-full max-w-2xl mx-auto scale-130"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseLessonsSection;
