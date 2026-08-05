import { AnimatePresence, motion } from "motion/react";
import { Command, HelpCircle, X } from "lucide-react";
import { Modal } from "@/components/ui-kit";
import { useSettings } from "@/contexts/SettingsContext";

const SHORTCUT_GROUPS = [
  {
    category: "General & Navigation",
    shortcuts: [
      { keys: ["Ctrl", "K"], desc: "Command Palette" },
      { keys: ["?"], desc: "Keyboard Shortcuts Overlay" },
      { keys: ["Esc"], desc: "Close Modals / Drawers" },
    ],
  },
  {
    category: "Execution Controls",
    shortcuts: [
      { keys: ["Space"], desc: "Toggle Play / Pause" },
      { keys: ["→"], desc: "Step Forward" },
      { keys: ["←"], desc: "Step Backward" },
      { keys: ["R"], desc: "Restart Execution" },
    ],
  },
  {
    category: "Workspace & View",
    shortcuts: [
      { keys: ["Tab"], desc: "Switch Inspection Views" },
      { keys: ["Cmd", "P"], desc: "Presentation Mode" },
    ],
  },
];

export function ShortcutsModal() {
  const { shortcutsModalOpen, setShortcutsModalOpen } = useSettings();

  return (
    <Modal
      open={shortcutsModalOpen}
      onOpenChange={setShortcutsModalOpen}
      title="TALTRIX Keyboard Shortcuts"
      description="Quickly control execution and navigate the IDE."
    >
      <div className="space-y-4 font-mono text-[12px]">
        {SHORTCUT_GROUPS.map((group) => (
          <div key={group.category} className="space-y-2">
            <h4 className="font-sans text-xs font-semibold text-cyan-300 uppercase tracking-wider">
              {group.category}
            </h4>
            <div className="space-y-1.5">
              {group.shortcuts.map((sc) => (
                <div
                  key={sc.desc}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 px-3 py-2"
                >
                  <span className="font-sans text-xs text-foreground">{sc.desc}</span>
                  <div className="flex items-center gap-1">
                    {sc.keys.map((k) => (
                      <kbd
                        key={k}
                        className="rounded border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-cyan-300 shadow-sm"
                      >
                        {k}
                      </kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
