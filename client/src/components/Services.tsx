/* ============================================================
   TECH4CHANGE Services — Deep Space Tech / Mission Control
   4-service grid with glowing cards, images, and feature lists
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Code2, Search, ArrowRight } from "lucide-react";

const WEBSITE_IMG = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80";
const SEO_IMG = "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80";

const sitePeekImages = [
  { src: "/website-showcase-1.png", alt: "Website homepage we built for Trappin Cutz barbershop" },
  { src: "/website-showcase-2.png", alt: "Website homepage we built for Blessed Style barbershop" },
];

const services = [
  {
    id: "website-development",
    icon: Code2,
    title: "Website Development",
    tagline: "Built fast and clean",
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
    id: "seo-foundations",
    icon: Search,
    title: "SEO Foundations",
    tagline: "Help people find you online",
    description:
      "We set up the on-page structure your website needs to rank better locally, load well, and support long-term search visibility.",
    features: [
      "Title tags and page structure",
      "Local search best practices",
      "Fast-loading page setup",
      "Lead-focused content flow",
    ],
    image: SEO_IMG,
    accent: "#DC2626",
    badge: "Included",
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

      {/* Websites for small businesses — intro + offerings (no client site screenshots here) */}
      <section id="services" className="relative z-10 scroll-mt-24 pt-28 pb-16 md:pb-20">
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
              Websites for
              <br />
              <span className="text-teal-gradient">small businesses</span>
            </h2>
            <p
              className="max-w-2xl text-base mb-14 md:mb-16"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
            >
              From brand-new launches to redesigns, Tech4Change builds the website foundation
              your business needs to look professional and capture more leads online for barbershops,
              HVAC companies, real estate businesses, and local service providers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client builds — separate section; showcase images live only here */}
      <section
        id="showcase"
        className="relative z-10 scroll-mt-24 pt-6 md:pt-8 pb-28 md:pb-32"
        style={{
          borderTop: "1px solid rgba(220,38,38,0.08)",
          background: "linear-gradient(180deg, rgba(7,13,28,0.45) 0%, rgba(6,11,24,0.15) 100%)",
        }}
        aria-labelledby="site-peek-heading"
      >
        <div className="container">
          <h2
            id="site-peek-heading"
            className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
          >
            A peek into the sites we build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {sitePeekImages.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="w-full rounded-2xl object-cover object-top"
                style={{ aspectRatio: "16 / 10" }}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
