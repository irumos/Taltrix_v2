import { useState, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  LayoutDashboard,
  Eye,
  Bookmark,
  Activity,
  Award,
  TrendingUp,
  Settings,
  MessageSquare,
  User,
  LogOut,
  Plus,
  Play,
  Sparkles,
  Code2,
  Clock,
  CheckCircle2,
  Star,
  Sun,
  Moon,
  Palette,
  KeyRound,
  Save,
  Menu,
  X,
  ChevronRight,
  Send,
  Loader2,
  Trash2,
  Share2,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useSettings } from '@/contexts/SettingsContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { NotificationsCenter } from '@/components/common/NotificationsCenter';
import { FeedbackService } from '@/services/feedbackService';
import { Achievement, SavedProgram, SubjectProgress, VisualizationItem } from '@/types';
import { blip } from '@/lib/sound';

type DashboardTab =
  | 'overview'
  | 'visualizations'
  | 'saved'
  | 'activity'
  | 'achievements'
  | 'progress'
  | 'settings'
  | 'feedback'
  | 'profile';

const MOCK_VISUALIZATIONS: VisualizationItem[] = [
  {
    id: 'vis_1',
    title: 'Binary Tree Level Order Traversal',
    language: 'python',
    codeSnippet: 'def levelOrder(root):\n    if not root: return []\n    queue = [root]',
    stepCount: 24,
    lastExecuted: '2 hours ago',
    tags: ['Trees', 'BFS', 'Queue'],
    starred: true,
  },
  {
    id: 'vis_2',
    title: 'MergeSort Array Split & Conquer',
    language: 'cpp',
    codeSnippet: 'void mergeSort(int arr[], int l, int r) {\n    if (l >= r) return;',
    stepCount: 48,
    lastExecuted: 'Yesterday',
    tags: ['Sorting', 'Recursion'],
  },
  {
    id: 'vis_3',
    title: 'Dijkstra Shortest Path Memory Graph',
    language: 'javascript',
    codeSnippet: 'function dijkstra(graph, start) {\n    const dist = {};',
    stepCount: 86,
    lastExecuted: '3 days ago',
    tags: ['Graph', 'Pointers'],
  },
];

const MOCK_SAVED_PROGRAMS: SavedProgram[] = [
  {
    id: 'sp_1',
    title: 'QuickSort Dual Pivot Tracing',
    language: 'python',
    code: `def partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] <= pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i+1], arr[high] = arr[high], arr[i+1]\n    return i + 1`,
    description: 'Optimal pivot swapping with stack trace frame visualization.',
    updatedAt: '2026-08-05',
  },
  {
    id: 'sp_2',
    title: 'LRU Cache Double Linked List',
    language: 'cpp',
    code: `class LRUCache {\n    struct Node {\n        int key, val;\n        Node *prev, *next;\n    };\n};`,
    description: 'Doubly linked list pointer re-binding analysis.',
    updatedAt: '2026-08-02',
  },
];

const MOCK_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach_1',
    title: 'Recursion Master',
    description: 'Visualized 25 recursive call stack traces without stack overflow',
    iconName: 'Award',
    unlocked: true,
    unlockedAt: '2026-08-01',
    progress: 100,
    category: 'execution',
  },
  {
    id: 'ach_2',
    title: 'Memory Whisperer',
    description: 'Inspected 100 Heap and Stack pointer allocation frames',
    iconName: 'Sparkles',
    unlocked: true,
    unlockedAt: '2026-08-04',
    progress: 100,
    category: 'mastery',
  },
  {
    id: 'ach_3',
    title: 'Speed Visualizer',
    description: 'Executed code timeline at 5x step animation rate for 10 hours',
    iconName: 'Clock',
    unlocked: false,
    progress: 68,
    category: 'learning',
  },
  {
    id: 'ach_4',
    title: 'Polyglot Dev',
    description: 'Visualized programs in Python, C++, JavaScript and C',
    iconName: 'Code2',
    unlocked: true,
    unlockedAt: '2026-08-06',
    progress: 100,
    category: 'social',
  },
];

