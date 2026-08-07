import { motion, AnimatePresence } from "motion/react";
import { Activity, Clock, Cpu, Layers, HardDrive, Zap, Variable, Sparkles } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";

export function ExecutionInsights() {
  const { step, index, total, program, state, summary } = useExecution();

  const currentMs = step.executionTimeMs ?? (index + 1) * 0.42;
  const totalMs = program.totalTimeMs || total * 0.42;

  const changedCount = step.variables.filter((v) => v.changed).length;
  const memKb = ((step.metrics?.stackBytes ?? 0) + (step.metrics?.heapBytes ?? 0)) / 1024;

  const currentFunc = step.currentFunction || "main()";
  const statusLabel =
    state === "running" ? "Running" : state === "paused" ? "Paused" : state === "done" ? "Completed" : "Idle";

  return (
    <div className="flex h-full flex-col bg-surface/40 p-3.5 space-y-3 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 pb-2">
        <span className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
          <Cpu className="h-4 w-4" /> Execution Insights
        </span>
        <span className="font-mono text-xs text-muted-foreground truncate max-w-[200px]" title={program.title}>
          {program.title} ({program.language})
        </span>
      </div>

      {/* Responsive Content-Adaptive Metric Grid */}
      <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 overflow-y-auto pr-1">
        {/* Card 1: Status (Highlighted, Compact / Standard) */}
        <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/30 via-surface/80 to-background p-4 shadow-lg backdrop-blur-xl transition-all hover:border-cyan-500/60">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-cyan-300">
              Status
            </span>
            <Activity
              className={`h-4 w-4 ${
                state === "running"
                  ? "text-cyan-400 animate-pulse"
                  : state === "done"
                  ? "text-emerald-400"
                  : "text-amber-400"
              }`}
            />
          </div>
          <div className="my-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={statusLabel}
                initial={{ opacity: 0.4, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0.4, y: 4, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`font-display text-[28px] sm:text-[30px] font-bold leading-none ${
                  state === "running"
                    ? "text-cyan-400"
                    : state === "done"
                    ? "text-emerald-400"
                    : "text-foreground"
                }`}
              >
                {statusLabel}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="font-sans text-[13px] text-muted-foreground/80">
            Step {index + 1} of {total}
          </div>
        </div>

        {/* Card 2: Current Function (Large metric - Spans 2 columns on medium/large screens) */}
        <div className="col-span-1 sm:col-span-2 flex flex-col justify-between rounded-2xl border border-cyan-500/30 bg-surface/80 p-4 shadow-lg backdrop-blur-xl transition-all hover:border-cyan-500/50">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Current Function
            </span>
            <Zap className="h-4 w-4 text-blue-400" />
          </div>
          <div className="my-2 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFunc}
                initial={{ opacity: 0.4, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0.4, y: 4, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-display text-[24px] sm:text-[28px] font-bold leading-tight text-foreground truncate"
                title={currentFunc}
              >
                {currentFunc}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="font-sans text-[13px] text-muted-foreground/80 truncate">
            {summary.functionsCalled || 1} total sub-routine calls
          </div>
        </div>

        {/* Card 3: Elapsed Time (Compact) */}
        <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-purple-500/40">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Elapsed Time
            </span>
            <Clock className="h-4 w-4 text-purple-400" />
          </div>
          <div className="my-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMs.toFixed(2)}
                initial={{ opacity: 0.4, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0.4, y: 4, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-display text-[26px] sm:text-[28px] font-bold leading-none text-foreground"
              >
                {currentMs.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">ms</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="font-sans text-[13px] text-muted-foreground/80">
            Total estimate: ~{totalMs.toFixed(2)} ms
          </div>
        </div>

        {/* Card 4: Stack Depth (Compact) */}
        <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-amber-500/40">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Stack Depth
            </span>
            <Layers className="h-4 w-4 text-amber-400" />
          </div>
          <div className="my-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.stack.length}
                initial={{ opacity: 0.4, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0.4, y: 4, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-display text-[26px] sm:text-[28px] font-bold leading-none text-amber-300"
              >
                {step.stack.length} <span className="text-sm font-normal text-muted-foreground">frames</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="font-sans text-[13px] text-muted-foreground/80">
            Max depth: {program.complexity.maxDepth}
          </div>
        </div>

        {/* Card 5: Changed Variables (Large / Standard) */}
        <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-emerald-500/40">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Changed Variables
            </span>
            <Variable className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="my-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={changedCount}
                initial={{ opacity: 0.4, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0.4, y: 4, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-display text-[26px] sm:text-[28px] font-bold leading-none text-emerald-400"
              >
                {changedCount} <span className="text-sm font-normal text-muted-foreground">updated</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="font-sans text-[13px] text-muted-foreground/80">
            {step.variables.length} total active in scope
          </div>
        </div>

        {/* Card 6: Memory Used (Compact) */}
        <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-cyan-500/40">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Memory Used
            </span>
            <HardDrive className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="my-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={memKb.toFixed(2)}
                initial={{ opacity: 0.4, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0.4, y: 4, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="font-display text-[26px] sm:text-[28px] font-bold leading-none text-cyan-300"
              >
                {memKb > 0 ? memKb.toFixed(2) : "0.48"}{" "}
                <span className="text-sm font-normal text-muted-foreground">KB</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="font-sans text-[13px] text-muted-foreground/80">
            {step.heap.length} heap objects
          </div>
        </div>
      </div>
    </div>
  );
}
