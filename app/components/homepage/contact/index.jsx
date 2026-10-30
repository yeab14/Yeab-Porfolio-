import { personalData } from "@/utils/data/personal-data";
import SectionHeading from "../../helper/section-heading";
import ContactWithCaptcha from "./contact-with-captcha";
import ContactWithoutCaptcha from "./contact-without-captcha";

const links = [
  {
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}?subject=Backend%20role`,
  },
  {
    label: "Phone",
    value: personalData.phone,
    href: personalData.phoneHref,
  },
  {
    label: "Based in",
    value: personalData.address,
  },
  {
    label: "GitHub",
    value: "github.com/yeab14",
    href: personalData.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yeabsira-dereje-b798a9287",
    href: personalData.linkedIn,
    external: true,
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: personalData.resume,
    external: true,
  },
];

function ContactSection() {
  const captchaEnabled =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
    process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  return (
    <section id="contact" className="scroll-mt-28 border-t border-white/10 py-16 md:py-24">
      <SectionHeading
        index="05"
        eyebrow="Contact"
        title="Get in touch"
        summary="Email or phone both work. I live in Salzburg and I am open to remote work."
      />

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {links.map((item) => (
            <li key={item.label} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 py-4">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#b7b0a4]">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="break-all text-[#f4efe6] underline-offset-4 hover:text-[#d6b48a] hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-[#f4efe6]">{item.value}</span>
              )}
            </li>
          ))}
        </ul>

        {captchaEnabled ? <ContactWithCaptcha /> : <ContactWithoutCaptcha />}
      </div>
    </section>
  );
}

export default ContactSection;
