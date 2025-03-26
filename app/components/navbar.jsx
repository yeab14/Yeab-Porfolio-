// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#121212] to-[#090909] border-[#1b2c68a0] shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out backdrop-blur-lg">
      <div className="flex items-center justify-between py-5 px-6">
        <div className="flex flex-shrink-0 items-center space-x-4">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold tracking-wider hover:text-[#00f2ff] transition duration-300 ease-in-out">
            Yeabsira Dereje
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-6 md:border-0 md:opacity-100">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline transition duration-300 ease-in-out hover:bg-[#1b2c68a0] hover:text-pink-600 rounded-md" href="/#about">
              <div className="text-sm text-white">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline transition duration-300 ease-in-out hover:bg-[#1b2c68a0] hover:text-pink-600 rounded-md" href="/#experience">
              <div className="text-sm text-white">EXPERIENCE</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline transition duration-300 ease-in-out hover:bg-[#1b2c68a0] hover:text-pink-600 rounded-md" href="/#skills">
              <div className="text-sm text-white">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline transition duration-300 ease-in-out hover:bg-[#1b2c68a0] hover:text-pink-600 rounded-md" href="/#certification">
              <div className="text-sm text-white">certification</div>
            </Link>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline transition duration-300 ease-in-out hover:bg-[#1b2c68a0] hover:text-pink-600 rounded-md" href="/blog">
              <div className="text-sm text-white">BLOGS</div>
            </Link>
          </li> */}
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline transition duration-300 ease-in-out hover:bg-[#1b2c68a0] hover:text-pink-600 rounded-md" href="/#projects">
              <div className="text-sm text-white">PROJECTS</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
