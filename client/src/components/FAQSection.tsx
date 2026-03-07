import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What home buying programs are available in Colorado?",
    answer:
      "Colorado offers a range of national, state, and local programs designed to help buyers reduce down payments, lower closing costs, and access favorable financing. These include FHA, VA, USDA, CHFA, and various county-specific assistance programs. Rob helps you identify which programs you may qualify for and how to maximize their benefits.",
  },
  {
    question: "How is working with My Rock Realty different from other agents?",
    answer:
      "Rob Baker brings a coaching-based approach shaped by 25+ years in sales and negotiations and 4.5 years as an Agent Coach & Consultant at Zillow. Rather than a transactional experience, you get strategic guidance, education, and a clear plan — whether you're buying, selling, or relocating.",
  },
  {
    question: "Can you help me if I'm moving to Colorado from another state?",
    answer:
      "Absolutely. Rob specializes in helping relocation clients navigate the Colorado market. He'll guide you through neighborhoods, market conditions, and buying strategies so you can make a confident decision — even from a distance.",
  },
  {
    question: "What if I need an agent in a state other than Colorado?",
    answer:
      "Rob has a trusted referral network of vetted agents in all 50 states. Whether you're moving out of Colorado, helping a friend or family member, or need a connection for any reason, Rob can match you with a reliable professional in your target market.",
  },
  {
    question: "How does your seller strategy work?",
    answer:
      "Rob builds a customized selling plan around data-driven pricing, modern marketing technology, and strategic positioning. The goal is to create demand, attract strong offers, and negotiate the best possible outcome — not just list your home and hope for the best.",
  },
  {
    question: "What is the Colorado Home Buying Workshop?",
    answer:
      "It's a free weekly educational session hosted by Rob for anyone interested in buying a home in Colorado. You'll learn about available programs, financing strategies, and the buying process — with no pressure or sales pitch. Visit ColoradoHomeBuyingWorkshop.com for details.",
  },
  {
    question: "Do you help with land purchases and investment properties?",
    answer:
      "Yes. Rob works with clients looking for land, move-up properties, and strategic real estate investments across Colorado. He provides the same data-driven analysis and negotiation support for these transactions as he does for residential buyers and sellers.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-warm-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Common Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-cream-dark/60 rounded px-4 sm:px-6 data-[state=open]:border-gold/30 transition-colors"
                >
                  <AccordionTrigger
                    className="text-left text-charcoal font-semibold py-5 hover:text-gold-dark transition-colors [&[data-state=open]]:text-gold-dark"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal-light/70 text-[14px] sm:text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
