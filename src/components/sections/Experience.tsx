import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

type SupportedLocale = "en" | "es" | "fr";

export function Experience() {
  const t = useTranslations("Sections");
  const tCommon = useTranslations("Common");
  const locale = useLocale() as SupportedLocale;

  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="experience-heading">{t("experience")}</span>
        </SectionTitle>

        <ol className="flex flex-col gap-10">
          {cvData.experience.map((job) => {
            const period = job.period.replace("Present", tCommon("present"));
            const role = job.role[locale] ?? job.role.en;
            const highlights = job.highlights[locale] ?? job.highlights.en;
            return (
              <li key={`${job.company}-${job.period}`} className="relative grid gap-1 sm:grid-cols-[1fr_2fr]">
                {/* Left: meta */}
                <div className="flex flex-col gap-1">
                  <time className="text-xs font-medium text-[var(--text-muted)]">
                    {period}
                  </time>
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {job.company}
                  </span>
                </div>

                {/* Right: role + highlights */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold text-[var(--foreground)]">{role}</p>
                  <ul className="flex flex-col gap-1" aria-label={`Highlights at ${job.company}`}>
                    {highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-[var(--text-muted)]">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {job.tech.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`Main tools at ${job.company}`}>
                      {job.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-muted)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
