"use client";

import { useEffect, useRef, useState } from "react";

const flow = [
  {
    title: "Caller",
    line: "Who asks",
    detail: "A person or another system.",
    icon: "caller",
  },
  {
    title: "API",
    line: "The contract",
    detail: "What callers can rely on.",
    icon: "api",
  },
  {
    title: "Rules",
    line: "The decision",
    detail: "Business logic lives here.",
    icon: "rules",
  },
  {
    title: "Data",
    line: "The record",
    detail: "Written once, and kept here.",
    icon: "data",
  },
];

const qualities = [
  {
    title: "Secure",
    detail: "Access is checked before the work starts.",
    icon: "secure",
  },
  {
    title: "Fast",
    detail: "The answer does not wait on slow work.",
    icon: "fast",
  },
  {
    title: "Clear",
    detail: "A change has one home, and a request can be followed.",
    icon: "clear",
  },
];

function Glyph({ name }) {
  const common = {
    viewBox: "0 0 32 32",
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    "aria-hidden": true,
  };

  if (name === "caller") {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="4" />
        <path d="M16 6v3M16 23v3M6 16h3M23 16h3" />
      </svg>
    );
  }
  if (name === "api") {
    return (
      <svg {...common}>
        <path d="M12 8H8v16h4M20 8h4v16h-4" />
      </svg>
    );
  }
  if (name === "rules") {
    return (
      <svg {...common}>
        <path d="M8 11h16M8 16h16M8 21h10" />
      </svg>
    );
  }
  if (name === "data") {
    return (
      <svg {...common}>
        <ellipse cx="16" cy="10" rx="8" ry="3" />
        <path d="M8 10v12c0 1.7 3.6 3 8 3s8-1.3 8-3V10" />
      </svg>
    );
  }
  if (name === "later") {
    return (
      <svg {...common}>
        <path d="M9 8v9a5 5 0 0 0 5 5h8" />
        <path d="M18 18l4 4-4 4" />
      </svg>
    );
  }
  if (name === "secure") {
    return (
      <svg {...common}>
        <path d="M16 6l8 3v6.5c0 4.5-3.2 7.4-8 9.5-4.8-2.1-8-5-8-9.5V9l8-3z" />
      </svg>
    );
  }
  if (name === "fast") {
    return (
      <svg {...common}>
        <path d="M18 6L10 17h6l-2 9 10-13h-6l0-7z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 16s4.5-6 12-6 12 6 12 6-4.5 6-12 6-12-6-12-6z" />
      <circle cx="16" cy="16" r="2.4" />
    </svg>
  );
}

function Node({ item }) {
  return (
    <article className="border border-white/10 bg-[#0c0f0d]/90 px-4 py-5 transition duration-300 hover:border-[#d6b48a]/55">
      <div className="flex h-10 w-10 items-center justify-center text-[#d6b48a]">
        <Glyph name={item.icon} />
      </div>
      <h3 className="mt-4 font-serif text-2xl text-[#f4efe6]">{item.title}</h3>
      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#d6b48a]">{item.line}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#b7b0a4]">{item.detail}</p>
    </article>
  );
}

function HConnector({ delay }) {
  return (
    <div className="relative mx-auto h-8 w-px bg-[#d6b48a]/70 md:mx-0 md:h-0.5 md:w-full md:self-center" aria-hidden>
      <span className="flow-dot flow-dot-y md:hidden" style={{ animationDelay: delay }} />
      <span className="flow-dot flow-dot-x hidden md:block" style={{ animationDelay: delay }} />
    </div>
  );
}

function AboutSection() {
  const sectionRef = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLive(true);
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`scroll-mt-28 border-t border-white/10 py-16 md:py-24 ${live ? "services-live" : ""}`}
    >
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d6b48a]">
          Services
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#f4efe6] md:text-5xl">
          How I design a system
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#b7b0a4] md:text-lg">
          I draw the path of a request first. One application or several parts, the drawing is the same.
        </p>
      </div>

      <div
        className="mt-12 border border-white/10 px-4 py-8 sm:px-6 md:px-8 md:py-10"
        style={{
          backgroundColor: "#0c0f0d",
          backgroundImage:
            "linear-gradient(rgba(214,180,138,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(214,180,138,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6b48a]">Request path</p>

        <div className="mt-8 grid grid-cols-1 gap-y-3 md:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)_2.75rem_minmax(0,1fr)_2.75rem_minmax(0,1fr)] md:items-center md:gap-y-0">
          <div className="md:col-start-1 md:row-start-1">
            <Node item={flow[0]} />
          </div>
          <div className="md:col-start-2 md:row-start-1">
            <HConnector delay="0s" />
          </div>
          <div className="md:col-start-3 md:row-start-1">
            <Node item={flow[1]} />
          </div>
          <div className="md:col-start-4 md:row-start-1">
            <HConnector delay="0.72s" />
          </div>
          <div className="md:col-start-5 md:row-start-1">
            <Node item={flow[2]} />
          </div>
          <div className="md:col-start-6 md:row-start-1">
            <HConnector delay="1.44s" />
          </div>
          <div className="md:col-start-7 md:row-start-1">
            <Node item={flow[3]} />
          </div>

          <div className="hidden justify-center md:col-start-5 md:row-start-2 md:flex" aria-hidden>
            <div className="relative h-12 w-px bg-[#d6b48a]/70">
              <span className="flow-dot flow-dot-y" style={{ animationDelay: "2.16s" }} />
            </div>
          </div>

          <div className="mt-6 md:col-start-5 md:row-start-3 md:mt-0">
            <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#d6b48a] md:hidden">
              Off the request path
            </p>
            <Node
              item={{
                title: "Later",
                line: "After the answer",
                detail: "Work that must not slow the caller.",
                icon: "later",
              }}
            />
          </div>
        </div>
      </div>

      <ul className="mt-10 grid gap-8 md:grid-cols-3">
        {qualities.map((item) => (
          <li key={item.title} className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d6b48a]/40 text-[#d6b48a]">
              <Glyph name={item.icon} />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#f4efe6]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#b7b0a4]">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutSection;
