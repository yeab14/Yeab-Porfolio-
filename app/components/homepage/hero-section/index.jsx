// @flow strict

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
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
            <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-5xl lg:leading-14">
      Hello, <br />
      I&apos;m {' '}
      <span className="text-pink-500">{personalData.name}</span>, <br />
      {`a Professional `}
      <span className="text-green-400">{personalData.designation}</span>
      .
    </h1>


          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:text-white duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:text-white duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:text-white duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:text-white duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:text-white duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
  <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full flex-1 transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
  <button className="w-full px-3 py-2 md:px-6 md:py-3 bg-[#0d1224] rounded-full text-white uppercase tracking-wider font-medium text-sm flex items-center justify-center hover:bg-transparent hover:border-pink-500 hover:text-white transition-all duration-200 ease-out">
    <span>Contact me</span>
    <RiContactsFill size={14} className="ml-1" />
  </button>
</Link>


  <Link href={personalData.resume} target="_blank" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 py-2 md:px-6 md:py-3 text-white uppercase tracking-wider font-medium text-sm hover:text-white hover:from-violet-600 hover:to-pink-500 transition-all duration-200 ease-out">
    <span>Get Resume</span>
    <MdDownload size={14} className="ml-1" />
  </Link>
</div>



        </div>
        <div className="order-1 lg:order-2 relative rounded-lg bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border-[#1b2c68a0] border-[#1b2c68a0]">
          <div className="absolute inset-0 flex justify-between">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="text-pink-500">const</span>
                <span className="text-white">coder</span>
                <span className="text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Yeabsira Dereje</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Apollo client</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Rest API</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Graphql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Streamlit</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Fast API</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">Quick learner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">Highly Committed:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-white">team-oriented:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
  <span className="ml-4 lg:ml-8 text-green-400">readyForOpportunities:</span>
  <span className="text-orange-400">function</span>
  <span className="text-gray-400">{'() {'}</span>
</div>
<div>
  <span className="ml-8 lg:ml-16 text-orange-400">return</span>
  <span className="text-gray-400">{`(`}</span>
</div>
<div>
  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
  <span className="text-white">dedicatedWorker</span>
  <span className="text-amber-300">&amp;&amp;</span>
</div>
<div>
  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
  <span className="text-white">creativeProblemSolver</span>
  <span className="text-amber-300">&amp;&amp;</span>
</div>
<div>
  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
  <span className="text-white">versatileSkills</span>
  <span className="text-amber-300">&gt;=</span>
  <span className="text-orange-400">5</span>
</div>

              <div><span className="ml-8 lg:ml-16 text-gray-400">{`)`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

