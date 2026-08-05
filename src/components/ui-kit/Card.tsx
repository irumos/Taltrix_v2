import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export type CardProps = HTMLMotionProps<"div"> & { interactive?: boolean };

/** Surface card with an optional hover-lift. Morphs smoothly via layout animations. */
export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 300, damping: 32 }}
      {...(interactive ? { whileHover: { y: -3 } } : {})}
      className={cn(
        "panel p-4 transition-colors duration-300",
        interactive && "cursor-pointer hover:border-accent/50",
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase", className)}
      {...props}
    />
  );
}
