import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors duration-300",
  {
    variants: {
      tone: {
        neutral: "border-border/70 bg-surface/60 text-muted-foreground",
        primary: "border-primary/50 bg-primary/15 text-primary-soft",
        accent: "border-accent/50 bg-accent/12 text-accent",
        success: "border-success/40 bg-success/12 text-success",
        warning: "border-warning/40 bg-warning/12 text-warning",
        danger: "border-destructive/50 bg-destructive/12 text-destructive",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export type TaltrixBadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export function TaltrixBadge({ className, tone, ...props }: TaltrixBadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
