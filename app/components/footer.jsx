import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[76rem] flex-col gap-3 px-6 py-8 text-sm text-[#b7b0a4] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <p>© {new Date().getFullYear()} Yeabsira Dereje Alemayhu</p>
        <p>
          <Link href="/#contact" className="transition hover:text-[#f4efe6]">
            Backend Software Engineer
          </Link>
          <span className="px-2 text-white/20">·</span>
          Salzburg, Austria
        </p>
      </div>
    </footer>
  );
}

export default Footer;
