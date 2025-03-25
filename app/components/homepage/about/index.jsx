// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div
      id="about"
      className="my-12 lg:my-16 relative bg-gradient-to-r from-[#121212] to-[#090909] border-[#1b2c68a0] rounded-lg shadow-lg p-8 lg:p-12"
    >
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl font-semibold rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        {/* Text Section */}
        <div className="order-2 lg:order-1 flex flex-col justify-center items-start text-gray-200 space-y-6">
          <p className="font-semibold text-[#16f2b3] text-2xl lg:text-3xl uppercase tracking-wide">
            Yeabsira Dereje
          </p>
          <div className="text-sm lg:text-lg text-justify leading-relaxed">
            <p className="animate-slide-in-left text-gray-300">{personalData.description}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2 relative group">
          <Image
            src={personalData.profile}
            width={320}
            height={320}
            alt="Yeabsira Dereje"
            className="rounded-full transition-all duration-700 ease-in-out transform group-hover:scale-110 group-hover:rotate-6 cursor-pointer 
                       group-hover:shadow-2xl group-hover:shadow-purple-500 group-hover:border-4 group-hover:border-white group-hover:translate-x-2 
                       group-hover:translate-y-2 group-hover:bg-purple-200 group-hover:backdrop-blur-md"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
