import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Conversations Covered",
    description:
      "Voice agents answer, qualify, book, and follow up so calls and messages do not sit until someone is free.",
  },
  {
    title: "Processes That Keep Moving",
    description:
      "AI workflows route the request, do the repeatable steps, and hand off with context when a person needs to decide.",
  },
  {
    title: "Built Around Your Work",
    description:
      "We map the stall points first, then shape the agent and the workflow to the way your team already operates.",
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
            We Build Voice Agents
            <br />
            <span className="text-teal-gradient">and AI Workflows</span>
          </h1>

          <p
            className="max-w-3xl text-base md:text-lg mb-8"
            style={{ color: "rgba(255,255,255,0.62)", lineHeight: 1.8 }}
          >
            At Tech4Change, we are a group of software developers focused on communication
            and process. We build agentic voice agents that handle the conversation and AI
            workflows that carry the work through the next step, with a person in the loop
            when the situation needs one.
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
              We work directly with teams whose calls, follow-ups, and handoffs are slowing
              the rest of the operation. The goal is coverage for the conversation and a
              path for the job after it.
            </p>
            <p className="mb-4" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>
              Tech4Change builds the agent and the workflow around how the work already
              runs. We map the trigger, the route, and the moment a person should take over.
            </p>
            <p style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>
              Our goal is simple: give a team the communication and process capacity that
              used to require more people watching every call and every next step.
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
                <li>Agentic voice agents for inbound and outbound communication.</li>
                <li>AI workflows that route, update, notify, and close the loop.</li>
                <li>Handoffs that pass full context to a person on the team.</li>
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
                <li>Start with the conversations and the steps that stall.</li>
                <li>Design the agent and the workflow around those steps.</li>
                <li>Put it into daily use and tighten it as real jobs come through.</li>
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
