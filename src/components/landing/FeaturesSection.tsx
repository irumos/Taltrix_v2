import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { GraduationCap, Puzzle, Zap, UserCheck } from "lucide-react";

const STYLES = [
  {
    icon: GraduationCap,
    emoji: "🎓",
    title: "BEGINNER",
    subtitle: "Beginner Mode",
    desc: "Simple explanations for new programmers.",
    accent: "border-cyan-500/30 text-cyan-300",
  },
  {
    icon: Puzzle,
    emoji: "🧩",
    title: "INTERMEDIATE",
    subtitle: "Intermediate Mode",
    desc: "Balanced explanations with technical detail.",
    accent: "border-purple-500/30 text-purple-300",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "ADVANCED",
    subtitle: "Advanced Mode",
    desc: "Detailed execution and runtime insights.",
    accent: "border-amber-500/30 text-amber-300",
  },
  {
    icon: UserCheck,
    emoji: "👨‍🏫",
    title: "PROFESSOR",
    subtitle: "Professor Mode",
    desc: "Teaching-oriented explanations for classroom use.",
    accent: "border-emerald-500/30 text-emerald-300",
  },
];

export function FeaturesSection() {
  return (
    <Section id="learning-styles">
      <SectionHeading
        index="05"
        eyebrow="Adaptive Insights"
        title="Learn It Your Way."
        description="One execution. Different ways to understand it."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STYLES.map((style, i) => (
          <motion.article
            key={style.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            data-cursor="button"
            className="panel group relative overflow-hidden p-6 flex flex-col justify-between"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <span className="text-2xl">{style.emoji}</span>
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  {style.title}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-foreground group-hover:text-cyan-300 transition-colors">
                {style.subtitle}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {style.desc}
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/40 font-mono text-[10px] text-muted-foreground group-hover:text-foreground transition-colors flex items-center justify-between">
              <span>Explanation Depth</span>
              <span className={style.accent}>Active Mode</span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}