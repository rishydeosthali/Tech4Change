import { useEffect, useRef, useState } from "react";

const showcaseSites = [
  {
    name: "Trappin Cutz",
    type: "Barbershop",
    image: "/website-showcase-1.png",
    accent: "Bold booking flow",
  },
  {
    name: "Blessed Style",
    type: "Barbershop",
    image: "/website-showcase-2.png",
    accent: "Luxury homepage",
  },
];

function ShowcaseCard({
  site,
  index,
  visible,
}: {
  site: (typeof showcaseSites)[0];
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className="card-glow rounded-2xl overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s ease ${index * 0.12}s`,
      }}
    >
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(220,38,38,0.12)",
        }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(239,68,68,0.95)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.18)" }} />
      </div>

      <div className="p-4">
        <div
          className="rounded-xl overflow-hidden relative"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(220,38,38,0.12)",
          }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
                {site.name}
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>{site.type}</div>
            </div>
            <div
              className="px-3 py-1 rounded-full text-[11px]"
              style={{
                color: "#DC2626",
                border: "1px solid rgba(220,38,38,0.25)",
                background: "rgba(220,38,38,0.08)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {site.accent}
            </div>
          </div>

          <div
            className="h-72 relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(6,11,24,0.04), rgba(6,11,24,0.7)), url(${site.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-x-0 bottom-0 p-4">
              <div
                className="rounded-lg px-4 py-3"
                style={{
                  background: "rgba(6,11,24,0.72)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  maxWidth: "72%",
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.72rem" }}>Homepage preview</div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "0.95rem",
                    marginTop: "0.2rem",
                    fontFamily: "Outfit, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Example design direction for client work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteShowcase() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.08 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#060B18" }}>
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div
        className="absolute right-0 top-0 pointer-events-none"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: 700,
          maxHeight: 700,
          background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div
          ref={ref}
          className="mb-16 md:mb-18"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="section-label block mb-3">// Websites We Built</span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
          >
            Example Website
            <br />
            <span className="text-teal-gradient">Homepage Concepts</span>
          </h2>
          <p
            className="max-w-2xl text-base"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}
          >
            A few example homepage styles to show the kind of polished, modern websites we can create
            for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showcaseSites.map((site, index) => (
            <ShowcaseCard key={site.name} site={site} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
