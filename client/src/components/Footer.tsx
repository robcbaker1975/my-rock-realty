import { useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/logo_c4d99dfc.png";

// Military & PCS spoke links for footer discoverability
const militaryLinks = [
  { label: "Military & PCS Hub", href: "/military-relocation/" },
  { label: "PCS Moves to Colorado", href: "/military-relocation/pcs-colorado/" },
  { label: "VA Home Loans", href: "/military-relocation/va-home-loans-colorado/" },
  { label: "Fort Carson", href: "/military-relocation/fort-carson/" },
  { label: "Peterson Space Force Base", href: "/military-relocation/peterson-space-force-base/" },
  { label: "Remote Home Tours", href: "/military-relocation/remote-home-tours/" },
];

// Navigation links for footer — page routes use <a href>, anchors use scrollTo
const siteLinks = [
  { label: "Home", href: "#hero", isRoute: false },
  { label: "Buyers", href: "#buyers", isRoute: false },
  { label: "Sellers", href: "#sellers", isRoute: false },
  { label: "Relocations", href: "#relocations", isRoute: false },
  { label: "Workshop", href: "/colorado-home-buying-workshop", isRoute: true },
  { label: "About", href: "#about", isRoute: false },
  { label: "Contact", href: "#contact", isRoute: false },
];

const marketLinks = [
  { label: "Denver", href: "/denver-homes-for-sale" },
  { label: "Boulder", href: "/boulder-homes-for-sale" },
  { label: "Colorado Springs", href: "/colorado-springs-co-homes-for-sale" },
  { label: "Fort Collins", href: "/fort-collins-co-homes-for-sale" },
  { label: "Adams County", href: "/adams-co-homes-for-sale" },
  { label: "Jefferson County", href: "/jefferson-co-homes-for-sale" },
  { label: "Highlands Ranch", href: "/highlands-ranch-co-homes-for-sale" },
  { label: "Castle Rock", href: "/castle-rock-co-homes-for-sale" },
  { label: "Lakewood", href: "/lakewood-co-homes-for-sale" },
  { label: "Thornton", href: "/thornton-co-homes-for-sale" },
  { label: "Northglenn", href: "/northglenn-co-homes-for-sale" },
  { label: "Westminster", href: "/westminster-co-homes-for-sale" },
  { label: "Arvada", href: "/arvada-co-homes-for-sale" },
  { label: "Littleton", href: "/littleton-co-homes-for-sale" },
  { label: "Parker", href: "/parker-co-homes-for-sale" },
  { label: "Centennial", href: "/centennial-co-homes-for-sale" },
  { label: "Lone Tree", href: "/lone-tree-co-homes-for-sale" },
  { label: "Castle Pines", href: "/castle-pines-co-homes-for-sale" },
  { label: "Golden", href: "/golden-homes-for-sale" },
  { label: "Morrison", href: "/morrison-co-homes-for-sale" },
  { label: "Brighton", href: "/brighton-co-homes-for-sale" },
  { label: "Commerce City", href: "/commerce-city-homes-for-sale" },
  { label: "Windsor", href: "/windsor-co-homes-for-sale" },
  { label: "Evans", href: "/evans-co-homes-for-sale" },
  { label: "LaSalle", href: "/lasalle-co-homes-for-sale" },
  { label: "Platteville", href: "/platteville-co-homes-for-sale" },
  { label: "Widefield", href: "/widefield-co-homes-for-sale" },
];

// Denver property-type pages
const denverPropertyLinks = [
  { label: "Denver Condos", href: "/denver-condos-for-sale" },
  { label: "Denver Townhomes", href: "/denver-townhomes-for-sale" },
  { label: "Denver Luxury Homes", href: "/denver-luxury-homes-for-sale" },
  { label: "Denver New Construction", href: "/denver-new-construction-homes" },
  { label: "Cost of Living in Denver", href: "/cost-of-living-in-denver-colorado" },
];

// Denver neighborhood pages
const denverNeighborhoodLinks = [
  { label: "Highland", href: "/highland-denver-homes-for-sale" },
  { label: "Platt Park", href: "/platt-park-denver-homes-for-sale" },
];

// Boulder area pages
const boulderAreaLinks = [
  { label: "Louisville", href: "/louisville-co-homes-for-sale" },
  { label: "Superior", href: "/superior-co-homes-for-sale" },
  { label: "Lyons", href: "/lyons-co-homes-for-sale" },
  { label: "Gunbarrel", href: "/gunbarrel-co-real-estate" },
  { label: "North Boulder (NoBo)", href: "/north-boulder-nobo-real-estate" },
  { label: "Newlands", href: "/newlands-boulder-real-estate" },
  { label: "Mapleton Hill", href: "/mapleton-hill-boulder-real-estate" },
  { label: "Table Mesa / South Boulder", href: "/table-mesa-south-boulder-real-estate" },
];

// Representative buyer guides — existing pages only
const buyerGuideLinks = [
  { label: "Wash Park Buyer Guide", href: "/wash-park-denver-buyer-guide" },
  { label: "Cherry Creek Buyer Guide", href: "/cherry-creek-denver-buyer-guide" },
  { label: "LoHi Buyer Guide", href: "/lohi-denver-buyer-guide" },
  { label: "RiNo Buyer Guide", href: "/rino-denver-buyer-guide" },
  { label: "Central Park Buyer Guide", href: "/central-park-denver-buyer-guide" },
  { label: "Sloan Lake Buyer Guide", href: "/sloan-lake-denver-buyer-guide" },
];

// Representative comparison guides — existing pages only
const comparisonLinks = [
  { label: "Denver vs Boulder", href: "/denver-vs-boulder" },
  { label: "Denver vs Colorado Springs", href: "/denver-vs-colorado-springs" },
  { label: "Denver vs Fort Collins", href: "/denver-vs-fort-collins" },
  { label: "Boulder vs Fort Collins", href: "/boulder-vs-fort-collins" },
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

  // Inject a targeted style override into the BB Disclaimer widget's shadow DOM
  // to neutralize the hard-coded white panel background from the BB theme stylesheet.
  // This is necessary because external CSS cannot pierce shadow DOM boundaries.
  useEffect(() => {
    const injectDisclaimerStyle = () => {
      const bbWidget = document.querySelector('bb-widget[data-type="Disclaimer"]') as Element & { shadowRoot: ShadowRoot | null };
      if (!bbWidget?.shadowRoot) return false;
      // Only inject once
      if (bbWidget.shadowRoot.querySelector('style[data-myrr-override]')) return true;
      const style = document.createElement('style');
      style.setAttribute('data-myrr-override', '1');
      style.textContent = [
        '.bfg-disclaimer-container {',
        '  background: transparent !important;',
        '  background-color: transparent !important;',
        '  border-radius: 0 !important;',
        '  padding: 0 !important;',
        '}',
        '.bfg-disclaimer-section,',
        '.disclaimer-text1,',
        '.disclaimer-text2 {',
        '  color: rgba(245, 240, 235, 0.6) !important;',
        '}',
      ].join('\n');
      bbWidget.shadowRoot.appendChild(style);
      return true;
    };

    // Try immediately, then poll until the shadow root is populated
    if (!injectDisclaimerStyle()) {
      let attempts = 0;
      const interval = setInterval(() => {
        if (injectDisclaimerStyle() || attempts++ > 30) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="container py-8 sm:py-14">
        {/* Main Footer Grid — 7 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 sm:gap-8 mb-7 sm:mb-10">
          {/* Brand & Contact Info — spans 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img src={LOGO_URL} alt="My Rock Realty" className="h-16 sm:h-18 w-auto mb-4" width="72" height="72" loading="lazy" decoding="async" />
            <p className="text-cream/70 text-[13px] sm:text-sm leading-relaxed max-w-xs mb-3">
              Strategic real estate guidance for Colorado buyers, sellers, and relocation clients.
            </p>
            <div className="space-y-1.5 text-cream/60 text-sm">
              <p className="text-cream/60 font-medium">Rob Baker, Broker/Owner</p>
              <p>My Rock Realty, LLC</p>
              <p>Lic. ER100078487</p>

              <p className="pt-1">
                <a href="tel:7203636544" className="hover:text-gold transition-colors">
                  (720) 363-6544
                </a>
              </p>
              <p>
                <a href="mailto:rob@myrockhomes.com" className="hover:text-gold transition-colors">
                  rob@myrockhomes.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Navigation
            </h3>
            <div className="space-y-2.5">
              {siteLinks.map((link) =>
                link.isRoute ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-cream/70 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="block text-cream/70 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Markets */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Markets
            </h3>
            <div className="space-y-2.5 text-sm">
              {marketLinks.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  className="block text-cream/70 hover:text-gold transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buyer Guides
            </h3>
            <div className="space-y-2.5 text-sm">
              {buyerGuideLinks.map((g) => (
                <a
                  key={g.href}
                  href={g.href}
                  className="block text-cream/70 hover:text-gold transition-colors"
                >
                  {g.label}
                </a>
              ))}
            </div>
            <h3
              className="text-white font-semibold mt-6 mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Compare Cities
            </h3>
            <div className="space-y-2.5 text-sm">
              {comparisonLinks.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="block text-cream/70 hover:text-gold transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Military & PCS */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Military &amp; PCS
            </h3>
            <div className="space-y-2.5 text-sm">
              {militaryLinks.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  className="block text-cream/70 hover:text-gold transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>

          {/* Denver Property Types & Neighborhoods */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Properties
            </h3>
            <div className="space-y-2.5 text-sm">
              {denverPropertyLinks.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  className="block text-cream/70 hover:text-gold transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
            <h3
              className="text-white font-semibold mt-6 mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Neighborhoods
            </h3>
            <div className="space-y-2.5 text-sm">
              {denverNeighborhoodLinks.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  className="block text-cream/70 hover:text-gold transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
            <h3
              className="text-white font-semibold mt-6 mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Boulder Area
            </h3>
            <div className="space-y-2.5 text-sm">
              {boulderAreaLinks.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  className="block text-cream/70 hover:text-gold transition-colors"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Resources &amp; Legal
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href="/colorado-home-buying-workshop"
                className="block text-cream/70 hover:text-gold transition-colors"
              >
                Home Buying Workshop
              </a>
              <a
                href="/join-us"
                className="block text-cream/70 hover:text-gold transition-colors"
              >
                Join Our Team
              </a>
              <a
                href="/coaching"
                className="block text-cream/70 hover:text-gold transition-colors"
              >
                Coaching
              </a>
              <a href="/privacy" className="block text-cream/70 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-cream/70 hover:text-gold transition-colors">
                Terms &amp; Conditions
              </a>
              <a href="/fair-housing" className="block text-cream/70 hover:text-gold transition-colors">
                Fair Housing Statement
              </a>
              <a href="/accessibility" className="block text-cream/70 hover:text-gold transition-colors">
                Accessibility Statement
              </a>
            </div>
          </div>
        </div>

        {/* MLS Disclaimer */}
        <div className="pt-4 pb-2">
          <BuyingBuddyWidget type="Disclaimer" />
        </div>

        {/* Compliance / Disclosures Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Equal Housing Logo */}
            <div className="flex items-center gap-3 text-cream/60 shrink-0">
              <EqualHousingLogo className="w-10 h-10 sm:w-12 sm:h-12" />
              <span className="text-xs leading-tight max-w-[200px]">
                Equal Housing Opportunity
              </span>
            </div>
            {/* Brokerage Disclosure */}
            <p className="text-cream/70 text-xs leading-relaxed">
              My Rock Realty, LLC &middot; Rob Baker, Broker/Owner &middot; Colorado Real Estate License ER100078487. All real estate services are provided in compliance with applicable federal, state, and local laws, including the Fair Housing Act and the Colorado Anti-Discrimination Act.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/70 text-xs">
            &copy; {new Date().getFullYear()} My Rock Realty, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-cream/70 text-xs">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <span>&middot;</span>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <span>&middot;</span>
            <a href="/fair-housing" className="hover:text-white transition-colors">
              Fair Housing
            </a>
            <span>&middot;</span>
            <a href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
