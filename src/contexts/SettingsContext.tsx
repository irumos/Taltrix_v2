import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { UserSettings, ThemeId, AccentColor, UiDensity } from "@/types/settings";

const STORAGE_KEY = "taltrix:user_settings:v1";

export const DEFAULT_SETTINGS: UserSettings = {
  theme: { id: "taltrix-dark" },
  appearance: {
    accentColor: "cyan",
    uiDensity: "comfortable",
    glassStrength: 80,
    borderRadius: 12,
  },
  devCursor: {
    enabled: true,
    style: "ring",
    trail: false,
    clickRipple: true,
    magneticHover: true,
    interactionStrength: 3,
  },
  editor: {
    fontSize: 13,
    lineHeight: 22,
    wordWrap: "off",
    showMinimap: false,
    showLineNumbers: "on",
    currentLineHighlight: true,
    indentGuides: true,
    codeFont: "JetBrains Mono",
    cursorStyle: "line",
    cursorBlink: "phase",
    tabSize: 2,
    readOnly: false,
  },
  visualization: {
    animationSpeed: "normal",
    smoothTransitions: true,
    particleBackground: true,
    canvasDensity: 120,
    interactionStrength: 3,
    rippleStrength: 3,
    highlightVarChanges: true,
    highlightMemChanges: true,
    autoScroll: true,
  },
  execution: {
    playbackSpeed: 1,
    autoPlay: false,
    loopPlayback: false,
    pauseOnFunctionCall: false,
    pauseOnReturn: false,
    pauseOnVarChange: false,
    showSummary: true,
    autoFocusCurrentLine: true,
    autoOpenExplanation: false,
  },
  explanation: { style: "beginner" },
  accessibility: {
    reduceMotion: false,
    highContrast: false,
    largeText: false,
    keyboardNav: true,
    focusIndicators: true,
    colorBlindMode: false,
  },
  sound: {
    masterSound: true,
    volume: 75,
    soundTyping: true,
    soundRun: true,
    soundHover: true,
    soundSuccess: true,
    soundError: true,
  },
  workspace: {
    sidebarWidth: 280,
    timelineHeight: 120,
    panelLayout: "standard",
    collapseExplorerDefault: true,
    collapseMemoryDefault: false,
    collapseStackDefault: false,
    rememberLayout: true,
  },
  landing: {
    canvasEnabled: true,
    particleDensity: 120,
    cursorInteraction: true,
    clickRipple: true,
    scrollOrganization: true,
    bgMotionStrength: 3,
  },
  startup: { showIntroOnStartup: false, autoSkip: true, typingSpeedMs: 22 },
  smartPreferences: {
    rememberLastWorkspace: true,
    rememberLastTheme: true,
    rememberLastLanguage: true,
    rememberLastExample: true,
    rememberPanelLayout: true,
    lastLanguage: "python",
    lastExample: "factorial",
  },
};

export interface SettingsContextValue {
  settings: UserSettings;
  updateSettings: (updater: (prev: UserSettings) => UserSettings) => void;
  updateCategory: <K extends keyof UserSettings>(category: K, values: Partial<UserSettings[K]>) => void;
  setTheme: (themeId: ThemeId) => void;
  setAccentColor: (accent: AccentColor) => void;
  setUiDensity: (density: UiDensity) => void;
  toggleDarkLight: () => void;
  resetSettings: () => void;
  exportSettings: () => void;
  importSettings: (jsonStr: string) => boolean;
  settingsModalOpen: boolean;
  setSettingsModalOpen: (open: boolean) => void;
  activeSettingsTab: string;
  setActiveSettingsTab: (tab: string) => void;
  openSettingsTab: (tab: string) => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  shortcutsModalOpen: boolean;
  setShortcutsModalOpen: (open: boolean) => void;
}

