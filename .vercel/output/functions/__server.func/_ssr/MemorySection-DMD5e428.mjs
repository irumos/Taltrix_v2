import { o as __toESM } from "../_runtime.mjs";
import { r as TRACE } from "./execution-DcB11N3d.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Ut as ArrowDown, Vt as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Section, r as SectionHeading } from "./routes-IOoYHTcx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MemorySection-DMD5e428.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SNAPSHOT = TRACE[4];
function MemorySection() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-120px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "memory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "03",
			eyebrow: "Memory visualization",
			title: "Stack grows down. Heap grows out.",
			description: "Every binding is a card that flies into the region that owns it, with live references drawn between frames and heap objects."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "mt-14 grid gap-6 lg:grid-cols-[minmax(0,340px)_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
					className: "h-3.5 w-3.5",
					"aria-hidden": true
				}), " Stack"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2",
				children: SNAPSHOT.stack.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: -22,
						scale: .95
					},
					animate: inView ? {
						opacity: 1,
						y: 0,
						scale: 1
					} : {},
					transition: {
						delay: .1 + i * .12,
						type: "spring",
						stiffness: 260,
						damping: 26
					},
					className: "panel flex items-center justify-between px-4 py-3 font-mono text-[12px]",
					style: { marginLeft: i * 10 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: Object.entries(f.locals ?? {}).map(([k, v]) => `${k}=${v}`).join(", ") || "—"
					})]
				}, f.name + i))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "h-3.5 w-3.5",
					"aria-hidden": true
				}), " Heap"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0 h-full w-full",
					preserveAspectRatio: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
						d: "M 10 40 C 120 10, 220 90, 340 44",
						fill: "none",
						stroke: "var(--color-accent)",
						strokeOpacity: "0.35",
						strokeWidth: "1",
						strokeDasharray: "4 6",
						initial: { pathLength: 0 },
						animate: inView ? { pathLength: 1 } : {},
						transition: {
							duration: 1.4,
							delay: .5
						}
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
					children: SNAPSHOT.heap.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							x: 40,
							rotate: 2
						},
						animate: inView ? {
							opacity: 1,
							x: 0,
							rotate: 0
						} : {},
						transition: {
							delay: .2 + i * .1,
							type: "spring",
							stiffness: 240,
							damping: 24
						},
						whileHover: { y: -4 },
						className: "panel p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] tracking-widest text-muted-foreground uppercase",
								children: o.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-display text-lg font-semibold",
								children: o.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-mono text-[12px] text-accent",
								children: o.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 border-t border-border/60 pt-3 font-mono text-[12px] text-muted-foreground",
								children: o.value
							})
						]
					}, o.id))
				})]
			})] })]
		})]
	});
}
//#endregion
export { MemorySection };
