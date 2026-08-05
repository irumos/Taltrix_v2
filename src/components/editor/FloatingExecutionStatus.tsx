import { motion } from "motion/react";
import { Activity, Clock, Zap } from "lucide-react";
import { useOptionalExecution } from "@/contexts/ExecutionContext";

export function FloatingExecutionStatus() {
  const exec = useOptionalExecution();
  if (!exec || exec.state === "idle") return null;

  const { step, index, total, state, visualizeState } = exec;

  const currentMs = step.executionTimeMs ?? (index + 1) * 0.42;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none absolute top-3 right-4 z-20 flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-surface/90 px-3.5 py-1.5 font-mono text-[11px] shadow-lg backdrop-blur-md"
    >
      <div className="flex items-center gap-1.5 text-cyan-300 font-semibold uppercase tracking-wider">
        <span className="relative flex h-2 w-2">
          {state === "running" ? (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          ) : null}
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
        </span>
        <span>{visualizeState}</span>
      </div>

      <span className="h-3 w-px bg-border/60" />

      <div className="text-foreground/90">
        Step <span className="font-bold text-cyan-300">{index + 1}</span> / {total}
      </div>

      <span className="h-3 w-px bg-border/60" />

      <div className="flex items-center gap-1 text-purple-300">
        <Zap className="h-3 w-3 text-purple-400" />
        <span>{step.currentFunction || "main()"}</span>
      </div>

      <span className="h-3 w-px bg-border/60" />

      <div className="flex items-center gap-1 text-muted-foreground">
        <Clock className="h-3 w-3 text-muted-foreground/70" />
        <span>{currentMs.toFixed(2)} ms</span>
      </div>
    </motion.div>
  );
}
