import { AnimatePresence, motion } from "motion/react";
import { memo } from "react";
import { cn } from "@/lib/utils";
import type { TraceVariable } from "@/types/execution";

const spring = { type: "spring" as const, stiffness: 320, damping: 30 };

const COLUMNS = ["Variable", "Type", "Value", "Changed"];

/** Animated variable table — modified bindings fly in and stay highlighted. */
export const VariablesTable = memo(function VariablesTable({
  variables,
  className,
}: {
  variables: TraceVariable[];
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border/60 bg-background/40", className)}>
      <div className="grid grid-cols-[1.2fr_0.8fr_1.4fr_0.6fr] gap-2 border-b border-border/60 px-3 py-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground/70 uppercase">
        {COLUMNS.map((c) => (
          <span key={c} className={c === "Changed" ? "text-right" : undefined}>
            {c}
          </span>
        ))}
      </div>
      <div className="divide-y divide-border/40">
        <AnimatePresence initial={false} mode="popLayout">
          {variables.map((v) => (
            <motion.div
              key={`${v.scope}:${v.name}`}
              layout
              initial={{ opacity: 0, x: 26, filter: "blur(4px)" }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                backgroundColor: v.changed
                  ? "rgba(34, 211, 238, 0.12)"
                  : "transparent",
              }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={spring}
              className="grid grid-cols-[1.2fr_0.8fr_1.4fr_0.6fr] items-center gap-2 px-3 py-2 font-mono text-[11px]"
            >
              <span className="truncate">
                <span className="font-semibold text-foreground">{v.name}</span>
                <span className="ml-1 text-[9px] text-muted-foreground/70">({v.scope})</span>
              </span>
              <span className="truncate text-purple-300/80">{v.type}</span>
              <span className="truncate flex items-center gap-1 font-semibold">
                {v.changed && v.previousValue ? (
                  <>
                    <span className="text-muted-foreground line-through text-[10px]">{v.previousValue}</span>
                    <span className="text-cyan-400">→</span>
                    <span className="text-cyan-300">{v.value}</span>
                  </>
                ) : (
                  <span className={v.changed ? "text-cyan-300" : "text-foreground/90"}>
                    {v.value}
                  </span>
                )}
              </span>
              <span className="text-right">
                {v.changed ? (
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center justify-center rounded bg-cyan-500/20 px-1.5 py-0.5 text-[9px] text-cyan-300 font-bold"
                  >
                    UPDATED
                  </motion.span>
                ) : (
                  <span className="text-muted-foreground/40">—</span>
                )}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {variables.length === 0 ? (
        <p className="px-3 py-4 font-mono text-[11px] text-muted-foreground/60">No variables currently active in scope.</p>
      ) : null}
    </div>
  );
});
