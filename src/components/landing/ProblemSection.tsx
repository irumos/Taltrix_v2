import { motion } from "motion/react";
import { ArrowRight, Code2, Play, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";

const CODE_SNIPPET = [
  { num: 1, code: "x = 10" },
  { num: 2, code: "y = x + 5" },
  { num: 3, code: "print(y)" },
];

export function ProblemSection() {
  return (
    <Section id="problem" className="pt-12">
      <SectionHeading
        index="01"
        eyebrow="The Gap in Learning"
        title="Code Runs. Understanding Doesn't."
        description="Running a program gives you the result. Understanding how it reached that result is a different story."
      />

      {/* Visual 3-Stage Progression */}
      <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
        {/* STAGE 1: WRITE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="panel flex flex-col justify-between p-6 relative group"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-cyan-400" />
                <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">1. WRITE</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">example.py</span>
            </div>
            <pre className="font-mono text-sm leading-relaxed text-foreground/90 bg-surface-h/40 p-3.5 rounded-xl border border-border/40">
              {CODE_SNIPPET.map((line) => (
                <div key={line.num} className="flex gap-4">
                  <span className="text-muted-foreground/50 w-3 text-right select-none">{line.num}</span>
                  <span className="text-cyan-200">{line.code}</span>
                </div>
              ))}
            </pre>
          </div>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            Write your code in Python or C.
          </p>
        </motion.div>

        {/* STAGE 2: RUN */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="panel flex flex-col justify-between p-6 relative group border-cyan-500/30"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Play className="h-4 w-4 text-amber-400" />
                <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">2. RUN</span>
              </div>
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-surface-h/40 rounded-xl border border-border/40 min-h-[104px]">
              <span className="font-mono text-sm text-amber-300 font-medium animate-pulse">
                Executing...
              </span>
              <span className="font-mono text-[11px] text-muted-foreground mt-1">
                Tracing line-by-line state
              </span>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            Traditional runners skip to the output.
          </p>
        </motion.div>

        {/* STAGE 3: UNDERSTAND */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="panel flex flex-col justify-between p-6 relative group border-cyan-500/50 shadow-lg shadow-cyan-500/5"
        >
          <div>
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">3. UNDERSTAND</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400">STATE VISIBLE</span>
            </div>
            <div className="space-y-2 bg-surface-h/40 p-3.5 rounded-xl border border-border/40 font-mono text-sm">
              <div className="flex items-center justify-between text-emerald-300">
                <span>x</span>
                <span className="flex items-center gap-1.5"><ArrowRight className="h-3 w-3" /> 10</span>
              </div>
              <div className="flex items-center justify-between text-cyan-300">
                <span>y</span>
                <span className="flex items-center gap-1.5"><ArrowRight className="h-3 w-3" /> 15</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
            Watch exact state transitions as they occur.
          </p>
        </motion.div>
      </div>

      {/* Bottom Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-xl"
      >
        <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          "TALTRIX makes the invisible visible."
        </p>
      </motion.div>
    </Section>
  );
}