import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

const facts = [
  { label: "Now", value: "Zagoal, remote" },
  { label: "Study", value: "MSc Computer Science" },
  { label: "Degree", value: "BSc 3.77 / 4.00" },
];

function HeroSection() {
  return (
    <section className="pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_20rem] lg:gap-16">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d6b48a]">
            {personalData.designation}
          </p>
          <h1 className="mt-4 font-serif text-[3.15rem] leading-[0.92] tracking-tight text-[#f4efe6] sm:text-6xl lg:text-7xl">
            <span className="block">Yeabsira</span>
            <span className="block">Dereje Alemayhu</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#d9d3c8] md:text-xl">
            {personalData.description}
          </p>
          <p className="mt-4 text-sm text-[#b7b0a4]">
            Salzburg, Austria
            <span className="px-2 text-white/25">·</span>
            Open to roles, including remote
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-[#d6b48a] px-5 py-3 text-sm font-medium text-[#1a1610] transition hover:bg-[#e6c9a4]"
            >
              Get in touch
            </a>
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm text-[#f4efe6] transition hover:border-[#d6b48a]"
            >
              View resume
            </a>
          </div>

          <div className="mt-5 flex gap-6 text-sm">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d6b48a] underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d6b48a] underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-[#f3eee4] p-3 lg:w-[20rem]">
          <Image
            src={personalData.profile}
            alt="Yeabsira Dereje Alemayhu"
            width={640}
            height={760}
            priority
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>

      <dl className="mt-14 grid border-y border-white/10 sm:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="border-b border-white/10 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0 sm:first:pl-0"
          >
            <dt className="text-[11px] uppercase tracking-[0.18em] text-[#b7b0a4]">
              {fact.label}
            </dt>
            <dd className="mt-2 text-[#f4efe6]">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default HeroSection;
