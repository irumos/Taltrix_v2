import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { TaltrixButton } from "@/components/ui-kit/TaltrixButton";
import { useAuth } from "@/contexts/AuthContext";

export function LaunchSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const { isAuthenticated, role } = useAuth();

  // Animate ONLY vertical position (y). Spotlight remains 100% visible at all times.
  const spotlightY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  const dashboardPath = role === "admin" ? "/admin" : "/dashboard";

  return (
    <section
      ref={ref}
      id="launch"
      className="relative overflow-hidden px-5 py-28 sm:px-8 md:py-36"
      aria-label="Launch Taltrix Workspace"
    >
      {/* Semicircular Spotlight / Halo Glow (Always Visible, Vertical Motion Only) */}
      <motion.div
        style={{ y: spotlightY }}
        className="pointer-events-none absolute inset-0 [background-image:var(--gradient-halo)] z-0"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] text-center">
        <h2 className="mx-auto max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.05] font-bold text-balance">
          Stop Guessing What Your Code Is Doing.
          <br />
          <span className="text-gradient">Start Seeing It.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-[16px] text-muted-foreground leading-relaxed">
          Built to make program execution easier to understand.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <TaltrixButton size="lg" className="shadow-xl shadow-cyan-500/25 px-8">
                  Sign In to TALTRIX
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </TaltrixButton>
              </Link>

              <Link to="/signup">
                <TaltrixButton size="lg" variant="outline" className="px-8">
                  Create your account
                </TaltrixButton>
              </Link>
            </>
          ) : (
            <>
              <Link to={dashboardPath}>
                <TaltrixButton size="lg" className="shadow-xl shadow-cyan-500/25 px-8">
                  Open Dashboard
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </TaltrixButton>
              </Link>

              <Link to="/workspace">
                <TaltrixButton size="lg" variant="outline" className="px-8">
                  Launch Workspace
                </TaltrixButton>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}