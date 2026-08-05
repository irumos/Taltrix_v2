import { motion } from "motion/react";
import {
  Activity,
  Boxes,
  BrainCircuit,
  Gauge,
  Layers,
  Languages,
  Timer,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";

const FEATURES = [
  { icon: Activity, title: "Execution Visualization", desc: "Line-by-line focus synced with every panel on screen." },
  { icon: Boxes, title: "Memory Tracking", desc: "Stack frames and heap objects with live reference edges." },
  { icon: Layers, title: "Call Stack", desc: "Watch frames push and pop with real depth semantics." },
  { icon: Timer, title: "Timeline", desc: "Scrub, rewind and replay any recorded moment of the run." },
  { icon: Gauge, title: "Complexity Insights", desc: "Time and space profiles derived from the recorded trace." },
  { icon: BrainCircuit, title: "AI Ready", desc: "A structured trace format built for natural-language explanation." },
  { icon: Languages, title: "Language Independent", desc: "The visual layer never assumes a runtime — swap the runner." },
];

export function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeading
        index="06"
        eyebrow="Features"
        title="Built for the moment it finally clicks."
        description="Every surface is designed around one question: what is the program doing right now?"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: (i % 3) * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            data-cursor="button"
            className="panel group relative overflow-hidden p-6"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <f.icon className="h-5 w-5 text-accent" aria-hidden />
            <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}