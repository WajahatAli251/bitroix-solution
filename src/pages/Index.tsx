import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import SolutionsSection from "@/components/SolutionsSection";
import TechCarousel from "@/components/TechCarousel";
import ClientsCarousel from "@/components/ClientsCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import MouseTracker from "@/components/MouseTracker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Home"
        description="Bitroix Solution LLC - Expert web development, AI chatbots, SEO optimization, and digital marketing services. Transform your business with professional custom software solutions, data analytics, and DevOps expertise."
        keywords="web development, AI chatbots, SEO services, digital marketing, Lancaster PA, Pennsylvania web design, custom software development, data analytics, DevOps, MLOps"
        canonicalUrl="https://bitroixsolution.com/"
      />
      <Navigation />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <StatsSection />
      <SolutionsSection />
      <TechCarousel />
      <ClientsCarousel />
      <ReviewsSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
      <Chatbot />
      <MouseTracker />
    </div>
  );
};

export default Index;
