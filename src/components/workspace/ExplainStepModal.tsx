import { Bot, Sparkles, CheckCircle2, Lightbulb, Code2 } from "lucide-react";
import { Modal } from "@/components/ui-kit";
import { useExecution } from "@/contexts/ExecutionContext";

export function ExplainStepModal() {
  const { explainModalOpen, setExplainModalOpen, step, index, total, program } = useExecution();

  return (
    <Modal
      open={explainModalOpen}
      onOpenChange={setExplainModalOpen}
      title="TALTRIX AI Step Explanation"
      description={`Step ${index + 1} of ${total} in ${program.title}`}
    >
      <div className="space-y-4 font-mono text-[12px]">
        <div className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 p-3 text-purple-200">
          <Bot className="h-5 w-5 shrink-0 text-purple-400" />
          <p className="text-[11px] leading-relaxed">
            AI Assistant Insight (Mock Stream Ready): Analyzing step execution context and memory stack state.
          </p>
        </div>

        {/* Code Context */}
        <div className="rounded-lg border border-border/60 bg-surface/50 p-3">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase text-muted-foreground">
            <span className="flex items-center gap-1">
              <Code2 className="h-3 w-3 text-cyan-400" /> Line {step.line}
            </span>
            <span>Function: {step.currentFunction}</span>
          </div>
          <pre className="rounded bg-background/80 p-2 font-mono text-[12px] text-cyan-300">
            {step.executingCode || step.label}
          </pre>
        </div>

        {/* Deep conceptual explanation */}
        <div className="space-y-2 rounded-lg border border-border/60 bg-surface/30 p-3">
          <h4 className="flex items-center gap-1.5 font-sans text-xs font-semibold text-foreground">
            <Lightbulb className="h-3.5 w-3.5 text-amber-400" />
            Conceptual Breakdown
          </h4>
          <p className="font-sans text-[12px] leading-relaxed text-muted-foreground">
            {step.deepExplanation || step.note}
          </p>
        </div>

        {/* Key takeaways */}
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 font-sans text-xs">
          <h4 className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" /> Key Takeaway
          </h4>
          <p className="mt-1 text-muted-foreground">
            Understanding recursion base cases prevents stack overflow errors and guarantees algorithm termination.
          </p>
        </div>
      </div>
    </Modal>
  );
}
