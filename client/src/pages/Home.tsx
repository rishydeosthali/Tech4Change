/* ============================================================
   TECH4CHANGE Home Page — Deep Space Tech / Mission Control
   Assembles all sections in order
   ============================================================ */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WebsiteShowcase from "@/components/WebsiteShowcase";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#060B18" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <About />
      <Contact />
      <WebsiteShowcase />
      <CTABanner />
      <Footer />
    </div>
  );
}
