type Locale = "en" | "es" | "fr";

/** Month is 1-indexed (1 = January). */
export type YearMonth = { year: number; month: number };

function formatMonthYear(date: YearMonth, locale: Locale): string {
  const formatted = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(new Date(date.year, date.month - 1, 1));
  // Spanish/French abbreviated months come lowercased — capitalize for a CV look.
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export function formatRange(
  start: YearMonth,
  end: YearMonth | null,
  locale: Locale,
  presentLabel: string
): string {
  const startLabel = formatMonthYear(start, locale);
  const endLabel = end ? formatMonthYear(end, locale) : presentLabel;
  return `${startLabel} – ${endLabel}`;
}
