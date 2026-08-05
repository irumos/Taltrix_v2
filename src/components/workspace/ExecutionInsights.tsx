import { Activity, Clock, Cpu, Layers, HardDrive, Zap, CheckCircle2, Variable } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";
import { Tooltip } from "@/components/ui-kit";

export function ExecutionInsights() {
  const { step, index, total, program, state, summary } = useExecution();

  const currentMs = step.executionTimeMs ?? (index + 1) * 0.42;
  const totalMs = program.totalTimeMs || total * 0.42;

  const changedCount = step.variables.filter((v) => v.changed).length;
  const memKb = ((step.metrics?.stackBytes ?? 0) + (step.metrics?.heapBytes ?? 0)) / 1024;

  const metrics = [
    {
      label: "Status",
      value: state === "running" ? "Running" : state === "paused" ? "Paused" : state === "done" ? "Completed" : "Idle",
      sub: `${index + 1} of ${total} steps`,
      icon: Activity,
      color: state === "running" ? "text-cyan-400" : state === "done" ? "text-emerald-400" : "text-amber-400",
    },
    {
      label: "Elapsed Time",
      value: `${currentMs.toFixed(2)} ms`,
      sub: `Total ~${totalMs.toFixed(2)} ms`,
      icon: Clock,
      color: "text-purple-400",
    },
    {
      label: "Current Function",
      value: step.currentFunction || "main()",
      sub: `${summary.functionsCalled || 1} functions called`,
      icon: Zap,
      color: "text-blue-400",
    },
    {
      label: "Stack Depth",
      value: `${step.stack.length} frame${step.stack.length === 1 ? "" : "s"}`,
      sub: `Max depth: ${program.complexity.maxDepth}`,
      icon: Layers,
      color: "text-amber-400",
    },
    {
      label: "Changed Vars",
      value: `${changedCount} updated`,
      sub: `${step.variables.length} total in scope`,
      icon: Variable,
      color: "text-emerald-400",
    },
    {
      label: "Memory Used",
      value: `${memKb > 0 ? memKb.toFixed(2) : "0.48"} KB`,
      sub: `${step.heap.length} heap object${step.heap.length === 1 ? "" : "s"}`,
      icon: HardDrive,
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="flex h-full flex-col bg-surface/50 p-2.5">
      <div className="mb-2 flex items-center justify-between border-b border-border/50 pb-1.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
        <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
          <Cpu className="h-3.5 w-3.5" /> Execution Insights
        </span>
        <span>{program.title} ({program.language})</span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2 overflow-auto sm:grid-cols-3 lg:grid-cols-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex flex-col justify-between rounded-lg border border-border/50 bg-background/50 p-2.5 transition-all hover:border-cyan-500/30"
          >
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="font-mono text-[9px] uppercase tracking-wider">{m.label}</span>
              <m.icon className={`h-3.5 w-3.5 ${m.color}`} />
            </div>
            <div className="mt-1 font-mono text-sm font-bold text-foreground">
              {m.value}
            </div>
            <div className="mt-0.5 font-mono text-[9px] text-muted-foreground/70 truncate">
              {m.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
