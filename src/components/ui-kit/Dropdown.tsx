import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DropdownOption<T extends string> {
  value: T;
  label: string;
  hint?: string;
}

/** Small, keyboard-accessible select used for the language picker and speed menu. */
export function Dropdown<T extends string>({
  value,
  options,
  onChange,
  label,
  className,
}: {
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
  label?: string;
  className?: string;
}) {
  const active = options.find((o) => o.value === value);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        data-cursor="button"
        aria-label={label}
        className={cn(
          "inline-flex h-8 items-center gap-2 rounded-lg border border-border/70 bg-surface/60 px-2.5 font-mono text-[11px] text-foreground",
          "transition-all duration-300 hover:border-accent/50 hover:bg-surface data-[state=open]:border-accent/60",
          className,
        )}
      >
        {active?.label ?? value}
        <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={6}
          align="start"
          className="z-50 min-w-[170px] rounded-xl border border-border/70 bg-popover p-1 shadow-[var(--shadow-elevated)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
        >
          {options.map((o) => (
            <DropdownMenu.Item
              key={o.value}
              onSelect={() => onChange(o.value)}
              data-cursor="button"
              className="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-2.5 py-2 font-mono text-[11px] text-muted-foreground outline-none transition-colors data-[highlighted]:bg-surface data-[highlighted]:text-foreground"
            >
              <span>{o.label}</span>
              {o.value === value ? (
                <Check className="h-3 w-3 text-accent" />
              ) : o.hint ? (
                <span className="text-[10px] opacity-60">{o.hint}</span>
              ) : null}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
