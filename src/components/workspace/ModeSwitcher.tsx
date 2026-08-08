import { KeyboardEvent } from "react";
import { motion } from "motion/react";
import { Bug, GraduationCap, Cpu } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";
import { Tooltip } from "@/components/ui-kit";
import { cn } from "@/lib/utils";
import type { ExecutionMode } from "@/types/execution";

export const MODES: { id: ExecutionMode; label: string; icon: typeof Bug; hint: string }[] = [
  {
    id: "learn",
    label: "LEARN",
    icon: GraduationCap,
    hint: "Learn mode: step explanations, execution narrative, and key variables",
  },
  {
    id: "debug",
    label: "DEBUG",
    icon: Bug,
    hint: "Debug mode: full variable scope inspection, call stack, and step history",
  },
  {
    id: "system",
    label: "SYSTEM",
    icon: Cpu,
    hint: "System mode: memory layout, stack frames, heap allocations, and runtime metrics",
  },
];

export function ModeSwitcher() {
  const { mode, setMode } = useExecution();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = MODES.findIndex((m) => m.id === mode);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextMode = MODES[(currentIndex + 1) % MODES.length]!;
      setMode(nextMode.id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevMode = MODES[(currentIndex - 1 + MODES.length) % MODES.length]!;
      setMode(prevMode.id);
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Workspace execution modes"
      onKeyDown={handleKeyDown}
      className="inline-flex h-8 items-center rounded-lg border border-border/70 bg-surface/60 p-0.5 backdrop-blur-md"
    >
      {MODES.map((m) => {
        const active = m.id === mode;
        const Icon = m.icon;
        return (
          <Tooltip key={m.id} content={m.hint}>
            <button
              type="button"
              role="tab"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              data-cursor="button"
              onClick={() => setMode(m.id)}
              className={cn(
                "relative flex h-7 items-center justify-center gap-1.5 rounded-md px-2.5 sm:px-3 font-mono text-[11px] font-semibold tracking-wider uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 select-none",
                active ? "text-cyan-300 font-bold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active && (
                <motion.span
                  layoutId="mode-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute inset-0 -z-10 rounded-md border border-cyan-500/40 bg-cyan-500/15 shadow-sm shadow-cyan-500/10"
                />
              )}
              <Icon className={cn("h-3.5 w-3.5 shrink-0", active ? "text-cyan-400" : "text-muted-foreground")} />
              <span className="inline">{m.label}</span>
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}