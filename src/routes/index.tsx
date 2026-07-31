import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
// Use the existing local asset so server-side rendering can resolve the logo reliably
import logo from "@/assets/Artboard 5 copy@4x.png";
const logoUrl = logo;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Brixfilling | US LLC Formation Company" },
      {
        name: "description",
        content:
          "Form your U.S. LLC or C-Corp online. EIN, ITIN, registered agent, and business bank account setup for international founders. Starting at $149.",
      },
      { property: "og:title", content: "Brixfilling | US LLC Formation Company" },
      {
        property: "og:description",
        content:
          "Fast, fully online U.S. business formation for global entrepreneurs. LLC, EIN, ITIN, bank account and compliance in one place.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
});

const partners = ["Payoneer", "Wise", "Airwallex", "PingPong", "Stripe", "PayPal"];
const platforms = ["Stripe", "PayPal", "Amazon", "eBay", "Airwallex", "Payoneer", "Wise", "Square"];

const starterFeatures = [
  "Name Check & Clearance",
  "Business Address – 1 Year",
  "Registered Agent – 1 Year",
  "Govt / State Filing Fee",
  "Articles of Incorporation",
  "Business Tax ID (EIN)",
  "U.S. Phone Number",
  "Business Bank Account Setup",
  "Digital Dashboard Access",
];

const advanceExtras = [
  "Business Address with Unique Suite",
  "Reseller Certificate / Seller Permit",
  "Dedicated IP VPS – 1 Month",
];

const services = [
  ["🏢", "Business Address", "Unique suite U.S. business address accepted by Amazon and major online marketplaces."],
  ["🆔", "ITIN Processing", "Obtain your ITIN through an IRS-recognized CAA for compliant filing."],
  ["™️", "Trademark", "Register your trademark to protect brand identity and secure exclusive commercial rights."],
  ["📄", "Reseller Permit", "Obtain an official reseller certificate to purchase products tax-free for resale."],
  ["🧾", "IRS Tax Filing", "Prepare and file federal tax obligations accurately with the IRS."],
  ["📊", "Annual Report", "Prepare and submit required annual franchise reports to maintain active state compliance."],
  ["📝", "Operating Agreement", "Custom LLC agreement defining ownership, management roles, and structure."],
  ["🏷️", "DBA Name", "File a Doing Business As name to legally operate under a new brand."],
  ["✏️", "Amendment", "Submit official amendments to update company name, members, or legal structure."],
  ["♻️", "Reinstatement", "Restore a dissolved company and regain good standing through required filings."],
  ["🗂️", "Dissolution", "Formally close your company with proper legal documentation."],
  ["🔢", "DUNS Number", "Apply for a D-U-N-S Number for business verification and vendor credibility."],
  ["📦", "Amazon Signup", "Complete Amazon seller account registration with guided expert assistance."],
  ["🔏", "Notarized UBO", "Notarized UBO document confirming beneficial ownership for banking needs."],
  ["🌐", "Website", "Custom-designed professional website to establish credibility and online presence."],
  ["🎨", "Logo Design", "Custom logo design to build brand identity, recognition, and trust."],
];

const steps = [
  ["01", "Choose Service", "Select the formation package that fits your business needs."],
  ["02", "Share Details", "Provide your information through our secure online platform."],
  ["03", "We Handle Filings", "Our experts prepare and submit all required documents."],
  ["04", "Start Your Business", "Receive your documents and begin operating your U.S. company."],
];

const compliance = [
  ["🧠", "Compliance Genius", "Automated compliance monitoring"],
  ["📅", "Annual Report Filing", "State-required annual filings"],
  ["📋", "BOI Report Requirement", "FinCEN BOI compliance"],
  ["💼", "Tax Filing Assistant", "Federal and state tax support"],
  ["✅", "Good Standing Status", "Maintain company compliance"],
  ["🤝", "Ongoing Guidance", "Expert compliance advice"],
];

const complianceDetail = [
  ["Annual State Filings", "We track deadlines and file your annual reports on time in every state where you're registered."],
  ["Federal Tax Returns", "Guided preparation and filing of federal returns tailored to your entity type."],
  ["FinCEN BOI Reports", "Full BOI reporting support to keep your entity compliant with new federal rules."],
  ["Ownership Maintenance", "Update ownership, addresses and structure with correctly filed amendments."],
  ["Ongoing Guidance", "Direct access to specialists — not bots — whenever compliance questions come up."],
];

