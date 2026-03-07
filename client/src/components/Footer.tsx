import { Link } from "wouter";

const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/MyFokdbFMWxFfHiY.png?Expires=1804373851&Signature=tX8Nz-0U25wCRVcyN~gH7soBhlF3NkZUa-fhbO66r4~ix6wF5QJgpPopSr1AHJBk3LYrKIvxfO7YD9vTdqjZjlu3cRO~lkYxkxZTjoEnC4lRTtjG5BAb93p2PDrMuu2aVHq7bLQju4D-2XQxrn4CTm9kL1SbUQFUO-A84x7mFMo~GuyOHMKwN5Y8FJn7Ab31FwMwmSPPSt250S-gmfDDE641SKapGELse-4gAkYO2Uy7HOgsFPNinIzISyHmorDYolNCgA0fVXih1zjLlPmv4tUT4theY~IW3Wg5cuPbxYCSFRkYITYhEoeW1oC1OSZByxIaTDBAmvXWZN~bb7cNlA__&Key-Pair-Id=K2HSFNDJXOU9YS";

const siteLinks = [
  { label: "Home", href: "#hero" },
  { label: "Buyers", href: "#buyers" },
  { label: "Sellers", href: "#sellers" },
  { label: "Relocations", href: "#relocations" },
  { label: "Workshop", href: "#workshop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function EqualHousingLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="45" width="80" height="50" fill="none" stroke="currentColor" strokeWidth="3"/>
      <polygon points="50,10 5,50 95,50" fill="none" stroke="currentColor" strokeWidth="3"/>
      <text x="50" y="68" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="bold" fontFamily="sans-serif">EQUAL</text>
      <text x="50" y="78" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="sans-serif">HOUSING</text>
      <text x="50" y="88" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="sans-serif">OPPORTUNITY</text>
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-white/5">
        <div className="container py-8 sm:py-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-7 sm:mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO_URL} alt="My Rock Realty" className="h-16 sm:h-18 w-auto mb-4" />
            <p className="text-cream/50 text-[13px] sm:text-sm leading-relaxed max-w-xs mb-3">
              Strategic real estate guidance for Colorado buyers, sellers, and relocation clients.
            </p>
            <p className="text-cream/40 text-sm">
              Rob Baker — Founder & Owner
            </p>
            <p className="text-cream/40 text-sm">
              Serving Colorado
            </p>
            <p className="text-cream/40 text-sm">
              Trusted agent referrals in all 50 states
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Navigation
            </h4>
            <div className="space-y-2.5">
              {siteLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="block text-cream/50 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Resources
            </h4>
            <div className="space-y-2.5 text-sm">
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
              <p className="text-cream/35 pt-1">
                Agent referral support in all 50 states
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Legal
            </h4>
            <div className="space-y-2.5 text-sm">
              <Link href="/privacy" className="block text-cream/50 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-cream/50 hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/fair-housing" className="block text-cream/50 hover:text-gold transition-colors">
                Fair Housing Statement
              </Link>
            </div>
          </div>
        </div>

        {/* Compliance / Disclosures Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Equal Housing Logo */}
            <div className="flex items-center gap-3 text-cream/40 shrink-0">
              <EqualHousingLogo className="w-10 h-10 sm:w-12 sm:h-12" />
              <span className="text-xs leading-tight max-w-[200px]">
                Equal Housing Opportunity
              </span>
            </div>
            {/* Brokerage Disclosure */}
            <p className="text-cream/30 text-xs leading-relaxed">
              My Rock Realty is a licensed real estate brokerage in the state of Colorado. All real estate services are provided in compliance with applicable federal, state, and local laws, including the Fair Housing Act and the Colorado Anti-Discrimination Act. Licensing and brokerage details available upon request.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} My Rock Realty. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-cream/30 text-xs">
            <Link href="/privacy" className="hover:text-cream/50 transition-colors">
              Privacy
            </Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:text-cream/50 transition-colors">
              Terms
            </Link>
            <span>&middot;</span>
            <Link href="/fair-housing" className="hover:text-cream/50 transition-colors">
              Fair Housing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
