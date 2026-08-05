import { motion } from "motion/react";
import { useId } from "react";
import { cn } from "@/lib/utils";

export interface TabItem<T extends string> {
  value: T;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

/** Underline tabs with a shared layout indicator. */
export function Tabs<T extends string>({
  value,
  items,
  onChange,
  className,
}: {
  value: T;
  items: TabItem<T>[];
  onChange: (value: T) => void;
  className?: string;
}) {
  const layoutId = useId();
  return (
    <div role="tablist" className={cn("flex items-center gap-1 overflow-x-auto", className)}>
      {items.map((item) => {
        const active = item.value === value;
        const Icon = item.icon;
        return (
          <button
            key={item.value}
            role="tab"
            type="button"
            aria-selected={active}
            data-cursor="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "relative flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
            {item.label}
            {active ? (
              <motion.span
                layoutId={layoutId}
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
                className="absolute inset-x-1 -bottom-px h-px bg-accent"
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
