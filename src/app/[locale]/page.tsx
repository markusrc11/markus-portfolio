import { useTranslations } from "next-intl";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Summary } from "@/components/sections/Summary";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";

export default function HomePage() {
  const _t = useTranslations("Index");

  return (
    <>
      <Navbar />
      <main className="bg-[var(--background)]">
        <Hero />
        <div className="divide-y divide-[var(--border)]">
          <Summary />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
}
