import { TerminalSquare } from "lucide-react";
import { Terminal, Window, TaltrixBadge } from "@/components/ui-kit";
import { useExecution } from "@/contexts/ExecutionContext";

/** Terminal-style output pane fed by the placeholder execution trace. */
export function ConsolePane() {
  const { trace, output, index, state } = useExecution();
  const errors = output.filter((l) => l.stream === "stderr").length;

  return (
    <Window
      title="Console"
      icon={TerminalSquare}
      actions={
        <>
          <TaltrixBadge tone="neutral">stdout {output.length - errors}</TaltrixBadge>
          <TaltrixBadge tone={errors ? "danger" : "neutral"}>stderr {errors}</TaltrixBadge>
        </>
      }
      className="h-full"
      bodyClassName="p-0"
    >
      <Terminal
        prompt={`taltrix run ${trace.fileName} --trace`}
        lines={output}
        status={state === "done" ? "process exited with code 0" : `step ${index + 1} replaying`}
      />
    </Window>
  );
}
