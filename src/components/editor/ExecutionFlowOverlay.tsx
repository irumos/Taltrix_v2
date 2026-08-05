import { AnimatePresence, motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, RotateCcw } from "lucide-react";

export type FlowType = "function-call" | "function-return" | "loop-iteration" | null;

export function ExecutionFlowOverlay({
  flowType,
  detailText,
}: {
  flowType: FlowType;
  detailText?: string;
}) {
  if (!flowType) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${flowType}-${detailText}`}
        initial={{ opacity: 0, y: 12, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.92 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-xl border px-3.5 py-1.5 font-mono text-[11px] font-semibold shadow-xl backdrop-blur-md"
      >
        {flowType === "function-call" ? (
          <div className="flex items-center gap-1.5 border-purple-500/40 bg-purple-500/15 text-purple-300">
            <ArrowDownRight className="h-3.5 w-3.5 text-purple-400 animate-bounce" />
            <span>{detailText || "Entering Function Call"}</span>
          </div>
        ) : flowType === "function-return" ? (
          <div className="flex items-center gap-1.5 border-amber-500/40 bg-amber-500/15 text-amber-300">
            <ArrowUpRight className="h-3.5 w-3.5 text-amber-400" />
            <span>{detailText || "Returning to Caller"}</span>
          </div>
        ) : flowType === "loop-iteration" ? (
          <div className="flex items-center gap-1.5 border-cyan-500/40 bg-cyan-500/15 text-cyan-300">
            <RotateCcw className="h-3.5 w-3.5 text-cyan-400 animate-spin" />
            <span>{detailText || "Loop Repetition"}</span>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
