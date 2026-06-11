import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cvData } from "@/data/cv";

export function Navbar() {
  const t = useTranslations("Nav");

  const nav = [
    { id: "skills", label: t("skills") },
    { id: "experience", label: t("experience") },
    { id: "education", label: t("education") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-[var(--foreground)]"
        >
          {cvData.personalInfo.nickname}
        </a>
        <div className="flex items-center gap-4">
          <nav
            aria-label="Section navigation"
            className="hidden items-center gap-5 md:flex"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-[var(--border)] md:block"
          />
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
