import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Gt as Activity, Nt as BrainCircuit, Pt as Boxes, et as Layers, m as Timer, tt as Languages, ut as Gauge } from "../_libs/lucide-react.mjs";
import { n as Section, r as SectionHeading } from "./routes-IOoYHTcx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FeaturesSection-DYjlLZSW.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		icon: Activity,
		title: "Execution Visualization",
		desc: "Line-by-line focus synced with every panel on screen."
	},
	{
		icon: Boxes,
		title: "Memory Tracking",
		desc: "Stack frames and heap objects with live reference edges."
	},
	{
		icon: Layers,
		title: "Call Stack",
		desc: "Watch frames push and pop with real depth semantics."
	},
	{
		icon: Timer,
		title: "Timeline",
		desc: "Scrub, rewind and replay any recorded moment of the run."
	},
	{
		icon: Gauge,
		title: "Complexity Insights",
		desc: "Time and space profiles derived from the recorded trace."
	},
	{
		icon: BrainCircuit,
		title: "AI Ready",
		desc: "A structured trace format built for natural-language explanation."
	},
	{
		icon: Languages,
		title: "Language Independent",
		desc: "The visual layer never assumes a runtime — swap the runner."
	}
];
function FeaturesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "features",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "06",
			eyebrow: "Features",
			title: "Built for the moment it finally clicks.",
			description: "Every surface is designed around one question: what is the program doing right now?"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 26
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					delay: i % 3 * .08,
					duration: .6,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				whileHover: { y: -6 },
				"data-cursor": "button",
				className: "panel group relative overflow-hidden p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
						className: "h-5 w-5 text-accent",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-lg font-semibold",
						children: f.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: f.desc
					})
				]
			}, f.title))
		})]
	});
}
//#endregion
export { FeaturesSection };
