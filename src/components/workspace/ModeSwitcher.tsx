import { motion } from "motion/react";
import { Bug, GraduationCap, Cpu } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";
import { Tooltip } from "@/components/ui-kit";
import { cn } from "@/lib/utils";
import type { ExecutionMode } from "@/types/execution";

export const MODES: { id: ExecutionMode; label: string; icon: typeof Bug; hint: string }[] = [
  { id: "learn", label: "Learn", icon: GraduationCap, hint: "Beginner mode: execution line, explanations, step breakdown & key variables" },
  { id: "debug", label: "Debug", icon: Bug, hint: "Detailed variables, call hierarchy, watches and execution history" },
  { id: "system", label: "System", icon: Cpu, hint: "Advanced internals: memory allocations, objects, stack frames and bus traffic" },
];

/** Switches the visualisation language of the whole workspace. */
export function ModeSwitcher() {
  const { mode, setMode } = useExecution();

  return (
    <div role="tablist" aria-label="Execution mode" className="flex items-center gap-0.5 rounded-lg border border-border/60 bg-surface/50 p-0.5">
      {MODES.map((m) => {
        const active = m.id === mode;
        return (
          <Tooltip key={m.id} content={m.hint}>
            <button
              type="button"
              role="tab"
              aria-selected={active}
              data-cursor="button"
              onClick={() => setMode(m.id)}
              className={cn(
                "relative flex items-center gap-1.5 rounded-md px-2 py-1.5 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-300",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="mode-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-md border border-primary/40 bg-primary/12"
                />
              ) : null}
              <m.icon className="h-3.5 w-3.5" />
              <span className="hidden md:inline">{m.label}</span>
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}