import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Rob provided incredible guidance during our home search and negotiation process.",
    name: "Colorado Buyer",
    detail: "Front Range, CO",
  },
  {
    quote: "Working with Rob made the buying process far less stressful.",
    name: "Colorado Buyer",
    detail: "Denver Metro, CO",
  },
  {
    quote:
      "Professional, strategic, and extremely knowledgeable about the Colorado market.",
    name: "Colorado Seller",
    detail: "Colorado Springs, CO",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-charcoal py-16 sm:py-20" id="testimonials">
      <div className="container">
        {/* Section heading */}
        <div className="mb-10 sm:mb-12">
          <p
            className="text-gold text-xs font-semibold tracking-[0.18em] uppercase mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Client Feedback
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Clients Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {testimonials.map(({ quote, name, detail }) => (
            <div
              key={quote}
              className="bg-charcoal/60 border border-gold/15 rounded-xl p-6 sm:p-7 flex flex-col gap-4"
            >
              <Quote size={20} className="text-gold/60 shrink-0" />
              <p
                className="text-cream/80 text-[15px] leading-relaxed flex-1"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                "{quote}"
              </p>
              <div>
                <p
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {name}
                </p>
                <p
                  className="text-cream/40 text-xs mt-0.5"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => {}}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold text-sm font-medium rounded-lg transition-all hover:border-gold/60 hover:bg-gold/5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            View More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
