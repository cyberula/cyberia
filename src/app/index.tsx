import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { PackageSection } from "@/components/sections/PackageSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { OneServiceSection } from "@/components/sections/OneServiceSection";
import { InevitableSection } from "@/components/sections/InevitableSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">
        <HeroSection />
        <ClientsSection />
        <PackageSection />
        <SupportSection />
        <OneServiceSection />
        <InevitableSection />
        <ServicesSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
