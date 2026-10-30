const services = [
  {
    title: "System architecture",
    body: "I split the product into services before the feature work starts. Each service owns its data and its API. Requests that need an answer immediately use REST. Work that can happen later goes through events, usually Kafka. I also set the rules for consistency, so an order or a booking is recorded once.",
  },
  {
    title: "How I implement it",
    body: "The services are Spring Boot or NestJS. API, business rules, and database access stay in separate layers, so a change stays in one place. PostgreSQL or MySQL holds the records, and schema changes are tracked. Redis is there when a cache or a queue is the right tool.",
  },
  {
    title: "Quality in the running system",
    body: "Security, performance, and code another engineer can maintain are part of the build. That includes authentication, limits on traffic, and a clear path when a dependency is slow or down. Docker and CI/CD ship the service. Health checks and trace IDs show what it is doing after release.",
  },
];

function AboutSection() {
  return (
    <section id="services" className="scroll-mt-28 border-t border-white/10 py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d6b48a]">
          Services
        </p>
        <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-[#f4efe6] md:text-5xl">
          How I build a backend
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#b7b0a4] md:text-lg">
          From the shape of the system, to the code, to a release you can operate.
        </p>
      </div>

      <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className="bg-[#090b0a] p-6 md:p-8">
            <p className="text-[11px] tracking-[0.2em] text-[#d6b48a]">0{index + 1}</p>
            <h3 className="mt-4 font-serif text-2xl text-[#f4efe6]">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b7b0a4]">{service.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
