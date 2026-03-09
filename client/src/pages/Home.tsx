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
          title: "Colorado Real Estate Guidance for Buyers & Sellers | My Rock Realty",
          description: "Strategic real estate guidance for Colorado buyers, sellers, and relocating families. Attend the free Colorado Home Buying Workshop and work with My Rock Realty.",
          canonicalUrl: "https://www.myrockhomes.com/",
          image: {
            url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/og-preview-myrockrealty-RtkLSkUnkRHZrddDsPQWnq.webp",
            width: 1200,
            height: 630,
          },
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
