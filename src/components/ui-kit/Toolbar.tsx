import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Toolbar({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="toolbar"
      className={cn(
        "flex h-12 shrink-0 items-center gap-2 border-b border-border/70 bg-surface/90 px-3 backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

export function ToolbarGroup({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-1.5", className)} {...props} />;
}

export function ToolbarDivider() {
  return <span aria-hidden className="mx-1 h-5 w-px shrink-0 bg-border/70" />;
}
