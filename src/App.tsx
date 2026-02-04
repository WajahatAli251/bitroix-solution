import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const UIUXDesign = lazy(() => import("./pages/UIUXDesign"));
const DevOpsMLOps = lazy(() => import("./pages/DevOpsMLOps"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics"));
const TeamAsService = lazy(() => import("./pages/TeamAsService"));
const DesignConsultancy = lazy(() => import("./pages/DesignConsultancy"));
const AIChatbots = lazy(() => import("./pages/AIChatbots"));
const MeetingScheduler = lazy(() => import("./pages/MeetingScheduler"));
const Projects = lazy(() => import("./pages/Projects"));
const Products = lazy(() => import("./pages/Products"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LeadGeneration = lazy(() => import("./pages/solutions/LeadGeneration"));
const SEODominance = lazy(() => import("./pages/solutions/SEODominance"));
const PaidAdsManagement = lazy(() => import("./pages/solutions/PaidAdsManagement"));
const MarketingAutomation = lazy(() => import("./pages/solutions/MarketingAutomation"));
const ConversionOptimization = lazy(() => import("./pages/solutions/ConversionOptimization"));
const SocialMediaGrowth = lazy(() => import("./pages/solutions/SocialMediaGrowth"));
const Career = lazy(() => import("./pages/Career"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/devops-mlops" element={<DevOpsMLOps />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/team-as-service" element={<TeamAsService />} />
            <Route path="/design-consultancy" element={<DesignConsultancy />} />
            <Route path="/ai-chatbots" element={<AIChatbots />} />
            <Route path="/schedule-meeting" element={<MeetingScheduler />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions/lead-generation" element={<LeadGeneration />} />
            <Route path="/solutions/seo-dominance" element={<SEODominance />} />
            <Route path="/solutions/paid-ads-management" element={<PaidAdsManagement />} />
            <Route path="/solutions/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/solutions/conversion-optimization" element={<ConversionOptimization />} />
            <Route path="/solutions/social-media-growth" element={<SocialMediaGrowth />} />
            <Route path="/career" element={<Career />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
