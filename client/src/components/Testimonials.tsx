/* ============================================================
   TECH4CHANGE Testimonials — Deep Space Tech / Mission Control
   Client results / trust section (testimonial cards reserved for future use)
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Reed",
    business: "Reed Fade Studio",
    rating: 5,
    text: "The voice agent answers when we are with a client and books the next appointment. We stopped losing calls that used to go to voicemail.",
  },
  {
    name: "Angela Torres",
    business: "Torres HVAC",
    rating: 5,
    text: "After-hours calls get qualified and turned into a job on the board. The workflow notifies the tech on call instead of sitting in a voicemail box.",
  },
  {
    name: "Darren Cole",
    business: "Cole Realty Group",
    rating: 4,
    text: "Inbound inquiries get a first conversation right away, then the workflow routes serious ones to an agent with the details already captured.",
  },
  {
    name: "Lisa Nguyen",
    business: "Nguyen Home Services",
    rating: 4,
    text: "Follow-ups that used to depend on someone remembering now move on their own. A person still steps in when a job needs a judgment call.",
  },
];

function TestimonialCard({
  testimonial,
  index,
  visible,
}: {
  testimonial: typeof testimonials[0];
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className="card-glow rounded-xl p-6 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < testimonial.rating ? "#EF4444" : "transparent"}
            style={{ color: i < testimonial.rating ? "#EF4444" : "rgba(255,255,255,0.18)" }}
          />
        ))}
      </div>

      <p
        className="text-sm mb-5 flex-1"
        style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.75 }}
      >
        "{testimonial.text}"
      </p>

      <div style={{ borderTop: "1px solid rgba(220,38,38,0.12)", paddingTop: "1rem" }}>
        <div
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 700,
            color: "#fff",
            fontSize: "0.95rem",
          }}
        >
          {testimonial.name}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.42)",
            fontSize: "0.8rem",
            marginTop: "0.15rem",
          }}
        >
          {testimonial.business}
        </div>
      </div>
    </div>
  );
}

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
    <section id="testimonials" className="py-28 relative" style={{ background: "#0D1628" }}>
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
          className="text-center mb-18 md:mb-20"
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
            Teams use Tech4Change to cover the conversation and keep the work moving.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.business}`}
              testimonial={testimonial}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
