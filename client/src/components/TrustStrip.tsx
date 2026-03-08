import { ShieldCheck, Clock, Star, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed Colorado Real Estate Broker" },
  { icon: Clock, label: "25+ Years Negotiation Experience" },
  { icon: Star, label: "Former Zillow® Agent Coach" },
  { icon: MapPin, label: "Serving Colorado Buyers & Sellers Since 2018" },
];

export default function TrustStrip() {
  return (
    <section className="bg-charcoal border-t border-b border-gold/15 py-5 sm:py-6">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-start sm:items-center gap-2.5 sm:gap-3"
            >
              <Icon
                size={16}
                className="text-gold shrink-0 mt-0.5 sm:mt-0"
              />
              <span
                className="text-[12px] sm:text-[13px] text-cream/70 leading-snug"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
