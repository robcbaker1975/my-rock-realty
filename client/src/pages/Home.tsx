/**
 * My Rock Realty — Home Page
 * Design: "Front Range Modern" — Colorado Contemporary Architecture meets Digital Craft
 * Palette: Warm charcoal (#292524), warm cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import BuyersSection from "@/components/BuyersSection";
import SellersSection from "@/components/SellersSection";
import LandSection from "@/components/LandSection";
import RelocationsSection from "@/components/RelocationsSection";
import WorkshopSection from "@/components/WorkshopSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
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
        <WorkshopSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
