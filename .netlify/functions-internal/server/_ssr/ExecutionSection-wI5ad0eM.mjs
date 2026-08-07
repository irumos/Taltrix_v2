import { p as cn } from "./router-BaC3vnTK.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Pt as Boxes, a as Variable, et as Layers, y as SquareTerminal } from "../_libs/lucide-react.mjs";
import { t as CodeEditor } from "./CodeEditor-C-wvmiyU.mjs";
import { n as useTraceRunner, t as TimelineControls } from "./use-trace-runner-DYyFj9S0.mjs";
import { n as Section, r as SectionHeading } from "./routes-Dcvndtrf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ExecutionSection-wI5ad0eM.js
var import_jsx_runtime = require_jsx_runtime();
function Panel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("panel", className),
		...props
	});
}
function PanelHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center justify-between gap-3 border-b border-border/70 px-4 py-2.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase", className),
		...props
	});
}
var spring = {
	type: "spring",
	stiffness: 320,
	damping: 30
};
function VariablesPanel({ step }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Variable, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}), " Variables"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.variables.length })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-1.5 p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				mode: "popLayout",
				children: step.variables.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					layout: true,
					initial: {
						opacity: 0,
						x: 24,
						filter: "blur(4px)"
					},
					animate: {
						opacity: 1,
						x: 0,
						filter: "blur(0px)"
					},
					exit: {
						opacity: 0,
						x: -18
					},
					transition: spring,
					className: `flex items-center justify-between gap-3 rounded-lg border px-3 py-2 font-mono text-[12px] ${v.changed ? "border-accent/50 bg-accent/10" : "border-border/60 bg-background/40"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: v.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-[10px] text-muted-foreground",
							children: v.scope
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: v.changed ? "text-accent" : "text-muted-foreground",
						children: v.value
					})]
				}, `${v.scope}:${v.name}`))
			})
		})]
	});
}
function CallStackPanel({ step }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}), " Call stack"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["depth ", step.stack.length] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col-reverse gap-1.5 p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				mode: "popLayout",
				children: step.stack.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					layout: true,
					initial: {
						opacity: 0,
						y: 16,
						scaleY: .7
					},
					animate: {
						opacity: 1,
						y: 0,
						scaleY: 1
					},
					exit: {
						opacity: 0,
						y: 10,
						scaleY: .7
					},
					transition: spring,
					style: { marginLeft: i * 8 },
					className: `rounded-lg border px-3 py-2 font-mono text-[12px] ${i === step.stack.length - 1 ? "border-primary/60 bg-primary/15 text-foreground" : "border-border/60 bg-background/40 text-muted-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 text-[10px] opacity-70",
						children: [":", f.line]
					})]
				}, `${f.name}-${i}`))
			})
		})]
	});
}
function HeapPanel({ step }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}), " Heap"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [step.heap.length, " objects"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-x-auto p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				mode: "popLayout",
				children: step.heap.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: true,
					initial: {
						opacity: 0,
						scale: .86,
						y: 14
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .86
					},
					transition: spring,
					className: "min-w-[124px] rounded-lg border border-border/60 bg-background/50 p-2.5 font-mono text-[11px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground",
							children: o.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-accent",
							children: o.type
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 truncate text-foreground/85",
							children: o.value
						})
					]
				}, o.id))
			})
		})]
	});
}
function ConsolePanel({ step, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PanelHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTerminal, {
				className: "h-3.5 w-3.5",
				"aria-hidden": true
			}), " Console"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "stdout" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-[92px] space-y-1 p-3 font-mono text-[12px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground",
					children: "$ taltrix run factorial.py --trace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-muted-foreground/70",
					children: [
						"step ",
						index + 1,
						" · ",
						step.label
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: step.stdout.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: -8
					},
					animate: {
						opacity: 1,
						x: 0
					},
					className: line.stream === "stderr" ? "text-destructive" : "text-success",
					children: line.text
				}, line.text)) })
			]
		})]
	});
}
function ExecutionSection() {
	const runner = useTraceRunner();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "demo",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "02",
			eyebrow: "Execution visualization",
			title: "Press run. Watch the program think.",
			description: "A recorded trace of the same factorial program. Line focus, variable mutations, stack growth, heap allocations and console output move together as one choreography."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 36
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-100px"
			},
			transition: {
				duration: .8,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "panel mt-14 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-px bg-border/60 lg:grid-cols-[1.25fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/60 px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "factorial.py · python 3.12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: runner.current.label
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[300px] sm:h-[360px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeEditor, { highlightLine: runner.current.line })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border/60 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineControls, { ...runner })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 bg-surface p-4 content-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VariablesPanel, { step: runner.current }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CallStackPanel, { step: runner.current }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsolePanel, {
							step: runner.current,
							index: runner.index
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeapPanel, { step: runner.current }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-mono text-[12px] text-muted-foreground",
					children: ["› ", runner.current.note]
				})]
			})]
		})]
	});
}
//#endregion
export { ExecutionSection };
