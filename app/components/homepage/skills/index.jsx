import { skillGroups } from "@/utils/data/skills";
import SectionHeading from "../../helper/section-heading";

function Skills() {
  return (
    <section id="expertise" className="scroll-mt-28 border-t border-white/10 py-16 md:py-24">
      <SectionHeading
        index="03"
        eyebrow="Skills"
        title="Tools I use"
        summary="Spring Boot and NestJS are the ones I use most. The rest is what I use around them."
      />

      <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="bg-[#090b0a] p-6 md:p-7">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#d6b48a]">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-white/15 px-2.5 py-1 text-sm text-[#d9d3c8]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
