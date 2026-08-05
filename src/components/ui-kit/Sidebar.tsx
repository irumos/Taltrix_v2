import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Animated collapsible rail used for both workspace side regions. */
export function Sidebar({
  side = "right",
  collapsed = false,
  width = 320,
  railWidth = 48,
  rail,
  children,
  className,
}: {
  side?: "left" | "right";
  collapsed?: boolean;
  width?: number;
  railWidth?: number;
  rail?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.aside
      animate={{ width: collapsed ? railWidth : width }}
      initial={false}
      transition={{ type: "spring", stiffness: 260, damping: 32 }}
      className={cn(
        "hidden min-h-0 shrink-0 flex-col overflow-hidden bg-surface/60 lg:flex",
        side === "right" ? "border-l border-border/70" : "border-r border-border/70",
        className,
      )}
    >
      {collapsed ? (
        <div className="flex flex-1 flex-col items-center gap-3 py-3">{rail}</div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col overflow-auto">{children}</div>
      )}
    </motion.aside>
  );
}
