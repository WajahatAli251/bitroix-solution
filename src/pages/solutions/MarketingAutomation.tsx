import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Clock, Workflow, Users, CheckCircle } from "lucide-react";

const MarketingAutomation = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B, #0D1B2A)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#8B5CF620'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{backgroundColor: '#7C3AED20', animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center animate-pulse">
                <Cog className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#F0F4F8'}}>
              Marketing <span style={{color: '#8B5CF6'}}>Automation</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{color: '#9BE3FF'}}>
              Work smarter, not harder. Automate your marketing workflows and watch your business scale effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Set It Once. Scale Forever.</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our marketing automation systems handle lead nurturing, customer onboarding, email sequences, 
                and sales follow-ups while you focus on strategy and growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-slate-700">Automated email marketing campaigns</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-slate-700">Lead scoring and behavioral triggers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-slate-700">Customer journey mapping and optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <span className="text-slate-700">Multi-channel workflow integration</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img src="/src/assets/devops-infrastructure.jpg" alt="Marketing Automation" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #FAF5FF, #F3E8FF)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Automation Advantage</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how automation transforms business efficiency and revenue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">90% Time Saved</h3>
              <p className="text-slate-600">Reduction in manual marketing tasks and follow-ups</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">8x Faster</h3>
              <p className="text-slate-600">Lead nurturing and conversion speed improvement</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">250% Revenue Growth</h3>
              <p className="text-slate-600">Average increase in revenue per customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#F0F4F8'}}>
            Ready to <span style={{color: '#8B5CF6'}}>Automate Your Growth</span>?
          </h2>
          <p className="text-xl mb-8" style={{color: '#9BE3FF'}}>
            Let's build marketing systems that work around the clock to grow your business.
          </p>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 text-lg"
            onClick={() => window.location.href = '/schedule-meeting'}
          >
            Automate My Marketing <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingAutomation;