"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cvData } from "@/data/cv";

const levelColors: Record<string, string> = {
  Native: "bg-[var(--foreground)]",
  "B2.2 (Professional)": "bg-[var(--foreground)] opacity-70",
  "B1 (Intermediate)": "bg-[var(--foreground)] opacity-40",
};

export function Languages() {
  const t = useTranslations("Sections");

  return (
    <section aria-labelledby="languages-heading" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="languages-heading">{t("languages")}</span>
        </SectionTitle>

        <ul className="flex flex-col gap-4">
          {cvData.languages.map((lang, i) => (
            <motion.li
              key={lang.language}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: "easeOut" as const }}
              className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3"
            >
              <span className="text-sm font-medium text-[var(--foreground)]">
                {lang.language}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--text-muted)]">{lang.level}</span>
                <div
                  className={`h-2 w-2 rounded-full ${levelColors[lang.level] ?? "bg-[var(--text-muted)]"}`}
                  aria-hidden="true"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
