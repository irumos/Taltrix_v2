import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Variable,
  Layers,
  Boxes,
  Activity,
  Sparkles,
} from "lucide-react";
import { VariablesTable } from "@/components/variables/VariablesTable";
import { StackFrames } from "@/components/stack/StackFrames";
import { MemoryGraph } from "@/components/memory/MemoryGraph";
import { CpuCard } from "@/components/system/CpuCard";
import { ExecutionSummary } from "@/components/inspector/ExecutionSummary";
import { ExecutionStateBanner } from "@/components/inspector/ExecutionStateBanner";
import { EmptyState } from "@/components/inspector/EmptyState";
import { useExecution } from "@/contexts/ExecutionContext";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "variables", label: "Variables", icon: Variable },
  { id: "stack", label: "Function Calls", icon: Layers },
  { id: "memory", label: "Memory View", icon: Boxes },
  { id: "insights", label: "Program Status", icon: Activity },
  { id: "explanation", label: "Explanation", icon: Sparkles },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function InspectorSidebar() {
  const { step, program, index, select, hover, setHover } = useExecution();
  const [activeTab, setActiveTab] = useState<TabId>("variables");

  const hoveredObject = hover?.kind === "object" ? hover.id : null;
  const hoveredFrame = hover?.kind === "frame" ? hover.name : null;
  const failure = step.status && step.status !== "running" && step.status !== "done" ? step.status : null;

  return (
    <div className="flex h-full flex-col border-l border-border/70 bg-surface/50 font-mono text-[12px]">
      {/* Top Tab Switcher */}
      <div className="flex items-center border-b border-border/70 bg-background/60 p-1.5 overflow-x-auto">
        {TABS.map((t) => {
          const active = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              data-cursor="button"
              onClick={() => setActiveTab(t.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-left font-mono text-[11px] transition-all whitespace-nowrap",
                active
                  ? "bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30 shadow-sm"
                  : "text-muted-foreground hover:bg-surface/60 hover:text-foreground"
              )}
            >
              <t.icon className={cn("h-3.5 w-3.5", active ? "text-cyan-400" : "text-muted-foreground")} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {failure ? (
        <div className="border-b border-border/60 p-3">
          <ExecutionStateBanner status={failure} />
        </div>
      ) : null}

      {/* Main Single Tabbed View Area */}
      <div className="min-h-0 flex-1 overflow-auto p-3">
        <AnimatePresence mode="wait">
          {activeTab === "variables" ? (
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
          ) : activeTab === "stack" ? (
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
          ) : activeTab === "memory" ? (
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
          ) : activeTab === "insights" ? (
            <motion.div
              key="insights"
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
          ) : activeTab === "explanation" ? (
            <motion.div
              key="explanation"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-2">
                <span className="font-sans text-xs font-semibold text-foreground font-mono">Step Explanation</span>
                <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-300">
                  Line {step.line}
                </span>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 space-y-3 font-sans">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 font-mono">What Happened?</div>
                  <div className="mt-1 text-xs leading-relaxed text-foreground">
                    {step.deepExplanation || `Line ${step.line} executed successfully.`}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 font-mono">What Changed?</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {step.variables.length > 0
                      ? `${step.variables.length} active variables are currently tracked in memory.`
                      : "No variables changed on this step."}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 font-mono">What Happens Next?</div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {index + 1 < program.steps.length
                      ? `Execution will move forward to line ${program.steps[index + 1]?.line}.`
                      : "Program execution completed!"}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
