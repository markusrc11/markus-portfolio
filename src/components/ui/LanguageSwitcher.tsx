"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { clsx } from "clsx";

const localeLabels: Record<string, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav aria-label="Language switcher">
      <ul className="flex items-center gap-0.5 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] p-0.5">
        {routing.locales.map((loc) => (
          <li key={loc}>
            <Link
              href={pathname}
              locale={loc}
              className={clsx(
                "block rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                locale === loc
                  ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--foreground)]"
              )}
              aria-label={`Switch to ${loc.toUpperCase()}`}
              aria-current={locale === loc ? "true" : undefined}
            >
              {localeLabels[loc]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
