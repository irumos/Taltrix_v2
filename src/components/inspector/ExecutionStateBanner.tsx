import { motion } from "motion/react";
import { AlertTriangle, Infinity as InfinityIcon, MemoryStick, TimerOff, XOctagon } from "lucide-react";
import type { StepStatus } from "@/types/execution";

const STATES: Record<
  string,
  { icon: typeof AlertTriangle; title: string; detail: string }
> = {
  "compile-error": {
    icon: XOctagon,
    title: "Compile error",
    detail: "The program never reached the runtime — the parser rejected the source.",
  },
  "runtime-error": {
    icon: AlertTriangle,
    title: "Runtime error",
    detail: "Execution stopped mid-frame. The traceback is printed in the console.",
  },
  "infinite-loop": {
    icon: InfinityIcon,
    title: "Infinite loop detected",
    detail: "The loop guard never changed, so the scheduler halted the run.",
  },
  timeout: {
    icon: TimerOff,
    title: "Execution timeout",
    detail: "The run exceeded its time budget and was cancelled.",
  },
  "memory-overflow": {
    icon: MemoryStick,
    title: "Memory overflow",
    detail: "Allocation exceeded the sandbox memory ceiling.",
  },
};

/** Stylised failure banner driven by the trace's terminal status. */
export function ExecutionStateBanner({ status }: { status: StepStatus }) {
  const state = STATES[status];
  if (!state) return null;
  const Icon = state.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-xl border border-destructive/50 bg-destructive/10 p-3"
    >
      <motion.span
        aria-hidden
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 top-0 h-px bg-destructive"
      />
      <p className="flex items-center gap-2 font-mono text-[11px] text-foreground">
        <Icon className="h-3.5 w-3.5 text-destructive" /> {state.title}
      </p>
      <p className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground">{state.detail}</p>
    </motion.div>
  );
}