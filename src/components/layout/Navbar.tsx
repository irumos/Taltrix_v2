import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import {
  Volume2,
  VolumeX,
  Terminal,
  Sun,
  Moon,
  Palette,
  Settings2,
  MessageSquare,
  Menu,
  X,
  User,
  LogIn,
  LayoutDashboard,
} from "lucide-react";
import { TaltrixButton } from "@/components/ui-kit/TaltrixButton";
import { blip, restoreMuted, setMuted } from "@/lib/sound";
import { useSettings } from "@/contexts/SettingsContext";
import { useAuth } from "@/contexts/AuthContext";
import { GOOGLE_FEEDBACK_FORM_URL } from "@/config/links";

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#demo" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMutedState] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, role } = useAuth();


  const {
    settings,
    toggleDarkLight,
    setSettingsModalOpen,
    openSettingsTab,
    setShortcutsModalOpen,
  } = useSettings();

  useEffect(() => setMutedState(restoreMuted()), []);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 160);
  });

  const toggleSound = () => {
    const next = !muted;
    setMutedState(next);
    setMuted(next);
    if (!next) blip("compile");
  };

  const jump = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isLight = settings.theme.id === "light";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -96 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[120]"
    >
      <nav
        className={`mx-auto flex h-14 items-center justify-between gap-2 transition-all duration-300 ease-out px-4 sm:px-6 ${
          scrolled
            ? "mt-3 max-w-[1180px] rounded-full border border-border/70 bg-surface/75 backdrop-blur-2xl shadow-xl shadow-black/25"
            : "mt-0 max-w-[1280px] border border-transparent bg-transparent backdrop-blur-none"
        }`}
        aria-label="Primary"
      >
        <a href="#top" onClick={jump("#top")} className="flex items-center gap-2.5 shrink-0" data-cursor="button">
          <span className="grid h-8 w-8 place-items-center rounded-lg [background-image:var(--gradient-primary)] shrink-0">
            <Terminal className="h-4 w-4 text-primary-foreground" aria-hidden />
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.34em] shrink-0">TALTRIX</span>
        </a>

        {/* Desktop / Tablet Navigation Items */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={jump(item.href)}
              onMouseEnter={() => blip("hover")}
              data-cursor="button"
              className="rounded-lg px-3.5 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-h/50"
            >
              {item.label}
            </a>
          ))}

          {/* Premium Feedback Navigation Link */}
          <a
            href={GOOGLE_FEEDBACK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => blip("hover")}
            data-cursor="button"
            aria-label="Submit Feedback (opens in a new tab)"
            className="group relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:bg-surface-h/60 hover:text-foreground"
          >
            <MessageSquare className="h-3.5 w-3.5 text-muted-foreground/80 transition-colors group-hover:text-cyan-400" aria-hidden />
            <span>Feedback</span>
          </a>

          <button
            type="button"
            onClick={() => setSettingsModalOpen(true)}
            onMouseEnter={() => blip("hover")}
            data-cursor="button"
            className="rounded-lg px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-h/50"
          >
            Settings
          </button>
        </div>

        {/* Landing Top-Right Toolbar */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-cursor="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-foreground hover:border-cyan-500/40 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {/* Theme Quick Toggle (Dark/Light) */}
          <button
            type="button"
            onClick={toggleDarkLight}
            data-cursor="button"
            aria-label="Toggle theme mode"
            title="Toggle Dark / Light Mode"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40"
          >
            {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>

          {/* Appearance Button */}
          <button
            type="button"
            onClick={() => openSettingsTab("appearance")}
            data-cursor="button"
            aria-label="Appearance settings"
            title="Appearance Settings"
            className="hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40"
          >
            <Palette className="h-4 w-4" />
          </button>

          {/* Global Settings */}
          <button
            type="button"
            onClick={() => setSettingsModalOpen(true)}
            data-cursor="button"
            aria-label="Global Settings"
            title="Global Settings"
            className="hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40"
          >
            <Settings2 className="h-4 w-4" />
          </button>

          {/* Keyboard Shortcuts (?) */}
          <button
            type="button"
            onClick={() => setShortcutsModalOpen(true)}
            data-cursor="button"
            aria-label="Keyboard Shortcuts"
            title="Keyboard Shortcuts (?)"
            className="hidden lg:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-xs font-bold"
          >
            ?
          </button>

          <button
            type="button"
            onClick={toggleSound}
            data-cursor="button"
            aria-pressed={!muted}
            aria-label={muted ? "Unmute interface sounds" : "Mute interface sounds"}
            className="hidden md:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-accent"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          {isAuthenticated ? (
            <Link to={role === 'admin' ? '/admin' : '/dashboard'} className="shrink-0">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-2.5 sm:px-3 py-1.5 font-sans text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/20 whitespace-nowrap"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                <span>Dashboard</span>
              </button>
            </Link>
          ) : (
            <Link to="/login" className="shrink-0">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface/60 px-2.5 sm:px-3 py-1.5 font-sans text-xs font-medium text-foreground transition-colors hover:bg-surface-h whitespace-nowrap"
              >
                <LogIn className="h-3.5 w-3.5 text-cyan-400" />
                <span>Sign In</span>
              </button>
            </Link>
          )}

          <Link to="/workspace" className="shrink-0">
            <TaltrixButton size="sm" className="whitespace-nowrap">Open Playground</TaltrixButton>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Drawer / Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 w-[calc(100%-2.5rem)] max-w-[1240px] rounded-2xl border border-border/80 bg-surface/95 p-4 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    jump(item.href)(e);
                    setMobileMenuOpen(false);
                  }}
                  onMouseEnter={() => blip("hover")}
                  data-cursor="button"
                  className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-h/60 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={GOOGLE_FEEDBACK_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                onMouseEnter={() => blip("hover")}
                data-cursor="button"
                aria-label="Submit Feedback (opens in a new tab)"
                className="flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-surface-h/60 hover:text-foreground active:scale-[0.98]"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-cyan-400" aria-hidden />
                  <span>Feedback</span>
                </div>
                <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] uppercase text-cyan-400">
                  External
                </span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSettingsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                onMouseEnter={() => blip("hover")}
                data-cursor="button"
                className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-h/60 hover:text-foreground text-left"
              >
                Settings
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}