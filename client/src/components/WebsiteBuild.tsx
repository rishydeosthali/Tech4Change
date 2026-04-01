import { useEffect, useRef, useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

const packages = [
  {
    name: "Branded Website",
    price: "$200-$250",
    timeline: "Within a week",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form setup",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
];

export default function WebsiteBuild() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="website-build" className="py-28 md:py-32 relative" style={{ background: "#0D1628" }}>
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="container relative z-10">
        <div
          ref={ref}
          className="text-center mb-16 md:mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="section-label block mb-4">// Website Build Service</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8" style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}>
            Need a New Website?
            <br />
            <span className="text-teal-gradient">Buy a Done-For-You Build</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg px-2" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}>
            We design and build your website for you. Get started below and we will follow up with a quick kickoff call.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="rounded-xl p-9 md:p-11"
              style={{
                background: "rgba(13, 22, 40, 0.9)",
                border: "1px solid rgba(220,38,38,0.2)",
                boxShadow: "0 0 24px rgba(220,38,38,0.08)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <span className="section-label block mb-4">{pkg.timeline}</span>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4" style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}>
                {pkg.name}
              </h3>
              <div className="mb-6 md:mb-8" style={{ color: "#DC2626", fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "2.2rem" }}>
                {pkg.price}
              </div>
              <ul className="space-y-3.5 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                    <Check size={16} style={{ color: "#DC2626" }} className="mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-amber w-full py-4 rounded-md text-sm font-bold inline-flex items-center justify-center gap-2.5"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Buy This Website Package
                <ShoppingCart size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
