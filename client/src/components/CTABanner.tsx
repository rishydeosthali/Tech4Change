/* ============================================================
   TECH4CHANGE CTA Banner — Deep Space Tech / Mission Control
   Full-width call-to-action section before footer
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
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
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "#060B18" }}>
      {/* Dramatic teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(220,38,38,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div
        ref={ref}
        className="container relative z-10 text-center px-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}
      >
        <span className="section-label block mb-6 md:mb-8">// Start Today</span>
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-8 md:mb-12 mx-auto"
          style={{
            fontFamily: "Outfit, sans-serif",
            color: "#fff",
            lineHeight: 1.12,
            maxWidth: "800px",
          }}
        >
          Ready to Launch a Site
          <br />
          <span className="text-teal-gradient">That Feels Professional?</span>
        </h2>
        <p
          className="text-base md:text-lg mb-12 md:mb-16 mx-auto max-w-xl px-2"
          style={{
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.9,
          }}
        >
          Build a website that looks credible, works on every screen, and helps visitors become customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center items-center">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-amber px-10 py-4 md:py-5 rounded-md text-base flex items-center gap-2.5"
          >
            {/* for future use: Start Free 14-Day Trial */}
            Schedule Free Website Consultation
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost-teal px-10 py-4 md:py-5 rounded-md text-base"
          >
            View Pricing
          </button>
        </div>

        <p
          className="mt-8 md:mt-12 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}
        >
          No pressure · Fast turnaround · Built around your business goals
        </p>
      </div>
    </section>
  );
}
