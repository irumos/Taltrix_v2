import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
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
  LogIn,
  LayoutDashboard,
  ChevronDown,
  Activity,
  Variable,
  Layers,
  BookOpen,
} from "lucide-react";
import { TaltrixButton } from "@/components/ui-kit/TaltrixButton";
import { blip, restoreMuted, setMuted } from "@/lib/sound";
import { useSettings } from "@/contexts/SettingsContext";
import { useAuth } from "@/contexts/AuthContext";
import { GOOGLE_FEEDBACK_FORM_URL } from "@/config/links";

const EXPLORE_ITEMS = [
  {
    icon: Activity,
    title: "Execution Visualization",
    desc: "Follow your code step by step.",
    href: "#watch-every-step",
  },
  {
    icon: Variable,
    title: "Variables & Memory",
    desc: "See program state change.",
    href: "#runtime-state",
  },
  {
    icon: Layers,
    title: "Function Calls",
    desc: "Follow the call stack.",
    href: "#runtime-state",
  },
  {
    icon: BookOpen,
    title: "Execution Story",
    desc: "Understand what happened at every step.",
    href: "#story",
  },
];

const LEARN_ITEMS = [
  {
    emoji: "🎓",
    title: "Beginner",
    desc: "Simple explanations.",
    href: "#learning-styles",
  },
  {
    emoji: "🧩",
    title: "Intermediate",
    desc: "Balanced technical detail.",
    href: "#learning-styles",
  },
  {
    emoji: "⚡",
    title: "Advanced",
    desc: "Deep execution insights.",
    href: "#learning-styles",
  },
  {
    emoji: "👨‍🏫",
    title: "Professor",
    desc: "Teaching-focused explanations.",
    href: "#learning-styles",
  },
];

export function Navbar() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMutedState] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"explore" | "learn" | null>(null);

  const { isAuthenticated, role, requireAuth } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    settings,
    toggleDarkLight,
    setSettingsModalOpen,
    openSettingsTab,
    setShortcutsModalOpen,
  } = useSettings();

  useEffect(() => setMutedState(restoreMuted()), []);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 160);
    if (y > prev && y > 160) setActiveDropdown(null);
  });

  const toggleSound = () => {
    const next = !muted;
    setMutedState(next);
    setMuted(next);
    if (!next) blip("compile");
  };

  const jump = (href: string) => (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isLight = settings.theme.id === "light";
  const dashboardPath = role === "admin" ? "/admin" : "/dashboard";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -96 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[120]"
    >
      <nav
        ref={dropdownRef}
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
        <div className="hidden items-center gap-1 md:flex relative">
          {/* Explore Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "explore" ? null : "explore")}
              onMouseEnter={() => blip("hover")}
              aria-expanded={activeDropdown === "explore"}
              aria-haspopup="true"
              data-cursor="button"
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${
                activeDropdown === "explore"
                  ? "bg-surface-h text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-h/50"
              }`}
            >
              <span>Explore</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "explore" ? "rotate-180 text-cyan-400" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "explore" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-border/80 bg-surface/95 p-2 backdrop-blur-2xl shadow-2xl z-[150]"
                >
                  <div className="space-y-1">
                    {EXPLORE_ITEMS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={jump(item.href)}
                          onMouseEnter={() => blip("hover")}
                          className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface-h/70 group"
                        >
                          <div className="grid h-8 w-8 place-items-center rounded-lg border border-border/60 bg-surface-h/40 text-muted-foreground group-hover:border-cyan-500/40 group-hover:text-cyan-400 shrink-0 mt-0.5">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-foreground group-hover:text-cyan-300">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Learn Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "learn" ? null : "learn")}
              onMouseEnter={() => blip("hover")}
              aria-expanded={activeDropdown === "learn"}
              aria-haspopup="true"
              data-cursor="button"
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${
                activeDropdown === "learn"
                  ? "bg-surface-h text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-h/50"
              }`}
            >
              <span>Learn</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "learn" ? "rotate-180 text-cyan-400" : ""}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "learn" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-border/80 bg-surface/95 p-2 backdrop-blur-2xl shadow-2xl z-[150]"
                >
                  <div className="space-y-1">
                    {LEARN_ITEMS.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={jump(item.href)}
                        onMouseEnter={() => blip("hover")}
                        className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface-h/70 group"
                      >
                        <span className="text-xl shrink-0 mt-0.5">{item.emoji}</span>
                        <div>
                          <div className="text-xs font-semibold text-foreground group-hover:text-cyan-300">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

          {/* Settings Trigger */}
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

          {/* Auth State Button: Sign In / Sign Up (if signed out) vs Dashboard (if signed in) */}
          {isAuthenticated ? (
            <Link to={dashboardPath} className="shrink-0">
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
                <span>Sign In / Sign Up</span>
              </button>
            </Link>
          )}

          {/* Primary Navbar CTA: Launch Workspace (Auth Protected) */}
          <TaltrixButton
            size="sm"
            onClick={() => {
              requireAuth(() => navigate({ to: "/workspace" }));
            }}
            className="whitespace-nowrap shrink-0"
          >
            Launch Workspace
          </TaltrixButton>
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
            <div className="flex flex-col gap-2">
              <div className="border-b border-border/60 pb-2 mb-1">
                <div className="px-3 py-1 text-[11px] font-mono font-semibold uppercase text-cyan-400 tracking-wider">
                  Explore
                </div>
                {EXPLORE_ITEMS.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={jump(item.href)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"
                  >
                    <span>{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </a>
                ))}
              </div>

              <div className="border-b border-border/60 pb-2 mb-1">
                <div className="px-3 py-1 text-[11px] font-mono font-semibold uppercase text-cyan-400 tracking-wider">
                  Learn
                </div>
                {LEARN_ITEMS.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={jump(item.href)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"
                  >
                    <span>{item.emoji} {item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </a>
                ))}
              </div>

              <a
                href={GOOGLE_FEEDBACK_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-cyan-400" />
                  <span>Feedback</span>
                </div>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSettingsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-h/60 hover:text-foreground text-left"
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