const SettingsCtx = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettingsState] = useState<UserSettings>(() => {
    if (typeof window === "undefined") return DEFAULT_SETTINGS;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...DEFAULT_SETTINGS,
          ...parsed,
          theme: { ...DEFAULT_SETTINGS.theme, ...parsed?.theme },
          appearance: { ...DEFAULT_SETTINGS.appearance, ...parsed?.appearance },
          devCursor: { ...DEFAULT_SETTINGS.devCursor, ...parsed?.devCursor },
          editor: { ...DEFAULT_SETTINGS.editor, ...parsed?.editor },
          visualization: { ...DEFAULT_SETTINGS.visualization, ...parsed?.visualization },
          execution: { ...DEFAULT_SETTINGS.execution, ...parsed?.execution },
          explanation: { ...DEFAULT_SETTINGS.explanation, ...parsed?.explanation },
          accessibility: { ...DEFAULT_SETTINGS.accessibility, ...parsed?.accessibility },
          sound: { ...DEFAULT_SETTINGS.sound, ...parsed?.sound },
          workspace: { ...DEFAULT_SETTINGS.workspace, ...parsed?.workspace },
          landing: { ...DEFAULT_SETTINGS.landing, ...parsed?.landing },
          startup: { ...DEFAULT_SETTINGS.startup, ...parsed?.startup },
          smartPreferences: { ...DEFAULT_SETTINGS.smartPreferences, ...parsed?.smartPreferences },
        };
      }
    } catch {
      /* ignore invalid JSON */
    }
    return DEFAULT_SETTINGS;
  });

  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("appearance");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [shortcutsModalOpen, setShortcutsModalOpen] = useState(false);

  const openSettingsTab = useCallback((tab: string) => {
    setActiveSettingsTab(tab);
    setSettingsModalOpen(true);
  }, []);

  // Persist settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      /* storage unavailable */
    }
  }, [settings]);

  // Apply theme & appearance datasets to root document element
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset['theme'] = settings.theme.id;
      document.documentElement.dataset['accent'] = settings.appearance.accentColor;
      document.documentElement.dataset['density'] = settings.appearance.uiDensity;
    }
  }, [settings.theme.id, settings.appearance.accentColor, settings.appearance.uiDensity]);

  // Global keybindings: Ctrl+K / Cmd+K -> Command Palette, ? -> Shortcuts Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.isContentEditable || /input|textarea|select/i.test(target.tagName))) return;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      } else if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setShortcutsModalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updateSettings = useCallback((updater: (prev: UserSettings) => UserSettings) => {
    setSettingsState((prev) => updater(prev));
  }, []);

  const updateCategory = useCallback(
    <K extends keyof UserSettings>(category: K, values: Partial<UserSettings[K]>) => {
      setSettingsState((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          ...values,
        },
      }));
    },
    [],
  );

  const setTheme = useCallback((themeId: ThemeId) => {
    updateCategory("theme", { id: themeId });
  }, [updateCategory]);

  const setAccentColor = useCallback((accent: AccentColor) => {
    updateCategory("appearance", { accentColor: accent });
  }, [updateCategory]);

  const setUiDensity = useCallback((density: UiDensity) => {
    updateCategory("appearance", { uiDensity: density });
  }, [updateCategory]);

  const toggleDarkLight = useCallback(() => {
    setSettingsState((prev) => {
      const nextTheme: ThemeId = prev.theme.id === "light" ? "taltrix-dark" : "light";
      return {
        ...prev,
        theme: { id: nextTheme },
      };
    });
  }, []);

  const resetSettings = useCallback(() => {
    setSettingsState(DEFAULT_SETTINGS);
  }, []);

  const exportSettings = useCallback(() => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `taltrix-settings-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }, [settings]);

  const importSettings = useCallback((jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (typeof parsed === "object" && parsed !== null) {
        setSettingsState({
          ...DEFAULT_SETTINGS,
          ...parsed,
        });
        return true;
      }
    } catch {
      /* invalid JSON */
    }
    return false;
  }, []);

  const value = useMemo<SettingsContextValue>(
    () => ({
      settings,
      updateSettings,
      updateCategory,
      setTheme,
      setAccentColor,
      setUiDensity,
      toggleDarkLight,
      resetSettings,
      exportSettings,
      importSettings,
      settingsModalOpen,
      setSettingsModalOpen,
      activeSettingsTab,
      setActiveSettingsTab,
      openSettingsTab,
      commandPaletteOpen,
      setCommandPaletteOpen,
      shortcutsModalOpen,
      setShortcutsModalOpen,
    }),
    [
      settings,
      updateSettings,
      updateCategory,
      setTheme,
      setAccentColor,
      setUiDensity,
      toggleDarkLight,
      resetSettings,
      exportSettings,
      importSettings,
      settingsModalOpen,
      activeSettingsTab,
      openSettingsTab,
      commandPaletteOpen,
      shortcutsModalOpen,
    ],
  );

  return <SettingsCtx.Provider value={value}>{children}</SettingsCtx.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsCtx);
  if (!ctx) throw new Error("useSettings must be used inside <SettingsProvider>");
  return ctx;
}
