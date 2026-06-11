import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

type SupportedLocale = "en" | "es" | "fr";

/**
 * TODO: This section is intentionally hidden for now. It renders nothing while
 * `cvData.projects` is empty. To enable it, add entries to `cvData.projects`
 * (see the TODO in src/data/cv.ts) — no other change needed.
 */
export function Projects() {
  const t = useTranslations("Sections");
  const locale = useLocale() as SupportedLocale;

  if (cvData.projects.length === 0) return null;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="projects-heading">{t("projects")}</span>
        </SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2">
          {cvData.projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--text-muted)]"
                  >
                    {project.name} ↗
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                {project.description[locale] ?? project.description.en}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
