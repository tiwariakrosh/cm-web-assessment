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
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        > */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 text-lg mb-8">{description}</p>
          <Link href={buttonLink}>
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={illustration.src}
            alt={illustration.alt}
            width={illustration.width}
            height={illustration.height}
            className="w-full max-w-md mx-auto"
            priority
          />
        </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default PurchaseLessonsSection;
