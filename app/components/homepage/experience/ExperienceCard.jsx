function ExperienceCard({ experience }) {
  const current = experience.duration.includes("Present");

  return (
    <article className="border-t border-white/10 py-10 md:py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          {current ? (
            <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#d6b48a]">Current</p>
          ) : null}
          <h3 className="font-serif text-3xl leading-tight text-[#f4efe6] md:text-4xl">
            {experience.title}
          </h3>
          <p className="mt-3 text-[#f4efe6]">
            {experience.company}
            <span className="px-2 text-white/25">·</span>
            <span className="text-[#b7b0a4]">{experience.location}</span>
          </p>
        </div>
        <p className="text-sm text-[#b7b0a4] md:pb-1">{experience.duration}</p>
      </div>

      <div className="mt-6 max-w-3xl">
        <p className="text-base leading-relaxed text-[#d9d3c8] md:text-lg">{experience.summary}</p>
        <ul className="mt-5 space-y-3">
          {experience.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#b7b0a4]">
              <span className="mt-[0.55rem] h-px w-4 shrink-0 bg-[#d6b48a]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2">
          {experience.stack.map((tool) => (
            <li
              key={tool}
              className="border border-white/15 px-2.5 py-1 text-xs tracking-wide text-[#d9d3c8]"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
