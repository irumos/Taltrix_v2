import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { Layers, Variable, Boxes, Activity, ArrowRight } from "lucide-react";

export function MemorySection() {
  return (
    <Section id="runtime-state">
      <SectionHeading
        index="04"
        eyebrow="Runtime Visualization"
        title="See What Your Program Sees."
        description="Variables, functions, memory and execution state — visible as your program runs."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* PANEL 1: VARIABLES */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="panel p-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 border-b border-border/60 pb-3 mb-4 font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <Variable className="h-4 w-4" />
              <span>VARIABLES</span>
            </div>
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-h/40 border border-border/40">
                <span className="text-muted-foreground">count</span>
                <span className="font-bold text-foreground">5</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-h/40 border border-border/40">
                <span className="text-muted-foreground">total</span>
                <span className="font-bold text-foreground">120</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-h/40 border border-border/40">
                <span className="text-muted-foreground">name</span>
                <span className="font-bold text-cyan-300">"Alex"</span>
              </div>
            </div>
          </div>
          <span className="mt-4 font-mono text-[10px] text-muted-foreground">Live variable state</span>
        </motion.div>

        {/* PANEL 2: FUNCTION CALLS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="panel p-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 border-b border-border/60 pb-3 mb-4 font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <Layers className="h-4 w-4" />
              <span>FUNCTION CALLS</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="p-2 rounded-lg bg-surface-h/40 border border-border/40 flex items-center justify-between text-muted-foreground">
                <span>main()</span>
                <ArrowRight className="h-3 w-3 text-cyan-400" />
              </div>
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between font-semibold text-cyan-300">
                <span>calculate()</span>
                <ArrowRight className="h-3 w-3 text-cyan-400" />
              </div>
              <div className="p-2 rounded-lg bg-surface-h/40 border border-border/40 flex items-center justify-between text-muted-foreground">
                <span>validate()</span>
              </div>
            </div>
          </div>
          <span className="mt-4 font-mono text-[10px] text-muted-foreground">Call stack depth</span>
        </motion.div>

        {/* PANEL 3: MEMORY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="panel p-5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 border-b border-border/60 pb-3 mb-4 font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <Boxes className="h-4 w-4" />
              <span>MEMORY</span>
            </div>
            <div className="p-3 rounded-lg bg-surface-h/40 border border-border/40 font-mono text-xs space-y-1 text-muted-foreground">
              <div className="text-foreground font-semibold">Stack</div>
              <div className="pl-2">└── calculate()</div>
              <div className="pl-6">├── count</div>
              <div className="pl-6">└── total</div>
            </div>
          </div>
          <span className="mt-4 font-mono text-[10px] text-muted-foreground">Stack allocation layout</span>
        </motion.div>

        {/* PANEL 4: EXECUTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="panel p-5 flex flex-col justify-between border-cyan-500/30"
        >
          <div>
            <div className="flex items-center gap-2 border-b border-border/60 pb-3 mb-4 font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider">
              <Activity className="h-4 w-4" />
              <span>EXECUTION</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-h/40 border border-border/40">
                <span className="text-muted-foreground">Step</span>
                <span className="font-bold text-cyan-300">06</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                <span>Status</span>
                <span className="font-bold">Running</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-surface-h/40 border border-border/40">
                <span className="text-muted-foreground">Function</span>
                <span className="font-semibold text-foreground">calculate()</span>
              </div>
            </div>
          </div>
          <span className="mt-4 font-mono text-[10px] text-muted-foreground">Execution status</span>
        </motion.div>
      </div>
    </Section>
  );
}