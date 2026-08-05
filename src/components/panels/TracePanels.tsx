import { AnimatePresence, motion } from "motion/react";
import { Layers, Variable, TerminalSquare, Boxes } from "lucide-react";
import { Panel, PanelHeader } from "@/components/ui-kit/Panel";
import type { TraceStep } from "@/data/execution";

const spring = { type: "spring" as const, stiffness: 320, damping: 30 };

export function VariablesPanel({ step }: { step: TraceStep }) {
  return (
    <Panel className="overflow-hidden">
      <PanelHeader>
        <span className="flex items-center gap-2">
          <Variable className="h-3.5 w-3.5" aria-hidden /> Variables
        </span>
        <span>{step.variables.length}</span>
      </PanelHeader>
      <ul className="space-y-1.5 p-3">
        <AnimatePresence initial={false} mode="popLayout">
          {step.variables.map((v) => (
            <motion.li
              key={`${v.scope}:${v.name}`}
              layout
              initial={{ opacity: 0, x: 24, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -18 }}
              transition={spring}
              className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-2 font-mono text-[12px] ${
                v.changed ? "border-accent/50 bg-accent/10" : "border-border/60 bg-background/40"
              }`}
            >
              <span className="truncate">
                <span className="text-foreground">{v.name}</span>
                <span className="ml-2 text-[10px] text-muted-foreground">{v.scope}</span>
              </span>
              <span className={v.changed ? "text-accent" : "text-muted-foreground"}>{v.value}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Panel>
  );
}

export function CallStackPanel({ step }: { step: TraceStep }) {
  return (
    <Panel className="overflow-hidden">
      <PanelHeader>
        <span className="flex items-center gap-2">
          <Layers className="h-3.5 w-3.5" aria-hidden /> Call stack
        </span>
        <span>depth {step.stack.length}</span>
      </PanelHeader>
      <ul className="flex flex-col-reverse gap-1.5 p-3">
        <AnimatePresence initial={false} mode="popLayout">
          {step.stack.map((f, i) => (
            <motion.li
              key={`${f.name}-${i}`}
              layout
              initial={{ opacity: 0, y: 16, scaleY: 0.7 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: 10, scaleY: 0.7 }}
              transition={spring}
              style={{ marginLeft: i * 8 }}
              className={`rounded-lg border px-3 py-2 font-mono text-[12px] ${
                i === step.stack.length - 1
                  ? "border-primary/60 bg-primary/15 text-foreground"
                  : "border-border/60 bg-background/40 text-muted-foreground"
              }`}
            >
              <span>{f.name}</span>
              <span className="ml-2 text-[10px] opacity-70">:{f.line}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Panel>
  );
}

export function HeapPanel({ step }: { step: TraceStep }) {
  return (
    <Panel className="overflow-hidden">
      <PanelHeader>
        <span className="flex items-center gap-2">
          <Boxes className="h-3.5 w-3.5" aria-hidden /> Heap
        </span>
        <span>{step.heap.length} objects</span>
      </PanelHeader>
      <div className="flex gap-2 overflow-x-auto p-3">
        <AnimatePresence initial={false} mode="popLayout">
          {step.heap.map((o) => (
            <motion.div
              key={o.id}
              layout
              initial={{ opacity: 0, scale: 0.86, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.86 }}
              transition={spring}
              className="min-w-[124px] rounded-lg border border-border/60 bg-background/50 p-2.5 font-mono text-[11px]"
            >
              <div className="text-[10px] text-muted-foreground">{o.id}</div>
              <div className="mt-1 text-accent">{o.type}</div>
              <div className="mt-0.5 truncate text-foreground/85">{o.value}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Panel>
  );
}

export function ConsolePanel({ step, index }: { step: TraceStep; index: number }) {
  return (
    <Panel className="overflow-hidden">
      <PanelHeader>
        <span className="flex items-center gap-2">
          <TerminalSquare className="h-3.5 w-3.5" aria-hidden /> Console
        </span>
        <span>stdout</span>
      </PanelHeader>
      <div className="min-h-[92px] space-y-1 p-3 font-mono text-[12px]">
        <div className="text-muted-foreground">$ taltrix run factorial.py --trace</div>
        <div className="text-muted-foreground/70">
          step {index + 1} · {step.label}
        </div>
        <AnimatePresence>
          {step.stdout.map((line) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.stream === "stderr" ? "text-destructive" : "text-success"}
            >
              {line.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Panel>
  );
}