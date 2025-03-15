"use client";

import Slider from "react-slick";
import HtmlLogo from "../../../public/assets/html.png";
import CSSLogo from "../../../public/assets/CSS.png";
import JSLogo from "../../../public/assets/javascript.png";
import pythonLogo from "../../../public/assets/python.png";
import scratchLogo from "../../../public/assets/scratch.png";
import mathMatics from "../../../public/assets/Group.png";
import robotics from "../../../public/assets/robotics.png";
import TechBase from "../ui/technology-base";

const technologies = [
  { name: "Scratch", icon: scratchLogo },
  { name: "HTML", icon: HtmlLogo },
  { name: "CSS", icon: CSSLogo },
  { name: "Javascript", icon: JSLogo },
  { name: "Python", icon: pythonLogo },
  { name: "Mathmatics", icon: mathMatics },
  { name: "Robotics", icon: robotics },
];

export default function TechnologySection() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    mobileFirst: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-9">
      <Slider {...settings}>
        {technologies.map((tech, index) => (
          <div key={index} className="px-4 py-1">
            <TechBase name={tech.name} icon={tech.icon} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
