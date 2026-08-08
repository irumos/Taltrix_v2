import { Activity, Cpu, Palette } from "lucide-react";
import { StatusChip } from "@/components/ui-kit";
import { useExecution } from "@/contexts/ExecutionContext";
import { useSettings } from "@/contexts/SettingsContext";
import { useFps } from "@/hooks/use-fps";
import type { ThemeId } from "@/types/settings";

const TONE = { idle: "idle", running: "running", paused: "paused", done: "done" } as const;

const THEME_NAMES: Record<ThemeId, string> = {
  "taltrix-dark": "Taltrix Dark",
  midnight: "Midnight",
  "deep-blue": "Deep Blue",
  graphite: "Graphite",
  light: "Light",
};

export function StatusBar() {
  const { trace, state, index, total, metrics, mode } = useExecution();
  const { settings } = useSettings();
  const fps = useFps();
  const heapBytes = metrics.heapBytes;

  const currentThemeName = THEME_NAMES[settings.theme.id] || settings.theme.id.replace("-", " ");

  return (
    <footer className="flex h-8 shrink-0 flex-wrap items-center gap-1 overflow-hidden border-t border-border/70 bg-surface/90 px-2 font-mono text-[11px]">
      <StatusChip tone={TONE[state]} value={trace.label} label="lang" pulse={state === "running"} />
      <StatusChip tone={TONE[state]} value={state} label="state" />
      <span className="hidden sm:inline">
        <StatusChip tone="idle" value={`${heapBytes} B`} label="mem" />
      </span>
      <StatusChip tone="done" value={`${index + 1}/${total}`} label="step" />
      <span className="ml-auto flex items-center gap-1">
        <span className="hidden items-center gap-1 md:flex">
          <Cpu className="h-3 w-3 text-muted-foreground/60" aria-hidden />
          <StatusChip tone="idle" value={`${mode} mode`} />
        </span>
        <span className="flex items-center gap-1">
          <Activity className="h-3 w-3 text-muted-foreground/60" aria-hidden />
          <StatusChip tone={fps >= 50 ? "running" : "paused"} value={`${fps} fps`} />
        </span>
        <span className="hidden items-center gap-1 sm:flex">
          <Palette className="h-3 w-3 text-cyan-400" aria-hidden />
          <StatusChip tone="done" value={`Theme: ${currentThemeName}`} />
        </span>
      </span>
    </footer>
  );
}
