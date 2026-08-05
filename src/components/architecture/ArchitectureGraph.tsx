import { motion } from "motion/react";
import { useMemo } from "react";
import { useExecution } from "@/contexts/ExecutionContext";
import { callGraph } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Architecture mode: the call graph of the program with the live execution
 * path highlighted as the trace advances.
 */
export function ArchitectureGraph() {
  const { program, step, select, selection, setHover, hover } = useExecution();
  const graph = useMemo(() => callGraph(program.steps), [program]);
  const activePath = new Set(step.stack.map((f) => f.name));

  const positions = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    const depthOf = (name: string) => {
      for (const s of program.steps) {
        const i = s.stack.findIndex((f) => f.name === name);
        if (i >= 0) return i;
      }
      return 0;
    };
    const rows = new Map<number, string[]>();
    for (const n of graph.nodes) {
      const d = depthOf(n);
      rows.set(d, [...(rows.get(d) ?? []), n]);
    }
    for (const [depth, names] of rows) {
      names.forEach((n, i) => {
        map.set(n, { x: ((i + 1) / (names.length + 1)) * 100, y: 18 + depth * 30 });
      });
    }
    return map;
  }, [graph, program]);

  const height = 24 + Math.max(...[...positions.values()].map((p) => p.y), 60);

  return (
    <div className="relative rounded-xl border border-border/60 bg-background/40 p-3" style={{ minHeight: height }}>
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        {graph.edges.map(([from, to]) => {
          const a = positions.get(from);
          const b = positions.get(to);
          if (!a || !b) return null;
          const live = activePath.has(from) && activePath.has(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={`${a.x}%`}
              y1={a.y}
              x2={`${b.x}%`}
              y2={b.y}
              stroke={live ? "var(--color-accent)" : "var(--color-border)"}
              strokeWidth={live ? 1.4 : 1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: live ? 0.9 : 0.4 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
      </svg>

      {graph.nodes.map((name) => {
        const p = positions.get(name);
        if (!p) return null;
        const live = activePath.has(name);
        const picked = selection.kind === "function" && selection.name === name;
        const hovered = hover?.kind === "frame" && hover.name === name;
        return (
          <motion.button
            key={name}
            type="button"
            data-cursor="button"
            onClick={() => select({ kind: "function", name })}
            onMouseEnter={() => setHover({ kind: "frame", name })}
            onMouseLeave={() => setHover(null)}
            style={{ left: `${p.x}%`, top: p.y }}
            animate={{ scale: live ? 1.04 : 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border px-2.5 py-1.5 font-mono text-[10px] transition-colors duration-300",
              live
                ? "border-primary/70 bg-primary/15 text-foreground shadow-[0_0_24px_-12px_var(--color-primary)]"
                : "border-border/60 bg-surface/70 text-muted-foreground",
              (picked || hovered) && "border-accent/70 text-foreground",
            )}
          >
            {name}
          </motion.button>
        );
      })}
    </div>
  );
}