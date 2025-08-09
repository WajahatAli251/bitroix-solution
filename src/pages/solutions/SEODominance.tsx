import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Trophy, BarChart3, Globe, CheckCircle } from "lucide-react";

const SEODominance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B, #0D1B2A)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#10B981'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{backgroundColor: '#059669', animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#F0F4F8'}}>
              SEO That <span style={{color: '#10B981'}}>Dominates</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{color: '#9BE3FF'}}>
              Claim your spot at the top of Google search results and watch your organic traffic soar.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Be Found When It Matters Most</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our proven SEO strategies combine technical optimization, content excellence, and authority building 
                to secure top rankings for your most valuable keywords.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Comprehensive keyword research and strategy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Technical SEO optimization and site audits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">High-quality content creation and optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Authority building and link acquisition</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img src="/lovable-uploads/74657b6a-cd12-40ee-b239-66b76822d751.png" alt="SEO Strategy" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #F0FDF4, #ECFDF5)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The SEO Advantage</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the measurable impact of ranking at the top of search results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Top 3 Rankings</h3>
              <p className="text-slate-600">Average position for target keywords within 6 months</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">400% Traffic Boost</h3>
              <p className="text-slate-600">Increase in organic search traffic within the first year</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">50+ Keywords</h3>
              <p className="text-slate-600">Average number of page-one rankings achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#F0F4F8'}}>
            Ready to <span style={{color: '#10B981'}}>Dominate Search Results</span>?
          </h2>
          <p className="text-xl mb-8" style={{color: '#9BE3FF'}}>
            Let's create an SEO strategy that puts you ahead of the competition.
          </p>
          <Button 
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg"
            onClick={() => window.location.href = '/schedule-meeting'}
          >
            Start Your SEO Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEODominance;