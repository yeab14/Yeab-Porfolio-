// @flow strict
'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 bg-gradient-to-r from-[#121212] to-[#090909]">

      {/* Background Image with subtle animation */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-40 animate-pulse blur-xl"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8 max-w-7xl px-4 sm:px-8 lg:px-16">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-4 md:pb-10 lg:pt-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 md:text-6xl lg:text-7xl animate-float">
            Hello, <br />
            I&apos;m <span className="text-white">{personalData.name}</span>, <br />

            <span className="text-green-400">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-6">
            {['github', 'linkedIn', 'facebook', 'leetcode', 'twitter'].map((platform) => (
              <Link
                href={personalData[platform]}
                target="_blank"
                key={platform}
                className="text-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                {
                  platform === 'github' ? <BsGithub size={30} /> :
                  platform === 'linkedIn' ? <BsLinkedin size={30} /> :
                  platform === 'facebook' ? <FaFacebook size={30} /> :
                  platform === 'leetcode' ? <SiLeetcode size={30} /> :
                  <FaTwitterSquare size={30} />
                }
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="bg-gradient-to-r from-pink-500 to-violet-600 p-[1px] rounded-full flex-1 transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="w-full px-6 py-3 bg-[#0d1224] rounded-full text-white uppercase tracking-wider font-medium text-sm flex items-center justify-center hover:bg-transparent hover:border-pink-500 hover:text-white transition-all duration-200 ease-out transform hover:shadow-xl">
                <span>Contact me</span>
                <RiContactsFill size={14} className="ml-2" />
              </button>
            </Link>

            <Link href={personalData.resume} target="_blank" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-white uppercase tracking-wider font-medium text-sm hover:text-white hover:from-violet-600 hover:to-pink-500 transition-all duration-200 ease-out transform hover:shadow-xl">
              <span>Get Resume</span>
              <MdDownload size={14} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="group order-1 lg:order-2 relative rounded-lg bg-gradient-to-r from-[#121212] to-[#090909] border-2 border-[#1b2c68a0] transition-all duration-500 ease-in-out 
    group-hover:shadow-2xl group-hover:shadow-purple-500 group-hover:border-4 group-hover:border-purple-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-purple-200 group-hover:backdrop-blur-md">
  
  <div className="absolute inset-0 flex justify-between">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600 animate-move-left-right"></div>
    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent animate-move-left-right"></div>
  </div>

  <div className="px-6 lg:px-8 py-6 lg:py-8">
    <div className="flex items-center space-x-2">
      <div className="h-3 w-3 rounded-full bg-red-400 animate-move-left-right"></div>
      <div className="h-3 w-3 rounded-full bg-orange-400 animate-move-left-right"></div>
      <div className="h-3 w-3 rounded-full bg-green-200 animate-move-left-right"></div>
    </div>
  </div>

  <div className="overflow-hidden border-t-[2px] border-indigo-900 px-6 lg:px-8 py-6 lg:py-8">
    <code className="font-mono text-xs md:text-sm lg:text-base text-white">
      <div>
        <span className="text-pink-500">const </span>
        <span className="text-white">softwareEngineer</span>
        <span className="text-pink-500"> = </span>
        <span className="text-gray-400">{'{'}</span>
      </div>
      <div>
        <span className="ml-6 text-white">name:</span>
        <span className="text-gray-400">{`'`}</span>
        <span className="text-amber-300">Yeabsira Dereje</span>
        <span className="text-gray-400">{`',`}</span>
      </div>
      <div className="ml-6">
        <span className="text-white">skills:</span>
        <span className="text-gray-400">{`[ `}</span>
        <span className="text-amber-300">React</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">NextJS</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Vue.js</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Spring Boot</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Node.js</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">FastAPI</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Python</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Golang</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Docker</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Kubernetes</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">MySQL</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">PostgreSQL</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">MongoDB</span>
        <span className="text-gray-400">{` ],`}</span>
      </div>
      <div>
        <span className="ml-6 text-white">experience:</span>
        <span className="text-gray-400">{`[ `}</span>
        <span className="text-amber-300">Building scalable e-commerce platforms</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Developing robust backend architectures</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Leading team-driven projects</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-amber-300">Optimizing performance at scale</span>
        <span className="text-gray-400">{` ],`}</span>
      </div>
      <div>
        <span className="ml-6 text-white">qualities:</span>
        <span className="text-gray-400">{`[ `}</span>
        <span className="text-orange-400">Quick Learner</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-orange-400">Highly Committed</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-orange-400">Team-Oriented</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-orange-400">Creative Problem Solver</span>
        <span className="text-gray-400">{`, `}</span>
        <span className="text-orange-400">Versatile Skillset</span>
        <span className="text-gray-400">{` ],`}</span>
      </div>
      <div>
        <span className="ml-6 text-white">readyForOpportunities:</span>
        <span className="text-orange-400">function</span>
        <span className="text-gray-400">{'() {'}</span>
      </div>
      <div>
        <span className="ml-8 text-cyan-400">return</span>
        <span className="text-gray-400">{`(`}</span>
      </div>
      <div>
        <span className="ml-12 text-cyan-400">this.</span>
        <span className="text-white">dedicatedWorker</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 text-cyan-400">this.</span>
        <span className="text-white">creativeProblemSolver</span>
        <span className="text-amber-300">&amp;&amp;</span>
      </div>
      <div>
        <span className="ml-12 text-cyan-400">this.</span>
        <span className="text-white">versatileSkills</span>
        <span className="text-amber-300">&gt;=</span>
        <span className="text-orange-400">5</span>
      </div>
      <div><span className="ml-8 text-gray-400">{`)`}</span></div>
      <div><span className="ml-6 text-gray-400">{`};`}</span></div>
      <div><span className="text-gray-400">{`};`}</span></div>
    </code>
  </div>

</div>


      </div>
    </section>
  );
};

export default HeroSection;
