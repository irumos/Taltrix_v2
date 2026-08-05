import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

/** Illustrated placeholder used wherever a panel has nothing to show yet. */
export function EmptyState({
  icon: Icon,
  title,
  message,
}: {
  icon: LucideIcon;
  title: string;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border/60 bg-background/30 px-4 py-6 text-center">
      <motion.div
        animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-surface/60"
      >
        <Icon className="h-4 w-4 text-accent/80" />
        <span className="absolute -inset-1 -z-10 rounded-2xl bg-primary/10 blur-md" aria-hidden />
      </motion.div>
      <p className="font-mono text-[11px] text-foreground">{title}</p>
      <p className="max-w-[26ch] font-mono text-[10px] leading-relaxed text-muted-foreground/70">{message}</p>
    </div>
  );
}