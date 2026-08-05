import { useEffect } from "react";

/** Lenis smooth scroll, loaded lazily on the client and disabled for reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let lenisInstance: any = null;
    let isMounted = true;

    void import("lenis").then(({ default: Lenis }) => {
      if (!isMounted) return;
      lenisInstance = new Lenis({ duration: 1.15, smoothWheel: true, lerp: 0.09 });
      const loop = (time: number) => {
        if (!isMounted) return;
        lenisInstance?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      isMounted = false;
      if (raf) cancelAnimationFrame(raf);
      lenisInstance?.destroy();
    };
  }, []);
}