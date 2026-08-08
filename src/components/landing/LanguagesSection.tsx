import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { Code2, Terminal } from "lucide-react";

export function LanguagesSection() {
  return (
    <Section id="languages">
      <SectionHeading
        index="08"
        eyebrow="Supported Runtimes"
        title="Start With the Languages You Know."
        description="Full execution tracing and state visualization for core programming languages."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
        {/* PYTHON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="panel p-6 border-cyan-500/40 bg-surface text-center flex flex-col items-center justify-center space-y-3"
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Code2 className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold tracking-wider text-foreground">PYTHON</h3>
          <p className="text-xs text-muted-foreground">Line-by-line tracing, variable binding, stack & heap introspection</p>
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/30 uppercase">
            Supported in V1
          </span>
        </motion.div>

        {/* C */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="panel p-6 border-cyan-500/40 bg-surface text-center flex flex-col items-center justify-center space-y-3"
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Terminal className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-bold tracking-wider text-foreground">C</h3>
          <p className="text-xs text-muted-foreground">Call stack frames, pointer relationships, and memory layout tracking</p>
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-semibold border border-emerald-500/30 uppercase">
            Supported in V1
          </span>
        </motion.div>
      </div>
    </Section>
  );
}
