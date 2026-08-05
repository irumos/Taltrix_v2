import { motion } from "motion/react";
import { useExecution } from "@/contexts/ExecutionContext";

/** Animated data packets travelling between the core and main memory. */
export function MemoryBus({ lanes = 3 }: { lanes?: number }) {
  const { index, state, step } = useExecution();
  const writing = (step.changed?.length ?? 0) > 0;
  const duration = state === "running" ? 1.1 : 1.9;

  return (
    <div className="relative h-14 overflow-hidden rounded-xl border border-border/60 bg-background/40 px-3 py-2">
      <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-muted-foreground/70 uppercase">
        <span>cpu</span>
        <span className="text-accent/70">{writing ? "write" : "read"}</span>
        <span>memory</span>
      </div>
      <div className="relative mt-2 space-y-1.5">
        {Array.from({ length: lanes }).map((_, lane) => (
          <div key={lane} className="relative h-[3px] rounded-full bg-border/50">
            <motion.span
              key={`${index}-${lane}`}
              aria-hidden
              initial={{ left: writing ? "0%" : "100%", opacity: 0 }}
              animate={{ left: writing ? "100%" : "0%", opacity: [0, 1, 1, 0] }}
              transition={{ duration, delay: lane * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}