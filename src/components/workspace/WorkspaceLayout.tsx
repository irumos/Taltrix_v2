import { useEffect, useState } from "react";
import { Boxes, Sparkles, Activity } from "lucide-react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Tabs, TooltipProvider } from "@/components/ui-kit";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { WorkspaceToolbar } from "./WorkspaceToolbar";
import { ExplorerPanel } from "./ExplorerPanel";
import { EditorPane } from "./EditorPane";
import { InspectorSidebar } from "./InspectorSidebar";
import { WhatsHappeningPanel } from "./WhatsHappeningPanel";
import { ExecutionInsights } from "./ExecutionInsights";
import { ExplainStepModal } from "./ExplainStepModal";
import { ExecutionCompleteModal } from "./ExecutionCompleteModal";
import { FtueWalkthrough } from "./FtueWalkthrough";
import { SettingsModal } from "@/components/settings/SettingsModal";
import { StatusBar } from "./StatusBar";
import { TimelineBar } from "@/components/timeline/TimelineBar";
import { ObjectInspector } from "@/components/inspector/ObjectInspector";
import { useExecution } from "@/contexts/ExecutionContext";
import { cn } from "@/lib/utils";

/** Keyboard transport: space toggles, arrows step, R restarts. */
function useTransportShortcuts() {
  const { toggle, next, prev, restart } = useExecution();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.isContentEditable || /input|textarea/i.test(target.tagName))) return;
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      } else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key.toLowerCase() === "r") restart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle, next, prev, restart]);
}

export function WorkspaceLayout() {
  const [inspectorCollapsed, setInspectorCollapsed] = useState(false);
  const [explorerCollapsed, setExplorerCollapsed] = useState(true); // Collapsed by default for clean focus
  const [mobileTab, setMobileTab] = useState<"happening" | "inspector" | "insights">("happening");
  const { mode, presentationMode } = useExecution();
  useTransportShortcuts();

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex h-svh flex-col overflow-hidden bg-background transition-all duration-300",
          presentationMode && "text-lg scale-[1.02]"
        )}
      >
        <CustomCursor />
        <WorkspaceToolbar
          inspectorCollapsed={inspectorCollapsed}
          onToggleInspector={() => setInspectorCollapsed((c) => !c)}
          explorerCollapsed={explorerCollapsed}
          onToggleExplorer={() => setExplorerCollapsed((c) => !c)}
        />

        {/* Desktop: clean ~70% Editor / ~30% Information Panel grid */}
        <div className="hidden min-h-0 flex-1 lg:block">
          <ResizablePanelGroup orientation="horizontal">
            {!explorerCollapsed ? (
              <>
                <ResizablePanel defaultSize="18%" minSize="14%" maxSize="26%" className="bg-surface/50">
                  <ExplorerPanel />
                </ResizablePanel>
                <ResizableHandle className="bg-border/70 transition-colors hover:bg-accent/60" />
              </>
            ) : null}

            {/* Dominant Editor Panel (~70%) */}
            <ResizablePanel defaultSize={inspectorCollapsed ? "100%" : "70%"} minSize="45%" className="h-full">
              <EditorPane />
            </ResizablePanel>

            {/* Information Panel (~30%) */}
            {!inspectorCollapsed ? (
              <>
                <ResizableHandle className="bg-border/70 transition-colors hover:bg-accent/60" />
                <ResizablePanel defaultSize="30%" minSize="20%" maxSize="42%" className="bg-surface/60">
                  <InspectorSidebar />
                </ResizablePanel>
              </>
            ) : null}
          </ResizablePanelGroup>
        </div>

        {/* Tablet & mobile layout */}
        <div className="flex min-h-0 flex-1 flex-col lg:hidden">
          <div className="min-h-[220px] flex-1">
            <EditorPane />
          </div>
          <div className="flex h-[45%] min-h-[220px] flex-col border-t border-border/70 bg-surface/60">
            <Tabs
              className="border-b border-border/60 px-2"
              value={mobileTab}
              onChange={setMobileTab as any}
              items={[
                { value: "happening", label: "What's Happening", icon: Sparkles },
                { value: "inspector", label: "Inspector", icon: Boxes },
                { value: "insights", label: "Insights", icon: Activity },
              ]}
            />
            <div className="min-h-0 flex-1 overflow-auto p-2">
              {mobileTab === "happening" ? (
                <WhatsHappeningPanel />
              ) : mobileTab === "inspector" ? (
                <InspectorSidebar />
              ) : (
                <ExecutionInsights />
              )}
            </div>
          </div>
        </div>

        <ObjectInspector />
        <ExplainStepModal />
        <ExecutionCompleteModal />
        <FtueWalkthrough />
        <TimelineBar />
        <StatusBar />
      </div>
    </TooltipProvider>
  );
}
