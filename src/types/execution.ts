/**
 * Domain types for the Taltrix execution model.
 *
 * The frontend behaves as if a backend already streams these structures.
 * Today they are hydrated from static JSON in `src/data/traces`.
 */

export type LanguageId = "python" | "javascript" | "cpp";

export type ConsoleStream = "stdout" | "stderr";

/** How the workspace visualises the same trace. */
export type ExecutionMode = "learn" | "debug" | "system";

export type VisualizeState = "idle" | "preparing" | "visualizing" | "paused" | "completed";

/** Per-step lifecycle status reported by the (future) runtime. */
export type StepStatus =
  | "idle"
  | "running"
  | "returned"
  | "done"
  | "compile-error"
  | "runtime-error"
  | "infinite-loop"
  | "timeout"
  | "memory-overflow";

export interface StepMetrics {
  stackBytes: number;
  heapBytes: number;
  objects: number;
  allocations: number;
  peakBytes: number;
}

export interface TraceVariable {
  name: string;
  type: string;
  value: string;
  scope: string;
  changed?: boolean;
  previousValue?: string;
}

export interface StackFrame {
  name: string;
  line: number;
  locals?: Record<string, string | number>;
}

export interface HeapObject {
  id: string;
  type: string;
  label: string;
  value: string;
  /** Ids of objects this one points at — drives the memory arrows. */
  refs?: string[];
}

export interface ConsoleLine {
  stream: ConsoleStream;
  text: string;
}

export interface ExecutionStep {
  line: number;
  label: string;
  note: string;
  variables: TraceVariable[];
  stack: StackFrame[];
  heap: HeapObject[];
  stdout: ConsoleLine[];
  status?: StepStatus;
  currentFunction?: string;
  returnValue?: string | null;
  executionTimeMs?: number;
  /** Scope-qualified keys (`scope:name`) touched this step. */
  changed?: string[];
  highlightedVariables?: string[];
  highlightedMemory?: string[];
  metrics?: StepMetrics;
  /** Rich explanation fields for beginner 'What's Happening?' panel */
  why?: string;
  nextStep?: string;
  executingCode?: string;
  deepExplanation?: string;
}

export interface Complexity {
  time: string;
  space: string;
  maxDepth: number;
}

export interface ExecutionTrace {
  id: LanguageId;
  label: string;
  monacoLanguage: string;
  fileName: string;
  entry: string;
  code: string;
  complexity: Complexity;
  steps: ExecutionStep[];
}

/** A runnable sample. Shape mirrors what a real trace endpoint would return. */
export interface Program {
  id: string;
  title: string;
  label: string;
  category: string;
  description?: string;
  language: LanguageId;
  monacoLanguage: string;
  fileName: string;
  entry: string;
  code: string;
  complexity: Complexity;
  steps: ExecutionStep[];
  totalTimeMs: number;
  finalStatus: StepStatus;
}

export type RunnerState = "idle" | "running" | "paused" | "done";

/** Backwards-compatible alias used by the landing sections. */
export type TraceStep = ExecutionStep;
