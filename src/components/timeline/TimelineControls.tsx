import { Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
import { motion } from "motion/react";
import { TaltrixButton } from "@/components/ui-kit/TaltrixButton";
import type { RunnerState } from "@/hooks/use-trace-runner";
import { TRACE } from "@/data/execution";

export function TimelineControls({
  index,
  total,
  state,
  play,
  pause,
  reset,
  step,
  seek,
  compact = false,
}: {
  index: number;
  total: number;
  state: RunnerState;
  play: () => void;
  pause: () => void;
  reset: () => void;
  step: (d: number) => void;
  seek: (i: number) => void;
  compact?: boolean;
}) {
  const running = state === "running";
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <TaltrixButton size="sm" variant="ghost" onClick={reset} aria-label="Restart execution">
          <RotateCcw className="h-4 w-4" />
        </TaltrixButton>
        <TaltrixButton size="sm" variant="ghost" onClick={() => step(-1)} aria-label="Previous step">
          <SkipBack className="h-4 w-4" />
        </TaltrixButton>
        <TaltrixButton
          size="sm"
          variant={running ? "outline" : "primary"}
          onClick={running ? pause : play}
          aria-label={running ? "Pause execution" : "Play execution"}
        >
          {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {compact ? null : <span>{running ? "Pause" : state === "idle" ? "Run" : "Resume"}</span>}
        </TaltrixButton>
        <TaltrixButton size="sm" variant="ghost" onClick={() => step(1)} aria-label="Next step">
          <SkipForward className="h-4 w-4" />
        </TaltrixButton>
        <span className="ml-auto font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          step {index + 1} / {total}
        </span>
      </div>

      <label className="sr-only" htmlFor="taltrix-timeline">
        Execution timeline position
      </label>
      <input
        id="taltrix-timeline"
        type="range"
        min={0}
        max={total - 1}
        value={index}
        onChange={(e) => seek(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[var(--color-primary)]"
      />

      <ol className="flex items-center justify-between gap-1">
        {TRACE.map((t, i) => (
          <li key={t.label} className="flex-1">
            <button
              type="button"
              onClick={() => seek(i)}
              data-cursor="button"
              aria-label={`Go to step ${i + 1}: ${t.label}`}
              aria-current={i === index}
              className="group flex w-full flex-col items-center gap-1.5"
            >
              <motion.span
                animate={{ scale: i === index ? 1.35 : 1 }}
                className={`h-1.5 w-1.5 rounded-full ${
                  i <= index ? "bg-accent" : "bg-border group-hover:bg-muted-foreground"
                }`}
              />
              <span
                className={`hidden truncate text-center font-mono text-[9px] tracking-wide lg:block ${
                  i === index ? "text-accent" : "text-muted-foreground/60"
                }`}
              >
                {t.label}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}