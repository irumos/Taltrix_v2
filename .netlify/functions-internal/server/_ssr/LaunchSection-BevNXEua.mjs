import { o as __toESM } from "../_runtime.mjs";
import { r as TaltrixButton } from "./router-B_pj-fbL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as useTransform, r as useScroll } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { Bt as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as CodeEditor } from "./CodeEditor-C-wvmiyU.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LaunchSection-BevNXEua.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LaunchSection() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"]
	});
	const scale = useTransform(scrollYProgress, [0, 1], [.86, 1]);
	const radius = useTransform(scrollYProgress, [0, 1], [28, 10]);
	const glow = useTransform(scrollYProgress, [.2, 1], [0, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "launch",
		className: "relative overflow-hidden px-5 py-28 sm:px-8 md:py-36",
		"aria-label": "Launch the workspace",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { opacity: glow },
			className: "pointer-events-none absolute inset-0 [background-image:var(--gradient-halo)]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1240px] text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-5 font-mono text-[11px] tracking-[0.28em] text-accent uppercase",
					children: "07 — launch workspace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mx-auto max-w-3xl text-[clamp(2rem,5vw,3.6rem)] leading-[1.03] font-semibold text-balance",
					children: [
						"The site stops being a page.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "It becomes the product."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-xl text-[15px] text-muted-foreground",
					children: "The editor expands, the marketing chrome falls away, and you land inside the Taltrix workspace."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-9 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/workspace",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TaltrixButton, {
							size: "lg",
							children: ["Enter Workspace", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-4 w-4",
								"aria-hidden": true
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: {
						scale,
						borderRadius: radius
					},
					className: "panel mx-auto mt-16 max-w-5xl overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/60 px-4 py-2.5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "taltrix workspace" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-success",
							children: "ready"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[280px] text-left sm:h-[340px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeEditor, {})
					})]
				})
			]
		})]
	});
}
//#endregion
export { LaunchSection };
