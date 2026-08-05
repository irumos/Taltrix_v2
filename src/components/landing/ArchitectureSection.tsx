import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Cpu, Activity, LayoutDashboard, Lightbulb } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";

const NODES = [
  { id: "editor", icon: Code2, title: "Editor", desc: "Source is captured with cursor and language metadata." },
  { id: "runner", icon: Cpu, title: "Runner", desc: "A sandboxed runner steps the program (placeholder in this build)." },
  { id: "trace", icon: Activity, title: "Trace", desc: "Each step emits line, frames, bindings and heap deltas." },
  { id: "visualizer", icon: LayoutDashboard, title: "Visualizer", desc: "The trace is projected into synchronized panels." },
  { id: "insights", icon: Lightbulb, title: "Insights", desc: "Complexity, hot paths and explanations sit on top." },
];

export function ArchitectureSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section id="architecture">
      <SectionHeading
        index="05"
        eyebrow="Architecture"
        title="One pipeline, five honest stages."
        description="Language-independent by design: swap the runner, keep every visual layer. Hover a stage to trace the signal."
        align="center"
      />

      <div className="mt-16 flex flex-col items-center gap-0">
        {NODES.map((n, i) => (
          <div key={n.id} className="flex w-full max-w-2xl flex-col items-center">
            <motion.button
              type="button"
              data-cursor="button"
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(n.id)}
              onBlur={() => setActive(null)}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`panel flex w-full items-start gap-4 p-5 text-left transition-all duration-300 ${
                active === n.id ? "border-primary/60 shadow-[var(--shadow-elevated)]" : ""
              }`}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors ${
                  active === n.id
                    ? "border-primary/60 bg-primary/20 text-primary-soft"
                    : "border-border/70 bg-background/50 text-muted-foreground"
                }`}
              >
                <n.icon className="h-4.5 w-4.5" aria-hidden />
              </span>
              <span>
                <span className="flex items-baseline gap-3">
                  <span className="font-display text-lg font-semibold">{n.title}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    stage {i + 1}
                  </span>
                </span>
                <span className="mt-1.5 block text-sm text-muted-foreground">{n.desc}</span>
              </span>
            </motion.button>

            {i < NODES.length - 1 && (
              <svg width="2" height="52" viewBox="0 0 2 52" aria-hidden className="my-1">
                <motion.line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="52"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                  strokeOpacity="0.45"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}