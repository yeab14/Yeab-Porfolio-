export default function SectionHeading({ index, eyebrow, title, summary }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#d6b48a]">
        {index}
        <span className="px-2 text-[#f4efe6]/30">/</span>
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-4xl leading-[1.05] text-[#f4efe6] md:text-5xl">
        {title}
      </h2>
      {summary ? (
        <p className="mt-4 text-base leading-relaxed text-[#b7b0a4] md:text-lg">{summary}</p>
      ) : null}
    </div>
  );
}
