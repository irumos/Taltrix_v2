import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Lock, X, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { blip } from "@/lib/sound";

export function AuthRequiredModal() {
  const navigate = useNavigate();
  const { authModalOpen, setAuthModalOpen } = useAuth();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && authModalOpen) {
        setAuthModalOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [authModalOpen, setAuthModalOpen]);

  const handleSignIn = () => {
    blip("run");
    setAuthModalOpen(false);
    navigate({ to: "/login" });
  };

  const handleClose = () => {
    blip("hover");
    setAuthModalOpen(false);
  };

  return (
    <AnimatePresence>
      {authModalOpen && (
        <div
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
          aria-describedby="auth-modal-desc"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border/80 bg-surface/90 p-6 sm:p-7 shadow-2xl backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:bg-surface-h hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/10">
                <Lock className="h-6 w-6" />
              </div>

              <h2 id="auth-modal-title" className="font-display text-xl font-bold text-foreground">
                Sign in required
              </h2>

              <p id="auth-modal-desc" className="mt-2 font-sans text-xs text-muted-foreground leading-relaxed">
                Sign in or create an account to launch the TALTRIX workspace.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500 px-4 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-[0.98]"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Sign In / Sign Up</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="flex flex-1 items-center justify-center rounded-xl border border-border/80 bg-surface/60 px-4 py-2.5 font-sans text-xs font-medium text-foreground transition-all hover:bg-surface-h active:scale-[0.98]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
