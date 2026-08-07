import { o as __toESM } from "../_runtime.mjs";
import { c as useNotifications, f as useSettings, l as blip, o as useAuth } from "./router-B_pj-fbL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as LayoutDashboard, C as ShieldCheck, D as Send, Et as ChevronLeft, Gt as Activity, J as LogOut, K as Megaphone, Lt as BookOpen, O as Search, St as CircleCheck, T as Settings, Tt as ChevronRight, U as MessageSquare, V as Moon, W as Menu, Z as LoaderCircle, _ as Sun, c as UserX, f as TrendingUp, kt as ChartColumn, l as UserCheck, n as X, o as Users, p as Trash2, v as Star } from "../_libs/lucide-react.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as NotificationsCenter, r as ProtectedRoute, t as FeedbackService } from "./feedbackService-Bx0ORHy6.mjs";
import { a as XAxis, c as Pie, d as Tooltip, i as YAxis, l as Cell, n as PieChart, o as Area, r as BarChart, s as Bar, t as AreaChart, u as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-C7T8ESvp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY_USERS = "taltrix_users_db";
function getStoredUsers() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY_USERS);
		return raw ? JSON.parse(raw) : [];
	} catch (e) {
		return [];
	}
}
function saveStoredUsers(users) {
	if (typeof window === "undefined") return;
	localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}
