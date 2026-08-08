import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

// Lazy-loaded landing sections for fast initial paint
const ExecutionSection = lazy(() =>
  import("@/components/landing/ExecutionSection").then((m) => ({ default: m.ExecutionSection })),
);
const TimelineSection = lazy(() =>
  import("@/components/landing/TimelineSection").then((m) => ({ default: m.TimelineSection })),
);
const MemorySection = lazy(() =>
  import("@/components/landing/MemorySection").then((m) => ({ default: m.MemorySection })),
);
const FeaturesSection = lazy(() =>
  import("@/components/landing/FeaturesSection").then((m) => ({ default: m.FeaturesSection })),
);
const ArchitectureSection = lazy(() =>
  import("@/components/landing/ArchitectureSection").then((m) => ({ default: m.ArchitectureSection })),
);
const ClassroomSection = lazy(() =>
  import("@/components/landing/ClassroomSection").then((m) => ({ default: m.ClassroomSection })),
);
const LanguagesSection = lazy(() =>
  import("@/components/landing/LanguagesSection").then((m) => ({ default: m.LanguagesSection })),
);
const LaunchSection = lazy(() =>
  import("@/components/landing/LaunchSection").then((m) => ({ default: m.LaunchSection })),
);

function SectionFallback() {
  return <div className="mx-auto h-[320px] w-full max-w-[1240px] px-5 sm:px-8" aria-hidden />;
}

export function LandingPage() {
  const reduced = usePrefersReducedMotion();
  useSmoothScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen bg-background overflow-x-hidden"
    >
      <Navbar />
      <main className="relative space-y-12 sm:space-y-20">
        {/* Section 1: Hero */}
        <Hero reduced={reduced} />

        {/* Section 2: The Problem */}
        <ProblemSection />

        <Suspense fallback={<SectionFallback />}>
          {/* Section 3: Watch Every Step */}
          <ExecutionSection />

          {/* Section 4: Execution Story */}
          <TimelineSection />

          {/* Section 5: See What Your Program Sees */}
          <MemorySection />

          {/* Section 6: Learning Style */}
          <FeaturesSection />

          {/* Section 7: More Than a Code Runner */}
          <ArchitectureSection />

          {/* Section 8: Built for the Classroom */}
          <ClassroomSection />

          {/* Section 9: Languages */}
          <LanguagesSection />

          {/* Section 10: Final CTA */}
          <LaunchSection />
        </Suspense>
      </main>
      <SiteFooter />
    </motion.div>
  );
}
