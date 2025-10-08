import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUp, Database, Monitor, Shield } from "lucide-react";
import dataAnalyticsImage from '@/assets/data-analytics.jpg';

// Technology Logo Imports for Data Analytics
import pythonLogo from '@/assets/tech-logos/python.png';
import powerbiLogo from '@/assets/tech-logos/powerbi.png';
import tableauLogo from '@/assets/tech-logos/tableau.png';
import pandasLogo from '@/assets/tech-logos/pandas.png';
import numpyLogo from '@/assets/tech-logos/numpy.png';
import jupyterLogo from '@/assets/tech-logos/jupyter.png';
import sqlLogo from '@/assets/tech-logos/sql.png';
import sparkLogo from '@/assets/tech-logos/spark.png';
import excelLogo from '@/assets/tech-logos/excel.png';

const DataAnalytics = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scheduleRedirect = () => {
    window.location.href = "mailto:contact@bitroixsolution.com?subject=Schedule Meeting - Data Analytics";
  };

  const offerings = [
    "Descriptive Analysis",
    "Diagnostic Analysis", 
    "Predictive Analysis",
    "Perscriptive Analytics",
    "Cognitive Analytics"
  ];

  const approach = [
    {
      number: "01",
      title: "Problem Definition",
      description: "We define and understand your business problem."
    },
    {
      number: "02", 
      title: "Data Collection",
      description: "Data is collected from various sources that is used in business decision-making."
    },
    {
      number: "03",
      title: "Data Cleaning", 
      description: "The collected data is further processed to remove incorrect, duplicate, or incomplete data."
    },
    {
      number: "04",
      title: "Data Analysis & Visualization",
      description: "The cleaned data is further sorted and processed to extract relevant information and presented in visual form."
    },
    {
      number: "05",
      title: "Choose the Right Model",
      description: "The right model is used based on the data analysis results."
    },
    {
      number: "06",
      title: "Monitor Model Performance", 
      description: "The models is checked in production to ensure the reliability of the performance."
    }
  ];

  const visualizationTools = [
    { name: "Power BI", logo: powerbiLogo, category: "Microsoft BI" },
    { name: "Tableau", logo: tableauLogo, category: "Data Visualization" },
    { name: "Excel", logo: excelLogo, category: "Spreadsheet Analysis" }
  ];

  const programmingTools = [
    { name: "Python", logo: pythonLogo, category: "Programming Language" },
    { name: "Pandas", logo: pandasLogo, category: "Data Manipulation" },
    { name: "NumPy", logo: numpyLogo, category: "Numerical Computing" },
    { name: "Jupyter", logo: jupyterLogo, category: "Interactive Computing" }
  ];

  const databaseAnalyticsTools = [
    { name: "SQL", logo: sqlLogo, category: "Query Language" },
    { name: "Apache Spark", logo: sparkLogo, category: "Big Data Processing" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="Data Analytics Services"
        description="Transform raw data into actionable insights with our data analytics services. Expert data analysis, visualization, predictive analytics using Python, Power BI, Tableau, and machine learning."
        keywords="data analytics, business intelligence, data visualization, Power BI, Tableau, Python data analysis, predictive analytics, big data"
        canonicalUrl="https://bitroixsolution.com/data-analytics"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Data Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your raw data into actionable insights that drive strategic business decisions and growth.
            </p>
            <Button 
              onClick={scheduleRedirect}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg"
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
                  We derive insights and trends to improve your business growth. We aim to find information that can be used to make business decision-making, through the process of cleaning, converting, and modelling data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-3xl">📊</div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{offering}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approach.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-purple-500 bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
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

      {/* Technologies */}
      <section className="py-20 bg-background dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Technologies <span className="text-primary">We Master</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional tools for data analysis, visualization, and business intelligence
            </p>
          </div>
          
          {/* Data Visualization Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Visualization & <span className="text-primary">BI Tools</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {visualizationTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programming & Analysis Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Programming & <span className="text-primary">Analysis Tools</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {programmingTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Database & Big Data Tools */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Database & <span className="text-primary">Big Data</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {databaseAnalyticsTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default DataAnalytics;