import { motion } from "motion/react";
import { ArrowRight, HelpCircle, Sparkles, Variable, Zap } from "lucide-react";
import { useExecution } from "@/contexts/ExecutionContext";
import { TaltrixButton } from "@/components/ui-kit";

export function WhatsHappeningPanel() {
  const { step, index, total, setExplainModalOpen } = useExecution();

  // Find changed variables to display formatted changes (e.g. 5 -> 4)
  const changedVars = step.variables.filter((v) => v.changed);

  return (
    <div className="flex h-full min-h-0 flex-col rounded-xl border border-cyan-500/30 bg-surface/60 p-4 shadow-xl backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-foreground">
              What's Happening?
            </h3>
            <p className="font-mono text-[10px] text-muted-foreground">
              Step {index + 1} of {total} · {step.currentFunction || "module"}
            </p>
          </div>
        </div>

        <TaltrixButton
          size="sm"
          variant="secondary"
          onClick={() => setExplainModalOpen(true)}
          className="border-purple-500/40 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
        >
          <HelpCircle className="mr-1.5 h-3.5 w-3.5" />
          <span>Explain this step</span>
        </TaltrixButton>
      </div>

      {/* Content */}
      <div className="mt-4 min-h-0 flex-1 space-y-3.5 overflow-auto pr-1">
        {/* Executing line snippet */}
        <div className="rounded-lg border border-cyan-500/20 bg-background/60 p-3 font-mono text-[12px]">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] uppercase text-cyan-400/80">
            <Zap className="h-3 w-3" />
            <span>Executing Line {step.line}</span>
          </div>
          <code className="text-foreground">{step.executingCode || step.label}</code>
        </div>

        {/* Plain language explanation */}
        <div className="rounded-lg border border-border/50 bg-surface/40 p-3">
          <h4 className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Explanation
          </h4>
          <p className="mt-1 text-[13px] leading-relaxed text-foreground/90">
            {step.note}
          </p>
        </div>

        {/* Variable changes */}
        {changedVars.length > 0 ? (
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3">
            <h4 className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
              <Variable className="h-3 w-3" />
              <span>Variable Changes</span>
            </h4>
            <div className="mt-2 space-y-1.5">
              {changedVars.map((v) => (
                <div key={v.name} className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-foreground">{v.name}</span>
                  <div className="flex items-center gap-1.5 rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
                    <span>{v.previousValue || "uninitialized"}</span>
                    <ArrowRight className="h-3 w-3 text-emerald-400" />
                    <span className="font-bold">{v.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Why? */}
        {step.why ? (
          <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-3">
            <h4 className="font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-300">
              Why?
            </h4>
            <p className="mt-1 text-[12px] text-muted-foreground/90">
              {step.why}
            </p>
          </div>
        ) : null}

        {/* Next step prediction */}
        {step.nextStep ? (
          <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-surface/30 px-3 py-2 text-[11px]">
            <span className="font-mono text-[10px] uppercase text-muted-foreground">Next:</span>
            <span className="text-foreground/80">{step.nextStep}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
