function ProjectCard({ project, index }) {
  return (
    <article className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-12 md:gap-10 md:py-14">
      <div className="md:col-span-4">
        <p className="font-serif text-3xl text-[#d6b48a]">0{index + 1}</p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-[#f4efe6]">{project.name}</h3>
        <p className="mt-4 text-sm text-[#b7b0a4]">{project.client}</p>
        <p className="mt-1 text-sm text-[#f4efe6]">{project.role}</p>
      </div>

      <div className="md:col-span-8">
        <p className="text-base leading-relaxed text-[#d9d3c8] md:text-lg">{project.summary}</p>
        <div className="mt-5 space-y-4">
          {project.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-[#b7b0a4] md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
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

export default ProjectCard;
