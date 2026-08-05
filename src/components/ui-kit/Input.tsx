import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const TaltrixInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      data-cursor="text"
      className={cn(
        "h-9 w-full rounded-lg border border-border/70 bg-background/60 px-3 font-mono text-[12px] text-foreground placeholder:text-muted-foreground/60",
        "transition-all duration-300 outline-none hover:border-border focus:border-accent/60 focus:bg-background/80",
        className,
      )}
      {...props}
    />
  ),
);
TaltrixInput.displayName = "TaltrixInput";
