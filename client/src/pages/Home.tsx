/**
 * My Rock Realty — Home Page
 * Design: "Front Range Modern" — Colorado Contemporary Architecture meets Digital Craft
 * Palette: Warm charcoal (#292524), warm cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import SeoHead from "@/components/seo/SeoHead";
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SeoHead
        metadata={{
          title: "Colorado Real Estate | My Rock Realty",
          description: "Colorado real estate guidance for buyers, sellers, and relocating families. Work with My Rock Realty.",
          canonicalUrl: "https://www.myrockhomes.com/",
        }}
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
