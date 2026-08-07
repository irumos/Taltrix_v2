import { o as __toESM } from "../_runtime.mjs";
import { l as blip, o as useAuth } from "./router-B_pj-fbL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { D as Send, Ht as ArrowLeft, St as CircleCheck, Z as LoaderCircle, g as Terminal, q as Mail } from "../_libs/lucide-react.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-CWXJFOqB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ForgotPasswordPage() {
	const { requestPasswordReset } = useAuth();
	const [email, setEmail] = (0, import_react.useState)("");
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		if (!email.trim() || !email.includes("@")) {
			setErrorMsg("Please enter a valid college email address.");
			return;
		}
		setIsLoading(true);
		blip("run");
		try {
			await requestPasswordReset(email);
			setIsSubmitted(true);
		} catch (err) {
			setErrorMsg(err.message || "Could not send password reset request.");
		} finally {
			setIsLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				scale: .96,
				y: 15
			},
			animate: {
				opacity: 1,
				scale: 1,
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
			className: "relative z-10 w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2.5 transition-transform hover:scale-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-xl [background-image:var(--gradient-primary)] shadow-lg shadow-cyan-500/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "h-5 w-5 text-primary-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-bold tracking-[0.34em]",
							children: "TALTRIX"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-2xl font-bold text-foreground",
						children: "Reset Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-xs text-muted-foreground",
						children: "We'll send a secure password recovery link to your registered college email"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border/80 bg-surface/80 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl",
				children: [isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-4 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold text-foreground",
							children: "Check Your Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground leading-relaxed",
							children: [
								"Reset instructions have been dispatched to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-cyan-400",
									children: email
								}),
								". Please check your college inbox or spam folder."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-2.5 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400",
								children: "Return to Sign In"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-300",
							children: errorMsg
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
							children: "College Email Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								placeholder: "alex.rivera@college.edu",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: isLoading,
							className: "flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 disabled:opacity-50",
							children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-black" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Reset Link" })] })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 pt-4 border-t border-border/60 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/login",
						className: "inline-flex items-center gap-1.5 font-sans text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Sign In" })]
					})
				})]
			})]
		})]
	});
}
var SplitComponent = ForgotPasswordPage;
//#endregion
export { SplitComponent as component };
