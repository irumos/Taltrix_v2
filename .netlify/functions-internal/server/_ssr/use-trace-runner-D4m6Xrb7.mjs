import { o as __toESM } from "../_runtime.mjs";
import { l as blip, r as TaltrixButton } from "./router-B_pj-fbL.mjs";
import { r as TRACE } from "./execution-DcB11N3d.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { F as Pause, P as Play, S as SkipBack, j as RotateCcw, x as SkipForward } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-trace-runner-D4m6Xrb7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TimelineControls({ index, total, state, play, pause, reset, step, seek, compact = false }) {
	const running = state === "running";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
						size: "sm",
						variant: "ghost",
						onClick: reset,
						"aria-label": "Restart execution",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
						size: "sm",
						variant: "ghost",
						onClick: () => step(-1),
						"aria-label": "Previous step",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
						size: "sm",
						variant: running ? "outline" : "primary",
						onClick: running ? pause : play,
						"aria-label": running ? "Pause execution" : "Play execution",
						children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: running ? "Pause" : state === "idle" ? "Run" : "Resume" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaltrixButton, {
						size: "sm",
						variant: "ghost",
						onClick: () => step(1),
						"aria-label": "Next step",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
						children: [
							"step ",
							index + 1,
							" / ",
							total
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "taltrix-timeline",
				children: "Execution timeline position"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "taltrix-timeline",
				type: "range",
				min: 0,
				max: total - 1,
				value: index,
				onChange: (e) => seek(Number(e.target.value)),
				className: "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[var(--color-primary)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex items-center justify-between gap-1",
				children: TRACE.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => seek(i),
						"data-cursor": "button",
						"aria-label": `Go to step ${i + 1}: ${t.label}`,
						"aria-current": i === index,
						className: "group flex w-full flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							animate: { scale: i === index ? 1.35 : 1 },
							className: `h-1.5 w-1.5 rounded-full ${i <= index ? "bg-accent" : "bg-border group-hover:bg-muted-foreground"}`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `hidden truncate text-center font-mono text-[9px] tracking-wide lg:block ${i === index ? "text-accent" : "text-muted-foreground/60"}`,
							children: t.label
						})]
					})
				}, t.label))
			})
		]
	});
}
/** Drives the placeholder trace playback. No execution happens — it replays static data. */
function useTraceRunner(intervalMs = 1100) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [state, setState] = (0, import_react.useState)("idle");
	const timer = (0, import_react.useRef)(null);
	const stop = (0, import_react.useCallback)(() => {
		if (timer.current) clearInterval(timer.current);
		timer.current = null;
	}, []);
	(0, import_react.useEffect)(() => stop, [stop]);
	const play = (0, import_react.useCallback)(() => {
		stop();
		setState("running");
		blip("compile");
		timer.current = setInterval(() => {
			setIndex((i) => {
				if (i >= TRACE.length - 1) {
					stop();
					setState("done");
					return i;
				}
				return i + 1;
			});
		}, intervalMs);
	}, [intervalMs, stop]);
	const pause = (0, import_react.useCallback)(() => {
		stop();
		setState((s) => s === "running" ? "paused" : s);
	}, [stop]);
	const reset = (0, import_react.useCallback)(() => {
		stop();
		setIndex(0);
		setState("idle");
	}, [stop]);
	const seek = (0, import_react.useCallback)((next) => {
		stop();
		setIndex(Math.min(TRACE.length - 1, Math.max(0, next)));
		setState((s) => s === "idle" ? "paused" : s === "running" ? "paused" : s);
	}, [stop]);
	const step = (0, import_react.useCallback)((delta) => seek(index + delta), [index, seek]);
	return {
		index,
		state,
		current: TRACE[index],
		total: TRACE.length,
		play,
		pause,
		reset,
		seek,
		step
	};
}
//#endregion
export { useTraceRunner as n, TimelineControls as t };
