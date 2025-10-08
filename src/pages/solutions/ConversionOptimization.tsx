import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, MousePointer, BarChart3, Eye, CheckCircle } from "lucide-react";

const ConversionOptimization = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Conversion Rate Optimization (CRO)"
        description="Maximize your website's conversion rates with data-driven CRO strategies. A/B testing, user behavior analysis, and landing page optimization to boost sales."
        keywords="conversion rate optimization, CRO, A/B testing, landing page optimization, user experience optimization, conversion funnel"
        canonicalUrl="https://bitroixsolution.com/solutions/conversion-optimization"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B, #0D1B2A)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#EF444420'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{backgroundColor: '#DC262620', animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-rose-600 rounded-full flex items-center justify-center animate-pulse">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#F0F4F8'}}>
              Conversion Rate <span style={{color: '#EF4444'}}>Optimization</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{color: '#9BE3FF'}}>
              Turn more visitors into customers with psychology-backed design and data-driven optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Visitors Aren't Buying? We Fix That.</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our CRO experts combine user behavior analysis, A/B testing, and conversion psychology 
                to transform your website into a customer acquisition machine.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-slate-700">User behavior analysis and heatmap studies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-slate-700">A/B testing for pages, forms, and CTAs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-slate-700">Conversion funnel optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                  <span className="text-slate-700">Psychology-driven design improvements</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img src="/lovable-uploads/35a9e2d4-2082-408b-ab86-d95889dc822f.png" alt="Conversion Optimization" className="rounded-xl shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #FEF2F2, #FEE2E2)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Conversion Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how optimization transforms website performance and revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MousePointer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3.5x Conversion Rate</h3>
              <p className="text-slate-600">Average improvement in conversion rates after optimization</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">60% More Revenue</h3>
              <p className="text-slate-600">Increase in revenue from existing traffic</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">45% Lower Bounce</h3>
              <p className="text-slate-600">Reduction in bounce rate with improved user experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#F0F4F8'}}>
            Ready to <span style={{color: '#EF4444'}}>Fix Your Funnel</span>?
          </h2>
          <p className="text-xl mb-8" style={{color: '#9BE3FF'}}>
            Let's turn your website visitors into paying customers with proven optimization strategies.
          </p>
          <Button 
            className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white px-8 py-3 text-lg"
            onClick={() => window.location.href = '/schedule-meeting'}
          >
            Fix My Funnel <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConversionOptimization;