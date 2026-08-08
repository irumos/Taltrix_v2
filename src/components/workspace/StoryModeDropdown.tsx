import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  GraduationCap,
  Puzzle,
  Zap,
  School,
  ChevronDown,
  Check,
} from 'lucide-react';
import { ExplanationMode } from '@/services/executionStoryService';
import { blip } from '@/lib/sound';

export interface StoryModeOption {
  id: ExplanationMode;
  label: string;
  desc: string;
  icon: any;
  accent: string;
}

export const STORY_MODES: StoryModeOption[] = [
  {
    id: 'beginner',
    label: 'Beginner',
    desc: 'Simple explanations for new programmers.',
    icon: GraduationCap,
    accent: 'text-cyan-400',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    desc: 'Balanced technical explanations.',
    icon: Puzzle,
    accent: 'text-purple-400',
  },
  {
    id: 'advanced',
    label: 'Advanced',
    desc: 'Detailed execution and runtime explanations.',
    icon: Zap,
    accent: 'text-amber-400',
  },
  {
    id: 'professor',
    label: 'Professor',
    desc: 'Formal teaching-oriented explanations.',
    icon: School,
    accent: 'text-emerald-400',
  },
];

interface StoryModeDropdownProps {
  value: ExplanationMode;
  onChange: (mode: ExplanationMode) => void;
}

export function StoryModeDropdown({ value, onChange }: StoryModeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentMode = STORY_MODES.find((m) => m.id === value) ?? STORY_MODES[0]!;
  const CurrentIcon = currentMode.icon;

  const handleSelect = (modeId: ExplanationMode) => {
    blip('hover');
    onChange(modeId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block font-sans text-xs">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => {
          blip('hover');
          setIsOpen((prev) => !prev);
        }}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Learning Level Mode"
        className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface/90 px-3 py-1.5 font-semibold text-foreground shadow-sm transition-all hover:bg-surface-h hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
      >
        <CurrentIcon className={`h-4 w-4 ${currentMode.accent}`} />
        <span>{currentMode.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Glassmorphism Popover Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            role="listbox"
            aria-label="Learning Modes"
            className="absolute right-0 top-full mt-2 z-[250] w-72 sm:w-80 rounded-2xl border border-border/80 bg-surface/95 p-2 shadow-2xl backdrop-blur-2xl"
          >
            <div className="px-3 py-2 border-b border-border/50 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Select Learning Level
            </div>

            <div className="mt-1 space-y-1">
              {STORY_MODES.map((mode) => {
                const Icon = mode.icon;
                const selected = mode.id === value;

                return (
                  <button
                    key={mode.id}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => handleSelect(mode.id)}
                    className={`group flex w-full items-start justify-between rounded-xl p-2.5 text-left transition-all ${
                      selected
                        ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 shadow-sm'
                        : 'text-muted-foreground hover:bg-surface-h/60 hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div
                        className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border p-1 transition-all ${
                          selected
                            ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                            : 'bg-background/60 border-border/60 text-muted-foreground group-hover:border-cyan-500/30 group-hover:text-foreground'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-sans text-xs font-bold text-foreground group-hover:text-cyan-300 transition-colors">
                          {mode.label}
                        </div>
                        <p className="mt-0.5 font-sans text-[11px] leading-relaxed text-muted-foreground/80 line-clamp-2">
                          {mode.desc}
                        </p>
                      </div>
                    </div>

                    {selected && <Check className="h-4 w-4 text-cyan-400 shrink-0 ml-2 mt-1" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
