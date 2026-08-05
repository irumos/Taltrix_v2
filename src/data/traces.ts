import type { ExecutionTrace, LanguageId } from "@/types/execution";
import pythonTrace from "./traces/python.json";
import javascriptTrace from "./traces/javascript.json";
import cppTrace from "./traces/cpp.json";

/** Placeholder traces. Swapping these for an API response is a one-line change. */
export const TRACES: Record<LanguageId, ExecutionTrace> = {
  python: pythonTrace as ExecutionTrace,
  javascript: javascriptTrace as ExecutionTrace,
  cpp: cppTrace as ExecutionTrace,
};

export const LANGUAGES: { id: LanguageId; label: string; fileName: string }[] = (
  Object.values(TRACES) as ExecutionTrace[]
).map((t) => ({ id: t.id, label: t.label, fileName: t.fileName }));

export const DEFAULT_LANGUAGE: LanguageId = "python";

export function getTrace(id: LanguageId): ExecutionTrace {
  return TRACES[id] ?? TRACES[DEFAULT_LANGUAGE];
}
