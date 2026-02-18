import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OperationsSection from "@/components/OperationsSection";
import StrategicMineralSection from "@/components/StrategicMineralSection";
import InvestorRelationsSection from "@/components/InvestorRelationsSection";
import InvestorDocumentsSection from "@/components/InvestorDocumentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import useFadeIn from "@/hooks/useFadeIn";

const Index = () => {
  useFadeIn();

  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <OperationsSection />
      <StrategicMineralSection />
      <InvestorRelationsSection />
      <InvestorDocumentsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
