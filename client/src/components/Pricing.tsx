/* ============================================================
   TECH4CHANGE Pricing — Deep Space Tech / Mission Control
   Engagement cards for voice agents and AI workflows
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Check, Phone, Workflow } from "lucide-react";

const offers = [
  {
    icon: Phone,
    title: "Voice Agents",
    label: "Communications",
    detail: "Scoped to the calls and messages you want covered.",
    includes: [
      "Answer, qualify, book, and follow up",
      "Inbound and outbound conversations",
      "Routing to the right person",
      "Handoff with the full context",
      "Adjustments after real calls",
    ],
    cta: "Talk Through Your Calls",
  },
  {
    icon: Workflow,
    title: "AI Workflows",
    label: "Process",
    detail: "Scoped to the steps that stall after the conversation.",
    includes: [
      "Trigger from a call, text, or form",
      "Route to a booking, ticket, or person",
      "Confirm, update records, and notify",
      "Pause for a person, then resume",
      "Close the loop when the step is done",
    ],
    cta: "Talk Through Your Process",
  },
];

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const accent = "#DC2626";

  const cardBase = (delay: string) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `all 0.6s ease ${delay}`,
  });

  return (
    <section id="pricing" className="py-24 relative" style={{ background: "#060B18" }}>
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

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
            Simple Pricing,
            <br />
            <span className="text-teal-gradient">No Extra Layers</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-base"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            Two engagements. Pricing is scoped after we map the conversations and the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.title}
                className="rounded-xl overflow-hidden flex flex-col h-full"
                style={{
                  background: "rgba(13, 22, 40, 0.8)",
                  border: "1px solid rgba(220,38,38,0.15)",
                  ...cardBase(`${0.05 + i * 0.08}s`),
                }}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
                    >
                      <Icon size={22} style={{ color: accent }} />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-extrabold"
                        style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
                      >
                        {offer.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-6 pb-6" style={{ borderBottom: "1px solid rgba(220,38,38,0.12)" }}>
                    <p
                      className="text-sm mb-2"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: accent,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {offer.label}
                    </p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                      {offer.detail}
                    </p>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {offer.includes.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check size={15} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                        <span style={{ color: "rgba(255,255,255,0.7)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full mt-8 py-3.5 rounded-md text-sm font-bold transition-all duration-200 btn-ghost-teal"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {offer.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="text-center mt-10 text-sm max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "DM Sans, sans-serif" }}
        >
          Direct collaboration from the first map of the process through daily use
        </p>
      </div>
    </section>
  );
}
