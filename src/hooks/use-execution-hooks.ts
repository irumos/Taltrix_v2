import { useExecution } from "@/contexts/ExecutionContext";

/** Timeline-facing slice of the engine. */
export function useTimeline() {
  const { index, total, seek, next, prev, program, step } = useExecution();
  return { index, total, seek, next, prev, steps: program.steps, step };
}

/** Transport-facing slice of the engine. */
export function usePlayback() {
  const { state, speed, setSpeed, play, pause, toggle, restart } = useExecution();
  return { state, speed, setSpeed, play, pause, toggle, restart };
}

/** Workspace shell slice: program, mode, selection and hover intent. */
export function useWorkspace() {
  const { program, programId, setProgram, mode, setMode, selection, select, hover, setHover, summary } =
    useExecution();
  return { program, programId, setProgram, mode, setMode, selection, select, hover, setHover, summary };
}