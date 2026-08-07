import { o as __toESM } from "../_runtime.mjs";
import { l as blip, o as useAuth } from "./router-B_pj-fbL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { At as Building, Ct as CircleCheckBig, Vt as ArrowRight, X as Lock, Z as LoaderCircle, g as Terminal, lt as GraduationCap, mt as EyeOff, ot as Hash, pt as Eye, q as Mail, s as User } from "../_libs/lucide-react.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-DN1F5NkO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEPARTMENTS = [
	"Computer Science",
	"Information Technology",
	"Artificial Intelligence & DS",
	"Electronics & Communication",
	"Electrical Engineering",
	"Mechanical Engineering"
];
var YEARS = [
	"1st Year",
	"2nd Year",
	"3rd Year",
	"4th Year",
	"Postgraduate"
];
function SignupPage() {
	const navigate = useNavigate();
	const { signup, isLoading } = useAuth();
	const [name, setName] = (0, import_react.useState)("");
	const [rollNumber, setRollNumber] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [department, setDepartment] = (0, import_react.useState)("Computer Science");
	const [year, setYear] = (0, import_react.useState)("3rd Year");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [acceptTerms, setAcceptTerms] = (0, import_react.useState)(true);
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMsg("");
		if (!name.trim()) {
			setErrorMsg("Please enter your full name.");
			return;
		}
		if (!rollNumber.trim()) {
			setErrorMsg("Please enter your student roll number.");
			return;
		}
		if (!email.trim() || !email.includes("@")) {
			setErrorMsg("Please enter a valid college email address.");
			return;
		}
		if (password.length < 6) {
			setErrorMsg("Password must be at least 6 characters long.");
			return;
		}
		if (password !== confirmPassword) {
			setErrorMsg("Password confirmation does not match.");
			return;
		}
		if (!acceptTerms) {
			setErrorMsg("You must accept the TALTRIX Terms & Service Privacy Policy.");
			return;
		}
		setIsSubmitting(true);
		blip("run");
		try {
			await signup({
				name,
				rollNumber,
				email,
				department,
				year,
				password,
				confirmPassword,
				acceptTerms
			});
			navigate({ to: "/dashboard" });
		} catch (err) {
			setErrorMsg(err.message || "Could not complete registration.");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen w-full overflow-hidden bg-background text-foreground flex items-center justify-center p-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[140px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				className: "relative z-10 w-full max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
								children: "Create Student Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-xs text-muted-foreground",
								children: "Join your department's interactive code execution network"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border/80 bg-surface/80 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl",
						children: [errorMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-3 text-xs text-rose-300",
							children: errorMsg
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "Alex Rivera",
											value: name,
											onChange: (e) => setName(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
										children: "Roll Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hash, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											required: true,
											placeholder: "21CS042",
											value: rollNumber,
											onChange: (e) => setRollNumber(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
										})]
									})] })]
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
										children: "Department"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: department,
											onChange: (e) => setDepartment(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500",
											children: DEPARTMENTS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: d,
												className: "bg-surface text-foreground",
												children: d
											}, d))
										})]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
										children: "Year of Study"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: year,
											onChange: (e) => setYear(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500",
											children: YEARS.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: y,
												className: "bg-surface text-foreground",
												children: y
											}, y))
										})]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: showPassword ? "text" : "password",
												required: true,
												placeholder: "••••••••••••",
												value: password,
												onChange: (e) => setPassword(e.target.value),
												className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-10 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setShowPassword(!showPassword),
												className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
												children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
											})
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1.5 block font-sans text-xs font-semibold text-foreground",
										children: "Confirm Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: showPassword ? "text" : "password",
											required: true,
											placeholder: "••••••••••••",
											value: confirmPassword,
											onChange: (e) => setConfirmPassword(e.target.value),
											className: "w-full rounded-xl border border-border/70 bg-background/60 pl-10 pr-4 py-2.5 text-xs text-foreground placeholder-muted-foreground outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
										})]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-start gap-2.5 cursor-pointer text-xs text-muted-foreground select-none",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: acceptTerms,
											onChange: (e) => setAcceptTerms(e.target.checked),
											className: "mt-0.5 h-4 w-4 rounded border-border bg-background/60 text-cyan-500 focus:ring-cyan-500"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I agree to the TALTRIX Academic Code of Conduct, Terms of Service, and Privacy Policy." })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting || isLoading,
									className: "group relative mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-sans text-xs font-semibold text-black shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-[0.99] disabled:opacity-50",
									children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-black" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create Account" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
									] })
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-center text-xs text-muted-foreground",
						children: [
							"Already registered?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "font-semibold text-cyan-400 hover:underline",
								children: "Sign In to your Account"
							})
						]
					})
				]
			})
		]
	});
}
var SplitComponent = SignupPage;
//#endregion
export { SplitComponent as component };
