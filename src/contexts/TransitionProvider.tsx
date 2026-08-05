import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";

interface TransitionContextValue {
  isTransitioning: boolean;
  launchWorkspace: () => void;
  exitWorkspace: () => void;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const launchWorkspace = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate({ to: "/workspace" });
      setTimeout(() => setIsTransitioning(false), 350);
    }, 150);
  }, [navigate]);

  const exitWorkspace = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate({ to: "/" });
      setTimeout(() => setIsTransitioning(false), 350);
    }, 150);
  }, [navigate]);

  const value = useMemo<TransitionContextValue>(
    () => ({
      isTransitioning,
      launchWorkspace,
      exitWorkspace,
    }),
    [isTransitioning, launchWorkspace, exitWorkspace],
  );

  return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>;
}

export function useTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("useTransition must be used inside <TransitionProvider>");
  return ctx;
}
