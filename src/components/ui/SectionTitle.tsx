import { clsx } from "clsx";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <div className={clsx("mb-8", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
        {children}
      </h2>
      <div className="mt-2 h-px w-12 bg-[var(--foreground)] opacity-20" aria-hidden="true" />
    </div>
  );
}
