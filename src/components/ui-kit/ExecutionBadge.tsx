import { AnimatePresence, motion } from "motion/react";
import { TaltrixBadge } from "./Badge";
import type { RunnerState } from "@/types/execution";

const COPY: Record<RunnerState, { text: string; tone: "neutral" | "success" | "warning" | "accent" }> = {
  idle: { text: "ready", tone: "neutral" },
  running: { text: "executing", tone: "success" },
  paused: { text: "paused", tone: "warning" },
  done: { text: "completed", tone: "accent" },
};

/** Animated pill that reflects the replay state of the placeholder runtime. */
export function ExecutionBadge({ state }: { state: RunnerState }) {
  const { text, tone } = COPY[state];
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={state}
        initial={{ opacity: 0, y: -6, filter: "blur(3px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: 6, filter: "blur(3px)" }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex"
      >
        <TaltrixBadge tone={tone}>{text}</TaltrixBadge>
      </motion.span>
    </AnimatePresence>
  );
}
