import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { TaltrixButton } from "@/components/ui-kit/TaltrixButton";
import { CodeEditor } from "@/components/editor/CodeEditor";

export function LaunchSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 10]);
  const glow = useTransform(scrollYProgress, [0.2, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="launch"
      className="relative overflow-hidden px-5 py-28 sm:px-8 md:py-36"
      aria-label="Launch the workspace"
    >
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-0 [background-image:var(--gradient-halo)]"
      />
      <div className="relative mx-auto max-w-[1240px] text-center">
        <div className="mb-5 font-mono text-[11px] tracking-[0.28em] text-accent uppercase">
          07 — launch workspace
        </div>
        <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.6rem)] leading-[1.03] font-semibold text-balance">
          The site stops being a page.
          <br />
          <span className="text-gradient">It becomes the product.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] text-muted-foreground">
          The editor expands, the marketing chrome falls away, and you land inside the Taltrix
          workspace.
        </p>
        <div className="mt-9 flex justify-center">
          <Link to="/workspace">
            <TaltrixButton size="lg">
              Enter Workspace
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </TaltrixButton>
          </Link>
        </div>

        <motion.div
          style={{ scale, borderRadius: radius }}
          className="panel mx-auto mt-16 max-w-5xl overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            <span>taltrix workspace</span>
            <span className="text-success">ready</span>
          </div>
          <div className="h-[280px] text-left sm:h-[340px]">
            <CodeEditor />
          </div>
        </motion.div>
      </div>
    </section>
  );
}