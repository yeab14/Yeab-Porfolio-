"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience" },
  { href: "/#systems", label: "Systems" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact", emphasis: true },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 -mx-6 border-b border-white/10 bg-[#090b0a]/85 backdrop-blur-md sm:-mx-10 lg:-mx-12">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-[#f4efe6]"
          onClick={close}
        >
          Yeabsira Dereje
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.emphasis
                  ? "border border-[#d6b48a]/70 px-3 py-1.5 text-sm text-[#d6b48a] transition hover:bg-[#d6b48a] hover:text-[#1a1610]"
                  : "text-sm text-[#d9d3c8] transition hover:text-[#f4efe6]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="border border-white/15 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[#f4efe6] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col border-t border-white/10 px-6 py-3 md:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="border-b border-white/10 py-3 text-sm text-[#f4efe6] last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

export default Navbar;
