import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import {
  AuthSession,
  LoginCredentials,
  PasswordChangePayload,
  SignupPayload,
  UserProfile,
  UserRole,
} from '@/types';
import { AuthService } from '@/services/authService';
import { useNotifications } from './NotificationContext';

interface AuthContextValue {
  user: UserProfile | null;
  session: AuthSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  role: UserRole;
  login: (credentials: LoginCredentials) => Promise<AuthSession>;
  signup: (payload: SignupPayload) => Promise<AuthSession>;
  guestLogin: () => AuthSession;
  logout: () => void;
  updateProfile: (updates: Partial<UserProfile>) => Promise<UserProfile>;
  changePassword: (payload: PasswordChangePayload) => Promise<boolean>;
  requestPasswordReset: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { notify } = useNotifications();

  // Auto restore session on page reload
  useEffect(() => {
    try {
      const restored = AuthService.getPersistedSession();
      if (restored) {
        setSession(restored);
      }
    } catch (e) {
      console.error('Failed to restore authentication session:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      setIsLoading(true);
      try {
        const newSession = await AuthService.login(credentials);
        setSession(newSession);
        notify('success', 'Sign In Successful', `Welcome back, ${newSession.user.name}!`);
        return newSession;
      } catch (err: any) {
        notify('error', 'Authentication Failed', err.message || 'Invalid college email or password.');
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [notify]
  );

  const signup = useCallback(
    async (payload: SignupPayload) => {
      setIsLoading(true);
      try {
        const newSession = await AuthService.signup(payload);
        setSession(newSession);
        notify('success', 'Account Created', `Welcome to TALTRIX, ${newSession.user.name}!`);
        return newSession;
      } catch (err: any) {
        notify('error', 'Sign Up Failed', err.message || 'Could not register account.');
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [notify]
  );

  const guestLogin = useCallback(() => {
    const guestSession = AuthService.createGuestSession();
    setSession(guestSession);
    notify('info', 'Guest Session Active', 'You are browsing TALTRIX in Guest Scholar mode.');
    return guestSession;
  }, [notify]);

  const logout = useCallback(() => {
    const userName = session?.user.name;
    AuthService.logout();
    setSession(null);
    notify('info', 'Signed Out', userName ? `Goodbye, ${userName}` : 'Session ended.');
  }, [session, notify]);

  const updateProfile = useCallback(
    async (updates: Partial<UserProfile>) => {
      if (!session?.user.id) throw new Error('No authenticated user.');
      try {
        const updatedUser = await AuthService.updateProfile(session.user.id, updates);
        setSession((prev) => (prev ? { ...prev, user: updatedUser } : null));
        notify('success', 'Profile Updated', 'Your profile details have been saved.');
        return updatedUser;
      } catch (err: any) {
        notify('error', 'Update Failed', err.message || 'Could not update profile.');
        throw err;
      }
    },
    [session, notify]
  );

  const changePassword = useCallback(
    async (payload: PasswordChangePayload) => {
      if (!session?.user.id) throw new Error('No authenticated user.');
      try {
        await AuthService.changePassword(session.user.id, payload);
        notify('success', 'Password Changed', 'Your account security credentials have been updated.');
        return true;
      } catch (err: any) {
        notify('error', 'Password Reset Error', err.message || 'Failed to update password.');
        throw err;
      }
    },
    [session, notify]
  );

  const requestPasswordReset = useCallback(
    async (email: string) => {
      try {
        await AuthService.requestPasswordReset(email);
        notify(
          'success',
          'Reset Link Sent',
          `Password recovery instructions sent to ${email}. Check your inbox.`
        );
        return true;
      } catch (err: any) {
        notify('error', 'Reset Failed', err.message || 'Unable to process reset request.');
        throw err;
      }
    },
    [notify]
  );

  const user = session?.user || null;
  const isAuthenticated = !!user;
  const role: UserRole = user?.role || 'guest';

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isAuthenticated,
        isLoading,
        role,
        login,
        signup,
        guestLogin,
        logout,
        updateProfile,
        changePassword,
        requestPasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
