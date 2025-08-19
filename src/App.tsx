import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WebDevelopment from "./pages/WebDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import DevOpsMLOps from "./pages/DevOpsMLOps";
import DataAnalytics from "./pages/DataAnalytics";
import TeamAsService from "./pages/TeamAsService";
import DesignConsultancy from "./pages/DesignConsultancy";
import AIChatbots from "./pages/AIChatbots";
import MeetingScheduler from "./pages/MeetingScheduler";
import Projects from "./pages/Projects";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import LeadGeneration from "./pages/solutions/LeadGeneration";
import SEODominance from "./pages/solutions/SEODominance";
import PaidAdsManagement from "./pages/solutions/PaidAdsManagement";
import MarketingAutomation from "./pages/solutions/MarketingAutomation";
import ConversionOptimization from "./pages/solutions/ConversionOptimization";
import SocialMediaGrowth from "./pages/solutions/SocialMediaGrowth";
import Career from "./pages/Career";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
