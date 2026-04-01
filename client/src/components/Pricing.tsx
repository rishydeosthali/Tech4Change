/* ============================================================
   TECH4CHANGE Pricing — Deep Space Tech / Mission Control
   3-tier pricing with featured plan glow effect
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$297",
    period: "/month",
    tagline: "Perfect for solo operators",
    description: "Everything you need to get AI working for your business from day one.",
    features: [
      "AI Voice Agent (up to 500 calls/mo)",
      "Review request automation",
      "Basic workflow automation (5 workflows)",
      "Email & SMS notifications",
      "Standard analytics dashboard",
      "Email support",
    ],
    // for future use: cta: "Start Free Trial",
    cta: "Schedule Free AI Consultation",
    featured: false,
    accent: "#DC2626",
  },
  {
    name: "Growth",
    price: "$597",
    period: "/month",
    tagline: "For growing businesses",
    description: "Advanced AI capabilities to scale your operations and reputation.",
    features: [
      "AI Voice Agent (unlimited calls)",
      "Review augmentation + AI responses",
      "Advanced automation (25 workflows)",
      "CRM & calendar integrations",
      "Real-time analytics + forecasting",
      "Priority support + monthly review",
      "Custom AI voice & personality",
      "Multi-location support",
    ],
    // for future use: cta: "Start Free Trial",
    cta: "Schedule Free AI Consultation",
    featured: true,
    accent: "#DC2626",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For multi-location businesses",
    description: "White-glove AI deployment with dedicated support and custom integrations.",
    features: [
      "Everything in Growth",
      "Unlimited locations",
      "Custom AI model training",
      "Dedicated account manager",
      "Custom integrations & API access",
      "SLA guarantee (99.9% uptime)",
      "On-site onboarding available",
      "White-label options",
    ],
    cta: "Contact Sales",
    featured: false,
    accent: "#EF4444",
  },
];

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-24 relative" style={{ background: "#060B18" }}>
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      {/* Amber glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: "60vw",
          height: "60vw",
          maxWidth: 700,
          maxHeight: 700,
          background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="section-label block mb-3">// Pricing Plans</span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
          >
            Transparent Pricing,
            <br />
            <span className="text-teal-gradient">Real ROI</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            No setup fees.
          </p>
          <p
            className="max-w-xl mx-auto text-base mt-3"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            Pay only after we implement your AI infrastructure.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className="rounded-xl overflow-hidden flex flex-col relative"
              style={{
                background: plan.featured
                  ? "linear-gradient(160deg, rgba(220,38,38,0.08) 0%, rgba(13,22,40,0.95) 50%)"
                  : "rgba(13, 22, 40, 0.8)",
                border: plan.featured
                  ? "1px solid rgba(220,38,38,0.4)"
                  : "1px solid rgba(220,38,38,0.1)",
                boxShadow: plan.featured
                  ? "0 0 40px rgba(220,38,38,0.12), 0 8px 32px rgba(0,0,0,0.4)"
                  : "none",
                opacity: visible ? 1 : 0,
                transform: visible
                  ? plan.featured ? "translateY(-8px)" : "translateY(0)"
                  : "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}
            >
              {plan.featured && (
                <div
                  className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold"
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    background: "rgba(220,38,38,0.15)",
                    color: "#DC2626",
                    letterSpacing: "0.1em",
                  }}
                >
                  <Zap size={12} fill="currentColor" />
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Plan header */}
                <div className="mb-6">
                  <span
                    className="section-label block mb-2"
                    style={{ color: plan.accent }}
                  >
                    {plan.tagline}
                  </span>
                  <h3
                    className="text-2xl font-extrabold mb-1"
                    style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-3">
                    <span
                      style={{
                        fontFamily: "Outfit, sans-serif",
                        fontWeight: 800,
                        fontSize: "2.5rem",
                        color: plan.accent,
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "0.9rem",
                          paddingBottom: "0.3rem",
                        }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: plan.accent }}
                      />
                      <span style={{ color: "rgba(255,255,255,0.7)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3.5 rounded-md text-sm font-bold transition-all duration-200 ${
                    plan.featured ? "btn-teal" : plan.accent === "#EF4444" ? "btn-amber" : "btn-ghost-teal"
                  }`}
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p
          className="text-center mt-10 text-sm"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "DM Sans, sans-serif" }}
        >
          All plans include onboarding support · SOC 2 compliant · 99.9% uptime SLA
        </p>
      </div>
    </section>
  );
}
