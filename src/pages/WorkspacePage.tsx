import { Component, ReactNode } from "react";
import { ExecutionProvider } from "@/contexts/ExecutionContext";
import { WorkspaceLayout } from "@/components/workspace/WorkspaceLayout";
import { TaltrixButton } from "@/components/ui-kit";
import { RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class WorkspaceErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    console.error("Workspace error boundary caught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-6 text-center">
          <div className="max-w-md space-y-4 rounded-2xl border border-border/80 bg-surface/80 p-6 shadow-2xl backdrop-blur-xl">
            <h2 className="font-display text-lg font-bold text-foreground">
              Workspace Loading Issue
            </h2>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              The playground workspace encountered an initialization error. Please reload to restore the visualizer.
            </p>
            <TaltrixButton
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="w-full justify-center"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reload Workspace
            </TaltrixButton>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function WorkspacePage() {
  return (
    <WorkspaceErrorBoundary>
      <ExecutionProvider>
        <WorkspaceLayout />
      </ExecutionProvider>
    </WorkspaceErrorBoundary>
  );
}
