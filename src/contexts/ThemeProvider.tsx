import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useSettings } from "./SettingsContext";
import type { ThemeId, AccentColor } from "@/types/settings";

interface ThemeContextValue {
  theme: ThemeId;
  accent: AccentColor;
  setTheme: (themeId: ThemeId) => void;
  setAccent: (accent: AccentColor) => void;
  toggleDarkLight: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { settings, setTheme, setAccentColor, toggleDarkLight } = useSettings();

  const activeTheme = settings.theme.id;
  const activeAccent = settings.appearance.accentColor;

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset['theme'] = activeTheme;
      document.documentElement.dataset['accent'] = activeAccent;
    }
  }, [activeTheme, activeAccent]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme: activeTheme,
      accent: activeAccent,
      setTheme,
      setAccent: setAccentColor,
      toggleDarkLight,
    }),
    [activeTheme, activeAccent, setTheme, setAccentColor, toggleDarkLight],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
