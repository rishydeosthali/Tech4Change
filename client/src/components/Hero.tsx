/* ============================================================
   TECH4CHANGE Hero — Deep Space Tech / Mission Control
   Full-viewport hero with animated dot grid, radial glow,
   dramatic headline, and dual CTAs
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460370702/ecG8FietAg7LHPWEcKYES2/hero-bg-c8iCZrhbxNhgD9Vk4xH9hZ.webp";

const stats = [
  { value: "100%", label: "Mobile-Friendly Builds" },
  { value: "24/7", label: "Lead Capture Working for You" },
  // for future use: { value: "500+", label: "Businesses Empowered" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToShowcase = () => {
    document.querySelector("#showcase")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#060B18" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 z-0 dot-grid"
        style={{ opacity: 0.4 }}
      />

      {/* Radial glow center-left */}
      <div
        className="absolute z-0"
        style={{
          top: "30%",
          left: "-10%",
          width: "70vw",
          height: "70vw",
          maxWidth: 900,
          maxHeight: 900,
          background: "radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Amber glow top-right */}
      <div
        className="absolute z-0"
        style={{
          top: "-10%",
          right: "-5%",
          width: "50vw",
          height: "50vw",
          maxWidth: 600,
          maxHeight: 600,
          background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Dark bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 h-48"
        style={{ background: "linear-gradient(to bottom, transparent, #060B18)" }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 mb-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            <span className="live-dot" />
            <span className="section-label">Professional Websites for Small Business</span>
          </div>

          {/* Main headline */}
          <h1
            className="mb-8 leading-[1.05]"
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              color: "#fff",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            Build Your Business
            <br />
            <span className="text-teal-gradient">A Better Website</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.9)" }}>That Actually Converts</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-12 max-w-2xl"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.35s",
            }}
          >
            Tech4Change designs and builds clean, modern websites for local businesses
            that want to look credible, load fast, and turn visitors into real leads.
            We especially help barbershops, HVAC companies, real estate brands, and local service providers.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 md:gap-5 mb-18 md:mb-20"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.5s",
            }}
          >
            <button
              onClick={scrollToContact}
              className="btn-amber flex items-center gap-2 px-7 py-3.5 rounded-md text-base"
            >
              {/* for future use: Start Free Trial */}
              Schedule Free Website Consultation
              <ArrowRight size={18} />
            </button>
            <button
              onClick={scrollToServices}
              className="btn-ghost-teal flex items-center gap-2 px-7 py-3.5 rounded-md text-base"
            >
              <Play size={16} fill="currentColor" />
              See How It Works
            </button>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.65s",
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col rounded-xl p-5 md:p-6"
                style={{
                  background: "rgba(13,22,40,0.58)",
                  border: "1px solid rgba(220,38,38,0.12)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "#DC2626",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                      marginTop: "0.45rem",
                      lineHeight: 1.4,
                    }}
                  >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToShowcase}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
        style={{ color: "#DC2626" }}
      >
        <span className="section-label text-xs">See real sites</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
