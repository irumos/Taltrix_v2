import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui-kit/Section";
import { TRACE } from "@/data/execution";

const SNAPSHOT = TRACE[4]!;

export function MemorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <Section id="memory">
      <SectionHeading
        index="03"
        eyebrow="Memory visualization"
        title="Stack grows down. Heap grows out."
        description="Every binding is a card that flies into the region that owns it, with live references drawn between frames and heap objects."
      />

      <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,340px)_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            <ArrowDown className="h-3.5 w-3.5" aria-hidden /> Stack
          </div>
          <div className="flex flex-col gap-2">
            {SNAPSHOT.stack.map((f, i) => (
              <motion.div
                key={f.name + i}
                initial={{ opacity: 0, y: -22, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 260, damping: 26 }}
                className="panel flex items-center justify-between px-4 py-3 font-mono text-[12px]"
                style={{ marginLeft: i * 10 }}
              >
                <span>{f.name}</span>
                <span className="text-muted-foreground">
                  {Object.entries(f.locals ?? {})
                    .map(([k, v]) => `${k}=${v}`)
                    .join(", ") || "—"}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            <ArrowRight className="h-3.5 w-3.5" aria-hidden /> Heap
          </div>
          <div className="relative">
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 10 40 C 120 10, 220 90, 340 44"
                fill="none"
                stroke="var(--color-accent)"
                strokeOpacity="0.35"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.5 }}
              />
            </svg>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {SNAPSHOT.heap.map((o, i) => (
                <motion.article
                  key={o.id}
                  initial={{ opacity: 0, x: 40, rotate: 2 }}
                  animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 240, damping: 24 }}
                  whileHover={{ y: -4 }}
                  className="panel p-4"
                >
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {o.id}
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold">{o.label}</div>
                  <div className="mt-1 font-mono text-[12px] text-accent">{o.type}</div>
                  <div className="mt-3 border-t border-border/60 pt-3 font-mono text-[12px] text-muted-foreground">
                    {o.value}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}