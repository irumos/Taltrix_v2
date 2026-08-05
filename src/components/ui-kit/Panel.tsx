import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Panel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("panel", className)} {...props} />;
}

export function PanelHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 border-b border-border/70 px-4 py-2.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase",
        className,
      )}
      {...props}
    />
  );
}