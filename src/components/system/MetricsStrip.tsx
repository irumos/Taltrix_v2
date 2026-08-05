import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import { useExecution } from "@/contexts/ExecutionContext";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const spring = useSpring(value, { stiffness: 140, damping: 24 });
  const text = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);
  useEffect(() => spring.set(value), [spring, value]);
  return <motion.span>{text}</motion.span>;
}

/** Smoothly animated runtime counters for the system view and status bar. */
export function MetricsStrip() {
  const { metrics, step } = useExecution();
  const items: [string, number, string][] = [
    ["stack", metrics.stackBytes, " B"],
    ["heap", metrics.heapBytes, " B"],
    ["objects", metrics.objects, ""],
    ["peak", metrics.peakBytes, " B"],
  ];

  return (
    <div className="grid grid-cols-4 gap-1.5">
      {items.map(([label, value, suffix]) => (
        <div key={label} className="rounded-lg border border-border/50 bg-background/40 px-2 py-1.5">
          <p className="font-mono text-[8px] tracking-[0.16em] text-muted-foreground/60 uppercase">{label}</p>
          <p className="mt-0.5 font-mono text-[11px] text-accent">
            <Counter value={value} suffix={suffix} />
          </p>
        </div>
      ))}
      <p className="col-span-4 font-mono text-[9px] text-muted-foreground/60">
        t+{(step.executionTimeMs ?? 0).toFixed(2)}ms · {step.currentFunction}
      </p>
    </div>
  );
}