import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  X,
  Palette,
  MousePointer,
  Code2,
  Eye,
  Accessibility,
  Layout,
  Sparkles,
  Download,
  Upload,
  RotateCcw,
  Play,
  Check,
  Bookmark,
} from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { ConfirmResetModal } from "./ConfirmResetModal";
import type { ThemeId, AccentColor, UiDensity, DevCursorStyle } from "@/types/settings";
import { cn } from "@/lib/utils";
import { useState } from "react";

const TABS = [
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "cursor", label: "Developer Cursor", icon: MousePointer },
  { id: "canvas", label: "Living Canvas", icon: Sparkles },
  { id: "editor", label: "Editor", icon: Code2 },
  { id: "visualization", label: "Visualization", icon: Eye },
  { id: "accessibility", label: "Accessibility", icon: Accessibility },
  { id: "smart", label: "Smart Preferences", icon: Bookmark },
  { id: "about", label: "About & Backup", icon: Download },
] as const;

type TabId = (typeof TABS)[number]["id"];

const THEMES: { id: ThemeId; name: string; desc: string; bg: string; border: string; accent: string }[] = [
  {
    id: "taltrix-dark",
    name: "Taltrix Dark",
    desc: "Default sleek dark cyan & purple identity",
    bg: "bg-[#0D1224]",
    border: "border-cyan-500/40",
    accent: "bg-cyan-400",
  },
  {
    id: "midnight",
    name: "Midnight",
    desc: "Deep pitch-black canvas with luminous blue",
    bg: "bg-[#070913]",
    border: "border-blue-500/40",
    accent: "bg-blue-400",
  },
  {
    id: "deep-blue",
    name: "Deep Blue",
    desc: "Rich oceanic dark blue aesthetic",
    bg: "bg-[#0B1736]",
    border: "border-indigo-500/40",
    accent: "bg-sky-400",
  },
  {
    id: "graphite",
    name: "Graphite",
    desc: "Monochromatic carbon gray for minimalists",
    bg: "bg-[#18181B]",
    border: "border-zinc-600",
    accent: "bg-zinc-300",
  },
  {
    id: "light",
    name: "Light (Experimental)",
    desc: "Clean light mode for bright classrooms",
    bg: "bg-[#F8FAFC]",
    border: "border-slate-300",
    accent: "bg-blue-600",
  },
];

const ACCENTS: { id: AccentColor; name: string; color: string }[] = [
  { id: "cyan", name: "Cyan", color: "bg-cyan-400" },
  { id: "purple", name: "Purple", color: "bg-purple-400" },
  { id: "emerald", name: "Emerald", color: "bg-emerald-400" },
  { id: "amber", name: "Amber", color: "bg-amber-400" },
  { id: "blue", name: "Blue", color: "bg-blue-400" },
];

