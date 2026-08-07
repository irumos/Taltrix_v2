import { o as __toESM } from "../_runtime.mjs";
import { c as useNotifications, o as useAuth } from "./router-B_pj-fbL.mjs";
import { l as require_react_dom, u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Ot as Check, Rt as Bell, St as CircleCheck, Z as LoaderCircle, d as TriangleAlert, ht as ExternalLink, n as X, p as Trash2, rt as Info, w as ShieldAlert, wt as CircleAlert } from "../_libs/lucide-react.mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feedbackService-Bx0ORHy6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
function ProtectedRoute({ children, allowedRoles, requireAuth = true }) {
	const { user, isAuthenticated, isLoading, role } = useAuth();
	const navigate = useNavigate();
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-muted-foreground",
				children: "Verifying TALTRIX session..."
			})]
		})
	});
	if (requireAuth && !isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md rounded-2xl border border-border/80 bg-surface/90 p-8 text-center shadow-2xl backdrop-blur-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl font-bold text-foreground",
					children: "Sign In Required"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground leading-relaxed",
					children: "You must be logged in to access this area. Please sign in with your college credentials."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate({ to: "/login" }),
						className: "rounded-xl bg-cyan-500 px-5 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400",
						children: "Go to Sign In"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate({ to: "/" }),
						className: "rounded-xl border border-border/80 bg-surface/60 px-5 py-2.5 font-sans text-xs font-medium text-foreground transition-all hover:bg-surface-h",
						children: "Back to Home"
					})]
				})
			]
		})
	});
	if (allowedRoles && !allowedRoles.includes(role)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md rounded-2xl border border-rose-500/30 bg-surface/90 p-8 text-center shadow-2xl backdrop-blur-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl font-bold text-foreground",
					children: "Access Restricted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted-foreground leading-relaxed",
					children: [
						"Your current role (",
						role.toUpperCase(),
						") does not have administrative permissions for this portal."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex justify-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate({ to: role === "admin" ? "/admin" : "/dashboard" }),
						className: "rounded-xl bg-cyan-500 px-5 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400",
						children: "Return to Your Dashboard"
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function NotificationsCenter() {
	const { notifications, unreadCount, markAsRead, markAllAsRead, clearNotification, clearAll } = useNotifications();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const bellRef = (0, import_react.useRef)(null);
	const [coords, setCoords] = (0, import_react.useState)({
		top: 0,
		right: 0
	});
	const updatePosition = (0, import_react.useCallback)(() => {
		if (!bellRef.current) return;
		const rect = bellRef.current.getBoundingClientRect();
		const rightOffset = Math.max(16, window.innerWidth - rect.right);
		const topOffset = rect.bottom + 10;
		setCoords({
			top: topOffset,
			right: rightOffset
		});
	}, []);
	const handleToggle = () => {
		if (!isOpen) updatePosition();
		setIsOpen((prev) => !prev);
	};
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		updatePosition();
		const handleResize = () => updatePosition();
		const handleScroll = () => updatePosition();
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll, true);
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll, true);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, updatePosition]);
	const getIcon = (type) => {
		switch (type) {
			case "success": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400 shrink-0" });
			case "error": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-rose-400 shrink-0" });
			case "warning": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-amber-400 shrink-0" });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 text-cyan-400 shrink-0" });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		ref: bellRef,
		type: "button",
		onClick: handleToggle,
		"aria-label": "Notifications",
		"aria-expanded": isOpen,
		"aria-haspopup": "dialog",
		className: "relative grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 font-mono text-[9px] font-bold text-black shadow-md shadow-cyan-500/50 transition-transform animate-pulse",
			children: unreadCount
		})]
	}), typeof window !== "undefined" && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-label": "Notifications popover",
		className: "fixed inset-0 z-[9990]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 bg-black/20 backdrop-blur-[1px] transition-opacity",
			onClick: () => setIsOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .96,
				y: -6
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .96,
				y: -6
			},
			transition: {
				duration: .2,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			style: {
				position: "fixed",
				top: `${coords.top}px`,
				right: `${coords.right}px`
			},
			className: "z-[9999] w-[calc(100vw-2rem)] sm:w-96 max-w-[420px] rounded-2xl border border-border/80 bg-surface/95 p-4 shadow-2xl backdrop-blur-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/60 pb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-bold text-foreground",
							children: "Notifications"
						}), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-cyan-400 border border-cyan-500/30",
							children: [unreadCount, " new"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [notifications.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: markAllAsRead,
							title: "Mark all as read",
							className: "rounded-lg p-1.5 text-xs text-muted-foreground transition-colors hover:bg-surface-h hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: clearAll,
							title: "Clear all notifications",
							className: "rounded-lg p-1.5 text-xs text-muted-foreground transition-colors hover:bg-surface-h hover:text-rose-400",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsOpen(false),
							className: "rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface-h hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 max-h-[400px] space-y-2 overflow-y-auto pr-1",
					children: notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-10 text-center font-sans text-xs text-muted-foreground space-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mx-auto h-6 w-6 text-muted-foreground/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "All caught up!" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px]",
								children: "No active notifications"
							})
						]
					}) : notifications.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => markAsRead(item.id),
						className: `group relative flex items-start gap-3 rounded-xl border p-3 transition-all cursor-pointer ${item.read ? "border-border/40 bg-surface/40 opacity-75" : "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50"}`,
						children: [
							getIcon(item.type),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-sans text-xs font-semibold text-foreground truncate",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-muted-foreground shrink-0",
										children: item.timestamp
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-sans text-xs text-muted-foreground line-clamp-2 leading-relaxed",
									children: item.message
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: (e) => {
									e.stopPropagation();
									clearNotification(item.id);
								},
								className: "opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-rose-400 transition-opacity",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
							})
						]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 pt-3 border-t border-border/60 flex items-center justify-between font-sans text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[10px] text-muted-foreground",
						children: [notifications.length, " total messages"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							markAllAsRead();
							setIsOpen(false);
						},
						className: "flex items-center gap-1 font-semibold text-cyan-400 hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View All Notifications" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
					})]
				})
			]
		})]
	}) }), document.body)] });
}
var STORAGE_KEY_FEEDBACK = "taltrix_feedback_db";
var MOCK_FEEDBACK_SEED = [
	{
		id: "fb_1",
		userId: "user_student_1",
		userName: "Alex Rivera",
		userEmail: "student@college.edu",
		department: "Computer Science",
		year: "3rd Year",
		rating: 5,
		subject: "Call Stack Visualization is Incredible",
		category: "ui",
		message: "The step-by-step recursion visualization helped me pass my Data Structures midterm! Would love to see memory heap pointers highlighted with custom colors.",
		status: "read",
		createdAt: "2026-08-05T14:30:00Z",
		adminResponse: "Thank you Alex! Custom color coding for heap pointers is planned for next release."
	},
	{
		id: "fb_2",
		userId: "user_student_2",
		userName: "Marcus Chen",
		userEmail: "marcus.chen@college.edu",
		department: "Information Technology",
		year: "2nd Year",
		rating: 4,
		subject: "Python AST Parser speed",
		category: "performance",
		message: "The interactive timeline slider is super fluid. Sometimes large loops (>500 steps) take 2 seconds to trace. Can we increase step limit?",
		status: "unread",
		createdAt: "2026-08-06T09:15:00Z"
	},
	{
		id: "fb_3",
		userId: "user_student_3",
		userName: "Priya Sharma",
		userEmail: "priya.sharma@college.edu",
		department: "Artificial Intelligence",
		year: "3rd Year",
		rating: 5,
		subject: "Dark Mode & Glassmorphism design",
		category: "ui",
		message: "This is hands down the cleanest developer tool I have ever used in college. The neon cyan accents look stunning on dark mode!",
		status: "resolved",
		createdAt: "2026-08-04T18:20:00Z"
	},
	{
		id: "fb_4",
		userId: "user_student_4",
		userName: "David Kim",
		userEmail: "david.kim@college.edu",
		department: "Electronics",
		year: "1st Year",
		rating: 3,
		subject: "C++ Pointers and References Example",
		category: "feature",
		message: "Can we add more default C++ examples for double pointers and struct padding analysis?",
		status: "unread",
		createdAt: "2026-08-07T11:00:00Z"
	}
];
function getStoredFeedback() {
	if (typeof window === "undefined") return MOCK_FEEDBACK_SEED;
	try {
		const raw = localStorage.getItem(STORAGE_KEY_FEEDBACK);
		if (!raw) {
			localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(MOCK_FEEDBACK_SEED));
			return MOCK_FEEDBACK_SEED;
		}
		return JSON.parse(raw);
	} catch (e) {
		return MOCK_FEEDBACK_SEED;
	}
}
function saveStoredFeedback(items) {
	if (typeof window === "undefined") return;
	localStorage.setItem(STORAGE_KEY_FEEDBACK, JSON.stringify(items));
}
var FeedbackService = class {
	static async getFeedbacks(filters) {
		await new Promise((res) => setTimeout(res, 150));
		let items = getStoredFeedback();
		if (filters) {
			if (filters.rating && filters.rating !== "all") items = items.filter((item) => item.rating === Number(filters.rating));
			if (filters.department && filters.department !== "all") items = items.filter((item) => item.department === filters.department);
			if (filters.year && filters.year !== "all") items = items.filter((item) => item.year === filters.year);
			if (filters.search && filters.search.trim()) {
				const q = filters.search.toLowerCase().trim();
				items = items.filter((item) => item.subject.toLowerCase().includes(q) || item.message.toLowerCase().includes(q) || item.userName.toLowerCase().includes(q) || item.userEmail.toLowerCase().includes(q));
			}
		}
		return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
	}
	static async submitFeedback(payload) {
		await new Promise((res) => setTimeout(res, 250));
		const items = getStoredFeedback();
		const newItem = {
			id: `fb_${Date.now()}`,
			...payload,
			status: "unread",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		items.unshift(newItem);
		saveStoredFeedback(items);
		return newItem;
	}
	static async updateFeedbackStatus(id, status, adminResponse) {
		const items = getStoredFeedback();
		const index = items.findIndex((f) => f.id === id);
		if (index === -1) throw new Error("Feedback not found");
		const updated = {
			...items[index],
			status,
			...adminResponse !== void 0 ? { adminResponse } : {}
		};
		items[index] = updated;
		saveStoredFeedback(items);
		return updated;
	}
};
//#endregion
export { NotificationsCenter as n, ProtectedRoute as r, FeedbackService as t };
