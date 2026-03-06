import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/MyFokdbFMWxFfHiY.png?Expires=1804373851&Signature=tX8Nz-0U25wCRVcyN~gH7soBhlF3NkZUa-fhbO66r4~ix6wF5QJgpPopSr1AHJBk3LYrKIvxfO7YD9vTdqjZjlu3cRO~lkYxkxZTjoEnC4lRTtjG5BAb93p2PDrMuu2aVHq7bLQju4D-2XQxrn4CTm9kL1SbUQFUO-A84x7mFMo~GuyOHMKwN5Y8FJn7Ab31FwMwmSPPSt250S-gmfDDE641SKapGELse-4gAkYO2Uy7HOgsFPNinIzISyHmorDYolNCgA0fVXih1zjLlPmv4tUT4theY~IW3Wg5cuPbxYCSFRkYITYhEoeW1oC1OSZByxIaTDBAmvXWZN~bb7cNlA__&Key-Pair-Id=K2HSFNDJXOU9YS";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Buyers", href: "#buyers" },
  { label: "Sellers", href: "#sellers" },
  { label: "Relocations", href: "#relocations" },
  { label: "Workshop", href: "#workshop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2 shrink-0"
        >
          <img src={LOGO_URL} alt="My Rock Realty" className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded ${
                scrolled
                  ? "text-cream/80 hover:text-gold"
                  : "text-white/80 hover:text-gold"
              }`}
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="ml-3 px-5 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded transition-all hover:bg-gold-light hover:shadow-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Schedule a Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded ${scrolled ? "text-cream" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-md border-t border-white/10">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-3 text-cream/80 hover:text-gold text-base font-medium transition-colors rounded"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="mt-2 mx-4 px-5 py-3 bg-gold text-charcoal text-center text-sm font-semibold rounded transition-all hover:bg-gold-light"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
