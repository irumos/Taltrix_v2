import { motion } from "motion/react";
import { Boxes, Cpu, FileCode2, Layers, TerminalSquare } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";
import { cn } from "@/lib/utils";

const STAGES = [
  { id: "editor", label: "Editor", icon: FileCode2 },
  { id: "cpu", label: "CPU", icon: Cpu },
  { id: "stack", label: "Stack", icon: Layers },
  { id: "heap", label: "Heap", icon: Boxes },
  { id: "console", label: "Console", icon: TerminalSquare },
] as const;

/** The instruction pipeline: every step travels editor → cpu → stack → heap → console. */
export function ExecutionFlow() {
  const { index, step, state } = useExecution();
  const emitted = step.stdout.length > 0;

  return (
    <div className="rounded-xl border border-border/60 bg-background/40 p-2.5">
      <div className="flex items-center justify-between gap-1">
        {STAGES.map((stage, i) => (
          <div key={stage.id} className="flex min-w-0 flex-1 items-center gap-1">
            <motion.div
              key={`${stage.id}-${index}`}
              initial={{ opacity: 0.45, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.11, duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "flex min-w-0 flex-col items-center gap-1 rounded-lg border px-1.5 py-1.5",
                stage.id === "console" && !emitted
                  ? "border-border/40 text-muted-foreground/50"
                  : "border-primary/40 text-foreground",
              )}
            >
              <stage.icon className="h-3.5 w-3.5" />
              <span className="truncate font-mono text-[8px] tracking-[0.12em] uppercase">{stage.label}</span>
            </motion.div>
            {i < STAGES.length - 1 ? (
              <div className="relative h-px flex-1 bg-border/60">
                <motion.span
                  key={`packet-${stage.id}-${index}`}
                  aria-hidden
                  initial={{ left: "0%", opacity: 0 }}
                  animate={{ left: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: state === "running" ? 0.5 : 0.8,
                    delay: i * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}