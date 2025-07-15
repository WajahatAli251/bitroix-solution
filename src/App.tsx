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
import MeetingScheduler from "./pages/MeetingScheduler";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

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
          <Route path="/schedule-meeting" element={<MeetingScheduler />} />
          <Route path="/projects" element={<Projects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
