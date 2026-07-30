import { r as __toESM } from "../_runtime.mjs";
import { v as performance_default } from "../_libs/@tanstack/react-start+[...].mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region src/styles.css?transform-only
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-Bpyo9kJQ.css";
//#endregion
//#region src/assets/Artboard 10@4x.png
var Artboard_10_4x_default = "/assets/Artboard%2010@4x-C81m261w.png";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
//#endregion
//#region src/routes/__root.tsx
var import_jsx_runtime = require_jsx_runtime();
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Brixfilling | US LLC Formation Company" },
			{
				name: "description",
				content: "Fast, fully online U.S. business formation for global entrepreneurs."
			},
			{
				name: "author",
				content: "Brixfilling"
			},
			{
				property: "og:title",
				content: "Brixfilling | US LLC Formation Company"
			},
			{
				property: "og:description",
				content: "Fast, fully online U.S. business formation for global entrepreneurs."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@brixfilling"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: Artboard_10_4x_default,
				type: "image/png"
			},
			{
				rel: "shortcut icon",
				href: Artboard_10_4x_default,
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
//#endregion
//#region src/routes/index.tsx
var logoUrl = "/assets/Artboard%205%20copy@4x-DrgG4t-d.png";
var Route = createFileRoute("/")({
	component: Index,
	head: () => ({
		meta: [
			{ title: "Brixfilling | US LLC Formation Company" },
			{
				name: "description",
				content: "Form your U.S. LLC or C-Corp online. EIN, ITIN, registered agent, and business bank account setup for international founders. Starting at $149."
			},
			{
				property: "og:title",
				content: "Brixfilling | US LLC Formation Company"
			},
			{
				property: "og:description",
				content: "Fast, fully online U.S. business formation for global entrepreneurs. LLC, EIN, ITIN, bank account and compliance in one place."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}, {
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
		}]
	})
});
var partners = [
	"Payoneer",
	"Wise",
	"Airwallex",
	"PingPong",
	"Stripe",
	"PayPal"
];
var platforms = [
	"Stripe",
	"PayPal",
	"Amazon",
	"eBay",
	"Airwallex",
	"Payoneer",
	"Wise",
	"Square"
];
var starterFeatures = [
	"Name Check & Clearance",
	"Business Address – 1 Year",
	"Registered Agent – 1 Year",
	"Govt / State Filing Fee",
	"Articles of Incorporation",
	"Business Tax ID (EIN)",
	"U.S. Phone Number",
	"Business Bank Account Setup",
	"Digital Dashboard Access"
];
var advanceExtras = [
	"Business Address with Unique Suite",
	"Reseller Certificate / Seller Permit",
	"Dedicated IP VPS – 1 Month"
];
var services = [
	[
		"🏢",
		"Business Address",
		"Unique suite U.S. business address accepted by Amazon and major online marketplaces."
	],
	[
		"🆔",
		"ITIN Processing",
		"Obtain your ITIN through an IRS-recognized CAA for compliant filing."
	],
	[
		"™️",
		"Trademark",
		"Register your trademark to protect brand identity and secure exclusive commercial rights."
	],
	[
		"📄",
		"Reseller Permit",
		"Obtain an official reseller certificate to purchase products tax-free for resale."
	],
	[
		"🧾",
		"IRS Tax Filing",
		"Prepare and file federal tax obligations accurately with the IRS."
	],
	[
		"📊",
		"Annual Report",
		"Prepare and submit required annual franchise reports to maintain active state compliance."
	],
	[
		"📝",
		"Operating Agreement",
		"Custom LLC agreement defining ownership, management roles, and structure."
	],
	[
		"🏷️",
		"DBA Name",
		"File a Doing Business As name to legally operate under a new brand."
	],
	[
		"✏️",
		"Amendment",
		"Submit official amendments to update company name, members, or legal structure."
	],
	[
		"♻️",
		"Reinstatement",
		"Restore a dissolved company and regain good standing through required filings."
	],
	[
		"🗂️",
		"Dissolution",
		"Formally close your company with proper legal documentation."
	],
	[
		"🔢",
		"DUNS Number",
		"Apply for a D-U-N-S Number for business verification and vendor credibility."
	],
	[
		"📦",
		"Amazon Signup",
		"Complete Amazon seller account registration with guided expert assistance."
	],
	[
		"🔏",
		"Notarized UBO",
		"Notarized UBO document confirming beneficial ownership for banking needs."
	],
	[
		"🌐",
		"Website",
		"Custom-designed professional website to establish credibility and online presence."
	],
	[
		"🎨",
		"Logo Design",
		"Custom logo design to build brand identity, recognition, and trust."
	]
];
var steps = [
	[
		"01",
		"Choose Service",
		"Select the formation package that fits your business needs."
	],
	[
		"02",
		"Share Details",
		"Provide your information through our secure online platform."
	],
	[
		"03",
		"We Handle Filings",
		"Our experts prepare and submit all required documents."
	],
	[
		"04",
		"Start Your Business",
		"Receive your documents and begin operating your U.S. company."
	]
];
var compliance = [
	[
		"🧠",
		"Compliance Genius",
		"Automated compliance monitoring"
	],
	[
		"📅",
		"Annual Report Filing",
		"State-required annual filings"
	],
	[
		"📋",
		"BOI Report Requirement",
		"FinCEN BOI compliance"
	],
	[
		"💼",
		"Tax Filing Assistant",
		"Federal and state tax support"
	],
	[
		"✅",
		"Good Standing Status",
		"Maintain company compliance"
	],
	[
		"🤝",
		"Ongoing Guidance",
		"Expert compliance advice"
	]
];
var complianceDetail = [
	["Annual State Filings", "We track deadlines and file your annual reports on time in every state where you're registered."],
	["Federal Tax Returns", "Guided preparation and filing of federal returns tailored to your entity type."],
	["FinCEN BOI Reports", "Full BOI reporting support to keep your entity compliant with new federal rules."],
	["Ownership Maintenance", "Update ownership, addresses and structure with correctly filed amendments."],
	["Ongoing Guidance", "Direct access to specialists — not bots — whenever compliance questions come up."]
];
var whyCards = [
	[
		"🌍",
		"Non-Resident Friendly",
		"Specialized services designed for international founders. No U.S. address or SSN required."
	],
	[
		"💎",
		"Transparent Pricing",
		"Clear, upfront pricing with no hidden fees. Know exactly what you'll pay before you start."
	],
	[
		"🎧",
		"Dedicated Support",
		"Real human support from compliance experts. Get answers when you need them most."
	],
	[
		"🏦",
		"Fintech & Banking",
		"Partnerships with top fintech providers for seamless business banking setup."
	],
	[
		"🧭",
		"Personal Guidance",
		"Not automated bots — real specialists who understand your unique business needs."
	]
];
var flags = [
	["🇵🇰", "Pakistan"],
	["🇦🇪", "UAE"],
	["🇬🇧", "United Kingdom"],
	["🇮🇳", "India"],
	["🇪🇺", "Europe"],
	["🇦🇺", "Australia"],
	["🇩🇪", "Germany"],
	["🇨🇦", "Canada"]
];
var stats = [
	[
		800,
		"+",
		"Founders Served"
	],
	[
		500,
		"+",
		"Companies Formed"
	],
	[
		200,
		"+",
		"ITINs Processed"
	],
	[
		50,
		"+",
		"Trademarks Filed"
	]
];
var faqs = [
	[
		"Basics",
		"Can a non-US resident form an LLC in the United States?",
		"Yes. Non-US residents can legally form and fully own a U.S. LLC without visiting the United States. We assist international founders throughout the entire formation process."
	],
	[
		"Basics",
		"Which state is best for LLC formation for foreigners?",
		"There is no single best state. Wyoming, New Mexico, Texas, Florida, and Montana are commonly chosen based on business activity."
	],
	[
		"Compliance",
		"Can a non-resident apply for an ITIN?",
		"Yes. Brixfilling assists non-residents with ITIN applications through an IRS-authorized Certified Acceptance Agent to support U.S. tax compliance."
	],
	[
		"Basics",
		"How long does it take to form a U.S. LLC?",
		"State approval usually takes 2 to 7 business days, depending on the state. EIN issuance typically takes 7 to 15 business days and may take longer during peak IRS processing periods."
	],
	[
		"Compliance",
		"Can I make changes to my company details after formation?",
		"Yes. Changes such as company name, ownership, or address can be updated after formation through official amendment filings, and these changes involve additional state fees and service charges."
	]
];
function useCountUp(target, start, duration = 1600) {
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!start) return;
		const t0 = performance_default.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - t0) / duration);
			setValue(Math.floor(p * target));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		start,
		target,
		duration
	]);
	return value;
}
function StatCounter({ value, suffix, label }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: .3 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-4xl sm:text-5xl font-black text-white",
			children: [useCountUp(value, visible), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#b366ff]",
				children: suffix
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm text-white/70",
			children: label
		})]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const links = [
		["Home", "#top"],
		["Pricing", "#pricing"],
		["Services", "#services"],
		["About", "#about"],
		["Contact", "#contact"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-black/90 backdrop-blur border-b border-white/10" : "bg-black/40 backdrop-blur-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logoUrl,
						alt: "BrixFiling",
						className: "h-7 w-auto object-contain brightness-0 invert sm:h-8 md:h-9"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: links.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "text-sm text-white/80 hover:text-[#b366ff] transition-colors",
						children: l
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "text-sm px-4 py-2 rounded-lg border border-white/20 text-white hover:border-[#7E00FC] hover:text-[#b366ff] transition",
						children: "Login"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#pricing",
						className: "btn-brand btn-brand-hover text-sm px-4 py-2 rounded-lg font-semibold",
						children: "Start Your Business"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden text-white p-2",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "2",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6h18M3 12h18M3 18h18" })
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden bg-black border-t border-white/10 px-4 py-4 space-y-3",
			children: [
				links.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: h,
					onClick: () => setOpen(false),
					className: "block text-white/80 py-2",
					children: l
				}, l)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "block text-center px-4 py-2 rounded-lg border border-white/20 text-white",
					children: "Login"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#pricing",
					onClick: () => setOpen(false),
					className: "btn-brand block text-center px-4 py-2 rounded-lg font-semibold text-white",
					children: "Start Your Business"
				})
			]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative pt-32 pb-24 overflow-hidden",
		style: { background: "var(--gradient-hero)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7E00FC]/20 blur-3xl animate-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-[#b366ff] animate-pulse" }), "Trusted by 800+ global founders"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight",
					children: [
						"Start Your U.S. Business —",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-clip-text text-transparent",
							style: { backgroundImage: "var(--gradient-brand)" },
							children: "Fast & Fully Online"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg text-white/70 max-w-2xl mx-auto",
					children: "Form your LLC, get your EIN, open a business bank account & stay compliant — all in one simple setup. Starting at $149 + state fees."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#pricing",
						className: "btn-brand btn-brand-hover px-8 py-4 rounded-xl font-semibold text-white",
						children: "Start Your Business →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						className: "px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:border-[#7E00FC] transition",
						children: "Explore Services"
					})]
				})
			]
		})]
	});
}
function Marquee({ items, label }) {
	const doubled = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-12 border-y border-white/10 bg-black",
		children: [label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-white/50 text-sm mb-8 uppercase tracking-widest",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-16 animate-marquee whitespace-nowrap",
				children: doubled.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-white/60 font-bold text-2xl px-6 hover:text-[#b366ff] transition",
					children: n
				}, i))
			})
		})]
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "py-24 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl sm:text-5xl font-black text-black",
					children: "Simple, Transparent Pricing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-black/60",
					children: "Transparent plans with no hidden fees or surprises."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingCard, {
					name: "Starter Package",
					price: "$149",
					features: starterFeatures
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingCard, {
					name: "Advance Package",
					price: "$249",
					features: [
						...advanceExtras,
						"— Everything in Starter Package —",
						...starterFeatures
					],
					popular: true
				})]
			})]
		})
	});
}
function PricingCard({ name, price, features, popular }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative rounded-2xl p-8 transition hover:-translate-y-1 ${popular ? "bg-black text-white border-2 border-[#7E00FC] shadow-[0_20px_60px_-20px_rgba(126,0,252,0.5)]" : "bg-white text-black border border-black/10"}`,
		children: [
			popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-3 left-1/2 -translate-x-1/2 btn-brand px-4 py-1 rounded-full text-xs font-bold",
				children: "Most Popular"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl font-black",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-5xl font-black",
					children: price
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: popular ? "text-white/60" : "text-black/60",
					children: "+ State Fee"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-3",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#b366ff] font-bold",
						children: "✓"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: popular ? "text-white/85" : "text-black/75",
						children: f
					})]
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contact",
				className: "btn-brand btn-brand-hover mt-8 block text-center py-3 rounded-xl font-semibold text-white",
				children: "Apply Now"
			})
		]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 bg-[#faf7ff]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl sm:text-5xl font-black text-black",
					children: "Everything You Need, One Place"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-black/60",
					children: "Complete business solutions with straightforward, fair pricing."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
				children: services.map(([icon, title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl p-6 border border-black/5 hover:border-[#7E00FC] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(126,0,252,0.3)] transition-all",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-xl bg-[#7E00FC]/10 grid place-items-center text-2xl mb-4",
							children: icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-black",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-black/60",
							children: desc
						})
					]
				}, title))
			})]
		})
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl sm:text-5xl font-black text-black",
					children: "How It Works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-black/60",
					children: "Get your U.S. business up and running in four simple steps."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: steps.map(([num, title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-white rounded-2xl p-6 border border-black/10 hover:border-[#7E00FC] transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-5xl font-black bg-clip-text text-transparent",
							style: { backgroundImage: "var(--gradient-brand)" },
							children: num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-bold text-black text-lg",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-black/60",
							children: desc
						})
					]
				}, num))
			})]
		})
	});
}
function Compliance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-[#faf7ff]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl sm:text-5xl font-black text-black",
						children: "Compliance & Tax Peace of Mind"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-black/60",
						children: "Running a U.S. business (even abroad) doesn't mean worrying about compliance, tax filings, or the status of your company. We handle all the paperwork so you can focus on growth."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12",
					children: compliance.map(([icon, title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl p-6 border border-black/5 hover:border-[#7E00FC] transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-xl bg-[#7E00FC]/10 grid place-items-center text-2xl mb-4",
								children: icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-black",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-black/60",
								children: desc
							})
						]
					}, title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-5 gap-4",
					children: complianceDetail.map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-black text-white rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-bold text-[#b366ff]",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/70",
							children: d
						})]
					}, t))
				})
			]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl sm:text-5xl font-black text-black",
						children: "Built for Global Founders"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-black/60",
						children: "We understand the unique challenges international entrepreneurs face when starting a U.S. business. That's why we've built a service specifically designed to make it simple, transparent, and stress-free."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-center gap-4 sm:gap-8 py-6 px-6 rounded-2xl bg-black text-white mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#b366ff] font-black text-xl",
									children: "800+"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/70 text-sm",
									children: "founders served"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#b366ff] font-black text-xl",
									children: "98%"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/70 text-sm",
									children: "success rate"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#b366ff] font-black text-xl",
									children: "24/7"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/70 text-sm",
									children: "dedicated support"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
					children: whyCards.map(([icon, title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl p-6 border border-black/10 hover:border-[#7E00FC] hover:-translate-y-1 transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-xl bg-[#7E00FC]/10 grid place-items-center text-2xl mb-4",
								children: icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-black",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-black/60",
								children: desc
							})
						]
					}, title))
				})
			]
		})
	});
}
function GlobalReach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-black text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl sm:text-5xl font-black",
						children: "Founders We Help Worldwide"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-white/70",
						children: "Trusted by entrepreneurs across the globe to start and scale their U.S. businesses."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-6 mb-12",
					children: flags.map(([f, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							children: f
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-white/80",
							children: name
						})]
					}, name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10",
					children: stats.map(([v, s, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
						value: v,
						suffix: s,
						label: l
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-white/60 mt-8",
					children: "Helping founders from 30+ countries start U.S. businesses"
				})
			]
		})
	});
}
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	const [cat, setCat] = (0, import_react.useState)("All");
	const cats = [
		"All",
		"Basics",
		"Compliance",
		"Banking"
	];
	const filtered = faqs.filter((f) => cat === "All" || f[0] === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 bg-[#faf7ff]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl sm:text-5xl font-black text-black",
						children: "Frequently Asked Questions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-black/60",
						children: "Got a question? Chances are, it's been asked before! Explore our collection of frequently asked questions."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2 mb-8",
					children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setCat(c);
							setOpen(null);
						},
						className: `px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "bg-[#7E00FC] text-white" : "bg-white text-black/70 border border-black/10 hover:border-[#7E00FC]"}`,
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: filtered.map(([category, q, a], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-xl border border-black/10 overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(open === i ? null : i),
							className: "w-full flex items-center justify-between gap-4 p-5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-black",
								children: q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-[#7E00FC] text-2xl transition-transform ${open === i ? "rotate-45" : ""}`,
								children: "+"
							})]
						}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-5 pb-5 text-sm text-black/70 leading-relaxed",
							children: a
						})]
					}, q))
				})
			]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl sm:text-5xl font-black text-black",
					children: "Reach Out, We're Here to Help!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-black/60",
					children: "Complete the form, and our team will promptly respond to your inquiry within our working hours!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#7E00FC]",
							children: "✉️"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@brixfilling.com",
							className: "text-black hover:text-[#7E00FC]",
							children: "hello@brixfilling.com"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#7E00FC]",
							children: "📞"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+923283449433",
							className: "text-black hover:text-[#7E00FC]",
							children: "+92 328 3449433"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-2xl h-56 flex items-center justify-center text-6xl",
					style: { background: "var(--gradient-brand)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🤝" })
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					alert("Thanks! We'll be in touch.");
				},
				className: "bg-[#faf7ff] rounded-2xl p-8 border border-black/5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-black",
							children: "Full Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							className: "mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-[#7E00FC] focus:outline-none",
							placeholder: "John Doe"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-black",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							className: "mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-[#7E00FC] focus:outline-none",
							placeholder: "you@example.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-black",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							className: "mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-[#7E00FC] focus:outline-none",
							placeholder: "Tell us about your business goals…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "btn-brand btn-brand-hover w-full py-3 rounded-xl font-semibold text-white",
						children: "Send Message"
					})
				]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-black text-white pt-16 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoUrl,
							alt: "BrixFiling",
							className: "h-8 w-auto object-contain brightness-0 invert sm:h-9 md:h-10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-white/60",
							children: "Simplifying US business formation for entrepreneurs worldwide. Your trusted partner in building global businesses."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 text-sm text-white/60 space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "brixfilling@gmail.com" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "+92 328 3449433" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Office Address, Quetta, Pakistan" })
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Services",
						items: [
							"LLC Formation",
							"EIN Registration",
							"Bank Account",
							"Registered Agent",
							"Business Address"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Company",
						items: [
							"About Us",
							"Pricing",
							"Process",
							"Contact"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Legal",
						items: [
							"Privacy Policy",
							"Terms & Conditions",
							"Refund Policy"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-white/50",
					children: "© 2026 Brixfilling. All rights reserved."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 text-white/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/brixfiling/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-[#b366ff] text-sm",
						children: "Instagram"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.facebook.com/profile.php?id=61579030334899",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-[#b366ff] text-sm",
						children: "Facebook"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 mt-6 text-xs text-white/40 text-center",
				children: "Brixfilling is a technology company. We are not a law firm, nor can we offer official legal advice."
			})
		]
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "font-bold mb-4",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2 text-sm text-white/60",
		children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#",
			className: "hover:text-[#b366ff]",
			children: i
		}) }, i))
	})] });
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				items: partners,
				label: "Our business partners and cooperating institutions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
				items: platforms,
				label: "Access Global Platforms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compliance, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalReach, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
