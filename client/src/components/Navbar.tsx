import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";

const LOGO_URL = "/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Buyers", href: "#buyers" },
  { label: "Sellers", href: "#sellers" },
  { label: "Relocations", href: "#relocations" },
  { label: "Workshop", href: "/colorado-home-buying-workshop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const marketLinks = [
  { label: "Denver", href: "/denver-homes-for-sale" },
  { label: "Boulder", href: "/boulder-homes-for-sale" },
  { label: "Colorado Springs", href: "/colorado-springs-homes-for-sale" },
  { label: "Fort Collins", href: "/fort-collins-homes-for-sale" },
];

// Secondary links — not part of main consumer funnel
const JOIN_HREF = "/join-us";
const COACHING_HREF = "/coaching";

/** Inline Markets dropdown for desktop nav rows */
function MarketsDropdown({ textClass }: { textClass: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded hover:text-gold ${textClass}`}
        style={{ fontFamily: "'Outfit', sans-serif" }}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Markets
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full mt-1 w-48 bg-charcoal/98 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50 py-1.5"
          >
            {marketLinks.map((m) => (
              <a
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-cream/75 hover:text-gold hover:bg-white/5 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <MapPin size={12} className="text-gold/60 shrink-0" />
                {m.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [marketsExpanded, setMarketsExpanded] = useState(false);

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

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // Page routes (start with "/") navigate directly; anchors scroll on-page
    if (href.startsWith("/")) {
      // Let the browser handle normal navigation — do NOT preventDefault
      setMobileOpen(false);
      return;
    }
    e.preventDefault();
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
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center shrink-0"
          >
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              className="h-14 sm:h-16 md:h-[4.5rem] w-auto"
              width="72"
              height="72"
              decoding="async"
            />
          </a>

          {/* Desktop Nav (compact) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded text-cream/80 hover:text-gold"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            {/* Markets dropdown */}
            <MarketsDropdown textClass="text-cream/80" />
            {/* Secondary links — subtle, non-dominant */}
            <a
              href={JOIN_HREF}
              className="px-3 py-2 text-xs font-medium tracking-wide transition-colors rounded text-cream/65 hover:text-gold/80"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Join Our Team
            </a>
            <a
              href={COACHING_HREF}
              className="px-3 py-2 text-xs font-medium tracking-wide transition-colors rounded text-cream/65 hover:text-gold/80"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Coaching
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
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
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center"
          >
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              className="h-[8rem] sm:h-[7.5rem] md:h-[8rem] lg:h-[8.5rem] w-auto drop-shadow-lg"
              width="136"
              height="136"
              fetchPriority="high"
            />
          </a>

          {/* Mobile hamburger — absolute right */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden absolute right-4 sm:right-6 p-3 rounded-lg active:bg-white/10 text-white z-10"
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
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-sm font-medium tracking-wide transition-colors rounded text-white/80 hover:text-gold"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          {/* Markets dropdown */}
          <MarketsDropdown textClass="text-white/80" />
          {/* Secondary links — subtle, non-dominant */}
          <a
            href={JOIN_HREF}
            className="px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded text-white/60 hover:text-gold/80"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Join Our Team
          </a>
          <a
            href={COACHING_HREF}
            className="px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded text-white/60 hover:text-gold/80"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Coaching
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
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
            className="lg:hidden fixed inset-0 top-0 bg-charcoal/[0.98] backdrop-blur-md z-[60]"
          >
            {/* Close button at top */}
            <div className="container flex items-center justify-between pt-5 pb-3">
              <img
                src={LOGO_URL}
                alt="My Rock Realty"
                className="h-20 w-auto"
                width="80"
                height="80"
                decoding="async"
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
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-4 text-cream/90 hover:text-gold text-lg font-medium transition-colors rounded-lg active:bg-white/5 border-b border-white/5 last:border-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              {/* Markets — expandable section in mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="border-b border-white/5"
              >
                <button
                  onClick={() => setMarketsExpanded((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-4 text-cream/90 hover:text-gold text-lg font-medium transition-colors rounded-lg active:bg-white/5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Markets
                  <ChevronDown size={18} className={`transition-transform duration-200 ${marketsExpanded ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {marketsExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {marketLinks.map((m) => (
                        <a
                          key={m.href}
                          href={m.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-8 py-3 text-cream/65 hover:text-gold text-base transition-colors"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          <MapPin size={12} className="text-gold/50 shrink-0" />
                          {m.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              {/* Secondary links — subtle in mobile menu */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.05 }}
                href={JOIN_HREF}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-cream/45 hover:text-gold/80 text-sm font-medium transition-colors rounded-lg active:bg-white/5 border-t border-white/5 mt-1"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Join Our Team
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 2) * 0.05 }}
                href={COACHING_HREF}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-cream/45 hover:text-gold/80 text-sm font-medium transition-colors rounded-lg active:bg-white/5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Coaching
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
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
