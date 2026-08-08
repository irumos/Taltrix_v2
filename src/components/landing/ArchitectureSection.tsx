import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { ArrowRight, Terminal, Eye, Sparkles, CheckCircle2 } from "lucide-react";

export function ArchitectureSection() {
  return (
    <Section id="comparison">
      <SectionHeading
        index="06"
        eyebrow="The Distinction"
        title="Not Just Another Code Runner."
        description="Traditional environments print the result and leave you to guess the flow. TALTRIX makes every state transition explicit."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 items-stretch">
        {/* TRADITIONAL RUNNER */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="panel p-6 sm:p-8 flex flex-col justify-between border-border/70 bg-surface/50 opacity-80 hover:opacity-100 transition-opacity"
        >
          <div>
            <div className="flex items-center gap-2 border-b border-border/60 pb-4 mb-6">
              <Terminal className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                TRADITIONAL CODE RUNNER
              </h3>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-background/60 border border-border/40 font-mono text-sm mb-6 justify-center">
              <span className="text-muted-foreground">Run</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground/60" />
              <span className="text-foreground">Result</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-h/40 border border-border/40 font-mono text-xs text-muted-foreground space-y-2">
              <div className="text-muted-foreground font-semibold">Output Window:</div>
              <div className="text-foreground/80 bg-background/80 p-2.5 rounded font-mono">
                $ python script.py
                <br />
                15
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border/60 font-display text-lg font-semibold text-muted-foreground text-center">
            "Here's the output."
          </div>
        </motion.div>

        {/* TALTRIX VISUALIZER */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="panel p-6 sm:p-8 flex flex-col justify-between border-cyan-500/40 bg-surface shadow-2xl shadow-cyan-500/5 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
          <div>
            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                  TALTRIX PLATFORM
                </h3>
              </div>
              <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-400 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5" />
                COMPLETE FLOW
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 font-mono text-xs mb-6 justify-center text-cyan-300 font-semibold">
              <span>Code</span>
              <ArrowRight className="h-3 w-3 text-cyan-400" />
              <span>Execution</span>
              <ArrowRight className="h-3 w-3 text-cyan-400" />
              <span>State</span>
              <ArrowRight className="h-3 w-3 text-cyan-400" />
              <span className="text-white font-bold">Understanding</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-h/60 border border-border/60 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-cyan-300 font-semibold">
                <span className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /> Interactive State Choreography</span>
                <span className="text-[10px] text-emerald-400">Step 2 of 3</span>
              </div>
              <div className="text-foreground/90 bg-background/90 p-2.5 rounded border border-cyan-500/20 leading-relaxed">
                Line 2: <code className="text-cyan-300">y = x + 5</code> evaluated with <code className="text-emerald-300">x=10</code> → <code className="text-cyan-300">y=15</code> assigned in stack frame.
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-cyan-500/30 font-display text-xl font-bold text-cyan-300 text-center">
            "Here's what happened."
          </div>
        </motion.div>
      </div>
    </Section>
  );
}