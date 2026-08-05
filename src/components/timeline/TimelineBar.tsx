import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Pause, Play, RotateCcw, SkipBack, SkipForward, Gauge } from "lucide-react";
import { Dropdown, TaltrixButton, Tooltip } from "@/components/ui-kit";
import { useExecution } from "@/contexts/ExecutionContext";

const SPEEDS = [
  { value: "0.25", label: "0.25×" },
  { value: "0.5", label: "0.5×" },
  { value: "1", label: "1×" },
  { value: "2", label: "2×" },
  { value: "5", label: "5×" },
  { value: "0", label: "Instant" },
];

/** Scrubber + transport controls for the placeholder execution timeline. */
export function TimelineBar() {
  const { index, total, state, trace, speed, setSpeed, toggle, restart, next, prev, seek } = useExecution();
  const [preview, setPreview] = useState<number | null>(null);
  const running = state === "running";
  const progress = total > 1 ? (index / (total - 1)) * 100 : 0;

  return (
    <div className="relative flex flex-col gap-1.5 border-t border-border/70 bg-surface/85 px-3 py-1.5 backdrop-blur-md">
      <div className="flex flex-wrap items-center gap-1.5">
        <Tooltip content="Restart">
          <TaltrixButton size="icon" variant="ghost" onClick={restart} aria-label="Restart execution">
            <RotateCcw className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>
        <Tooltip content="Previous step">
          <TaltrixButton size="icon" variant="ghost" onClick={prev} aria-label="Previous step">
            <SkipBack className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>
        <TaltrixButton
          size="sm"
          variant={running ? "outline" : "primary"}
          onClick={toggle}
          aria-label={running ? "Pause execution" : "Play execution"}
        >
          {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span className="hidden sm:inline">{running ? "Pause" : state === "idle" ? "Run" : "Resume"}</span>
        </TaltrixButton>
        <Tooltip content="Next step">
          <TaltrixButton size="icon" variant="ghost" onClick={next} aria-label="Next step">
            <SkipForward className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>

        <span className="ml-1 hidden items-center gap-1.5 sm:flex">
          <Gauge className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
          <Dropdown
            label="Execution speed"
            value={String(speed)}
            options={SPEEDS}
            onChange={(v) => setSpeed(Number(v))}
          />
        </span>

        <span className="ml-auto font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          step {index + 1} / {total} · {trace.steps[index]?.label}
        </span>
      </div>

      <div className="relative h-6">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full rounded-full [background-image:var(--gradient-primary)]"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 220, damping: 30 }}
          />
        </div>
        <motion.span
          aria-hidden
          className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]"
          animate={{ left: `${progress}%` }}
          transition={{ type: "spring", stiffness: 220, damping: 30 }}
        />
        <label className="sr-only" htmlFor="taltrix-scrubber">
          Execution timeline position
        </label>
        <input
          id="taltrix-scrubber"
          type="range"
          min={0}
          max={total - 1}
          value={index}
          onChange={(e) => seek(Number(e.target.value))}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const ratio = (e.clientX - rect.left) / rect.width;
            setPreview(Math.min(total - 1, Math.max(0, Math.round(ratio * (total - 1)))));
          }}
          onMouseLeave={() => setPreview(null)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>

      <AnimatePresence>
        {preview !== null && trace.steps[preview] ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: `calc(${(preview / Math.max(1, total - 1)) * 100}% )` }}
            className="pointer-events-none absolute bottom-24 z-30 w-[220px] -translate-x-1/2 rounded-xl border border-border/70 bg-popover/95 p-2.5 shadow-[var(--shadow-elevated)] backdrop-blur"
          >
            <p className="font-mono text-[10px] text-accent">
              step {preview + 1} · {trace.steps[preview]!.label}
            </p>
            <p className="mt-1 font-mono text-[9px] leading-relaxed text-muted-foreground">
              {trace.steps[preview]!.note}
            </p>
            <p className="mt-1.5 truncate font-mono text-[9px] text-muted-foreground/70">
              stack: {trace.steps[preview]!.stack.map((f) => f.name).join(" › ")}
            </p>
            <p className="truncate font-mono text-[9px] text-muted-foreground/70">
              vars: {trace.steps[preview]!.variables.map((v) => `${v.name}=${v.value}`).join(", ") || "—"}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ol className="hidden items-center justify-between gap-1 md:flex">
        {trace.steps.map((s, i) => (
          <li key={`${s.label}-${i}`} className="min-w-0 flex-1">
            <button
              type="button"
              onClick={() => seek(i)}
              data-cursor="button"
              aria-current={i === index}
              aria-label={`Go to step ${i + 1}: ${s.label}`}
              className="group flex w-full flex-col items-center gap-1"
            >
              <motion.span
                animate={{ scale: i === index ? 1.4 : 1 }}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i <= index ? "bg-accent" : "bg-border group-hover:bg-muted-foreground"
                }`}
              />
              <span
                className={`hidden w-full truncate text-center font-mono text-[9px] xl:block ${
                  i === index ? "text-accent" : "text-muted-foreground/60"
                }`}
              >
                {s.label}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
