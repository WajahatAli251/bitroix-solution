import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, Check, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Technology Logo Imports
import pythonLogo from '@/assets/tech-logos/python.png';
import powerbiLogo from '@/assets/tech-logos/powerbi.png';
import tableauLogo from '@/assets/tech-logos/tableau.png';
import pandasLogo from '@/assets/tech-logos/pandas.png';
import numpyLogo from '@/assets/tech-logos/numpy.png';
import jupyterLogo from '@/assets/tech-logos/jupyter.png';
import sqlLogo from '@/assets/tech-logos/sql.png';
import sparkLogo from '@/assets/tech-logos/spark.png';
import excelLogo from '@/assets/tech-logos/excel.png';
import awsLogo from '@/assets/tech-logos/aws.png';
import plotlyLogo from '@/assets/tech-logos/plotly.png';
import tensorflowLogo from '@/assets/tech-logos/tensorflow.svg';
import scikitLearnLogo from '@/assets/tech-logos/scikit-learn.svg';

// Using existing project images for analytics context
import dataAnalyticsProject from '@/assets/data-analytics.jpg';

const DataAnalytics = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const processSteps = [
    {
      number: "01",
      title: "Problem Definition",
      description: "We work closely with you to define and understand your business problem. What questions need answers? What decisions need data support?",
      deliverables: ["Business Requirements", "Success Metrics", "Data Requirements"]
    },
    {
      number: "02", 
      title: "Data Collection",
      description: "We identify and collect data from various sources including databases, APIs, files, and third-party services. We ensure comprehensive data coverage for accurate analysis.",
      deliverables: ["Data Sources Inventory", "Data Pipeline", "Raw Data Repository"]
    },
    {
      number: "03",
      title: "Data Cleaning & Preparation", 
      description: "The collected data is processed to remove incorrect, duplicate, or incomplete records. We transform raw data into analysis-ready datasets.",
      deliverables: ["Cleaned Datasets", "Data Dictionary", "Quality Reports"]
    },
    {
      number: "04",
      title: "Analysis & Modeling",
      description: "We apply statistical methods, machine learning algorithms, and analytical techniques to extract meaningful insights from your data.",
      deliverables: ["Statistical Analysis", "Predictive Models", "Pattern Discovery"]
    },
    {
      number: "05", 
      title: "Visualization & Reporting",
      description: "Complex insights are translated into intuitive dashboards and visual reports that enable quick understanding and decision-making.",
      deliverables: ["Interactive Dashboards", "Executive Reports", "KPI Tracking"]
    },
    {
      number: "06",
      title: "Deployment & Monitoring",
      description: "Analytics solutions are deployed to production with ongoing monitoring to ensure continued accuracy and relevance of insights.",
      deliverables: ["Production Deployment", "Automated Reports", "Performance Monitoring"]
    }
  ];

  const projects = [
    {
      name: "E-Commerce Analytics Platform",
      image: dataAnalyticsProject,
      description: "Comprehensive analytics solution for a major online retailer to optimize sales and customer experience.",
      challenge: "The client had fragmented data across multiple systems with no unified view of customer behavior or sales performance.",
      solution: "Built a centralized data warehouse with real-time dashboards tracking customer journey, inventory, and revenue metrics.",
      results: ["25% increase in conversion rate", "40% reduction in inventory costs", "Real-time executive dashboards"],
      technologies: ["Python", "Power BI", "SQL", "AWS", "Tableau"]
    },
    {
      name: "Healthcare Predictive Analytics",
      image: "/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png",
      description: "Predictive analytics system for a healthcare network to improve patient outcomes and resource allocation.",
      challenge: "Hospital struggling with patient readmission rates and inefficient resource scheduling leading to increased costs.",
      solution: "Developed ML models to predict patient readmission risk and optimize bed allocation and staffing schedules.",
      results: ["30% reduction in readmissions", "20% improvement in resource utilization", "HIPAA-compliant analytics"],
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Tableau", "SQL"]
    },
    {
      name: "Financial Risk Analytics",
      image: "/lovable-uploads/89639b18-4900-4542-9ccd-d1afd27ac2c9.png",
      description: "Risk assessment and fraud detection system for a financial services company.",
      challenge: "Manual fraud detection was slow and missing sophisticated fraud patterns, resulting in significant financial losses.",
      solution: "Implemented real-time fraud detection using machine learning with automated alerting and investigation workflows.",
      results: ["85% fraud detection accuracy", "$2M saved in first year", "Real-time transaction monitoring"],
      technologies: ["Python", "Apache Spark", "Power BI", "AWS", "NumPy", "Pandas"]
    }
  ];

  const allTechnologies = [
    { name: "Python", logo: pythonLogo },
    { name: "Power BI", logo: powerbiLogo },
    { name: "Tableau", logo: tableauLogo },
    { name: "Pandas", logo: pandasLogo },
    { name: "NumPy", logo: numpyLogo },
    { name: "Jupyter", logo: jupyterLogo },
    { name: "SQL", logo: sqlLogo },
    { name: "Apache Spark", logo: sparkLogo },
    { name: "Excel", logo: excelLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Plotly", logo: plotlyLogo },
    { name: "TensorFlow", logo: tensorflowLogo },
    { name: "Scikit-learn", logo: scikitLearnLogo },
  ];

  const duplicatedTech = [...allTechnologies, ...allTechnologies];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Data Analytics Services - Business Intelligence & Insights"
        description="Transform raw data into actionable insights with our data analytics services. Expert data analysis, visualization, predictive analytics using Python, Power BI, Tableau."
        keywords="data analytics, business intelligence, data visualization, Power BI, Tableau, Python data analysis, predictive analytics, big data"
        canonicalUrl="https://bitroixsolution.com/data-analytics"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Data Analytics Services",
          "provider": {"@type": "Organization", "name": "Bitroix Solution LLC"},
          "description": "Professional data analytics and business intelligence services.",
          "serviceType": "Data Analytics"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "Data Analytics", url: "https://bitroixsolution.com/data-analytics" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Data Analytics & <span className="text-purple-400">Business Intelligence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your raw data into actionable insights that drive strategic business decisions and growth.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your Data Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Overview <span className="text-gray-500">Of Service</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-purple-500 mb-6">"</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We derive insights and trends to improve your business growth. Through cleaning, converting, 
                and modeling data, we find information that drives better business decisions and unlocks 
                hidden opportunities in your data.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {["Descriptive Analysis", "Predictive Analytics", "Data Visualization", "BI Dashboards", "ML Solutions"].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <div className="w-8 h-8 bg-purple-500 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{service}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Analyze - Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-400">Analytics Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A systematic approach to transforming raw data into actionable business intelligence that drives growth.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-500/30 h-full" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full items-center justify-center z-10 shadow-lg shadow-purple-500/50">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">Key Deliverables</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore data analytics solutions we've delivered. Each project demonstrates our ability to turn data into competitive advantage.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <article 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={project.image}
                      alt={`${project.name} project`}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                      <span className="text-white font-semibold flex items-center gap-2">
                        View Project <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="font-semibold text-purple-800 mb-2">The Challenge</h4>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-green-800 mb-2">Our Solution</h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Master - Animated Carousel */}
      <section className="py-16 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies <span className="text-purple-400">We Master</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional tools for data analysis, visualization, and business intelligence
            </p>
          </div>

          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-hidden gap-8 pb-4"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTech.map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 hover:bg-white/20">
                  <img 
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-12 h-12 object-contain mb-2"
                    loading="lazy"
                  />
                  <span className="text-white text-xs font-medium text-center truncate w-full">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's transform your data into insights that drive growth and competitive advantage.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Start Your Analytics Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default DataAnalytics;
