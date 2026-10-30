import { projectsData } from "@/utils/data/projects-data";
import SectionHeading from "../../helper/section-heading";
import ProjectCard from "./project-card";

function Projects() {
  return (
    <section id="systems" className="scroll-mt-28 border-t border-white/10 py-16 md:py-24">
      <SectionHeading
        index="02"
        eyebrow="Systems"
        title="Systems I have built"
        summary="A closer look at the main systems from those jobs."
      />
      <div className="mt-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