var UserService = class {
	static async getUsers(options) {
		await new Promise((res) => setTimeout(res, 150));
		let users = getStoredUsers();
		if (options.search.trim()) {
			const q = options.search.toLowerCase().trim();
			users = users.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.rollNumber && u.rollNumber.toLowerCase().includes(q) || u.department && u.department.toLowerCase().includes(q));
		}
		if (options.department && options.department !== "all") users = users.filter((u) => u.department === options.department);
		if (options.year && options.year !== "all") users = users.filter((u) => u.year === options.year);
		if (options.status && options.status !== "all") users = users.filter((u) => u.status === options.status);
		if (options.role && options.role !== "all") users = users.filter((u) => u.role === options.role);
		users.sort((a, b) => {
			let fieldA = a[options.sortBy] || "";
			let fieldB = b[options.sortBy] || "";
			if (typeof fieldA === "string") fieldA = fieldA.toLowerCase();
			if (typeof fieldB === "string") fieldB = fieldB.toLowerCase();
			if (fieldA < fieldB) return options.sortOrder === "asc" ? -1 : 1;
			if (fieldA > fieldB) return options.sortOrder === "asc" ? 1 : -1;
			return 0;
		});
		const total = users.length;
		const startIndex = (options.page - 1) * options.pageSize;
		return {
			users: users.slice(startIndex, startIndex + options.pageSize),
			total,
			totalPages: Math.max(1, Math.ceil(total / options.pageSize)),
			page: options.page
		};
	}
	static async updateUserStatus(userId, status) {
		const users = getStoredUsers();
		const index = users.findIndex((u) => u.id === userId);
		if (index === -1) throw new Error("User not found");
		const updated = {
			...users[index],
			status
		};
		users[index] = updated;
		saveStoredUsers(users);
		return updated;
	}
	static async updateUserRole(userId, role) {
		const users = getStoredUsers();
		const index = users.findIndex((u) => u.id === userId);
		if (index === -1) throw new Error("User not found");
		const updated = {
			...users[index],
			role
		};
		users[index] = updated;
		saveStoredUsers(users);
		return updated;
	}
	static async deleteUser(userId) {
		let users = getStoredUsers();
		users = users.filter((u) => u.id !== userId);
		saveStoredUsers(users);
		return true;
	}
};
var AnalyticsService = class {
	static async getSystemAnalytics() {
		await new Promise((res) => setTimeout(res, 100));
		return {
			totalUsers: 1420,
			activeUsersToday: 384,
			feedbackCount: 96,
			dailyVisits: 2850,
			userGrowthPercent: 14.8,
			visualizationsCreatedOverTime: [
				{
					date: "Mon",
					count: 320
				},
				{
					date: "Tue",
					count: 410
				},
				{
					date: "Wed",
					count: 580
				},
				{
					date: "Thu",
					count: 720
				},
				{
					date: "Fri",
					count: 890
				},
				{
					date: "Sat",
					count: 640
				},
				{
					date: "Sun",
					count: 510
				}
			],
			mostUsedLanguages: [
				{
					name: "Python",
					value: 45,
					color: "#3b82f6"
				},
				{
					name: "C++",
					value: 25,
					color: "#c084fc"
				},
				{
					name: "JavaScript",
					value: 20,
					color: "#fbbf24"
				},
				{
					name: "Java",
					value: 10,
					color: "#34d399"
				}
			],
			userGrowthMonthly: [
				{
					month: "Jan",
					students: 450,
					admins: 8
				},
				{
					month: "Feb",
					students: 620,
					admins: 10
				},
				{
					month: "Mar",
					students: 780,
					admins: 12
				},
				{
					month: "Apr",
					students: 950,
					admins: 14
				},
				{
					month: "May",
					students: 1180,
					admins: 15
				},
				{
					month: "Jun",
					students: 1420,
					admins: 18
				}
			],
			dailySessionsWeek: [
				{
					day: "Mon",
					sessions: 1200
				},
				{
					day: "Tue",
					sessions: 1450
				},
				{
					day: "Wed",
					sessions: 1900
				},
				{
					day: "Thu",
					sessions: 2100
				},
				{
					day: "Fri",
					sessions: 2400
				},
				{
					day: "Sat",
					sessions: 1800
				},
				{
					day: "Sun",
					sessions: 1650
				}
			],
			ratingDistribution: [
				{
					stars: 5,
					count: 68
				},
				{
					stars: 4,
					count: 20
				},
				{
					stars: 3,
					count: 5
				},
				{
					stars: 2,
					count: 2
				},
				{
					stars: 1,
					count: 1
				}
			]
		};
	}
	static async getPopularExamples() {
		return [
			{
				id: "ex_1",
				title: "Binary Search Tree Balancing",
				language: "python",
				views: 4320,
				category: "Trees & Graphs"
			},
			{
				id: "ex_2",
				title: "Recursive Call Stack (Fibonacci)",
				language: "cpp",
				views: 3890,
				category: "Recursion"
			},
			{
				id: "ex_3",
				title: "QuickSort Partition Tracing",
				language: "javascript",
				views: 3120,
				category: "Sorting"
			},
			{
				id: "ex_4",
				title: "Linked List Reversal Memory Graph",
				language: "c",
				views: 2750,
				category: "Memory"
			}
		];
	}
};
function AdminDashboardPage() {
	const navigate = useNavigate();
	const { user, logout } = useAuth();
	const { settings, toggleDarkLight } = useSettings();
	const { notify } = useNotifications();
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [userOptions, setUserOptions] = (0, import_react.useState)({
		search: "",
		department: "all",
		year: "all",
		status: "all",
		role: "all",
		sortBy: "name",
		sortOrder: "asc",
		page: 1,
		pageSize: 10
	});
	const [userData, setUserData] = (0, import_react.useState)({
		users: [],
		total: 0,
		totalPages: 1
	});
	const [isLoadingUsers, setIsLoadingUsers] = (0, import_react.useState)(false);
	const [selectedUser, setSelectedUser] = (0, import_react.useState)(null);
	const [feedbacks, setFeedbacks] = (0, import_react.useState)([]);
	const [fbFilterRating, setFbFilterRating] = (0, import_react.useState)("all");
	const [fbFilterDept, setFbFilterDept] = (0, import_react.useState)("all");
	const [fbSearch, setFbSearch] = (0, import_react.useState)("");
	const [selectedFeedback, setSelectedFeedback] = (0, import_react.useState)(null);
	const [adminReplyText, setAdminReplyText] = (0, import_react.useState)("");
	const [analytics, setAnalytics] = (0, import_react.useState)(null);
	const [popularExamples, setPopularExamples] = (0, import_react.useState)([]);
	const [announcements, setAnnouncements] = (0, import_react.useState)([{
		id: "ann_1",
		title: "TALTRIX v2.4 Engine Release",
		content: "Added C++20 memory alignment visualization and step timeline scrubbing.",
		date: "2026-08-05"
	}]);
	const [newAnnTitle, setNewAnnTitle] = (0, import_react.useState)("");
	const [newAnnContent, setNewAnnContent] = (0, import_react.useState)("");
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
	(0, import_react.useEffect)(() => {
		fetchUsers();
	}, [userOptions]);
	(0, import_react.useEffect)(() => {
		const loadFeedback = async () => {
			const items = await FeedbackService.getFeedbacks({
				rating: fbFilterRating,
				department: fbFilterDept,
				search: fbSearch
			});
			setFeedbacks(items);
		};
		loadFeedback();
	}, [
		fbFilterRating,
		fbFilterDept,
		fbSearch
	]);
	(0, import_react.useEffect)(() => {
		const loadAnalytics = async () => {
			const data = await AnalyticsService.getSystemAnalytics();
			setAnalytics(data);
			const ex = await AnalyticsService.getPopularExamples();
			setPopularExamples(ex);
		};
		loadAnalytics();
	}, []);
	const handleStatusChange = async (userId, status) => {
		blip("click");
		await UserService.updateUserStatus(userId, status);
		notify("success", "User Status Updated", `Status changed to ${status}.`);
		fetchUsers();
	};
	const handleRoleChange = async (userId, role) => {
		blip("click");
		await UserService.updateUserRole(userId, role);
		notify("success", "Role Updated", `User granted ${role} privileges.`);
		fetchUsers();
	};
	const handleDeleteUser = async (userId) => {
		if (!confirm("Are you sure you want to remove this user from TALTRIX?")) return;
		blip("click");
		await UserService.deleteUser(userId);
		notify("info", "User Deleted", "Account removed from system db.");
		fetchUsers();
	};
	const handleReplyFeedback = async () => {
		if (!selectedFeedback) return;
		blip("click");
		const updated = await FeedbackService.updateFeedbackStatus(selectedFeedback.id, "resolved", adminReplyText);
		notify("success", "Feedback Resolved", "Response saved and dispatched to student.");
		setSelectedFeedback(updated);
		setAdminReplyText("");
		const items = await FeedbackService.getFeedbacks();
		setFeedbacks(items);
	};
	const handleCreateAnnouncement = (e) => {
		e.preventDefault();
		if (!newAnnTitle.trim() || !newAnnContent.trim()) return;
		blip("click");
		const item = {
			id: `ann_${Date.now()}`,
			title: newAnnTitle,
			content: newAnnContent,
			date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		};
		setAnnouncements([item, ...announcements]);
		notify("success", "Announcement Published", "Broadcast live to student dashboards.");
		setNewAnnTitle("");
		setNewAnnContent("");
	};
	const NAV_ITEMS = [
		{
			id: "overview",
			label: "Executive Dashboard",
			icon: LayoutDashboard
		},
		{
			id: "users",
			label: "User Management",
			icon: Users
		},
		{
			id: "feedback",
			label: "Feedback Center",
			icon: MessageSquare
		},
		{
			id: "analytics",
			label: "System Analytics",
			icon: ChartColumn
		},
		{
			id: "examples",
			label: "Benchmark Examples",
			icon: BookOpen
		},
		{
			id: "announcements",
			label: "Announcements",
			icon: Megaphone
		},
		{
			id: "settings",
			label: "System Settings",
			icon: Settings
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-full overflow-hidden bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden w-64 shrink-0 flex-col border-r border-border/70 bg-surface/90 backdrop-blur-xl md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-16 items-center justify-between border-b border-border/70 px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-purple-600 shadow-md shadow-purple-500/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-bold tracking-[0.34em]",
							children: "TALTRIX"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border/60 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: user?.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name || "Admin"}`,
							alt: user?.name,
							className: "h-9 w-9 rounded-full border border-purple-400 bg-surface object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-sans text-xs font-bold text-foreground truncate",
								children: user?.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-mono text-[10px] text-purple-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ADMIN CONTROL" })]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex-1 space-y-1 overflow-y-auto p-3 font-sans text-xs",
					children: NAV_ITEMS.map((item) => {
						const Icon = item.icon;
						const active = activeTab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								blip("hover");
								setActiveTab(item.id);
							},
							className: `flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 font-medium transition-all ${active ? "bg-purple-500/20 font-semibold text-purple-300 border border-purple-500/40" : "text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${active ? "text-purple-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
							})
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/70 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							blip("click");
							logout();
							navigate({ to: "/" });
						},
						className: "flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-medium text-rose-400 transition-colors hover:bg-rose-500/10 hover:text-rose-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sign Out" })]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-16 shrink-0 items-center justify-between border-b border-border/70 bg-surface/75 px-4 sm:px-6 backdrop-blur-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground md:hidden",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-sm sm:text-base font-bold text-foreground",
							children: activeTab === "overview" ? "System Administration Portal" : activeTab.toUpperCase()
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleDarkLight,
							title: "Toggle Theme",
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground hover:text-purple-400",
							children: settings.theme.id === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsCenter, {})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						height: 0
					},
					animate: {
						opacity: 1,
						height: "auto"
					},
					exit: {
						opacity: 0,
						height: 0
					},
					className: "border-b border-border/70 bg-surface p-3 md:hidden space-y-1",
					children: NAV_ITEMS.map((item) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setActiveTab(item.id);
								setMobileMenuOpen(false);
							},
							className: `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium ${activeTab === item.id ? "bg-purple-500/20 text-purple-300" : "text-muted-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
						}, item.id);
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6",
					children: [
						activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-xs font-semibold",
														children: "Total Platform Users"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-cyan-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-3xl font-bold text-foreground",
													children: analytics?.totalUsers || 1420
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-emerald-400",
													children: "+14.8% this month"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-xs font-semibold",
														children: "Active Today"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-4 w-4 text-purple-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-3xl font-bold text-foreground",
													children: analytics?.activeUsersToday || 384
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-cyan-400",
													children: "Peak hour 14:00"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-xs font-semibold",
														children: "Feedback Received"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4 text-amber-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-3xl font-bold text-foreground",
													children: analytics?.feedbackCount || 96
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-amber-400",
													children: "4 unread items"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-5 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-xs font-semibold",
														children: "Daily Visits"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-emerald-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-3xl font-bold text-foreground",
													children: analytics?.dailyVisits || 2850
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-emerald-400",
													children: "Avg 4.8m session time"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-display text-sm font-bold text-foreground flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-cyan-400" }), " Visualizations Created (Weekly)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-60 w-full font-mono text-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
												width: "100%",
												height: "100%",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
													data: analytics?.visualizationsCreatedOverTime || [],
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
															id: "colorCount",
															x1: "0",
															y1: "0",
															x2: "0",
															y2: "1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
																offset: "5%",
																stopColor: "#22d3ee",
																stopOpacity: .4
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
																offset: "95%",
																stopColor: "#22d3ee",
																stopOpacity: 0
															})]
														}) }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
															dataKey: "date",
															stroke: "#64748b",
															fontSize: 10
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
															stroke: "#64748b",
															fontSize: 10
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
															backgroundColor: "#0f172a",
															borderColor: "#334155"
														} }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
															type: "monotone",
															dataKey: "count",
															stroke: "#22d3ee",
															strokeWidth: 2,
															fillOpacity: 1,
															fill: "url(#colorCount)"
														})
													]
												})
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-display text-sm font-bold text-foreground flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-purple-400" }), " Most Used Execution Languages"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-60 w-full flex items-center justify-center font-mono text-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
												width: "100%",
												height: "100%",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
													data: analytics?.mostUsedLanguages || [],
													cx: "50%",
													cy: "50%",
													innerRadius: 60,
													outerRadius: 80,
													paddingAngle: 5,
													dataKey: "value",
													children: (analytics?.mostUsedLanguages || []).map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.color }, `cell-${index}`))
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
													backgroundColor: "#0f172a",
													borderColor: "#334155"
												} })] })
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-sm font-bold text-foreground",
										children: "Popular Benchmark Programs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",
										children: popularExamples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/60 bg-background/40 p-4 space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-cyan-400 uppercase font-bold",
													children: ex.language
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-sans text-xs font-bold text-foreground",
													children: ex.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-mono text-[10px] text-muted-foreground",
													children: [ex.views, " total student views"]
												})
											]
										}, ex.id))
									})]
								})
							]
						}),
						activeTab === "users" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center justify-between gap-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-bold text-foreground",
										children: "User Management"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "Search, filter, edit roles and statuses of students & admins"
									})] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-4 rounded-2xl border border-border/80 bg-surface/80 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative sm:col-span-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Search name, email, roll number...",
												value: userOptions.search,
												onChange: (e) => setUserOptions({
													...userOptions,
													search: e.target.value,
													page: 1
												}),
												className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2 text-xs text-foreground outline-none focus:border-purple-500"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: userOptions.department,
											onChange: (e) => setUserOptions({
												...userOptions,
												department: e.target.value,
												page: 1
											}),
											className: "w-full rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none focus:border-purple-500",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													className: "bg-surface",
													children: "All Departments"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Computer Science",
													className: "bg-surface",
													children: "Computer Science"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Information Technology",
													className: "bg-surface",
													children: "Information Technology"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Artificial Intelligence",
													className: "bg-surface",
													children: "Artificial Intelligence"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Electronics",
													className: "bg-surface",
													children: "Electronics"
												})
											]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: userOptions.status,
											onChange: (e) => setUserOptions({
												...userOptions,
												status: e.target.value,
												page: 1
											}),
											className: "w-full rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none focus:border-purple-500",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													className: "bg-surface",
													children: "All Statuses"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "active",
													className: "bg-surface",
													children: "Active"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "inactive",
													className: "bg-surface",
													children: "Inactive"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "suspended",
													className: "bg-surface",
													children: "Suspended"
												})
											]
										}) })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-x-auto rounded-3xl border border-border/80 bg-surface/80 shadow-xl backdrop-blur-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left font-sans text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "border-b border-border/70 bg-background/40 font-mono text-[11px] uppercase text-muted-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Name"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Roll No"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Department"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Year"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Role"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4",
													children: "Status"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "p-4 text-right",
													children: "Actions"
												})
											] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-border/60",
											children: isLoadingUsers ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												colSpan: 7,
												className: "p-8 text-center text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto h-6 w-6 animate-spin text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-2 block font-mono text-xs",
													children: "Querying system database..."
												})]
											}) }) : userData.users.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: 7,
												className: "p-8 text-center text-muted-foreground",
												children: "No matching users found."
											}) }) : userData.users.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "transition-colors hover:bg-surface-h/50",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: u.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${u.name}`,
																alt: u.name,
																className: "h-8 w-8 rounded-full border border-border bg-background object-cover"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "font-bold text-foreground",
																children: u.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-[11px] text-muted-foreground",
																children: u.email
															})] })]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 font-mono text-[11px] text-cyan-400",
														children: u.rollNumber || "—"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 text-muted-foreground",
														children: u.department || "—"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 text-muted-foreground",
														children: u.year || "—"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-md px-2 py-0.5 font-mono text-[10px] uppercase font-bold ${u.role === "admin" ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"}`,
															children: u.role
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold capitalize ${u.status === "active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" : u.status === "inactive" ? "bg-amber-500/10 text-amber-400 border border-amber-500/30" : "bg-rose-500/10 text-rose-400 border border-rose-500/30"}`,
															children: u.status
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "p-4 text-right",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-end gap-1.5",
															children: [
																u.status === "active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleStatusChange(u.id, "suspended"),
																	title: "Suspend User",
																	className: "rounded-lg p-1.5 text-muted-foreground hover:bg-amber-500/10 hover:text-amber-400",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "h-4 w-4" })
																}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleStatusChange(u.id, "active"),
																	title: "Activate User",
																	className: "rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-400",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })
																}),
																u.role === "student" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleRoleChange(u.id, "admin"),
																	title: "Promote to Admin",
																	className: "rounded-lg p-1.5 text-muted-foreground hover:bg-purple-500/10 hover:text-purple-400",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
																}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleRoleChange(u.id, "student"),
																	title: "Demote to Student",
																	className: "rounded-lg p-1.5 text-muted-foreground hover:bg-cyan-500/10 hover:text-cyan-400",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" })
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleDeleteUser(u.id),
																	title: "Delete User",
																	className: "rounded-lg p-1.5 text-muted-foreground hover:bg-rose-500/10 hover:text-rose-400",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
																})
															]
														})
													})
												]
											}, u.id))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border/70 p-4 font-mono text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: [
												"Page ",
												userData.page || 1,
												" of ",
												userData.totalPages || 1,
												" (",
												userData.total,
												" total)"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: userOptions.page <= 1,
												onClick: () => setUserOptions({
													...userOptions,
													page: userOptions.page - 1
												}),
												className: "rounded-lg border border-border/70 px-3 py-1.5 disabled:opacity-50 hover:bg-surface-h",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: userOptions.page >= userData.totalPages,
												onClick: () => setUserOptions({
													...userOptions,
													page: userOptions.page + 1
												}),
												className: "rounded-lg border border-border/70 px-3 py-1.5 disabled:opacity-50 hover:bg-surface-h",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
											})]
										})]
									})]
								})
							]
						}),
						activeTab === "feedback" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "Feedback Management"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Review student feedback, ratings and resolve issues"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Filter feedback message or user...",
											value: fbSearch,
											onChange: (e) => setFbSearch(e.target.value),
											className: "rounded-xl border border-border/70 bg-background/60 px-4 py-2 text-xs text-foreground outline-none focus:border-purple-500"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: fbFilterRating,
											onChange: (e) => setFbFilterRating(e.target.value === "all" ? "all" : Number(e.target.value)),
											className: "rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													className: "bg-surface",
													children: "All Ratings"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 5,
													className: "bg-surface",
													children: "5 Stars"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 4,
													className: "bg-surface",
													children: "4 Stars"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: 3,
													className: "bg-surface",
													children: "3 Stars"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: fbFilterDept,
											onChange: (e) => setFbFilterDept(e.target.value),
											className: "rounded-xl border border-border/70 bg-background/60 px-3 py-2 text-xs text-foreground outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "all",
													className: "bg-surface",
													children: "All Departments"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Computer Science",
													className: "bg-surface",
													children: "Computer Science"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Information Technology",
													className: "bg-surface",
													children: "Information Technology"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
									children: feedbacks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										onClick: () => {
											setSelectedFeedback(item);
											setAdminReplyText(item.adminResponse || "");
										},
										className: `cursor-pointer rounded-2xl border p-5 transition-all shadow-lg backdrop-blur-xl ${item.status === "resolved" ? "border-border/60 bg-surface/40" : "border-purple-500/40 bg-surface/90 hover:border-purple-500"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex text-amber-400",
														children: [...Array(item.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] uppercase text-purple-400 font-bold",
														children: item.category
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-muted-foreground",
													children: new Date(item.createdAt).toLocaleDateString()
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "mt-3 font-sans text-sm font-bold text-foreground",
												children: item.subject
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground line-clamp-2",
												children: item.message
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													item.userName,
													" (",
													item.department,
													")"
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-semibold text-purple-400 hover:underline flex items-center gap-1",
													children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
												})]
											})
										]
									}, item.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selectedFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "fixed inset-0 z-[250] flex justify-end bg-black/60 backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: { x: "100%" },
										animate: { x: 0 },
										exit: { x: "100%" },
										transition: {
											duration: .25,
											ease: "easeOut"
										},
										className: "w-full max-w-lg bg-surface p-6 shadow-2xl overflow-y-auto space-y-6 border-l border-border/80",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between border-b border-border/70 pb-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-base font-bold text-foreground",
													children: "Feedback Details"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setSelectedFeedback(null),
													className: "rounded-lg p-1 text-muted-foreground hover:text-foreground",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3 font-sans text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-bold text-foreground",
															children: selectedFeedback.userName
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[10px] text-muted-foreground",
															children: selectedFeedback.userEmail
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "font-mono text-[11px] text-cyan-400",
														children: [
															selectedFeedback.department,
															" • ",
															selectedFeedback.year
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex items-center gap-1 text-amber-400 pt-2",
														children: [...Array(selectedFeedback.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-bold text-sm text-foreground pt-2",
														children: selectedFeedback.subject
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "rounded-xl border border-border/60 bg-background/50 p-4 text-muted-foreground leading-relaxed",
														children: selectedFeedback.message
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3 pt-4 border-t border-border/70 font-sans text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-bold text-foreground",
														children: "Admin Response / Action Notes"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														rows: 4,
														placeholder: "Type response for student...",
														value: adminReplyText,
														onChange: (e) => setAdminReplyText(e.target.value),
														className: "w-full rounded-xl border border-border/70 bg-background/60 p-3 text-foreground outline-none focus:border-purple-500"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: handleReplyFeedback,
														className: "flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-2.5 font-semibold text-white hover:bg-purple-500",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mark Resolved & Save Response" })]
													})
												]
											})
										]
									})
								}) })
							]
						}),
						activeTab === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "System Analytics"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "User growth telemetry, usage spikes and ratings distribution"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-sm font-bold text-foreground",
										children: "Monthly Student Growth"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-64 w-full font-mono text-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
											width: "100%",
											height: "100%",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
												data: analytics?.userGrowthMonthly || [],
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
														dataKey: "month",
														stroke: "#64748b",
														fontSize: 10
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
														stroke: "#64748b",
														fontSize: 10
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
														backgroundColor: "#0f172a",
														borderColor: "#334155"
													} }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
														dataKey: "students",
														fill: "#a855f7",
														radius: [
															4,
															4,
															0,
															0
														]
													})
												]
											})
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-sm font-bold text-foreground",
										children: "Rating Distribution (1 to 5 Stars)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-64 w-full font-mono text-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
											width: "100%",
											height: "100%",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
												data: analytics?.ratingDistribution || [],
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
														dataKey: "stars",
														stroke: "#64748b",
														fontSize: 10
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
														stroke: "#64748b",
														fontSize: 10
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
														backgroundColor: "#0f172a",
														borderColor: "#334155"
													} }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
														dataKey: "count",
														fill: "#fbbf24",
														radius: [
															4,
															4,
															0,
															0
														]
													})
												]
											})
										})
									})]
								})]
							})]
						}),
						activeTab === "examples" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Curated Benchmark Examples"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Manage benchmark code snippets loaded in the student playground"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: popularExamples.map((ex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/80 bg-surface/80 p-5 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-xs font-bold text-purple-400 uppercase",
												children: ex.language
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] text-muted-foreground",
												children: ex.category
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-sans text-sm font-bold text-foreground",
											children: ex.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono text-xs text-muted-foreground",
											children: [ex.views, " total views"]
										})
									]
								}, ex.id))
							})]
						}),
						activeTab === "announcements" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "Broadcasting Announcements"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Publish news and feature updates directly to student dashboards"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-3xl border border-border/80 bg-surface/80 p-6 space-y-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleCreateAnnouncement,
										className: "space-y-4 font-sans text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-1 block font-semibold text-foreground",
												children: "Announcement Title"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												placeholder: "e.g. System Maintenance Notice",
												value: newAnnTitle,
												onChange: (e) => setNewAnnTitle(e.target.value),
												className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2 text-foreground outline-none focus:border-purple-500"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-1 block font-semibold text-foreground",
												children: "Content Message"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												required: true,
												placeholder: "Enter broadcast text...",
												value: newAnnContent,
												onChange: (e) => setNewAnnContent(e.target.value),
												className: "w-full rounded-xl border border-border/70 bg-background/60 p-3 text-foreground outline-none focus:border-purple-500"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "submit",
												className: "flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-2.5 font-semibold text-white hover:bg-purple-500",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish Announcement" })]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: announcements.map((ann) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border/60 bg-surface/60 p-4 space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-sans text-xs font-bold text-foreground",
												children: ann.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] text-muted-foreground",
												children: ann.date
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: ann.content
										})]
									}, ann.id))
								})
							]
						}),
						activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Admin System Settings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Global security policies and FastAPI integration settings"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-3xl border border-border/80 bg-surface/80 p-6 space-y-4 font-sans text-xs",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enforce College Email Domain Validation (@college.edu)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true,
												className: "h-4 w-4 text-purple-600 rounded"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Allow Guest Scholar Anonymous Preview Mode" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true,
												className: "h-4 w-4 text-purple-600 rounded"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FastAPI Backend Mock Fallback Service Layer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true,
												className: "h-4 w-4 text-purple-600 rounded"
											})]
										})
									]
								})
							})]
						})
					]
				})
			]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
	allowedRoles: ["admin"],
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboardPage, {})
});
//#endregion
export { SplitComponent as component };
