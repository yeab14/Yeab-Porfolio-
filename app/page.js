import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Credentials from "./components/homepage/certification";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <Skills />
      <Credentials />
      <ContactSection />
    </>
  );
}
