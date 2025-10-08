import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Zap, TrendingUp, Users, CheckCircle } from "lucide-react";

const LeadGeneration = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Lead Generation Systems"
        description="Automated lead generation systems that deliver qualified prospects to your sales pipeline. Advanced targeting, content marketing, and lead nurturing strategies."
        keywords="lead generation, lead capture, marketing automation, sales funnel, prospect generation, B2B leads, automated marketing"
        canonicalUrl="https://bitroixsolution.com/solutions/lead-generation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B, #0D1B2A)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#00BFFF10'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{backgroundColor: '#33F3FF08', animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#F0F4F8'}}>
              Lead Generation <span style={{color: '#00BFFF'}}>Systems</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{color: '#9BE3FF'}}>
              Transform your business with automated lead generation that delivers qualified prospects directly to your sales pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Stop Chasing Leads. Let Them Come to You.</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our lead generation systems use advanced targeting, compelling content, and automated nurturing to attract, 
                capture, and qualify leads while you focus on closing deals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Automated lead capture and qualification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Multi-channel lead nurturing campaigns</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Real-time lead scoring and analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">CRM integration and workflow automation</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img src="/lovable-uploads/976ae802-eca8-4e3b-980e-5670c46536ef.png" alt="Lead Generation Systems" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #F8FAFC, #EDF2F7)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Business Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how our lead generation systems transform businesses across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">300% ROI</h3>
              <p className="text-slate-600">Average return on investment within the first 6 months</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">5x More Leads</h3>
              <p className="text-slate-600">Qualified leads generated compared to traditional methods</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">80% Less Time</h3>
              <p className="text-slate-600">Reduction in manual lead qualification and follow-up time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#F0F4F8'}}>
            Ready to <span style={{color: '#00BFFF'}}>Generate More Leads</span>?
          </h2>
          <p className="text-xl mb-8" style={{color: '#9BE3FF'}}>
            Let's build a lead generation system that works around the clock to grow your business.
          </p>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg"
            onClick={() => window.location.href = '/schedule-meeting'}
          >
            Book Your Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadGeneration;