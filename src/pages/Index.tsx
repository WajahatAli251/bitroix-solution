import { lazy, Suspense, memo, useState, useEffect, useCallback } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import PackagePopup from "@/components/PackagePopup";

// Lazy load below-the-fold sections for better performance
const MissionSection = lazy(() => import("@/components/MissionSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const SolutionsSection = lazy(() => import("@/components/SolutionsSection"));
const TechCarousel = lazy(() => import("@/components/TechCarousel"));
const ClientsCarousel = lazy(() => import("@/components/ClientsCarousel"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const BlogsSection = lazy(() => import("@/components/BlogsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Chatbot = lazy(() => import("@/components/Chatbot"));
const MouseTracker = lazy(() => import("@/components/MouseTracker"));

// Loading skeleton for lazy sections
const SectionLoader = memo(() => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="h-8 bg-slate-200 rounded w-48"></div>
      <div className="h-4 bg-slate-200 rounded w-96"></div>
    </div>
  </div>
));
SectionLoader.displayName = 'SectionLoader';

// Enhanced schema markup
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://bitroixsolution.com/#webpage",
  "url": "https://bitroixsolution.com/",
  "name": "Bitroix Solution LLC - Expert Web Development, AI Chatbots & Digital Marketing",
  "description": "Award-winning web development, AI chatbot integration, UI/UX design & digital marketing services. 150+ projects delivered with 4.9★ rating.",
  "isPartOf": { "@id": "https://bitroixsolution.com/#website" },
  "about": { "@id": "https://bitroixsolution.com/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://bitroixsolution.com/lovable-uploads/c1164fdd-5ccc-43cd-b1d6-a0fe104c2807.png"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".hero-description"]
  },
  "specialty": "Web Development, AI Chatbots, Digital Marketing, SEO Services"
};

const servicesOfferedSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Digital Services Offered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Custom Web Development", "url": "https://bitroixsolution.com/web-development" },
    { "@type": "ListItem", "position": 2, "name": "AI Chatbot Development", "url": "https://bitroixsolution.com/ai-chatbots" },
    { "@type": "ListItem", "position": 3, "name": "UI/UX Design", "url": "https://bitroixsolution.com/ui-ux-design" },
    { "@type": "ListItem", "position": 4, "name": "Data Analytics", "url": "https://bitroixsolution.com/data-analytics" },
    { "@type": "ListItem", "position": 5, "name": "DevOps & MLOps", "url": "https://bitroixsolution.com/devops-mlops" },
    { "@type": "ListItem", "position": 6, "name": "SEO Services", "url": "https://bitroixsolution.com/solutions/seo-dominance" }
  ]
};

const Index = memo(() => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPackagePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('hasSeenPackagePopup', 'true');
      }, 3000); // Slightly delay popup for better UX
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = useCallback(() => setShowPopup(false), []);

  return (
    <div className="min-h-screen">
      <PackagePopup isOpen={showPopup} onClose={handleClosePopup} />
      <SEO
        title="Home"
        description="Bitroix Solution LLC - Award-winning web development, AI chatbots, SEO optimization & digital marketing. 150+ projects, 4.9★ rating. Free consultation!"
        keywords="web development company San Francisco, AI chatbot development, SEO services California, digital marketing agency, custom software development, data analytics consulting, DevOps MLOps services, UI UX design, react development, full stack developer, software outsourcing Pakistan, Karachi web development, best web development company USA, affordable SEO services, enterprise web solutions"
        canonicalUrl="https://bitroixsolution.com/"
        schemaMarkup={homePageSchema}
        jsonLdMultiple={[servicesOfferedSchema]}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com/" }
        ]}
      />
      <Navigation />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <MissionSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SolutionsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TechCarousel />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ClientsCarousel />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BlogsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      <Suspense fallback={null}>
        <MouseTracker />
      </Suspense>
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
