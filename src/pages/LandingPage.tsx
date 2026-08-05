import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

// Heavy, animation-dense sections load after the hero paints.
const ExecutionSection = lazy(() =>
  import("@/components/landing/ExecutionSection").then((m) => ({ default: m.ExecutionSection })),
);
const MemorySection = lazy(() =>
  import("@/components/landing/MemorySection").then((m) => ({ default: m.MemorySection })),
);
const TimelineSection = lazy(() =>
  import("@/components/landing/TimelineSection").then((m) => ({ default: m.TimelineSection })),
);
const FeaturesSection = lazy(() =>
  import("@/components/landing/FeaturesSection").then((m) => ({ default: m.FeaturesSection })),
);
const LaunchSection = lazy(() =>
  import("@/components/landing/LaunchSection").then((m) => ({ default: m.LaunchSection })),
);

function SectionFallback() {
  return <div className="mx-auto h-[420px] w-full max-w-[1240px] px-5 sm:px-8" aria-hidden />;
}

export function LandingPage() {
  const reduced = usePrefersReducedMotion();
  useSmoothScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-background"
    >
      <Navbar />
      <main className="relative">
        <Hero reduced={reduced} />
        <ProblemSection />
        <Suspense fallback={<SectionFallback />}>
          <ExecutionSection />
          <MemorySection />
          <TimelineSection />
          <FeaturesSection />
          <LaunchSection />
        </Suspense>
      </main>
      <SiteFooter />
    </motion.div>
  );
}
