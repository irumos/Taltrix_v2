import { ExecutionProvider } from "@/contexts/ExecutionContext";
import { WorkspaceLayout } from "@/components/workspace/WorkspaceLayout";

export function WorkspacePage() {
  return (
    <ExecutionProvider>
      <WorkspaceLayout />
    </ExecutionProvider>
  );
}
