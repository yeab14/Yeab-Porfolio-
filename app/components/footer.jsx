// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="bg-[#0d1224] text-white py-12">
      <div className="container mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">

        {/* Footer Content */}
        <div className="flex flex-col items-center text-center space-y-4">
          
          {/* Copyright */}
          <p className="text-1xl font-semibold">
            © {new Date().getFullYear()}{' '}
            <span className="text-[#16f2b3] hover:underline">
              Developer Portfolio by{' '}
              <Link href="https://www.linkedin.com/in/yeabsira-dereje-b798a9287/" target="_blank">
                Yeabsira Dereje
              </Link>
            </span>
          </p>

          {/* Tagline */}
          <p className="text-md text-[#a1a7b3]">
            Passionate about building scalable, high-performance applications that drive business growth and innovation.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Footer;

