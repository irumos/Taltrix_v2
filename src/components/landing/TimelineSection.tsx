import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { ChevronLeft, ChevronRight, Sparkles, BookOpen } from "lucide-react";

export function TimelineSection() {
  return (
    <Section id="story">
      <SectionHeading
        index="03"
        eyebrow="Execution Story"
        title="Your Code Has a Story."
        description="Don't just see the next line. Understand why it happened."
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="panel mt-14 p-6 sm:p-8 max-w-3xl mx-auto border-cyan-500/30 shadow-2xl backdrop-blur-2xl"
      >
        {/* Step & Function Header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
              STEP 04
            </span>
            <span className="font-mono text-sm font-semibold text-foreground">
              calculate_total()
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
            Execution Narrative
          </span>
        </div>

        {/* Story Content */}
        <div className="mt-6 space-y-6">
          {/* What happened? */}
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
              <Sparkles className="h-4 w-4" />
              What happened?
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              A new function frame was created. <code className="font-mono text-cyan-300 bg-surface px-1.5 py-0.5 rounded">price</code> was passed into the function. The current execution moved into <code className="font-mono text-cyan-300 bg-surface px-1.5 py-0.5 rounded">calculate_total()</code>.
            </p>
          </div>

          {/* What's next? */}
          <div className="rounded-xl border border-border/60 bg-surface/60 p-4 sm:p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              What's next?
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The function calculates the total value and returns the result to the caller.
            </p>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 font-mono text-xs">
          <button
            type="button"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg border border-border/60 bg-surface/40"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          <span className="text-muted-foreground font-semibold">
            Step 04 / 08
          </span>

          <button
            type="button"
            className="flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition-colors px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </Section>
  );
}