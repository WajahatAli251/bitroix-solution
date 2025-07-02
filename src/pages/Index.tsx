
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <SolutionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
