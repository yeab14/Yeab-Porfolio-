// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <div className="relative w-full p-6 bg-[#0f0f0f] rounded-2xl border border-[#2d2d2d] shadow-[0_4px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_60px_rgba(0,0,0,0.7)] transition-all duration-500 overflow-hidden">
      <div className="relative p-6 rounded-xl border border-[#333] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
        
        {/* Footer Content */}
        <div className="text-center space-y-4">
          {/* Copyright */}
          <p className="text-1xl font-semibold text-gray-100">
            © {new Date().getFullYear()}{' '}
            <span className="text-[#16f2b3] hover:underline">
              Software Engineer Portfolio by{' '}
              <Link href="https://www.linkedin.com/in/yeabsira-dereje-b798a9287/" target="_blank">
                Yeabsira Dereje Alemayhu
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
