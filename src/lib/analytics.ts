import type { ExecutionStep, Program } from "@/types/execution";

export interface ExecutionSummaryData {
  totalTimeMs: number;
  peakBytes: number;
  functionsCalled: number;
  functionNames: string[];
  objectsCreated: number;
  linesExecuted: number;
  maxDepth: number;
  steps: number;
  allocations: number;
  finalStatus: Program["finalStatus"];
}

/** Derives the post-run dashboard numbers from the trace itself. */
export function summarise(program: Program): ExecutionSummaryData {
  const fns = new Set<string>();
  const objects = new Set<string>();
  const lines = new Set<number>();
  let maxDepth = 0;
  let peak = 0;
  let allocations = 0;

  for (const step of program.steps) {
    lines.add(step.line);
    maxDepth = Math.max(maxDepth, step.stack.length);
    peak = Math.max(peak, step.metrics?.peakBytes ?? 0);
    allocations = Math.max(allocations, step.metrics?.allocations ?? 0);
    for (const frame of step.stack) if (frame.name !== "<module>") fns.add(frame.name);
    for (const obj of step.heap) objects.add(obj.id);
  }

  return {
    totalTimeMs: program.totalTimeMs,
    peakBytes: peak,
    functionsCalled: fns.size,
    functionNames: [...fns],
    objectsCreated: objects.size,
    linesExecuted: lines.size,
    maxDepth,
    steps: program.steps.length,
    allocations,
    finalStatus: program.finalStatus,
  };
}

export type JourneyKind = "created" | "modified" | "passed" | "returned" | "printed";

export interface JourneyEvent {
  step: number;
  kind: JourneyKind;
  label: string;
  detail: string;
}

const key = (scope: string, name: string) => `${scope}:${name}`;

/** Reconstructs the life of one binding across the whole trace. */
export function variableJourney(steps: ExecutionStep[], scope: string, name: string): JourneyEvent[] {
  const events: JourneyEvent[] = [];
  let previous: string | null = null;
  let seen = false;

  steps.forEach((step, i) => {
    const match = step.variables.find((v) => v.scope === scope && v.name === name);
    if (!match) return;
    if (!seen) {
      seen = true;
      previous = match.value;
      events.push({ step: i, kind: "created", label: "Created", detail: `${name} = ${match.value} in ${scope}` });
      return;
    }
    const touched = step.changed?.includes(key(scope, name)) || match.changed;
    if (match.value !== previous || touched) {
      events.push({
        step: i,
        kind: "modified",
        label: "Modified",
        detail: `${previous} → ${match.value}`,
      });
      previous = match.value;
    }
    const callee = step.stack[step.stack.length - 1];
    if (callee && callee.name !== scope && callee.locals && String(callee.locals[name] ?? "") === match.value) {
      events.push({ step: i, kind: "passed", label: "Passed to", detail: callee.name });
    }
    if (step.returnValue && step.currentFunction === scope) {
      events.push({ step: i, kind: "returned", label: "Returned", detail: String(step.returnValue) });
    }
    for (const line of step.stdout) {
      if (line.text.includes(match.value)) {
        events.push({ step: i, kind: "printed", label: "Printed", detail: line.text });
      }
    }
  });

  // Collapse duplicate consecutive events of the same kind on the same step.
  return events.filter(
    (e, i, arr) => i === 0 || !(arr[i - 1]!.kind === e.kind && arr[i - 1]!.step === e.step),
  );
}

export interface FunctionProfile {
  name: string;
  calledFrom: string[];
  calls: string[];
  firstStep: number;
  lastStep: number;
  executionTimeMs: number;
  variables: string[];
  objects: string[];
  returns: string | null;
}

/** Aggregates everything the trace knows about one function. */
export function functionProfile(steps: ExecutionStep[], name: string): FunctionProfile {
  const calledFrom = new Set<string>();
  const calls = new Set<string>();
  const variables = new Set<string>();
  const objects = new Set<string>();
  let firstStep = -1;
  let lastStep = -1;
  let returns: string | null = null;

  steps.forEach((step, i) => {
    const depth = step.stack.findIndex((f) => f.name === name);
    if (depth < 0) return;
    if (firstStep < 0) firstStep = i;
    lastStep = i;
    const parent = step.stack[depth - 1];
    if (parent) calledFrom.add(parent.name);
    const child = step.stack[depth + 1];
    if (child) calls.add(child.name);
    for (const v of step.variables) if (v.scope === name) variables.add(v.name);
    for (const o of step.heap) objects.add(o.label);
    if (step.currentFunction === name && step.returnValue) returns = String(step.returnValue);
  });

  const start = steps[firstStep]?.executionTimeMs ?? 0;
  const end = steps[lastStep]?.executionTimeMs ?? 0;

  return {
    name,
    calledFrom: [...calledFrom],
    calls: [...calls],
    firstStep,
    lastStep,
    executionTimeMs: Number(Math.max(0, end - start).toFixed(2)),
    variables: [...variables],
    objects: [...objects],
    returns,
  };
}

export interface ObjectProfile {
  id: string;
  createdAt: number;
  destroyedAt: number | null;
  sizeBytes: number;
  referencedBy: string[];
}

/** Lifetime and reference facts for a single heap object. */
export function objectProfile(steps: ExecutionStep[], id: string): ObjectProfile {
  let createdAt = -1;
  let destroyedAt: number | null = null;
  const referencedBy = new Set<string>();

  steps.forEach((step, i) => {
    const present = step.heap.some((o) => o.id === id);
    if (present && createdAt < 0) createdAt = i;
    if (!present && createdAt >= 0 && destroyedAt === null) destroyedAt = i;
    if (present && destroyedAt !== null) destroyedAt = null;
    for (const o of step.heap) if (o.refs?.includes(id)) referencedBy.add(o.id);
  });

  const sizeBytes = 24 + id.length * 4;
  return { id, createdAt: Math.max(0, createdAt), destroyedAt, sizeBytes, referencedBy: [...referencedBy] };
}

/** Call-graph edges for the architecture mode. */
export function callGraph(steps: ExecutionStep[]): { nodes: string[]; edges: [string, string][] } {
  const nodes = new Set<string>();
  const edgeSet = new Set<string>();
  for (const step of steps) {
    step.stack.forEach((frame, i) => {
      nodes.add(frame.name);
      const parent = step.stack[i - 1];
      if (parent) edgeSet.add(`${parent.name}→${frame.name}`);
    });
  }
  return {
    nodes: [...nodes],
    edges: [...edgeSet].map((e) => e.split("→") as [string, string]),
  };
}