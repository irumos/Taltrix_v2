import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useMemo } from "react";
import { useExecution } from "@/contexts/ExecutionContext";
import { objectProfile } from "@/lib/analytics";

/** Floating inspector for a selected heap object. */
export function ObjectInspector() {
  const { selection, select, program, step, seek } = useExecution();
  const id = selection.kind === "object" ? selection.id : null;
  const profile = useMemo(() => (id ? objectProfile(program.steps, id) : null), [program, id]);
  const live = id ? step.heap.find((o) => o.id === id) : undefined;

  return (
    <AnimatePresence>
      {id && profile ? (
        <motion.aside
          key={id}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed right-4 bottom-28 z-40 w-[268px] rounded-xl border border-border/70 bg-popover/95 p-3 shadow-[var(--shadow-elevated)] backdrop-blur"
        >
          <header className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              object
            </span>
            <button
              type="button"
              data-cursor="button"
              aria-label="Close object inspector"
              onClick={() => select({ kind: "none" })}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </header>

          <p className="mt-1 font-mono text-[11px] text-accent">{id}</p>
          <p className="font-mono text-[10px] text-muted-foreground">
            {live?.type ?? "collected"} · {live?.label ?? "—"}
          </p>

          <dl className="mt-2.5 space-y-1 font-mono text-[10px]">
            {[
              ["Value", live?.value ?? "—"],
              ["References", (live?.refs ?? []).join(", ") || "none"],
              ["Referenced by", profile.referencedBy.join(", ") || "none"],
              ["Created at", `step ${profile.createdAt + 1}`],
              ["Destroyed at", profile.destroyedAt === null ? "still live" : `step ${profile.destroyedAt + 1}`],
              ["Memory size", `${profile.sizeBytes} B`],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-3">
                <dt className="shrink-0 text-muted-foreground/70">{k}</dt>
                <dd className="min-w-0 truncate text-right text-foreground/90">{v}</dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            data-cursor="button"
            onClick={() => seek(profile.createdAt)}
            className="mt-3 w-full rounded-lg border border-border/60 py-1.5 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:border-accent/50 hover:text-foreground"
          >
            jump to allocation
          </button>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}