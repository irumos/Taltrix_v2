import { t as COMPLEXITY } from "./execution-DcB11N3d.mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as useTraceRunner, t as TimelineControls } from "./use-trace-runner-DLZuwHCr.mjs";
import { n as Section, r as SectionHeading } from "./routes-IOoYHTcx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TimelineSection-CC_qVHho.js
var import_jsx_runtime = require_jsx_runtime();
function TimelineSection() {
	const runner = useTraceRunner(900);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "timeline",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "04",
			eyebrow: "Execution timeline",
			title: "Scrub the program like film.",
			description: "Every recorded step is addressable. Move forward, rewind, or jump straight to the moment where the value changed."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "panel mt-14 p-6 md:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1fr_260px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .35 },
					className: "mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
							children: ["line ", runner.current.line]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl font-semibold",
							children: runner.current.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-muted-foreground",
							children: runner.current.note
						})
					]
				}, runner.index), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineControls, { ...runner })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 gap-4 lg:grid-cols-1",
					children: [
						["Time complexity", COMPLEXITY.time],
						["Space complexity", COMPLEXITY.space],
						["Max stack depth", String(COMPLEXITY.maxDepth)],
						["Recorded steps", String(COMPLEXITY.steps)]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border/60 bg-background/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1.5 font-display text-xl font-semibold text-accent",
							children: v
						})]
					}, k))
				})]
			})
		})]
	});
}
//#endregion
export { TimelineSection };
