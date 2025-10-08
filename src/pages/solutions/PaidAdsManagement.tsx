import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, DollarSign, Target, BarChart, CheckCircle } from "lucide-react";

const PaidAdsManagement = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Paid Ads Management - Google & Facebook Ads"
        description="Professional paid advertising management for Google Ads, Facebook Ads, and social media. ROI-focused campaigns with advanced targeting and optimization."
        keywords="paid ads management, Google Ads, Facebook Ads, PPC, social media advertising, paid search, display advertising"
        canonicalUrl="https://bitroixsolution.com/solutions/paid-ads-management"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B, #0D1B2A)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#F59E0B20'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{backgroundColor: '#EAB30820', animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#F0F4F8'}}>
              Paid Ads <span style={{color: '#F59E0B'}}>Management</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{color: '#9BE3FF'}}>
              Turn every advertising dollar into measurable results with performance-focused Google & Meta campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Stop Wasting Ad Spend. Start Seeing Results.</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our data-driven approach to paid advertising ensures every click counts. We optimize campaigns in real-time 
                to maximize your ROAS and minimize wasted spend across Google Ads, Facebook, and Instagram.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-slate-700">Advanced audience targeting and segmentation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-slate-700">A/B testing for ads, landing pages, and funnels</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-slate-700">Real-time optimization and bid management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                  <span className="text-slate-700">Conversion tracking and attribution modeling</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img src="/lovable-uploads/bec8f18d-ee2a-4a17-bd69-6a1ee4845629.png" alt="Paid Ads Management" className="rounded-xl shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Performance Difference</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our strategic approach transforms advertising performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4x ROAS</h3>
              <p className="text-slate-600">Average return on ad spend across all campaigns</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">65% Lower CPA</h3>
              <p className="text-slate-600">Reduction in cost per acquisition compared to industry average</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">200% CTR Boost</h3>
              <p className="text-slate-600">Improvement in click-through rates with optimized ad copy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#F0F4F8'}}>
            Ready to <span style={{color: '#F59E0B'}}>Maximize Your Ad ROI</span>?
          </h2>
          <p className="text-xl mb-8" style={{color: '#9BE3FF'}}>
            Let's create campaigns that deliver measurable results and profitable growth.
          </p>
          <Button 
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-3 text-lg"
            onClick={() => window.location.href = '/schedule-meeting'}
          >
            Launch My Campaign <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaidAdsManagement;