// @flow strict
import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24 bg-gradient-to-r from-[#121212] to-[#090909]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-4">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md shadow-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-16">
        {/* Flex container for three columns */}
        <div className="flex flex-wrap justify-between gap-12">
          {experiences.map((experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
              className="relative flex flex-col gap-6 items-center w-full sm:w-1/2 lg:w-1/3"
            >
              <div className="group order-1 lg:order-2 relative rounded-lg bg-gradient-to-r from-[#121212] to-[#090909] border-2 border-[#1b2c68a0] transition-all duration-500 ease-in-out 
                group-hover:shadow-2xl group-hover:shadow-purple-500 group-hover:border-4 group-hover:border-purple-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-purple-200 group-hover:backdrop-blur-md">
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-[#8a2be2] transition-all duration-300">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div className="text-white">
                    <p className="text-lg sm:text-2xl mb-2 font-semibold uppercase text-[#8a2be2]">{experience.title}</p>
                    <p className="text-sm sm:text-base text-[#b2b2b2]">{experience.company}</p>
                    <p className="text-xs sm:text-sm text-[#b2b2b2] italic">{experience.duration}</p>
                  </div>
                </div>

 {/* Visible description with improved style */}
<div className="mt-4 text-sm text-[#b2b2b2] leading-relaxed px-6 py-4">
  <p className="font-semibold text-[#8a2be2] text-lg leading-snug">
    {experience.company}
  </p>
  <div className="mt-2">
    {experience.description.split('\n').map((line, index) => (
      <p
        key={index}
        className="mt-2 text-[#e0e0e0] text-sm font-medium leading-tight relative"
      >
        {line.trim()}
      </p>
    ))}
  </div>
</div>

              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
