import { o as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { f as useSettings, l as blip, n as Modal, p as cn, r as TaltrixButton, s as useNavigationHistory, t as CustomCursor } from "./router-B_pj-fbL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Dt as ChevronDown, E as Settings2, Et as ChevronLeft, F as Pause, Ft as Bot, G as MemoryStick, Gt as Activity, H as Monitor, I as PanelRight, L as PanelLeft, Lt as BookOpen, M as Puzzle, Mt as Brain, Ot as Check, P as Play, Pt as Boxes, Q as Lightbulb, R as Palette, S as SkipBack, St as CircleCheck, Tt as ChevronRight, Vt as ArrowRight, Z as LoaderCircle, _t as Cpu, a as Variable, at as History, b as Sparkles, bt as Clock, ct as GripVertical, d as TriangleAlert, dt as FolderOpen, et as Layers, ft as FileCodeCorner, g as Terminal, h as TimerOff, i as Volume2, it as Infinity$1, j as RotateCcw, jt as Bug, k as School, kt as ChartColumn, lt as GraduationCap, n as X, pt as Eye, r as VolumeX, st as HardDrive, t as Zap, ut as Gauge, vt as Command, x as SkipForward, yt as CodeXml, z as OctagonX } from "../_libs/lucide-react.mjs";
import { a as objectProfile, i as PROGRAM_LANGUAGES, n as ExecutionProvider, o as programsByCategory, r as PROGRAMS, s as useExecution, t as CodeEditor } from "./CodeEditor-C-wvmiyU.mjs";
import { a as Trigger, i as Root2, n as Item2, r as Portal2, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Trigger$1, i as Root3, n as Portal, r as Provider, t as Content2$1 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as Zt, r as tn, t as Xt } from "../_libs/react-resizable-panels.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/workspace-BXgArBDf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-[0.16em] uppercase transition-colors duration-300", {
	variants: { tone: {
		neutral: "border-border/70 bg-surface/60 text-muted-foreground",
		primary: "border-primary/50 bg-primary/15 text-primary-soft",
		accent: "border-accent/50 bg-accent/12 text-accent",
		success: "border-success/40 bg-success/12 text-success",
		warning: "border-warning/40 bg-warning/12 text-warning",
		danger: "border-destructive/50 bg-destructive/12 text-destructive"
	} },
	defaultVariants: { tone: "neutral" }
});
function TaltrixBadge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
var TONES = {
	idle: "text-muted-foreground",
	running: "text-success",
	paused: "text-warning",
	done: "text-accent"
};
function StatusChip({ tone = "idle", label, value, pulse = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors duration-300 hover:bg-surface/70", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				animate: pulse ? { opacity: [
					1,
					.25,
					1
				] } : { opacity: 1 },
				transition: {
					duration: 1.6,
					repeat: pulse ? Infinity : 0,
					ease: "easeInOut"
				},
				className: cn("h-1.5 w-1.5 rounded-full bg-current", TONES[tone])
			}),
			label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground/70",
				children: label
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: TONES[tone],
				children: value
			})
		]
	});
}
var TooltipProvider = Provider;
/** Compact tooltip tuned for dense IDE chrome. */
function Tooltip({ content, children, side = "bottom", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root3, {
		delayDuration: 220,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger$1, {
			asChild: true,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
			side,
			sideOffset: 8,
			className: cn("z-50 rounded-lg border border-border/70 bg-popover px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase shadow-[var(--shadow-elevated)]", "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95", className),
			children: content
		}) })]
	});
}
/** Small, keyboard-accessible select used for the language picker and speed menu. */
function Dropdown({ value, options, onChange, label, className }) {
	const active = options.find((o) => o.value === value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger, {
		"data-cursor": "button",
		"aria-label": label,
		className: cn("inline-flex h-8 items-center gap-2 rounded-lg border border-border/70 bg-surface/60 px-2.5 font-mono text-[11px] text-foreground", "transition-all duration-300 hover:border-accent/50 hover:bg-surface data-[state=open]:border-accent/60", className),
		children: [active?.label ?? value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset: 6,
		align: "start",
		className: "z-50 min-w-[170px] rounded-xl border border-border/70 bg-popover p-1 shadow-[var(--shadow-elevated)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item2, {
			onSelect: () => onChange(o.value),
			"data-cursor": "button",
			className: "flex cursor-pointer items-center justify-between gap-3 rounded-lg px-2.5 py-2 font-mono text-[11px] text-muted-foreground outline-none transition-colors data-[highlighted]:bg-surface data-[highlighted]:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.label }), o.value === value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-accent" }) : o.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] opacity-60",
				children: o.hint
			}) : null]
		}, o.value))
	}) })] });
}
/** Underline tabs with a shared layout indicator. */
function Tabs({ value, items, onChange, className }) {
	const layoutId = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		className: cn("flex items-center gap-1 overflow-x-auto", className),
		children: items.map((item) => {
			const active = item.value === value;
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				role: "tab",
				type: "button",
				"aria-selected": active,
				"data-cursor": "button",
				onClick: () => onChange(item.value),
				className: cn("relative flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-300", active ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
				children: [
					Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }) : null,
					item.label,
					active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						layoutId,
						transition: {
							type: "spring",
							stiffness: 400,
							damping: 34
						},
						className: "absolute inset-x-1 -bottom-px h-px bg-accent"
					}) : null
				]
			}, item.value);
		})
	});
}
function Toolbar({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "toolbar",
		className: cn("flex h-12 shrink-0 items-center gap-2 border-b border-border/70 bg-surface/90 px-3 backdrop-blur", className),
		...props
	});
}
function ToolbarGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center gap-1.5", className),
		...props
	});
}
function ToolbarDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: "mx-1 h-5 w-px shrink-0 bg-border/70"
	});
}
/**
* A framed pane with a title strip — the base chrome for editor/console/inspector
* regions inside the workspace.
*/
function Window({ title, icon: Icon, actions, children, className, bodyClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		layout: true,
		transition: {
			type: "spring",
			stiffness: 280,
			damping: 34
		},
		className: cn("flex min-h-0 flex-col overflow-hidden bg-surface/40", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex h-9 shrink-0 items-center justify-between gap-2 border-b border-border/60 bg-surface/80 px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase",
				children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }) : null, title]
			}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex items-center gap-1.5",
				children: actions
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("min-h-0 flex-1 overflow-auto", bodyClassName),
			children
		})]
	});
}
var ResizablePanelGroup = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Xt, {
	className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
	...props
});
var ResizablePanel = Zt;
var ResizableHandle = ({ withHandle, className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tn, {
	className: cn("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90", className),
	...props,
	children: withHandle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-2.5 w-2.5" })
	})
});
var MODES = [
	{
		id: "learn",
		label: "Learn",
		icon: GraduationCap,
		hint: "Beginner mode: execution line, explanations, step breakdown & key variables"
	},
	{
		id: "debug",
		label: "Debug",
		icon: Bug,
		hint: "Detailed variables, call hierarchy, watches and execution history"
	},
	{
		id: "system",
		label: "System",
		icon: Cpu,
		hint: "Advanced internals: memory allocations, objects, stack frames and bus traffic"
	}
];
/** Switches the visualisation language of the whole workspace. */
function ModeSwitcher() {
	const { mode, setMode } = useExecution();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		"aria-label": "Execution mode",
		className: "flex items-center gap-0.5 rounded-lg border border-border/60 bg-surface/50 p-0.5",
		children: MODES.map((m) => {
			const active = m.id === mode;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
				content: m.hint,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "tab",
					"aria-selected": active,
					"data-cursor": "button",
					onClick: () => setMode(m.id),
					className: cn("relative flex items-center gap-1.5 rounded-md px-2 py-1.5 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors duration-300", active ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
					children: [
						active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "mode-pill",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 32
							},
							className: "absolute inset-0 -z-10 rounded-md border border-primary/40 bg-primary/12"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:inline",
							children: m.label
						})
					]
				})
			}, m.id);
		})
	});
}
function WorkspaceToolbar({ onToggleInspector, inspectorCollapsed, onToggleExplorer, explorerCollapsed }) {
	const { getBackLabel, navigateBack } = useNavigationHistory();
	const { language, setLanguage, setProgram, trace, toggle, visualizeState, presentationMode, setPresentationMode } = useExecution();
	const { setSettingsModalOpen, setShortcutsModalOpen } = useSettings();
	const [shortcuts, setShortcuts] = (0, import_react.useState)(false);
	const getVisualizeButtonContent = () => {
		switch (visualizeState) {
			case "preparing": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Preparing..." })] });
			case "visualizing": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visualizing" })] });
			case "paused": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resume" })] });
			case "completed": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Completed" })] });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Run Visualization" })] });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Toolbar, {
		className: "border-b border-border/70 bg-surface/80 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolbarGroup, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					content: "Toggle examples explorer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
						size: "icon",
						variant: "ghost",
						"aria-label": "Toggle explorer",
						onClick: onToggleExplorer,
						className: !explorerCollapsed ? "text-accent bg-accent/10" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, { className: "h-4 w-4" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => navigateBack("/"),
					"data-cursor": "button",
					"aria-label": "Exit workspace",
					className: "group flex items-center gap-1 rounded-lg px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground transition-all hover:bg-surface-h hover:text-foreground active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: getBackLabel() })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[12px] font-semibold tracking-[0.32em] text-foreground",
					children: "TALTRIX"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolbarGroup, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
					label: "Language",
					value: language,
					onChange: (v) => setLanguage(v),
					options: PROGRAM_LANGUAGES.map((l) => ({
						value: l.id,
						label: l.label
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
					label: "Example",
					value: trace.id,
					onChange: (v) => setProgram(v),
					options: PROGRAMS.map((p) => ({
						value: p.id,
						label: p.title,
						hint: p.category
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden font-mono text-[11px] text-muted-foreground sm:inline",
					children: trace.fileName
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToolbarGroup, {
				className: "ml-auto flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeSwitcher, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
						size: "sm",
						variant: visualizeState === "visualizing" ? "secondary" : "primary",
						onClick: toggle,
						className: "min-w-[110px] shadow-lg shadow-cyan-500/10 transition-all hover:scale-[1.02]",
						children: getVisualizeButtonContent()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolbarDivider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: presentationMode ? "Exit Presentation Mode" : "Presentation Mode (Classroom)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "icon",
							variant: "ghost",
							"aria-label": "Toggle presentation mode",
							onClick: () => setPresentationMode((prev) => !prev),
							className: presentationMode ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: "Keyboard Shortcuts",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "icon",
							variant: "ghost",
							"aria-label": "Shortcuts",
							onClick: () => setShortcutsModalOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: inspectorCollapsed ? "Show Inspector" : "Hide Inspector",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "icon",
							variant: "ghost",
							"aria-label": "Toggle inspector",
							onClick: onToggleInspector,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRight, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: "Settings",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "icon",
							variant: "ghost",
							"aria-label": "Settings",
							onClick: () => setSettingsModalOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "h-4 w-4" })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
				open: shortcuts,
				onOpenChange: setShortcuts,
				title: "TALTRIX Keyboard Shortcuts",
				description: "Navigate execution quickly with standard controls.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 font-mono text-[12px] text-muted-foreground",
					children: [
						["Space", "Toggle Visualize / Pause"],
						["→ / ←", "Step Forward / Backward"],
						["R", "Restart execution"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between rounded-lg border border-border/60 px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-foreground",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v })]
					}, k))
				})
			})
		]
	});
}
/** Category-driven examples drawer panel. */
function ExplorerPanel() {
	const { programId, setProgram } = useExecution();
	const groups = programsByCategory();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col bg-surface/50 border-r border-border/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-10 items-center justify-between border-b border-border/60 px-3.5 font-mono text-[11px] font-semibold text-foreground uppercase tracking-wider",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "h-4 w-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Examples Explorer" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-auto p-2.5 space-y-4",
			children: groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 px-2 py-1 font-mono text-[10px] font-bold tracking-[0.16em] text-cyan-400 uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-3 w-3 text-cyan-400/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: group.category })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-0.5",
					children: group.programs.map((p) => {
						const active = p.id === programId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-cursor": "button",
							onClick: () => setProgram(p.id),
							"aria-current": active,
							className: cn("relative flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left font-mono text-[11px] transition-all duration-200", active ? "text-cyan-300 font-semibold" : "text-muted-foreground hover:bg-surface/80 hover:text-foreground"),
							children: [
								active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "explorer-active",
									transition: {
										type: "spring",
										stiffness: 380,
										damping: 34
									},
									className: "absolute inset-0 -z-10 rounded-lg border border-cyan-500/40 bg-cyan-500/15 shadow-sm"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCodeCorner, { className: cn("h-3.5 w-3.5 shrink-0", active ? "text-cyan-400" : "text-muted-foreground/60") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: p.title
								})
							]
						}) }, p.id);
					})
				})]
			}, group.category))
		})]
	});
}
function EditorPane() {
	const { trace, step, language } = useExecution();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Window, {
		title: trace.fileName,
		icon: CodeXml,
		className: "h-full",
		bodyClassName: "p-0",
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixBadge, {
			tone: "primary",
			children: trace.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				opacity: .4,
				scale: .94
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			transition: {
				duration: .3,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixBadge, {
				tone: "accent",
				children: ["line ", step.line]
			})
		}, step.line)] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeEditor, {
			highlightLine: step.line,
			language: trace.monacoLanguage,
			value: trace.code
		}, language)
	});
}
var spring$1 = {
	type: "spring",
	stiffness: 320,
	damping: 30
};
var COLUMNS = [
	"Variable",
	"Type",
	"Value",
	"Changed"
];
/** Animated variable table — modified bindings fly in and stay highlighted. */
var VariablesTable = (0, import_react.memo)(function VariablesTable({ variables, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-xl border border-border/60 bg-background/40", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-[1.2fr_0.8fr_1.4fr_0.6fr] gap-2 border-b border-border/60 px-3 py-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground/70 uppercase",
				children: COLUMNS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: c === "Changed" ? "text-right" : void 0,
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					initial: false,
					mode: "popLayout",
					children: variables.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						layout: true,
						initial: {
							opacity: 0,
							x: 26,
							filter: "blur(4px)"
						},
						animate: {
							opacity: 1,
							x: 0,
							filter: "blur(0px)",
							backgroundColor: v.changed ? "rgba(34, 211, 238, 0.12)" : "transparent"
						},
						exit: {
							opacity: 0,
							x: -20,
							filter: "blur(4px)"
						},
						transition: spring$1,
						className: "grid grid-cols-[1.2fr_0.8fr_1.4fr_0.6fr] items-center gap-2 px-3 py-2 font-mono text-[11px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: v.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 text-[9px] text-muted-foreground/70",
									children: [
										"(",
										v.scope,
										")"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-purple-300/80",
								children: v.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate flex items-center gap-1 font-semibold",
								children: v.changed && v.previousValue ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground line-through text-[10px]",
										children: v.previousValue
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-cyan-400",
										children: "→"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-cyan-300",
										children: v.value
									})
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: v.changed ? "text-cyan-300" : "text-foreground/90",
									children: v.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right",
								children: v.changed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: {
										scale: .6,
										opacity: 0
									},
									animate: {
										scale: 1,
										opacity: 1
									},
									className: "inline-flex items-center justify-center rounded bg-cyan-500/20 px-1.5 py-0.5 text-[9px] text-cyan-300 font-bold",
									children: "UPDATED"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground/40",
									children: "—"
								})
							})
						]
					}, `${v.scope}:${v.name}`))
				})
			}),
			variables.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-3 py-4 font-mono text-[11px] text-muted-foreground/60",
				children: "No variables currently active in scope."
			}) : null
		]
	});
});
var spring = {
	type: "spring",
	stiffness: 340,
	damping: 30
};
/** Animated call stack — frames push in from the bottom and pop out on unwind. */
var StackFrames = (0, import_react.memo)(function StackFrames({ frames, className, onSelect, onHover, highlighted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col-reverse gap-1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				mode: "popLayout",
				children: frames.map((f, i) => {
					const active = i === frames.length - 1;
					const localsStr = f.locals ? Object.entries(f.locals).map(([k, v]) => `${k}=${v}`).join(", ") : "";
					const signature = `${f.name}(${localsStr})`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						layout: true,
						onClick: () => onSelect?.(f.name),
						onMouseEnter: () => onHover?.(f.name),
						onMouseLeave: () => onHover?.(null),
						"data-cursor": onSelect ? "button" : void 0,
						initial: {
							opacity: 0,
							y: 18,
							scaleY: .65
						},
						animate: {
							opacity: 1,
							y: 0,
							scaleY: 1
						},
						exit: {
							opacity: 0,
							y: 12,
							scaleY: .65
						},
						transition: spring,
						style: { marginLeft: i * 6 },
						className: cn("flex items-center justify-between rounded-lg border px-3 py-2 font-mono text-[11px] transition-colors duration-300", active ? "border-cyan-500/70 bg-cyan-500/15 text-foreground shadow-[0_0_20px_-8px_rgba(34,211,238,0.5)] font-semibold" : "border-border/60 bg-background/40 text-muted-foreground/80", highlighted === f.name && "border-purple-500/70 text-foreground bg-purple-500/10", onSelect && "cursor-pointer"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground/50 text-[10px]",
									children: ["#", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: active ? "text-cyan-300" : "text-foreground",
									children: signature
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 text-[9px] text-muted-foreground/60",
									children: [":line ", f.line]
								})
							]
						}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-cyan-500/20 px-1.5 py-0.5 text-[9px] font-bold tracking-[0.16em] text-cyan-300 uppercase",
							children: "ACTIVE"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground/40",
							children: "↓"
						})]
					}, `${f.name}-${i}`);
				})
			})
		}), frames.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-3 py-4 font-mono text-[11px] text-muted-foreground/60",
			children: "Execution stack empty."
		}) : null]
	});
});
/**
* Animated heap view. Objects keep a stable slot (sorted by id) so they never
* jump between steps; reference arrows are measured from the live DOM.
*/
function MemoryGraph({ objects, className, onSelect, onHover, highlighted }) {
	const containerRef = (0, import_react.useRef)(null);
	const nodeRefs = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const [edges, setEdges] = (0, import_react.useState)([]);
	const sorted = [...objects].sort((a, b) => a.id.localeCompare(b.id));
	const measure = (0, import_react.useCallback)(() => {
		const host = containerRef.current;
		if (!host) return;
		const base = host.getBoundingClientRect();
		const next = [];
		for (const o of objects) for (const ref of o.refs ?? []) {
			const from = nodeRefs.current.get(o.id);
			const to = nodeRefs.current.get(ref);
			if (!from || !to) continue;
			const a = from.getBoundingClientRect();
			const b = to.getBoundingClientRect();
			next.push({
				key: `${o.id}->${ref}`,
				x1: a.left - base.left + a.width / 2,
				y1: a.top - base.top,
				x2: b.left - base.left + b.width / 2,
				y2: b.top - base.top + b.height
			});
		}
		setEdges(next);
	}, [objects]);
	(0, import_react.useLayoutEffect)(() => {
		const id = requestAnimationFrame(measure);
		return () => cancelAnimationFrame(id);
	}, [measure]);
	(0, import_react.useEffect)(() => {
		if (typeof ResizeObserver === "undefined" || !containerRef.current) return;
		const ro = new ResizeObserver(() => measure());
		ro.observe(containerRef.current);
		return () => ro.disconnect();
	}, [measure]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "pointer-events-none absolute inset-0 h-full w-full",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
				id: "taltrix-arrow",
				markerWidth: "6",
				markerHeight: "6",
				refX: "5",
				refY: "3",
				orient: "auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0,0 L6,3 L0,6 Z",
					fill: "var(--color-accent)",
					opacity: "0.8"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: edges.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				initial: {
					pathLength: 0,
					opacity: 0
				},
				animate: {
					pathLength: 1,
					opacity: .55
				},
				exit: { opacity: 0 },
				transition: {
					duration: .5,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				d: `M ${e.x1} ${e.y1} C ${e.x1} ${e.y1 - 26}, ${e.x2} ${e.y2 + 26}, ${e.x2} ${e.y2}`,
				fill: "none",
				stroke: "var(--color-accent)",
				strokeWidth: 1,
				markerEnd: "url(#taltrix-arrow)"
			}, e.key)) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative grid grid-cols-2 gap-2 xl:grid-cols-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				mode: "popLayout",
				children: sorted.map((o) => {
					const related = highlighted === o.id || (highlighted ? (o.refs ?? []).includes(highlighted) : false);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						layout: true,
						ref: (el) => {
							if (el) nodeRefs.current.set(o.id, el);
							else nodeRefs.current.delete(o.id);
						},
						onClick: () => onSelect?.(o.id),
						onMouseEnter: () => onHover?.(o.id),
						onMouseLeave: () => onHover?.(null),
						"data-cursor": onSelect ? "button" : void 0,
						initial: {
							opacity: 0,
							scale: .85,
							y: 16
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							scale: .85
						},
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 30
						},
						className: cn("rounded-xl border border-border/60 bg-background/60 p-2.5 font-mono text-[10px] transition-colors duration-300 hover:border-accent/50", related && "border-accent/70", onSelect && "cursor-pointer"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-muted-foreground/70",
								children: o.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 truncate text-accent",
								children: o.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 truncate text-foreground/85",
								children: o.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 truncate text-[9px] text-muted-foreground/60",
								children: o.label
							})
						]
					}, o.id);
				})
			})
		})]
	});
}
/**
* Minimal CPU visualisation. Each step pushes one instruction through the
* core: it enters from the left, the die pulses, and it exits to the right.
*/
function CpuCard() {
	const { step, index, state, metrics } = useExecution();
	const active = state === "running";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl border border-border/60 bg-background/50 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-3.5 w-3.5" }), " cpu"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground/60",
					children: ["ir · line ", step.line]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-3 flex h-24 items-center justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								x: -110,
								opacity: 0
							},
							animate: {
								x: [
									-110,
									0,
									0,
									110
								],
								opacity: [
									0,
									1,
									1,
									0
								]
							},
							transition: {
								duration: 1.1,
								times: [
									0,
									.35,
									.6,
									1
								],
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "absolute top-1/2 -translate-y-1/2 rounded-md border border-accent/50 bg-accent/10 px-2 py-1 font-mono text-[9px] text-accent",
							children: step.label
						}, index)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: {
							boxShadow: active ? "0 0 34px -6px var(--color-primary)" : "0 0 0px 0px color-mix(in oklab, var(--color-primary) 0%, transparent)",
							borderColor: active ? "color-mix(in oklab, var(--color-primary) 70%, transparent)" : "color-mix(in oklab, var(--color-border) 80%, transparent)"
						},
						transition: {
							duration: .45,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: "relative grid h-16 w-16 place-items-center rounded-xl border bg-surface/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								scale: .86,
								opacity: .55
							},
							animate: {
								scale: 1,
								opacity: 1
							},
							transition: {
								type: "spring",
								stiffness: 320,
								damping: 20
							},
							className: "grid grid-cols-3 gap-1",
							"aria-hidden": true,
							children: Array.from({ length: 9 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								animate: { opacity: [
									.25,
									1,
									.25
								] },
								transition: {
									duration: 1.2,
									delay: i * .05,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "h-1.5 w-1.5 rounded-[3px] bg-primary/80"
							}, i))
						}, `die-${index}`)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-3 gap-2 font-mono text-[9px]",
				children: [
					["fn", step.currentFunction ?? "<module>"],
					["cycles", String(index + 1)],
					["alloc", String(metrics.allocations)]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border/50 px-2 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground/60 uppercase",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 truncate text-accent",
						children: v
					})]
				}, k))
			})
		]
	});
}
/** Post-run analytics dashboard, shown once playback reaches the last step. */
function ExecutionSummary() {
	const { summary, restart, program } = useExecution();
	const failed = summary.finalStatus !== "done";
	const cards = [
		["Execution time", `${summary.totalTimeMs.toFixed(2)} ms`],
		["Peak memory", `${summary.peakBytes} B`],
		["Functions called", String(summary.functionsCalled)],
		["Objects created", String(summary.objectsCreated)],
		["Lines executed", String(summary.linesExecuted)],
		["Max stack depth", String(summary.maxDepth)]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .4,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "rounded-xl border border-border/60 bg-background/50 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase",
				children: [failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-accent" }), "run summary"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-mono text-[10px] text-muted-foreground/70",
				children: [
					program.fileName,
					" finished with status ",
					summary.finalStatus,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-3 grid grid-cols-2 gap-1.5",
				children: cards.map(([k, v], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						delay: i * .05,
						type: "spring",
						stiffness: 300,
						damping: 26
					},
					className: "rounded-lg border border-border/50 px-2.5 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[8px] tracking-[0.16em] text-muted-foreground/60 uppercase",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 font-mono text-[12px] text-accent",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"data-cursor": "button",
				onClick: restart,
				className: "mt-3 w-full rounded-lg border border-border/60 py-1.5 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:border-accent/50 hover:text-foreground",
				children: "replay execution"
			})
		]
	});
}
var STATES = {
	"compile-error": {
		icon: OctagonX,
		title: "Compile error",
		detail: "The program never reached the runtime — the parser rejected the source."
	},
	"runtime-error": {
		icon: TriangleAlert,
		title: "Runtime error",
		detail: "Execution stopped mid-frame. The traceback is printed in the console."
	},
	"infinite-loop": {
		icon: Infinity$1,
		title: "Infinite loop detected",
		detail: "The loop guard never changed, so the scheduler halted the run."
	},
	timeout: {
		icon: TimerOff,
		title: "Execution timeout",
		detail: "The run exceeded its time budget and was cancelled."
	},
	"memory-overflow": {
		icon: MemoryStick,
		title: "Memory overflow",
		detail: "Allocation exceeded the sandbox memory ceiling."
	}
};
/** Stylised failure banner driven by the trace's terminal status. */
function ExecutionStateBanner({ status }) {
	const state = STATES[status];
	if (!state) return null;
	const Icon = state.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .36,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "relative overflow-hidden rounded-xl border border-destructive/50 bg-destructive/10 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				"aria-hidden": true,
				animate: { opacity: [
					.25,
					.6,
					.25
				] },
				transition: {
					duration: 2.6,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "absolute inset-x-0 top-0 h-px bg-destructive"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 font-mono text-[11px] text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-destructive" }),
					" ",
					state.title
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground",
				children: state.detail
			})
		]
	});
}
/** Illustrated placeholder used wherever a panel has nothing to show yet. */
function EmptyState({ icon: Icon, title, message }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border/60 bg-background/30 px-4 py-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				animate: {
					y: [
						0,
						-4,
						0
					],
					opacity: [
						.7,
						1,
						.7
					]
				},
				transition: {
					duration: 3.4,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "relative grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-surface/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-accent/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -inset-1 -z-10 rounded-2xl bg-primary/10 blur-md",
					"aria-hidden": true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-[26ch] font-mono text-[10px] leading-relaxed text-muted-foreground/70",
				children: message
			})
		]
	});
}
var ExecutionStoryService = class {
	/**
	* Generates a beginner-friendly, educational narrative for the current step.
	*/
	static generateStory(step, index, totalSteps, prevStep, nextStep, mode = "beginner") {
		const changedVariables = [];
		if (step.variables) {
			const prevMap = /* @__PURE__ */ new Map();
			if (prevStep?.variables) prevStep.variables.forEach((v) => prevMap.set(v.name, String(v.value)));
			step.variables.forEach((v) => {
				const valStr = String(v.value);
				const oldVal = prevMap.get(v.name);
				if (oldVal === void 0) changedVariables.push({
					name: v.name,
					oldVal: "undefined",
					newVal: valStr
				});
				else if (oldVal !== valStr) changedVariables.push({
					name: v.name,
					oldVal,
					newVal: valStr
				});
			});
		}
		let category = "assignment";
		let title = "Code Execution Step";
		let story = "";
		let why = "";
		const summary = step.explanation?.summary || "";
		const codeLine = step.line ? `Line ${step.line}` : "";
		if (index === 0) {
			category = "start";
			title = "Program Execution Started";
			story = mode === "beginner" ? "The computer gets ready and starts reading your program from the very top." : mode === "professor" ? "The execution runtime initializes stack frame memory and begins instruction evaluation." : "Execution context created. Memory addresses are ready to track variable declarations.";
			why = "Every program begins by setting up memory space for functions and variables.";
		} else if (index === totalSteps - 1) {
			category = "end";
			title = "Execution Completed";
			story = mode === "beginner" ? "Hooray! The program finished running all commands successfully." : mode === "professor" ? "Instruction counter reached program termination point. Memory allocated to stack frames has been reclaimed." : "The program reached the end of execution and returned 0 errors.";
			why = "There are no remaining statements left in the call stack to execute.";
		} else if (step.stack && prevStep?.stack && step.stack.length > prevStep.stack.length) {
			const topFrame = step.stack[step.stack.length - 1];
			if (step.stack.some((f, idx) => idx < step.stack.length - 1 && f.name === topFrame.name)) {
				category = "recursion";
				title = `Recursive Call: ${topFrame.name}()`;
				const argStr = step.variables.map((v) => `${v.name} = ${v.value}`).join(", ");
				story = mode === "beginner" ? `The function ${topFrame.name}() calls itself with ${argStr || "new values"}. Before it can compute the final result, it must wait for this smaller step to finish first!` : mode === "professor" ? `Recursive invocation detected on ${topFrame.name}(). A new activation record is pushed onto the call stack.` : `Function ${topFrame.name}() entered a recursive sub-call with parameters (${argStr}).`;
				why = "Recursion breaks complex problems down into identical smaller sub-problems.";
			} else {
				category = "function_call";
				title = `Function Called: ${topFrame.name}()`;
				story = mode === "beginner" ? `The program pauses the current code and jumps into the ${topFrame.name}() function to run its instructions.` : mode === "professor" ? `Control transferred to function sub-routine ${topFrame.name}(). Call stack frame initialized at address frame #${step.stack.length}.` : `Entered function ${topFrame.name}(). A new call stack frame has been opened.`;
				why = "Functions encapsulate reusable logic and receive arguments to compute specific outputs.";
			}
		} else if (step.stack && prevStep?.stack && step.stack.length < prevStep.stack.length) {
			category = "return";
			const returnedFrame = prevStep.stack[prevStep.stack.length - 1];
			title = `Function Returned: ${returnedFrame.name}()`;
			story = mode === "beginner" ? `The function ${returnedFrame.name}() finished its work and sent its result back to the code that called it.` : mode === "professor" ? `Sub-routine ${returnedFrame.name}() executed return statement. Stack frame popped and control restored to caller.` : `Function ${returnedFrame.name}() completed execution and returned control to caller.`;
			why = "When a function finishes, its temporary memory frame is closed and variables inside it are cleaned up.";
		} else if (changedVariables.length > 0) {
			category = "assignment";
			const mainVar = changedVariables[0];
			title = `Variable ${mainVar.name} Updated`;
			story = mode === "beginner" ? `The variable ${mainVar.name} was changed from ${mainVar.oldVal} to ${mainVar.newVal}.` : mode === "professor" ? `Assignment operation mutated memory address of identifier '${mainVar.name}' (${mainVar.oldVal} → ${mainVar.newVal}).` : `Updated ${mainVar.name} value to ${mainVar.newVal} in local stack memory.`;
			why = "Variables store data values that your program can update as calculations proceed.";
		} else if (summary.toLowerCase().includes("if") || summary.toLowerCase().includes("condition")) {
			category = "condition";
			title = "Condition Evaluated";
			story = mode === "beginner" ? "The computer asks a True or False question here to decide which branch of code to follow next." : mode === "professor" ? "Conditional branch expression evaluated. Control flow directed according to boolean outcome." : "Decision branch evaluated. The program selects the matching branch path.";
			why = "Conditionals allow programs to make dynamic decisions based on current variable values.";
		} else if (summary.toLowerCase().includes("loop") || summary.toLowerCase().includes("for") || summary.toLowerCase().includes("while")) {
			category = "loop";
			title = "Loop Iteration";
			story = mode === "beginner" ? "The program is looping! It repeats these instructions for each item in the collection." : mode === "professor" ? "Loop counter incremented. Iteration condition remains valid for next cycle." : "Loop iteration executed. Control flow repeats for the next element.";
			why = "Loops prevent repeating code manually by automating iterations over data.";
		} else if (summary.toLowerCase().includes("print") || summary.toLowerCase().includes("output")) {
			category = "print";
			title = "Output Printed to Terminal";
			story = mode === "beginner" ? "The program outputs a message to the console screen so you can read the result." : mode === "professor" ? "Standard I/O output stream written to stdout terminal buffer." : "Printed result to terminal console.";
			why = "Printing allows students and developers to inspect program outputs visually.";
		} else {
			category = "assignment";
			title = `Executing ${codeLine}`;
			story = mode === "beginner" ? summary || `The computer evaluates line ${step.line} and moves to the next instruction.` : mode === "professor" ? `Statement on line ${step.line} processed by interpreter.` : summary || `Executed statement on line ${step.line}.`;
			why = "Programs execute line-by-line in sequential order unless a jump or loop occurs.";
		}
		let nextStepPreview = "End of execution reached.";
		if (nextStep) {
			if (nextStep.stack && step.stack && nextStep.stack.length > step.stack.length) nextStepPreview = `The program will now enter function ${nextStep.stack[nextStep.stack.length - 1].name}().`;
			else if (nextStep.line) nextStepPreview = `Next, the computer will move to execute line ${nextStep.line}.`;
		}
		return {
			title,
			story,
			why,
			changedVariables,
			nextStepPreview,
			stepCategory: category
		};
	}
};
function useStorySpeech() {
	const [isSpeaking, setIsSpeaking] = (0, import_react.useState)(false);
	const [supported, setSupported] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "speechSynthesis" in window) setSupported(true);
	}, []);
	const stop = (0, import_react.useCallback)(() => {
		if (typeof window !== "undefined" && "speechSynthesis" in window) {
			window.speechSynthesis.cancel();
			setIsSpeaking(false);
		}
	}, []);
	return {
		speak: (0, import_react.useCallback)((text) => {
			if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
			window.speechSynthesis.cancel();
			if (!text || text.trim() === "") return;
			const utterance = new SpeechSynthesisUtterance(text);
			utterance.rate = .95;
			utterance.pitch = 1;
			utterance.onstart = () => setIsSpeaking(true);
			utterance.onend = () => setIsSpeaking(false);
			utterance.onerror = () => setIsSpeaking(false);
			window.speechSynthesis.speak(utterance);
		}, []),
		stop,
		isSpeaking,
		supported
	};
}
var STORY_MODES = [
	{
		id: "beginner",
		label: "Beginner",
		desc: "Simple English, friendly teacher style for new coders.",
		icon: GraduationCap,
		accent: "text-cyan-400"
	},
	{
		id: "intermediate",
		label: "Intermediate",
		desc: "Balanced explanations with step details & variable scope.",
		icon: Puzzle,
		accent: "text-purple-400"
	},
	{
		id: "advanced",
		label: "Advanced",
		desc: "Detailed execution analysis, memory addresses & control flow.",
		icon: Zap,
		accent: "text-amber-400"
	},
	{
		id: "professor",
		label: "Professor",
		desc: "Formal computer science terminology & stack frame analysis.",
		icon: School,
		accent: "text-emerald-400"
	}
];
function StoryModeDropdown({ value, onChange }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const currentMode = STORY_MODES.find((m) => m.id === value) || STORY_MODES[0];
	const CurrentIcon = currentMode.icon;
	const handleSelect = (modeId) => {
		blip("hover");
		onChange(modeId);
		setIsOpen(false);
	};
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (e) => {
			if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
		};
		const handleKeyDown = (e) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "relative inline-block font-sans text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => {
				blip("hover");
				setIsOpen((prev) => !prev);
			},
			"aria-expanded": isOpen,
			"aria-haspopup": "listbox",
			"aria-label": "Select Learning Level Mode",
			className: "flex items-center gap-2 rounded-xl border border-border/80 bg-surface/90 px-3 py-1.5 font-semibold text-foreground shadow-sm transition-all hover:bg-surface-h hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrentIcon, { className: `h-4 w-4 ${currentMode.accent}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentMode.label }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				duration: .18,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			role: "listbox",
			"aria-label": "Learning Modes",
			className: "absolute right-0 top-full mt-2 z-[250] w-72 sm:w-80 rounded-2xl border border-border/80 bg-surface/95 p-2 shadow-2xl backdrop-blur-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-2 border-b border-border/50 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
				children: "Select Learning Level"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 space-y-1",
				children: STORY_MODES.map((mode) => {
					const Icon = mode.icon;
					const selected = mode.id === value;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "option",
						"aria-selected": selected,
						onClick: () => handleSelect(mode.id),
						className: `group flex w-full items-start justify-between rounded-xl p-2.5 text-left transition-all ${selected ? "bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 shadow-sm" : "text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border p-1 transition-all ${selected ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300" : "bg-background/60 border-border/60 text-muted-foreground group-hover:border-cyan-500/30 group-hover:text-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-sans text-xs font-bold text-foreground group-hover:text-cyan-300 transition-colors",
									children: mode.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-sans text-[11px] leading-relaxed text-muted-foreground/80 line-clamp-2",
									children: mode.desc
								})]
							})]
						}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-cyan-400 shrink-0 ml-2 mt-1" })]
					}, mode.id);
				})
			})]
		}) })]
	});
}
var STORAGE_KEY$1 = "taltrix_execution_story_mode";
function ExecutionStoryPanel() {
	const { step, index, program, select, setHover } = useExecution();
	const { speak, stop, isSpeaking, supported } = useStorySpeech();
	const [explanationMode, setExplanationMode] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem(STORAGE_KEY$1);
			if (saved && [
				"beginner",
				"intermediate",
				"advanced",
				"professor"
			].includes(saved)) return saved;
		}
		return "beginner";
	});
	const handleModeChange = (newMode) => {
		setExplanationMode(newMode);
		if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY$1, newMode);
	};
	const [showHistory, setShowHistory] = (0, import_react.useState)(false);
	const totalSteps = program.steps.length;
	const prevStep = index > 0 ? program.steps[index - 1] : void 0;
	const nextStep = index < totalSteps - 1 ? program.steps[index + 1] : void 0;
	const storyPayload = (0, import_react.useMemo)(() => ExecutionStoryService.generateStory(step, index, totalSteps, prevStep, nextStep, explanationMode), [
		step,
		index,
		totalSteps,
		prevStep,
		nextStep,
		explanationMode
	]);
	const handleToggleVoice = () => {
		blip("hover");
		if (isSpeaking) stop();
		else speak(`${storyPayload.title}. ${storyPayload.story}`);
	};
	const getCategoryIcon = (category) => {
		switch (category) {
			case "start": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 text-cyan-400" });
			case "end": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400" });
			case "recursion": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4 text-purple-400" });
			case "function_call": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4 text-purple-400" });
			case "return": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-cyan-400 rotate-180" });
			case "assignment": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Variable, { className: "h-4 w-4 text-cyan-400" });
			case "condition": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-amber-400" });
			case "loop": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4 text-emerald-400" });
			case "print": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-4 w-4 text-cyan-400" });
			case "error": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-rose-400" });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-cyan-400" });
		}
	};
	if (totalSteps === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col items-center justify-center p-6 text-center space-y-3 font-sans text-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-sm font-bold text-foreground",
				children: "Execution Story"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-xs leading-relaxed max-w-xs",
				children: "Run your program to watch the execution story unfold step by step."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full space-y-4 font-sans text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border/60 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-6 w-6 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-3.5 w-3.5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xs font-bold text-foreground",
					children: "Execution Story"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryModeDropdown, {
						value: explanationMode,
						onChange: handleModeChange
					}),
					supported && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: handleToggleVoice,
						title: isSpeaking ? "Stop Reading" : "Read Story Aloud",
						className: `rounded-lg p-1.5 border transition-colors ${isSpeaking ? "border-cyan-500 bg-cyan-500/20 text-cyan-300 animate-pulse" : "border-border/70 bg-background/40 text-muted-foreground hover:text-foreground"}`,
						children: isSpeaking ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3.5 w-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							blip("hover");
							setShowHistory(!showHistory);
						},
						title: showHistory ? "Hide Story History" : "Show Execution History",
						className: `rounded-lg p-1.5 border transition-colors ${showHistory ? "border-purple-500 bg-purple-500/20 text-purple-300" : "border-border/70 bg-background/40 text-muted-foreground hover:text-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "h-3.5 w-3.5" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: showHistory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 6
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -6
				},
				transition: { duration: .18 },
				className: "space-y-3 flex-1 overflow-y-auto pr-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/50 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] font-bold text-purple-400 uppercase tracking-wider",
						children: "Execution Story History"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-[10px] text-muted-foreground",
						children: [
							"Step ",
							index + 1,
							" of ",
							totalSteps
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: program.steps.map((st, idx) => {
						const isCurrent = idx === index;
						const isPast = idx < index;
						const histStory = ExecutionStoryService.generateStory(st, idx, totalSteps, idx > 0 ? program.steps[idx - 1] : void 0, idx < totalSteps - 1 ? program.steps[idx + 1] : void 0, explanationMode);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								blip("hover");
								select({
									kind: "line",
									line: st.line
								});
							},
							className: `flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all ${isCurrent ? "border-cyan-500/50 bg-cyan-500/10 text-foreground font-semibold shadow-md" : isPast ? "border-border/50 bg-surface/40 opacity-75 hover:opacity-100 hover:border-cyan-500/30" : "border-border/30 bg-background/20 opacity-40 hover:opacity-75"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-background/60 text-cyan-400 font-mono text-[10px] font-bold shrink-0",
								children: idx + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold text-foreground truncate",
										children: histStory.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[10px] text-cyan-400 shrink-0",
										children: ["Line ", st.line]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-sans text-[11px] text-muted-foreground line-clamp-1",
									children: histStory.story
								})]
							})]
						}, st.id || idx);
					})
				})]
			}, "history_view") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 8,
					scale: .98
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				exit: {
					opacity: 0,
					y: -8,
					scale: .98
				},
				transition: {
					duration: .2,
					ease: "easeOut"
				},
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-surface/90 to-purple-950/20 p-4 space-y-2 shadow-xl backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative grid h-7 w-7 place-items-center rounded-lg bg-cyan-500/10 border border-cyan-500/30",
									children: [getCategoryIcon(storyPayload.stepCategory), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-cyan-400 animate-ping" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[11px] font-bold text-cyan-400 uppercase tracking-wider",
									children: [
										"Step ",
										index + 1,
										" of ",
										totalSteps
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-md bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300 border border-cyan-500/20",
								children: ["Line ", step.line]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-bold text-foreground pt-1",
							children: storyPayload.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/80 bg-surface/80 p-4 space-y-3 shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " What Happened?"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-foreground leading-relaxed",
							children: storyPayload.story
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 border-t border-border/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[10px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3 w-3" }), " Why Did It Happen?"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground leading-relaxed",
								children: storyPayload.why
							})]
						})]
					}),
					storyPayload.changedVariables.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Variable, { className: "h-3 w-3" }), " Variable Updates on This Step"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1.5 pt-1 font-mono text-xs",
							children: storyPayload.changedVariables.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg bg-background/60 px-3 py-1.5 border border-cyan-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: v.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-[11px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: v.oldVal
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-cyan-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-cyan-300",
											children: v.newVal
										})
									]
								})]
							}, v.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/70 bg-background/40 p-3 flex items-center justify-between text-xs font-sans",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] font-bold text-cyan-400 uppercase",
								children: "Next"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground text-[11px]",
								children: storyPayload.nextStepPreview
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-cyan-400 shrink-0" })]
					})
				]
			}, `story_${index}_${explanationMode}`)
		})]
	});
}
function WhatsHappeningPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionStoryPanel, {});
}
function ExecutionInsights() {
	const { step, index, total, program, state, summary } = useExecution();
	const currentMs = step.executionTimeMs ?? (index + 1) * .42;
	const totalMs = program.totalTimeMs || total * .42;
	const changedCount = step.variables.filter((v) => v.changed).length;
	const memKb = ((step.metrics?.stackBytes ?? 0) + (step.metrics?.heapBytes ?? 0)) / 1024;
	const currentFunc = step.currentFunction || "main()";
	const statusLabel = state === "running" ? "Running" : state === "paused" ? "Paused" : state === "done" ? "Completed" : "Idle";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-surface/40 p-3.5 space-y-3 font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border/60 pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-4 w-4" }), " Execution Insights"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-xs text-muted-foreground truncate max-w-[200px]",
				title: program.title,
				children: [
					program.title,
					" (",
					program.language,
					")"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 overflow-y-auto pr-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/30 via-surface/80 to-background p-4 shadow-lg backdrop-blur-xl transition-all hover:border-cyan-500/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[12px] font-semibold uppercase tracking-wider text-cyan-300",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: `h-4 w-4 ${state === "running" ? "text-cyan-400 animate-pulse" : state === "done" ? "text-emerald-400" : "text-amber-400"}` })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: .4,
										y: -4,
										scale: .96
									},
									animate: {
										opacity: 1,
										y: 0,
										scale: 1
									},
									exit: {
										opacity: .4,
										y: 4,
										scale: .96
									},
									transition: {
										duration: .2,
										ease: "easeOut"
									},
									className: `font-display text-[28px] sm:text-[30px] font-bold leading-none ${state === "running" ? "text-cyan-400" : state === "done" ? "text-emerald-400" : "text-foreground"}`,
									children: statusLabel
								}, statusLabel)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-sans text-[13px] text-muted-foreground/80",
							children: [
								"Step ",
								index + 1,
								" of ",
								total
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "col-span-1 sm:col-span-2 flex flex-col justify-between rounded-2xl border border-cyan-500/30 bg-surface/80 p-4 shadow-lg backdrop-blur-xl transition-all hover:border-cyan-500/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Current Function"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-blue-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-2 min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: .4,
										y: -4,
										scale: .96
									},
									animate: {
										opacity: 1,
										y: 0,
										scale: 1
									},
									exit: {
										opacity: .4,
										y: 4,
										scale: .96
									},
									transition: {
										duration: .2,
										ease: "easeOut"
									},
									className: "font-display text-[24px] sm:text-[28px] font-bold leading-tight text-foreground truncate",
									title: currentFunc,
									children: currentFunc
								}, currentFunc)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-sans text-[13px] text-muted-foreground/80 truncate",
							children: [summary.functionsCalled || 1, " total sub-routine calls"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-purple-500/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Elapsed Time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-purple-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: .4,
										y: -4,
										scale: .96
									},
									animate: {
										opacity: 1,
										y: 0,
										scale: 1
									},
									exit: {
										opacity: .4,
										y: 4,
										scale: .96
									},
									transition: {
										duration: .2,
										ease: "easeOut"
									},
									className: "font-display text-[26px] sm:text-[28px] font-bold leading-none text-foreground",
									children: [
										currentMs.toFixed(2),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-normal text-muted-foreground",
											children: "ms"
										})
									]
								}, currentMs.toFixed(2))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-sans text-[13px] text-muted-foreground/80",
							children: [
								"Total estimate: ~",
								totalMs.toFixed(2),
								" ms"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-amber-500/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Stack Depth"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4 text-amber-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: .4,
										y: -4,
										scale: .96
									},
									animate: {
										opacity: 1,
										y: 0,
										scale: 1
									},
									exit: {
										opacity: .4,
										y: 4,
										scale: .96
									},
									transition: {
										duration: .2,
										ease: "easeOut"
									},
									className: "font-display text-[26px] sm:text-[28px] font-bold leading-none text-amber-300",
									children: [
										step.stack.length,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-normal text-muted-foreground",
											children: "frames"
										})
									]
								}, step.stack.length)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-sans text-[13px] text-muted-foreground/80",
							children: ["Max depth: ", program.complexity.maxDepth]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-emerald-500/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Changed Variables"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Variable, { className: "h-4 w-4 text-emerald-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: .4,
										y: -4,
										scale: .96
									},
									animate: {
										opacity: 1,
										y: 0,
										scale: 1
									},
									exit: {
										opacity: .4,
										y: 4,
										scale: .96
									},
									transition: {
										duration: .2,
										ease: "easeOut"
									},
									className: "font-display text-[26px] sm:text-[28px] font-bold leading-none text-emerald-400",
									children: [
										changedCount,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-normal text-muted-foreground",
											children: "updated"
										})
									]
								}, changedCount)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-sans text-[13px] text-muted-foreground/80",
							children: [step.variables.length, " total active in scope"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/70 p-4 shadow-md backdrop-blur-md transition-all hover:border-cyan-500/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[12px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Memory Used"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "h-4 w-4 text-cyan-400" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: .4,
										y: -4,
										scale: .96
									},
									animate: {
										opacity: 1,
										y: 0,
										scale: 1
									},
									exit: {
										opacity: .4,
										y: 4,
										scale: .96
									},
									transition: {
										duration: .2,
										ease: "easeOut"
									},
									className: "font-display text-[26px] sm:text-[28px] font-bold leading-none text-cyan-300",
									children: [
										memKb > 0 ? memKb.toFixed(2) : "0.48",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-normal text-muted-foreground",
											children: "KB"
										})
									]
								}, memKb.toFixed(2))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-sans text-[13px] text-muted-foreground/80",
							children: [step.heap.length, " heap objects"]
						})
					]
				})
			]
		})]
	});
}
var INSPECTOR_OPTIONS = [
	{
		id: "explanation",
		label: "Execution Story",
		category: "AI Learning Engine",
		icon: Brain
	},
	{
		id: "variables",
		label: "Variables",
		category: "Memory & Scope",
		icon: Variable
	},
	{
		id: "stack",
		label: "Function Calls",
		category: "Call Stack",
		icon: Layers
	},
	{
		id: "memory",
		label: "Memory View",
		category: "Heap Graph",
		icon: Boxes
	},
	{
		id: "insights",
		label: "Program Status",
		category: "CPU & Transport",
		icon: Activity
	},
	{
		id: "insights_detail",
		label: "Execution Insights",
		category: "Metrics",
		icon: ChartColumn
	}
];
var STORAGE_KEY = "taltrix_selected_inspector";
function InspectorSidebar() {
	const { step, program, index, hover, setHover, select } = useExecution();
	const [selectedInspector, setSelectedInspector] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored && INSPECTOR_OPTIONS.some((o) => o.id === stored)) return stored;
		}
		return "variables";
	});
	const [dropdownOpen, setDropdownOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	const handleSelectInspector = (id) => {
		blip("hover");
		setSelectedInspector(id);
		setDropdownOpen(false);
		if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, id);
	};
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (e) => {
			if (containerRef.current && !containerRef.current.contains(e.target)) setDropdownOpen(false);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const currentOption = INSPECTOR_OPTIONS.find((o) => o.id === selectedInspector) || INSPECTOR_OPTIONS[0];
	const hoveredObject = hover?.kind === "object" ? hover.id : null;
	const hoveredFrame = hover?.kind === "frame" ? hover.name : null;
	const failure = step.status && step.status !== "running" && step.status !== "done" ? step.status : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col border-l border-border/70 bg-surface/50 font-mono text-[12px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: containerRef,
				className: "relative border-b border-border/70 bg-background/70 p-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-sans text-[11px] font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Inspector View"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							blip("hover");
							setDropdownOpen((prev) => !prev);
						},
						"aria-expanded": dropdownOpen,
						"aria-label": "Select Inspector",
						className: "flex items-center gap-2 rounded-xl border border-border/80 bg-surface/90 px-3 py-1.5 font-sans text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-surface-h hover:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(currentOption.icon, { className: "h-4 w-4 text-cyan-400 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: currentOption.label }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}` })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: dropdownOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 6,
						scale: .96
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						y: 6,
						scale: .96
					},
					transition: {
						duration: .15,
						ease: "easeOut"
					},
					className: "absolute left-2 right-2 top-full mt-1.5 z-[150] overflow-hidden rounded-2xl border border-border/80 bg-surface/95 p-1.5 shadow-2xl backdrop-blur-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: INSPECTOR_OPTIONS.map((option) => {
							const Icon = option.icon;
							const selected = option.id === selectedInspector;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleSelectInspector(option.id),
								className: `flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all ${selected ? "bg-cyan-500/15 font-semibold text-cyan-300 border border-cyan-500/30" : "text-muted-foreground hover:bg-surface-h/60 hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${selected ? "text-cyan-400" : "text-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-sans text-xs font-semibold",
										children: option.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] text-muted-foreground",
										children: option.category
									})] })]
								}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-cyan-400 shrink-0" })]
							}, option.id);
						})
					})
				}) })]
			}),
			failure ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border/60 p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionStateBanner, { status: failure })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-auto p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
					mode: "wait",
					children: [
						selectedInspector === "variables" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -8,
								scale: .98
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border/50 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-xs font-semibold text-foreground",
									children: "Active Variables"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-300",
									children: [step.variables.length, " active"]
								})]
							}), step.variables.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Variable,
								title: "No active variables",
								message: "Run your program to watch variables change in real time."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VariablesTable, { variables: step.variables })]
						}, "variables"),
						selectedInspector === "stack" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -8,
								scale: .98
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border/50 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-xs font-semibold text-foreground",
									children: "Function Calls"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-300",
									children: [step.stack.length, " calls active"]
								})]
							}), step.stack.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Layers,
								title: "No active function calls",
								message: "Run your program to see how functions are called and returned."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackFrames, {
								frames: step.stack,
								highlighted: hoveredFrame,
								onHover: (name) => setHover(name ? {
									kind: "frame",
									name
								} : null),
								onSelect: (name) => select({
									kind: "function",
									name
								})
							})]
						}, "stack"),
						selectedInspector === "memory" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -8,
								scale: .98
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border/50 pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-xs font-semibold text-foreground",
									children: "Memory View"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] text-indigo-300",
									children: [step.heap.length, " objects"]
								})]
							}), step.heap.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Boxes,
								title: "Memory is empty",
								message: "Run your program to see memory addresses and object structures."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryGraph, {
								objects: step.heap,
								highlighted: hoveredObject,
								onHover: (id) => setHover(id ? {
									kind: "object",
									id
								} : null),
								onSelect: (id) => select({
									kind: "object",
									id
								})
							})]
						}, "memory"),
						selectedInspector === "insights" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -8,
								scale: .98
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-border/50 pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-sans text-xs font-semibold text-foreground",
										children: "Program Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-300",
										children: [
											"Step ",
											index + 1,
											" of ",
											program.steps.length
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CpuCard, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionSummary, {})
							]
						}, "insights"),
						selectedInspector === "insights_detail" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -8,
								scale: .98
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "space-y-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionInsights, {})
						}, "insights_detail"),
						selectedInspector === "explanation" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .98
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: -8,
								scale: .98
							},
							transition: {
								duration: .2,
								ease: "easeOut"
							},
							className: "space-y-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsHappeningPanel, {})
						}, "explanation")
					]
				})
			})
		]
	});
}
function ExplainStepModal() {
	const { explainModalOpen, setExplainModalOpen, step, index, total, program } = useExecution();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open: explainModalOpen,
		onOpenChange: setExplainModalOpen,
		title: "TALTRIX AI Step Explanation",
		description: `Step ${index + 1} of ${total} in ${program.title}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 font-mono text-[12px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 p-3 text-purple-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5 shrink-0 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] leading-relaxed",
						children: "AI Assistant Insight (Mock Stream Ready): Analyzing step execution context and memory stack state."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border/60 bg-surface/50 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-[10px] uppercase text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-3 w-3 text-cyan-400" }),
								" Line ",
								step.line
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Function: ", step.currentFunction] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "rounded bg-background/80 p-2 font-mono text-[12px] text-cyan-300",
						children: step.executingCode || step.label
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 rounded-lg border border-border/60 bg-surface/30 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "flex items-center gap-1.5 font-sans text-xs font-semibold text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-3.5 w-3.5 text-amber-400" }), "Conceptual Breakdown"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[12px] leading-relaxed text-muted-foreground",
						children: step.deepExplanation || step.note
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 font-sans text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "flex items-center gap-1.5 font-semibold text-emerald-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Key Takeaway"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: "Understanding recursion base cases prevents stack overflow errors and guarantees algorithm termination."
					})]
				})
			]
		})
	});
}
function ExecutionCompleteModal() {
	const { state, index, total, program, summary, replay, restart } = useExecution();
	const [dismissed, setDismissed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (index < total - 1 && state !== "done") setDismissed(false);
	}, [
		index,
		total,
		state
	]);
	const isOpen = (state === "done" || index === total - 1) && !dismissed;
	if (!isOpen) return null;
	const handleClose = () => {
		setDismissed(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open: isOpen,
		onOpenChange: (open) => {
			if (!open) handleClose();
		},
		title: "EXECUTION COMPLETE",
		description: `Finished visualizing ${program.title}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 font-mono text-[12px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-6 w-6 text-emerald-400" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-bold text-foreground",
						children: "Visualization Succeeded"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-emerald-400/90",
						children: [
							"All ",
							total,
							" execution steps completed cleanly."
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2.5 font-mono text-[11px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-surface/40 p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-purple-400" }), " Execution Time"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 font-bold text-foreground",
								children: [program.totalTimeMs || (total * .42).toFixed(2), " ms"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-surface/40 p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-cyan-400" }), " Steps Executed"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 font-bold text-foreground",
								children: [
									total,
									" / ",
									total
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-surface/40 p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3 w-3 text-amber-400" }), " Max Stack Depth"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 font-bold text-foreground",
								children: [program.complexity.maxDepth, " frame(s)"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-surface/40 p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Variable, { className: "h-3 w-3 text-emerald-400" }), " Functions Called"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-bold text-foreground",
								children: summary.functionsCalled || 1
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2 border-t border-border/60 pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "sm",
							variant: "ghost",
							onClick: handleClose,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Close" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
							size: "sm",
							variant: "outline",
							onClick: restart,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Restart" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
							size: "sm",
							variant: "primary",
							onClick: replay,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-1.5 h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Replay Visualization" })]
						})
					]
				})
			]
		})
	});
}
var LOCAL_STORAGE_KEY = "taltrix_ftue_dismissed";
function FtueWalkthrough() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!localStorage.getItem(LOCAL_STORAGE_KEY)) setOpen(true);
	}, []);
	const handleDismiss = () => {
		localStorage.setItem(LOCAL_STORAGE_KEY, "true");
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		open,
		onOpenChange: setOpen,
		title: "Welcome to Code Playground",
		description: "Learn how programs execute step by step with interactive visual feedback.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 font-mono text-[12px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						icon: CodeXml,
						title: "Step 1: Choose an example",
						description: "Pick an algorithm or data structure example from the left sidebar to start."
					},
					{
						icon: Play,
						title: "Step 2: Press Run Visualization",
						description: "Click the primary Run Visualization button on the toolbar."
					},
					{
						icon: Eye,
						title: "Step 3: Watch your code execute",
						description: "Observe variables, function calls, memory, and step explanations in real time."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 transition-all hover:border-cyan-500/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/20 text-cyan-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-sans text-xs font-bold text-foreground",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 font-sans text-[11px] leading-relaxed text-muted-foreground",
						children: s.description
					})] })]
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t border-border/60 pt-4 font-sans",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleDismiss,
					className: "text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground",
					children: "Skip"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
					size: "sm",
					variant: "primary",
					onClick: handleDismiss,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Start" })
				})]
			})]
		})
	});
}
/** Lightweight rAF sampler for the status bar. Updates at most twice a second. */
function useFps(enabled = true) {
	const [fps, setFps] = (0, import_react.useState)(60);
	(0, import_react.useEffect)(() => {
		if (!enabled || typeof window === "undefined") return;
		let frames = 0;
		let last = performance.now();
		let raf = 0;
		const loop = (now) => {
			frames += 1;
			if (now - last >= 500) {
				setFps(Math.round(frames * 1e3 / (now - last)));
				frames = 0;
				last = now;
			}
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [enabled]);
	return fps;
}
var TONE = {
	idle: "idle",
	running: "running",
	paused: "paused",
	done: "done"
};
var THEME_NAMES = {
	"taltrix-dark": "Taltrix Dark",
	midnight: "Midnight",
	"deep-blue": "Deep Blue",
	graphite: "Graphite",
	light: "Light"
};
function StatusBar() {
	const { trace, state, index, total, metrics, mode } = useExecution();
	const { settings } = useSettings();
	const fps = useFps();
	const heapBytes = metrics.heapBytes;
	const currentThemeName = THEME_NAMES[settings.theme.id] || settings.theme.id.replace("-", " ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "flex h-8 shrink-0 flex-wrap items-center gap-1 overflow-hidden border-t border-border/70 bg-surface/90 px-2 font-mono text-[11px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
				tone: TONE[state],
				value: trace.label,
				label: "lang",
				pulse: state === "running"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
				tone: TONE[state],
				value: state,
				label: "state"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
					tone: "idle",
					value: `${heapBytes} B`,
					label: "mem"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
				tone: "done",
				value: `${index + 1}/${total}`,
				label: "step"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ml-auto flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden items-center gap-1 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
							className: "h-3 w-3 text-muted-foreground/60",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
							tone: "idle",
							value: `${mode} mode`
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
							className: "h-3 w-3 text-muted-foreground/60",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
							tone: fps >= 50 ? "running" : "paused",
							value: `${fps} fps`
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden items-center gap-1 sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, {
							className: "h-3 w-3 text-cyan-400",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
							tone: "done",
							value: currentThemeName.toLowerCase(),
							label: "theme"
						})]
					})
				]
			})
		]
	});
}
var SPEEDS = [
	{
		value: "0.25",
		label: "0.25×"
	},
	{
		value: "0.5",
		label: "0.5×"
	},
	{
		value: "1",
		label: "1×"
	},
	{
		value: "2",
		label: "2×"
	},
	{
		value: "5",
		label: "5×"
	},
	{
		value: "0",
		label: "Instant"
	}
];
/** Scrubber + transport controls for the placeholder execution timeline. */
function TimelineBar() {
	const { index, total, state, trace, speed, setSpeed, toggle, restart, next, prev, seek } = useExecution();
	const [preview, setPreview] = (0, import_react.useState)(null);
	const running = state === "running";
	const progress = total > 1 ? index / (total - 1) * 100 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-col gap-1.5 border-t border-border/70 bg-surface/85 px-3 py-1.5 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: "Restart",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "icon",
							variant: "ghost",
							onClick: restart,
							"aria-label": "Restart execution",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: "Previous step",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "icon",
							variant: "ghost",
							onClick: prev,
							"aria-label": "Previous step",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
						size: "sm",
						variant: running ? "outline" : "primary",
						onClick: toggle,
						"aria-label": running ? "Pause execution" : "Play execution",
						children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: running ? "Pause" : state === "idle" ? "Run" : "Resume"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: "Next step",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
							size: "icon",
							variant: "ghost",
							onClick: next,
							"aria-label": "Next step",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "h-4 w-4" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-1 hidden items-center gap-1.5 sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
							className: "h-3.5 w-3.5 text-muted-foreground",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
							label: "Execution speed",
							value: String(speed),
							options: SPEEDS,
							onChange: (v) => setSpeed(Number(v))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase",
						children: [
							"step ",
							index + 1,
							" / ",
							total,
							" · ",
							trace.steps[index]?.label
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 h-1 w-full -translate-y-1/2 overflow-hidden rounded-full bg-secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full rounded-full [background-image:var(--gradient-primary)]",
							animate: { width: `${progress}%` },
							transition: {
								type: "spring",
								stiffness: 220,
								damping: 30
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						"aria-hidden": true,
						className: "absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)]",
						animate: { left: `${progress}%` },
						transition: {
							type: "spring",
							stiffness: 220,
							damping: 30
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: "taltrix-scrubber",
						children: "Execution timeline position"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "taltrix-scrubber",
						type: "range",
						min: 0,
						max: total - 1,
						value: index,
						onChange: (e) => seek(Number(e.target.value)),
						onMouseMove: (e) => {
							const rect = e.currentTarget.getBoundingClientRect();
							const ratio = (e.clientX - rect.left) / rect.width;
							setPreview(Math.min(total - 1, Math.max(0, Math.round(ratio * (total - 1)))));
						},
						onMouseLeave: () => setPreview(null),
						className: "absolute inset-0 h-full w-full cursor-pointer opacity-0"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: preview !== null && trace.steps[preview] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 6
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: 6
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
				style: { left: `calc(${preview / Math.max(1, total - 1) * 100}% )` },
				className: "pointer-events-none absolute bottom-24 z-30 w-[220px] -translate-x-1/2 rounded-xl border border-border/70 bg-popover/95 p-2.5 shadow-[var(--shadow-elevated)] backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[10px] text-accent",
						children: [
							"step ",
							preview + 1,
							" · ",
							trace.steps[preview].label
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-[9px] leading-relaxed text-muted-foreground",
						children: trace.steps[preview].note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 truncate font-mono text-[9px] text-muted-foreground/70",
						children: ["stack: ", trace.steps[preview].stack.map((f) => f.name).join(" › ")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate font-mono text-[9px] text-muted-foreground/70",
						children: ["vars: ", trace.steps[preview].variables.map((v) => `${v.name}=${v.value}`).join(", ") || "—"]
					})
				]
			}) : null }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "hidden items-center justify-between gap-1 md:flex",
				children: trace.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => seek(i),
						"data-cursor": "button",
						"aria-current": i === index,
						"aria-label": `Go to step ${i + 1}: ${s.label}`,
						className: "group flex w-full flex-col items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							animate: { scale: i === index ? 1.4 : 1 },
							className: `h-1.5 w-1.5 rounded-full transition-colors ${i <= index ? "bg-accent" : "bg-border group-hover:bg-muted-foreground"}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `hidden w-full truncate text-center font-mono text-[9px] xl:block ${i === index ? "text-accent" : "text-muted-foreground/60"}`,
							children: s.label
						})]
					})
				}, `${s.label}-${i}`))
			})
		]
	});
}
/** Floating inspector for a selected heap object. */
function ObjectInspector() {
	const { selection, select, program, step, seek } = useExecution();
	const id = selection.kind === "object" ? selection.id : null;
	const profile = (0, import_react.useMemo)(() => id ? objectProfile(program.steps, id) : null, [program, id]);
	const live = id ? step.heap.find((o) => o.id === id) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: id && profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
		initial: {
			opacity: 0,
			y: 18,
			scale: .96
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		exit: {
			opacity: 0,
			y: 12,
			scale: .96
		},
		transition: {
			type: "spring",
			stiffness: 320,
			damping: 30
		},
		className: "fixed right-4 bottom-28 z-40 w-[268px] rounded-xl border border-border/70 bg-popover/95 p-3 shadow-[var(--shadow-elevated)] backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase",
					children: "object"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"data-cursor": "button",
					"aria-label": "Close object inspector",
					onClick: () => select({ kind: "none" }),
					className: "rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[11px] text-accent",
				children: id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[10px] text-muted-foreground",
				children: [
					live?.type ?? "collected",
					" · ",
					live?.label ?? "—"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-2.5 space-y-1 font-mono text-[10px]",
				children: [
					["Value", live?.value ?? "—"],
					["References", (live?.refs ?? []).join(", ") || "none"],
					["Referenced by", profile.referencedBy.join(", ") || "none"],
					["Created at", `step ${profile.createdAt + 1}`],
					["Destroyed at", profile.destroyedAt === null ? "still live" : `step ${profile.destroyedAt + 1}`],
					["Memory size", `${profile.sizeBytes} B`]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "shrink-0 text-muted-foreground/70",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "min-w-0 truncate text-right text-foreground/90",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"data-cursor": "button",
				onClick: () => seek(profile.createdAt),
				className: "mt-3 w-full rounded-lg border border-border/60 py-1.5 font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:border-accent/50 hover:text-foreground",
				children: "jump to allocation"
			})
		]
	}, id) : null });
}
/** Keyboard transport: space toggles, arrows step, R restarts. */
function useTransportShortcuts() {
	const { toggle, next, prev, restart } = useExecution();
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const target = e.target;
			if (target && (target.isContentEditable || /input|textarea/i.test(target.tagName))) return;
			if (e.code === "Space") {
				e.preventDefault();
				toggle();
			} else if (e.key === "ArrowRight") next();
			else if (e.key === "ArrowLeft") prev();
			else if (e.key.toLowerCase() === "r") restart();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		toggle,
		next,
		prev,
		restart
	]);
}
function WorkspaceLayout() {
	const [inspectorCollapsed, setInspectorCollapsed] = (0, import_react.useState)(false);
	const [explorerCollapsed, setExplorerCollapsed] = (0, import_react.useState)(true);
	const [mobileTab, setMobileTab] = (0, import_react.useState)("happening");
	const { mode, presentationMode } = useExecution();
	useTransportShortcuts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex h-svh flex-col overflow-hidden bg-background transition-all duration-300", presentationMode && "text-lg scale-[1.02]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceToolbar, {
				inspectorCollapsed,
				onToggleInspector: () => setInspectorCollapsed((c) => !c),
				explorerCollapsed,
				onToggleExplorer: () => setExplorerCollapsed((c) => !c)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden min-h-0 flex-1 lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ResizablePanelGroup, {
					orientation: "horizontal",
					children: [
						!explorerCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResizablePanel, {
							defaultSize: "18%",
							minSize: "14%",
							maxSize: "26%",
							className: "bg-surface/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplorerPanel, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResizableHandle, { className: "bg-border/70 transition-colors hover:bg-accent/60" })] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResizablePanel, {
							defaultSize: inspectorCollapsed ? "100%" : "70%",
							minSize: "45%",
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorPane, {})
						}),
						!inspectorCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResizableHandle, { className: "bg-border/70 transition-colors hover:bg-accent/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResizablePanel, {
							defaultSize: "30%",
							minSize: "20%",
							maxSize: "42%",
							className: "bg-surface/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InspectorSidebar, {})
						})] }) : null
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-[220px] flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorPane, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-[45%] min-h-[220px] flex-col border-t border-border/70 bg-surface/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
						className: "border-b border-border/60 px-2",
						value: mobileTab,
						onChange: setMobileTab,
						items: [
							{
								value: "happening",
								label: "What's Happening",
								icon: Sparkles
							},
							{
								value: "inspector",
								label: "Inspector",
								icon: Boxes
							},
							{
								value: "insights",
								label: "Insights",
								icon: Activity
							}
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0 flex-1 overflow-auto p-2",
						children: mobileTab === "happening" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsHappeningPanel, {}) : mobileTab === "inspector" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InspectorSidebar, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionInsights, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObjectInspector, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplainStepModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionCompleteModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FtueWalkthrough, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {})
		]
	}) });
}
var WorkspaceErrorBoundary = class extends import_react.Component {
	state = { hasError: false };
	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error
		};
	}
	componentDidCatch(error, errorInfo) {
		console.error("Workspace error boundary caught error:", error, errorInfo);
	}
	render() {
		if (this.state.hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-screen w-full flex-col items-center justify-center bg-background p-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-md space-y-4 rounded-2xl border border-border/80 bg-surface/80 p-6 shadow-2xl backdrop-blur-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold text-foreground",
						children: "Workspace Loading Issue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs text-muted-foreground leading-relaxed",
						children: "The playground workspace encountered an initialization error. Please reload to restore the visualizer."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
						onClick: () => {
							this.setState({ hasError: false });
							window.location.reload();
						},
						className: "w-full justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-4 w-4" }), "Reload Workspace"]
					})
				]
			})
		});
		return this.props.children;
	}
};
function WorkspacePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceErrorBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceLayout, {}) }) });
}
var SplitComponent = WorkspacePage;
//#endregion
export { SplitComponent as component };
