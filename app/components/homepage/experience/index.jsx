import { experiences } from "@/utils/data/experience";
import SectionHeading from "../../helper/section-heading";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 border-t border-white/10 py-16 md:py-24">
      <SectionHeading
        index="01"
        eyebrow="Experience"
        title="Where I have worked"
        summary="My current role is at Zagoal. Before that I worked at Inspur and Kegebrew."
      />
      <div className="mt-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
