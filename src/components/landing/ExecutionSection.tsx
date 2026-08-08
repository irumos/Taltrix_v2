import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { Activity, Play, Terminal } from "lucide-react";

export function ExecutionSection() {
  return (
    <Section id="watch-every-step">
      <SectionHeading
        index="02"
        eyebrow="Interactive Flow"
        title="Watch Every Step."
        description="Follow your program as it executes, line by line."
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="panel mt-14 overflow-hidden border-cyan-500/30 shadow-2xl shadow-black/40"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-border/70 bg-surface/90 px-4 py-3 font-mono text-[12px]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            <span className="ml-2 text-muted-foreground font-semibold">example.py</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <Activity className="h-3.5 w-3.5 animate-pulse" />
            <span className="uppercase text-[10px] tracking-widest font-bold">Line 2 Executing</span>
          </div>
        </div>

        {/* Content split */}
        <div className="grid gap-px bg-border/60 md:grid-cols-2">
          {/* Left: Code Editor Mock */}
          <div className="bg-surface p-6 font-mono text-sm leading-relaxed">
            <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/40 pb-2 mb-4">
              <span>SOURCE CODE</span>
              <span>PYTHON 3</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4 px-3 py-1.5 rounded-lg text-muted-foreground/80">
                <span className="w-4 text-right text-xs select-none">1</span>
                <span className="text-cyan-200">x = 10</span>
              </div>
              <div className="flex items-center gap-4 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-foreground font-semibold shadow-sm">
                <span className="w-4 text-right text-xs text-cyan-400 select-none">2</span>
                <span className="text-white">y = x + 5</span>
                <span className="ml-auto text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/30 text-cyan-300">
                  Current Line
                </span>
              </div>
              <div className="flex items-center gap-4 px-3 py-1.5 rounded-lg text-muted-foreground/80">
                <span className="w-4 text-right text-xs select-none">3</span>
                <span className="text-cyan-200">print(y)</span>
              </div>
            </div>
          </div>

          {/* Right: Variables Mock */}
          <div className="bg-surface p-6 font-mono text-sm">
            <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/40 pb-2 mb-4">
              <span>VARIABLES</span>
              <span className="text-cyan-400 font-bold">LIVE STATE</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-h/50 border border-border/50">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">x</span>
                  <span className="text-xs text-muted-foreground">(int)</span>
                </div>
                <span className="font-bold text-foreground">10</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/40">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">y</span>
                  <span className="text-xs text-muted-foreground">(int)</span>
                </div>
                <span className="font-bold text-emerald-300">15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Status */}
        <div className="flex items-center justify-between border-t border-border/60 bg-surface/90 px-6 py-3 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 font-bold text-[11px] tracking-wider uppercase border border-cyan-500/30">
              STEP 02 / 03
            </span>
            <span className="text-muted-foreground">Evaluating expression y = 10 + 5</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px] tracking-wider uppercase">
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>EXECUTING</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}