import { useEffect, useState } from "react";

/** Lightweight rAF sampler for the status bar. Updates at most twice a second. */
export function useFps(enabled = true) {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    let frames = 0;
    let last = performance.now();
    let raf = 0;

    const loop = (now: number) => {
      frames += 1;
      if (now - last >= 500) {
        setFps(Math.round((frames * 1000) / (now - last)));
        frames = 0;
        last = now;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  return fps;
}
