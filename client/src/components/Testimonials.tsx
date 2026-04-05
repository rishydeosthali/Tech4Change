/* ============================================================
   TECH4CHANGE Testimonials — Deep Space Tech / Mission Control
   Client results / trust section (testimonial cards reserved for future use)
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

/* for future use — testimonial cards & sample reviews
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Owner",
    business: "Bella Vista Restaurant",
    location: "Austin, TX",
    avatar: "MG",
    rating: 5,
    text: "Before Tech4Change, we were missing 30% of our calls during dinner rush. Now our AI voice agent handles reservations 24/7 and our Google reviews went from 3.8 to 4.7 stars in just 3 months. The ROI is unreal.",
    metric: "+0.9 star rating",
    metricLabel: "in 90 days",
  },
  {
    name: "James Whitfield",
    role: "Owner & Operator",
    business: "Whitfield HVAC Services",
    location: "Nashville, TN",
    avatar: "JW",
    rating: 5,
    text: "I was skeptical about AI for a small HVAC company, but Tech4Change made it dead simple. The voice agent books service calls while I'm on a job, and the automated follow-ups have tripled our review count. My competitors have no idea how I'm doing it.",
    metric: "3x more reviews",
    metricLabel: "collected monthly",
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    business: "Bloom Wellness Spa",
    location: "Denver, CO",
    avatar: "PS",
    rating: 5,
    text: "The AI voice agent sounds so natural that clients don't even realize they're talking to AI. It books appointments, answers questions about our services, and even upsells packages. We've increased our monthly revenue by 40% without hiring anyone new.",
    metric: "+40% revenue",
    metricLabel: "without new hires",
  },
  {
    name: "Derek Okonkwo",
    role: "Managing Partner",
    business: "Okonkwo Law Group",
    location: "Chicago, IL",
    avatar: "DO",
    rating: 5,
    text: "Tech4Change's business automation has transformed how we handle client intake. What used to take our paralegal 2 hours a day now runs automatically. The analytics dashboard shows us exactly where our leads are coming from and which ones convert.",
    metric: "2 hrs/day saved",
    metricLabel: "on admin tasks",
  },
  {
    name: "Sarah Chen",
    role: "CEO",
    business: "Chen's Auto Detailing",
    location: "Seattle, WA",
    avatar: "SC",
    rating: 5,
    text: "I run three locations and Tech4Change handles all the customer communication across all of them. The review augmentation system is incredible — we went from 47 reviews to over 300 in six months. Our booking rate is up 65%.",
    metric: "47 → 300+ reviews",
    metricLabel: "in 6 months",
  },
  {
    name: "Tom Reilly",
    role: "Owner",
    business: "Reilly's Plumbing & Drain",
    location: "Phoenix, AZ",
    avatar: "TR",
    rating: 5,
    text: "The setup was shockingly easy. Tech4Change's team had everything running in less than 48 hours. The AI voice agent handles emergency calls at 2am, which used to wake me up. Now I actually sleep through the night and still capture every job.",
    metric: "Live in 48 hrs",
    metricLabel: "zero downtime",
  },
];

function TestimonialCard({ t, index, visible }: { t: typeof testimonials[0]; index: number; visible: boolean }) {
  return (
    <div
      className="card-glow rounded-xl p-6 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.08}s`,
      }}
    >
      <Quote size={24} className="mb-4" style={{ color: "rgba(220,38,38,0.3)" }} />

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} fill="#EF4444" style={{ color: "#EF4444" }} />
        ))}
      </div>

      <p
        className="text-sm flex-1 mb-5"
        style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75, fontStyle: "normal" }}
      >
        "{t.text}"
      </p>

      <div
        className="flex items-center gap-3 mb-5 p-3 rounded-lg"
        style={{ background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.12)" }}
      >
        <div>
          <div
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "#DC2626",
            }}
          >
            {t.metric}
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            {t.metricLabel}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(220,38,38,0.2), rgba(220,38,38,0.05))",
            border: "1px solid rgba(220,38,38,0.25)",
            color: "#DC2626",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          {t.avatar}
        </div>
        <div>
          <div
            style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#fff",
            }}
          >
            {t.name}
          </div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
            {t.role} · {t.business}
          </div>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.65rem",
              color: "rgba(220,38,38,0.6)",
            }}
          >
            {t.location}
          </div>
        </div>
      </div>
    </div>
  );
}
*/

export default function Testimonials() {
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
    <section id="testimonials" className="py-24 relative" style={{ background: "#0D1628" }}>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "50vw",
          height: "80vh",
          background: "radial-gradient(ellipse, rgba(220,38,38,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="section-label block mb-3">// Client Results</span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
          >
            Real Businesses,{" "}
            <span className="text-teal-gradient">Real Results</span>
          </h2>
          {/*
            for future use — previous subhead + “here’s what they have to say”:
            Over 500 small businesses trust Tech4Change to power their growth. Here's what they have to say.
          */}
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
          >
            Small businesses trust Tech4Change to power their growth.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="#EF4444" style={{ color: "#EF4444" }} />
              ))}
            </div>
            <span
              style={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                color: "#fff",
                fontSize: "1rem",
              }}
            >
              4.9/5
            </span>
            {/*
              for future use:
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                from 500+ businesses
              </span>
            */}
          </div>
        </div>

        {/*
          for future use — testimonials grid
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} visible={visible} />
            ))}
          </div>
        */}
      </div>
    </section>
  );
}