export function SettingsModal() {
  const {
    settings,
    updateCategory,
    setTheme,
    setAccentColor,
    setUiDensity,
    resetSettings,
    exportSettings,
    importSettings,
    settingsModalOpen,
    setSettingsModalOpen,
    activeSettingsTab,
    setActiveSettingsTab,
  } = useSettings();

  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Body scroll lock while modal is open
  useEffect(() => {
    if (settingsModalOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [settingsModalOpen]);

  // Keyboard shortcut listener: ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && settingsModalOpen) {
        setSettingsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [settingsModalOpen, setSettingsModalOpen]);

  if (!settingsModalOpen) return null;

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          importSettings(text);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <AnimatePresence>
      <div
        onClick={() => setSettingsModalOpen(false)}
        className="fixed inset-0 z-[250] flex justify-end bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ x: "100%", opacity: 0.8 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 32 }}
          onClick={(e) => e.stopPropagation()}
          className="flex h-full w-full max-w-2xl flex-col border-l border-border/70 bg-surface/95 text-foreground shadow-2xl backdrop-blur-xl"
        >
          {/* Top Header */}
          <div className="flex h-14 items-center justify-between border-b border-border/70 px-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold tracking-[0.24em] uppercase text-foreground">
                TALTRIX Global Settings
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSettingsModalOpen(false)}
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface/80 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Main Body with Sidebar Tabs */}
          <div className="flex min-h-0 flex-1">
            {/* Sidebar Tabs */}
            <div className="w-52 border-r border-border/60 bg-background/40 p-2">
              <nav className="space-y-1">
                {TABS.map((t) => {
                  const active = t.id === activeSettingsTab;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      data-cursor="button"
                      onClick={() => setActiveSettingsTab(t.id)}
                      className={cn(
                        "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left font-mono text-[11px] transition-all",
                        active
                          ? "bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30 shadow-sm"
                          : "text-muted-foreground hover:bg-surface/60 hover:text-foreground"
                      )}
                    >
                      <t.icon className={cn("h-3.5 w-3.5", active ? "text-cyan-400" : "text-muted-foreground")} />
                      <span className="truncate">{t.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content Area */}
            <div className="min-h-0 flex-1 overflow-auto p-5 font-mono text-[12px]">
              {/* APPEARANCE TAB */}
              {activeSettingsTab === "appearance" ? (
                <div className="space-y-5">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Theme & Visual Identity</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Select theme, accent highlights, and UI element density.
                    </p>
                  </div>

                  {/* Theme Cards */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {THEMES.map((th) => {
                      const selected = settings.theme.id === th.id;
                      return (
                        <button
                          key={th.id}
                          type="button"
                          onClick={() => setTheme(th.id)}
                          className={cn(
                            "relative flex flex-col justify-between rounded-xl border p-3 text-left transition-all",
                            th.bg,
                            selected
                              ? `${th.border} ring-2 ring-cyan-400/40 shadow-lg`
                              : "border-border/60 hover:border-border"
                          )}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-sans text-xs font-bold text-foreground">{th.name}</span>
                              <span className={cn("h-2.5 w-2.5 rounded-full", th.accent)} />
                            </div>
                            <p className="mt-1 font-sans text-[11px] text-muted-foreground">{th.desc}</p>
                          </div>
                          {selected ? (
                            <span className="mt-3 flex items-center gap-1 font-mono text-[10px] text-cyan-400">
                              <Check className="h-3 w-3" /> Active
                            </span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>

                  {/* Accent Colors */}
                  <div className="space-y-2 border-t border-border/50 pt-4">
                    <label className="font-sans text-xs font-semibold text-foreground">Accent Color</label>
                    <div className="flex items-center gap-2">
                      {ACCENTS.map((acc) => {
                        const active = settings.appearance.accentColor === acc.id;
                        return (
                          <button
                            key={acc.id}
                            type="button"
                            onClick={() => setAccentColor(acc.id)}
                            className={cn(
                              "flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] font-sans transition-all",
                              active
                                ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-300 font-bold"
                                : "border-border/60 text-muted-foreground hover:bg-surface/60"
                            )}
                          >
                            <span className={cn("h-3 w-3 rounded-full", acc.color)} />
                            <span>{acc.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* UI Density */}
                  <div className="space-y-2 border-t border-border/50 pt-4">
                    <label className="font-sans text-xs font-semibold text-foreground">UI Density</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["compact", "comfortable", "spacious"] as UiDensity[]).map((d) => {
                        const active = settings.appearance.uiDensity === d;
                        return (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setUiDensity(d)}
                            className={cn(
                              "rounded-lg border py-2 text-center font-sans text-xs capitalize transition-all",
                              active
                                ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-300 font-semibold"
                                : "border-border/60 text-muted-foreground hover:bg-surface/60"
                            )}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* DEVELOPER CURSOR TAB */}
              {activeSettingsTab === "cursor" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Developer Cursor System</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Configure custom cursor styles, trails, and interactive hover magnetic effects.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Enable Developer Cursor</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Render custom morphing cursor</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.devCursor.enabled}
                        onChange={(e) => updateCategory("devCursor", { enabled: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>

                    <div className="space-y-2 rounded-lg border border-border/50 bg-background/30 p-3">
                      <span className="font-sans text-xs font-semibold">Cursor Style</span>
                      <div className="grid grid-cols-3 gap-2">
                        {(["ring", "crosshair", "glow"] as DevCursorStyle[]).map((st) => {
                          const active = settings.devCursor.style === st;
                          return (
                            <button
                              key={st}
                              type="button"
                              onClick={() => updateCategory("devCursor", { style: st })}
                              className={cn(
                                "rounded-lg border py-1.5 text-center font-sans text-xs capitalize transition-all",
                                active
                                  ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-300 font-semibold"
                                  : "border-border/60 text-muted-foreground hover:bg-surface/60"
                              )}
                            >
                              {st}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Click Ripple Effect</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Emit glowing particle ripples on click</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.devCursor.clickRipple}
                        onChange={(e) => updateCategory("devCursor", { clickRipple: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* LIVING CANVAS TAB */}
              {activeSettingsTab === "canvas" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Living Code Canvas</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Configure interactive background particle field and code token repulsion.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Canvas Enabled</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Display interactive token field</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.landing.canvasEnabled}
                        onChange={(e) => updateCategory("landing", { canvasEnabled: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>

                    <div className="space-y-2 rounded-lg border border-border/50 bg-background/30 p-3">
                      <div className="flex justify-between font-sans text-xs">
                        <span className="font-semibold">Particle Density</span>
                        <span className="text-cyan-400 font-mono">{settings.landing.particleDensity} tokens</span>
                      </div>
                      <input
                        type="range"
                        min={40}
                        max={200}
                        value={settings.landing.particleDensity}
                        onChange={(e) => updateCategory("landing", { particleDensity: Number(e.target.value) })}
                        className="w-full accent-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* EDITOR TAB */}
              {activeSettingsTab === "editor" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Code Editor</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Typography, minimap, line numbers, and indentation guides.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-2 rounded-lg border border-border/50 bg-background/30 p-3">
                      <div className="flex justify-between font-sans text-xs">
                        <span className="font-semibold">Font Size</span>
                        <span className="text-cyan-400 font-mono">{settings.editor.fontSize}px</span>
                      </div>
                      <input
                        type="range"
                        min={11}
                        max={18}
                        value={settings.editor.fontSize}
                        onChange={(e) => updateCategory("editor", { fontSize: Number(e.target.value) })}
                        className="w-full accent-cyan-400"
                      />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Minimap</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Show code overview strip</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.editor.showMinimap}
                        onChange={(e) => updateCategory("editor", { showMinimap: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* VISUALIZATION TAB */}
              {activeSettingsTab === "visualization" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Visualization Engine</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Execution step speeds, smooth line transitions, and auto-scroll.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Smooth Transitions</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Animate line highlights smoothly</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.visualization.smoothTransitions}
                        onChange={(e) => updateCategory("visualization", { smoothTransitions: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Auto-Scroll Active Line</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Keep executing line centered in editor</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.visualization.autoScroll}
                        onChange={(e) => updateCategory("visualization", { autoScroll: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* ACCESSIBILITY TAB */}
              {activeSettingsTab === "accessibility" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Accessibility</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Motion preferences, high contrast, and keyboard navigation.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Reduce Motion</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Disable decorative particle animations</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.accessibility.reduceMotion}
                        onChange={(e) => updateCategory("accessibility", { reduceMotion: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">High Contrast</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Increase contrast of code indicators</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.accessibility.highContrast}
                        onChange={(e) => updateCategory("accessibility", { highContrast: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* SMART PREFERENCES TAB */}
              {activeSettingsTab === "smart" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Smart Preferences</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Automatically remember last theme, workspace state, and active examples.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Remember Last Theme</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Restore active theme on next visit</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.smartPreferences.rememberLastTheme}
                        onChange={(e) => updateCategory("smartPreferences", { rememberLastTheme: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3">
                      <div>
                        <span className="font-sans text-xs font-semibold">Remember Panel Layout</span>
                        <p className="font-sans text-[11px] text-muted-foreground">Save panel split sizes locally</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings.smartPreferences.rememberPanelLayout}
                        onChange={(e) => updateCategory("smartPreferences", { rememberPanelLayout: e.target.checked })}
                        className="h-4 w-4 accent-cyan-400"
                      />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* ABOUT & BACKUP TAB */}
              {activeSettingsTab === "about" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">Backup & Actions</h3>
                    <p className="font-sans text-xs text-muted-foreground">
                      Export preferences, import JSON configuration, or test boot intro.
                    </p>
                  </div>

                  <div className="space-y-3">

                    <button
                      type="button"
                      onClick={exportSettings}
                      className="flex w-full items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-3.5 text-foreground transition-colors hover:bg-surface/80"
                    >
                      <span className="flex items-center gap-2 font-sans font-semibold">
                        <Download className="h-4 w-4 text-cyan-400" />
                        Export Settings (JSON)
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">Download</span>
                    </button>

                    <div>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".json"
                        onChange={handleImportFile}
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex w-full items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-3.5 text-foreground transition-colors hover:bg-surface/80"
                      >
                        <span className="flex items-center gap-2 font-sans font-semibold">
                          <Upload className="h-4 w-4 text-emerald-400" />
                          Import Settings (JSON)
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground">Upload</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setConfirmResetOpen(true)}
                      className="flex w-full items-center justify-between rounded-lg border border-rose-500/30 bg-rose-500/10 p-3.5 text-rose-200 transition-colors hover:bg-rose-500/20"
                    >
                      <span className="flex items-center gap-2 font-sans font-semibold">
                        <RotateCcw className="h-4 w-4 text-rose-400" />
                        Reset All Preferences to Defaults
                      </span>
                      <span className="font-mono text-[10px] text-rose-300">Reset</span>
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>

      <ConfirmResetModal
        open={confirmResetOpen}
        onOpenChange={setConfirmResetOpen}
        onConfirm={() => {
          resetSettings();
          setConfirmResetOpen(false);
        }}
      />
    </AnimatePresence>
  );
}
