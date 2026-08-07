import { o as __toESM } from "../_runtime.mjs";
import { c as useNotifications, f as useSettings, l as blip, o as useAuth } from "./router-BQ7q_z5s.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as LayoutDashboard, A as Save, D as Send, Gt as Activity, It as Bookmark, J as LogOut, N as Plus, P as Play, T as Settings, Tt as ChevronRight, U as MessageSquare, V as Moon, W as Menu, Z as LoaderCircle, _ as Sun, b as Sparkles, bt as Clock, f as TrendingUp, g as Terminal, n as X, nt as KeyRound, pt as Eye, s as User, v as Star, yt as CodeXml, zt as Award } from "../_libs/lucide-react.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as NotificationsCenter, r as ProtectedRoute, t as FeedbackService } from "./feedbackService-DoRXD7Cr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DLtaDrfq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_VISUALIZATIONS = [
	{
		id: "vis_1",
		title: "Binary Tree Level Order Traversal",
		language: "python",
		codeSnippet: "def levelOrder(root):\n    if not root: return []\n    queue = [root]",
		stepCount: 24,
		lastExecuted: "2 hours ago",
		tags: [
			"Trees",
			"BFS",
			"Queue"
		],
		starred: true
	},
	{
		id: "vis_2",
		title: "MergeSort Array Split & Conquer",
		language: "cpp",
		codeSnippet: "void mergeSort(int arr[], int l, int r) {\n    if (l >= r) return;",
		stepCount: 48,
		lastExecuted: "Yesterday",
		tags: ["Sorting", "Recursion"]
	},
	{
		id: "vis_3",
		title: "Dijkstra Shortest Path Memory Graph",
		language: "javascript",
		codeSnippet: "function dijkstra(graph, start) {\n    const dist = {};",
		stepCount: 86,
		lastExecuted: "3 days ago",
		tags: ["Graph", "Pointers"]
	}
];
var MOCK_SAVED_PROGRAMS = [{
	id: "sp_1",
	title: "QuickSort Dual Pivot Tracing",
	language: "python",
	code: `def partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] <= pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i+1], arr[high] = arr[high], arr[i+1]\n    return i + 1`,
	description: "Optimal pivot swapping with stack trace frame visualization.",
	updatedAt: "2026-08-05"
}, {
	id: "sp_2",
	title: "LRU Cache Double Linked List",
	language: "cpp",
	code: `class LRUCache {\n    struct Node {\n        int key, val;\n        Node *prev, *next;\n    };\n};`,
	description: "Doubly linked list pointer re-binding analysis.",
	updatedAt: "2026-08-02"
}];
var MOCK_ACHIEVEMENTS = [
	{
		id: "ach_1",
		title: "Recursion Master",
		description: "Visualized 25 recursive call stack traces without stack overflow",
		iconName: "Award",
		unlocked: true,
		unlockedAt: "2026-08-01",
		progress: 100,
		category: "execution"
	},
	{
		id: "ach_2",
		title: "Memory Whisperer",
		description: "Inspected 100 Heap and Stack pointer allocation frames",
		iconName: "Sparkles",
		unlocked: true,
		unlockedAt: "2026-08-04",
		progress: 100,
		category: "mastery"
	},
	{
		id: "ach_3",
		title: "Speed Visualizer",
		description: "Executed code timeline at 5x step animation rate for 10 hours",
		iconName: "Clock",
		unlocked: false,
		progress: 68,
		category: "learning"
	},
	{
		id: "ach_4",
		title: "Polyglot Dev",
		description: "Visualized programs in Python, C++, JavaScript and C",
		iconName: "Code2",
		unlocked: true,
		unlockedAt: "2026-08-06",
		progress: 100,
		category: "social"
	}
];
var MOCK_SUBJECT_PROGRESS = [
	{
		subject: "Data Structures",
		completedPercent: 85,
		totalModules: 20,
		completedModules: 17,
		color: "bg-cyan-500"
	},
	{
		subject: "Algorithms & Complexity",
		completedPercent: 72,
		totalModules: 18,
		completedModules: 13,
		color: "bg-purple-500"
	},
	{
		subject: "Memory & Pointer Graphs",
		completedPercent: 90,
		totalModules: 10,
		completedModules: 9,
		color: "bg-emerald-500"
	},
	{
		subject: "Object Oriented Systems",
		completedPercent: 65,
		totalModules: 15,
		completedModules: 10,
		color: "bg-amber-500"
	}
];
function StudentDashboardPage() {
	const navigate = useNavigate();
	const { user, logout, updateProfile, changePassword } = useAuth();
	const { settings, setTheme, toggleDarkLight } = useSettings();
	const { notify } = useNotifications();
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(user?.name || "");
	const [rollNumber, setRollNumber] = (0, import_react.useState)(user?.rollNumber || "");
	const [department, setDepartment] = (0, import_react.useState)(user?.department || "Computer Science");
	const [year, setYear] = (0, import_react.useState)(user?.year || "3rd Year");
	const [bio, setBio] = (0, import_react.useState)(user?.bio || "");
	const [isSavingProfile, setIsSavingProfile] = (0, import_react.useState)(false);
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [isChangingPass, setIsChangingPass] = (0, import_react.useState)(false);
	const [fbRating, setFbRating] = (0, import_react.useState)(5);
	const [fbCategory, setFbCategory] = (0, import_react.useState)("ui");
	const [fbSubject, setFbSubject] = (0, import_react.useState)("");
	const [fbMessage, setFbMessage] = (0, import_react.useState)("");
	const [isSubmittingFb, setIsSubmittingFb] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (user) {
			setName(user.name);
			setRollNumber(user.rollNumber || "");
			setDepartment(user.department || "Computer Science");
			setYear(user.year || "3rd Year");
			setBio(user.bio || "");
		}
	}, [user]);
	const handleSaveProfile = async (e) => {
		e.preventDefault();
		setIsSavingProfile(true);
		try {
			await updateProfile({
				name,
				rollNumber,
				department,
				year,
				bio
			});
		} finally {
			setIsSavingProfile(false);
		}
	};
	const handleChangePassword = async (e) => {
		e.preventDefault();
		setIsChangingPass(true);
		try {
			await changePassword({
				currentPassword,
				newPassword,
				confirmPassword
			});
			setCurrentPassword("");
			setNewPassword("");
			setConfirmPassword("");
		} finally {
			setIsChangingPass(false);
		}
	};
	const handleSendFeedback = async (e) => {
		e.preventDefault();
		if (!fbSubject.trim() || !fbMessage.trim()) {
			notify("error", "Missing Information", "Please fill in both subject and message.");
			return;
		}
		setIsSubmittingFb(true);
		try {
			await FeedbackService.submitFeedback({
				userId: user?.id || "guest",
				userName: user?.name || "Student",
				userEmail: user?.email || "student@college.edu",
				department: user?.department || "Computer Science",
				year: user?.year || "3rd Year",
				rating: fbRating,
				subject: fbSubject,
				category: fbCategory,
				message: fbMessage
			});
			notify("success", "Feedback Submitted", "Thank you! Your feedback has been logged for admin review.");
			setFbSubject("");
			setFbMessage("");
		} catch (e) {
			notify("error", "Submission Failed", e.message || "Could not send feedback.");
		} finally {
			setIsSubmittingFb(false);
		}
	};
	const NAV_ITEMS = [
		{
			id: "overview",
			label: "Dashboard",
			icon: LayoutDashboard
		},
		{
			id: "visualizations",
			label: "My Visualizations",
			icon: Eye
		},
		{
			id: "saved",
			label: "Saved Programs",
			icon: Bookmark
		},
		{
			id: "activity",
			label: "Recent Activity",
			icon: Activity
		},
		{
			id: "achievements",
			label: "Achievements",
			icon: Award
		},
		{
			id: "progress",
			label: "Learning Progress",
			icon: TrendingUp
		},
		{
			id: "settings",
			label: "Settings",
			icon: Settings
		},
		{
			id: "feedback",
			label: "Feedback",
			icon: MessageSquare
		},
		{
			id: "profile",
			label: "Profile",
			icon: User
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
							className: "grid h-8 w-8 place-items-center rounded-lg [background-image:var(--gradient-primary)] shadow-md shadow-cyan-500/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-4 w-4 text-primary-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-bold tracking-[0.34em]",
							children: "TALTRIX"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border/60 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: user?.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name || "Student"}`,
							alt: user?.name,
							className: "h-9 w-9 rounded-full border border-cyan-500/40 bg-surface object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-sans text-xs font-bold text-foreground truncate",
								children: user?.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 font-mono text-[10px] text-cyan-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: user?.rollNumber || "STUDENT" })]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex-1 space-y-1 overflow-y-auto p-3 font-sans text-xs",
					children: NAV_ITEMS.map((item) => {
						const Icon = item.icon;
						const active = activeTab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								blip("hover");
								setActiveTab(item.id);
							},
							className: `flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 font-medium transition-all ${active ? "bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30" : "text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${active ? "text-cyan-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
							}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 text-cyan-400" })]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/70 p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							blip("run");
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
							className: "font-display text-sm sm:text-base font-bold capitalize text-foreground",
							children: activeTab === "overview" ? "Student Workspace Dashboard" : activeTab.replace("-", " ")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggleDarkLight,
								title: "Toggle Theme",
								className: "grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground hover:text-cyan-400",
								children: settings.theme.id === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsCenter, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/workspace",
								className: "hidden sm:inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 fill-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Launch Playground" })]
							})
						]
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
							className: `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium ${activeTab === item.id ? "bg-cyan-500/15 text-cyan-300" : "text-muted-foreground"}`,
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-surface to-purple-950/30 p-6 sm:p-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative z-10 max-w-2xl space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-cyan-400",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " ACADEMIC PERFORMANCE"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
												className: "font-display text-2xl sm:text-3xl font-bold text-foreground",
												children: [
													"Hello, ",
													user?.name || "Scholar",
													"!"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-sans text-xs text-muted-foreground leading-relaxed",
												children: "Track your execution tracing, memory heap graphs, and algorithm mastery in one place."
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-[11px] font-semibold",
														children: "Visualizations"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-4 w-4 text-cyan-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-2xl font-bold text-foreground",
													children: "42"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-emerald-400",
													children: "+5 this week"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-[11px] font-semibold",
														children: "Execution Sessions"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-purple-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-2xl font-bold text-foreground",
													children: "128"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-cyan-400",
													children: "1,420 steps traced"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-[11px] font-semibold",
														children: "Learning Hours"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-amber-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-2xl font-bold text-foreground",
													children: "34.5 hrs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-muted-foreground",
													children: "Avg 1.2h / day"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-[11px] font-semibold",
														children: "Fav Language"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-emerald-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-2xl font-bold text-foreground",
													children: "Python"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] text-emerald-400",
													children: "62% of sessions"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border/80 bg-surface/80 p-4 backdrop-blur-xl",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-sans text-[11px] font-semibold",
														children: "Completion"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-cyan-400" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 font-display text-2xl font-bold text-foreground",
													children: "78%"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-cyan-500",
														style: { width: "78%" }
													})
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/workspace",
											className: "flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New Visualization" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/workspace",
											className: "flex items-center gap-2 rounded-xl border border-border/80 bg-surface/80 px-4 py-2.5 font-sans text-xs font-medium text-foreground transition-all hover:bg-surface-h",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Playground" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setActiveTab("saved"),
											className: "flex items-center gap-2 rounded-xl border border-border/80 bg-surface/80 px-4 py-2.5 font-sans text-xs font-medium text-foreground transition-all hover:bg-surface-h",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Browse Saved Examples" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-6 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border/60 pb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "font-display text-sm font-bold text-foreground flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-cyan-400" }), " Continue Learning"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] text-muted-foreground",
												children: "3 Modules Pending"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-3",
											children: MOCK_VISUALIZATIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "group flex items-center justify-between rounded-2xl border border-border/60 bg-background/40 p-4 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] uppercase font-bold text-cyan-400",
														children: item.language
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-sans text-xs font-semibold text-foreground",
														children: item.title
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-1 font-mono text-[11px] text-muted-foreground",
													children: [
														item.stepCount,
														" execution steps • ",
														item.lastExecuted
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: "/workspace",
													className: "grid h-8 w-8 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500 group-hover:text-black",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" })
												})]
											}, item.id))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-between border-b border-border/60 pb-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "font-display text-sm font-bold text-foreground flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-purple-400" }), " Recent Execution Timeline"]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-3 font-sans text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-start gap-3 border-l-2 border-cyan-500 pl-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "font-semibold text-foreground",
															children: "Executed Binary Tree Traversal"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-muted-foreground text-[11px]",
															children: "Traced 24 call stack frames in Python"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[10px] text-muted-foreground",
															children: "Today at 14:20"
														})
													] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-start gap-3 border-l-2 border-purple-500 pl-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "font-semibold text-foreground",
															children: "Saved Program \"QuickSort Dual Pivot\""
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-muted-foreground text-[11px]",
															children: "Updated snippet in Saved Programs"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[10px] text-muted-foreground",
															children: "Yesterday"
														})
													] })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-start gap-3 border-l-2 border-emerald-500 pl-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "font-semibold text-foreground",
															children: "Unlocked Achievement: Recursion Master"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-muted-foreground text-[11px]",
															children: "Completed 25 recursive call stack inspections"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[10px] text-muted-foreground",
															children: "3 days ago"
														})
													] })
												})
											]
										})]
									})]
								})
							]
						}),
						activeTab === "visualizations" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "My Code Visualizations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Saved execution traces and interactive sessions"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/workspace",
									className: "flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-sans text-xs font-semibold text-black hover:bg-cyan-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create Visualization" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: MOCK_VISUALIZATIONS.map((vis) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-between rounded-2xl border border-border/80 bg-surface/80 p-5 shadow-xl backdrop-blur-xl space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-lg bg-cyan-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-cyan-400",
												children: vis.language
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 text-amber-400 fill-amber-400" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-3 font-sans text-sm font-bold text-foreground",
											children: vis.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											className: "mt-2 overflow-x-auto rounded-lg bg-background/60 p-2.5 font-mono text-[11px] text-muted-foreground",
											children: vis.codeSnippet
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border/60 pt-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-[11px] text-muted-foreground",
											children: [vis.stepCount, " Steps"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/workspace",
											className: "flex items-center gap-1 font-semibold text-cyan-400 hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inspect Trace" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
										})]
									})]
								}, vis.id))
							})]
						}),
						activeTab === "saved" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Saved Programs"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Code snippets and benchmark algorithms"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: MOCK_SAVED_PROGRAMS.map((prog) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/80 bg-surface/80 p-5 shadow-xl backdrop-blur-xl space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-lg bg-purple-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-purple-400",
													children: prog.language
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-sans text-sm font-bold text-foreground",
													children: prog.title
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-[10px] text-muted-foreground",
												children: ["Updated ", prog.updatedAt]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: prog.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											className: "rounded-xl border border-border/60 bg-background/70 p-4 font-mono text-xs text-cyan-300 overflow-x-auto",
											children: prog.code
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2 pt-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/workspace",
												className: "flex items-center gap-1.5 rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-black hover:bg-cyan-400",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 fill-current" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Run in Playground" })]
											})
										})
									]
								}, prog.id))
							})]
						}),
						activeTab === "activity" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Activity History"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Detailed log of sessions, updates and logins"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 font-sans text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-4 pb-4 border-b border-border/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-9 w-9 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-semibold text-foreground",
														children: "Executed Binary Tree Level Order"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-[10px] text-muted-foreground",
														children: "2 hours ago"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground mt-0.5",
													children: "24 steps traced with queue memory representation."
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-4 pb-4 border-b border-border/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-9 w-9 place-items-center rounded-xl bg-purple-500/10 text-purple-400",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-semibold text-foreground",
														children: "Saved Snippet: QuickSort Dual Pivot"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-[10px] text-muted-foreground",
														children: "Yesterday at 18:40"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground mt-0.5",
													children: "Added partition code to personal collection."
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/10 text-emerald-400",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-semibold text-foreground",
														children: "Unlocked Badge: Polyglot Dev"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-[10px] text-muted-foreground",
														children: "3 days ago"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-muted-foreground mt-0.5",
													children: "Visualized programs in 4 distinct programming languages."
												})]
											})]
										})
									]
								})
							})]
						}),
						activeTab === "achievements" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Academic Badges & Achievements"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Gamified milestones earned through algorithm visualizer usage"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: MOCK_ACHIEVEMENTS.map((ach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `rounded-2xl border p-5 shadow-xl backdrop-blur-xl space-y-3 transition-all ${ach.unlocked ? "border-cyan-500/30 bg-surface/90" : "border-border/60 bg-surface/40 opacity-70"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `grid h-10 w-10 place-items-center rounded-xl ${ach.unlocked ? "bg-cyan-500/20 text-cyan-400" : "bg-surface text-muted-foreground"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-sans text-sm font-bold text-foreground",
													children: ach.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] uppercase text-cyan-400",
													children: ach.unlocked ? "Unlocked" : "In Progress"
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: ach.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between text-[10px] font-mono text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [ach.progress, "%"] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-2 w-full overflow-hidden rounded-full bg-border",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full bg-cyan-500 transition-all duration-500",
													style: { width: `${ach.progress}%` }
												})
											})]
										})
									]
								}, ach.id))
							})]
						}),
						activeTab === "progress" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Subject Mastery & Learning Curve"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Curriculum milestone tracking per engineering domain"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
								children: MOCK_SUBJECT_PROGRESS.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border/80 bg-surface/80 p-5 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-sans text-sm font-bold text-foreground",
												children: sub.subject
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-xs font-bold text-cyan-400",
												children: [sub.completedPercent, "%"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												sub.completedModules,
												" of ",
												sub.totalModules,
												" Interactive Tracing Labs Completed"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-2.5 w-full overflow-hidden rounded-full bg-border",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `h-full ${sub.color}`,
												style: { width: `${sub.completedPercent}%` }
											})
										})
									]
								}, sub.subject))
							})]
						}),
						activeTab === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Student Preferences"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Configure editor layout, execution speed, and themes"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border/80 bg-surface/80 p-6 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-sans text-xs font-bold text-foreground uppercase tracking-wider mb-3",
									children: "Appearance & Theme"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
									children: [
										"taltrix-dark",
										"midnight",
										"deep-blue",
										"graphite",
										"light"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTheme(t),
										className: `rounded-xl border p-3 text-left font-mono text-xs capitalize transition-all ${settings.theme.id === t ? "border-cyan-500 bg-cyan-500/10 font-bold text-cyan-300" : "border-border/60 bg-background/40 text-muted-foreground hover:bg-surface-h"}`,
										children: t.replace("-", " ")
									}, t))
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-sans text-xs font-bold text-foreground uppercase tracking-wider mb-3",
										children: "Execution Defaults"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3 font-sans text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enable AST Memory Graph Visualization" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true,
												className: "h-4 w-4 rounded text-cyan-500"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center justify-between text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Auto-scroll terminal on execution line step" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												defaultChecked: true,
												className: "h-4 w-4 rounded text-cyan-500"
											})]
										})]
									})]
								})]
							})]
						}),
						activeTab === "feedback" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Submit Academic Feedback"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Direct feedback channel for department faculty & admins"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: handleSendFeedback,
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
											children: "Overall Rating"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2",
											children: [
												1,
												2,
												3,
												4,
												5
											].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setFbRating(star),
												className: "p-1 transition-transform hover:scale-110",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-6 w-6 ${star <= fbRating ? "text-amber-400 fill-amber-400" : "text-border"}` })
											}, star))
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
											children: "Feedback Category"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: fbCategory,
											onChange: (e) => setFbCategory(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "ui",
													className: "bg-surface",
													children: "UI / Visualizer Aesthetic"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "feature",
													className: "bg-surface",
													children: "Feature Request"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "bug",
													className: "bg-surface",
													children: "Bug Report"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "performance",
													className: "bg-surface",
													children: "Execution Speed"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "general",
													className: "bg-surface",
													children: "General Course Feedback"
												})
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
											children: "Subject"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "e.g. Call Stack pointer color coding",
											value: fbSubject,
											onChange: (e) => setFbSubject(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
											children: "Message / Comments"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											required: true,
											rows: 4,
											placeholder: "Detail your thoughts or suggestions...",
											value: fbMessage,
											onChange: (e) => setFbMessage(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 p-4 text-xs text-foreground outline-none focus:border-cyan-500"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											disabled: isSubmittingFb,
											className: "flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 disabled:opacity-50",
											children: isSubmittingFb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Feedback" })] })
										})
									]
								})
							})]
						}),
						activeTab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-3xl space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold text-foreground",
								children: "Student Profile Management"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Manage college identity details and security credentials"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: user?.avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name || "Student"}`,
											alt: user?.name,
											className: "h-20 w-20 rounded-2xl border-2 border-cyan-500/50 bg-surface object-cover shadow-lg"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1 text-center sm:text-left",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-xl font-bold text-foreground",
													children: user?.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 font-mono text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-cyan-500/10 px-2 py-0.5 text-cyan-400 border border-cyan-500/30 font-semibold",
															children: user?.rollNumber || "STUDENT"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground",
															children: "•"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground",
															children: user?.department
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground",
															children: "•"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground",
															children: user?.year
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground pt-1",
													children: user?.email
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleSaveProfile,
										className: "space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-sans text-xs font-bold text-foreground uppercase tracking-wider",
												children: "Personal & Academic Details"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
													children: "Full Name"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: name,
													onChange: (e) => setName(e.target.value),
													className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
													children: "Roll Number"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: rollNumber,
													onChange: (e) => setRollNumber(e.target.value),
													className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
													children: "Department"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: department,
													onChange: (e) => setDepartment(e.target.value),
													className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
													children: "Year"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: year,
													onChange: (e) => setYear(e.target.value),
													className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
												children: "Bio / Academic Interests"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 3,
												value: bio,
												onChange: (e) => setBio(e.target.value),
												className: "w-full rounded-xl border border-border/70 bg-background/60 p-3 text-xs text-foreground outline-none focus:border-cyan-500"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												disabled: isSavingProfile,
												className: "flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-2.5 font-sans text-xs font-semibold text-black hover:bg-cyan-400 disabled:opacity-50",
												children: isSavingProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Profile Details" })] })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleChangePassword,
										className: "pt-6 border-t border-border/60 space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
												className: "font-sans text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4 text-purple-400" }), " Change Security Password"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
														children: "Current Password"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "password",
														required: true,
														value: currentPassword,
														onChange: (e) => setCurrentPassword(e.target.value),
														className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
														children: "New Password"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "password",
														required: true,
														value: newPassword,
														onChange: (e) => setNewPassword(e.target.value),
														className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
														children: "Confirm New Password"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "password",
														required: true,
														value: confirmPassword,
														onChange: (e) => setConfirmPassword(e.target.value),
														className: "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-2.5 text-xs text-foreground outline-none focus:border-cyan-500"
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												disabled: isChangingPass,
												className: "flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-6 py-2.5 font-sans text-xs font-semibold text-purple-300 hover:bg-purple-500/20 disabled:opacity-50",
												children: isChangingPass ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Update Password" })
											})
										]
									})
								]
							})]
						})
					]
				})
			]
		})]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, {
	allowedRoles: [
		"student",
		"admin",
		"guest"
	],
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudentDashboardPage, {})
});
//#endregion
export { SplitComponent as component };
