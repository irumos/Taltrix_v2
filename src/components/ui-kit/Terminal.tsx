import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ConsoleLine } from "@/types/execution";

/** Types a single line out character by character, then holds. */
function TypedLine({ line, animate }: { line: ConsoleLine; animate: boolean }) {
  const [shown, setShown] = useState(animate ? "" : line.text);

  useEffect(() => {
    if (!animate) {
      setShown(line.text);
      return;
    }
    let i = 0;
    setShown("");
    const id = setInterval(() => {
      i += 1;
      setShown(line.text.slice(0, i));
      if (i >= line.text.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [line.text, animate]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "font-mono text-[12px] leading-relaxed break-words whitespace-pre-wrap",
        line.stream === "stderr" ? "text-destructive" : "text-success",
      )}
    >
      <span className="mr-2 text-muted-foreground/50 select-none">
        {line.stream === "stderr" ? "err" : "out"}
      </span>
      {shown}
    </motion.div>
  );
}

export function Terminal({
  prompt,
  lines,
  status,
  className,
}: {
  prompt: string;
  lines: (ConsoleLine & { step?: number })[];
  status?: string;
  className?: string;
}) {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [lines.length]);

  return (
    <div
      className={cn("h-full space-y-1 overflow-auto bg-background/50 p-3 font-mono text-[12px]", className)}
      data-cursor="text"
    >
      <div className="text-muted-foreground">$ {prompt}</div>
      <AnimatePresence initial={false}>
        {lines.map((line, i) => (
          <TypedLine key={`${i}-${line.text}`} line={line} animate={i === lines.length - 1} />
        ))}
      </AnimatePresence>
      {status ? (
        <div className="pt-1 text-muted-foreground/60">
          <span className="caret">{status}</span>
        </div>
      ) : null}
      <div ref={endRef} />
    </div>
  );
}
