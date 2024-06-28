// @flow strict
import Link from 'next/link';
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white text-center py-8">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-lg md:text-xl">
            © Developer Portfolio by{' '}
            <Link href="https://www.linkedin.com/in/abu-said-bd/" target="_blank" className="text-[#16f2b3] hover:underline">
              Yeabsira Dereje
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
