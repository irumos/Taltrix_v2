import { useCallback, useEffect, useRef, useState } from "react";
import { TRACE } from "@/data/execution";
import { blip } from "@/lib/sound";

export type RunnerState = "idle" | "running" | "paused" | "done";

/** Drives the placeholder trace playback. No execution happens — it replays static data. */
export function useTraceRunner(intervalMs = 1100) {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<RunnerState>("idle");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => stop, [stop]);

  const play = useCallback(() => {
    stop();
    setState("running");
    blip("compile");
    timer.current = setInterval(() => {
      setIndex((i) => {
        if (i >= TRACE.length - 1) {
          stop();
          setState("done");
          return i;
        }
        return i + 1;
      });
    }, intervalMs);
  }, [intervalMs, stop]);

  const pause = useCallback(() => {
    stop();
    setState((s) => (s === "running" ? "paused" : s));
  }, [stop]);

  const reset = useCallback(() => {
    stop();
    setIndex(0);
    setState("idle");
  }, [stop]);

  const seek = useCallback(
    (next: number) => {
      stop();
      setIndex(Math.min(TRACE.length - 1, Math.max(0, next)));
      setState((s) => (s === "idle" ? "paused" : s === "running" ? "paused" : s));
    },
    [stop],
  );

  const step = useCallback((delta: number) => seek(index + delta), [index, seek]);

  return {
    index,
    state,
    current: TRACE[index]!,
    total: TRACE.length,
    play,
    pause,
    reset,
    seek,
    step,
  };
}