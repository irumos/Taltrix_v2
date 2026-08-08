import { motion } from "motion/react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { GraduationCap, UserCheck, CheckCircle2 } from "lucide-react";

const STUDENT_BENEFITS = [
  "Understand program flow line-by-line",
  "See variable changes in real-time",
  "Follow function calls and stack frames",
  "Learn from step-by-step execution",
  "Debug logic with total visual clarity",
];

const PROFESSOR_BENEFITS = [
  "Demonstrate program execution visually in lectures",
  "Explain complex algorithms step-by-step",
  "Make abstract runtime behavior visible to classes",
  "Help students build correct mental models of code",
];

export function ClassroomSection() {
  return (
    <Section id="classroom">
      <SectionHeading
        index="07"
        eyebrow="Academic Impact"
        title="Built for Students. Ready for Classrooms."
        description="Whether you're learning your first programming language or teaching computer science concepts, TALTRIX provides clarity."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {/* FOR STUDENTS */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="panel p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 border-b border-border/60 pb-4 mb-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">FOR STUDENTS</h3>
                <p className="text-xs text-muted-foreground">Self-paced learning & debugging</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm">
              {STUDENT_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* FOR PROFESSORS */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="panel p-6 sm:p-8 flex flex-col justify-between border-purple-500/30"
        >
          <div>
            <div className="flex items-center gap-3 border-b border-border/60 pb-4 mb-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">FOR PROFESSORS</h3>
                <p className="text-xs text-muted-foreground">Classroom demonstration & instruction</p>
              </div>
            </div>

            <ul className="space-y-3.5 text-sm">
              {PROFESSOR_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
