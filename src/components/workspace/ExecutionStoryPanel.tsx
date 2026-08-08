import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Brain,
  Sparkles,
  ArrowRight,
  History,
  Volume2,
  VolumeX,
  Play,
  Layers,
  Variable,
  Boxes,
  Activity,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Terminal,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { useExecution } from '@/contexts/ExecutionContext';
import { ExecutionStoryService, ExplanationMode } from '@/services/executionStoryService';
import { useStorySpeech } from '@/hooks/use-story-speech';
import { blip } from '@/lib/sound';

const MODES: { id: ExplanationMode; label: string; desc: string }[] = [
  { id: 'beginner', label: 'Beginner', desc: 'Simple English, friendly teacher style' },
  { id: 'intermediate', label: 'Intermediate', desc: 'Step detail & variable scope' },
  { id: 'advanced', label: 'Advanced', desc: 'Memory addresses & control flow' },
  { id: 'professor', label: 'Professor', desc: 'Formal computer science terminology' },
];

import { StoryModeDropdown } from './StoryModeDropdown';

const STORAGE_KEY = 'taltrix_execution_story_mode';

export function ExecutionStoryPanel() {
  const { step, index, program, seek, select, setHover } = useExecution();
  const { speak, stop, isSpeaking, supported } = useStorySpeech();

  const [explanationMode, setExplanationMode] = useState<ExplanationMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && ['beginner', 'intermediate', 'advanced', 'professor'].includes(saved)) {
        return saved as ExplanationMode;
      }
    }
    return 'beginner';
  });

  const handleModeChange = (newMode: ExplanationMode) => {
    setExplanationMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newMode);
    }
  };

  const [showHistory, setShowHistory] = useState(false);

  const totalSteps = program.steps.length;
  const prevStep = index > 0 ? program.steps[index - 1] : undefined;
  const nextStep = index < totalSteps - 1 ? program.steps[index + 1] : undefined;

  // Generate dynamic story payload for current step
  const storyPayload = useMemo(
    () =>
      ExecutionStoryService.generateStory(
        step,
        index,
        totalSteps,
        prevStep,
        nextStep,
        explanationMode
      ),
    [step, index, totalSteps, prevStep, nextStep, explanationMode]
  );

  const handleToggleVoice = () => {
    blip('hover');
    if (isSpeaking) {
      stop();
    } else {
      speak(`${storyPayload.title}. ${storyPayload.story}`);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'start':
        return <Play className="h-4 w-4 text-cyan-400" />;
      case 'end':
        return <CheckCircle2 className="h-4 w-4 text-emerald-400" />;
      case 'recursion':
        return <RotateCcw className="h-4 w-4 text-purple-400" />;
      case 'function_call':
        return <Layers className="h-4 w-4 text-purple-400" />;
      case 'return':
        return <ArrowRight className="h-4 w-4 text-cyan-400 rotate-180" />;
      case 'assignment':
        return <Variable className="h-4 w-4 text-cyan-400" />;
      case 'condition':
        return <Sparkles className="h-4 w-4 text-amber-400" />;
      case 'loop':
        return <RotateCcw className="h-4 w-4 text-emerald-400" />;
      case 'print':
        return <Terminal className="h-4 w-4 text-cyan-400" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-rose-400" />;
      default:
        return <Activity className="h-4 w-4 text-cyan-400" />;
    }
  };

  // Empty state before execution
  if (totalSteps === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center space-y-3 font-sans text-xs">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-lg">
          <Brain className="h-6 w-6" />
        </div>
        <h3 className="font-display text-sm font-bold text-foreground">Execution Story</h3>
        <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
          Run your program to watch the execution story unfold step by step.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full space-y-4 font-sans text-xs">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Brain className="h-3.5 w-3.5" />
          </span>
          <span className="font-display text-xs font-bold text-foreground">Execution Story</span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Premium Custom Mode Dropdown */}
          <StoryModeDropdown value={explanationMode} onChange={handleModeChange} />

          {/* Voice Read Aloud */}
          {supported && (
            <button
              type="button"
              onClick={handleToggleVoice}
              title={isSpeaking ? 'Stop Reading' : 'Read Story Aloud'}
              className={`rounded-lg p-1.5 border transition-colors ${
                isSpeaking
                  ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300 animate-pulse'
                  : 'border-border/70 bg-background/40 text-muted-foreground hover:text-foreground'
              }`}
            >
              {isSpeaking ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          )}

          {/* History Drawer Toggle */}
          <button
            type="button"
            onClick={() => {
              blip('hover');
              setShowHistory(!showHistory);
            }}
            title={showHistory ? 'Hide Story History' : 'Show Execution History'}
            className={`rounded-lg p-1.5 border transition-colors ${
              showHistory
                ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                : 'border-border/70 bg-background/40 text-muted-foreground hover:text-foreground'
            }`}
          >
            <History className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Main Narrative Card or Step History */}
      <AnimatePresence mode="wait">
        {showHistory ? (
          <motion.div
            key="history_view"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="space-y-3 flex-1 overflow-y-auto pr-1"
          >
            <div className="flex items-center justify-between border-b border-border/50 pb-2">
              <span className="font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider">
                Execution Story History
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                Step {index + 1} of {totalSteps}
              </span>
            </div>

            <div className="space-y-2">
              {program.steps.map((st, idx) => {
                const isCurrent = idx === index;
                const isPast = idx < index;
                const histStory = ExecutionStoryService.generateStory(
                  st,
                  idx,
                  totalSteps,
                  idx > 0 ? program.steps[idx - 1] : undefined,
                  idx < totalSteps - 1 ? program.steps[idx + 1] : undefined,
                  explanationMode
                );

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      blip('hover');
                      // Jump to step via select or index
                      seek(idx);
                    }}
                    className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                      isCurrent
                        ? 'border-cyan-500/50 bg-cyan-500/10 text-foreground font-semibold shadow-md'
                        : isPast
                        ? 'border-border/50 bg-surface/40 opacity-75 hover:opacity-100 hover:border-cyan-500/30'
                        : 'border-border/30 bg-background/20 opacity-40 hover:opacity-75'
                    }`}
                  >
                    <div className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-background/60 text-cyan-400 font-mono text-[10px] font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-sans text-xs font-semibold text-foreground truncate">
                          {histStory.title}
                        </span>
                        <span className="font-mono text-[10px] text-cyan-400 shrink-0">
                          Line {st.line}
                        </span>
                      </div>
                      <p className="mt-0.5 font-sans text-[11px] text-muted-foreground line-clamp-1">
                        {histStory.story}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`story_${index}_${explanationMode}`}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="space-y-4"
          >
            {/* Step Badge & Title */}
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-surface/90 to-purple-950/20 p-4 space-y-2 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    {getCategoryIcon(storyPayload.stepCategory)}
                    <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                    Step {index + 1} of {totalSteps}
                  </span>
                </div>
                <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300 border border-cyan-500/20">
                  Line {step.line}
                </span>
              </div>

              <h3 className="font-display text-sm font-bold text-foreground pt-1">
                {storyPayload.title}
              </h3>
            </div>

            {/* Narrative Explanation Box */}
            <div className="rounded-2xl border border-border/80 bg-surface/80 p-4 space-y-3 shadow-lg">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" /> What Happened?
                </span>
                <p className="mt-1 text-xs text-foreground leading-relaxed">{storyPayload.story}</p>
              </div>

              <div className="pt-2 border-t border-border/60">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <BookOpen className="h-3 w-3" /> Why Did It Happen?
                </span>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {storyPayload.why}
                </p>
              </div>
            </div>

            {/* Variable Changes Box */}
            {storyPayload.changedVariables.length > 0 && (
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4 space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Variable className="h-3 w-3" /> Variable Updates on This Step
                </span>
                <div className="space-y-1.5 pt-1 font-mono text-xs">
                  {storyPayload.changedVariables.map((v) => (
                    <div
                      key={v.name}
                      className="flex items-center justify-between rounded-lg bg-background/60 px-3 py-1.5 border border-cyan-500/20"
                    >
                      <span className="font-bold text-foreground">{v.name}</span>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-muted-foreground">{v.oldVal}</span>
                        <ArrowRight className="h-3 w-3 text-cyan-400" />
                        <span className="font-bold text-cyan-300">{v.newVal}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Step Preview */}
            <div className="rounded-2xl border border-border/70 bg-background/40 p-3 flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase">Next</span>
                <span className="text-muted-foreground text-[11px]">
                  {storyPayload.nextStepPreview}
                </span>
              </div>
              <ChevronRight className="h-4 w-4 text-cyan-400 shrink-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
