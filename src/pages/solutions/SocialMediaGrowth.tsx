import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Share2, Users2, MessageCircle, CheckCircle } from "lucide-react";

const SocialMediaGrowth = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B, #0D1B2A)'}}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#EC489920'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-2xl animate-pulse" style={{backgroundColor: '#DB256620', animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#F0F4F8'}}>
              Social Media <span style={{color: '#EC4899'}}>Growth</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto" style={{color: '#9BE3FF'}}>
              Build a brand that people follow, trust, and buy from. No fluff — just measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Turn Social Media Into Your Sales Engine</h2>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our strategic approach to social media marketing combines authentic content creation, 
                community building, and performance tracking to drive real business results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-slate-700">Strategic content planning and creation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-slate-700">Community management and engagement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-slate-700">Influencer partnerships and collaborations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-pink-600 mr-3" />
                  <span className="text-slate-700">Social commerce and conversion optimization</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <img src="/lovable-uploads/a95641c7-884d-48c4-976d-019c9672302b.png" alt="Social Media Growth" className="rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #FDF2F8, #FCE7F3)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Social Impact</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how strategic social media transforms brand presence and sales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">10x Follower Growth</h3>
              <p className="text-slate-600">Average increase in engaged followers within 6 months</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">500% Engagement</h3>
              <p className="text-slate-600">Boost in likes, comments, shares, and meaningful interactions</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">40% Social Sales</h3>
              <p className="text-slate-600">Of total revenue generated through social media channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #0D1B2A, #1B263B)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#F0F4F8'}}>
            Ready to <span style={{color: '#EC4899'}}>Boost Your Socials</span>?
          </h2>
          <p className="text-xl mb-8" style={{color: '#9BE3FF'}}>
            Let's build a social media presence that drives real business results.
          </p>
          <Button 
            className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 text-lg"
            onClick={() => window.location.href = '/schedule-meeting'}
          >
            Boost My Socials <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaGrowth;