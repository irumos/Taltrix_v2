import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { EyeOff, HelpCircle, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";

const SNIPPET = [
  "def factorial(n):",
  "    if n <= 1:",
  "        return 1",
  "    return n * factorial(n - 1)",
];

const CONFUSIONS = [
  { icon: HelpCircle, text: "Where does n live on each call?" },
  { icon: EyeOff, text: "What is on the stack right now?" },
  { icon: HelpCircle, text: "When does it actually return?" },
];

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const blur = useTransform(scrollYProgress, [0.15, 0.4, 0.62], ["blur(0px)", "blur(5px)", "blur(0px)"]);
  const tilt = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [6, 0, -6]);
  const clarity = useTransform(scrollYProgress, [0.42, 0.66], [0, 1]);

  return (
    <Section id="problem" className="pt-10">
      <SectionHeading
        index="01"
        eyebrow="The problem"
        title={
          <>
            Code is read as text.
            <br />
            <span className="text-muted-foreground">It runs as motion.</span>
          </>
        }
        description="Students trace programs on paper, guess at the stack, and hope the mental model matches reality. The gap between source and execution is where understanding dies."
      />

      <div ref={ref} className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          style={{ filter: blur, rotateX: tilt }}
          className="panel overflow-hidden [transform-style:preserve-3d] [perspective:1200px]"
          data-cursor="code"
        >
          <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground">factorial.py</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-[2.1] text-foreground/85 sm:text-sm">
            {SNIPPET.map((line, i) => (
              <div key={line} className="flex gap-5">
                <span className="w-4 shrink-0 text-right text-muted-foreground/60">{i + 1}</span>
                <span>{line}</span>
              </div>
            ))}
          </pre>
          <motion.div
            style={{ opacity: clarity }}
            className="border-t border-border/70 px-6 py-4 font-mono text-[12px] text-success"
          >
            › taltrix attached — 9 steps recorded, 5 frames, 3 heap objects
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {CONFUSIONS.map((c, i) => (
            <motion.div
              key={c.text}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="panel flex items-start gap-3 p-5"
            >
              <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden />
              <p className="text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
          <motion.div
            style={{ opacity: clarity }}
            className="panel flex items-start gap-3 border-primary/40 p-5"
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <p className="text-sm">
              Taltrix answers all three at once — by replaying the run instead of describing it.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}