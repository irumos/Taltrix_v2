import { AlertTriangle, RotateCcw } from "lucide-react";
import { Modal, TaltrixButton } from "@/components/ui-kit";

export function ConfirmResetModal({
  open,
  onOpenChange,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Restore Default Settings"
      description="Are you sure you want to reset all preferences to defaults?"
    >
      <div className="space-y-4 font-mono text-[12px]">
        <div className="flex items-center gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3.5 text-amber-200">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-400" />
          <p className="text-[11px] leading-relaxed">
            This action will reset your theme, editor font sizes, sound volumes, and layout options back to initial TALTRIX defaults.
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-border/60 pt-3">
          <TaltrixButton size="sm" variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </TaltrixButton>
          <TaltrixButton
            size="sm"
            variant="primary"
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
            className="bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30"
          >
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
            <span>Confirm Reset</span>
          </TaltrixButton>
        </div>
      </div>
    </Modal>
  );
}
