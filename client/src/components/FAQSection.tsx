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
      "Colorado offers a range of national, state, and local programs designed to help eligible buyers reduce down payments, lower closing costs, and access financing options that may better fit their goals. These may include FHA, VA, USDA, CHFA, and other assistance programs. Rob helps buyers understand which options may be worth exploring based on their situation.",
  },
  {
    question: "How is working with My Rock Realty different from other agents?",
    answer:
      "Rob Baker brings a coaching-based approach shaped by 25+ years in sales and negotiations and 4.5 years as an Agent Coach & Consultant at Zillow. Rather than a purely transactional experience, clients get strategic guidance, education, and a clear plan whether they are buying, selling, relocating, or exploring their options.",
  },
  {
    question: "Can you help me if I'm moving to Colorado from another state?",
    answer:
      "Absolutely. Rob helps relocation clients understand the Colorado market, buying process, timing, and property-specific considerations so they can make a more informed decision — even from a distance. Buyers should independently research any schools, crime data, neighborhood characteristics, demographics, or other community factors that are important to them.",
  },
  {
    question: "What if I need an agent in a state other than Colorado?",
    answer:
      "Rob has a trusted referral network of vetted agents in all 50 states. Whether you're moving out of Colorado, helping a friend or family member, or need a connection elsewhere, Rob can connect you with a reliable professional in your target market.",
  },
  {
    question: "How does your seller strategy work?",
    answer:
      "Rob builds a customized selling plan around data-informed pricing, modern marketing, and strategic positioning. The goal is to create demand, attract strong offers, and negotiate the strongest overall outcome for the client.",
  },
  {
    question: "What is the Colorado Home Buying Workshop?",
    answer:
      "It's a free weekly educational session hosted by Rob for people interested in buying a home in Colorado. Attendees learn about common buyer programs, financing options, concessions strategy, and the buying process in a practical, no-pressure format. Visit ColoradoHomeBuyingWorkshop.com for details.",
  },
  {
    question: "Do you help with land purchases and investment properties?",
    answer:
      "Yes. Rob works with clients looking for land, move-up properties, and strategic real estate investments across Colorado, bringing the same negotiation support, market analysis, and strategy-focused guidance used in residential transactions.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-12 sm:py-20 md:py-28 bg-warm-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-7 sm:mb-12">
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
            <Accordion type="single" collapsible className="space-y-2.5">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-cream-dark/60 rounded px-4 sm:px-6 data-[state=open]:border-gold/40 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger
                    className="text-left text-charcoal font-semibold text-[15px] sm:text-base py-4 sm:py-5 hover:text-gold-dark transition-colors [&[data-state=open]]:text-gold-dark"
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
