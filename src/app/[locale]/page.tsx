import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        {t("title")}
      </h1>
    </main>
  );
}
