import { Link } from "@tanstack/react-router";
import { Terminal, MessageSquare } from "lucide-react";
import { GOOGLE_FEEDBACK_FORM_URL } from "@/config/links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md [background-image:var(--gradient-primary)]">
            <Terminal className="h-3.5 w-3.5 text-primary-foreground" aria-hidden />
          </span>
          <span className="font-display text-[13px] font-semibold tracking-[0.32em]">TALTRIX</span>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">
          See Code Come Alive. — frontend preview, traces are illustrative.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={GOOGLE_FEEDBACK_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="button"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] text-muted-foreground hover:text-cyan-400 transition-colors uppercase"
            aria-label="Submit Feedback (opens in a new tab)"
          >
            <MessageSquare className="h-3 w-3 text-cyan-400" aria-hidden />
            <span>Feedback</span>
          </a>
          <Link
            to="/workspace"
            data-cursor="button"
            className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase"
          >
            Launch app →
          </Link>
        </div>
      </div>
    </footer>
  );
}