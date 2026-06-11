import { useTranslations } from "next-intl";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Summary } from "@/components/sections/Summary";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  const _t = useTranslations("Index");

  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)]">
        <Hero />
        <div className="divide-y divide-[var(--border)]">
          <Summary />
          <Skills />
          <Experience />
          {/* Projects renders nothing until cvData.projects has entries (TODO) */}
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
    </>
  );
}
