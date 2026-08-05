import { AnimatePresence, motion } from "motion/react";
import { useExecution } from "@/contexts/ExecutionContext";
import { cn } from "@/lib/utils";

/**
 * RAM blocks. Every live binding owns a cell; updates flash, freed bindings
 * fade out, and hovering a cell cross-highlights the rest of the workspace.
 */
export function RamPanel() {
  const { step, hover, setHover, select } = useExecution();
  const changed = new Set(step.changed ?? []);

  if (step.variables.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border/60 px-3 py-6 text-center font-mono text-[10px] text-muted-foreground/60">
        No memory cells allocated yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1.5 xl:grid-cols-3">
      <AnimatePresence initial={false} mode="popLayout">
        {step.variables.map((v, i) => {
          const id = `${v.scope}:${v.name}`;
          const isChanged = changed.has(id) || v.changed;
          const isHovered = hover?.kind === "variable" && hover.scope === v.scope && hover.name === v.name;
          return (
            <motion.button
              key={id}
              type="button"
              layout
              data-cursor="button"
              onMouseEnter={() => setHover({ kind: "variable", scope: v.scope, name: v.name })}
              onMouseLeave={() => setHover(null)}
              onClick={() => select({ kind: "variable", scope: v.scope, name: v.name })}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                backgroundColor: isChanged
                  ? "color-mix(in oklab, var(--color-accent) 14%, transparent)"
                  : "color-mix(in oklab, var(--surface) 55%, transparent)",
              }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              transition={{ type: "spring", stiffness: 320, damping: 28, delay: i * 0.012 }}
              className={cn(
                "rounded-lg border p-2 text-left font-mono text-[10px] transition-colors duration-300",
                isChanged ? "border-accent/60" : "border-border/60",
                isHovered && "border-primary/70",
              )}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="truncate text-foreground">{v.name}</span>
                <span className="shrink-0 text-[8px] text-muted-foreground/60">
                  0x{(i * 8 + 16).toString(16).padStart(2, "0")}
                </span>
              </div>
              <div className={cn("mt-1 truncate", isChanged ? "text-accent" : "text-muted-foreground")}>
                {v.value}
              </div>
              <div className="mt-0.5 truncate text-[8px] text-muted-foreground/60">
                {v.type} · {v.scope}
              </div>
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}