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
      <ul className="flex items-center gap-1">
        {routing.locales.map((loc) => (
          <li key={loc}>
            <Link
              href={pathname}
              locale={loc}
              className={clsx(
                "rounded px-2 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
                locale === loc
                  ? "text-[var(--foreground)]"
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
