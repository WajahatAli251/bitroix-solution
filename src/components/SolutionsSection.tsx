
const SolutionsSection = () => {
  const solutions = [
    {
      icon: "☁️",
      title: "Cloud Computing",
      description: "Scale smarter with cloud-first solutions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Transforming how systems see and understand images.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🛡️",
      title: "Fraud Detection",
      description: "AI-driven fraud analytics to protect your assets.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: "🧠",
      title: "Artificial Intelligence",
      description: "From automation to prediction, powered by AI.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Innovative Solutions We Leverage</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies that power our services and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-full flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {solution.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
              <p className="text-gray-300 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Visualization */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Technologies We Master</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'ML/AI', 'DevOps'].map((tech, index) => (
              <div 
                key={index}
                className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-blue-400 transition-colors duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
