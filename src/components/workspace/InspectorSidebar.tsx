import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Variable,
  Layers,
  Boxes,
  Activity,
  Sparkles,
  ChevronDown,
  Check,
  BarChart3,
  Brain,
} from "lucide-react";
import { VariablesTable } from "@/components/variables/VariablesTable";
import { StackFrames } from "@/components/stack/StackFrames";
import { MemoryGraph } from "@/components/memory/MemoryGraph";
import { CpuCard } from "@/components/system/CpuCard";
import { ExecutionSummary } from "@/components/inspector/ExecutionSummary";
import { ExecutionStateBanner } from "@/components/inspector/ExecutionStateBanner";
import { EmptyState } from "@/components/inspector/EmptyState";
import { WhatsHappeningPanel } from "./WhatsHappeningPanel";
import { ExecutionInsights } from "./ExecutionInsights";
import { useExecution } from "@/contexts/ExecutionContext";
import { blip } from "@/lib/sound";

const INSPECTOR_OPTIONS = [
  { id: "explanation", label: "Execution Story", category: "AI Learning Engine", icon: Brain },
  { id: "variables", label: "Variables", category: "Memory & Scope", icon: Variable },
  { id: "stack", label: "Function Calls", category: "Call Stack", icon: Layers },
  { id: "memory", label: "Memory View", category: "Heap Graph", icon: Boxes },
  { id: "insights", label: "Program Status", category: "CPU & Transport", icon: Activity },
  { id: "insights_detail", label: "Execution Insights", category: "Metrics", icon: BarChart3 },
] as const;

type InspectorId = (typeof INSPECTOR_OPTIONS)[number]["id"];

const STORAGE_KEY = "taltrix_selected_inspector";

export function InspectorSidebar() {
  const { step, program, index, hover, setHover, select } = useExecution();

  // Remember last selected inspector from localStorage
  const [selectedInspector, setSelectedInspector] = useState<InspectorId>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && INSPECTOR_OPTIONS.some((o) => o.id === stored)) {
        return stored as InspectorId;
      }
    }
    return "variables";
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Persist selected inspector
  const handleSelectInspector = (id: InspectorId) => {
    blip("hover");
    setSelectedInspector(id);
    setDropdownOpen(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, id);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentOption =
    INSPECTOR_OPTIONS.find((o) => o.id === selectedInspector) || INSPECTOR_OPTIONS[0];

  const hoveredObject = hover?.kind === "object" ? hover.id : null;
  const hoveredFrame = hover?.kind === "frame" ? hover.name : null;
  const failure = step.status && step.status !== "running" && step.status !== "done" ? step.status : null;

  return (
    <div className="flex h-full flex-col border-l border-border/70 bg-surface/50 font-mono text-[12px]">
      {/* Inspector Dropdown Selector Header */}
      <div ref={containerRef} className="relative border-b border-border/70 bg-background/70 p-2.5">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Inspector View
          </span>
          <button
            type="button"
            onClick={() => {
              blip("hover");
              setDropdownOpen((prev) => !prev);
            }}
            aria-expanded={dropdownOpen}
            aria-label="Select Inspector"
            className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface/90 px-3 py-1.5 font-sans text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-surface-h hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
          >
            <currentOption.icon className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>{currentOption.label}</span>
            <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Dropdown Menu Overlay */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-2 right-2 top-full mt-1.5 z-[150] overflow-hidden rounded-2xl border border-border/80 bg-surface/95 p-1.5 shadow-2xl backdrop-blur-2xl"
            >
              <div className="space-y-0.5">
                {INSPECTOR_OPTIONS.map((option) => {
                  const Icon = option.icon;
                  const selected = option.id === selectedInspector;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectInspector(option.id)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all ${
                        selected
                          ? "bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30"
                          : "text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`h-4 w-4 ${selected ? "text-cyan-400" : "text-muted-foreground"}`} />
                        <div>
                          <div className="font-sans text-xs font-semibold">{option.label}</div>
                          <div className="font-mono text-[10px] text-muted-foreground">{option.category}</div>
                        </div>
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

      {failure ? (
        <div className="border-b border-border/60 p-3">
          <ExecutionStateBanner status={failure} />
        </div>
      ) : null}

      {/* Main Selected Inspector View */}
      <div className="min-h-0 flex-1 overflow-auto p-3">
        <AnimatePresence mode="wait">
          {selectedInspector === "variables" && (
            <motion.div
              key="variables"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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
          )}

          {selectedInspector === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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
          )}

          {selectedInspector === "memory" && (
            <motion.div
              key="memory"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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
          )}

          {selectedInspector === "insights" && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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
          )}

          {selectedInspector === "insights_detail" && (
            <motion.div
              key="insights_detail"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-3"
            >
              <ExecutionInsights />
            </motion.div>
          )}

          {selectedInspector === "explanation" && (
            <motion.div
              key="explanation"
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="space-y-3"
            >
              <WhatsHappeningPanel />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
