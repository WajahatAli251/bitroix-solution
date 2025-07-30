
const SolutionsSection = () => {
  const solutions = [
    {
      icon: "/lovable-uploads/3b0518a5-1130-4236-ab3f-b056fd7a3879.png", // Cloud Computing
      title: "Cloud Computing",
      description: "Scale smarter with cloud-first solutions.",
      color: "from-blue-500 to-cyan-500",
      isImage: true
    },
    {
      icon: "/lovable-uploads/5af0699a-3f6c-47ca-9296-6f77370abaed.png", // Computer Vision
      title: "Computer Vision",
      description: "Transforming how systems see and understand images.",
      color: "from-purple-500 to-pink-500",
      isImage: true
    },
    {
      icon: "/lovable-uploads/5ce753d6-53a1-44a0-8c73-950373ffbf91.png", // Fraud Detection
      title: "Fraud Detection",
      description: "AI-driven fraud analytics to protect your assets.",
      color: "from-red-500 to-orange-500",
      isImage: true
    },
    {
      icon: "/lovable-uploads/95adaf87-9edd-406f-a56a-7bbb4c50786a.png", // Artificial Intelligence
      title: "Artificial Intelligence",
      description: "From automation to prediction, powered by AI.",
      color: "from-green-500 to-teal-500",
      isImage: true
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">Innovative Solutions We Leverage</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-scale-in"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Cutting-edge technologies that power our services and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4 hover:scale-105 group animate-fade-in"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-full flex items-center justify-center mb-6 text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                {solution.isImage ? (
                  <img src={solution.icon} alt={solution.title} className="h-12 w-12 object-contain" />
                ) : (
                  solution.icon
                )}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{solution.title}</h3>
              <p className="text-gray-300 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
