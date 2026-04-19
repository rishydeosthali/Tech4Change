import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Small Business Focused",
    description:
      "We build practical websites for local businesses that need real results, not agency bloat.",
  },
  {
    title: "Done-For-You Execution",
    description:
      "From strategy to launch, we handle the website work so you can stay focused on running your business.",
  },
  {
    title: "Growth You Can Measure",
    description:
      "Every project is tied to outcomes: more calls answered, more leads captured, and better customer conversion.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen" style={{ background: "#060B18" }}>
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "75vw",
            height: "380px",
            background: "radial-gradient(ellipse, rgba(220,38,38,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10">
          <span className="section-label block mb-3">// About Us</span>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff", lineHeight: 1.05 }}
          >
            We Build Websites
            <br />
            <span className="text-teal-gradient">That Grow Businesses</span>
          </h1>

          <p
            className="max-w-3xl text-base md:text-lg mb-8"
            style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.8 }}
          >
            At Tech4Change, we are a group of ambitious young software developers dedicated
            to creating impactful digital solutions. We focus on building custom websites
            that are not only visually appealing but also fast, functional, and designed to
            convert. By combining creativity with technical expertise, we help businesses
            elevate their brand and succeed online.
          </p>

          <div
            className="rounded-xl p-6 md:p-8 mb-8"
            style={{
              background: "rgba(13,22,40,0.88)",
              border: "1px solid rgba(220,38,38,0.16)",
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-4"
              style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
            >
              Who We Are
            </h2>
            <p className="mb-4" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>
              We are a hands-on digital growth company built for everyday business owners.
              Our team works directly with service businesses and local brands that want to
              upgrade how they attract leads, respond to customers, and convert traffic into revenue.
            </p>
            <p className="mb-4" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>
              Unlike agencies that hand over generic templates, Tech4Change builds systems
              around how your business actually runs. We focus on clear communication, fast
              implementation, and practical solutions that create measurable improvement.
            </p>
            <p style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>
              Our goal is simple: give small businesses the same quality of technology that
              larger companies use, but with service and pricing designed for local teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(13,22,40,0.88)", border: "1px solid rgba(220,38,38,0.16)" }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}>
                What We Build
              </h3>
              <ul className="space-y-2" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                <li>Custom website design tailored to your brand.</li>
                <li>Website development focused on speed and lead generation.</li>
                <li>Digital foundations that support long-term growth.</li>
              </ul>
            </div>
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(13,22,40,0.88)", border: "1px solid rgba(220,38,38,0.16)" }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}>
                How We Work
              </h3>
              <ul className="space-y-2" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                <li>Start with your goals, bottlenecks, and customer journey.</li>
                <li>Build a custom plan with clear timeline and deliverables.</li>
                <li>Launch quickly and continue optimizing with you.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(13,22,40,0.88)",
                  border: "1px solid rgba(220,38,38,0.16)",
                }}
              >
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
                >
                  {pillar.title}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.56)", lineHeight: 1.7 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => (window.location.href = "/contact-us")}
              className="btn-amber px-7 py-3.5 rounded-md text-base"
            >
              Get in Touch
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="btn-ghost-teal px-7 py-3.5 rounded-md text-base"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
