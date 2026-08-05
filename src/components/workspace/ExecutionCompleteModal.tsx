import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle2, RotateCcw, Play, Sparkles, Clock, Layers, Variable, X } from "lucide-react";
import { Modal, TaltrixButton } from "@/components/ui-kit";
import { useExecution } from "@/contexts/ExecutionContext";

export function ExecutionCompleteModal() {
  const { state, index, total, program, summary, replay, restart } = useExecution();
  const [dismissed, setDismissed] = useState(false);

  // Reset dismissal whenever index moves away from the end (e.g. restart / scrub / replay)
  useEffect(() => {
    if (index < total - 1 && state !== "done") {
      setDismissed(false);
    }
  }, [index, total, state]);

  const isFinished = state === "done" || index === total - 1;
  const isOpen = isFinished && !dismissed;

  if (!isOpen) return null;

  const handleClose = () => {
    setDismissed(true);
  };

  return (
    <Modal
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
      title="EXECUTION COMPLETE"
      description={`Finished visualizing ${program.title}`}
    >
      <div className="space-y-4 font-mono text-[12px]">
        {/* Banner */}
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-300">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
            <CheckCircle2 className="h-6 w-6 text-emerald-400" />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">
              Visualization Succeeded
            </h4>
            <p className="font-mono text-[11px] text-emerald-400/90">
              All {total} execution steps completed cleanly.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5 font-mono text-[11px]">
          <div className="rounded-lg border border-border/60 bg-surface/40 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase">
              <Clock className="h-3 w-3 text-purple-400" /> Execution Time
            </div>
            <div className="mt-1 font-bold text-foreground">{program.totalTimeMs || (total * 0.42).toFixed(2)} ms</div>
          </div>

          <div className="rounded-lg border border-border/60 bg-surface/40 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase">
              <Sparkles className="h-3 w-3 text-cyan-400" /> Steps Executed
            </div>
            <div className="mt-1 font-bold text-foreground">{total} / {total}</div>
          </div>

          <div className="rounded-lg border border-border/60 bg-surface/40 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase">
              <Layers className="h-3 w-3 text-amber-400" /> Max Stack Depth
            </div>
            <div className="mt-1 font-bold text-foreground">{program.complexity.maxDepth} frame(s)</div>
          </div>

          <div className="rounded-lg border border-border/60 bg-surface/40 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase">
              <Variable className="h-3 w-3 text-emerald-400" /> Functions Called
            </div>
            <div className="mt-1 font-bold text-foreground">{summary.functionsCalled || 1}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-2 border-t border-border/60 pt-3">
          <TaltrixButton size="sm" variant="ghost" onClick={handleClose}>
            <span>Close</span>
          </TaltrixButton>

          <TaltrixButton size="sm" variant="outline" onClick={restart}>
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
            <span>Restart</span>
          </TaltrixButton>

          <TaltrixButton size="sm" variant="primary" onClick={replay}>
            <Play className="mr-1.5 h-3.5 w-3.5" />
            <span>Replay Visualization</span>
          </TaltrixButton>
        </div>
      </div>
    </Modal>
  );
}
