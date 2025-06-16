import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import WhatWeDeliverSection from "@/components/what-we-deliver-section";
import IndustriesSection from "@/components/industries-section";
import CaseStudiesSection from "@/components/case-studies-section";
import ProcessSection from "@/components/process-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ai-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhatWeDeliverSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
