import { type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  label,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 md:py-32", className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <div
        className={cn(
          "mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-accent uppercase",
          align === "center" && "justify-center",
        )}
      >
        {index && <span className="text-muted-foreground">{index}</span>}
        <span className="h-px w-8 bg-border" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] font-semibold text-balance">{title}</h2>
      {description && (
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">{description}</p>
      )}
    </motion.header>
  );
}