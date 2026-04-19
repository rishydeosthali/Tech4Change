/* ============================================================
   TECH4CHANGE About — Deep Space Tech / Mission Control
   Mission statement, values, and trust indicators
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Shield, Users, Lightbulb, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Small Business First",
    description:
      "We built Tech4Change specifically for small businesses — not as an afterthought, but as our entire focus. Every feature is designed for the constraints and opportunities of independent operators.",
  },
  {
    icon: Lightbulb,
    title: "Professional Build Quality",
    description:
      "No confusing handoff. We plan, design, build, and launch your website so you get a polished result without managing the technical details yourself.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "Your customer data is yours. We're SOC 2 Type II certified, GDPR compliant, and never sell or share your data. All communications are encrypted end-to-end.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership, Not Software",
    description:
      "We do not disappear after delivery. Every project is built with collaboration, revision rounds, and practical support so your site keeps working for your business.",
  },
];

const trustItems = [
  // for future use: { value: "500+", label: "Businesses Served" },
  { value: "4.9★", label: "Average Rating" },
  { value: "24hrs", label: "Average Setup Time" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function About() {
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
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: "#060B18" }}>
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      {/* Teal glow right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "60vw",
          height: "80vh",
          background: "radial-gradient(ellipse, rgba(220,38,38,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission */}
          <div
            ref={ref}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            <span className="section-label block mb-3">// Our Mission</span>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6"
              style={{ fontFamily: "Outfit, sans-serif", color: "#fff", lineHeight: 1.1 }}
            >
              Leveling the
              <br />
              <span className="text-teal-gradient">Playing Field</span>
            </h2>
            <p
              className="text-base mb-6"
              style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}
            >
              Great websites have become the front door for modern businesses, but too many
              small teams are still stuck with outdated pages, confusing builders, or no site at all.
            </p>
            <p
              className="text-base mb-8"
              style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}
            >
              Tech4Change was founded to give small businesses access to clean, effective
              websites that look professional, communicate clearly, and help turn attention into leads.
            </p>

            {/* Trust stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {trustItems.map((item) => (
                <div
                  key={item.value}
                  className="text-center p-4 rounded-lg"
                  style={{
                    background: "rgba(220,38,38,0.05)",
                    border: "1px solid rgba(220,38,38,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Outfit, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      color: "#DC2626",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "DM Sans, sans-serif",
                      marginTop: "0.2rem",
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="card-glow rounded-xl p-5"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.6s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(220,38,38,0.1)",
                      border: "1px solid rgba(220,38,38,0.2)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#DC2626" }} />
                  </div>
                  <h3
                    className="font-bold mb-2 text-base"
                    style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
                  >
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
