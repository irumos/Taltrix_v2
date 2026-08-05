import { getTrace } from "./traces";
import type { ExecutionStep } from "@/types/execution";

/** Landing-page surface: the Python demo, exposed with the original names. */
const python = getTrace("python");

export const DEMO_CODE = python.code;
export const TRACE: ExecutionStep[] = python.steps;
export const COMPLEXITY = {
  time: python.complexity.time,
  space: python.complexity.space,
  maxDepth: python.complexity.maxDepth,
  steps: python.steps.length,
};

export type { ExecutionStep as TraceStep, StackFrame, HeapObject } from "@/types/execution";
