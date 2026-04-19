/* ============================================================
   TECH4CHANGE Contact — Deep Space Tech / Mission Control
   Lead capture form with business type selection (FormSubmit POST)
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, Instagram } from "lucide-react";

const businessTypes = [
  "Barbershop / Salon",
  "HVAC / Home Services",
  "Real Estate",
  "Local Service Provider",
  "Professional Services",
  "Retail / E-commerce",
  "Other",
];

const FORMSUBMIT_ACTION = "https://formsubmit.co/tech4change76@gmail.com";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [thanksUrl, setThanksUrl] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setThanksUrl(`${window.location.origin}/consultation-thanks`);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(220,38,38,0.15)",
    borderRadius: "0.5rem",
    color: "#fff",
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    fontFamily: "DM Sans, sans-serif",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "#0D1628" }}>
      {/* Glow effects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "80vw",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(220,38,38,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            <span className="section-label block mb-3">// Get Started</span>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6"
              style={{ fontFamily: "Outfit, sans-serif", color: "#fff", lineHeight: 1.1 }}
            >
              Ready to Upgrade
              <br />
              <span className="text-teal-gradient">Your Website?</span>
            </h2>
            <p
              className="text-base mb-10"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}
            >
              Fill out the form and a Tech4Change specialist will reach out within 24 hours to discuss your business,
              website goals, and the kind of online presence you want to build. We primarily work with
              barbershops, HVAC companies, real estate teams, and local service providers.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "(737)-235-3170", href: "tel:7372353170" },
                { icon: Mail, label: "Email", value: "tech4change76@gmail.com", href: "mailto:tech4change76@gmail.com" },
                { icon: Instagram, label: "Instagram", value: "@tech.4.change1", href: "https://www.instagram.com/tech.4.change1/" },
                { icon: MapPin, label: "Serving", value: "All 50 States · Remote Setup" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(220,38,38,0.08)",
                        border: "1px solid rgba(220,38,38,0.2)",
                      }}
                    >
                      <Icon size={18} style={{ color: "#DC2626" }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.65rem",
                          color: "rgba(220,38,38,0.6)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                      </div>
                      {("href" in item) ? (
                        <a
                          href={item.href}
                          onClick={(e) => {
                            if (item.label === "Phone" && item.href) {
                              e.preventDefault();
                              window.location.href = item.href;
                            }
                          }}
                          style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div
            id="consultation-form"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(13,22,40,0.9)",
                border: "1px solid rgba(220,38,38,0.15)",
                boxShadow: "0 0 40px rgba(220,38,38,0.06)",
              }}
            >
              <form
                action={FORMSUBMIT_ACTION}
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="New Website Consultation Request" />
                <input type="hidden" name="_captcha" value="false" />
                {thanksUrl ? <input type="hidden" name="_next" value={thanksUrl} /> : null}

                <div>
                  <label
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.15)")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block mb-1.5 text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Email *
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="jane@yourbusiness.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.15)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1.5 text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.15)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Business Name *
                  </label>
                  <input
                    required
                    name="business"
                    type="text"
                    placeholder="Your Business Name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.15)")}
                  />
                </div>

                <div>
                  <label
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    Business Type *
                  </label>
                  <select
                    required
                    name="business_type"
                    defaultValue=""
                    style={{ ...inputStyle, appearance: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.15)")}
                  >
                    <option value="" disabled style={{ background: "#0D1628" }}>
                      Select your industry
                    </option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#0D1628" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block mb-1.5 text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif" }}
                  >
                    What do you want your website to help with?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="e.g., Need a new site, want more leads, current website feels outdated..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(220,38,38,0.15)")}
                  />
                </div>

                <button type="submit" className="btn-teal w-full py-4 rounded-md text-base flex items-center justify-center gap-2">
                  Get My Free Website Consultation
                  <Send size={16} />
                </button>

                <p
                  className="text-center text-xs"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}
                >
                  No spam. No credit card. Just a conversation about your business.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
