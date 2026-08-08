import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';

interface NavigationHistoryContextValue {
  previousPath: string;
  getBackLabel: () => string;
  navigateBack: (customFallBack?: string) => void;
}

const NavigationHistoryContext = createContext<NavigationHistoryContextValue | undefined>(undefined);

export function NavigationHistoryProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  const [previousPath, setPreviousPath] = useState<string>('/');

  useEffect(() => {
    const current = location.pathname;

    // Check if query param 'from' exists
    const searchParams = new URLSearchParams(location.search);
    const fromParam = searchParams.get('from');

    if (fromParam) {
      setPreviousPath(fromParam);
      return;
    }

    setHistoryStack((prev) => {
      // Don't duplicate consecutive identical paths or record workspace as previous if we're in workspace
      if (prev.length > 0 && prev[prev.length - 1] === current) return prev;
      if (current === '/workspace') {
        const lastNonWorkspace = [...prev].reverse().find((p) => p !== '/workspace');
        if (lastNonWorkspace) {
          setPreviousPath(lastNonWorkspace);
        }
        return prev;
      }
      const updated = [...prev, current].slice(-10); // Keep last 10
      if (updated.length >= 2) {
        setPreviousPath(updated[updated.length - 2] || "/");
      }
      return updated;
    });
  }, [location.pathname, location.search]);

  const getBackLabel = () => {
    if (previousPath.includes('/dashboard')) return '← Return to Dashboard';
    if (previousPath.includes('/admin')) return '← Return to Admin';
    if (previousPath === '/' || previousPath === '') return '← Return';
    return '← Back';
  };

  const navigateBack = (customFallBack = '/') => {
    const target = previousPath || customFallBack;
    navigate({ to: target as any });
  };

  return (
    <NavigationHistoryContext.Provider value={{ previousPath, getBackLabel, navigateBack }}>
      {children}
    </NavigationHistoryContext.Provider>
  );
}

export function useNavigationHistory() {
  const context = useContext(NavigationHistoryContext);
  if (!context) {
    throw new Error('useNavigationHistory must be used within NavigationHistoryProvider');
  }
  return context;
}
