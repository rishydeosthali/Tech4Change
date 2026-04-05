/* ============================================================
   TECH4CHANGE Services — Deep Space Tech / Mission Control
   4-service grid with glowing cards, images, and feature lists
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Mic, Code2, UserPlus, ArrowRight } from "lucide-react";

const VOICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460370702/ecG8FietAg7LHPWEcKYES2/ai-voice-agent-6wuLGP6P4BKouUxMr6hyih.webp";
const WEBSITE_IMG = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80";
const LEADS_IMG =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80";

const services = [
  {
    icon: Mic,
    title: "AI Voice Agents",
    tagline: "Never miss a call again",
    description:
      "Deploy intelligent voice agents that answer calls 24/7, book appointments, handle FAQs, and escalate complex issues — all in a natural, human-like voice.",
    features: [
      "24/7 call answering & routing",
      "Appointment scheduling & reminders",
      "Custom voice & personality",
      "CRM integration",
    ],
    image: VOICE_IMG,
    accent: "#DC2626",
    badge: "Most Popular",
  },
  {
    icon: Code2,
    title: "Website Development",
    tagline: "Done-for-you website builds",
    description:
      "We design and build high-converting, mobile-friendly websites for your business, so you can launch faster without managing developers or technical setup.",
    features: [
      "Custom design for your brand",
      "Fast, mobile-first pages",
      "Contact forms & lead capture",
      "SEO-ready structure",
    ],
    image: WEBSITE_IMG,
    accent: "#DC2626",
    badge: "Popular",
  },
  {
    icon: UserPlus,
    title: "AI Lead Generation",
    tagline: "Fill your pipeline on autopilot",
    description:
      "AI-powered outreach and qualification that finds prospects, starts conversations, and hands off warm leads — so your sales team spends time closing, not chasing.",
    features: [
      "Targeted prospect discovery & enrichment",
      "Automated follow-ups & nurture sequences",
      "Lead scoring & handoff to your CRM",
      "Reporting on pipeline and conversion",
    ],
    image: LEADS_IMG,
    accent: "#DC2626",
    badge: "New",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="card-glow rounded-xl overflow-hidden flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s ease ${index * 0.12}s`,
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(13,22,40,0.95))" }}
        />
        {service.badge && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              background: service.accent === "#DC2626" ? "rgba(220,38,38,0.15)" : "rgba(239,68,68,0.15)",
              color: service.accent,
              border: `1px solid ${service.accent}40`,
            }}
          >
            {service.badge}
          </div>
        )}
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}40` }}
          >
            <Icon size={16} style={{ color: service.accent }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-1">
          <span
            className="section-label"
            style={{ color: service.accent }}
          >
            {service.tagline}
          </span>
        </div>
        <h3
          className="text-xl font-bold mb-3"
          style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm mb-5 flex-1"
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
        >
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: service.accent }}
              />
              {f}
            </li>
          ))}
        </ul>

        <button
          className="flex items-center gap-1.5 text-sm font-semibold group transition-all duration-200"
          style={{
            fontFamily: "Outfit, sans-serif",
            color: service.accent,
          }}
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Learn More
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
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
    <section id="services" className="py-24 relative" style={{ background: "#060B18" }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="section-label block mb-3">// What We Offer</span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
          >
            AI Services Built for
            <br />
            <span className="text-teal-gradient">Small Business Success</span>
          </h2>
          <p
            className="max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            From AI voice agents and lead generation to a done-for-you website, Tech4Change
            covers the touchpoints that grow your business — so your team can focus on what they do best.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
