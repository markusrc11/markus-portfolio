import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface-muted)] px-2 py-0.5 text-xs font-medium text-[var(--text-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
