import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  X,
  Play,
  Settings2,
  Palette,
  HelpCircle,
  Sparkles,
  LayoutDashboard,
  ShieldCheck,
  LogOut,
  LogIn,
  MessageSquare,
  User,
} from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useSettings } from "@/contexts/SettingsContext";
import { useAuth } from "@/contexts/AuthContext";

interface ActionItem {
  id: string;
  category: "Navigation" | "Theme" | "Settings" | "Auth";
  title: string;
  subtitle?: string;
  icon: any;
  perform: () => void;
}

export function CommandPalette() {
  const {
    commandPaletteOpen,
    setCommandPaletteOpen,
    setSettingsModalOpen,
    setShortcutsModalOpen,
    toggleDarkLight,
    setTheme,
    setAccentColor,
  } = useSettings();
  const { isAuthenticated, role, logout } = useAuth();

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!commandPaletteOpen) setQuery("");
  }, [commandPaletteOpen]);

  const actions = useMemo<ActionItem[]>(
    () => [
      {
        id: "nav-workspace",
        category: "Navigation",
        title: "Open Playground / Workspace",
        subtitle: "Open interactive code execution visualizer",
        icon: Play,
        perform: () => {
          setCommandPaletteOpen(false);
          navigate({ to: "/workspace" });
        },
      },
      {
        id: "nav-dashboard",
        category: "Navigation",
        title: role === "admin" ? "Admin Portal" : "Student Dashboard",
        subtitle: "Open personal dashboard and metrics",
        icon: role === "admin" ? ShieldCheck : LayoutDashboard,
        perform: () => {
          setCommandPaletteOpen(false);
          navigate({ to: role === "admin" ? "/admin" : "/dashboard" });
        },
      },
      ...(isAuthenticated
        ? [
            {
              id: "action-logout",
              category: "Auth" as const,
              title: "Sign Out",
              subtitle: "End current authentication session",
              icon: LogOut,
              perform: () => {
                setCommandPaletteOpen(false);
                logout();
                navigate({ to: "/" });
              },
            },
          ]
        : [
            {
              id: "action-login",
              category: "Auth" as const,
              title: "Sign In",
              subtitle: "Access college account and saved visualizers",
              icon: LogIn,
              perform: () => {
                setCommandPaletteOpen(false);
                navigate({ to: "/login" });
              },
            },
          ]),
      {
        id: "action-theme-toggle",
        category: "Theme",
        title: "Toggle Dark / Light Mode",
        subtitle: "Quickly flip visual theme appearance",
        icon: Palette,
        perform: () => {
          toggleDarkLight();
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "theme-taltrix-dark",
        category: "Theme",
        title: "Theme: Taltrix Dark",
        subtitle: "Default sleek dark cyan & purple identity",
        icon: Palette,
        perform: () => {
          setTheme("taltrix-dark");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "theme-midnight",
        category: "Theme",
        title: "Theme: Midnight",
        subtitle: "Deep pitch-black canvas with luminous blue",
        icon: Palette,
        perform: () => {
          setTheme("midnight");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "theme-deep-blue",
        category: "Theme",
        title: "Theme: Deep Blue",
        subtitle: "Rich oceanic dark blue aesthetic",
        icon: Palette,
        perform: () => {
          setTheme("deep-blue");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "theme-graphite",
        category: "Theme",
        title: "Theme: Graphite",
        subtitle: "Monochromatic carbon gray",
        icon: Palette,
        perform: () => {
          setTheme("graphite");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "theme-light",
        category: "Theme",
        title: "Theme: Light",
        subtitle: "Clean light mode for bright rooms",
        icon: Palette,
        perform: () => {
          setTheme("light");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "accent-cyan",
        category: "Theme",
        title: "Accent Color: Cyan",
        icon: Sparkles,
        perform: () => {
          setAccentColor("cyan");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "accent-[#9333ea]",
        category: "Theme",
        title: "Accent Color: Purple",
        icon: Sparkles,
        perform: () => {
          setAccentColor("purple");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "accent-[#10b981]",
        category: "Theme",
        title: "Accent Color: Emerald",
        icon: Sparkles,
        perform: () => {
          setAccentColor("emerald");
          setCommandPaletteOpen(false);
        },
      },
      {
        id: "action-settings",
        category: "Settings",
        title: "Open Global Settings",
        subtitle: "Preferences drawer and options",
        icon: Settings2,
        perform: () => {
          setCommandPaletteOpen(false);
          setSettingsModalOpen(true);
        },
      },
      {
        id: "action-shortcuts",
        category: "Settings",
        title: "Keyboard Shortcuts",
        subtitle: "View keybindings overlay (?)",
        icon: HelpCircle,
        perform: () => {
          setCommandPaletteOpen(false);
          setShortcutsModalOpen(true);
        },
      },
    ],
    [isAuthenticated, logout, navigate, role, setAccentColor, setCommandPaletteOpen, setSettingsModalOpen, setShortcutsModalOpen, setTheme, toggleDarkLight],
  );


  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter(
      (a) => a.title.toLowerCase().includes(q) || (a.subtitle && a.subtitle.toLowerCase().includes(q)),
    );
  }, [actions, query]);

  if (!commandPaletteOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[350] flex items-start justify-center bg-black/60 pt-20 backdrop-blur-md px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl overflow-hidden rounded-2xl border border-border/70 bg-surface/95 shadow-2xl backdrop-blur-xl"
        >
          {/* Search Header */}
          <div className="flex h-13 items-center gap-3 border-b border-border/70 px-4">
            <Search className="h-4 w-4 shrink-0 text-cyan-400" />
            <input
              autoFocus
              type="text"
              placeholder="Type a command or search actions... (Ctrl + K)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent font-mono text-xs text-foreground placeholder-muted-foreground outline-none"
            />
            <button
              type="button"
              onClick={() => setCommandPaletteOpen(false)}
              className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-surface/80 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-auto p-2 font-mono text-[12px]">
            {filtered.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground">No matching commands found.</div>
            ) : (
              <div className="space-y-1">
                {filtered.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={item.perform}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-cyan-500/15 hover:text-cyan-300"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 text-cyan-400" />
                      <div>
                        <div className="font-sans text-xs font-semibold text-foreground">{item.title}</div>
                        {item.subtitle ? (
                          <div className="font-sans text-[11px] text-muted-foreground">{item.subtitle}</div>
                        ) : null}
                      </div>
                    </div>
                    <span className="rounded bg-background/60 px-2 py-0.5 text-[10px] text-muted-foreground uppercase">
                      {item.category}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
