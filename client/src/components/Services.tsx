/* ============================================================
   TECH4CHANGE Services — Deep Space Tech / Mission Control
   4-service grid with glowing cards, images, and feature lists
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Phone, Workflow, ArrowRight } from "lucide-react";

const VOICE_IMG = "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1400&q=80";
const WORKFLOW_IMG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80";

const services = [
  {
    id: "voice-agents",
    icon: Phone,
    title: "Agentic Voice Agents",
    tagline: "The conversation",
    description:
      "Agents that answer, qualify, book, and follow up on calls and messages, then hand the full context to a person when the situation needs one.",
    features: [
      "Inbound and outbound conversations",
      "Qualify, book, and follow up",
      "Route to the right person",
      "Human handoff with full context",
    ],
    image: VOICE_IMG,
    accent: "#DC2626",
    badge: "Communications",
  },
  {
    id: "ai-workflows",
    icon: Workflow,
    title: "AI Workflows",
    tagline: "The process after the call",
    description:
      "A trigger starts the job. The workflow routes it, does the repeatable steps, pauses for a person when needed, then closes the loop.",
    features: [
      "Trigger from a call, text, or form",
      "Route to a booking, ticket, or person",
      "Confirm, update, and notify",
      "Pick the job back up after a handoff",
    ],
    image: WORKFLOW_IMG,
    accent: "#DC2626",
    badge: "Operations",
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
      id={service.id}
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
    <div className="relative" style={{ background: "#060B18" }}>
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <section id="services" className="relative z-10 scroll-mt-24 pt-28 pb-28 md:pb-32">
        <div className="container">
          <div
            ref={ref}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <span className="section-label block mb-3">// What We Offer</span>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8"
              style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
            >
              Voice agents and
              <br />
              <span className="text-teal-gradient">AI workflows</span>
            </h2>
            <p
              className="max-w-2xl text-base mb-14 md:mb-16"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
            >
              The voice agent handles the conversation. The workflow is the path the job
              takes after something starts it — a call, a text, a form, or a status change —
              until the work is done or a person takes the next step.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
