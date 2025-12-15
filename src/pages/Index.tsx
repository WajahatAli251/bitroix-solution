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
        description="Bitroix Solution LLC - Award-winning web development, AI chatbots, SEO optimization & digital marketing. 150+ projects, 4.9★ rating. Free consultation!"
        keywords="web development company San Francisco, AI chatbot development, SEO services California, digital marketing agency, custom software development, data analytics consulting, DevOps MLOps services, UI UX design, react development, full stack developer, software outsourcing Pakistan, Karachi web development"
        canonicalUrl="https://bitroixsolution.com/"
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com/" }
        ]}
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
