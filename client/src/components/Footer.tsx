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

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="My Rock Realty" className="h-14 w-auto mb-4" />
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              Strategic real estate guidance for Colorado buyers, sellers, and
              relocation clients. Trusted agent referrals in all 50 states.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-cream/50 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Resources
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://ColoradoHomeBuyingWorkshop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/50 hover:text-gold transition-colors"
              >
                Colorado Home Buying Workshop
              </a>
              <a
                href="https://MyRockHomes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/50 hover:text-gold transition-colors"
              >
                MyRockHomes.com
              </a>
              <p className="text-cream/40 pt-2">
                Agent referral support in all 50 states
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} My Rock Realty. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Rob Baker &middot; Serving Colorado &middot; Referrals Nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}
