import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckCircle } from "lucide-react";

export default function ConsultationThanks() {
  return (
    <div className="min-h-screen" style={{ background: "#060B18" }}>
      <Navbar />
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "75vw",
            height: "320px",
            background: "radial-gradient(ellipse, rgba(220,38,38,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 text-center max-w-2xl mx-auto px-4">
          <CheckCircle size={64} className="mx-auto mb-6" style={{ color: "#DC2626" }} />
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: "Outfit, sans-serif", color: "#fff", lineHeight: 1.15 }}
          >
            Thank you for reaching out
          </h1>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
            We received your website consultation request. A Tech4Change specialist will get in touch within 24 hours. You may
            receive a short confirmation email from our form provider.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/" className="btn-amber px-7 py-3.5 rounded-md text-base inline-block">
              Back to Home
            </a>
            <a href="/#contact" className="btn-ghost-teal px-7 py-3.5 rounded-md text-base inline-block">
              Send Another Message
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
