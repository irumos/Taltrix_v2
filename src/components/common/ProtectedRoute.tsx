import React, { ReactNode } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types';
import { Loader2, ShieldAlert } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
  requireAuth?: boolean;
}

export function ProtectedRoute({
  children,
  allowedRoles,
  requireAuth = true,
}: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading, role } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
          <span className="font-mono text-xs text-muted-foreground">Verifying TALTRIX session...</span>
        </div>
      </div>
    );
  }

  if (requireAuth && !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md rounded-2xl border border-border/80 bg-surface/90 p-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-foreground">Sign In Required</h2>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            You must be logged in to access this area. Please sign in with your college credentials.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: '/login' })}
              className="rounded-xl bg-cyan-500 px-5 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
            >
              Go to Sign In
            </button>
            <button
              type="button"
              onClick={() => navigate({ to: '/' })}
              className="rounded-xl border border-border/80 bg-surface/60 px-5 py-2.5 font-sans text-xs font-medium text-foreground transition-all hover:bg-surface-h"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md rounded-2xl border border-rose-500/30 bg-surface/90 p-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <h2 className="mt-4 font-display text-xl font-bold text-foreground">Access Restricted</h2>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Your current role ({role.toUpperCase()}) does not have administrative permissions for this portal.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: role === 'admin' ? '/admin' : '/dashboard' })}
              className="rounded-xl bg-cyan-500 px-5 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
            >
              Return to Your Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
