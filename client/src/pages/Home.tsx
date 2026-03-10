/**
 * My Rock Realty — Home Page
 * Design: "Front Range Modern" — Colorado Contemporary Architecture meets Digital Craft
 * Palette: Warm charcoal (#292524), warm cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import BuyersSection from "@/components/BuyersSection";
import SellersSection from "@/components/SellersSection";
import LandSection from "@/components/LandSection";
import RelocationsSection from "@/components/RelocationsSection";
import HomeTestimonialsSection from "@/components/HomeTestimonialsSection";
import WorkshopSection from "@/components/WorkshopSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import HomeColoradoExpertiseSection from "@/components/HomeColoradoExpertiseSection";
import ContactSection from "@/components/ContactSection";
import HomeFinalCTASection from "@/components/HomeFinalCTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const faqContent = [
  {
    question: "What home buying programs are available in Colorado?",
    answer: "Colorado offers a range of national, state, and local programs designed to help eligible buyers reduce down payments, lower closing costs, and access financing options that may better fit their goals. These may include FHA, VA, USDA, CHFA, and other assistance programs. Rob helps buyers understand which options may be worth exploring based on their situation.",
  },
  {
    question: "How is working with My Rock Realty different from other agents?",
    answer: "Rob Baker brings a coaching-based approach shaped by 25+ years in sales and negotiations and 4.5 years as an Agent Coach & Consultant at Zillow. Rather than a purely transactional experience, clients get strategic guidance, education, and a clear plan whether they are buying, selling, relocating, or exploring their options.",
  },
  {
    question: "Can you help me if I'm moving to Colorado from another state?",
    answer: "Absolutely. Rob helps relocation clients understand the Colorado market, buying process, timing, and property-specific considerations so they can make a more informed decision — even from a distance. Buyers should independently research any schools, crime data, neighborhood characteristics, demographics, or other community factors that are important to them.",
  },
  {
    question: "What if I need an agent in a state other than Colorado?",
    answer: "Rob has a trusted referral network of vetted agents in all 50 states. Whether you're moving out of Colorado, helping a friend or family member, or need a connection elsewhere, Rob can connect you with a reliable professional in your target market.",
  },
  {
    question: "How does your seller strategy work?",
    answer: "Rob builds a customized selling plan around data-informed pricing, modern marketing, and strategic positioning. The goal is to create demand, attract strong offers, and negotiate the strongest overall outcome for the client.",
  },
  {
    question: "What is the Colorado Home Buying Workshop?",
    answer: "It's a free weekly educational session hosted by Rob for people interested in buying a home in Colorado. Attendees learn about common buyer programs, financing options, concessions strategy, and the buying process in a practical, no-pressure format. Visit ColoradoHomeBuyingWorkshop.com for details.",
  },
  {
    question: "Do you help with land purchases and investment properties?",
    answer: "Yes. Rob works with clients looking for land, move-up properties, and strategic real estate investments across Colorado, bringing the same negotiation support, market analysis, and strategy-focused guidance used in residential transactions.",
  },
];

export default function Home() {
  const faqSchema = buildFAQPageSchema(faqContent);
  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead
        metadata={{
          title: "Colorado Real Estate | My Rock Realty",
          description: "Strategic real estate guidance for Colorado buyers, sellers, and relocating families. Work with My Rock Realty — serving Colorado with referrals nationwide.",
          canonicalUrl: "https://www.myrockhomes.com/",
        }}
        schema={faqSchema ? [faqSchema] : []}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <BuyersSection />
        <SellersSection />
        <LandSection />
        <RelocationsSection />
        <HomeTestimonialsSection />
        <WorkshopSection />
        <AboutSection />
        <ProcessSection />
        <HomeColoradoExpertiseSection />
        <ContactSection />
        <HomeFinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
