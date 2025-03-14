// for purchase section
export interface PurchaseLessonsProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  illustration: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface FooterProps {
  getInTouch: { title: string; items: { label: string; value: string }[] };
  company: { title: string; items: string[] };
  courses: { title: string; items: string[] };
  copyright: string;
  socialIcons: string[];
}
