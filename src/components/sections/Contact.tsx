import { useTranslations } from "next-intl";
import { Mail, Linkedin, Github } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

const { contact } = cvData.personalInfo;

export function Contact() {
  const t = useTranslations("Contact");
  const tSections = useTranslations("Sections");

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="contact-heading">{tSections("contact")}</span>
        </SectionTitle>

        <p className="mb-6 max-w-xl text-base leading-7 text-[var(--text-muted)]">
          {t("body")}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            aria-label={t("email")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-fg)] transition-all duration-150 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 outline-none"
          >
            <Mail size={15} aria-hidden="true" />
            {t("email")}
          </a>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <Linkedin size={16} aria-hidden="true" />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <Github size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
