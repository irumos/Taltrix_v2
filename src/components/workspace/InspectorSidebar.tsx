import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Variable,
  Layers,
  Boxes,
  Activity,
  Cpu,
  Sparkles,
  ChevronDown,
  Check,
} from "lucide-react";
import { VariablesTable } from "@/components/variables/VariablesTable";
import { StackFrames } from "@/components/stack/StackFrames";
import { MemoryGraph } from "@/components/memory/MemoryGraph";
import { CpuCard } from "@/components/system/CpuCard";
import { ExecutionSummary } from "@/components/inspector/ExecutionSummary";
import { ExecutionStateBanner } from "@/components/inspector/ExecutionStateBanner";
import { EmptyState } from "@/components/inspector/EmptyState";
import { ExecutionInsights } from "@/components/workspace/ExecutionInsights";
import { ExecutionStoryPanel } from "@/components/workspace/ExecutionStoryPanel";
import { useExecution } from "@/contexts/ExecutionContext";
import { cn } from "@/lib/utils";
import { blip } from "@/lib/sound";

const OPTIONS = [
  { id: "variables", label: "Variables", icon: Variable, accent: "text-cyan-400" },
  { id: "stack", label: "Function Calls", icon: Layers, accent: "text-purple-400" },
  { id: "memory", label: "Memory View", icon: Boxes, accent: "text-indigo-400" },
  { id: "status", label: "Program Status", icon: Activity, accent: "text-amber-400" },
  { id: "insights", label: "Execution Insights", icon: Cpu, accent: "text-blue-400" },
  { id: "explanation", label: "AI Explanation", icon: Sparkles, accent: "text-emerald-400" },
] as const;

type OptionId = (typeof OPTIONS)[number]["id"];

export function InspectorSidebar() {
  const { step, program, index, select, hover, setHover } = useExecution();
  const [selectedOption, setSelectedOption] = useState<OptionId>("variables");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hoveredObject = hover?.kind === "object" ? hover.id : null;
  const hoveredFrame = hover?.kind === "frame" ? hover.name : null;
  const failure = step.status && step.status !== "running" && step.status !== "done" ? step.status : null;

  const currentOption = OPTIONS.find((o) => o.id === selectedOption) || OPTIONS[0];
  const CurrentIcon = currentOption.icon;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectOption = (id: OptionId) => {
    blip("hover");
    setSelectedOption(id);
    setDropdownOpen(false);
  };

  return (
    <div className="flex h-full flex-col border-l border-border/70 bg-surface/50 font-mono text-[12px]">
      {/* Top Header Bar with Premium Explore Dropdown */}
      <div className="relative z-30 flex items-center justify-between border-b border-border/70 bg-background/60 p-2">
        <div ref={dropdownRef} className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => {
              blip("hover");
              setDropdownOpen((prev) => !prev);
            }}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
            aria-label="Explore workspace inspector views"
            className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface/90 px-3 py-1.5 font-sans font-semibold text-foreground shadow-sm transition-all hover:bg-surface-h hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <CurrentIcon className={cn("h-4 w-4", currentOption.accent)} />
            <span>Explore</span>
            <span className="text-[11px] text-muted-foreground font-normal">({currentOption.label})</span>
            <ChevronDown
              className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform duration-200", dropdownOpen && "rotate-180")}
            />
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -6 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                role="listbox"
                aria-label="Inspector Views"
                className="absolute left-0 top-full mt-2 z-[250] w-64 rounded-2xl border border-border/80 bg-surface/95 p-2 shadow-2xl backdrop-blur-2xl"
              >
                <div className="px-3 py-1.5 border-b border-border/50 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Workspace Inspector
                </div>

                <div className="mt-1 space-y-1">
                  {OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const selected = opt.id === selectedOption;

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        role="option"
                        aria-selected={selected}
                        onClick={() => handleSelectOption(opt.id)}
                        className={cn(
                          "group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all font-sans text-xs",
                          selected
                            ? "bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30 shadow-sm"
                            : "text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={cn("h-4 w-4", selected ? "text-cyan-300" : opt.accent)} />
                          <span>{opt.label}</span>
                        </div>
                        {selected && <Check className="h-4 w-4 text-cyan-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
          Inspector
        </span>
      </div>

      {failure ? (
        <div className="border-b border-border/60 p-3">
          <ExecutionStateBanner status={failure} />
        </div>
      ) : null}

      {/* Main View Area */}
      <div className="min-h-0 flex-1 overflow-auto p-3">
        <AnimatePresence mode="wait">
          {selectedOption === "variables" ? (
            <motion.div
              key="variables"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-2">
                <span className="font-sans text-xs font-semibold text-foreground">Active Variables</span>
                <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-300">
                  {step.variables.length} active
                </span>
              </div>
              {step.variables.length === 0 ? (
                <EmptyState
                  icon={Variable}
                  title="No active variables"
                  message="Run your program to watch variables change in real time."
                />
              ) : (
                <VariablesTable variables={step.variables} />
              )}
            </motion.div>
          ) : selectedOption === "stack" ? (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-2">
                <span className="font-sans text-xs font-semibold text-foreground">Function Calls</span>
                <span className="rounded bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-300">
                  {step.stack.length} calls active
                </span>
              </div>
              {step.stack.length === 0 ? (
                <EmptyState
                  icon={Layers}
                  title="No active function calls"
                  message="Run your program to see how functions are called and returned."
                />
              ) : (
                <StackFrames
                  frames={step.stack}
                  highlighted={hoveredFrame}
                  onHover={(name) => setHover(name ? { kind: "frame", name } : null)}
                  onSelect={(name) => select({ kind: "function", name })}
                />
              )}
            </motion.div>
          ) : selectedOption === "memory" ? (
            <motion.div
              key="memory"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-2">
                <span className="font-sans text-xs font-semibold text-foreground">Memory View</span>
                <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] text-indigo-300">
                  {step.heap.length} objects
                </span>
              </div>
              {step.heap.length === 0 ? (
                <EmptyState
                  icon={Boxes}
                  title="Memory is empty"
                  message="Run your program to see memory addresses and object structures."
                />
              ) : (
                <MemoryGraph
                  objects={step.heap}
                  highlighted={hoveredObject}
                  onHover={(id) => setHover(id ? { kind: "object", id } : null)}
                  onSelect={(id) => select({ kind: "object", id })}
                />
              )}
            </motion.div>
          ) : selectedOption === "status" ? (
            <motion.div
              key="status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-2">
                <span className="font-sans text-xs font-semibold text-foreground">Program Status</span>
                <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-300">
                  Step {index + 1} of {program.steps.length}
                </span>
              </div>
              <CpuCard />
              <ExecutionSummary />
            </motion.div>
          ) : selectedOption === "insights" ? (
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <ExecutionInsights />
            </motion.div>
          ) : selectedOption === "explanation" ? (
            <motion.div
              key="explanation"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              <ExecutionStoryPanel />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
