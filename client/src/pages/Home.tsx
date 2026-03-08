/**
 * My Rock Realty — Home Page
 * Design: "Front Range Modern" — Colorado Contemporary Architecture meets Digital Craft
 * Palette: Warm charcoal (#292524), warm cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useEffect } from "react";
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
  useEffect(() => {
    document.title = "Colorado Real Estate Guidance for Buyers & Sellers | My Rock Realty";
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement('meta'); (metaDesc as HTMLMetaElement).name = 'description'; document.head.appendChild(metaDesc); }
    (metaDesc as HTMLMetaElement).content = "Strategic real estate guidance for Colorado buyers, sellers, and relocating families. Attend the free Colorado Home Buying Workshop and work with My Rock Realty.";
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); (canonical as HTMLLinkElement).rel = 'canonical'; document.head.appendChild(canonical); }
    (canonical as HTMLLinkElement).href = 'https://www.myrockhomes.com/';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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
