// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl font-semibold rounded-md shadow-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4">
        {
          (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY) ? <ContactWithCaptcha />
            : <ContactWithoutCaptcha />
        }

<div className="lg:w-3/4 p-8 bg-[#121212] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform">
  <div className="flex flex-col gap-8 lg:gap-12">

    <div className="text-sm md:text-xl flex flex-col gap-5">
      <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <MdAlternateEmail size={36} className="text-[#8b98a5] hover:text-[#16f2b3] transition-all duration-300" />
        <span className="text-gray-300 text-lg font-medium">{personalData.email}</span>
      </div>
      <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <IoMdCall size={36} className="text-[#8b98a5] hover:text-[#16f2b3] transition-all duration-300" />
        <span className="text-gray-300 text-lg font-medium">{personalData.phone}</span>
      </div>
      <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <CiLocationOn size={36} className="text-[#8b98a5] hover:text-[#16f2b3] transition-all duration-300" />
        <span className="text-gray-300 text-lg font-medium">{personalData.address}</span>
      </div>
    </div>

    <div className="mt-8 lg:mt-16 flex justify-center gap-6">
      <Link target="_blank" href={personalData.github}>
        <IoLogoGithub size={48} className="bg-[#1a1a1a] p-4 rounded-full text-[#8b98a5] hover:text-[#16f2b3] shadow-md hover:shadow-xl transition-all duration-300" />
      </Link>
      <Link target="_blank" href={personalData.linkedIn}>
        <BiLogoLinkedin size={48} className="bg-[#1a1a1a] p-4 rounded-full text-[#8b98a5] hover:text-[#16f2b3] shadow-md hover:shadow-xl transition-all duration-300" />
      </Link>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default ContactSection;
