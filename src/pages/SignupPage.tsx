import { useState, FormEvent } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { motion } from 'motion/react';
import {
  Terminal,
  User,
  Hash,
  Mail,
  Building,
  GraduationCap,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  CheckCircle,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { blip } from '@/lib/sound';

const DEPARTMENTS = [
  'Computer Science',
  'Information Technology',
  'Artificial Intelligence & DS',
  'Electronics & Communication',
  'Electrical Engineering',
  'Mechanical Engineering',
];

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgraduate'];

export function SignupPage() {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('Computer Science');
  const [year, setYear] = useState('3rd Year');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!rollNumber.trim()) {
      setErrorMsg('Please enter your student roll number.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid college email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Password confirmation does not match.');
      return;
    }
    if (!acceptTerms) {
      setErrorMsg('You must accept the TALTRIX Terms & Service Privacy Policy.');
      return;
    }

    setIsSubmitting(true);
    blip('run');

    try {
      await signup({
        name,
        rollNumber,
        email,
        department,
        year,
        password,
        confirmPassword,
        acceptTerms,
      });
      navigate({ to: '/' });
    } catch (err: any) {
      setErrorMsg(err.message || 'Could not complete registration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center p-4 py-8">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl"
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
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground">Create Student Account</h1>
          <p className="mt-1 font-sans text-xs text-muted-foreground">
            Join your department's interactive code execution network
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          {errorMsg && (
            <div className="mb-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-300">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Grid 2 Cols for Name & Roll Number */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              {/* Roll Number */}
              <div>
                <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                  Roll Number
                </label>
                <div className="relative">
                  <Hash className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="21CS042"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

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

            {/* Department & Year */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Department */}
              <div>
                <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                  Department
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d} className="bg-surface text-foreground">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Year */}
              <div>
                <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                  Year of Study
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    {YEARS.map((y) => (
                      <option key={y} value={y} className="bg-surface text-foreground">
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Password & Confirm */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Password */}
              <div>
                <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                  Password
                </label>
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

              {/* Confirm Password */}
              <div>
                <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-muted-foreground select-none">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-border bg-background/60 text-cyan-500 focus:ring-cyan-500"
                />
                <span>
                  I agree to the TALTRIX Academic Code of Conduct, Terms of Service, and Privacy Policy.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="group relative mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin text-black" />
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>Create Account</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Already registered?{' '}
          <Link to="/login" className="font-semibold text-cyan-400 hover:underline">
            Sign In to your Account
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