const MOCK_SUBJECT_PROGRESS: SubjectProgress[] = [
  { subject: 'Data Structures', completedPercent: 85, totalModules: 20, completedModules: 17, color: 'bg-cyan-500' },
  { subject: 'Algorithms & Complexity', completedPercent: 72, totalModules: 18, completedModules: 13, color: 'bg-purple-500' },
  { subject: 'Memory & Pointer Graphs', completedPercent: 90, totalModules: 10, completedModules: 9, color: 'bg-emerald-500' },
  { subject: 'Object Oriented Systems', completedPercent: 65, totalModules: 15, completedModules: 10, color: 'bg-amber-500' },
];

export function StudentDashboardPage() {
  const navigate = useNavigate();
  const { user, logout, updateProfile, changePassword } = useAuth();
  const { settings, setTheme, toggleDarkLight } = useSettings();
  const { notify } = useNotifications();

  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Profile Form state
  const [name, setName] = useState(user?.name || '');
  const [rollNumber, setRollNumber] = useState(user?.rollNumber || '');
  const [department, setDepartment] = useState(user?.department || 'Computer Science');
  const [year, setYear] = useState(user?.year || '3rd Year');
  const [bio, setBio] = useState(user?.bio || '');
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  // Password Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChangingPass, setIsChangingPass] = useState(false);

  // Feedback Form State
  const [fbRating, setFbRating] = useState(5);
  const [fbCategory, setFbCategory] = useState<'bug' | 'feature' | 'ui' | 'performance' | 'general'>('ui');
  const [fbSubject, setFbSubject] = useState('');
  const [fbMessage, setFbMessage] = useState('');
  const [isSubmittingFb, setIsSubmittingFb] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setRollNumber(user.rollNumber || '');
      setDepartment(user.department || 'Computer Science');
      setYear(user.year || '3rd Year');
      setBio(user.bio || '');
    }
  }, [user]);

  const handleSaveProfile = async (e: FormEvent) => {
    e.preventDefault();
    setIsSavingProfile(true);
    try {
      await updateProfile({ name, rollNumber, department, year, bio });
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleChangePassword = async (e: FormEvent) => {
    e.preventDefault();
    setIsChangingPass(true);
    try {
      await changePassword({ currentPassword, newPassword, confirmPassword });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } finally {
      setIsChangingPass(false);
    }
  };

  const handleSendFeedback = async (e: FormEvent) => {
    e.preventDefault();
    if (!fbSubject.trim() || !fbMessage.trim()) {
      notify('error', 'Missing Information', 'Please fill in both subject and message.');
      return;
    }
    setIsSubmittingFb(true);
    try {
      await FeedbackService.submitFeedback({
        userId: user?.id || 'guest',
        userName: user?.name || 'Student',
        userEmail: user?.email || 'student@college.edu',
        department: user?.department || 'Computer Science',
        year: user?.year || '3rd Year',
        rating: fbRating,
        subject: fbSubject,
        category: fbCategory,
        message: fbMessage,
      });
      notify('success', 'Feedback Submitted', 'Thank you! Your feedback has been logged for admin review.');
      setFbSubject('');
      setFbMessage('');
    } catch (e: any) {
      notify('error', 'Submission Failed', e.message || 'Could not send feedback.');
    } finally {
      setIsSubmittingFb(false);
    }
  };

  const NAV_ITEMS = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'visualizations', label: 'My Visualizations', icon: Eye },
    { id: 'saved', label: 'Saved Programs', icon: Bookmark },
    { id: 'activity', label: 'Recent Activity', icon: Activity },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'progress', label: 'Learning Progress', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Sidebar - Desktop */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border/70 bg-surface/90 backdrop-blur-xl md:flex">
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between border-b border-border/70 px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg [background-image:var(--gradient-primary)] shadow-md shadow-cyan-500/20">
              <Terminal className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.34em]">TALTRIX</span>
          </Link>
        </div>

        {/* User Chip */}
        <div className="border-b border-border/60 p-4">
          <div className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-2.5">
            <img
              src={
                user?.avatarUrl ||
                `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name || 'Student'}`
              }
              alt={user?.name}
              className="h-9 w-9 rounded-full border border-cyan-500/40 bg-surface object-cover"
            />
            <div className="min-w-0 flex-1">
              <h4 className="font-sans text-xs font-bold text-foreground truncate">{user?.name}</h4>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{user?.rollNumber || 'STUDENT'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3 font-sans text-xs">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  blip('hover');
                  setActiveTab(item.id as DashboardTab);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 font-medium transition-all ${
                  active
                    ? 'bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30'
                    : 'text-muted-foreground hover:bg-surface-h/60 hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${active ? 'text-cyan-400' : 'text-muted-foreground'}`} />
                  <span>{item.label}</span>
                </div>
                {active && <ChevronRight className="h-3.5 w-3.5 text-cyan-400" />}
              </button>
            );
          })}
        </nav>

        {/* Logout Footer */}
        <div className="border-t border-border/70 p-3">
          <button
            type="button"
            onClick={() => {
              blip('run');
              logout();
              navigate({ to: '/' });
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-medium text-rose-400 transition-colors hover:bg-rose-500/10 hover:text-rose-300"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border/70 bg-surface/75 px-4 sm:px-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground md:hidden"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <h2 className="font-display text-sm sm:text-base font-bold capitalize text-foreground">
              {activeTab === 'overview' ? 'Student Workspace Dashboard' : activeTab.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkLight}
              title="Toggle Theme"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground hover:text-cyan-400"
            >
              {settings.theme.id === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <NotificationsCenter />

            <Link
              to="/workspace"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>Launch Playground</span>
            </Link>
          </div>
        </header>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-border/70 bg-surface p-3 md:hidden space-y-1"
            >
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(item.id as DashboardTab);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium ${
                      activeTab === item.id ? 'bg-cyan-500/15 text-cyan-300' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scrollable Dashboard View */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Welcome Banner */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-surface to-purple-950/30 p-6 sm:p-8">
                <div className="relative z-10 max-w-2xl space-y-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-cyan-400">
                    <Sparkles className="h-3 w-3" /> ACADEMIC PERFORMANCE
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    Hello, {user?.name || 'Scholar'}!
                  </h1>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    Track your execution tracing, memory heap graphs, and algorithm mastery in one place.
                  </p>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <div className="rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-[11px] font-semibold">Visualizations</span>
                    <Code2 className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-foreground">42</div>
                  <span className="font-mono text-[10px] text-emerald-400">+5 this week</span>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-[11px] font-semibold">Execution Sessions</span>
                    <Activity className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-foreground">128</div>
                  <span className="font-mono text-[10px] text-cyan-400">1,420 steps traced</span>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-[11px] font-semibold">Learning Hours</span>
                    <Clock className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-foreground">34.5 hrs</div>
                  <span className="font-mono text-[10px] text-muted-foreground">Avg 1.2h / day</span>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-[11px] font-semibold">Fav Language</span>
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-foreground">Python</div>
                  <span className="font-mono text-[10px] text-emerald-400">62% of sessions</span>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-[11px] font-semibold">Completion</span>
                    <TrendingUp className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-foreground">78%</div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <div className="h-full bg-cyan-500" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>

              {/* Quick Actions Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/workspace"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400"
                >
                  <Plus className="h-4 w-4" />
                  <span>New Visualization</span>
                </Link>

                <Link
                  to="/workspace"
                  className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface/80 px-4 py-2.5 font-sans text-xs font-medium text-foreground transition-all hover:bg-surface-h"
                >
                  <Play className="h-4 w-4 text-cyan-400" />
                  <span>Open Playground</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setActiveTab('saved')}
                  className="flex items-center gap-2 rounded-xl border border-border/80 bg-surface/80 px-4 py-2.5 font-sans text-xs font-medium text-foreground transition-all hover:bg-surface-h"
                >
                  <Bookmark className="h-4 w-4 text-purple-400" />
                  <span>Browse Saved Examples</span>
                </button>
              </div>

              {/* 2-Column Section: Continue Learning & Recent Activity */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Continue Learning */}
                <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-cyan-400" /> Continue Learning
                    </h3>
                    <span className="font-mono text-[10px] text-muted-foreground">3 Modules Pending</span>
                  </div>

                  <div className="space-y-3">
                    {MOCK_VISUALIZATIONS.map((item) => (
                      <div
                        key={item.id}
                        className="group flex items-center justify-between rounded-2xl border border-border/60 bg-background/40 p-4 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/5"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] uppercase font-bold text-cyan-400">
                              {item.language}
                            </span>
                            <h4 className="font-sans text-xs font-semibold text-foreground">{item.title}</h4>
                          </div>
                          <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                            {item.stepCount} execution steps • {item.lastExecuted}
                          </p>
                        </div>
                        <Link
                          to="/workspace"
                          className="grid h-8 w-8 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-black"
                        >
                          <Play className="h-4 w-4 fill-current" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity Timeline */}
                <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                      <Activity className="h-4 w-4 text-purple-400" /> Recent Execution Timeline
                    </h3>
                  </div>

                  <div className="space-y-3 font-sans text-xs">
                    <div className="flex items-start gap-3 border-l-2 border-cyan-500 pl-3">
                      <div>
                        <div className="font-semibold text-foreground">Executed Binary Tree Traversal</div>
                        <p className="text-muted-foreground text-[11px]">Traced 24 call stack frames in Python</p>
                        <span className="font-mono text-[10px] text-muted-foreground">Today at 14:20</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-l-2 border-purple-500 pl-3">
                      <div>
                        <div className="font-semibold text-foreground">Saved Program "QuickSort Dual Pivot"</div>
                        <p className="text-muted-foreground text-[11px]">Updated snippet in Saved Programs</p>
                        <span className="font-mono text-[10px] text-muted-foreground">Yesterday</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-l-2 border-emerald-500 pl-3">
                      <div>
                        <div className="font-semibold text-foreground">Unlocked Achievement: Recursion Master</div>
                        <p className="text-muted-foreground text-[11px]">Completed 25 recursive call stack inspections</p>
                        <span className="font-mono text-[10px] text-muted-foreground">3 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY VISUALIZATIONS */}
          {activeTab === 'visualizations' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">My Code Visualizations</h3>
                  <p className="text-xs text-muted-foreground">Saved execution traces and interactive sessions</p>
                </div>
                <Link
                  to="/workspace"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-sans text-xs font-semibold text-black hover:bg-cyan-400"
                >
                  <Plus className="h-4 w-4" />
                  <span>Create Visualization</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {MOCK_VISUALIZATIONS.map((vis) => (
                  <div
                    key={vis.id}
                    className="flex flex-col justify-between rounded-2xl border border-border/80 bg-surface/80 p-5 shadow-xl backdrop-blur-xl space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-lg bg-cyan-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-cyan-400">
                          {vis.language}
                        </span>
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      </div>
                      <h4 className="mt-3 font-sans text-sm font-bold text-foreground">{vis.title}</h4>
                      <pre className="mt-2 overflow-x-auto rounded-lg bg-background/60 p-2.5 font-mono text-[11px] text-muted-foreground">
                        {vis.codeSnippet}
                      </pre>
                    </div>

                    <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {vis.stepCount} Steps
                      </span>
                      <Link
                        to="/workspace"
                        className="flex items-center gap-1 font-semibold text-cyan-400 hover:underline"
                      >
                        <span>Inspect Trace</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SAVED PROGRAMS */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Saved Programs</h3>
                <p className="text-xs text-muted-foreground">Code snippets and benchmark algorithms</p>
              </div>

              <div className="space-y-4">
                {MOCK_SAVED_PROGRAMS.map((prog) => (
                  <div
                    key={prog.id}
                    className="rounded-2xl border border-border/80 bg-surface/80 p-5 shadow-xl backdrop-blur-xl space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg bg-purple-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-purple-400">
                          {prog.language}
                        </span>
                        <h4 className="font-sans text-sm font-bold text-foreground">{prog.title}</h4>
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">Updated {prog.updatedAt}</span>
                    </div>

                    <p className="text-xs text-muted-foreground">{prog.description}</p>

                    <pre className="rounded-xl border border-border/60 bg-background/70 p-4 font-mono text-xs text-cyan-300 overflow-x-auto">
                      {prog.code}
                    </pre>

                    <div className="flex items-center gap-2 pt-2">
                      <Link
                        to="/workspace"
                        className="flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-black hover:bg-cyan-400"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Run in Playground</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: RECENT ACTIVITY */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Activity History</h3>
                <p className="text-xs text-muted-foreground">Detailed log of sessions, updates and logins</p>
              </div>

              <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-4">
                <div className="space-y-4 font-sans text-xs">
                  <div className="flex items-start gap-4 pb-4 border-b border-border/60">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Play className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">Executed Binary Tree Level Order</h4>
                        <span className="font-mono text-[10px] text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5">24 steps traced with queue memory representation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pb-4 border-b border-border/60">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
                      <Bookmark className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">Saved Snippet: QuickSort Dual Pivot</h4>
                        <span className="font-mono text-[10px] text-muted-foreground">Yesterday at 18:40</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5">Added partition code to personal collection.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-foreground">Unlocked Badge: Polyglot Dev</h4>
                        <span className="font-mono text-[10px] text-muted-foreground">3 days ago</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5">Visualized programs in 4 distinct programming languages.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ACHIEVEMENTS */}
          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Academic Badges & Achievements</h3>
                <p className="text-xs text-muted-foreground">Gamified milestones earned through algorithm visualizer usage</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {MOCK_ACHIEVEMENTS.map((ach) => (
                  <div
                    key={ach.id}
                    className={`rounded-2xl border p-5 shadow-xl backdrop-blur-xl space-y-3 transition-all ${
                      ach.unlocked
                        ? 'border-cyan-500/30 bg-surface/90'
                        : 'border-border/60 bg-surface/40 opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`grid h-10 w-10 place-items-center rounded-xl ${
                          ach.unlocked ? 'bg-cyan-500/20 text-cyan-400' : 'bg-surface text-muted-foreground'
                        }`}>
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-sans text-sm font-bold text-foreground">{ach.title}</h4>
                          <span className="font-mono text-[10px] uppercase text-cyan-400">
                            {ach.unlocked ? 'Unlocked' : 'In Progress'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">{ach.description}</p>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-muted-foreground">
                        <span>Progress</span>
                        <span>{ach.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full bg-cyan-500 transition-all duration-500"
                          style={{ width: `${ach.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: LEARNING PROGRESS */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Subject Mastery & Learning Curve</h3>
                <p className="text-xs text-muted-foreground">Curriculum milestone tracking per engineering domain</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {MOCK_SUBJECT_PROGRESS.map((sub) => (
                  <div key={sub.subject} className="rounded-2xl border border-border/80 bg-surface/80 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans text-sm font-bold text-foreground">{sub.subject}</h4>
                      <span className="font-mono text-xs font-bold text-cyan-400">{sub.completedPercent}%</span>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      {sub.completedModules} of {sub.totalModules} Interactive Tracing Labs Completed
                    </p>

                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-border">
                      <div className={`h-full ${sub.color}`} style={{ width: `${sub.completedPercent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Student Preferences</h3>
                <p className="text-xs text-muted-foreground">Configure editor layout, execution speed, and themes</p>
              </div>

              <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 space-y-6">
                <div>
                  <h4 className="font-sans text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    Appearance & Theme
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['taltrix-dark', 'midnight', 'deep-blue', 'graphite', 'light'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTheme(t as any)}
                        className={`rounded-xl border p-3 text-left font-mono text-xs capitalize transition-all ${
                          settings.theme.id === t
                            ? 'border-cyan-500 bg-cyan-500/10 font-bold text-cyan-300'
                            : 'border-border/60 bg-background/40 text-muted-foreground hover:bg-surface-h'
                        }`}
                      >
                        {t.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <h4 className="font-sans text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    Execution Defaults
                  </h4>
                  <div className="space-y-3 font-sans text-xs">
                    <label className="flex items-center justify-between text-muted-foreground">
                      <span>Enable AST Memory Graph Visualization</span>
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded text-cyan-500" />
                    </label>
                    <label className="flex items-center justify-between text-muted-foreground">
                      <span>Auto-scroll terminal on execution line step</span>
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded text-cyan-500" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: FEEDBACK */}
          {activeTab === 'feedback' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Submit Academic Feedback</h3>
                <p className="text-xs text-muted-foreground">Direct feedback channel for department faculty & admins</p>
              </div>

              <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl">
                <form onSubmit={handleSendFeedback} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                      Overall Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFbRating(star)}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= fbRating ? 'text-amber-400 fill-amber-400' : 'text-border'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                      Feedback Category
                    </label>
                    <select
                      value={fbCategory}
                      onChange={(e) => setFbCategory(e.target.value as any)}
                      className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                    >
                      <option value="ui" className="bg-surface">UI / Visualizer Aesthetic</option>
                      <option value="feature" className="bg-surface">Feature Request</option>
                      <option value="bug" className="bg-surface">Bug Report</option>
                      <option value="performance" className="bg-surface">Execution Speed</option>
                      <option value="general" className="bg-surface">General Course Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Call Stack pointer color coding"
                      value={fbSubject}
                      onChange={(e) => setFbSubject(e.target.value)}
                      className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                      Message / Comments
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Detail your thoughts or suggestions..."
                      value={fbMessage}
                      onChange={(e) => setFbMessage(e.target.value)}
                      className="w-full rounded-xl border border-border/70 bg-background/60 p-4 text-xs text-foreground outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingFb}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 disabled:opacity-50"
                  >
                    {isSubmittingFb ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Feedback</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 9: PROFILE */}
          {activeTab === 'profile' && (
            <div className="max-w-3xl space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Student Profile Management</h3>
                <p className="text-xs text-muted-foreground">Manage college identity details and security credentials</p>
              </div>

              {/* Profile Card */}
              <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-border/60">
                  <img
                    src={
                      user?.avatarUrl ||
                      `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name || 'Student'}`
                    }
                    alt={user?.name}
                    className="h-20 w-20 rounded-2xl border-2 border-cyan-500/50 bg-surface object-cover shadow-lg"
                  />
                  <div className="space-y-1 text-center sm:text-left">
                    <h3 className="font-display text-xl font-bold text-foreground">{user?.name}</h3>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 font-mono text-xs">
                      <span className="rounded-md bg-cyan-500/10 px-2 py-0.5 text-cyan-400 border border-cyan-500/30 font-semibold">
                        {user?.rollNumber || 'STUDENT'}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{user?.department}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{user?.year}</span>
                    </div>
                    <p className="text-xs text-muted-foreground pt-1">{user?.email}</p>
                  </div>
                </div>

                {/* Edit Form */}
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <h4 className="font-sans text-xs font-bold text-foreground uppercase tracking-wider">
                    Personal & Academic Details
                  </h4>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                        Roll Number
                      </label>
                      <input
                        type="text"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                        Department
                      </label>
                      <input
                        type="text"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                        Year
                      </label>
                      <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                      Bio / Academic Interests
                    </label>
                    <textarea
                      rows={3}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="w-full rounded-xl border border-border/70 bg-background/60 p-3 text-xs text-foreground outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSavingProfile}
                    className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-2.5 font-sans text-xs font-semibold text-black hover:bg-cyan-400 disabled:opacity-50"
                  >
                    {isSavingProfile ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        <span>Save Profile Details</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Password Change Form */}
                <form onSubmit={handleChangePassword} className="pt-6 border-t border-border/60 space-y-4">
                  <h4 className="font-sans text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <KeyRound className="h-4 w-4 text-purple-400" /> Change Security Password
                  </h4>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                        Current Password
                      </label>
                      <input
                        type="password"
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                        New Password
                      </label>
                      <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block font-sans text-xs font-semibold text-foreground">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isChangingPass}
                    className="flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-6 py-2.5 font-sans text-xs font-semibold text-purple-300 hover:bg-purple-500/20 disabled:opacity-50"
                  >
                    {isChangingPass ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <span>Update Password</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
