import type { ExecutionStep, LanguageId, Program, StepMetrics, StepStatus } from "@/types/execution";
import factorial from "./execution/factorial.json";
import bubbleSort from "./execution/bubble-sort.json";
import binarySearch from "./execution/binary-search.json";
import dfs from "./execution/dfs.json";
import bfs from "./execution/bfs.json";
import linkedList from "./execution/linked-list.json";
import queue from "./execution/queue.json";
import stackProgram from "./execution/stack.json";
import treeTraversal from "./execution/tree-traversal.json";
import runtimeError from "./execution/runtime-error.json";
import pythonTrace from "./traces/python.json";
import javascriptTrace from "./traces/javascript.json";
import cppTrace from "./traces/cpp.json";

/**
 * Static program catalogue. The shape matches what a trace service would
 * return, so swapping this module for a fetch is a one-line change.
 */

const DEFAULT_METRICS: StepMetrics = {
  stackBytes: 0,
  heapBytes: 0,
  objects: 0,
  allocations: 0,
  peakBytes: 0,
};

function normaliseStep(raw: Record<string, unknown>, i: number, count: number, code: string): ExecutionStep {
  const step = raw as unknown as ExecutionStep;
  const heap = step.heap ?? [];
  const metrics: StepMetrics = step.metrics ?? {
    ...DEFAULT_METRICS,
    stackBytes: (step.stack?.length ?? 0) * 96,
    heapBytes: heap.length * 48,
    objects: heap.length,
    allocations: heap.length,
    peakBytes: heap.length * 48,
  };
  const changed = step.changed ?? step.variables.filter((v) => v.changed).map((v) => `${v.scope}:${v.name}`);
  const codeLines = code.split("\n");
  const executingCode = step.executingCode ?? (step.line > 0 && step.line <= codeLines.length ? codeLines[step.line - 1]?.trim() : "") ?? "";

  const fnName = step.currentFunction ?? step.stack?.[step.stack.length - 1]?.name ?? "<module>";

  // Generate fallback beginner-friendly explanation fields if omitted in static JSON
  const why = step.why ?? (
    step.note.includes("Base case") || step.note.includes("return 1")
      ? "Base case condition met. Returning initial value back up the stack."
      : step.stack.length > 1
        ? `${fnName} pushes a new frame onto the stack to solve a subproblem.`
        : "Executing instruction sequentially within current scope."
  );

  const nextStep = step.nextStep ?? (
    i < count - 1
      ? `Step ${i + 2}: Moving to line ${step.line + 1} in ${fnName}()`
      : "Execution finished successfully."
  );

  const deepExplanation = step.deepExplanation ?? (
    `**Current Line**: Line ${step.line} in \`${fnName}\`\n\n` +
    `**Code**: \`${executingCode}\`\n\n` +
    `**Details**: ${step.note}\n\n` +
    `**Variable State**: ${step.variables.map(v => `${v.name} = ${v.value} (${v.type})`).join(", ") || "No local variables"}\n\n` +
    `**Call Stack Depth**: ${step.stack.length} frame(s)`
  );

  return {
    ...step,
    status: step.status ?? (i === count - 1 ? "done" : "running"),
    currentFunction: fnName,
    returnValue: step.returnValue ?? null,
    executionTimeMs: step.executionTimeMs ?? Number(((i + 1) * 0.84).toFixed(2)),
    changed,
    highlightedVariables: step.highlightedVariables ?? changed,
    highlightedMemory: step.highlightedMemory ?? [],
    metrics,
    executingCode,
    why,
    nextStep,
    deepExplanation,
  };
}

function toProgram(raw: Record<string, unknown>, overrides: Partial<Program> = {}): Program {
  const source = raw as unknown as Partial<Program> & { steps: ExecutionStep[] };
  const rawCode = overrides.code ?? source.code ?? "";
  const steps = source.steps.map((s, i) =>
    normaliseStep(s as unknown as Record<string, unknown>, i, source.steps.length, rawCode),
  );
  const title = (overrides.title ?? source.title ?? source.label ?? source.id) as string;
  return {
    id: source.id as string,
    title,
    label: title,
    category: overrides.category ?? source.category ?? "Data Structures",
    description: source.description ?? "",
    language: (source.language ?? "python") as LanguageId,
    monacoLanguage: source.monacoLanguage ?? "python",
    fileName: source.fileName ?? `${source.id}.py`,
    entry: source.entry ?? "main()",
    code: rawCode,
    complexity: source.complexity ?? { time: "O(n)", space: "O(1)", maxDepth: 1 },
    steps,
    totalTimeMs: source.totalTimeMs ?? steps[steps.length - 1]?.executionTimeMs ?? 0,
    finalStatus: (source.finalStatus ?? steps[steps.length - 1]?.status ?? "done") as StepStatus,
    ...overrides,
  };
}

export const PROGRAMS: Program[] = [
  toProgram(factorial as never, { category: "Recursion" }),
  toProgram(bubbleSort as never, { category: "Sorting" }),
  toProgram(binarySearch as never, { category: "Searching" }),
  toProgram(dfs as never, { category: "Graphs" }),
  toProgram(bfs as never, { category: "Graphs" }),
  toProgram(linkedList as never, { category: "Data Structures" }),
  toProgram(queue as never, { category: "Data Structures" }),
  toProgram(stackProgram as never, { category: "Data Structures" }),
  toProgram(treeTraversal as never, { category: "Trees" }),
  toProgram(runtimeError as never, { category: "Debugging" }),
  toProgram(pythonTrace as never, { category: "Recursion", language: "python" }),
  toProgram(javascriptTrace as never, { category: "Recursion", language: "javascript" }),
  toProgram(cppTrace as never, { category: "Recursion", language: "cpp" }),
];

export const DEFAULT_PROGRAM_ID = "factorial";

export function getProgram(id: string): Program {
  return PROGRAMS.find((p) => p.id === id) ?? PROGRAMS[0]!;
}

export function programsByCategory(): { category: string; programs: Program[] }[] {
  const map = new Map<string, Program[]>();
  for (const p of PROGRAMS) {
    const list = map.get(p.category) ?? [];
    list.push(p);
    map.set(p.category, list);
  }
  return [...map.entries()].map(([category, programs]) => ({ category, programs }));
}

export function firstProgramForLanguage(language: LanguageId): Program {
  return PROGRAMS.find((p) => p.language === language && p.category === "Language Samples")
    ?? PROGRAMS.find((p) => p.language === language)
    ?? PROGRAMS[0]!;
}

export const PROGRAM_LANGUAGES: { id: LanguageId; label: string }[] = [
  { id: "python", label: "Python" },
  { id: "javascript", label: "JavaScript" },
  { id: "cpp", label: "C++" },
];