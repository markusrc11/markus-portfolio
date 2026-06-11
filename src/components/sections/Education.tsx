import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

export function Education() {
  const t = useTranslations("Sections");

  return (
    <section id="education" aria-labelledby="education-heading" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="education-heading">{t("education")}</span>
        </SectionTitle>

        <div className="grid gap-10 sm:grid-cols-2">
          {/* Education */}
          <ol className="flex flex-col gap-6">
            {cvData.education.map((edu) => (
              <li key={edu.degree} className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-[var(--foreground)]">
                  {edu.degree}
                </span>
                <span className="text-sm text-[var(--text-muted)]">{edu.institution}</span>
                <span className="text-xs text-[var(--text-muted)]">
                  {edu.year} · {edu.grade}
                </span>
              </li>
            ))}
          </ol>

          {/* Languages */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              {t("languages")}
            </h3>
            <ul className="flex flex-col gap-2">
              {cvData.languages.map((lang) => (
                <li
                  key={lang.language}
                  className="flex items-center justify-between border-b border-[var(--border)] pb-2 text-sm"
                >
                  <span className="text-[var(--foreground)]">{lang.language}</span>
                  <span className="text-[var(--text-muted)]">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
