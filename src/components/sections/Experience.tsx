import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

export function Experience() {
  const t = useTranslations("Sections");
  const tCommon = useTranslations("Common");

  return (
    <section aria-labelledby="experience-heading" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="experience-heading">{t("experience")}</span>
        </SectionTitle>

        <ol className="flex flex-col gap-10">
          {cvData.experience.map((job) => {
            const period = job.period.replace("Present", tCommon("present"));
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
                  <p className="text-sm font-bold text-[var(--foreground)]">{job.role}</p>
                  <ul className="flex flex-col gap-1" aria-label={`Highlights at ${job.company}`}>
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-[var(--text-muted)]">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text-muted)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
