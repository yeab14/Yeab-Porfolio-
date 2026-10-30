import { certifications } from "@/utils/data/certifications";
import { education } from "@/utils/data/education";
import SectionHeading from "../../helper/section-heading";

function Credentials() {
  return (
    <section id="education" className="scroll-mt-28 border-t border-white/10 py-16 md:py-24">
      <SectionHeading
        index="04"
        eyebrow="Education"
        title="Education"
        summary="I am studying for an MSc in Computer Science. My bachelor's degree finished with a 3.77 GPA."
      />

      <div className="mt-4">
        {education.map((item) => (
          <article
            key={item.id}
            className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-4">
              <h3 className="font-serif text-2xl text-[#f4efe6] md:text-3xl">
                {item.credential}
              </h3>
              <p className="mt-3 text-sm text-[#b7b0a4]">{item.duration}</p>
              <p className="mt-1 text-sm text-[#b7b0a4]">{item.location}</p>
            </div>
            <div className="md:col-span-8">
              <p className="text-[#f4efe6]">{item.school}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#b7b0a4] md:text-base">
                {item.detail}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 border-t border-white/10 pt-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#d6b48a]">Certificates</p>
        {certifications.map((item) => (
          <article key={item.id} className="mt-6 max-w-3xl border-t border-white/10 pt-6 first-of-type:border-t-0 first-of-type:pt-4">
            <h3 className="font-serif text-2xl leading-snug text-[#f4efe6]">{item.title}</h3>
            {(item.issuer || item.date || item.grade) && (
              <p className="mt-3 text-sm text-[#b7b0a4]">
                {[item.issuer, item.date, item.grade ? `Grade ${item.grade}` : null]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-[#b7b0a4] md:text-base">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Credentials;
