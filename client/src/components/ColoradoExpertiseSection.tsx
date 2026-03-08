import { CheckCircle } from "lucide-react";

const bullets = [
  "Colorado buyer assistance programs",
  "Competitive offer strategy and negotiation",
  "Relocation guidance for out-of-state buyers",
  "Strategic home selling and pricing approach",
];

export default function ColoradoExpertiseSection() {
  return (
    <section className="bg-charcoal/80 border-t border-gold/10 py-16 sm:py-20" id="colorado-expertise">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: heading */}
          <div>
            <p
              className="text-gold text-xs font-semibold tracking-[0.18em] uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Local Knowledge
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Colorado Market Expertise
            </h2>
            <p
              className="mt-4 text-[15px] sm:text-base text-cream/60 leading-relaxed max-w-sm"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Deep knowledge of the Colorado market — from the Front Range to mountain communities — to help you make confident decisions.
            </p>
          </div>

          {/* Right: bullet list */}
          <ul className="flex flex-col gap-4 sm:gap-5">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-gold shrink-0 mt-0.5"
                />
                <span
                  className="text-cream/80 text-[15px] sm:text-base leading-snug"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
