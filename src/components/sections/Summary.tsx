import { useTranslations, useLocale } from "next-intl";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

type SupportedLocale = "en" | "es" | "fr";

export function Summary() {
  const t = useTranslations("Sections");
  const locale = useLocale() as SupportedLocale;
  const summary = cvData.professionalSummary[locale] ?? cvData.professionalSummary.en;

  return (
    <section aria-labelledby="summary-heading" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="summary-heading">{t("summary")}</span>
        </SectionTitle>
        <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)]">
          {summary}
        </p>
      </div>
    </section>
  );
}
