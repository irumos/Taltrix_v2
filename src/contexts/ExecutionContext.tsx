import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_PROGRAM_ID, firstProgramForLanguage, getProgram } from "@/data/programs";
import { summarise, type ExecutionSummaryData } from "@/lib/analytics";
import { blip } from "@/lib/sound";
import type {
  ExecutionMode,
  ExecutionStep,
  LanguageId,
  Program,
  RunnerState,
  StepMetrics,
  VisualizeState,
} from "@/types/execution";

/** What the user is currently inspecting. Drives journeys + cross-highlighting. */
export type Selection =
  | { kind: "none" }
  | { kind: "variable"; scope: string; name: string }
  | { kind: "function"; name: string }
  | { kind: "object"; id: string };

export type HoverTarget =
  | { kind: "variable"; scope: string; name: string }
  | { kind: "object"; id: string }
  | { kind: "frame"; name: string }
  | null;

export interface ExecutionContextValue {
  program: Program;
  /** Alias kept for the panes that were written against the trace shape. */
  trace: Program;
  programId: string;
  setProgram: (id: string) => void;
  language: LanguageId;
  setLanguage: (id: LanguageId) => void;
  mode: ExecutionMode;
  setMode: (m: ExecutionMode) => void;
  index: number;
  total: number;
  step: ExecutionStep;
  metrics: StepMetrics;
  state: RunnerState;
  visualizeState: VisualizeState;
  speed: number;
  setSpeed: (s: number) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  restart: () => void;
  replay: () => void;
  next: () => void;
  prev: () => void;
  seek: (i: number) => void;
  selection: Selection;
  select: (s: Selection) => void;
  hover: HoverTarget;
  setHover: (h: HoverTarget) => void;
  presentationMode: boolean;
  setPresentationMode: (p: boolean | ((prev: boolean) => boolean)) => void;
  explainModalOpen: boolean;
  setExplainModalOpen: (open: boolean) => void;
  summary: ExecutionSummaryData;
  /** Every console line emitted up to and including the current step. */
  output: { stream: "stdout" | "stderr"; text: string; step: number }[];
}

const ExecutionCtx = createContext<ExecutionContextValue | null>(null);

const BASE_INTERVAL = 950;
const INSTANT_INTERVAL = 55;

const FALLBACK_METRICS: StepMetrics = {
  stackBytes: 0,
  heapBytes: 0,
  objects: 0,
  allocations: 0,
  peakBytes: 0,
};

export function ExecutionProvider({
  children,
  initialProgramId = DEFAULT_PROGRAM_ID,
}: {
  children: ReactNode;
  initialProgramId?: string;
}) {
  const [programId, setProgramId] = useState(initialProgramId);
  const [mode, setMode] = useState<ExecutionMode>("learn");
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<RunnerState>("idle");
  const [speed, setSpeed] = useState(1);
  const [selection, setSelection] = useState<Selection>({ kind: "none" });
  const [hover, setHover] = useState<HoverTarget>(null);
  const [presentationMode, setPresentationMode] = useState(false);
  const [explainModalOpen, setExplainModalOpen] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const program = useMemo(() => getProgram(programId), [programId]);
  const total = program.steps.length;
  const summary = useMemo(() => summarise(program), [program]);

  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => stop, [stop]);

  const play = useCallback(() => {
    setIsPreparing(true);
    blip("compile");
    setTimeout(() => {
      setIsPreparing(false);
      setState((s) => (s === "done" ? s : "running"));
      setIndex((i) => (i >= total - 1 ? 0 : i));
      setState("running");
    }, 300);
  }, [total]);

  const pause = useCallback(() => {
    stop();
    setState((s) => (s === "running" ? "paused" : s));
  }, [stop]);

  // Playback loop — re-armed whenever index/speed changes so scrubbing stays live.
  useEffect(() => {
    if (state !== "running") return;
    if (index >= total - 1) {
      setState("done");
      return;
    }
    const interval = speed <= 0 ? INSTANT_INTERVAL : BASE_INTERVAL / speed;
    timer.current = setTimeout(() => setIndex((i) => Math.min(total - 1, i + 1)), interval);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [state, index, speed, total]);

  const restart = useCallback(() => {
    stop();
    setIndex(0);
    setState("idle");
  }, [stop]);

  const replay = useCallback(() => {
    stop();
    setIndex(0);
    setState("running");
  }, [stop]);

  const seek = useCallback(
    (next: number) => {
      setIndex(Math.min(total - 1, Math.max(0, next)));
      setState((s) => (s === "running" ? "paused" : s === "idle" ? "paused" : s));
    },
    [total],
  );

  const next = useCallback(() => seek(index + 1), [index, seek]);
  const prev = useCallback(() => seek(index - 1), [index, seek]);

  const setProgram = useCallback(
    (id: string) => {
      stop();
      setProgramId(id);
      setIndex(0);
      setState("idle");
      setSelection({ kind: "none" });
      setHover(null);
    },
    [stop],
  );

  const setLanguage = useCallback(
    (id: LanguageId) => setProgram(firstProgramForLanguage(id).id),
    [setProgram],
  );

  const toggle = useCallback(() => {
    if (state === "running") pause();
    else play();
  }, [state, pause, play]);

  const output = useMemo(
    () =>
      program.steps
        .slice(0, index + 1)
        .flatMap((s, i) => s.stdout.map((line) => ({ ...line, step: i }))),
    [program, index],
  );

  const step = program.steps[index] ?? program.steps[0]!;

  const visualizeState: VisualizeState = isPreparing
    ? "preparing"
    : state === "running"
      ? "visualizing"
      : state === "paused"
        ? "paused"
        : state === "done"
          ? "completed"
          : "idle";

  const value = useMemo<ExecutionContextValue>(
    () => ({
      program,
      trace: program,
      programId,
      setProgram,
      language: program.language,
      setLanguage,
      mode,
      setMode,
      index,
      total,
      step,
      metrics: step.metrics ?? FALLBACK_METRICS,
      state,
      visualizeState,
      speed,
      setSpeed,
      play,
      pause,
      toggle,
      restart,
      replay,
      next,
      prev,
      seek,
      selection,
      select: setSelection,
      hover,
      setHover,
      presentationMode,
      setPresentationMode,
      explainModalOpen,
      setExplainModalOpen,
      summary,
      output,
    }),
    [
      program,
      programId,
      setProgram,
      setLanguage,
      mode,
      index,
      total,
      step,
      state,
      visualizeState,
      speed,
      play,
      pause,
      toggle,
      restart,
      replay,
      next,
      prev,
      seek,
      selection,
      hover,
      presentationMode,
      explainModalOpen,
      summary,
      output,
    ],
  );

  return <ExecutionCtx.Provider value={value}>{children}</ExecutionCtx.Provider>;
}

export function useOptionalExecution() {
  return useContext(ExecutionCtx);
}

export function useExecution() {
  const ctx = useContext(ExecutionCtx);
  if (!ctx) throw new Error("useExecution must be used inside <ExecutionProvider>");
  return ctx;
}
