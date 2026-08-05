import { useState, useEffect } from "react";
import { Sparkles, Code2, Play, Eye } from "lucide-react";
import { Modal, TaltrixButton } from "@/components/ui-kit";

const LOCAL_STORAGE_KEY = "taltrix_ftue_dismissed";

export function FtueWalkthrough() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    setOpen(false);
  };

  const steps = [
    {
      icon: Code2,
      title: "Step 1: Choose an example",
      description: "Pick an algorithm or data structure example from the left sidebar to start.",
    },
    {
      icon: Play,
      title: "Step 2: Press Run Visualization",
      description: "Click the primary Run Visualization button on the toolbar.",
    },
    {
      icon: Eye,
      title: "Step 3: Watch your code execute",
      description: "Observe variables, function calls, memory, and step explanations in real time.",
    },
  ];

  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      title="Welcome to Code Playground"
      description="Learn how programs execute step by step with interactive visual feedback."
    >
      <div className="space-y-4 font-mono text-[12px]">
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex items-start gap-3.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 transition-all hover:border-cyan-500/50"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/20 text-cyan-300">
                <s.icon className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold text-foreground">{s.title}</h4>
                <p className="mt-0.5 font-sans text-[11px] leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border/60 pt-4 font-sans">
          <button
            type="button"
            onClick={handleDismiss}
            className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Skip
          </button>

          <TaltrixButton size="sm" variant="primary" onClick={handleDismiss}>
            <span>Start</span>
          </TaltrixButton>
        </div>
      </div>
    </Modal>
  );
}
