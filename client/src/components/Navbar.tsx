import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
      {/* === SCROLLED (compact): logo left + nav right === */}
      <div className={`transition-all duration-300 ${scrolled ? "block" : "hidden"}`}>
        <div className="container flex items-center justify-between h-[68px] md:h-[72px]">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center shrink-0"
          >
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              className="h-14 sm:h-16 md:h-[4.5rem] w-auto"
            />
          </a>

          {/* Desktop Nav (compact) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded text-cream/80 hover:text-gold"
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

          {/* Mobile Toggle (compact) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 -mr-2 rounded-lg active:bg-white/10 text-cream"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* === NOT SCROLLED (hero): large centered logo + nav below === */}
      <div className={`transition-all duration-300 ${scrolled ? "hidden" : "block"}`}>
        {/* Row 1: Centered logo (large & prominent) */}
        <div className="container flex items-center justify-center pt-5 pb-3 sm:pt-6 sm:pb-3 relative">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center"
          >
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              className="h-[7rem] sm:h-[7.5rem] md:h-[8rem] lg:h-[8.5rem] w-auto drop-shadow-lg"
            />
          </a>

          {/* Mobile hamburger — absolute right */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden absolute right-4 sm:right-6 p-3 rounded-lg active:bg-white/10 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Row 2: Desktop nav links centered below logo */}
        <div className="hidden lg:flex items-center justify-center gap-1 pb-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-3 py-1.5 text-sm font-medium tracking-wide transition-colors rounded text-white/80 hover:text-gold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="ml-3 px-5 py-2 bg-gold text-charcoal text-sm font-semibold rounded transition-all hover:bg-gold-light hover:shadow-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Schedule a Consultation
          </a>
        </div>
      </div>

      {/* Mobile Menu — full screen overlay with animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 bg-charcoal/[0.98] backdrop-blur-md z-40"
          >
            {/* Close button at top */}
            <div className="container flex items-center justify-between pt-5 pb-3">
              <img
                src={LOGO_URL}
                alt="My Rock Realty"
                className="h-20 w-auto"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-3 rounded-lg active:bg-white/10 text-cream"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="container py-4 flex flex-col gap-1 h-[calc(100%-5rem)] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-4 text-cream/90 hover:text-gold text-lg font-medium transition-colors rounded-lg active:bg-white/5 border-b border-white/5 last:border-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="mt-4 mx-2 px-6 py-4 bg-gold text-charcoal text-center text-base font-semibold rounded-lg transition-all hover:bg-gold-light active:scale-[0.98]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Schedule a Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
