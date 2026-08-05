import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A framed pane with a title strip — the base chrome for editor/console/inspector
 * regions inside the workspace.
 */
export function Window({
  title,
  icon: Icon,
  actions,
  children,
  className,
  bodyClassName,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <motion.section
      layout
      transition={{ type: "spring", stiffness: 280, damping: 34 }}
      className={cn("flex min-h-0 flex-col overflow-hidden bg-surface/40", className)}
    >
      <header className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-border/60 bg-surface/80 px-3">
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
          {title}
        </span>
        {actions ? <span className="flex items-center gap-1.5">{actions}</span> : null}
      </header>
      <div className={cn("min-h-0 flex-1 overflow-auto", bodyClassName)}>{children}</div>
    </motion.section>
  );
}
