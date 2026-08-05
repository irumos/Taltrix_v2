import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { HeapObject } from "@/types/execution";

type Edge = { key: string; x1: number; y1: number; x2: number; y2: number };

/**
 * Animated heap view. Objects keep a stable slot (sorted by id) so they never
 * jump between steps; reference arrows are measured from the live DOM.
 */
export function MemoryGraph({
  objects,
  className,
  onSelect,
  onHover,
  highlighted,
}: {
  objects: HeapObject[];
  className?: string;
  onSelect?: (id: string) => void;
  onHover?: (id: string | null) => void;
  highlighted?: string | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLDivElement>());
  const [edges, setEdges] = useState<Edge[]>([]);

  const sorted = [...objects].sort((a, b) => a.id.localeCompare(b.id));

  const measure = useCallback(() => {
    const host = containerRef.current;
    if (!host) return;
    const base = host.getBoundingClientRect();
    const next: Edge[] = [];
    for (const o of objects) {
      for (const ref of o.refs ?? []) {
        const from = nodeRefs.current.get(o.id);
        const to = nodeRefs.current.get(ref);
        if (!from || !to) continue;
        const a = from.getBoundingClientRect();
        const b = to.getBoundingClientRect();
        next.push({
          key: `${o.id}->${ref}`,
          x1: a.left - base.left + a.width / 2,
          y1: a.top - base.top,
          x2: b.left - base.left + b.width / 2,
          y2: b.top - base.top + b.height,
        });
      }
    }
    setEdges(next);
  }, [objects]);

  useLayoutEffect(() => {
    const id = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(id);
  }, [measure]);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined" || !containerRef.current) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <marker id="taltrix-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--color-accent)" opacity="0.8" />
          </marker>
        </defs>
        <AnimatePresence>
          {edges.map((e) => (
            <motion.path
              key={e.key}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              d={`M ${e.x1} ${e.y1} C ${e.x1} ${e.y1 - 26}, ${e.x2} ${e.y2 + 26}, ${e.x2} ${e.y2}`}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={1}
              markerEnd="url(#taltrix-arrow)"
            />
          ))}
        </AnimatePresence>
      </svg>

      <div className="relative grid grid-cols-2 gap-2 xl:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {sorted.map((o) => {
            const related =
              highlighted === o.id || (highlighted ? (o.refs ?? []).includes(highlighted) : false);
            return (
            <motion.div
              key={o.id}
              layout
              ref={(el) => {
                if (el) nodeRefs.current.set(o.id, el);
                else nodeRefs.current.delete(o.id);
              }}
              onClick={() => onSelect?.(o.id)}
              onMouseEnter={() => onHover?.(o.id)}
              onMouseLeave={() => onHover?.(null)}
              data-cursor={onSelect ? "button" : undefined}
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "rounded-xl border border-border/60 bg-background/60 p-2.5 font-mono text-[10px] transition-colors duration-300 hover:border-accent/50",
                related && "border-accent/70",
                onSelect && "cursor-pointer",
              )}
            >
              <div className="truncate text-muted-foreground/70">{o.id}</div>
              <div className="mt-1 truncate text-accent">{o.type}</div>
              <div className="mt-0.5 truncate text-foreground/85">{o.value}</div>
              <div className="mt-1 truncate text-[9px] text-muted-foreground/60">{o.label}</div>
            </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
