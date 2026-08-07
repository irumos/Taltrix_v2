import { useState, useEffect, useMemo, FormEvent } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  LayoutDashboard,
  Users,
  MessageSquare,
  BarChart3,
  BookOpen,
  Megaphone,
  Settings,
  LogOut,
  ShieldCheck,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowUpDown,
  MoreVertical,
  Send,
  Star,
  Activity,
  TrendingUp,
  UserCheck,
  Sun,
  Moon,
  Menu,
  X,
  Plus,
  Loader2,
  Trash2,
  UserX,
  Eye,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useAuth } from '@/contexts/AuthContext';
import { useSettings } from '@/contexts/SettingsContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { NotificationsCenter } from '@/components/common/NotificationsCenter';
import { UserService } from '@/services/userService';
import { FeedbackService } from '@/services/feedbackService';
import { AnalyticsService } from '@/services/analyticsService';
import { FeedbackItem, PopularExample, SystemAnalytics, UserFilterOptions, UserProfile } from '@/types';
import { blip } from '@/lib/sound';

type AdminTab =
  | 'overview'
  | 'users'
  | 'feedback'
  | 'analytics'
  | 'examples'
  | 'announcements'
  | 'settings';

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { settings, toggleDarkLight } = useSettings();
  const { notify } = useNotifications();

  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // User Management State
  const [userOptions, setUserOptions] = useState<UserFilterOptions>({
    search: '',
    department: 'all',
    year: 'all',
    status: 'all',
    role: 'all',
    sortBy: 'name',
    sortOrder: 'asc',
    page: 1,
    pageSize: 10,
  });

  const [userData, setUserData] = useState<{
    users: UserProfile[];
    total: number;
    totalPages: number;
  }>({ users: [], total: 0, totalPages: 1 });

  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);

  // Feedback State
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [fbFilterRating, setFbFilterRating] = useState<number | 'all'>('all');
  const [fbFilterDept, setFbFilterDept] = useState<string>('all');
  const [fbSearch, setFbSearch] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackItem | null>(null);
  const [adminReplyText, setAdminReplyText] = useState('');

  // Analytics & Examples State
  const [analytics, setAnalytics] = useState<SystemAnalytics | null>(null);
  const [popularExamples, setPopularExamples] = useState<PopularExample[]>([]);

  // Announcement Form State
  const [announcements, setAnnouncements] = useState([
    {
      id: 'ann_1',
      title: 'TALTRIX v2.4 Engine Release',
      content: 'Added C++20 memory alignment visualization and step timeline scrubbing.',
      date: '2026-08-05',
    },
  ]);
  const [newAnnTitle, setNewAnnTitle] = useState('');
  const [newAnnContent, setNewAnnContent] = useState('');

  // Fetch Users
  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const res = await UserService.getUsers(userOptions);
      setUserData(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingUsers(false);
    }
  };

  // Fetch Feedback & Analytics
  useEffect(() => {
    fetchUsers();
  }, [userOptions]);

  useEffect(() => {
    const loadFeedback = async () => {
      const items = await FeedbackService.getFeedbacks({
        rating: fbFilterRating,
        department: fbFilterDept,
        search: fbSearch,
      });
      setFeedbacks(items);
    };
    loadFeedback();
  }, [fbFilterRating, fbFilterDept, fbSearch]);

  useEffect(() => {
    const loadAnalytics = async () => {
      const data = await AnalyticsService.getSystemAnalytics();
      setAnalytics(data);
      const ex = await AnalyticsService.getPopularExamples();
      setPopularExamples(ex);
    };
    loadAnalytics();
  }, []);

  const handleStatusChange = async (userId: string, status: any) => {
    blip('click');
    await UserService.updateUserStatus(userId, status);
    notify('success', 'User Status Updated', `Status changed to ${status}.`);
    fetchUsers();
  };

  const handleRoleChange = async (userId: string, role: any) => {
    blip('click');
    await UserService.updateUserRole(userId, role);
    notify('success', 'Role Updated', `User granted ${role} privileges.`);
    fetchUsers();
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to remove this user from TALTRIX?')) return;
    blip('click');
    await UserService.deleteUser(userId);
    notify('info', 'User Deleted', 'Account removed from system db.');
    fetchUsers();
  };

  const handleReplyFeedback = async () => {
    if (!selectedFeedback) return;
    blip('click');
    const updated = await FeedbackService.updateFeedbackStatus(
      selectedFeedback.id,
      'resolved',
      adminReplyText
    );
    notify('success', 'Feedback Resolved', 'Response saved and dispatched to student.');
    setSelectedFeedback(updated);
    setAdminReplyText('');
    const items = await FeedbackService.getFeedbacks();
    setFeedbacks(items);
  };

  const handleCreateAnnouncement = (e: FormEvent) => {
    e.preventDefault();
    if (!newAnnTitle.trim() || !newAnnContent.trim()) return;
    blip('click');
    const item = {
      id: `ann_${Date.now()}`,
      title: newAnnTitle,
      content: newAnnContent,
      date: new Date().toISOString().split('T')[0],
    };
    setAnnouncements([item, ...announcements]);
    notify('success', 'Announcement Published', 'Broadcast live to student dashboards.');
    setNewAnnTitle('');
    setNewAnnContent('');
  };

  const NAV_ITEMS = [
    { id: 'overview', label: 'Executive Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'feedback', label: 'Feedback Center', icon: MessageSquare },
    { id: 'analytics', label: 'System Analytics', icon: BarChart3 },
    { id: 'examples', label: 'Benchmark Examples', icon: BookOpen },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Sidebar Desktop */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border/70 bg-surface/90 backdrop-blur-xl md:flex">
        <div className="flex h-16 items-center justify-between border-b border-border/70 px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-purple-600 shadow-md shadow-purple-500/20">
              <ShieldCheck className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.34em]">TALTRIX</span>
          </Link>
        </div>

        {/* Admin Badge */}
        <div className="border-b border-border/60 p-4">
          <div className="flex items-center gap-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5">
            <img
              src={
                user?.avatarUrl ||
                `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name || 'Admin'}`
              }
              alt={user?.name}
              className="h-9 w-9 rounded-full border border-purple-400 bg-surface object-cover"
            />
            <div className="min-w-0 flex-1">
              <h4 className="font-sans text-xs font-bold text-foreground truncate">{user?.name}</h4>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-purple-400">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>ADMIN CONTROL</span>
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
                  setActiveTab(item.id as AdminTab);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 font-medium transition-all ${
                  active
                    ? 'bg-purple-500/20 font-semibold text-purple-300 border border-purple-500/40'
                    : 'text-muted-foreground hover:bg-surface-h/60 hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${active ? 'text-purple-400' : 'text-muted-foreground'}`} />
                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>

        <div className="border-t border-border/70 p-3">
          <button
            type="button"
            onClick={() => {
              blip('click');
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

      {/* Main Area */}
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
            <h2 className="font-display text-sm sm:text-base font-bold text-foreground">
              {activeTab === 'overview' ? 'System Administration Portal' : activeTab.toUpperCase()}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkLight}
              title="Toggle Theme"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground hover:text-purple-400"
            >
              {settings.theme.id === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <NotificationsCenter />
          </div>
        </header>

        {/* Mobile Drawer */}
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
                      setActiveTab(item.id as AdminTab);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium ${
                      activeTab === item.id ? 'bg-purple-500/20 text-purple-300' : 'text-muted-foreground'
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

        {/* View Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          {/* TAB 1: EXECUTIVE OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Executive Stat Cards */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-xs font-semibold">Total Platform Users</span>
                    <Users className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-foreground">
                    {analytics?.totalUsers || 1420}
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400">+14.8% this month</span>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-xs font-semibold">Active Today</span>
                    <UserCheck className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-foreground">
                    {analytics?.activeUsersToday || 384}
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400">Peak hour 14:00</span>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-xs font-semibold">Feedback Received</span>
                    <MessageSquare className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-foreground">
                    {analytics?.feedbackCount || 96}
                  </div>
                  <span className="font-mono text-[10px] text-amber-400">4 unread items</span>
                </div>

                <div className="rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="font-sans text-xs font-semibold">Daily Visits</span>
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-foreground">
                    {analytics?.dailyVisits || 2850}
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400">Avg 4.8m session time</span>
                </div>
              </div>

              {/* Chart Grid */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Visualizations Created */}
                <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4">
                  <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                    <Activity className="h-4 w-4 text-cyan-400" /> Visualizations Created (Weekly)
                  </h3>
                  <div className="h-60 w-full font-mono text-xs">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={analytics?.visualizationsCreatedOverTime || []}>
                        <defs>
                          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="date" stroke="#64748b" fontSize={10} />
                        <YAxis stroke="#64748b" fontSize={10} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                        />
                        <Area
                          type="monotone"
                          dataKey="count"
                          stroke="#22d3ee"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorCount)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Most Used Languages */}
                <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4">
                  <h3 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-purple-400" /> Most Used Execution Languages
                  </h3>
                  <div className="h-60 w-full flex items-center justify-center font-mono text-xs">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={analytics?.mostUsedLanguages || []}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {(analytics?.mostUsedLanguages || []).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Popular Benchmark Examples */}
              <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4">
                <h3 className="font-display text-sm font-bold text-foreground">Popular Benchmark Programs</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {popularExamples.map((ex) => (
                    <div
                      key={ex.id}
                      className="rounded-2xl border border-border/60 bg-background/40 p-4 space-y-2"
                    >
                      <span className="font-mono text-[10px] text-cyan-400 uppercase font-bold">
                        {ex.language}
                      </span>
                      <h4 className="font-sans text-xs font-bold text-foreground">{ex.title}</h4>
                      <p className="font-mono text-[10px] text-muted-foreground">{ex.views} total student views</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: USER MANAGEMENT */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">User Management</h3>
                  <p className="text-xs text-muted-foreground">Search, filter, edit roles and statuses of students & admins</p>
                </div>
              </div>

              {/* Search & Filters */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 rounded-2xl border border-border/80 bg-surface/80 p-4">
                <div className="relative sm:col-span-2">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search name, email, roll number..."
                    value={userOptions.search}
                    onChange={(e) => setUserOptions({ ...userOptions, search: e.target.value, page: 1 })}
                    className="w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2 text-xs text-foreground outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <select
                    value={userOptions.department}
                    onChange={(e) => setUserOptions({ ...userOptions, department: e.target.value, page: 1 })}
                    className="w-full rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none focus:border-purple-500"
                  >
                    <option value="all" className="bg-surface">All Departments</option>
                    <option value="Computer Science" className="bg-surface">Computer Science</option>
                    <option value="Information Technology" className="bg-surface">Information Technology</option>
                    <option value="Artificial Intelligence" className="bg-surface">Artificial Intelligence</option>
                    <option value="Electronics" className="bg-surface">Electronics</option>
                  </select>
                </div>

                <div>
                  <select
                    value={userOptions.status}
                    onChange={(e) => setUserOptions({ ...userOptions, status: e.target.value, page: 1 })}
                    className="w-full rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none focus:border-purple-500"
                  >
                    <option value="all" className="bg-surface">All Statuses</option>
                    <option value="active" className="bg-surface">Active</option>
                    <option value="inactive" className="bg-surface">Inactive</option>
                    <option value="suspended" className="bg-surface">Suspended</option>
                  </select>
                </div>
              </div>

              {/* Users Table */}
              <div className="overflow-x-auto rounded-3xl border border-border/80 bg-surface/80 shadow-xl backdrop-blur-2xl">
                <table className="w-full text-left font-sans text-xs">
                  <thead className="border-b border-border/70 bg-background/40 font-mono text-[11px] uppercase text-muted-foreground">
                    <tr>
                      <th className="p-4">Name</th>
                      <th className="p-4">Roll No</th>
                      <th className="p-4">Department</th>
                      <th className="p-4">Year</th>
                      <th className="p-4">Role</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {isLoadingUsers ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-muted-foreground">
                          <Loader2 className="mx-auto h-6 w-6 animate-spin text-purple-400" />
                          <span className="mt-2 block font-mono text-xs">Querying system database...</span>
                        </td>
                      </tr>
                    ) : userData.users.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-muted-foreground">
                          No matching users found.
                        </td>
                      </tr>
                    ) : (
                      userData.users.map((u) => (
                        <tr key={u.id} className="transition-colors hover:bg-surface-h/50">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={u.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${u.name}`}
                                alt={u.name}
                                className="h-8 w-8 rounded-full border border-border bg-background object-cover"
                              />
                              <div>
                                <div className="font-bold text-foreground">{u.name}</div>
                                <div className="text-[11px] text-muted-foreground">{u.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 font-mono text-[11px] text-cyan-400">{u.rollNumber || '—'}</td>
                          <td className="p-4 text-muted-foreground">{u.department || '—'}</td>
                          <td className="p-4 text-muted-foreground">{u.year || '—'}</td>
                          <td className="p-4">
                            <span
                              className={`rounded-md px-2 py-0.5 font-mono text-[10px] uppercase font-bold ${
                                u.role === 'admin'
                                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                                  : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                              }`}
                            >
                              {u.role}
                            </span>
                          </td>
                          <td className="p-4">
                            <span
                              className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold capitalize ${
                                u.status === 'active'
                                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                  : u.status === 'inactive'
                                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                              }`}
                            >
                              {u.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              {u.status === 'active' ? (
                                <button
                                  type="button"
                                  onClick={() => handleStatusChange(u.id, 'suspended')}
                                  title="Suspend User"
                                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-400"
                                >
                                  <UserX className="h-4 w-4" />
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleStatusChange(u.id, 'active')}
                                  title="Activate User"
                                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-400"
                                >
                                  <CheckCircle2 className="h-4 w-4" />
                                </button>
                              )}

                              {u.role === 'student' ? (
                                <button
                                  type="button"
                                  onClick={() => handleRoleChange(u.id, 'admin')}
                                  title="Promote to Admin"
                                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-purple-500/10 hover:text-purple-400"
                                >
                                  <ShieldCheck className="h-4 w-4" />
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleRoleChange(u.id, 'student')}
                                  title="Demote to Student"
                                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-cyan-500/10 hover:text-cyan-400"
                                >
                                  <Users className="h-4 w-4" />
                                </button>
                              )}

                              <button
                                type="button"
                                onClick={() => handleDeleteUser(u.id)}
                                title="Delete User"
                                className="rounded-lg p-1.5 text-muted-foreground hover:bg-rose-500/10 hover:text-rose-400"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between border-t border-border/70 p-4 font-mono text-xs">
                  <span className="text-muted-foreground">
                    Page {userData.page || 1} of {userData.totalPages || 1} ({userData.total} total)
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={userOptions.page <= 1}
                      onClick={() => setUserOptions({ ...userOptions, page: userOptions.page - 1 })}
                      className="rounded-lg border border-border/70 px-3 py-1.5 disabled:opacity-50 hover:bg-surface-h"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      disabled={userOptions.page >= userData.totalPages}
                      onClick={() => setUserOptions({ ...userOptions, page: userOptions.page + 1 })}
                      className="rounded-lg border border-border/70 px-3 py-1.5 disabled:opacity-50 hover:bg-surface-h"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: FEEDBACK MANAGEMENT */}
          {activeTab === 'feedback' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Feedback Management</h3>
                <p className="text-xs text-muted-foreground">Review student feedback, ratings and resolve issues</p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4">
                <input
                  type="text"
                  placeholder="Filter feedback message or user..."
                  value={fbSearch}
                  onChange={(e) => setFbSearch(e.target.value)}
                  className="rounded-xl border border-border/70 bg-background/60 px-4 py-2 text-xs text-foreground outline-none focus:border-purple-500"
                />

                <select
                  value={fbFilterRating}
                  onChange={(e) => setFbFilterRating(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                  className="rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none"
                >
                  <option value="all" className="bg-surface">All Ratings</option>
                  <option value={5} className="bg-surface">5 Stars</option>
                  <option value={4} className="bg-surface">4 Stars</option>
                  <option value={3} className="bg-surface">3 Stars</option>
                </select>

                <select
                  value={fbFilterDept}
                  onChange={(e) => setFbFilterDept(e.target.value)}
                  className="rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none"
                >
                  <option value="all" className="bg-surface">All Departments</option>
                  <option value="Computer Science" className="bg-surface">Computer Science</option>
                  <option value="Information Technology" className="bg-surface">Information Technology</option>
                </select>
              </div>

              {/* Feedback List Grid */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {feedbacks.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedFeedback(item);
                      setAdminReplyText(item.adminResponse || '');
                    }}
                    className={`cursor-pointer rounded-2xl border p-5 transition-all shadow-lg backdrop-blur-xl ${
                      item.status === 'resolved'
                        ? 'border-border/60 bg-surface/40'
                        : 'border-purple-500/40 bg-surface/90 hover:border-purple-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="rounded bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] uppercase text-purple-400 font-bold">
                          {item.category}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <h4 className="mt-3 font-sans text-sm font-bold text-foreground">{item.subject}</h4>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.message}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground">
                      <span>{item.userName} ({item.department})</span>
                      <span className="font-semibold text-purple-400 hover:underline flex items-center gap-1">
                        View Details <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feedback Detail Slide-over Modal */}
              <AnimatePresence>
                {selectedFeedback && (
                  <div className="fixed inset-0 z-[250] flex justify-end bg-black/60 backdrop-blur-sm">
                    <motion.div
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="w-full max-w-lg bg-surface p-6 shadow-2xl overflow-y-auto space-y-6 border-l border-border/80"
                    >
                      <div className="flex items-center justify-between border-b border-border/70 pb-4">
                        <h3 className="font-display text-base font-bold text-foreground">Feedback Details</h3>
                        <button
                          type="button"
                          onClick={() => setSelectedFeedback(null)}
                          className="rounded-lg p-1 text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="space-y-3 font-sans text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-foreground">{selectedFeedback.userName}</span>
                          <span className="font-mono text-[10px] text-muted-foreground">{selectedFeedback.userEmail}</span>
                        </div>
                        <div className="font-mono text-[11px] text-cyan-400">
                          {selectedFeedback.department} • {selectedFeedback.year}
                        </div>

                        <div className="flex items-center gap-1 text-amber-400 pt-2">
                          {[...Array(selectedFeedback.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>

                        <h4 className="font-bold text-sm text-foreground pt-2">{selectedFeedback.subject}</h4>
                        <div className="rounded-xl border border-border/60 bg-background/50 p-4 text-muted-foreground leading-relaxed">
                          {selectedFeedback.message}
                        </div>
                      </div>

                      {/* Reply Box */}
                      <div className="space-y-3 pt-4 border-t border-border/70 font-sans text-xs">
                        <h4 className="font-bold text-foreground">Admin Response / Action Notes</h4>
                        <textarea
                          rows={4}
                          placeholder="Type response for student..."
                          value={adminReplyText}
                          onChange={(e) => setAdminReplyText(e.target.value)}
                          className="w-full rounded-xl border border-border/70 bg-background/60 p-3 text-foreground outline-none focus:border-purple-500"
                        />
                        <button
                          type="button"
                          onClick={handleReplyFeedback}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-2.5 font-semibold text-white hover:bg-purple-500"
                        >
                          <Send className="h-4 w-4" />
                          <span>Mark Resolved & Save Response</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* TAB 4: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">System Analytics</h3>
                <p className="text-xs text-muted-foreground">User growth telemetry, usage spikes and ratings distribution</p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4">
                  <h3 className="font-display text-sm font-bold text-foreground">Monthly Student Growth</h3>
                  <div className="h-64 w-full font-mono text-xs">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics?.userGrowthMonthly || []}>
                        <XAxis dataKey="month" stroke="#64748b" fontSize={10} />
                        <YAxis stroke="#64748b" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
                        <Bar dataKey="students" fill="#a855f7" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4">
                  <h3 className="font-display text-sm font-bold text-foreground">Rating Distribution (1 to 5 Stars)</h3>
                  <div className="h-64 w-full font-mono text-xs">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics?.ratingDistribution || []}>
                        <XAxis dataKey="stars" stroke="#64748b" fontSize={10} />
                        <YAxis stroke="#64748b" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
                        <Bar dataKey="count" fill="#fbbf24" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: EXAMPLES */}
          {activeTab === 'examples' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Curated Benchmark Examples</h3>
                <p className="text-xs text-muted-foreground">Manage benchmark code snippets loaded in the student playground</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {popularExamples.map((ex) => (
                  <div key={ex.id} className="rounded-2xl border border-border/80 bg-surface/80 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-purple-400 uppercase">{ex.language}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">{ex.category}</span>
                    </div>
                    <h4 className="font-sans text-sm font-bold text-foreground">{ex.title}</h4>
                    <p className="font-mono text-xs text-muted-foreground">{ex.views} total views</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: ANNOUNCEMENTS */}
          {activeTab === 'announcements' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Broadcasting Announcements</h3>
                <p className="text-xs text-muted-foreground">Publish news and feature updates directly to student dashboards</p>
              </div>

              <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 space-y-4">
                <form onSubmit={handleCreateAnnouncement} className="space-y-4 font-sans text-xs">
                  <div>
                    <label className="mb-1 block font-semibold text-foreground">Announcement Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. System Maintenance Notice"
                      value={newAnnTitle}
                      onChange={(e) => setNewAnnTitle(e.target.value)}
                      className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2 text-foreground outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-semibold text-foreground">Content Message</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Enter broadcast text..."
                      value={newAnnContent}
                      onChange={(e) => setNewAnnContent(e.target.value)}
                      className="w-full rounded-xl border border-border/70 bg-background/60 p-3 text-foreground outline-none focus:border-purple-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-2.5 font-semibold text-white hover:bg-purple-500"
                  >
                    <Megaphone className="h-4 w-4" />
                    <span>Publish Announcement</span>
                  </button>
                </form>
              </div>

              <div className="space-y-3">
                {announcements.map((ann) => (
                  <div key={ann.id} className="rounded-2xl border border-border/60 bg-surface/60 p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans text-xs font-bold text-foreground">{ann.title}</h4>
                      <span className="font-mono text-[10px] text-muted-foreground">{ann.date}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{ann.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Admin System Settings</h3>
                <p className="text-xs text-muted-foreground">Global security policies and FastAPI integration settings</p>
              </div>

              <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 space-y-4 font-sans text-xs">
                <div className="space-y-3">
                  <label className="flex items-center justify-between text-muted-foreground">
                    <span>Enforce College Email Domain Validation (@college.edu)</span>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-purple-600 rounded" />
                  </label>
                  <label className="flex items-center justify-between text-muted-foreground">
                    <span>Allow Guest Scholar Anonymous Preview Mode</span>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-purple-600 rounded" />
                  </label>
                  <label className="flex items-center justify-between text-muted-foreground">
                    <span>FastAPI Backend Mock Fallback Service Layer</span>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-purple-600 rounded" />
                  </label>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
