/* ============================================================
   TECH4CHANGE TrustBar — integrations and trust signals
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const integrations = [
  "Google Business",
  "Yelp",
  "Salesforce",
  "HubSpot",
  "QuickBooks",
  "Calendly",
  "Twilio",
  "Zapier",
  "Slack",
  "Stripe",
];

export default function TrustBar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ background: "#0D1628", borderTop: "1px solid rgba(220,38,38,0.08)", borderBottom: "1px solid rgba(220,38,38,0.08)" }}
    >
      <div
        ref={ref}
        className="container"
        style={{
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease",
        }}
      >
        {/*
          for future use:
          <p
            className="text-center mb-8 text-sm"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Integrates seamlessly with your existing tools
          </p>
        */}

        {/* Scrolling ticker */}
        <div className="relative overflow-hidden pt-2">
          <div
            className="flex gap-6 items-center"
            style={{
              animation: "scroll-left 20s linear infinite",
            }}
          >
            {[...integrations, ...integrations].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-shrink-0 px-5 py-2.5 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
