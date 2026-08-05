import { AnimatePresence, motion } from "motion/react";
import { memo } from "react";
import { cn } from "@/lib/utils";
import type { StackFrame } from "@/types/execution";

const spring = { type: "spring" as const, stiffness: 340, damping: 30 };

/** Animated call stack — frames push in from the bottom and pop out on unwind. */
export const StackFrames = memo(function StackFrames({
  frames,
  className,
  onSelect,
  onHover,
  highlighted,
}: {
  frames: StackFrame[];
  className?: string;
  onSelect?: (name: string) => void;
  onHover?: (name: string | null) => void;
  highlighted?: string | null;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <ul className="flex flex-col-reverse gap-1.5">
        <AnimatePresence initial={false} mode="popLayout">
          {frames.map((f, i) => {
            const active = i === frames.length - 1;
            const localsStr = f.locals ? Object.entries(f.locals).map(([k, v]) => `${k}=${v}`).join(", ") : "";
            const signature = `${f.name}(${localsStr})`;

            return (
              <motion.li
                key={`${f.name}-${i}`}
                layout
                onClick={() => onSelect?.(f.name)}
                onMouseEnter={() => onHover?.(f.name)}
                onMouseLeave={() => onHover?.(null)}
                data-cursor={onSelect ? "button" : undefined}
                initial={{ opacity: 0, y: 18, scaleY: 0.65 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: 12, scaleY: 0.65 }}
                transition={spring}
                style={{ marginLeft: i * 6 }}
                className={cn(
                  "flex items-center justify-between rounded-lg border px-3 py-2 font-mono text-[11px] transition-colors duration-300",
                  active
                    ? "border-cyan-500/70 bg-cyan-500/15 text-foreground shadow-[0_0_20px_-8px_rgba(34,211,238,0.5)] font-semibold"
                    : "border-border/60 bg-background/40 text-muted-foreground/80",
                  highlighted === f.name && "border-purple-500/70 text-foreground bg-purple-500/10",
                  onSelect && "cursor-pointer",
                )}
              >
                <span className="truncate flex items-center gap-1.5">
                  <span className="text-muted-foreground/50 text-[10px]">#{i + 1}</span>
                  <span className={active ? "text-cyan-300" : "text-foreground"}>{signature}</span>
                  <span className="ml-1 text-[9px] text-muted-foreground/60">:line {f.line}</span>
                </span>
                {active ? (
                  <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.16em] text-cyan-300 uppercase">
                    ACTIVE
                  </span>
                ) : (
                  <span className="text-[10px] text-muted-foreground/40">↓</span>
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
      {frames.length === 0 ? (
        <p className="px-3 py-4 font-mono text-[11px] text-muted-foreground/60">Execution stack empty.</p>
      ) : null}
    </div>
  );
});
