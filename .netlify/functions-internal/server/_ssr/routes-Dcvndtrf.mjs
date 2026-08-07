import { o as __toESM } from "../_runtime.mjs";
import { d as setMuted, f as useSettings, i as __exportAll, l as blip, o as useAuth, p as cn, r as TaltrixButton, u as restoreMuted } from "./router-BaC3vnTK.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as useMotionValueEvent, n as useTransform, o as AnimatePresence, r as useScroll } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { $ as LayoutDashboard, E as Settings2, Pt as Boxes, R as Palette, U as MessageSquare, V as Moon, Vt as ArrowRight, W as Menu, Y as LogIn, _ as Sun, b as Sparkles, g as Terminal, i as Volume2, mt as EyeOff, n as X, r as VolumeX, xt as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dcvndtrf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Section({ id, children, className, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		"aria-label": label,
		className: cn("relative mx-auto w-full max-w-[1240px] px-5 py-24 sm:px-8 md:py-32", className),
		children
	});
}
function SectionHeading({ index, eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] text-accent uppercase", align === "center" && "justify-center"),
				children: [
					index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: eyebrow })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] font-semibold text-balance",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base",
				children: description
			})
		]
	});
}
/**
* Configuration links for TALTRIX
*/
var GOOGLE_FEEDBACK_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd8BjI6BUdAbbDy8zm5rJLnlaMoAQEcI2UcKEWgiL9frm5DxQ/viewform?usp=preview";
var NAV = [{
	label: "Features",
	href: "#features"
}, {
	label: "Examples",
	href: "#demo"
}];
function Navbar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [muted, setMutedState] = (0, import_react.useState)(true);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const { user, isAuthenticated, role } = useAuth();
	const { settings, toggleDarkLight, setSettingsModalOpen, openSettingsTab, setShortcutsModalOpen } = useSettings();
	(0, import_react.useEffect)(() => setMutedState(restoreMuted()), []);
	useMotionValueEvent(scrollY, "change", (y) => {
		const prev = scrollY.getPrevious() ?? 0;
		setScrolled(y > 24);
		setHidden(y > prev && y > 160);
	});
	const toggleSound = () => {
		const next = !muted;
		setMutedState(next);
		setMuted(next);
		if (!next) blip("compile");
	};
	const jump = (href) => (e) => {
		e.preventDefault();
		document.querySelector(href)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const isLight = settings.theme.id === "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -80,
			opacity: 0
		},
		animate: {
			y: hidden ? -96 : 0,
			opacity: 1
		},
		transition: {
			duration: .5,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "fixed inset-x-0 top-0 z-[120]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `mx-auto flex h-14 items-center justify-between gap-2 transition-all duration-300 ease-out px-4 sm:px-6 ${scrolled ? "mt-3 max-w-[1180px] rounded-full border border-border/70 bg-surface/75 backdrop-blur-2xl shadow-xl shadow-black/25" : "mt-0 max-w-[1280px] border border-transparent bg-transparent backdrop-blur-none"}`,
			"aria-label": "Primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					onClick: jump("#top"),
					className: "flex items-center gap-2.5 shrink-0",
					"data-cursor": "button",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg [background-image:var(--gradient-primary)] shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
							className: "h-4 w-4 text-primary-foreground",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold tracking-[0.34em] shrink-0",
						children: "TALTRIX"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-1 md:flex",
					children: [
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							onClick: jump(item.href),
							onMouseEnter: () => blip("hover"),
							"data-cursor": "button",
							className: "rounded-lg px-3.5 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-h/50",
							children: item.label
						}, item.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: GOOGLE_FEEDBACK_FORM_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							onMouseEnter: () => blip("hover"),
							"data-cursor": "button",
							"aria-label": "Submit Feedback (opens in a new tab)",
							className: "group relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:bg-surface-h/60 hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
								className: "h-3.5 w-3.5 text-muted-foreground/80 transition-colors group-hover:text-cyan-400",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Feedback" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSettingsModalOpen(true),
							onMouseEnter: () => blip("hover"),
							"data-cursor": "button",
							className: "rounded-lg px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-h/50",
							children: "Settings"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 sm:gap-1.5 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							"data-cursor": "button",
							"aria-label": mobileMenuOpen ? "Close menu" : "Open menu",
							"aria-expanded": mobileMenuOpen,
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-foreground hover:border-cyan-500/40 md:hidden",
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleDarkLight,
							"data-cursor": "button",
							"aria-label": "Toggle theme mode",
							title: "Toggle Dark / Light Mode",
							className: "grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40",
							children: isLight ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => openSettingsTab("appearance"),
							"data-cursor": "button",
							"aria-label": "Appearance settings",
							title: "Appearance Settings",
							className: "hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSettingsModalOpen(true),
							"data-cursor": "button",
							"aria-label": "Global Settings",
							title: "Global Settings",
							className: "hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShortcutsModalOpen(true),
							"data-cursor": "button",
							"aria-label": "Keyboard Shortcuts",
							title: "Keyboard Shortcuts (?)",
							className: "hidden lg:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-cyan-400 hover:border-cyan-500/40 font-mono text-xs font-bold",
							children: "?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleSound,
							"data-cursor": "button",
							"aria-pressed": !muted,
							"aria-label": muted ? "Unmute interface sounds" : "Mute interface sounds",
							className: "hidden md:grid h-9 w-9 place-items-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:text-accent",
							children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-4 w-4" })
						}),
						isAuthenticated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: role === "admin" ? "/admin" : "/dashboard",
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-2.5 sm:px-3 py-1.5 font-sans text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/20 whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dashboard" })]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex items-center gap-1.5 rounded-lg border border-border/80 bg-surface/60 px-2.5 sm:px-3 py-1.5 font-sans text-xs font-medium text-foreground transition-colors hover:bg-surface-h whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-3.5 w-3.5 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sign In" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/workspace",
							className: "shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
								size: "sm",
								className: "whitespace-nowrap",
								children: "Open Playground"
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10,
				scale: .98
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -10,
				scale: .98
			},
			transition: {
				duration: .2,
				ease: "easeOut"
			},
			className: "mx-auto mt-2 w-[calc(100%-2.5rem)] max-w-[1240px] rounded-2xl border border-border/80 bg-surface/95 p-4 backdrop-blur-2xl shadow-2xl md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: (e) => {
							jump(item.href)(e);
							setMobileMenuOpen(false);
						},
						onMouseEnter: () => blip("hover"),
						"data-cursor": "button",
						className: "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-h/60 hover:text-foreground",
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://docs.google.com/forms/d/e/1FAIpQLSd8BjI6BUdAbbDy8zm5rJLnlaMoAQEcI2UcKEWgiL9frm5DxQ/viewform?usp=preview",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => setMobileMenuOpen(false),
						onMouseEnter: () => blip("hover"),
						"data-cursor": "button",
						"aria-label": "Submit Feedback (opens in a new tab)",
						className: "flex items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-surface-h/60 hover:text-foreground active:scale-[0.98]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
								className: "h-4 w-4 text-cyan-400",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Feedback" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] uppercase text-cyan-400",
							children: "External"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSettingsModalOpen(true);
							setMobileMenuOpen(false);
						},
						onMouseEnter: () => blip("hover"),
						"data-cursor": "button",
						className: "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-h/60 hover:text-foreground text-left",
						children: "Settings"
					})
				]
			})
		}) })]
	});
}
var TOKENS = [
	"if",
	"return",
	"class",
	"while",
	"for",
	"print",
	"malloc",
	"new",
	"{}",
	"[]",
	"()",
	"const",
	"let",
	"def",
	"function",
	"=>",
	"async",
	"await",
	"null",
	"int",
	"void",
	"try",
	"catch",
	"yield",
	"self",
	"0x1a",
	"&ptr",
	"stack",
	"heap",
	"push",
	"pop"
];
var LivingCodeCanvas = (0, import_react.memo)(function LivingCodeCanvas({ reduced }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { alpha: true });
		if (!ctx) return;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let w = 0;
		let h = 0;
		let fragments = [];
		let order = 0;
		let raf = 0;
		const pointer = {
			x: -9999,
			y: -9999
		};
		const ripples = [];
		const build = () => {
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			if (!w || !h) return;
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const density = Math.min(90, Math.max(50, Math.round(w * h / 14e3)));
			fragments = Array.from({ length: density }, () => {
				const x = Math.random() * w;
				const y = Math.random() * h;
				return {
					x,
					y,
					hx: x,
					hy: y,
					vx: (Math.random() - .5) * .18,
					vy: (Math.random() - .5) * .18,
					size: 11,
					alpha: .12 + Math.random() * .28,
					text: TOKENS[Math.floor(Math.random() * TOKENS.length)] ?? "if",
					hue: Math.random()
				};
			});
		};
		const columnTargets = () => {
			const perCol = Math.ceil(fragments.length / 6) || 1;
			fragments.forEach((f, i) => {
				const col = Math.floor(i / perCol);
				const row = i % perCol;
				f.hx = w / 7 * (col + 1);
				f.hy = (row + .5) / perCol * h;
			});
		};
		const scatterTargets = () => {
			fragments.forEach((f) => {
				f.hx = Math.random() * w;
				f.hy = Math.random() * h;
			});
		};
		const onPointer = (e) => {
			const rect = canvas.getBoundingClientRect();
			pointer.x = e.clientX - rect.left;
			pointer.y = e.clientY - rect.top;
		};
		const onLeave = () => {
			pointer.x = -9999;
			pointer.y = -9999;
		};
		const onDown = (e) => {
			const rect = canvas.getBoundingClientRect();
			ripples.push({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
				r: 0,
				life: 1
			});
			if (ripples.length > 5) ripples.shift();
		};
		const onScroll = () => {
			const next = window.scrollY > 120 ? 1 : 0;
			if (next === order) return;
			order = next;
			if (order) columnTargets();
			else scatterTargets();
		};
		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.font = "12px \"JetBrains Mono\", monospace";
			for (const f of fragments) {
				if (order) {
					f.x += (f.hx - f.x) * .03;
					f.y += (f.hy - f.y) * .03;
				} else {
					f.x += f.vx;
					f.y += f.vy;
				}
				const dx = f.x - pointer.x;
				const dy = f.y - pointer.y;
				const dist2 = dx * dx + dy * dy;
				if (dist2 < 2e4) {
					const d = Math.sqrt(dist2) || 1;
					const push = (1 - d / 140) * 3;
					f.x += dx / d * push;
					f.y += dy / d * push;
				}
				for (const rp of ripples) {
					const rdx = f.x - rp.x;
					const rdy = f.y - rp.y;
					const d = Math.hypot(rdx, rdy) || 1;
					const band = Math.abs(d - rp.r);
					if (band < 40) {
						const force = (1 - band / 40) * rp.life * 2.4;
						f.x += rdx / d * force;
						f.y += rdy / d * force;
					}
				}
				if (f.x < -30) f.x = w + 30;
				if (f.x > w + 30) f.x = -30;
				if (f.y < -30) f.y = h + 30;
				if (f.y > h + 30) f.y = -30;
				const near = dist2 < 36e3;
				ctx.fillStyle = f.hue > .86 ? `rgba(168, 85, 247, ${Math.min(.85, f.alpha + (near ? .35 : 0))})` : f.hue > .72 ? `rgba(34, 211, 238, ${Math.min(.8, f.alpha + (near ? .32 : 0))})` : `rgba(190, 202, 226, ${Math.min(.75, f.alpha * (near ? 1.8 : 1))})`;
				ctx.fillText(f.text, f.x, f.y);
			}
			for (let i = ripples.length - 1; i >= 0; i--) {
				const rp = ripples[i];
				rp.r += 8;
				rp.life -= .016;
				if (rp.life <= 0) {
					ripples.splice(i, 1);
					continue;
				}
				ctx.beginPath();
				ctx.strokeStyle = `rgba(34, 211, 238, ${rp.life * .25})`;
				ctx.lineWidth = 1;
				ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
				ctx.stroke();
			}
			raf = requestAnimationFrame(draw);
		};
		build();
		const ro = new ResizeObserver(build);
		ro.observe(canvas);
		if (reduced) {
			draw();
			cancelAnimationFrame(raf);
			return () => ro.disconnect();
		}
		window.addEventListener("pointermove", onPointer, { passive: true });
		window.addEventListener("pointerdown", onDown, { passive: true });
		window.addEventListener("scroll", onScroll, { passive: true });
		canvas.addEventListener("pointerleave", onLeave);
		raf = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			window.removeEventListener("pointermove", onPointer);
			window.removeEventListener("pointerdown", onDown);
			window.removeEventListener("scroll", onScroll);
			canvas.removeEventListener("pointerleave", onLeave);
		};
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		"aria-hidden": true,
		className: "absolute inset-0 h-full w-full transform-gpu will-change-transform z-[1]"
	});
});
var TITLE = "TALTRIX";
var SUB = "Understand How Code Really Works.";
function useTypewriter(text, speed = 55, delay = 0, enabled = true) {
	const [out, setOut] = (0, import_react.useState)(enabled ? "" : text);
	(0, import_react.useEffect)(() => {
		if (!enabled) {
			setOut(text);
			return;
		}
		let i = 0;
		let t;
		const step = () => {
			i += 1;
			setOut(text.slice(0, i));
			if (i < text.length) t = setTimeout(step, speed);
		};
		t = setTimeout(step, delay);
		return () => clearTimeout(t);
	}, [
		text,
		speed,
		delay,
		enabled
	]);
	return out;
}
function Hero({ reduced }) {
	const title = useTypewriter(TITLE, 105, 320, !reduced);
	const sub = useTypewriter(SUB, 42, 1400, !reduced);
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, .16], [0, -90]);
	const opacity = useTransform(scrollYProgress, [0, .13], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-[100svh] items-center overflow-hidden",
		"aria-label": "TALTRIX introduction",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingCodeCanvas, { reduced }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 [background-image:var(--gradient-halo)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-veil opacity-[0.14]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-background" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					opacity
				},
				className: "relative z-10 mx-auto w-full max-w-[1240px] px-5 pt-28 pb-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .15,
							duration: .7
						},
						className: "inline-flex items-center gap-2.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-cyan-300 uppercase backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" }), "Interactive Code Execution Visualizer"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-7 font-display text-[clamp(3.4rem,13vw,9.5rem)] leading-[0.86] font-bold tracking-[-0.045em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: title || "\xA0"
						}), !reduced && title.length < 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block h-[0.78em] w-[0.06em] translate-y-[0.04em] bg-cyan-400 align-baseline" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 font-mono text-[clamp(1rem,2.4vw,1.5rem)] text-foreground/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 text-cyan-400",
								children: "›"
							}),
							sub,
							!reduced && sub.length < 33 && sub.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.12em] bg-cyan-400" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground",
						children: "Watch your program execute step by step with interactive visualizations — variables, function calls, memory, and step explanations designed for students and educators."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/workspace",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
								size: "lg",
								className: "shadow-lg shadow-cyan-500/20",
								children: ["Start Visualizing", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "h-4 w-4",
									"aria-hidden": true
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#demo",
							onClick: (e) => {
								e.preventDefault();
								document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
								size: "lg",
								variant: "outline",
								children: "Browse Examples"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-border/60 pt-7 sm:grid-cols-4",
						children: [
							["100%", "visual clarity"],
							["3", "learning modes"],
							["10+", "algorithm examples"],
							["60", "fps interactive"]
						].map(([v, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-2xl font-semibold text-cyan-300",
							children: v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase",
							children: k
						})] }, k))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.24em] text-muted-foreground uppercase md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
					className: "h-3.5 w-3.5",
					"aria-hidden": true
				}), "scroll to execute"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/workspace",
				className: "sr-only",
				children: "Skip to workspace"
			})
		]
	});
}
var SNIPPET = [
	"def factorial(n):",
	"    if n <= 1:",
	"        return 1",
	"    return n * factorial(n - 1)"
];
var CONFUSIONS = [
	{
		icon: CircleQuestionMark,
		text: "Where does n live on each call?"
	},
	{
		icon: EyeOff,
		text: "What is on the stack right now?"
	},
	{
		icon: CircleQuestionMark,
		text: "When does it actually return?"
	}
];
function ProblemSection() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const blur = useTransform(scrollYProgress, [
		.15,
		.4,
		.62
	], [
		"blur(0px)",
		"blur(5px)",
		"blur(0px)"
	]);
	const tilt = useTransform(scrollYProgress, [
		.1,
		.5,
		.9
	], [
		6,
		0,
		-6
	]);
	const clarity = useTransform(scrollYProgress, [.42, .66], [0, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "problem",
		className: "pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "01",
			eyebrow: "The problem",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Code is read as text.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "It runs as motion."
				})
			] }),
			description: "Students trace programs on paper, guess at the stack, and hope the mental model matches reality. The gap between source and execution is where understanding dies."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					filter: blur,
					rotateX: tilt
				},
				className: "panel overflow-hidden [transform-style:preserve-3d] [perspective:1200px]",
				"data-cursor": "code",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-border/70 px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-warning/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-success/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 font-mono text-[11px] text-muted-foreground",
								children: "factorial.py"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "overflow-x-auto p-6 font-mono text-[13px] leading-[2.1] text-foreground/85 sm:text-sm",
						children: SNIPPET.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-4 shrink-0 text-right text-muted-foreground/60",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line })]
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						style: { opacity: clarity },
						className: "border-t border-border/70 px-6 py-4 font-mono text-[12px] text-success",
						children: "› taltrix attached — 9 steps recorded, 5 frames, 3 heap objects"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [CONFUSIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: 28
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						delay: i * .12,
						duration: .6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "panel flex items-start gap-3 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-warning",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: c.text
					})]
				}, c.text)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: { opacity: clarity },
					className: "panel flex items-start gap-3 border-primary/40 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
						className: "mt-0.5 h-4 w-4 shrink-0 text-accent",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Taltrix answers all three at once — by replaying the run instead of describing it."
					})]
				})]
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 px-5 py-12 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1240px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-7 w-7 place-items-center rounded-md [background-image:var(--gradient-primary)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
							className: "h-3.5 w-3.5 text-primary-foreground",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[13px] font-semibold tracking-[0.32em]",
						children: "TALTRIX"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-muted-foreground",
					children: "See Code Come Alive. — frontend preview, traces are illustrative."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: GOOGLE_FEEDBACK_FORM_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						"data-cursor": "button",
						className: "inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] text-muted-foreground hover:text-cyan-400 transition-colors uppercase",
						"aria-label": "Submit Feedback (opens in a new tab)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "h-3 w-3 text-cyan-400",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Feedback" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/workspace",
						"data-cursor": "button",
						className: "font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
						children: "Launch app →"
					})]
				})
			]
		})
	});
}
/** Lenis smooth scroll, loaded lazily on the client and disabled for reduced motion. */
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		let lenisInstance = null;
		let isMounted = true;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (!isMounted) return;
			lenisInstance = new Lenis({
				duration: 1.15,
				smoothWheel: true,
				lerp: .09
			});
			const loop = (time) => {
				if (!isMounted) return;
				lenisInstance?.raf(time);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		});
		return () => {
			isMounted = false;
			if (raf) cancelAnimationFrame(raf);
			lenisInstance?.destroy();
		};
	}, []);
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduced(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);
	return reduced;
}
var ExecutionSection = (0, import_react.lazy)(() => import("./ExecutionSection-wI5ad0eM.mjs").then((m) => ({ default: m.ExecutionSection })));
var MemorySection = (0, import_react.lazy)(() => import("./MemorySection-DeOnCtTh.mjs").then((m) => ({ default: m.MemorySection })));
var TimelineSection = (0, import_react.lazy)(() => import("./TimelineSection-B0NQ3fXy.mjs").then((m) => ({ default: m.TimelineSection })));
var FeaturesSection = (0, import_react.lazy)(() => import("./FeaturesSection-BmUgp6aW.mjs").then((m) => ({ default: m.FeaturesSection })));
var LaunchSection = (0, import_react.lazy)(() => import("./LaunchSection-B30_y97d.mjs").then((m) => ({ default: m.LaunchSection })));
function SectionFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto h-[420px] w-full max-w-[1240px] px-5 sm:px-8",
		"aria-hidden": true
	});
}
function LandingPage() {
	const reduced = usePrefersReducedMotion();
	useSmoothScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: .35,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "relative min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { reduced }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemSection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
						fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionSection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemorySection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineSection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturesSection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LaunchSection, {})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent });
var SplitComponent = LandingPage;
//#endregion
export { Section as n, SectionHeading as r, routes_exports as t };
