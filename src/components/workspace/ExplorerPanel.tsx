import { motion } from "motion/react";
import { FileCode2, FolderOpen, Code2, Layers } from "lucide-react";
import { programsByCategory } from "@/data/programs";
import { useExecution } from "@/contexts/ExecutionContext";
import { cn } from "@/lib/utils";

/** Category-driven examples drawer panel. */
export function ExplorerPanel() {
  const { programId, setProgram } = useExecution();
  const groups = programsByCategory();

  return (
    <div className="flex h-full min-h-0 flex-col bg-surface/50 border-r border-border/70">
      <div className="flex h-10 items-center justify-between border-b border-border/60 px-3.5 font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider">
        <span className="flex items-center gap-2">
          <FolderOpen className="h-4 w-4 text-cyan-400" />
          <span>Examples Explorer</span>
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-auto p-2.5 space-y-4">
        {groups.map((group) => (
          <div key={group.category} className="space-y-1">
            <div className="flex items-center gap-1.5 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-cyan-400 uppercase">
              <Code2 className="h-3 w-3 text-cyan-400/80" />
              <span>{group.category}</span>
            </div>
            <ul className="space-y-0.5">
              {group.programs.map((p) => {
                const active = p.id === programId;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      data-cursor="button"
                      onClick={() => setProgram(p.id)}
                      aria-current={active}
                      className={cn(
                        "relative flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left font-mono text-[11px] transition-all duration-200",
                        active
                          ? "text-cyan-300 font-semibold"
                          : "text-muted-foreground hover:bg-surface/80 hover:text-foreground"
                      )}
                    >
                      {active ? (
                        <motion.span
                          layoutId="explorer-active"
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                          className="absolute inset-0 -z-10 rounded-lg border border-cyan-500/40 bg-cyan-500/15 shadow-sm"
                        />
                      ) : null}
                      <FileCode2 className={cn("h-3.5 w-3.5 shrink-0", active ? "text-cyan-400" : "text-muted-foreground/60")} />
                      <span className="truncate">{p.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
