import { AnimatePresence, motion } from "motion/react";
import { Cpu } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";

/**
 * Minimal CPU visualisation. Each step pushes one instruction through the
 * core: it enters from the left, the die pulses, and it exits to the right.
 */
export function CpuCard() {
  const { step, index, state, metrics } = useExecution();
  const active = state === "running";

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/60 bg-background/50 p-3">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        <span className="flex items-center gap-1.5">
          <Cpu className="h-3.5 w-3.5" /> cpu
        </span>
        <span className="text-muted-foreground/60">ir · line {step.line}</span>
      </div>

      <div className="relative mt-3 flex h-24 items-center justify-center">
        {/* instruction rail */}
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border/60" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ x: -110, opacity: 0 }}
            animate={{ x: [-110, 0, 0, 110], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.1, times: [0, 0.35, 0.6, 1], ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 -translate-y-1/2 rounded-md border border-accent/50 bg-accent/10 px-2 py-1 font-mono text-[9px] text-accent"
          >
            {step.label}
          </motion.span>
        </AnimatePresence>

        <motion.div
          animate={{
            boxShadow: active
              ? "0 0 34px -6px var(--color-primary)"
              : "0 0 0px 0px color-mix(in oklab, var(--color-primary) 0%, transparent)",
            borderColor: active
              ? "color-mix(in oklab, var(--color-primary) 70%, transparent)"
              : "color-mix(in oklab, var(--color-border) 80%, transparent)",
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid h-16 w-16 place-items-center rounded-xl border bg-surface/80"
        >
          <motion.div
            key={`die-${index}`}
            initial={{ scale: 0.86, opacity: 0.55 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="grid grid-cols-3 gap-1"
            aria-hidden
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.2, delay: i * 0.05, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1.5 rounded-[3px] bg-primary/80"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <dl className="grid grid-cols-3 gap-2 font-mono text-[9px]">
        {[
          ["fn", step.currentFunction ?? "<module>"],
          ["cycles", String(index + 1)],
          ["alloc", String(metrics.allocations)],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg border border-border/50 px-2 py-1.5">
            <dt className="text-muted-foreground/60 uppercase">{k}</dt>
            <dd className="mt-0.5 truncate text-accent">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}