"use client";

import { useEffect, useRef, useState } from "react";

const flow = [
  { title: "Caller", line: "Entry", icon: "caller" },
  { title: "API", line: "Contract", icon: "api" },
  { title: "Rules", line: "Consistency", icon: "rules" },
  { title: "Data", line: "Source of truth", icon: "data" },
];

const decisions = [
  {
    label: "Entry",
    title: "Who is allowed in",
    icon: "caller",
    body: "A user, another service, and a background job are different callers. Each one gets its own entry and its own authentication. After that line, nothing reaches the database by skipping the API.",
  },
  {
    label: "Contract",
    title: "What the API promises",
    icon: "api",
    body: "The API describes the action the caller needs, not the tables behind it. Validation and permission finish before any rule runs. Callers stay stable when a column changes or a module is split, because they depend on the contract.",
  },
  {
    label: "Consistency",
    title: "Which writes must succeed together",
    icon: "rules",
    body: "The business rule lives in one layer, not in the controller and not in the query. I decide which changes commit in the same transaction, and which may finish after the response. A retry returns the first result instead of creating a second record.",
  },
  {
    label: "Data",
    title: "Where the record lives",
    icon: "data",
    body: "The database is the source of truth, picked for how the data is read. Transactions stay in PostgreSQL or MySQL. A read that repeats goes to a cache. Schema changes are versioned, and indexes follow the queries the API actually runs.",
  },
  {
    label: "Later",
    title: "What must not block the answer",
    icon: "later",
    body: "Notifications and calls to other systems leave the request. The record is saved first, and the message is taken from that saved state, so a crash cannot keep one and lose the other. The worker can see the same message twice and still finish once. If that other system slows down, the caller already has an answer, and the service stops accepting more work than it can finish.",
  },
];

const qualities = [
  {
    title: "Secure",
    icon: "secure",
    detail:
      "Identity and permission are decided at the boundary. The database account can only do what that part of the system owns. Input that fails validation never reaches the rules.",
  },
  {
    title: "Fast",
    icon: "fast",
    detail:
      "The request validates, decides, and writes. Repeated reads are cached. Heavy work is queued. When a dependency slows down, the service sheds load instead of holding the caller.",
  },
  {
    title: "Clear",
    icon: "clear",
    detail:
      "The API, the rules, and the data access change in separate places. Every request carries an id from the first hop into the logs, and a health check says whether the service should receive traffic.",
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
      <div className="max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d6b48a]">
          Services
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#f4efe6] md:text-5xl">
          How I design a system
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#b7b0a4] md:text-lg">
          I design the system as a set of decisions: who can call it, what the API promises, which changes must succeed together, where the data lives, and which work must not block the response.
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
            <Node item={{ title: "Later", line: "After the response", icon: "later" }} />
          </div>
        </div>
      </div>

      <ol className="mt-14">
        {decisions.map((item, index) => (
          <li
            key={item.label}
            className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-12 md:gap-10 md:py-10"
          >
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6b48a]">
                0{index + 1}
                <span className="px-2 text-[#f4efe6]/30">/</span>
                {item.label}
              </p>
              <div className="mt-4 flex items-center gap-3 text-[#d6b48a]">
                <Glyph name={item.icon} />
                <h3 className="font-serif text-2xl text-[#f4efe6] md:text-3xl">{item.title}</h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#b7b0a4] md:col-span-8 md:text-base">{item.body}</p>
          </li>
        ))}
      </ol>

      <ul className="mt-4 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
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
