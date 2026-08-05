import { motion } from "motion/react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";

/** Post-run analytics dashboard, shown once playback reaches the last step. */
export function ExecutionSummary() {
  const { summary, restart, program } = useExecution();
  const failed = summary.finalStatus !== "done";

  const cards: [string, string][] = [
    ["Execution time", `${summary.totalTimeMs.toFixed(2)} ms`],
    ["Peak memory", `${summary.peakBytes} B`],
    ["Functions called", String(summary.functionsCalled)],
    ["Objects created", String(summary.objectsCreated)],
    ["Lines executed", String(summary.linesExecuted)],
    ["Max stack depth", String(summary.maxDepth)],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border border-border/60 bg-background/50 p-3"
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        {failed ? <Sparkles className="h-3.5 w-3.5 text-destructive" /> : <CheckCircle2 className="h-3.5 w-3.5 text-accent" />}
        run summary
      </div>
      <p className="mt-1 font-mono text-[10px] text-muted-foreground/70">
        {program.fileName} finished with status {summary.finalStatus}.
      </p>

      <dl className="mt-3 grid grid-cols-2 gap-1.5">
        {cards.map(([k, v], i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 26 }}
            className="rounded-lg border border-border/50 px-2.5 py-2"
          >
            <dt className="font-mono text-[8px] tracking-[0.16em] text-muted-foreground/60 uppercase">{k}</dt>
            <dd className="mt-0.5 font-mono text-[12px] text-accent">{v}</dd>
          </motion.div>
        ))}
      </dl>

      <button
        type="button"
        data-cursor="button"
        onClick={restart}
        className="mt-3 w-full rounded-lg border border-border/60 py-1.5 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:border-accent/50 hover:text-foreground"
      >
        replay execution
      </button>
    </motion.div>
  );
}