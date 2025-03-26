"use client";

import { useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    // Calculate shadow position based on mouse position
    const x = (offsetX / offsetWidth) * 20 - 10;
    const y = (offsetY / offsetHeight) * 20 - 10;

    setShadowPosition({ x, y });
  };

  return (
    <div
      id="about"
      className="my-12 lg:my-16 relative w-full p-8 lg:p-12 bg-[#0f0f0f] rounded-2xl border border-[#2d2d2d] shadow-[0_4px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_60px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden group"
    >
      {/* About Me Label */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 lg:left-8 lg:top-16 lg:transform-none lg:translate-x-0 flex flex-col items-center">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl font-semibold rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443] mt-3"></span>
      </div>

      {/* Grid for layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 relative">
        {/* Image Section */}
        <div
          className="flex justify-center order-1 lg:order-1 relative group mb-6 lg:mb-0"
          onMouseMove={handleMouseMove}
        >
    <div className="relative w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-[#121212] to-[#090909] rounded-full border-4 border-[#1b2c68a0] transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#8a2be2]">
  <Image
    src={personalData.profile}
    width={256} 
    height={256} 
    alt="Yeabsira Dereje"
    className="object-cover rounded-full transition-all duration-300 ease-in-out transform"
    style={{
      boxShadow: `${shadowPosition.x}px ${shadowPosition.y}px 20px rgba(138, 43, 226, 0.5)`,
    }}
  />
</div>


        </div>

        {/* Text Section */}
        <div className="order-2 lg:order-2 flex flex-col items-start text-gray-200 space-y-4 lg:space-y-6 pl-4 lg:pl-10 ml-[-2rem] lg:ml-[-12rem]">
          <p className="font-semibold text-[#16f2b3] text-3xl lg:text-4xl uppercase tracking-wide">
            Yeabsira Dereje
          </p>
          <div className="text-sm lg:text-lg text-justify leading-relaxed">
            <p className="animate-slide-in-left text-gray-300">{personalData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
