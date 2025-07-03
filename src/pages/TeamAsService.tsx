import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUp, Users } from "lucide-react";

const TeamAsService = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scheduleRedirect = () => {
    window.location.href = "mailto:contact@bitroixsolution.com?subject=Schedule Meeting - Team as a Service";
  };

  const approach = [
    {
      number: "01",
      title: "Discussion",
      description: "Reach us out and we will give you all the details regarding the technologies, availability and pricing with one of our and your senior tech-leads."
    },
    {
      number: "02", 
      title: "Onboarding",
      description: "The project will start with face to face or virtual meeting. Where the project requirements, outlines and preferred way of working will be finalized."
    },
    {
      number: "03",
      title: "Execution", 
      description: "While the project is in progress we will update you with the progress on daily basis."
    },
    {
      number: "04",
      title: "Modification",
      description: "After the execution of the project, the team can be modified (expanded, reduced, changed) according to your needs and business requirements."
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "Angular", icon: "🅰️" },
    { name: "Vue.js", icon: "💚" },
    { name: "Flutter", icon: "🦋" },
    { name: "Swift", icon: "🍎" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Team as a Service (TaaS)
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Scale your development capabilities with our expert on-demand tech teams tailored to your project needs.
            </p>
            <Button 
              onClick={scheduleRedirect}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Overview Of Service</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="text-6xl text-orange-400 mb-6">"</div>
                <p className="text-xl text-slate-600 leading-relaxed italic">
                  Our expert team is ready to contribute to your project. We provide you the ability to scale up and down at any time and get the best tailor-made solutions with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does it Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">How Does it Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-emerald-500 bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Team's Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">👨‍💻</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Full-Stack Developers</h3>
                <p className="text-slate-600">Expert developers proficient in front-end and back-end technologies</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">UI/UX Designers</h3>
                <p className="text-slate-600">Creative designers focused on user experience and interface design</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">DevOps Engineers</h3>
                <p className="text-slate-600">Infrastructure specialists ensuring smooth deployment and operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Technologies We Have Experts In</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{tech.icon}</div>
                <h3 className="text-lg font-medium text-slate-900">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default TeamAsService;