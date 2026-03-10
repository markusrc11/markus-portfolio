import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

export function Education() {
  const t = useTranslations("Sections");

  return (
    <section aria-labelledby="education-heading" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="education-heading">{t("education")}</span>
        </SectionTitle>

        <ol className="flex flex-col gap-8">
          {cvData.education.map((edu) => (
            <li key={edu.degree} className="grid gap-1 sm:grid-cols-[1fr_2fr]">
              {/* Left: year + institution */}
              <div className="flex flex-col gap-1">
                <time className="text-xs font-medium text-[var(--text-muted)]">
                  {edu.year}
                </time>
                <span className="text-sm font-semibold text-[var(--foreground)]">
                  {edu.institution}
                </span>
                <span className="text-xs text-[var(--text-muted)]">{edu.grade}</span>
              </div>

              {/* Right: degree */}
              <p className="text-sm font-medium text-[var(--text-muted)] sm:self-center">
                {edu.degree}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
