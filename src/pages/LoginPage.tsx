import { useState, FormEvent } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { motion } from 'motion/react';
import {
  Terminal,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Loader2,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { blip } from '@/lib/sound';

export function LoginPage() {
  const navigate = useNavigate();
  const { login, guestLogin, isLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid college email address.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('Please enter your account password.');
      return;
    }

    setIsSubmitting(true);
    blip('run');

    try {
      const session = await login({ email, password, rememberMe });
      if (session.user.role === 'admin') {
        navigate({ to: '/admin' });
      } else {
        navigate({ to: '/dashboard' });
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid login credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGuest = () => {
    blip('run');
    guestLogin();
    navigate({ to: '/dashboard' });
  };

  const fillMockUser = (mockEmail: string, mockPass: string) => {
    blip('hover');
    setEmail(mockEmail);
    setPassword(mockPass);
    setErrorMsg('');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center p-4">
      {/* Background ambient lighting halos */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo & Header */}
        <div className="mb-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 transition-transform hover:scale-105"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl [background-image:var(--gradient-primary)] shadow-lg shadow-cyan-500/20">
              <Terminal className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-xl font-bold tracking-[0.34em]">TALTRIX</span>
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="mt-1 font-sans text-xs text-muted-foreground">
            Sign in to access your code execution visualizers and workspace
          </p>
        </div>

        {/* Pre-seeded Credentials Preset Cards */}
        <div className="mb-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-3 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" /> Quick Demo Credentials:
            </span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-[11px]">
            <button
              type="button"
              onClick={() => fillMockUser('student@college.edu', 'password123')}
              className="flex items-center justify-between rounded-lg border border-cyan-500/20 bg-surface/60 px-2.5 py-1.5 transition-colors hover:border-cyan-400 hover:bg-cyan-500/10 text-left"
            >
              <div>
                <div className="font-semibold text-foreground">Student</div>
                <div className="text-[10px] text-muted-foreground">student@college.edu</div>
              </div>
              <UserCheck className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            </button>
            <button
              type="button"
              onClick={() => fillMockUser('admin@college.edu', 'admin123')}
              className="flex items-center justify-between rounded-lg border border-purple-500/20 bg-surface/60 px-2.5 py-1.5 transition-colors hover:border-purple-400 hover:bg-purple-500/10 text-left"
            >
              <div>
                <div className="font-semibold text-foreground">Admin</div>
                <div className="text-[10px] text-muted-foreground">admin@college.edu</div>
              </div>
              <ShieldCheck className="h-3.5 w-3.5 text-purple-400 shrink-0" />
            </button>
          </div>
        </div>

        {/* Main Auth Form Card */}
        <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          {errorMsg && (
            <div className="mb-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-300">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* College Email */}
            <div>
              <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                College Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="alex.rivera@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-sans text-xs font-semibold text-foreground">Password</label>
                <Link
                  to="/forgot-password"
                  className="font-sans text-xs font-medium text-cyan-400 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-10 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-muted-foreground select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-border bg-background/60 text-cyan-500 focus:ring-cyan-500"
                />
                Remember me on this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin text-black" />
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          {/* Social Logins */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-[1px] flex-1 bg-border/60" />
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              Or Sign In With
            </span>
            <div className="h-[1px] flex-1 bg-border/60" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                blip('hover');
                fillMockUser('student@college.edu', 'password123');
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-background/40 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-h hover:border-cyan-500/30"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.35 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
                />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={() => {
                blip('hover');
                fillMockUser('admin@college.edu', 'admin123');
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-border/70 bg-background/40 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-h hover:border-cyan-500/30"
            >
              <svg className="h-4 w-4" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H12z" />
              </svg>
              <span>Microsoft</span>
            </button>
          </div>

          {/* Guest Action */}
          <div className="mt-4 pt-3 border-t border-border/60">
            <button
              type="button"
              onClick={handleGuest}
              className="w-full rounded-xl border border-border/80 bg-surface/50 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:bg-surface-h hover:text-foreground"
            >
              Continue as Guest
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Don't have a college account?{' '}
          <Link to="/signup" className="font-semibold text-cyan-400 hover:underline">
            Create Account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
