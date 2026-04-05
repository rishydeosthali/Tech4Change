/* ============================================================
   TECH4CHANGE Navbar — Deep Space Tech / Mission Control
   Sticky top nav with live indicator, teal accent, dark glass
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.location.href = `/${href}`;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6, 11, 24, 0.92)"
          : "rgba(6, 11, 24, 0.6)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(220, 38, 38, 0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group pr-2"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <img
              src="/tech4change-logo-sphere.png?v=2"
              alt="Tech4Change logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span
              className="font-bold text-base sm:text-lg tracking-normal"
              style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
            >
              Tech <span style={{ color: "#DC2626" }}>4</span> Change
            </span>
            <span className="live-dot ml-2 hidden sm:block" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#DC2626";
                  (e.target as HTMLElement).style.background = "rgba(220,38,38,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-teal px-3 py-2 rounded-md text-[11px] sm:text-xs md:text-sm font-semibold leading-snug text-center"
            >
              {/* for future use: Get Started Free */}
              Schedule Free AI Consultation
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md"
            style={{ color: "#DC2626" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(6, 11, 24, 0.98)",
            borderColor: "rgba(220, 38, 38, 0.12)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-md text-sm font-medium transition-colors"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-teal mt-2 px-5 py-3 rounded-md text-sm font-semibold w-full"
            >
              {/* for future use: Get Started Free */}
              Schedule Free AI Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
