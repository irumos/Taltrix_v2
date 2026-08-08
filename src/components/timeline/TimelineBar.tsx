import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  RotateCcw,
  Gauge,
  Activity,
} from "lucide-react";
import { Dropdown, TaltrixButton, Tooltip } from "@/components/ui-kit";
import { useExecution } from "@/contexts/ExecutionContext";
import { cn } from "@/lib/utils";

const SPEEDS = [
  { value: "0.25", label: "0.25×" },
  { value: "0.5", label: "0.5×" },
  { value: "1", label: "1×" },
  { value: "1.5", label: "1.5×" },
  { value: "2", label: "2×" },
  { value: "0", label: "Instant" },
];

export function TimelineBar() {
  const {
    index,
    total,
    state,
    visualizeState,
    trace,
    speed,
    setSpeed,
    toggle,
    restart,
    next,
    prev,
    seek,
  } = useExecution();

  const running = state === "running";

  // Determine state badge label & indicator color
  let stateLabel = "IDLE";
  let stateDotClass = "bg-zinc-500";
  let stateTextClass = "text-muted-foreground";

  if (visualizeState === "visualizing" || running) {
    stateLabel = "RUNNING";
    stateDotClass = "bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]";
    stateTextClass = "text-cyan-300 font-bold";
  } else if (visualizeState === "paused" || state === "paused") {
    stateLabel = "PAUSED";
    stateDotClass = "bg-amber-400";
    stateTextClass = "text-amber-300";
  } else if (visualizeState === "completed" || state === "done") {
    stateLabel = "COMPLETED";
    stateDotClass = "bg-emerald-400";
    stateTextClass = "text-emerald-300";
  } else if (visualizeState === "preparing") {
    stateLabel = "READY";
    stateDotClass = "bg-blue-400";
    stateTextClass = "text-blue-300";
  }

  const currentStep = trace.steps[index];

  return (
    <div
      aria-label="Code Execution Control Bar"
      className="relative flex flex-col gap-2 border-t border-border/70 bg-surface/90 px-3 sm:px-4 py-2 backdrop-blur-md select-none"
    >
      {/* TOP CONTROL ROW */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Left: Execution Controls & State Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Execution State Badge */}
          <div className="hidden xs:flex items-center gap-1.5 rounded-md border border-border/60 bg-background/50 px-2 py-1 font-mono text-[10px] uppercase">
            <span className={cn("h-2 w-2 rounded-full", stateDotClass)} />
            <span className={stateTextClass}>{stateLabel}</span>
          </div>

          {/* Reset Control */}
          <Tooltip content="Reset execution">
            <TaltrixButton
              size="sm"
              variant="ghost"
              onClick={restart}
              aria-label="Reset execution"
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden md:inline text-[11px] font-mono ml-1">Reset</span>
            </TaltrixButton>
          </Tooltip>

          {/* Step Back Control */}
          <Tooltip content="Previous execution step">
            <TaltrixButton
              size="sm"
              variant="ghost"
              onClick={prev}
              aria-label="Previous execution step"
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden md:inline text-[11px] font-mono ml-0.5">Previous Step</span>
            </TaltrixButton>
          </Tooltip>

          {/* Primary Run / Continue Action */}
          <TaltrixButton
            size="sm"
            variant={running ? "secondary" : "primary"}
            onClick={toggle}
            aria-label={running ? "Pause execution" : "Run / Continue execution"}
            className="h-8 px-3.5 font-mono text-[11px] font-bold shadow-md shadow-cyan-500/10"
          >
            {running ? <Pause className="h-3.5 w-3.5 mr-1" /> : <Play className="h-3.5 w-3.5 mr-1" />}
            <span>{running ? "Pause" : state === "idle" ? "Run" : "Continue"}</span>
          </TaltrixButton>

          {/* Step Forward Control */}
          <Tooltip content="Execute next step">
            <TaltrixButton
              size="sm"
              variant="ghost"
              onClick={next}
              aria-label="Execute next step"
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              <span className="hidden md:inline text-[11px] font-mono mr-0.5">Next Step</span>
              <ChevronRight className="h-4 w-4" />
            </TaltrixButton>
          </Tooltip>

          {/* Execution Speed Dropdown */}
          <div className="hidden sm:flex items-center gap-1.5 border-l border-border/60 pl-2">
            <Gauge className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            <Dropdown
              label="Execution Speed"
              value={String(speed)}
              options={SPEEDS}
              onChange={(v) => setSpeed(Number(v))}
            />
          </div>
        </div>

        {/* Right: Step Counter & Function Target */}
        <div className="flex items-center gap-2 font-mono text-[11px] ml-auto">
          <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-bold text-cyan-300 shrink-0">
            STEP {index + 1} / {total}
          </span>
          {currentStep ? (
            <span className="hidden lg:inline text-muted-foreground truncate max-w-[220px]">
              {currentStep.label}
            </span>
          ) : null}
        </div>
      </div>

      {/* BOTTOM ROW: EXECUTION TRACE NODES */}
      <div className="relative pt-0.5">
        <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-1">
          {trace.steps.map((s, i) => {
            const isCurrent = i === index;
            const isCompleted = i < index;
            return (
              <Tooltip key={`${s.label}-${i}`} content={`Inspect Step ${i + 1}: ${s.label}`}>
                <button
                  type="button"
                  onClick={() => seek(i)}
                  data-cursor="button"
                  aria-current={isCurrent}
                  aria-label={`Inspect execution step ${i + 1}: ${s.label}`}
                  className="group relative flex flex-1 min-w-[28px] flex-col items-center gap-1 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                >
                  {/* Connector Line */}
                  {i < total - 1 && (
                    <div
                      className={cn(
                        "absolute top-[9px] left-[50%] w-full h-[2px] -z-10 transition-colors",
                        i < index ? "bg-cyan-500/50" : "bg-border/60"
                      )}
                    />
                  )}

                  {/* Execution Node Dot */}
                  <motion.span
                    animate={{ scale: isCurrent ? 1.3 : 1 }}
                    className={cn(
                      "h-3 w-3 rounded-full border transition-all duration-200",
                      isCurrent
                        ? "border-cyan-400 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
                        : isCompleted
                          ? "border-cyan-500/60 bg-cyan-500/30 group-hover:bg-cyan-400"
                          : "border-border/80 bg-surface/80 group-hover:border-muted-foreground"
                    )}
                  />

                  {/* Step Label */}
                  <span
                    className={cn(
                      "hidden xl:block w-full truncate text-center font-mono text-[9px] transition-colors",
                      isCurrent
                        ? "text-cyan-300 font-bold"
                        : isCompleted
                          ? "text-muted-foreground"
                          : "text-muted-foreground/50"
                    )}
                  >
                    {s.label.split(" ")[0]}
                  </span>
                </button>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
}
