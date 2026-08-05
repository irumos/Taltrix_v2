import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Boxes, CircuitBoard } from "lucide-react";
import { LivingCodeCanvas } from "@/components/animations/LivingCodeCanvas";
import { TaltrixButton } from "@/components/ui-kit/TaltrixButton";

const TITLE = "TALTRIX";
const SUB = "Understand How Code Really Works.";

function useTypewriter(text: string, speed = 55, delay = 0, enabled = true) {
  const [out, setOut] = useState(enabled ? "" : text);
  useEffect(() => {
    if (!enabled) {
      setOut(text);
      return;
    }
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      i += 1;
      setOut(text.slice(0, i));
      if (i < text.length) t = setTimeout(step, speed);
    };
    t = setTimeout(step, delay);
    return () => clearTimeout(t);
  }, [text, speed, delay, enabled]);
  return out;
}

export function Hero({ reduced }: { reduced: boolean }) {
  const title = useTypewriter(TITLE, 105, 320, !reduced);
  const sub = useTypewriter(SUB, 42, 1400, !reduced);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.16], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.13], [1, 0]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      aria-label="TALTRIX introduction"
    >
      <LivingCodeCanvas reduced={reduced} />
      <div className="pointer-events-none absolute inset-0 [background-image:var(--gradient-halo)]" />
      <div className="pointer-events-none absolute inset-0 grid-veil opacity-[0.14]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-background" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pt-28 pb-20 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-cyan-300 uppercase backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Interactive Code Execution Visualizer
        </motion.div>

        <h1 className="mt-7 font-display text-[clamp(3.4rem,13vw,9.5rem)] leading-[0.86] font-bold tracking-[-0.045em]">
          <span className="text-gradient">{title || "\u00A0"}</span>
          {!reduced && title.length < TITLE.length && (
            <span className="ml-1 inline-block h-[0.78em] w-[0.06em] translate-y-[0.04em] bg-cyan-400 align-baseline" />
          )}
        </h1>

        <p className="mt-6 font-mono text-[clamp(1rem,2.4vw,1.5rem)] text-foreground/90">
          <span className="mr-2 text-cyan-400">›</span>
          {sub}
          {!reduced && sub.length < SUB.length && sub.length > 0 && (
            <span className="ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.12em] bg-cyan-400" />
          )}
        </p>

        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
          Watch your program execute step by step with interactive visualizations — variables, function calls, memory, and step explanations designed for students and educators.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link to="/workspace">
            <TaltrixButton size="lg" className="shadow-lg shadow-cyan-500/20">
              Start Visualizing
              <ArrowRight className="h-4 w-4" aria-hidden />
            </TaltrixButton>
          </Link>
          <a href="#demo" onClick={(e) => { e.preventDefault(); document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" }); }}>
            <TaltrixButton size="lg" variant="outline">
              Browse Examples
            </TaltrixButton>
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-border/60 pt-7 sm:grid-cols-4">
          {[
            ["100%", "visual clarity"],
            ["3", "learning modes"],
            ["10+", "algorithm examples"],
            ["60", "fps interactive"],
          ].map(([v, k]) => (
            <div key={k}>
              <dt className="font-display text-2xl font-semibold text-cyan-300">{v}</dt>
              <dd className="mt-1 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {k}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase md:flex">
        <Boxes className="h-3.5 w-3.5" aria-hidden />
        scroll to execute
      </div>
      <Link to="/workspace" className="sr-only">
        Skip to workspace
      </Link>
    </section>
  );
}