const whyCards = [
  ["🌍", "Non-Resident Friendly", "Specialized services designed for international founders. No U.S. address or SSN required."],
  ["💎", "Transparent Pricing", "Clear, upfront pricing with no hidden fees. Know exactly what you'll pay before you start."],
  ["🎧", "Dedicated Support", "Real human support from compliance experts. Get answers when you need them most."],
  ["🏦", "Fintech & Banking", "Partnerships with top fintech providers for seamless business banking setup."],
  ["🧭", "Personal Guidance", "Not automated bots — real specialists who understand your unique business needs."],
];

const flags = [
  ["🇵🇰", "Pakistan"], ["🇦🇪", "UAE"], ["🇬🇧", "United Kingdom"], ["🇮🇳", "India"],
  ["🇪🇺", "Europe"], ["🇦🇺", "Australia"], ["🇩🇪", "Germany"], ["🇨🇦", "Canada"],
];

const stats: [number, string, string][] = [
  [800, "+", "Founders Served"],
  [500, "+", "Companies Formed"],
  [200, "+", "ITINs Processed"],
  [50, "+", "Trademarks Filed"],
];

const testimonials = [
  ["Ayesha K.", "Karachi, PK", 5, "Brixfilling made my Wyoming LLC setup effortless. EIN arrived faster than promised and the dashboard kept me updated the whole time."],
  ["Omar S.", "Dubai, UAE", 5, "I got my LLC, EIN and Mercury bank account without ever visiting the US. The team answered every question on WhatsApp within minutes."],
  ["Ravi P.", "Bangalore, IN", 5, "The ITIN process was smooth thanks to their CAA. Highly recommend for anyone selling on Amazon US as a non-resident."],
  ["Sarah M.", "London, UK", 4, "Transparent pricing, no surprises. Formation was quick and the operating agreement they drafted was exactly what my accountant needed."],
  ["Bilal R.", "Lahore, PK", 5, "Best decision I made this year. Their reseller permit add-on unlocked tax-free purchasing for my dropshipping store."],
  ["Daniel W.", "Berlin, DE", 5, "Professional, responsive and clearly knowledgeable about non-resident compliance. Annual report filed without me lifting a finger."],
  ["Fatima N.", "Islamabad, PK", 5, "Loved the dashboard. Every document, every step, one place. My bank account setup took just a few extra days."],
  ["Chris H.", "Toronto, CA", 5, "Reliable partner for our C-Corp formation. Stripe onboarding was painless once they finished the paperwork."],
];

