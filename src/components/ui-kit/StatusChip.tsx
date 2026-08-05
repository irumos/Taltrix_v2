import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const TONES = {
  idle: "text-muted-foreground",
  running: "text-success",
  paused: "text-warning",
  done: "text-accent",
} as const;

export function StatusChip({
  tone = "idle",
  label,
  value,
  pulse = false,
  className,
}: {
  tone?: keyof typeof TONES;
  label?: string;
  value: string;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors duration-300 hover:bg-surface/70",
        className,
      )}
    >
      <motion.span
        aria-hidden
        animate={pulse ? { opacity: [1, 0.25, 1] } : { opacity: 1 }}
        transition={{ duration: 1.6, repeat: pulse ? Infinity : 0, ease: "easeInOut" }}
        className={cn("h-1.5 w-1.5 rounded-full bg-current", TONES[tone])}
      />
      {label ? <span className="text-muted-foreground/70">{label}</span> : null}
      <span className={TONES[tone]}>{value}</span>
    </span>
  );
}
