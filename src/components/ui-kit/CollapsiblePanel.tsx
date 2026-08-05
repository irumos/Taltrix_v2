import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, GripHorizontal } from "lucide-react";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Collapsible + vertically resizable sidebar section.
 * Dragging the grip resizes; clicking the header collapses.
 */
export function CollapsiblePanel({
  title,
  icon: Icon,
  meta,
  children,
  defaultOpen = true,
  defaultHeight = 210,
  minHeight = 120,
  maxHeight = 560,
  resizable = true,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  meta?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  defaultHeight?: number;
  minHeight?: number;
  maxHeight?: number;
  resizable?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(defaultHeight);
  const start = useRef({ y: 0, h: 0 });

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      const el = e.currentTarget;
      el.setPointerCapture(e.pointerId);
      start.current = { y: e.clientY, h: height };
    },
    [height],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
      const next = start.current.h + (e.clientY - start.current.y);
      setHeight(Math.min(maxHeight, Math.max(minHeight, next)));
    },
    [maxHeight, minHeight],
  );

  return (
    <section className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        data-cursor="button"
        className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left transition-colors duration-300 hover:bg-surface/70"
      >
        <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
          {title}
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground/70">
          {meta}
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", !open && "-rotate-90")} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: resizable ? height : "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className={cn("h-full overflow-auto px-3 pb-3", !resizable && "pb-3")}>{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {open && resizable ? (
        <div
          role="separator"
          aria-orientation="horizontal"
          aria-label={`Resize ${title} panel`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          className="group flex h-3 cursor-row-resize items-center justify-center transition-colors hover:bg-surface/70"
        >
          <GripHorizontal className="h-3 w-3 text-border transition-colors group-hover:text-accent" />
        </div>
      ) : null}
    </section>
  );
}
