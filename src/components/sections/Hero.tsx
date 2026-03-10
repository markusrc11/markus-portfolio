"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cvData } from "@/data/cv";

const { personalInfo } = cvData;

const CV_BY_LOCALE: Record<string, string> = {
  en: "/cv_en_marc_ruiz.pdf",
  es: "/cv_es_marc_ruiz.pdf",
  fr: "/cv_fr_marc_ruiz.pdf",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, z: 0 },
  visible: { opacity: 1, y: 0, z: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const cvUrl = CV_BY_LOCALE[locale] ?? CV_BY_LOCALE.en;

  return (
    <section
      className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12 text-center"
      aria-label="Hero"
    >
      <motion.div
        className="flex max-w-2xl flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location pill */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]">
            <MapPin size={12} aria-hidden="true" />
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="text-lg font-medium text-[var(--text-muted)] sm:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base text-[var(--text-muted)]"
        >
          {t("title")}
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            variant="primary"
            aria-label={t("cta")}
            onClick={() => window.open(cvUrl, "_blank")}
          >
            <Download size={15} aria-hidden="true" />
            {t("cta")}
          </Button>

          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <Linkedin size={16} aria-hidden="true" />
          </a>

          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <Github size={16} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
