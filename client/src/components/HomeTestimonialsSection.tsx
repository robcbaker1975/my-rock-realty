import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Rob has been my go-to for years. He's helped me sell, buy, and even sell again — and each time it's been smoother than I imagined. He got me into a beautiful new home at under 4% interest. I trust him completely because he always delivers results that feel impossible until he makes them happen.",
    name: "Holly T.",
    context: "Repeat Buyer & Seller, Johnstown CO",
  },
  {
    quote:
      "Buying from another state felt overwhelming, but Rob made it easy. He did video walkthroughs so I could shop from Missouri, and when I found the one, he negotiated everything so I only brought about $2,000 to closing. Now I'm living in my dream home in Bailey, Colorado.",
    name: "Mark B.",
    context: "Out-of-State Buyer, Bailey CO",
  },
  {
    quote:
      "Rob helped us buy our first home with zero down, which was life-changing for us. When it was time to move, he sold that same home in just 5 weeks — and we got well over asking! He truly looks out for his clients.",
    name: "Brandon & Logan T.",
    context: "First-Time Buyers",
  },
];

export default function HomeTestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-warm-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-dark text-xs font-semibold tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Client Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Clients Say About Working With Rob
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-charcoal/60 text-base leading-relaxed"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Real outcomes from buyers, sellers, and relocating families across Colorado.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-6 sm:p-7 rounded bg-white border border-charcoal/10 hover:border-gold/30 transition-colors shadow-sm"
            >
              <p
                className="text-charcoal/80 text-[15px] leading-relaxed flex-1 italic"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                "{t.quote}"
              </p>
              <div>
                <p
                  className="text-charcoal font-semibold text-sm"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-gold-dark text-xs font-medium tracking-wide uppercase mt-0.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {t.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