const faqs = [
  ["Basics", "Can a non-US resident form an LLC in the United States?", "Yes. Non-US residents can legally form and fully own a U.S. LLC without visiting the United States. We assist international founders throughout the entire formation process."],
  ["Basics", "Which state is best for LLC formation for foreigners?", "There is no single best state. Wyoming, New Mexico, Texas, Florida, and Montana are commonly chosen based on business activity."],
  ["Compliance", "Can a non-resident apply for an ITIN?", "Yes. Brixfilling assists non-residents with ITIN applications through an IRS-authorized Certified Acceptance Agent to support U.S. tax compliance."],
  ["Basics", "How long does it take to form a U.S. LLC?", "State approval usually takes 2 to 7 business days, depending on the state. EIN issuance typically takes 7 to 15 business days and may take longer during peak IRS processing periods."],
  ["Compliance", "Can I make changes to my company details after formation?", "Yes. Changes such as company name, ownership, or address can be updated after formation through official amendment filings, and these changes involve additional state fees and service charges."],
];

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;

    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, visible);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-black text-white">
        {n}
        <span className="text-[#b366ff]">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
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
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-black/90 backdrop-blur border-b border-white/10" : "bg-black/40 backdrop-blur-sm"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logoUrl} alt="BrixFiling" className="h-7 w-auto object-contain brightness-0 invert sm:h-8 md:h-9" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="text-sm text-white/80 hover:text-[#b366ff] transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm px-4 py-2 rounded-lg border border-white/20 text-white hover:border-[#7E00FC] hover:text-[#b366ff] transition">Login</a>
          <a href="#pricing" className="btn-brand btn-brand-hover text-sm px-4 py-2 rounded-lg font-semibold">Start Your Business</a>
        </div>
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 space-y-3">
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="block text-white/80 py-2">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-lg border border-white/20 text-white">Login</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-brand block text-center px-4 py-2 rounded-lg font-semibold text-white">Start Your Business</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#7E00FC]/20 blur-3xl animate-glow" />
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-[#b366ff] animate-pulse" />
          Trusted by 800+ global founders
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
          Start Your U.S. Business —<br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>Fast & Fully Online</span>
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          Form your LLC, get your EIN, open a business bank account & stay compliant — all in one simple setup. Starting at $149 + state fees.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-brand btn-brand-hover px-8 py-4 rounded-xl font-semibold text-white">Start Your Business →</a>
          <a href="#services" className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:border-[#7E00FC] transition">Explore Services</a>
        </div>
      </div>
    </section>
  );
}

function Marquee({ items, label }: { items: string[]; label?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="py-12 border-y border-white/10 bg-black">
      {label && <p className="text-center text-white/50 text-sm mb-8 uppercase tracking-widest">{label}</p>}
      <div className="overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {doubled.map((n, i) => (
            <div key={i} className="text-white/60 font-bold text-2xl px-6 hover:text-[#b366ff] transition">{n}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-black/60">Transparent plans with no hidden fees or surprises.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <PricingCard name="Starter Package" price="$149" features={starterFeatures} />
          <PricingCard name="Advance Package" price="$249" features={[...advanceExtras, "— Everything in Starter Package —", ...starterFeatures]} popular />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ name, price, features, popular }: { name: string; price: string; features: string[]; popular?: boolean }) {
  return (
    <div className={`relative rounded-2xl p-8 transition hover:-translate-y-1 ${popular ? "bg-black text-white border-2 border-[#7E00FC] shadow-[0_20px_60px_-20px_rgba(126,0,252,0.5)]" : "bg-white text-black border border-black/10"}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 btn-brand px-4 py-1 rounded-full text-xs font-bold">Most Popular</div>
      )}
      <h3 className="text-2xl font-black">{name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-black">{price}</span>
        <span className={popular ? "text-white/60" : "text-black/60"}>+ State Fee</span>
      </div>
      <ul className="mt-8 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm">
            <span className="text-[#b366ff] font-bold">✓</span>
            <span className={popular ? "text-white/85" : "text-black/75"}>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="btn-brand btn-brand-hover mt-8 block text-center py-3 rounded-xl font-semibold text-white">Apply Now</a>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-[#faf7ff]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black">Everything You Need, One Place</h2>
          <p className="mt-4 text-lg text-black/60">Complete business solutions with straightforward, fair pricing.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(([icon, title, desc]) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-black/5 hover:border-[#7E00FC] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(126,0,252,0.3)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#7E00FC]/10 grid place-items-center text-2xl mb-4">{icon}</div>
              <h3 className="font-bold text-black">{title}</h3>
              <p className="mt-2 text-sm text-black/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black">How It Works</h2>
          <p className="mt-4 text-lg text-black/60">Get your U.S. business up and running in four simple steps.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(([num, title, desc]) => (
            <div key={num} className="relative bg-white rounded-2xl p-6 border border-black/10 hover:border-[#7E00FC] transition">
              <div className="text-5xl font-black bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-brand)" }}>{num}</div>
              <h3 className="mt-4 font-bold text-black text-lg">{title}</h3>
              <p className="mt-2 text-sm text-black/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const items = [
    ["Company Formation", "Complete", true],
    ["EIN Registration", "Complete", true],
    ["Bank Account", "Pending", false],
    ["U.S. Phone Number", "Complete", true],
  ] as const;
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black">Your Business, One Dashboard</h2>
          <p className="mt-4 text-lg text-white/70">Track your formation progress, access documents, and manage your business from our intuitive client dashboard.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2 shadow-[0_40px_80px_-20px_rgba(126,0,252,0.4)]">
          <div className="rounded-xl bg-[#0e0e12] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="ml-4 text-xs text-white/50 bg-white/5 px-3 py-1 rounded-md">dashboard.brixfilling.com</div>
            </div>
            <div className="grid md:grid-cols-[220px_1fr] min-h-[440px]">
              <aside className="border-r border-white/10 p-4 space-y-1 bg-black/30 text-sm">
                {["Dashboard", "Company", "Documents", "Mailroom", "Addons", "Settings"].map((n, i) => (
                  <div key={n} className={`px-3 py-2 rounded-lg ${i === 0 ? "bg-[#7E00FC]/20 text-[#b366ff]" : "text-white/60 hover:text-white"}`}>{n}</div>
                ))}
              </aside>
              <main className="p-6">
                <h3 className="text-xl font-bold">Welcome back, John! 👋</h3>
                <p className="text-sm text-white/60">Here's your formation progress</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {items.map(([label, status, done]) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-sm text-white/60">{label}</div>
                      <div className={`mt-1 font-bold ${done ? "text-green-400" : "text-yellow-400"}`}>
                        {done ? "✓" : "⏳"} {status}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-white/70">
                    <span>3 of 4 steps completed</span>
                    <span className="font-bold">75%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-3/4 rounded-full" style={{ background: "var(--gradient-brand)" }} />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="py-24 bg-[#faf7ff]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-black">Compliance & Tax Peace of Mind</h2>
          <p className="mt-4 text-lg text-black/60">Running a U.S. business (even abroad) doesn't mean worrying about compliance, tax filings, or the status of your company. We handle all the paperwork so you can focus on growth.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {compliance.map(([icon, title, desc]) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-black/5 hover:border-[#7E00FC] transition">
              <div className="w-12 h-12 rounded-xl bg-[#7E00FC]/10 grid place-items-center text-2xl mb-4">{icon}</div>
              <h3 className="font-bold text-black">{title}</h3>
              <p className="mt-1 text-sm text-black/60">{desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {complianceDetail.map(([t, d]) => (
            <div key={t} className="bg-black text-white rounded-2xl p-5">
              <h4 className="font-bold text-[#b366ff]">{t}</h4>
              <p className="mt-2 text-sm text-white/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black">Built for Global Founders</h2>
          <p className="mt-4 text-lg text-black/60">We understand the unique challenges international entrepreneurs face when starting a U.S. business. That's why we've built a service specifically designed to make it simple, transparent, and stress-free.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-6 px-6 rounded-2xl bg-black text-white mb-12">
          <div className="text-center"><span className="text-[#b366ff] font-black text-xl">800+</span> <span className="text-white/70 text-sm">founders served</span></div>
          <div className="text-center"><span className="text-[#b366ff] font-black text-xl">98%</span> <span className="text-white/70 text-sm">success rate</span></div>
          <div className="text-center"><span className="text-[#b366ff] font-black text-xl">24/7</span> <span className="text-white/70 text-sm">dedicated support</span></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyCards.map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl p-6 border border-black/10 hover:border-[#7E00FC] hover:-translate-y-1 transition">
              <div className="w-12 h-12 rounded-xl bg-[#7E00FC]/10 grid place-items-center text-2xl mb-4">{icon}</div>
              <h3 className="font-bold text-black">{title}</h3>
              <p className="mt-2 text-sm text-black/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalReach() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-black">Founders We Help Worldwide</h2>
          <p className="mt-4 text-lg text-white/70">Trusted by entrepreneurs across the globe to start and scale their U.S. businesses.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {flags.map(([f, name]) => (
            <div key={name} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5">
              <span className="text-2xl">{f}</span>
              <span className="text-sm text-white/80">{name}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10">
          {stats.map(([v, s, l]) => <StatCounter key={l} value={v} suffix={s} label={l} />)}
        </div>
        <p className="text-center text-white/60 mt-8">Helping founders from 30+ countries start U.S. businesses</p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-[#faf7ff]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl sm:text-5xl font-black text-black">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-black/60">Reviews from Google and Trustpilot, verified by our team.</p>
        </div>
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <div className="px-4 py-2 rounded-full bg-white border border-black/10 text-sm"><span className="font-bold text-[#00b67a]">Trustpilot</span> ★ 4.9/5</div>
          <div className="px-4 py-2 rounded-full bg-white border border-black/10 text-sm"><span className="font-bold text-[#4285f4]">Google Reviews</span> ★ 4.8/5</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(([name, loc, rating, text]) => (
            <div key={name as string} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full grid place-items-center text-white font-bold" style={{ background: "var(--gradient-brand)" }}>
                  {(name as string).split(" ").map((s) => s[0]).join("")}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-black truncate">{name}</div>
                  <div className="text-xs text-black/50">{loc}</div>
                </div>
              </div>
              <div className="text-yellow-500 mt-3 text-sm">{"★".repeat(rating as number)}{"☆".repeat(5 - (rating as number))}</div>
              <p className="mt-3 text-sm text-black/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppReviews() {
  const msgs = [
    ["Ahmed", "Thanks Brixfilling team! LLC approved in 3 days 🚀"],
    ["Nadia", "Just got my EIN letter. You guys are amazing!"],
    ["Kamran", "Mercury account approved. Highly recommended!"],
    ["Zara", "Reseller permit came through. Now sourcing tax-free ✨"],
    ["Hassan", "Best money I spent this year. Smooth process."],
    ["Ali", "ITIN approved by IRS. Thank you for guiding me!"],
  ];
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black">WhatsApp Reviews</h2>
          <p className="mt-4 text-lg text-black/60">Direct messages from our satisfied customers worldwide</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {msgs.map(([name, msg]) => (
            <div key={name} className="bg-[#e5ffe0]/40 rounded-2xl p-5 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-600 text-xl">💬</span>
                <span className="font-bold text-black">{name}</span>
                <span className="ml-auto text-xs text-black/40">via WhatsApp</span>
              </div>
              <div className="bg-white rounded-xl p-3 text-sm text-black/80 shadow-sm">{msg}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [cat, setCat] = useState<string>("All");
  const cats = ["All", "Basics", "Compliance", "Banking"];
  const filtered = faqs.filter((f) => cat === "All" || f[0] === cat);
  return (
    <section className="py-24 bg-[#faf7ff]">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-black">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-black/60">Got a question? Chances are, it's been asked before! Explore our collection of frequently asked questions.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCat(c);
                setOpen(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "bg-[#7E00FC] text-white" : "bg-white text-black/70 border border-black/10 hover:border-[#7E00FC]"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="space-y-3">
          {filtered.map(([category, q, a], i) => (
            <div key={q} className="bg-white rounded-xl border border-black/10 overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-black">{q}</span>
                <span className={`text-[#7E00FC] text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-black/70 leading-relaxed">{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black text-black">Reach Out, We're Here to Help!</h2>
          <p className="mt-4 text-lg text-black/60">Complete the form, and our team will promptly respond to your inquiry within our working hours!</p>
          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-3"><span className="text-[#7E00FC]">✉️</span><a href="mailto:hello@brixfilling.com" className="text-black hover:text-[#7E00FC]">hello@brixfilling.com</a></div>
            <div className="flex items-center gap-3"><span className="text-[#7E00FC]">📞</span><a href="tel:+923283449433" className="text-black hover:text-[#7E00FC]">+92 328 3449433</a></div>
          </div>
          <div className="mt-8 rounded-2xl h-56 flex items-center justify-center text-6xl" style={{ background: "var(--gradient-brand)" }}>
            <span>🤝</span>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}
          className="bg-[#faf7ff] rounded-2xl p-8 border border-black/5 space-y-4"
        >
          <label className="block">
            <span className="text-sm font-medium text-black">Full Name</span>
            <input required className="mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-[#7E00FC] focus:outline-none" placeholder="John Doe" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-black">Email</span>
            <input required type="email" className="mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-[#7E00FC] focus:outline-none" placeholder="you@example.com" />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-black">Message</span>
            <textarea required rows={5} className="mt-1 w-full px-4 py-3 rounded-xl border border-black/10 bg-white focus:border-[#7E00FC] focus:outline-none" placeholder="Tell us about your business goals…" />
          </label>
          <button type="submit" className="btn-brand btn-brand-hover w-full py-3 rounded-xl font-semibold text-white">Send Message</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logoUrl} alt="BrixFiling" className="h-8 w-auto object-contain brightness-0 invert sm:h-9 md:h-10" />
          <p className="mt-3 text-sm text-white/60">Simplifying US business formation for entrepreneurs worldwide. Your trusted partner in building global businesses.</p>
          <div className="mt-4 text-sm text-white/60 space-y-1">
            <div>brixfilling@gmail.com</div>
            <div>+92 328 3449433</div>
            <div>Office Address, Quetta, Pakistan</div>
          </div>
        </div>
        <FooterCol title="Services" items={["LLC Formation", "EIN Registration", "Bank Account", "Registered Agent", "Business Address"]} />
        <FooterCol title="Company" items={["About Us", "Pricing", "Process", "Contact"]} />
        <FooterCol title="Legal" items={["Privacy Policy", "Terms & Conditions", "Refund Policy"]} />
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="text-xs text-white/50">© 2026 Brixfilling. All rights reserved.</div>
        <div className="flex gap-4 text-white/70">
          <a href="https://www.instagram.com/brixfiling/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b366ff] text-sm">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61579030334899" target="_blank" rel="noopener noreferrer" className="hover:text-[#b366ff] text-sm">Facebook</a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-6 text-xs text-white/40 text-center">
        Brixfilling is a technology company. We are not a law firm, nor can we offer official legal advice.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-white/60">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-[#b366ff]">{i}</a></li>)}
      </ul>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee items={partners} label="Our business partners and cooperating institutions" />
      <Marquee items={platforms} label="Access Global Platforms" />
      <Pricing />
      <Services />
      <HowItWorks />
      <Compliance />
      <WhyUs />
      <GlobalReach />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
