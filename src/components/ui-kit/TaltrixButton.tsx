import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { blip } from "@/lib/sound";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "text-primary-foreground shadow-[var(--shadow-elevated)] [background-image:var(--gradient-primary)] hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
        outline:
          "border border-border bg-surface/40 text-foreground backdrop-blur hover:border-accent/60 hover:bg-surface/80 hover:-translate-y-0.5",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-surface/60",
        accent:
          "bg-accent text-accent-foreground hover:brightness-110 hover:-translate-y-0.5 shadow-[0_16px_40px_-20px_var(--color-accent)]",
      },
      size: {
        sm: "h-9 px-3.5 text-[13px]",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-[15px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type TaltrixButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { sound?: boolean };

export const TaltrixButton = forwardRef<HTMLButtonElement, TaltrixButtonProps>(
  ({ className, variant, size, sound = true, onMouseEnter, onClick, ...props }, ref) => (
    <button
      ref={ref}
      data-cursor="button"
      className={cn(buttonVariants({ variant, size }), className)}
      onMouseEnter={(e) => {
        if (sound) blip("hover");
        onMouseEnter?.(e);
      }}
      onClick={(e) => {
        if (sound) blip("run");
        onClick?.(e);
      }}
      {...props}
    />
  ),
);
TaltrixButton.displayName = "TaltrixButton";