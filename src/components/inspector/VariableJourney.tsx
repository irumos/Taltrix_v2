import { motion } from "motion/react";
import { useMemo } from "react";
import { ArrowDown } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";
import { variableJourney } from "@/lib/analytics";

/** Lifecycle of one binding: created → modified → passed → returned → printed. */
export function VariableJourney({ scope, name }: { scope: string; name: string }) {
  const { program, index, seek } = useExecution();
  const events = useMemo(() => variableJourney(program.steps, scope, name), [program, scope, name]);

  if (events.length === 0) {
    return <p className="font-mono text-[11px] text-muted-foreground/60">No recorded activity for {name}.</p>;
  }

  return (
    <ol className="space-y-1.5">
      {events.map((e, i) => (
        <motion.li
          key={`${e.step}-${e.kind}-${i}`}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.045, duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            data-cursor="button"
            onClick={() => seek(e.step)}
            className={`flex w-full items-start gap-2 rounded-lg border px-2.5 py-2 text-left font-mono text-[10px] transition-colors duration-300 ${
              e.step === index
                ? "border-accent/60 bg-accent/10 text-foreground"
                : "border-border/60 bg-background/40 text-muted-foreground hover:border-accent/40"
            }`}
          >
            <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="min-w-0 flex-1">
              <span className="text-foreground">{e.label}</span>
              <span className="ml-1.5 text-muted-foreground/70">step {e.step + 1}</span>
              <span className="mt-0.5 block truncate">{e.detail}</span>
            </span>
          </button>
          {i < events.length - 1 ? (
            <ArrowDown className="mx-auto mt-1 h-3 w-3 text-border" aria-hidden />
          ) : null}
        </motion.li>
      ))}
    </ol>
  );
}