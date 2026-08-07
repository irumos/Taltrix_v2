import { o as __toESM, r as __exportAll$1 } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as LayoutDashboard, B as MousePointer, C as ShieldCheck, E as Settings2, It as Bookmark, J as LogOut, Kt as Accessibility, O as Search, Ot as Check, P as Play, R as Palette, Y as LogIn, b as Sparkles, d as TriangleAlert, gt as Download, j as RotateCcw, n as X, pt as Eye, u as Upload, xt as CircleQuestionMark, yt as CodeXml } from "../_libs/lucide-react.mjs";
import { _ as createRootRouteWithContext, b as useRouter, d as useLocation, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter$1, u as HeadContent, v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/SettingsContext-BV4jvB4L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "taltrix:user_settings:v1";
var DEFAULT_SETTINGS = {
	theme: { id: "taltrix-dark" },
	appearance: {
		accentColor: "cyan",
		uiDensity: "comfortable",
		glassStrength: 80,
		borderRadius: 12
	},
	devCursor: {
		enabled: true,
		style: "ring",
		trail: false,
		clickRipple: true,
		magneticHover: true,
		interactionStrength: 3
	},
	editor: {
		fontSize: 13,
		lineHeight: 22,
		wordWrap: "off",
		showMinimap: false,
		showLineNumbers: "on",
		currentLineHighlight: true,
		indentGuides: true,
		codeFont: "JetBrains Mono",
		cursorStyle: "line",
		cursorBlinking: "phase",
		tabSize: 2,
		readOnly: false
	},
	visualization: {
		animationSpeed: "normal",
		smoothTransitions: true,
		particleBackground: true,
		canvasDensity: 120,
		interactionStrength: 3,
		rippleStrength: 3,
		highlightVarChanges: true,
		highlightMemChanges: true,
		autoScroll: true
	},
	execution: {
		playbackSpeed: 1,
		autoPlay: false,
		loopPlayback: false,
		pauseOnFunctionCall: false,
		pauseOnReturn: false,
		pauseOnVarChange: false,
		showSummary: true,
		autoFocusCurrentLine: true,
		autoOpenExplanation: false
	},
	explanation: { style: "beginner" },
	accessibility: {
		reduceMotion: false,
		highContrast: false,
		largeText: false,
		keyboardNav: true,
		focusIndicators: true,
		colorBlindMode: false
	},
	sound: {
		masterSound: true,
		volume: 75,
		soundTyping: true,
		soundRun: true,
		soundHover: true,
		soundSuccess: true,
		soundError: true
	},
	workspace: {
		sidebarWidth: 280,
		timelineHeight: 120,
		panelLayout: "standard",
		collapseExplorerDefault: true,
		collapseMemoryDefault: false,
		collapseStackDefault: false,
		rememberLayout: true
	},
	landing: {
		canvasEnabled: true,
		particleDensity: 120,
		cursorInteraction: true,
		clickRipple: true,
		scrollOrganization: true,
		bgMotionStrength: 3
	},
	startup: {
		showIntroOnStartup: false,
		autoSkip: true,
		typingSpeedMs: 22
	},
	smartPreferences: {
		rememberLastWorkspace: true,
		rememberLastTheme: true,
		rememberLastLanguage: true,
		rememberLastExample: true,
		rememberPanelLayout: true,
		lastLanguage: "python",
		lastExample: "factorial"
	}
};
var SettingsCtx = (0, import_react.createContext)(null);
function SettingsProvider({ children }) {
	const [settings, setSettingsState] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return DEFAULT_SETTINGS;
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored);
				return {
					...DEFAULT_SETTINGS,
					...parsed,
					theme: {
						...DEFAULT_SETTINGS.theme,
						...parsed?.theme
					},
					appearance: {
						...DEFAULT_SETTINGS.appearance,
						...parsed?.appearance
					},
					devCursor: {
						...DEFAULT_SETTINGS.devCursor,
						...parsed?.devCursor
					},
					editor: {
						...DEFAULT_SETTINGS.editor,
						...parsed?.editor
					},
					visualization: {
						...DEFAULT_SETTINGS.visualization,
						...parsed?.visualization
					},
					execution: {
						...DEFAULT_SETTINGS.execution,
						...parsed?.execution
					},
					explanation: {
						...DEFAULT_SETTINGS.explanation,
						...parsed?.explanation
					},
					accessibility: {
						...DEFAULT_SETTINGS.accessibility,
						...parsed?.accessibility
					},
					sound: {
						...DEFAULT_SETTINGS.sound,
						...parsed?.sound
					},
					workspace: {
						...DEFAULT_SETTINGS.workspace,
						...parsed?.workspace
					},
					landing: {
						...DEFAULT_SETTINGS.landing,
						...parsed?.landing
					},
					startup: {
						...DEFAULT_SETTINGS.startup,
						...parsed?.startup
					},
					smartPreferences: {
						...DEFAULT_SETTINGS.smartPreferences,
						...parsed?.smartPreferences
					}
				};
			}
		} catch {}
		return DEFAULT_SETTINGS;
	});
	const [settingsModalOpen, setSettingsModalOpen] = (0, import_react.useState)(false);
	const [activeSettingsTab, setActiveSettingsTab] = (0, import_react.useState)("appearance");
	const [commandPaletteOpen, setCommandPaletteOpen] = (0, import_react.useState)(false);
	const [shortcutsModalOpen, setShortcutsModalOpen] = (0, import_react.useState)(false);
	const openSettingsTab = (0, import_react.useCallback)((tab) => {
		setActiveSettingsTab(tab);
		setSettingsModalOpen(true);
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
		} catch {}
	}, [settings]);
	(0, import_react.useEffect)(() => {
		if (typeof document !== "undefined") {
			document.documentElement.dataset.theme = settings.theme.id;
			document.documentElement.dataset.accent = settings.appearance.accentColor;
			document.documentElement.dataset.density = settings.appearance.uiDensity;
		}
	}, [
		settings.theme.id,
		settings.appearance.accentColor,
		settings.appearance.uiDensity
	]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			const target = e.target;
			if (target && (target.isContentEditable || /input|textarea|select/i.test(target.tagName))) return;
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setCommandPaletteOpen((prev) => !prev);
			} else if (e.key === "?" && !e.ctrlKey && !e.metaKey && !e.altKey) {
				e.preventDefault();
				setShortcutsModalOpen((prev) => !prev);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	const updateSettings = (0, import_react.useCallback)((updater) => {
		setSettingsState((prev) => updater(prev));
	}, []);
	const updateCategory = (0, import_react.useCallback)((category, values) => {
		setSettingsState((prev) => ({
			...prev,
			[category]: {
				...prev[category],
				...values
			}
		}));
	}, []);
	const setTheme = (0, import_react.useCallback)((themeId) => {
		updateCategory("theme", { id: themeId });
	}, [updateCategory]);
	const setAccentColor = (0, import_react.useCallback)((accent) => {
		updateCategory("appearance", { accentColor: accent });
	}, [updateCategory]);
	const setUiDensity = (0, import_react.useCallback)((density) => {
		updateCategory("appearance", { uiDensity: density });
	}, [updateCategory]);
	const toggleDarkLight = (0, import_react.useCallback)(() => {
		setSettingsState((prev) => {
			const nextTheme = prev.theme.id === "light" ? "taltrix-dark" : "light";
			return {
				...prev,
				theme: { id: nextTheme }
			};
		});
	}, []);
	const resetSettings = (0, import_react.useCallback)(() => {
		setSettingsState(DEFAULT_SETTINGS);
	}, []);
	const exportSettings = (0, import_react.useCallback)(() => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings, null, 2));
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", dataStr);
		downloadAnchor.setAttribute("download", `taltrix-settings-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
	}, [settings]);
	const importSettings = (0, import_react.useCallback)((jsonStr) => {
		try {
			const parsed = JSON.parse(jsonStr);
			if (typeof parsed === "object" && parsed !== null) {
				setSettingsState({
					...DEFAULT_SETTINGS,
					...parsed
				});
				return true;
			}
		} catch {}
		return false;
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		settings,
		updateSettings,
		updateCategory,
		setTheme,
		setAccentColor,
		setUiDensity,
		toggleDarkLight,
		resetSettings,
		exportSettings,
		importSettings,
		settingsModalOpen,
		setSettingsModalOpen,
		activeSettingsTab,
		setActiveSettingsTab,
		openSettingsTab,
		commandPaletteOpen,
		setCommandPaletteOpen,
		shortcutsModalOpen,
		setShortcutsModalOpen
	}), [
		settings,
		updateSettings,
		updateCategory,
		setTheme,
		setAccentColor,
		setUiDensity,
		toggleDarkLight,
		resetSettings,
		exportSettings,
		importSettings,
		settingsModalOpen,
		activeSettingsTab,
		openSettingsTab,
		commandPaletteOpen,
		shortcutsModalOpen
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsCtx.Provider, {
		value,
		children
	});
}
function useSettings() {
	const ctx = (0, import_react.useContext)(SettingsCtx);
	if (!ctx) throw new Error("useSettings must be used inside <SettingsProvider>");
	return ctx;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/sound-cO-bZAcz.js
var PRESETS = {
	type: {
		freq: 880,
		dur: .03,
		gain: .012,
		type: "square"
	},
	hover: {
		freq: 620,
		dur: .04,
		gain: .008,
		type: "sine"
	},
	run: {
		freq: 340,
		dur: .16,
		gain: .03,
		type: "triangle"
	},
	compile: {
		freq: 520,
		dur: .22,
		gain: .022,
		type: "sine"
	}
};
var ctx = null;
var muted = true;
function setMuted(next) {
	muted = next;
	if (typeof window !== "undefined") window.localStorage.setItem("taltrix:muted", String(next));
}
function restoreMuted() {
	if (typeof window === "undefined") return true;
	muted = window.localStorage.getItem("taltrix:muted") !== "false";
	return muted;
}
function blip(kind) {
	if (muted || typeof window === "undefined") return;
	try {
		let volumeMultiplier = 1;
		const stored = window.localStorage.getItem("taltrix:user_settings:v1");
		if (stored) {
			const parsed = JSON.parse(stored);
			if (parsed?.sound) {
				if (parsed.sound.masterSound === false) return;
				if (kind === "type" && parsed.sound.soundTyping === false) return;
				if (kind === "run" && parsed.sound.soundRun === false) return;
				if (kind === "hover" && parsed.sound.soundHover === false) return;
				if (typeof parsed.sound.volume === "number") volumeMultiplier = parsed.sound.volume / 100;
			}
		}
		ctx ??= new AudioContext();
		if (ctx.state === "suspended") ctx.resume();
		const p = PRESETS[kind];
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = p.type;
		osc.frequency.value = p.freq;
		const finalGain = p.gain * volumeMultiplier;
		gain.gain.setValueAtTime(finalGain, ctx.currentTime);
		gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + p.dur);
		osc.connect(gain).connect(ctx.destination);
		osc.start();
		osc.stop(ctx.currentTime + p.dur);
	} catch {}
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BQ7q_z5s.js
var router_BQ7q_z5s_exports = /* @__PURE__ */ __exportAll$1({
	a: () => useAuth,
	c: () => __exportAll,
	createRouter: () => createRouter,
	getRouter: () => getRouter,
	i: () => useNavigationHistory,
	n: () => CustomCursor,
	o: () => useNotifications,
	r: () => Modal,
	s: () => TaltrixButton,
	t: () => router_exports
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var buttonVariants = cva("relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-tight transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 select-none", {
	variants: {
		variant: {
			primary: "text-primary-foreground shadow-[var(--shadow-elevated)] [background-image:var(--gradient-primary)] hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0",
			outline: "border border-border bg-surface/40 text-foreground backdrop-blur hover:border-accent/60 hover:bg-surface/80 hover:-translate-y-0.5",
			ghost: "text-muted-foreground hover:text-foreground hover:bg-surface/60",
			accent: "bg-accent text-accent-foreground hover:brightness-110 hover:-translate-y-0.5 shadow-[0_16px_40px_-20px_var(--color-accent)]"
		},
		size: {
			sm: "h-9 px-3.5 text-[13px]",
			md: "h-11 px-5 text-sm",
			lg: "h-13 px-7 text-[15px]",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var TaltrixButton = (0, import_react.forwardRef)(({ className, variant, size, sound = true, onMouseEnter, onClick, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	"data-cursor": "button",
	className: cn(buttonVariants({
		variant,
		size
	}), className),
	onMouseEnter: (e) => {
		if (sound) blip("hover");
		onMouseEnter?.(e);
	},
	onClick: (e) => {
		if (sound) blip("run");
		onClick?.(e);
	},
	...props
}));
TaltrixButton.displayName = "TaltrixButton";
var styles_default = "/assets/styles-jPgdrcs2.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const { settings, setTheme, setAccentColor, toggleDarkLight } = useSettings();
	const activeTheme = settings.theme.id;
	const activeAccent = settings.appearance.accentColor;
	(0, import_react.useEffect)(() => {
		if (typeof document !== "undefined") {
			document.documentElement.dataset.theme = activeTheme;
			document.documentElement.dataset.accent = activeAccent;
		}
	}, [activeTheme, activeAccent]);
	const value = (0, import_react.useMemo)(() => ({
		theme: activeTheme,
		accent: activeAccent,
		setTheme,
		setAccent: setAccentColor,
		toggleDarkLight
	}), [
		activeTheme,
		activeAccent,
		setTheme,
		setAccentColor,
		toggleDarkLight
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
var TransitionContext = (0, import_react.createContext)(null);
function TransitionProvider({ children }) {
	const [isTransitioning, setIsTransitioning] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	const launchWorkspace = (0, import_react.useCallback)(() => {
		setIsTransitioning(true);
		setTimeout(() => {
			navigate({ to: "/workspace" });
			setTimeout(() => setIsTransitioning(false), 350);
		}, 150);
	}, [navigate]);
	const exitWorkspace = (0, import_react.useCallback)(() => {
		setIsTransitioning(true);
		setTimeout(() => {
			navigate({ to: "/" });
			setTimeout(() => setIsTransitioning(false), 350);
		}, 150);
	}, [navigate]);
	const value = (0, import_react.useMemo)(() => ({
		isTransitioning,
		launchWorkspace,
		exitWorkspace
	}), [
		isTransitioning,
		launchWorkspace,
		exitWorkspace
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionContext.Provider, {
		value,
		children
	});
}
var NotificationContext = (0, import_react.createContext)(void 0);
var SEED_NOTIFICATIONS = [{
	id: "n_1",
	type: "info",
	title: "Welcome to TALTRIX",
	message: "Explore code visualization with line-by-line execution, memory heap graphs, and interactive stack inspection.",
	timestamp: "Just now",
	read: false
}, {
	id: "n_2",
	type: "success",
	title: "System Online",
	message: "All AST execution engines (Python 3.11, C++17, JS ES2024) are running at optimal latency.",
	timestamp: "10m ago",
	read: false
}];
function NotificationProvider({ children }) {
	const [notifications, setNotifications] = (0, import_react.useState)(SEED_NOTIFICATIONS);
	const notify = (0, import_react.useCallback)((type, title, message, actionLabel, actionUrl) => {
		const newItem = {
			id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
			type,
			title,
			message,
			timestamp: "Just now",
			read: false,
			...actionLabel ? { actionLabel } : {},
			...actionUrl ? { actionUrl } : {}
		};
		setNotifications((prev) => [newItem, ...prev]);
		const toastOptions = { description: message };
		switch (type) {
			case "success":
				toast.success(title, toastOptions);
				break;
			case "error":
				toast.error(title, toastOptions);
				break;
			case "warning":
				toast.warning(title, toastOptions);
				break;
			default: toast.info(title, toastOptions);
		}
	}, []);
	const markAsRead = (0, import_react.useCallback)((id) => {
		setNotifications((prev) => prev.map((n) => n.id === id ? {
			...n,
			read: true
		} : n));
	}, []);
	const markAllAsRead = (0, import_react.useCallback)(() => {
		setNotifications((prev) => prev.map((n) => ({
			...n,
			read: true
		})));
	}, []);
	const clearNotification = (0, import_react.useCallback)((id) => {
		setNotifications((prev) => prev.filter((n) => n.id !== id));
	}, []);
	const clearAll = (0, import_react.useCallback)(() => {
		setNotifications([]);
	}, []);
	const unreadCount = notifications.filter((n) => !n.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationContext.Provider, {
		value: {
			notifications,
			unreadCount,
			notify,
			markAsRead,
			markAllAsRead,
			clearNotification,
			clearAll
		},
		children
	});
}
function useNotifications() {
	const context = (0, import_react.useContext)(NotificationContext);
	if (!context) throw new Error("useNotifications must be used within a NotificationProvider");
	return context;
}
var STORAGE_KEY_SESSION = "taltrix_auth_session";
var STORAGE_KEY_USERS = "taltrix_users_db";
var MOCK_USERS_SEED = [
	{
		id: "user_student_1",
		name: "Alex Rivera",
		email: "student@college.edu",
		rollNumber: "21CS042",
		department: "Computer Science",
		year: "3rd Year",
		role: "student",
		status: "active",
		avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
		createdAt: "2025-09-01T08:00:00Z",
		lastActive: (/* @__PURE__ */ new Date()).toISOString(),
		bio: "Passionate CS student obsessed with algorithm visualization and memory layout.",
		githubUrl: "https://github.com/alexrivera",
		preferredTheme: "taltrix-dark",
		preferredLanguage: "python"
	},
	{
		id: "user_admin_1",
		name: "Dr. Sarah Jenkins",
		email: "admin@college.edu",
		department: "Computer Science",
		role: "admin",
		status: "active",
		avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
		createdAt: "2025-01-15T09:30:00Z",
		lastActive: (/* @__PURE__ */ new Date()).toISOString(),
		bio: "Senior Professor & Department Chair. Taltrix Platform Administrator.",
		preferredTheme: "taltrix-dark"
	},
	{
		id: "user_student_2",
		name: "Marcus Chen",
		email: "marcus.chen@college.edu",
		rollNumber: "22IT019",
		department: "Information Technology",
		year: "2nd Year",
		role: "student",
		status: "active",
		avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
		createdAt: "2025-10-12T10:15:00Z",
		lastActive: "2026-08-06T14:20:00Z"
	},
	{
		id: "user_student_3",
		name: "Priya Sharma",
		email: "priya.sharma@college.edu",
		rollNumber: "21AI007",
		department: "Artificial Intelligence",
		year: "3rd Year",
		role: "student",
		status: "active",
		avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
		createdAt: "2025-08-20T11:45:00Z",
		lastActive: "2026-08-07T18:10:00Z"
	},
	{
		id: "user_student_4",
		name: "David Kim",
		email: "david.kim@college.edu",
		rollNumber: "23EC088",
		department: "Electronics",
		year: "1st Year",
		role: "student",
		status: "inactive",
		avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
		createdAt: "2026-01-10T16:00:00Z",
		lastActive: "2026-07-22T09:00:00Z"
	}
];
function getStoredUsers() {
	if (typeof window === "undefined") return MOCK_USERS_SEED;
	try {
		const raw = localStorage.getItem(STORAGE_KEY_USERS);
		if (!raw) {
			localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(MOCK_USERS_SEED));
			return MOCK_USERS_SEED;
		}
		return JSON.parse(raw);
	} catch (e) {
		return MOCK_USERS_SEED;
	}
}
function saveStoredUsers(users) {
	if (typeof window === "undefined") return;
	localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}
var AuthService = class AuthService {
	static async login(credentials) {
		await new Promise((res) => setTimeout(res, 250));
		const emailClean = credentials.email.trim().toLowerCase();
		const users = getStoredUsers();
		let user = users.find((u) => u.email.toLowerCase() === emailClean);
		if (!user) if (emailClean === "admin@college.edu") user = MOCK_USERS_SEED[1];
		else if (emailClean.includes("admin")) user = {
			id: `user_admin_${Date.now()}`,
			name: "Admin User",
			email: emailClean,
			role: "admin",
			status: "active",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastActive: (/* @__PURE__ */ new Date()).toISOString()
		};
		else {
			user = {
				id: `user_student_${Date.now()}`,
				name: emailClean.split("@")[0].replace(".", " "),
				email: emailClean,
				rollNumber: `21CS${Math.floor(100 + Math.random() * 900)}`,
				department: "Computer Science",
				year: "3rd Year",
				role: "student",
				status: "active",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				lastActive: (/* @__PURE__ */ new Date()).toISOString()
			};
			users.push(user);
			saveStoredUsers(users);
		}
		const activeUser = {
			...user,
			lastActive: (/* @__PURE__ */ new Date()).toISOString()
		};
		const userIndex = users.findIndex((u) => u.id === activeUser.id);
		if (userIndex !== -1) {
			users[userIndex] = activeUser;
			saveStoredUsers(users);
		}
		const session = {
			token: `mock_jwt_token_${Date.now()}_${activeUser.id}`,
			user: activeUser,
			rememberMe: !!credentials.rememberMe,
			expiresAt: new Date(Date.now() + 6048e5).toISOString()
		};
		AuthService.saveSession(session);
		return session;
	}
	static async signup(payload) {
		await new Promise((res) => setTimeout(res, 350));
		const users = getStoredUsers();
		const emailClean = payload.email.trim().toLowerCase();
		if (users.some((u) => u.email.toLowerCase() === emailClean)) throw new Error("An account with this college email already exists.");
		const newUser = {
			id: `user_student_${Date.now()}`,
			name: payload.name.trim(),
			email: emailClean,
			rollNumber: payload.rollNumber.trim(),
			department: payload.department,
			year: payload.year,
			role: "student",
			status: "active",
			avatarUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(payload.name)}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastActive: (/* @__PURE__ */ new Date()).toISOString(),
			bio: `Student at ${payload.department} Department.`
		};
		users.push(newUser);
		saveStoredUsers(users);
		const session = {
			token: `mock_jwt_token_${Date.now()}_${newUser.id}`,
			user: newUser,
			rememberMe: true,
			expiresAt: new Date(Date.now() + 6048e5).toISOString()
		};
		AuthService.saveSession(session);
		return session;
	}
	static createGuestSession() {
		const session = {
			token: "guest_token_preview",
			user: {
				id: "guest_user_preview",
				name: "Guest Scholar",
				email: "guest@taltrix.edu",
				role: "guest",
				status: "active",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				lastActive: (/* @__PURE__ */ new Date()).toISOString(),
				department: "General Engineering"
			},
			rememberMe: false,
			expiresAt: new Date(Date.now() + 864e5).toISOString()
		};
		AuthService.saveSession(session);
		return session;
	}
	static async requestPasswordReset(email) {
		await new Promise((res) => setTimeout(res, 300));
		if (!email || !email.includes("@")) throw new Error("Please enter a valid college email address.");
		return true;
	}
	static async updateProfile(userId, updates) {
		await new Promise((res) => setTimeout(res, 200));
		const users = getStoredUsers();
		const index = users.findIndex((u) => u.id === userId);
		if (index === -1) throw new Error("User not found.");
		const target = users[index];
		const updated = {
			id: target.id,
			name: updates.name ?? target.name,
			email: updates.email ?? target.email,
			rollNumber: updates.rollNumber ?? target.rollNumber,
			department: updates.department ?? target.department,
			year: updates.year ?? target.year,
			role: updates.role ?? target.role,
			avatarUrl: updates.avatarUrl ?? target.avatarUrl,
			status: updates.status ?? target.status,
			createdAt: target.createdAt,
			lastActive: (/* @__PURE__ */ new Date()).toISOString(),
			bio: updates.bio ?? target.bio,
			githubUrl: updates.githubUrl ?? target.githubUrl,
			preferredTheme: updates.preferredTheme ?? target.preferredTheme,
			preferredLanguage: updates.preferredLanguage ?? target.preferredLanguage
		};
		users[index] = updated;
		saveStoredUsers(users);
		const currentSession = AuthService.getPersistedSession();
		if (currentSession && currentSession.user.id === userId) {
			currentSession.user = updated;
			AuthService.saveSession(currentSession);
		}
		return updated;
	}
	static async changePassword(userId, payload) {
		await new Promise((res) => setTimeout(res, 300));
		if (payload.newPassword.length < 6) throw new Error("Password must be at least 6 characters.");
		if (payload.newPassword !== payload.confirmPassword) throw new Error("New password and confirmation do not match.");
		return true;
	}
	static saveSession(session) {
		if (typeof window === "undefined") return;
		try {
			if (session.rememberMe) {
				localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
				sessionStorage.removeItem(STORAGE_KEY_SESSION);
			} else {
				sessionStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
				localStorage.removeItem(STORAGE_KEY_SESSION);
			}
		} catch (e) {
			console.error("Failed to save auth session:", e);
		}
	}
	static getPersistedSession() {
		if (typeof window === "undefined") return null;
		try {
			const rawLocal = localStorage.getItem(STORAGE_KEY_SESSION);
			if (rawLocal) return JSON.parse(rawLocal);
			const rawSession = sessionStorage.getItem(STORAGE_KEY_SESSION);
			if (rawSession) return JSON.parse(rawSession);
		} catch (e) {
			console.error("Failed to restore session:", e);
		}
		return null;
	}
	static logout() {
		if (typeof window === "undefined") return;
		localStorage.removeItem(STORAGE_KEY_SESSION);
		sessionStorage.removeItem(STORAGE_KEY_SESSION);
	}
};
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const { notify } = useNotifications();
	(0, import_react.useEffect)(() => {
		try {
			const restored = AuthService.getPersistedSession();
			if (restored) setSession(restored);
		} catch (e) {
			console.error("Failed to restore authentication session:", e);
		} finally {
			setIsLoading(false);
		}
	}, []);
	const login = (0, import_react.useCallback)(async (credentials) => {
		setIsLoading(true);
		try {
			const newSession = await AuthService.login(credentials);
			setSession(newSession);
			notify("success", "Sign In Successful", `Welcome back, ${newSession.user.name}!`);
			return newSession;
		} catch (err) {
			notify("error", "Authentication Failed", err.message || "Invalid college email or password.");
			throw err;
		} finally {
			setIsLoading(false);
		}
	}, [notify]);
	const signup = (0, import_react.useCallback)(async (payload) => {
		setIsLoading(true);
		try {
			const newSession = await AuthService.signup(payload);
			setSession(newSession);
			notify("success", "Account Created", `Welcome to TALTRIX, ${newSession.user.name}!`);
			return newSession;
		} catch (err) {
			notify("error", "Sign Up Failed", err.message || "Could not register account.");
			throw err;
		} finally {
			setIsLoading(false);
		}
	}, [notify]);
	const guestLogin = (0, import_react.useCallback)(() => {
		const guestSession = AuthService.createGuestSession();
		setSession(guestSession);
		notify("info", "Guest Session Active", "You are browsing TALTRIX in Guest Scholar mode.");
		return guestSession;
	}, [notify]);
	const logout = (0, import_react.useCallback)(() => {
		const userName = session?.user.name;
		AuthService.logout();
		setSession(null);
		notify("info", "Signed Out", userName ? `Goodbye, ${userName}` : "Session ended.");
	}, [session, notify]);
	const updateProfile = (0, import_react.useCallback)(async (updates) => {
		if (!session?.user.id) throw new Error("No authenticated user.");
		try {
			const updatedUser = await AuthService.updateProfile(session.user.id, updates);
			setSession((prev) => prev ? {
				...prev,
				user: updatedUser
			} : null);
			notify("success", "Profile Updated", "Your profile details have been saved.");
			return updatedUser;
		} catch (err) {
			notify("error", "Update Failed", err.message || "Could not update profile.");
			throw err;
		}
	}, [session, notify]);
	const changePassword = (0, import_react.useCallback)(async (payload) => {
		if (!session?.user.id) throw new Error("No authenticated user.");
		try {
			await AuthService.changePassword(session.user.id, payload);
			notify("success", "Password Changed", "Your account security credentials have been updated.");
			return true;
		} catch (err) {
			notify("error", "Password Reset Error", err.message || "Failed to update password.");
			throw err;
		}
	}, [session, notify]);
	const requestPasswordReset = (0, import_react.useCallback)(async (email) => {
		try {
			await AuthService.requestPasswordReset(email);
			notify("success", "Reset Link Sent", `Password recovery instructions sent to ${email}. Check your inbox.`);
			return true;
		} catch (err) {
			notify("error", "Reset Failed", err.message || "Unable to process reset request.");
			throw err;
		}
	}, [notify]);
	const user = session?.user || null;
	const isAuthenticated = !!user;
	const role = user?.role || "guest";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
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
			requestPasswordReset
		},
		children
	});
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (!context) throw new Error("useAuth must be used within an AuthProvider");
	return context;
}
var NavigationHistoryContext = (0, import_react.createContext)(void 0);
function NavigationHistoryProvider({ children }) {
	const location = useLocation();
	const navigate = useNavigate();
	const [historyStack, setHistoryStack] = (0, import_react.useState)([]);
	const [previousPath, setPreviousPath] = (0, import_react.useState)("/");
	(0, import_react.useEffect)(() => {
		const current = location.pathname;
		const fromParam = new URLSearchParams(location.search).get("from");
		if (fromParam) {
			setPreviousPath(fromParam);
			return;
		}
		setHistoryStack((prev) => {
			if (prev.length > 0 && prev[prev.length - 1] === current) return prev;
			if (current === "/workspace") {
				const lastNonWorkspace = [...prev].reverse().find((p) => p !== "/workspace");
				if (lastNonWorkspace) setPreviousPath(lastNonWorkspace);
				return prev;
			}
			const updated = [...prev, current].slice(-10);
			if (updated.length >= 2) setPreviousPath(updated[updated.length - 2]);
			return updated;
		});
	}, [location.pathname, location.search]);
	const getBackLabel = () => {
		if (previousPath.includes("/dashboard")) return "← Return to Dashboard";
		if (previousPath.includes("/admin")) return "← Return to Admin";
		if (previousPath === "/" || previousPath === "") return "← Return";
		return "← Back";
	};
	const navigateBack = (customFallBack = "/") => {
		navigate({ to: previousPath || customFallBack });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationHistoryContext.Provider, {
		value: {
			previousPath,
			getBackLabel,
			navigateBack
		},
		children
	});
}
function useNavigationHistory() {
	const context = (0, import_react.useContext)(NavigationHistoryContext);
	if (!context) throw new Error("useNavigationHistory must be used within NavigationHistoryProvider");
	return context;
}
function CommandPalette() {
	const { commandPaletteOpen, setCommandPaletteOpen, setSettingsModalOpen, setShortcutsModalOpen, toggleDarkLight, setTheme, setAccentColor } = useSettings();
	const { isAuthenticated, role, logout } = useAuth();
	const [query, setQuery] = (0, import_react.useState)("");
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (!commandPaletteOpen) setQuery("");
	}, [commandPaletteOpen]);
	const actions = (0, import_react.useMemo)(() => [
		{
			id: "nav-workspace",
			category: "Navigation",
			title: "Open Playground / Workspace",
			subtitle: "Open interactive code execution visualizer",
			icon: Play,
			perform: () => {
				setCommandPaletteOpen(false);
				navigate({ to: "/workspace" });
			}
		},
		{
			id: "nav-dashboard",
			category: "Navigation",
			title: role === "admin" ? "Admin Portal" : "Student Dashboard",
			subtitle: "Open personal dashboard and metrics",
			icon: role === "admin" ? ShieldCheck : LayoutDashboard,
			perform: () => {
				setCommandPaletteOpen(false);
				navigate({ to: role === "admin" ? "/admin" : "/dashboard" });
			}
		},
		...isAuthenticated ? [{
			id: "action-logout",
			category: "Auth",
			title: "Sign Out",
			subtitle: "End current authentication session",
			icon: LogOut,
			perform: () => {
				setCommandPaletteOpen(false);
				logout();
				navigate({ to: "/" });
			}
		}] : [{
			id: "action-login",
			category: "Auth",
			title: "Sign In",
			subtitle: "Access college account and saved visualizers",
			icon: LogIn,
			perform: () => {
				setCommandPaletteOpen(false);
				navigate({ to: "/login" });
			}
		}],
		{
			id: "action-theme-toggle",
			category: "Theme",
			title: "Toggle Dark / Light Mode",
			subtitle: "Quickly flip visual theme appearance",
			icon: Palette,
			perform: () => {
				toggleDarkLight();
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "theme-taltrix-dark",
			category: "Theme",
			title: "Theme: Taltrix Dark",
			subtitle: "Default sleek dark cyan & purple identity",
			icon: Palette,
			perform: () => {
				setTheme("taltrix-dark");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "theme-midnight",
			category: "Theme",
			title: "Theme: Midnight",
			subtitle: "Deep pitch-black canvas with luminous blue",
			icon: Palette,
			perform: () => {
				setTheme("midnight");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "theme-deep-blue",
			category: "Theme",
			title: "Theme: Deep Blue",
			subtitle: "Rich oceanic dark blue aesthetic",
			icon: Palette,
			perform: () => {
				setTheme("deep-blue");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "theme-graphite",
			category: "Theme",
			title: "Theme: Graphite",
			subtitle: "Monochromatic carbon gray",
			icon: Palette,
			perform: () => {
				setTheme("graphite");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "theme-light",
			category: "Theme",
			title: "Theme: Light",
			subtitle: "Clean light mode for bright rooms",
			icon: Palette,
			perform: () => {
				setTheme("light");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "accent-cyan",
			category: "Theme",
			title: "Accent Color: Cyan",
			icon: Sparkles,
			perform: () => {
				setAccentColor("cyan");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "accent-[#9333ea]",
			category: "Theme",
			title: "Accent Color: Purple",
			icon: Sparkles,
			perform: () => {
				setAccentColor("purple");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "accent-[#10b981]",
			category: "Theme",
			title: "Accent Color: Emerald",
			icon: Sparkles,
			perform: () => {
				setAccentColor("emerald");
				setCommandPaletteOpen(false);
			}
		},
		{
			id: "action-settings",
			category: "Settings",
			title: "Open Global Settings",
			subtitle: "Preferences drawer and options",
			icon: Settings2,
			perform: () => {
				setCommandPaletteOpen(false);
				setSettingsModalOpen(true);
			}
		},
		{
			id: "action-shortcuts",
			category: "Settings",
			title: "Keyboard Shortcuts",
			subtitle: "View keybindings overlay (?)",
			icon: CircleQuestionMark,
			perform: () => {
				setCommandPaletteOpen(false);
				setShortcutsModalOpen(true);
			}
		}
	], [
		isAuthenticated,
		logout,
		navigate,
		role,
		setAccentColor,
		setCommandPaletteOpen,
		setSettingsModalOpen,
		setShortcutsModalOpen,
		setTheme,
		toggleDarkLight
	]);
	const filtered = (0, import_react.useMemo)(() => {
		if (!query.trim()) return actions;
		const q = query.toLowerCase();
		return actions.filter((a) => a.title.toLowerCase().includes(q) || a.subtitle && a.subtitle.toLowerCase().includes(q));
	}, [actions, query]);
	if (!commandPaletteOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[350] flex items-start justify-center bg-black/60 pt-20 backdrop-blur-md px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .95,
				y: -10
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .95,
				y: -10
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
			className: "w-full max-w-xl overflow-hidden rounded-2xl border border-border/70 bg-surface/95 shadow-2xl backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-13 items-center gap-3 border-b border-border/70 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 shrink-0 text-cyan-400" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						type: "text",
						placeholder: "Type a command or search actions... (Ctrl + K)",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						className: "w-full bg-transparent font-mono text-xs text-foreground placeholder-muted-foreground outline-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCommandPaletteOpen(false),
						className: "rounded-lg p-1 text-muted-foreground transition-colors hover:bg-surface/80 hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-80 overflow-auto p-2 font-mono text-[12px]",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6 text-center text-muted-foreground",
					children: "No matching commands found."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1",
					children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: item.perform,
						className: "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-cyan-500/15 hover:text-cyan-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-sans text-xs font-semibold text-foreground",
								children: item.title
							}), item.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-sans text-[11px] text-muted-foreground",
								children: item.subtitle
							}) : null] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-background/60 px-2 py-0.5 text-[10px] text-muted-foreground uppercase",
							children: item.category
						})]
					}, item.id))
				})
			})]
		})
	}) });
}
function Modal({ open, onOpenChange, title, description, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
			forceMount: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
				asChild: true,
				forceMount: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					className: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				asChild: true,
				forceMount: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 18,
						scale: .97
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						y: 12,
						scale: .98
					},
					transition: {
						duration: .32,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: cn("panel fixed top-1/2 left-1/2 z-50 w-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 p-6", className),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-lg font-semibold",
							children: title
						}),
						description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "mt-2 text-[13px] leading-relaxed text-muted-foreground",
							children: description
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							"data-cursor": "button",
							className: "absolute top-4 right-4 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground",
							"aria-label": "Close dialog",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})
					]
				})
			})]
		}) : null })
	});
}
var SHORTCUT_GROUPS = [
	{
		category: "General & Navigation",
		shortcuts: [
			{
				keys: ["Ctrl", "K"],
				desc: "Command Palette"
			},
			{
				keys: ["?"],
				desc: "Keyboard Shortcuts Overlay"
			},
			{
				keys: ["Esc"],
				desc: "Close Modals / Drawers"
			}
		]
	},
	{
		category: "Execution Controls",
		shortcuts: [
			{
				keys: ["Space"],
				desc: "Toggle Play / Pause"
			},
			{
				keys: ["→"],
				desc: "Step Forward"
			},
			{
				keys: ["←"],
				desc: "Step Backward"
			},
			{
				keys: ["R"],
				desc: "Restart Execution"
			}
		]
	},
	{
		category: "Workspace & View",
		shortcuts: [{
			keys: ["Tab"],
			desc: "Switch Inspection Views"
		}, {
			keys: ["Cmd", "P"],
			desc: "Presentation Mode"
		}]
	}
];
function ShortcutsModal() {
	const { shortcutsModalOpen, setShortcutsModalOpen } = useSettings();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open: shortcutsModalOpen,
		onOpenChange: setShortcutsModalOpen,
		title: "TALTRIX Keyboard Shortcuts",
		description: "Quickly control execution and navigate the IDE.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4 font-mono text-[12px]",
			children: SHORTCUT_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-sans text-xs font-semibold text-cyan-300 uppercase tracking-wider",
					children: group.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1.5",
					children: group.shortcuts.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs text-foreground",
							children: sc.desc
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1",
							children: sc.keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "rounded border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-cyan-300 shadow-sm",
								children: k
							}, k))
						})]
					}, sc.desc))
				})]
			}, group.category))
		})
	});
}
function ConfirmResetModal({ open, onOpenChange, onConfirm }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open,
		onOpenChange,
		title: "Restore Default Settings",
		description: "Are you sure you want to reset all preferences to defaults?",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 font-mono text-[12px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3.5 text-amber-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5 shrink-0 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] leading-relaxed",
					children: "This action will reset your theme, editor font sizes, sound volumes, and layout options back to initial TALTRIX defaults."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-end gap-2 border-t border-border/60 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
					size: "sm",
					variant: "ghost",
					onClick: () => onOpenChange(false),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
					size: "sm",
					variant: "primary",
					onClick: () => {
						onConfirm();
						onOpenChange(false);
					},
					className: "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Confirm Reset" })]
				})]
			})]
		})
	});
}
var TABS = [
	{
		id: "appearance",
		label: "Appearance",
		icon: Palette
	},
	{
		id: "cursor",
		label: "Developer Cursor",
		icon: MousePointer
	},
	{
		id: "canvas",
		label: "Living Canvas",
		icon: Sparkles
	},
	{
		id: "editor",
		label: "Editor",
		icon: CodeXml
	},
	{
		id: "visualization",
		label: "Visualization",
		icon: Eye
	},
	{
		id: "accessibility",
		label: "Accessibility",
		icon: Accessibility
	},
	{
		id: "smart",
		label: "Smart Preferences",
		icon: Bookmark
	},
	{
		id: "about",
		label: "About & Backup",
		icon: Download
	}
];
var THEMES = [
	{
		id: "taltrix-dark",
		name: "Taltrix Dark",
		desc: "Default sleek dark cyan & purple identity",
		bg: "bg-[#0D1224]",
		border: "border-cyan-500/40",
		accent: "bg-cyan-400"
	},
	{
		id: "midnight",
		name: "Midnight",
		desc: "Deep pitch-black canvas with luminous blue",
		bg: "bg-[#070913]",
		border: "border-blue-500/40",
		accent: "bg-blue-400"
	},
	{
		id: "deep-blue",
		name: "Deep Blue",
		desc: "Rich oceanic dark blue aesthetic",
		bg: "bg-[#0B1736]",
		border: "border-indigo-500/40",
		accent: "bg-sky-400"
	},
	{
		id: "graphite",
		name: "Graphite",
		desc: "Monochromatic carbon gray for minimalists",
		bg: "bg-[#18181B]",
		border: "border-zinc-600",
		accent: "bg-zinc-300"
	},
	{
		id: "light",
		name: "Light (Experimental)",
		desc: "Clean light mode for bright classrooms",
		bg: "bg-[#F8FAFC]",
		border: "border-slate-300",
		accent: "bg-blue-600"
	}
];
var ACCENTS = [
	{
		id: "cyan",
		name: "Cyan",
		color: "bg-cyan-400"
	},
	{
		id: "purple",
		name: "Purple",
		color: "bg-purple-400"
	},
	{
		id: "emerald",
		name: "Emerald",
		color: "bg-emerald-400"
	},
	{
		id: "amber",
		name: "Amber",
		color: "bg-amber-400"
	},
	{
		id: "blue",
		name: "Blue",
		color: "bg-blue-400"
	}
];
function SettingsModal() {
	const { settings, updateCategory, setTheme, setAccentColor, setUiDensity, resetSettings, exportSettings, importSettings, settingsModalOpen, setSettingsModalOpen, activeSettingsTab, setActiveSettingsTab } = useSettings();
	const [confirmResetOpen, setConfirmResetOpen] = (0, import_react.useState)(false);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (settingsModalOpen) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "";
			};
		}
	}, [settingsModalOpen]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && settingsModalOpen) setSettingsModalOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [settingsModalOpen, setSettingsModalOpen]);
	if (!settingsModalOpen) return null;
	const handleImportFile = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const text = event.target?.result;
				if (text) importSettings(text);
			};
			reader.readAsText(file);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		onClick: () => setSettingsModalOpen(false),
		className: "fixed inset-0 z-[250] flex justify-end bg-black/60 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				x: "100%",
				opacity: .8
			},
			animate: {
				x: 0,
				opacity: 1
			},
			exit: {
				x: "100%",
				opacity: 0
			},
			transition: {
				type: "spring",
				stiffness: 340,
				damping: 32
			},
			onClick: (e) => e.stopPropagation(),
			className: "flex h-full w-full max-w-2xl flex-col border-l border-border/70 bg-surface/95 text-foreground shadow-2xl backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 items-center justify-between border-b border-border/70 px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-bold tracking-[0.24em] uppercase text-foreground",
						children: "TALTRIX Global Settings"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSettingsModalOpen(false),
					className: "rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-surface/80 hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-52 border-r border-border/60 bg-background/40 p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "space-y-1",
						children: TABS.map((t) => {
							const active = t.id === activeSettingsTab;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"data-cursor": "button",
								onClick: () => setActiveSettingsTab(t.id),
								className: cn("flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left font-mono text-[11px] transition-all", active ? "bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30 shadow-sm" : "text-muted-foreground hover:bg-surface/60 hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: cn("h-3.5 w-3.5", active ? "text-cyan-400" : "text-muted-foreground") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: t.label
								})]
							}, t.id);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-0 flex-1 overflow-auto p-5 font-mono text-[12px]",
					children: [
						activeSettingsTab === "appearance" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-sans text-sm font-semibold text-foreground",
									children: "Theme & Visual Identity"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-xs text-muted-foreground",
									children: "Select theme, accent highlights, and UI element density."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
									children: THEMES.map((th) => {
										const selected = settings.theme.id === th.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setTheme(th.id),
											className: cn("relative flex flex-col justify-between rounded-xl border p-3 text-left transition-all", th.bg, selected ? `${th.border} ring-2 ring-cyan-400/40 shadow-lg` : "border-border/60 hover:border-border"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-sans text-xs font-bold text-foreground",
													children: th.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2.5 w-2.5 rounded-full", th.accent) })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-sans text-[11px] text-muted-foreground",
												children: th.desc
											})] }), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-3 flex items-center gap-1 font-mono text-[10px] text-cyan-400",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), " Active"]
											}) : null]
										}, th.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 border-t border-border/50 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-sans text-xs font-semibold text-foreground",
										children: "Accent Color"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2",
										children: ACCENTS.map((acc) => {
											const active = settings.appearance.accentColor === acc.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setAccentColor(acc.id),
												className: cn("flex items-center gap-2 rounded-lg border px-3 py-1.5 text-[11px] font-sans transition-all", active ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-300 font-bold" : "border-border/60 text-muted-foreground hover:bg-surface/60"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-3 w-3 rounded-full", acc.color) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: acc.name })]
											}, acc.id);
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 border-t border-border/50 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-sans text-xs font-semibold text-foreground",
										children: "UI Density"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-3 gap-2",
										children: [
											"compact",
											"comfortable",
											"spacious"
										].map((d) => {
											const active = settings.appearance.uiDensity === d;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setUiDensity(d),
												className: cn("rounded-lg border py-2 text-center font-sans text-xs capitalize transition-all", active ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-300 font-semibold" : "border-border/60 text-muted-foreground hover:bg-surface/60"),
												children: d
											}, d);
										})
									})]
								})
							]
						}) : null,
						activeSettingsTab === "cursor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-sm font-semibold text-foreground",
								children: "Developer Cursor System"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs text-muted-foreground",
								children: "Configure custom cursor styles, trails, and interactive hover magnetic effects."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-xs font-semibold",
											children: "Enable Developer Cursor"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-sans text-[11px] text-muted-foreground",
											children: "Render custom morphing cursor"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: settings.devCursor.enabled,
											onChange: (e) => updateCategory("devCursor", { enabled: e.target.checked }),
											className: "h-4 w-4 accent-cyan-400"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 rounded-lg border border-border/50 bg-background/30 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-xs font-semibold",
											children: "Cursor Style"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid grid-cols-3 gap-2",
											children: [
												"ring",
												"crosshair",
												"glow"
											].map((st) => {
												const active = settings.devCursor.style === st;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => updateCategory("devCursor", { style: st }),
													className: cn("rounded-lg border py-1.5 text-center font-sans text-xs capitalize transition-all", active ? "border-cyan-400/50 bg-cyan-500/15 text-cyan-300 font-semibold" : "border-border/60 text-muted-foreground hover:bg-surface/60"),
													children: st
												}, st);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-xs font-semibold",
											children: "Click Ripple Effect"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-sans text-[11px] text-muted-foreground",
											children: "Emit glowing particle ripples on click"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: settings.devCursor.clickRipple,
											onChange: (e) => updateCategory("devCursor", { clickRipple: e.target.checked }),
											className: "h-4 w-4 accent-cyan-400"
										})]
									})
								]
							})]
						}) : null,
						activeSettingsTab === "canvas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-sm font-semibold text-foreground",
								children: "Living Code Canvas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs text-muted-foreground",
								children: "Configure interactive background particle field and code token repulsion."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "Canvas Enabled"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Display interactive token field"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.landing.canvasEnabled,
										onChange: (e) => updateCategory("landing", { canvasEnabled: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between font-sans text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "Particle Density"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-cyan-400 font-mono",
											children: [settings.landing.particleDensity, " tokens"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 40,
										max: 200,
										value: settings.landing.particleDensity,
										onChange: (e) => updateCategory("landing", { particleDensity: Number(e.target.value) }),
										className: "w-full accent-cyan-400"
									})]
								})]
							})]
						}) : null,
						activeSettingsTab === "editor" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-sm font-semibold text-foreground",
								children: "Code Editor"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs text-muted-foreground",
								children: "Typography, minimap, line numbers, and indentation guides."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between font-sans text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: "Font Size"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-cyan-400 font-mono",
											children: [settings.editor.fontSize, "px"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 11,
										max: 18,
										value: settings.editor.fontSize,
										onChange: (e) => updateCategory("editor", { fontSize: Number(e.target.value) }),
										className: "w-full accent-cyan-400"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "Minimap"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Show code overview strip"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.editor.showMinimap,
										onChange: (e) => updateCategory("editor", { showMinimap: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								})]
							})]
						}) : null,
						activeSettingsTab === "visualization" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-sm font-semibold text-foreground",
								children: "Visualization Engine"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs text-muted-foreground",
								children: "Execution step speeds, smooth line transitions, and auto-scroll."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "Smooth Transitions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Animate line highlights smoothly"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.visualization.smoothTransitions,
										onChange: (e) => updateCategory("visualization", { smoothTransitions: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "Auto-Scroll Active Line"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Keep executing line centered in editor"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.visualization.autoScroll,
										onChange: (e) => updateCategory("visualization", { autoScroll: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								})]
							})]
						}) : null,
						activeSettingsTab === "accessibility" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-sm font-semibold text-foreground",
								children: "Accessibility"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs text-muted-foreground",
								children: "Motion preferences, high contrast, and keyboard navigation."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "Reduce Motion"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Disable decorative particle animations"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.accessibility.reduceMotion,
										onChange: (e) => updateCategory("accessibility", { reduceMotion: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "High Contrast"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Increase contrast of code indicators"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.accessibility.highContrast,
										onChange: (e) => updateCategory("accessibility", { highContrast: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								})]
							})]
						}) : null,
						activeSettingsTab === "smart" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-sm font-semibold text-foreground",
								children: "Smart Preferences"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs text-muted-foreground",
								children: "Automatically remember last theme, workspace state, and active examples."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "Remember Last Theme"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Restore active theme on next visit"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.smartPreferences.rememberLastTheme,
										onChange: (e) => updateCategory("smartPreferences", { rememberLastTheme: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between rounded-lg border border-border/50 bg-background/30 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold",
										children: "Remember Panel Layout"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] text-muted-foreground",
										children: "Save panel split sizes locally"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: settings.smartPreferences.rememberPanelLayout,
										onChange: (e) => updateCategory("smartPreferences", { rememberPanelLayout: e.target.checked }),
										className: "h-4 w-4 accent-cyan-400"
									})]
								})]
							})]
						}) : null,
						activeSettingsTab === "about" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-sm font-semibold text-foreground",
								children: "Backup & Actions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs text-muted-foreground",
								children: "Export preferences, import JSON configuration, or test boot intro."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: exportSettings,
										className: "flex w-full items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-3.5 text-foreground transition-colors hover:bg-surface/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 font-sans font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 text-cyan-400" }), "Export Settings (JSON)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-muted-foreground",
											children: "Download"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileInputRef,
										type: "file",
										accept: ".json",
										onChange: handleImportFile,
										className: "hidden"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => fileInputRef.current?.click(),
										className: "flex w-full items-center justify-between rounded-lg border border-border/60 bg-surface/40 p-3.5 text-foreground transition-colors hover:bg-surface/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 font-sans font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4 text-emerald-400" }), "Import Settings (JSON)"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-muted-foreground",
											children: "Upload"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setConfirmResetOpen(true),
										className: "flex w-full items-center justify-between rounded-lg border border-rose-500/30 bg-rose-500/10 p-3.5 text-rose-200 transition-colors hover:bg-rose-500/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2 font-sans font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4 text-rose-400" }), "Reset All Preferences to Defaults"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-rose-300",
											children: "Reset"
										})]
									})
								]
							})]
						}) : null
					]
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmResetModal, {
		open: confirmResetOpen,
		onOpenChange: setConfirmResetOpen,
		onConfirm: () => {
			resetSettings();
			setConfirmResetOpen(false);
		}
	})] });
}
function CustomCursor() {
	const { settings } = useSettings();
	const devCursor = settings.devCursor;
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	const trailRef = (0, import_react.useRef)(null);
	const [ripples, setRipples] = (0, import_react.useState)([]);
	const [mode, setMode] = (0, import_react.useState)("default");
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!devCursor?.enabled) {
			setEnabled(false);
			document.documentElement.style.cursor = "";
			return;
		}
		setEnabled(true);
		document.documentElement.style.cursor = "none";
		const target = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const pos = { ...target };
		const trailPos = { ...target };
		let raf = 0;
		const handleMove = (e) => {
			target.x = e.clientX;
			target.y = e.clientY;
			const el = e.target?.closest?.("[data-cursor], button, a, [role='button']");
			const next = el?.dataset?.["cursor"] ?? (el ? "button" : "default");
			setMode(next);
		};
		const handleClick = (e) => {
			if (!devCursor?.clickRipple) return;
			const id = Date.now();
			setRipples((prev) => [...prev.slice(-4), {
				id,
				x: e.clientX,
				y: e.clientY
			}]);
			setTimeout(() => {
				setRipples((prev) => prev.filter((r) => r.id !== id));
			}, 600);
		};
		const loop = () => {
			const speed = (devCursor.interactionStrength || 3) * .08;
			pos.x += (target.x - pos.x) * speed;
			pos.y += (target.y - pos.y) * speed;
			trailPos.x += (target.x - trailPos.x) * (speed * .45);
			trailPos.y += (target.y - trailPos.y) * (speed * .45);
			if (dotRef.current) dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
			if (ringRef.current) ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
			if (trailRef.current) trailRef.current.style.transform = `translate3d(${trailPos.x}px, ${trailPos.y}px, 0) translate(-50%, -50%)`;
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("pointermove", handleMove, { passive: true });
		window.addEventListener("mousemove", handleMove, { passive: true });
		window.addEventListener("click", handleClick, { passive: true });
		raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("pointermove", handleMove);
			window.removeEventListener("mousemove", handleMove);
			window.removeEventListener("click", handleClick);
			cancelAnimationFrame(raf);
			document.documentElement.style.cursor = "";
		};
	}, [
		devCursor?.enabled,
		devCursor?.clickRipple,
		devCursor?.interactionStrength
	]);
	if (!enabled || !devCursor?.enabled) return null;
	const styleMode = devCursor.style;
	const ringStyle = {
		default: styleMode === "crosshair" ? "h-6 w-6 border-cyan-400/80 rounded-none border-dashed" : styleMode === "glow" ? "h-9 w-9 rounded-full border-cyan-400 bg-cyan-500/20 shadow-[0_0_20px_var(--color-accent)]" : "h-7 w-7 rounded-full border-cyan-400/80 bg-cyan-500/10 shadow-sm",
		button: "h-11 w-11 rounded-2xl border-cyan-400 bg-cyan-500/25 shadow-lg border-2",
		code: "h-9 w-9 rounded-lg border-purple-400/80 bg-purple-500/20",
		text: "h-8 w-[3px] rounded-full border-cyan-400 bg-cyan-400"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-[999999]",
		children: [
			ripples.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: {
					left: r.x,
					top: r.y
				},
				className: "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/80 bg-cyan-400/20 animate-ping h-8 w-8"
			}, r.id)),
			devCursor.trail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: trailRef,
				className: "absolute top-0 left-0 h-10 w-10 rounded-full border border-cyan-500/25 bg-cyan-500/5 transition-transform duration-75"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: ringRef,
				className: `absolute top-0 left-0 border transition-[width,height,border-radius,background-color,border-color] duration-200 ease-out ${ringStyle[mode]}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: dotRef,
				className: "absolute top-0 left-0 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_var(--color-accent)]"
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Taltrix | Interactive Code Visualizer" },
			{
				name: "description",
				content: "Taltrix is an interactive code execution visualization platform for students and educators."
			},
			{
				name: "author",
				content: "Taltrix"
			},
			{
				property: "og:title",
				content: "Taltrix | Interactive Code Visualizer"
			},
			{
				property: "og:description",
				content: "Taltrix is an interactive code execution visualization platform for students and educators."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "alternate icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationHistoryProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TransitionProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-right",
				theme: "dark",
				richColors: true,
				closeButton: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "sync",
				initial: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: {
						duration: .2,
						ease: "easeOut"
					},
					className: "w-full h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, location.pathname)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutsModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsModal, {})
		] }) }) }) }) }) })
	});
}
var $$splitComponentImporter$6 = () => import("./routes-IOoYHTcx.mjs").then((n) => n.t);
var TITLE$6 = "Taltrix | Interactive Code Visualizer";
var DESCRIPTION$6 = "Taltrix visualizes how programs really execute: line-by-line flow, variables, call stack, memory, heap and an interactive execution timeline.";
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: TITLE$6 },
		{
			name: "description",
			content: DESCRIPTION$6
		},
		{
			property: "og:title",
			content: TITLE$6
		},
		{
			property: "og:description",
			content: DESCRIPTION$6
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin-ayxLctiN.mjs");
var TITLE$5 = "Admin Portal | TALTRIX";
var DESCRIPTION$5 = "TALTRIX Platform Administration & Academic Telemetry";
var Route$5 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: TITLE$5 }, {
		name: "description",
		content: DESCRIPTION$5
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./dashboard-DLtaDrfq.mjs");
var TITLE$4 = "Student Dashboard | TALTRIX";
var DESCRIPTION$4 = "TALTRIX Student Workspace & Academic Dashboard";
var Route$4 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: TITLE$4 }, {
		name: "description",
		content: DESCRIPTION$4
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./forgot-password-BJ2bxRkD.mjs");
var TITLE$3 = "Forgot Password | TALTRIX";
var DESCRIPTION$3 = "Request a password reset link for your TALTRIX account.";
var Route$3 = createFileRoute("/forgot-password")({
	head: () => ({ meta: [
		{ title: TITLE$3 },
		{
			name: "description",
			content: DESCRIPTION$3
		},
		{
			property: "og:title",
			content: TITLE$3
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./login-Cwzc_S_j.mjs");
var TITLE$2 = "Sign In | TALTRIX Code Execution Visualizer";
var DESCRIPTION$2 = "Sign in with your college email to access your code execution visualizer, saved programs, and learning progress.";
var Route$2 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESCRIPTION$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESCRIPTION$2
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./signup-BqTdfg88.mjs");
var TITLE$1 = "Create Account | TALTRIX";
var DESCRIPTION$1 = "Create your student account to visualize code execution, analyze memory call stacks, and save programs.";
var Route$1 = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: TITLE$1 },
		{
			name: "description",
			content: DESCRIPTION$1
		},
		{
			property: "og:title",
			content: TITLE$1
		},
		{
			property: "og:description",
			content: DESCRIPTION$1
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./workspace-CZ9akzIf.mjs");
var TITLE = "Taltrix Playground | Interactive Code Visualizer";
var DESCRIPTION = "The Taltrix workspace: Monaco editor, animated variables, call stack, memory graph, terminal and an execution timeline in one professional IDE layout.";
var Route = createFileRoute("/workspace")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AdminRoute: Route$5.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$7
	}),
	DashboardRoute: Route$4.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$7
	}),
	ForgotPasswordRoute: Route$3.update({
		id: "/forgot-password",
		path: "/forgot-password",
		getParentRoute: () => Route$7
	}),
	LoginRoute: Route$2.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$7
	}),
	SignupRoute: Route$1.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$7
	}),
	WorkspaceRoute: Route.update({
		id: "/workspace",
		path: "/workspace",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({
	createRouter: () => createRouter,
	getRouter: () => getRouter
});
function createRouter() {
	const queryClient = new QueryClient();
	return createRouter$1({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
}
var getRouter = createRouter;
//#endregion
export { router_BQ7q_z5s_exports as a, useNotifications as c, setMuted as d, useSettings as f, __exportAll as i, blip as l, Modal as n, useAuth as o, cn as p, TaltrixButton as r, useNavigationHistory as s, CustomCursor as t, restoreMuted as u };
