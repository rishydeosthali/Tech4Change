import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactUs() {
  return (
    <div className="min-h-screen" style={{ background: "#060B18" }}>
      <Navbar />
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "75vw",
            height: "320px",
            background: "radial-gradient(ellipse, rgba(220,38,38,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10 max-w-3xl">
          <span className="section-label block mb-3">// Contact Us</span>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff", lineHeight: 1.08 }}
          >
            Get in Touch
          </h1>

          <p
            className="text-base md:text-lg mb-10"
            style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}
          >
            Contact us by our email, reach out by phone, or find us on Instagram.
          </p>

          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(13,22,40,0.9)",
              border: "1px solid rgba(220,38,38,0.16)",
              boxShadow: "0 0 40px rgba(220,38,38,0.06)",
            }}
          >
            <div className="mb-8">
              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
              >
                Email Us
              </h2>
              <a
                href="mailto:tech4change76@gmail.com"
                style={{ color: "#DC2626", fontSize: "1.05rem" }}
              >
                tech4change76@gmail.com
              </a>
            </div>

            <div className="mb-8">
              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
              >
                Call or Text Us
              </h2>
              <a
                href="tel:7372353170"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "tel:7372353170";
                }}
                style={{ color: "#DC2626", fontSize: "1.05rem" }}
              >
                (737)-235-3170
              </a>
            </div>

            <div>
              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
              >
                Instagram
              </h2>
              <a
                href="https://www.instagram.com/tech.4.change1/"
                style={{ color: "#DC2626", fontSize: "1.05rem" }}
              >
                @tech.4.change1
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
