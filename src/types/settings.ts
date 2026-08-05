export type ThemeId = "taltrix-dark" | "midnight" | "deep-blue" | "graphite" | "light";

export type AccentColor = "cyan" | "purple" | "emerald" | "amber" | "blue";

export type UiDensity = "compact" | "comfortable" | "spacious";

export type DevCursorStyle = "default" | "ring" | "crosshair" | "glow";

export type ExplanationStyle = "simple" | "detailed" | "technical" | "beginner" | "professor";

export type AnimationSpeed = "slow" | "normal" | "fast" | "instant";

export type CursorStyle = "line" | "block" | "underline";

export type CursorBlink = "blink" | "smooth" | "phase" | "solid";

export interface ThemeSettings {
  id: ThemeId;
}

export interface AppearanceSettings {
  accentColor: AccentColor;
  uiDensity: UiDensity;
  glassStrength: number; // 0 to 100
  borderRadius: number; // 4 to 16
}

export interface DevCursorSettings {
  enabled: boolean;
  style: DevCursorStyle;
  trail: boolean;
  clickRipple: boolean;
  magneticHover: boolean;
  interactionStrength: number; // 1 to 5
}

export interface EditorSettings {
  fontSize: number;
  lineHeight: number;
  wordWrap: "on" | "off";
  showMinimap: boolean;
  showLineNumbers: "on" | "off";
  currentLineHighlight: boolean;
  indentGuides: boolean;
  codeFont: string;
  cursorStyle: CursorStyle;
  cursorBlink: CursorBlink;
  tabSize: number;
  readOnly: boolean;
}

export interface VisualizationSettings {
  animationSpeed: AnimationSpeed;
  smoothTransitions: boolean;
  particleBackground: boolean;
  canvasDensity: number;
  interactionStrength: number;
  rippleStrength: number;
  highlightVarChanges: boolean;
  highlightMemChanges: boolean;
  autoScroll: boolean;
}

export interface ExecutionSettings {
  playbackSpeed: number;
  autoPlay: boolean;
  loopPlayback: boolean;
  pauseOnFunctionCall: boolean;
  pauseOnReturn: boolean;
  pauseOnVarChange: boolean;
  showSummary: boolean;
  autoFocusCurrentLine: boolean;
  autoOpenExplanation: boolean;
}

export interface ExplanationSettings {
  style: ExplanationStyle;
}

export interface AccessibilitySettings {
  reduceMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  keyboardNav: boolean;
  focusIndicators: boolean;
  colorBlindMode: boolean;
}

export interface SoundSettings {
  masterSound: boolean;
  volume: number; // 0 to 100
  soundTyping: boolean;
  soundRun: boolean;
  soundHover: boolean;
  soundSuccess: boolean;
  soundError: boolean;
}

export interface WorkspaceSettings {
  sidebarWidth: number;
  timelineHeight: number;
  panelLayout: "standard" | "compact" | "wide";
  collapseExplorerDefault: boolean;
  collapseMemoryDefault: boolean;
  collapseStackDefault: boolean;
  rememberLayout: boolean;
}

export interface LandingSettings {
  canvasEnabled: boolean;
  particleDensity: number;
  cursorInteraction: boolean;
  clickRipple: boolean;
  scrollOrganization: boolean;
  bgMotionStrength: number;
}

export interface StartupSettings {
  showIntroOnStartup: boolean;
  autoSkip: boolean;
  typingSpeedMs: number;
}

export interface SmartPreferences {
  rememberLastWorkspace: boolean;
  rememberLastTheme: boolean;
  rememberLastLanguage: boolean;
  rememberLastExample: boolean;
  rememberPanelLayout: boolean;
  lastLanguage: string;
  lastExample: string;
}

export interface UserSettings {
  theme: ThemeSettings;
  appearance: AppearanceSettings;
  devCursor: DevCursorSettings;
  editor: EditorSettings;
  visualization: VisualizationSettings;
  execution: ExecutionSettings;
  explanation: ExplanationSettings;
  accessibility: AccessibilitySettings;
  sound: SoundSettings;
  workspace: WorkspaceSettings;
  landing: LandingSettings;
  startup: StartupSettings;
  smartPreferences: SmartPreferences;
}
