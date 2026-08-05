import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { TimelineControls } from "@/components/timeline/TimelineControls";
import { useTraceRunner } from "@/hooks/use-trace-runner";
import { COMPLEXITY } from "@/data/execution";

export function TimelineSection() {
  const runner = useTraceRunner(900);

  return (
    <Section id="timeline">
      <SectionHeading
        index="04"
        eyebrow="Execution timeline"
        title="Scrub the program like film."
        description="Every recorded step is addressable. Move forward, rewind, or jump straight to the moment where the value changed."
      />

      <div className="panel mt-14 p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
          <div>
            <motion.div
              key={runner.index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-6"
            >
              <div className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
                line {runner.current.line}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold">{runner.current.label}</h3>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">{runner.current.note}</p>
            </motion.div>
            <TimelineControls {...runner} />
          </div>

          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {[
              ["Time complexity", COMPLEXITY.time],
              ["Space complexity", COMPLEXITY.space],
              ["Max stack depth", String(COMPLEXITY.maxDepth)],
              ["Recorded steps", String(COMPLEXITY.steps)],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-border/60 bg-background/40 p-4">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {k}
                </dt>
                <dd className="mt-1.5 font-display text-xl font-semibold text-accent">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}