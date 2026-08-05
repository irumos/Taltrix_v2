import { motion } from "motion/react";
import { useMemo } from "react";
import { useExecution } from "@/contexts/ExecutionContext";
import { functionProfile } from "@/lib/analytics";

/** Everything the trace knows about one function, plus a jump-to-call action. */
export function FunctionJourney({ name }: { name: string }) {
  const { program, seek } = useExecution();
  const profile = useMemo(() => functionProfile(program.steps, name), [program, name]);

  const rows: [string, string][] = [
    ["Called from", profile.calledFrom.join(", ") || "entry point"],
    ["Calls", profile.calls.join(", ") || "—"],
    ["Execution time", `${profile.executionTimeMs.toFixed(2)} ms`],
    ["Variables created", profile.variables.join(", ") || "—"],
    ["Objects created", profile.objects.join(", ") || "—"],
    ["Returns", profile.returns ?? "—"],
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-foreground">{name}()</span>
        <button
          type="button"
          data-cursor="button"
          onClick={() => seek(Math.max(0, profile.firstStep))}
          className="rounded-lg border border-border/60 px-2 py-1 font-mono text-[9px] text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
        >
          jump to call
        </button>
      </div>
      <dl className="space-y-1">
        {rows.map(([k, v], i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start justify-between gap-3 rounded-lg border border-border/50 bg-background/40 px-2.5 py-1.5 font-mono text-[10px]"
          >
            <dt className="shrink-0 text-muted-foreground/70">{k}</dt>
            <dd className="min-w-0 truncate text-right text-accent">{v}</dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}