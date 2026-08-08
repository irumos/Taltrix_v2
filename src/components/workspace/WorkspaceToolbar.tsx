import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  Command,
  Monitor,
  PanelLeft,
  PanelRight,
  Pause,
  Play,
  Settings2,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import {
  Dropdown,
  Modal,
  TaltrixButton,
  Toolbar,
  ToolbarDivider,
  ToolbarGroup,
  Tooltip,
} from "@/components/ui-kit";
import { PROGRAMS, PROGRAM_LANGUAGES } from "@/data/programs";
import { ModeSwitcher } from "./ModeSwitcher";
import { useSettings } from "@/contexts/SettingsContext";
import { useExecution } from "@/contexts/ExecutionContext";
import type { LanguageId } from "@/types/execution";

import { useNavigationHistory } from "@/contexts/NavigationHistoryContext";

export function WorkspaceToolbar({
  onToggleInspector,
  inspectorCollapsed,
  onToggleExplorer,
  explorerCollapsed,
}: {
  onToggleInspector: () => void;
  inspectorCollapsed: boolean;
  onToggleExplorer: () => void;
  explorerCollapsed: boolean;
}) {
  const { getBackLabel, navigateBack } = useNavigationHistory();
  const {
    language,
    setLanguage,
    setProgram,
    trace,
    toggle,
    visualizeState,
    presentationMode,
    setPresentationMode,
  } = useExecution();
  const { setSettingsModalOpen, setShortcutsModalOpen } = useSettings();
  const [shortcuts, setShortcuts] = useState(false);

  const getVisualizeButtonContent = () => {
    switch (visualizeState) {
      case "preparing":
        return (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            <span>Preparing...</span>
          </>
        );
      case "visualizing":
        return (
          <>
            <Pause className="h-3.5 w-3.5" />
            <span>Visualizing</span>
          </>
        );
      case "paused":
        return (
          <>
            <Play className="h-3.5 w-3.5" />
            <span>Resume</span>
          </>
        );
      case "completed":
        return (
          <>
            <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
            <span>Completed</span>
          </>
        );
      default:
        return (
          <>
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Run Visualization</span>
          </>
        );
    }
  };

  return (
    <Toolbar className="border-b border-border/70 bg-surface/80 backdrop-blur-md">
      <ToolbarGroup>
        <Tooltip content="Toggle examples explorer">
          <TaltrixButton
            size="icon"
            variant="ghost"
            aria-label="Toggle explorer"
            onClick={onToggleExplorer}
            className={!explorerCollapsed ? "text-accent bg-accent/10" : ""}
          >
            <PanelLeft className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>

        <button
          type="button"
          onClick={() => navigateBack('/')}
          data-cursor="button"
          aria-label="Exit workspace"
          className="group flex items-center gap-1 rounded-lg px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-all hover:bg-surface-h hover:text-foreground active:scale-95"
        >
          <ChevronLeft className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-1" />
          <span>{getBackLabel()}</span>
        </button>
        <span className="font-display text-[12px] font-semibold tracking-[0.32em] text-foreground">
          TALTRIX
        </span>
      </ToolbarGroup>

      <ToolbarDivider />

      <ToolbarGroup>
        <Dropdown
          label="Language"
          value={language}
          onChange={(v) => setLanguage(v as LanguageId)}
          options={PROGRAM_LANGUAGES.map((l) => ({ value: l.id, label: l.label }))}
        />
        <Dropdown
          label="Example"
          value={trace.id}
          onChange={(v) => setProgram(v)}
          options={PROGRAMS.map((p) => ({ value: p.id, label: p.title, hint: p.category }))}
        />
        <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
          {trace.fileName}
        </span>
      </ToolbarGroup>

      <ToolbarGroup className="ml-auto flex items-center gap-2">
        <ModeSwitcher />

        {/* Primary Visualize Action */}
        <TaltrixButton
          size="sm"
          variant={visualizeState === "visualizing" ? "outline" : "primary"}
          onClick={toggle}
          className="min-w-[110px] shadow-lg shadow-cyan-500/10 transition-all hover:scale-[1.02]"
        >
          {getVisualizeButtonContent()}
        </TaltrixButton>

        <ToolbarDivider />

        {/* Presentation Mode Toggle */}
        <Tooltip content={presentationMode ? "Exit Presentation Mode" : "Presentation Mode (Classroom)"}>
          <TaltrixButton
            size="icon"
            variant="ghost"
            aria-label="Toggle presentation mode"
            onClick={() => setPresentationMode((prev) => !prev)}
            className={presentationMode ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" : ""}
          >
            <Monitor className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>

        <Tooltip content="Keyboard Shortcuts">
          <TaltrixButton size="icon" variant="ghost" aria-label="Shortcuts" onClick={() => setShortcutsModalOpen(true)}>
            <Command className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>

        <Tooltip content={inspectorCollapsed ? "Show Inspector" : "Hide Inspector"}>
          <TaltrixButton
            size="icon"
            variant="ghost"
            aria-label="Toggle inspector"
            onClick={onToggleInspector}
          >
            <PanelRight className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>

        <Tooltip content="Settings">
          <TaltrixButton
            size="icon"
            variant="ghost"
            aria-label="Settings"
            onClick={() => setSettingsModalOpen(true)}
          >
            <Settings2 className="h-4 w-4" />
          </TaltrixButton>
        </Tooltip>
      </ToolbarGroup>

      <Modal
        open={shortcuts}
        onOpenChange={setShortcuts}
        title="TALTRIX Keyboard Shortcuts"
        description="Navigate execution quickly with standard controls."
      >
        <ul className="space-y-2 font-mono text-[12px] text-muted-foreground">
          {[
            ["Space", "Toggle Visualize / Pause"],
            ["→ / ←", "Step Forward / Backward"],
            ["R", "Restart execution"],
          ].map(([k, v]) => (
            <li key={k} className="flex items-center justify-between rounded-lg border border-border/60 px-3 py-2">
              <span className="font-bold text-foreground">{k}</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
      </Modal>
    </Toolbar>
  );
}
