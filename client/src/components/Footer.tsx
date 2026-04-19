/* ============================================================
   TECH4CHANGE Footer — Deep Space Tech / Mission Control
   Full footer with links, social, and legal
   ============================================================ */

const footerLinks = {
  Services: [
    "Website Development",
    "SEO Foundations",
  ],
  Company: [
    "About Us",
    "Contact",
  ],
};

export default function Footer() {
  const handleFooterLinkClick = (link: string) => {
    const serviceTargets: Record<string, string> = {
      "Website Development": "website-development",
      "SEO Foundations": "seo-foundations",
    };

    const serviceTarget = serviceTargets[link];
    if (serviceTarget) {
      const el = document.querySelector(`#${serviceTarget}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      window.location.href = `/#${serviceTarget}`;
      return;
    }

    if (link === "About Us") {
      window.location.href = "/about-us";
      return;
    }
    if (link === "Contact") {
      window.location.href = "/#contact";
    }
  };

  return (
    <footer style={{ background: "#060B18", borderTop: "1px solid rgba(220,38,38,0.1)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2 pr-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/tech4change-logo-sphere.png?v=2"
                alt="Tech4Change sphere logo"
                className="h-9 w-9 rounded-full object-cover"
              />
              <span
                className="font-bold text-lg tracking-wide"
                style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
              >
                Tech<span style={{ color: "#DC2626" }}>4</span>Change
              </span>
            </div>

            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: "280px" }}
            >
              Website design and development for small businesses that want a stronger
              online presence and more qualified leads.
            </p>

          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="pt-1">
              <h4
                className="font-bold mb-4 text-sm"
                style={{ fontFamily: "Outfit, sans-serif", color: "#fff" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleFooterLinkClick(link)}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#DC2626")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-9"
          style={{ borderTop: "1px solid rgba(220,38,38,0.08)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}
          >
            © {new Date().getFullYear()} tech4change. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "DM Sans, sans-serif" }}
          >
            Built for small business growth
          </p>
        </div>
      </div>
    </footer>
  );
}
