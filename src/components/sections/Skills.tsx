"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { cvData } from "@/data/cv";

type SkillCategory = keyof typeof cvData.skills;

const categoryOrder: SkillCategory[] = [
  "management",
  "backend",
  "frontend",
  "infrastructure",
  "databases",
];

export function Skills() {
  const t = useTranslations("Sections");
  const tSkills = useTranslations("Skills");

  return (
    <section aria-labelledby="skills-heading" className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle>
          <span id="skills-heading">{t("skills")}</span>
        </SectionTitle>

        <div className="grid gap-6 sm:grid-cols-2">
          {categoryOrder.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16, z: 0 }}
              whileInView={{ opacity: 1, y: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" as const }}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
              aria-label={`${tSkills(category)} skills`}
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {tSkills(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills[category].map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
