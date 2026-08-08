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
  LayoutDashboard,
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
import { useAuth } from "@/contexts/AuthContext";
import { useNavigationHistory } from "@/contexts/NavigationHistoryContext";
import type { LanguageId } from "@/types/execution";

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
  const { role } = useAuth();
  const { navigateBack } = useNavigationHistory();
  const dashboardPath = role === "admin" ? "/admin" : "/dashboard";

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
    <Toolbar className="border-b border-border/70 bg-surface/80 backdrop-blur-md px-3 sm:px-4 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
      {/* LEFT SIDE: Toggle Explorer + Exit to Previous Page */}
      <ToolbarGroup className="flex items-center gap-2 shrink-0">
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
          onClick={() => navigateBack("/")}
          data-cursor="button"
          aria-label="Exit workspace to previous page"
          className="group flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-[11px] font-medium text-muted-foreground transition-all hover:border-border hover:bg-surface-h hover:text-foreground active:scale-95 shrink-0"
        >
          <ChevronLeft className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-1" />
          <span>Exit</span>
        </button>
      </ToolbarGroup>

      <ToolbarDivider />

      {/* CENTER: Logo + Program Information + Workspace Mode Controls */}
      <ToolbarGroup className="flex items-center gap-3 shrink-0">
        <span className="font-display text-[12px] font-semibold tracking-[0.32em] text-foreground hidden sm:inline">
          TALTRIX
        </span>

        <div className="hidden md:flex items-center gap-2">
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
        </div>

        <ModeSwitcher />
      </ToolbarGroup>

      {/* RIGHT SIDE: Dashboard Shortcut + Run Visualization CTA + Utilities */}
      <ToolbarGroup className="ml-auto flex items-center gap-2 shrink-0">
        {/* Dashboard Shortcut Navigation Tile */}
        <Link to={dashboardPath} className="shrink-0">
          <button
            type="button"
            data-cursor="button"
            aria-label="Go to Dashboard"
            className="group flex items-center gap-1.5 rounded-lg border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-[11px] font-medium text-muted-foreground transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 active:scale-95"
          >
            <LayoutDashboard className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>
        </Link>

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

        {/* Utilities */}
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
