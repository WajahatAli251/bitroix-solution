
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TechCarousel from "@/components/TechCarousel";
import ClientsCarousel from "@/components/ClientsCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import MouseTracker from "@/components/MouseTracker";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <StatsSection />
      <SolutionsSection />
      <TechCarousel />
      <ClientsCarousel />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <Chatbot />
      <WhatsAppButton />
      <MouseTracker />
    </div>
  );
};

export default Index;
