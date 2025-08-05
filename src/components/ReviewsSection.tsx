import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      position: "CTO",
      rating: 5,
      comment: "Bitroix Solution LLC transformed our digital infrastructure completely. Their expertise in cloud migration and DevOps implementation helped us reduce deployment time by 80%. Exceptional team with outstanding communication skills.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "StartupBase",
      position: "Founder & CEO",
      comment: "Working with Bitroix has been a game-changer for our startup. They built our MVP from scratch and helped us scale to 10,000+ users. Their full-stack development skills are top-notch.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      company: "DataFlow Analytics",
      position: "Head of Operations",
      comment: "The data analytics solutions provided by Bitroix gave us insights we never knew we needed. Their machine learning models increased our prediction accuracy by 40%. Highly recommend their data science team.",
      rating: 5,
      avatar: "👩‍🔬"
    },
    {
      name: "David Wilson",
      company: "E-commerce Plus",
      position: "Product Manager",
      comment: "Bitroix redesigned our entire e-commerce platform. The new UI/UX design increased our conversion rates by 35%. Their attention to detail and user-centered approach is remarkable.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Lisa Thompson",
      company: "FinTech Innovations",
      position: "VP of Technology",
      comment: "Security and compliance are critical in fintech. Bitroix delivered a robust, secure platform that exceeded all regulatory requirements. Their DevOps practices ensure 99.9% uptime.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Ahmed Hassan",
      company: "Global Logistics Co",
      position: "IT Director",
      comment: "The team-as-a-service model worked perfectly for our international expansion. Bitroix provided skilled developers who integrated seamlessly with our existing team. Excellent project management.",
      rating: 5,
      avatar: "👨‍🏭"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-600">{review.position}</p>
                  <p className="text-sm text-blue-600 font-medium">{review.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-lg mb-6 opacity-90">Let's discuss how we can help transform your business</p>
            <button
              onClick={() => window.location.href = "mailto:info@bitroixsolution.com?subject=Project Inquiry"}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;