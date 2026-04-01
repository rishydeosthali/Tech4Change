/* ============================================================
   TECH4CHANGE How It Works — Deep Space Tech / Mission Control
   3-step process with numbered steps and connecting lines
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { MessageSquare, Settings2, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us About Your Business",
    description:
      "Answer a few simple questions about your business type, customer volume, and goals. No technical knowledge needed — our onboarding takes under 15 minutes.",
    detail: "We configure your AI based on your industry, tone of voice, and specific workflows.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "We Deploy Your AI Stack",
    // for future use: description included "… integrated with your existing tools."
    description:
      "Our team sets up your AI voice agent, review system, and automation workflows — fully customized to your brand.",
    detail: "Live within 48 hours. We handle all the technical setup, testing, and training.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch Your Business Grow",
    description:
      "Your AI works around the clock — answering calls, collecting reviews, and automating tasks. Track everything in your real-time dashboard.",
    detail: "Monthly performance reviews and continuous AI optimization included.",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      style={{ background: "#0D1628" }}
    >
      {/* Teal glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "80vw",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="section-label block mb-3">// The Process</span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
          >
            Up and Running in{" "}
            <span className="text-teal-gradient">48 Hours</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            Three simple steps from sign-up to a fully operational AI-powered business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-12 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(220,38,38,0.3) 20%, rgba(220,38,38,0.3) 80%, transparent)",
              top: "3.5rem",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
                      style={{
                        background: "rgba(220,38,38,0.1)",
                        border: "1px solid rgba(220,38,38,0.3)",
                        boxShadow: "0 0 24px rgba(220,38,38,0.15)",
                      }}
                    >
                      <Icon size={24} style={{ color: "#DC2626" }} />
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        background: "#DC2626",
                        color: "#060B18",
                        fontSize: "0.6rem",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
                  >
                    {step.description}
                  </p>
                  <p
                    className="text-xs px-3 py-2 rounded-md"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      color: "#DC2626",
                      background: "rgba(220,38,38,0.06)",
                      border: "1px solid rgba(220,38,38,0.15)",
                    }}
                  >
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.6s ease 0.5s",
          }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-teal px-8 py-4 rounded-md text-base inline-flex items-center gap-2"
          >
            Get Started in 15 Minutes
          </button>
          <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "DM Sans, sans-serif" }}>
            No credit card required · Pay after we implement your AI infrastructure
          </p>
        </div>
      </div>
    </section>
  );
}
