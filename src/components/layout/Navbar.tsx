import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Volume2, VolumeX, Terminal, Sun, Moon, Palette, Settings2, HelpCircle } from "lucide-react";
import { TaltrixButton } from "@/components/ui-kit/TaltrixButton";
import { blip, restoreMuted, setMuted } from "@/lib/sound";
import { useSettings } from "@/contexts/SettingsContext";

const NAV = [
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#demo" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMutedState] = useState(true);

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
        className={`mx-auto flex h-14 items-center justify-between gap-4 px-5 transition-all duration-300 ease-out ${
          scrolled
            ? "mt-3 max-w-[960px] rounded-full border border-border/70 bg-surface/75 backdrop-blur-2xl shadow-xl shadow-black/25 sm:px-6"
            : "mt-0 max-w-[1240px] border border-transparent bg-transparent backdrop-blur-none sm:px-8"
        }`}
        aria-label="Primary"
      >
        <a href="#top" onClick={jump("#top")} className="flex items-center gap-2.5" data-cursor="button">
          <span className="grid h-8 w-8 place-items-center rounded-lg [background-image:var(--gradient-primary)]">
            <Terminal className="h-4 w-4 text-primary-foreground" aria-hidden />
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.34em]">TALTRIX</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={jump(item.href)}
              onMouseEnter={() => blip("hover")}
              data-cursor="button"
              className="rounded-lg px-3.5 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setSettingsModalOpen(true)}
            data-cursor="button"
            className="rounded-lg px-3.5 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            Settings
          </button>
        </div>

        {/* Landing Top-Right Toolbar */}
        <div className="flex items-center gap-1.5">
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
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40"
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
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40"
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
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-xs font-bold"
          >
            ?
          </button>

          <button
            type="button"
            onClick={toggleSound}
            data-cursor="button"
            aria-pressed={!muted}
            aria-label={muted ? "Unmute interface sounds" : "Mute interface sounds"}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-accent"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>

          <Link to="/workspace">
            <TaltrixButton size="sm">Open Playground</TaltrixButton>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}