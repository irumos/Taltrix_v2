import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { CodeEditor } from "@/components/editor/CodeEditor";
import { CallStackPanel, ConsolePanel, HeapPanel, VariablesPanel } from "@/components/panels/TracePanels";
import { TimelineControls } from "@/components/timeline/TimelineControls";
import { useTraceRunner } from "@/hooks/use-trace-runner";

export function ExecutionSection() {
  const runner = useTraceRunner();

  return (
    <Section id="demo">
      <SectionHeading
        index="02"
        eyebrow="Execution visualization"
        title="Press run. Watch the program think."
        description="A recorded trace of the same factorial program. Line focus, variable mutations, stack growth, heap allocations and console output move together as one choreography."
      />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="panel mt-14 overflow-hidden"
      >
        <div className="grid gap-px bg-border/60 lg:grid-cols-[1.25fr_1fr]">
          <div className="bg-surface">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              <span>factorial.py · python 3.12</span>
              <span className="text-accent">{runner.current.label}</span>
            </div>
            <div className="h-[300px] sm:h-[360px]">
              <CodeEditor highlightLine={runner.current.line} />
            </div>
            <div className="border-t border-border/60 p-4">
              <TimelineControls {...runner} />
            </div>
          </div>

          <div className="grid gap-3 bg-surface p-4 content-start">
            <VariablesPanel step={runner.current} />
            <CallStackPanel step={runner.current} />
            <ConsolePanel step={runner.current} index={runner.index} />
          </div>
        </div>
        <div className="border-t border-border/60 bg-surface p-4">
          <HeapPanel step={runner.current} />
          <p className="mt-3 font-mono text-[12px] text-muted-foreground">› {runner.current.note}</p>
        </div>
      </motion.div>
    </Section>
  );
}