import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Technology Logo Imports
import reactLogo from '@/assets/tech-logos/react.svg';
import nextjsLogo from '@/assets/tech-logos/nextjs.png';
import nodejsLogo from '@/assets/tech-logos/nodejs.svg';
import typescriptLogo from '@/assets/tech-logos/typescript.svg';
import javascriptLogo from '@/assets/tech-logos/javascript.png';
import html5Logo from '@/assets/tech-logos/html5.png';
import css3Logo from '@/assets/tech-logos/css3.png';
import tailwindLogo from '@/assets/tech-logos/tailwind.png';
import bootstrapLogo from '@/assets/tech-logos/bootstrap.png';
import djangoLogo from '@/assets/tech-logos/django.png';
import laravelLogo from '@/assets/tech-logos/laravel.png';
import expressLogo from '@/assets/tech-logos/express.png';
import mongodbLogo from '@/assets/tech-logos/mongodb.png';
import postgresqlLogo from '@/assets/tech-logos/postgresql.png';
import mysqlLogo from '@/assets/tech-logos/mysql.png';
import pythonLogo from '@/assets/tech-logos/python.png';

const WebDevelopment = () => {
  const approachSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "Initial research is done to gather relevant information about scope, objective, features, processes & expectations."
    },
    {
      number: "02", 
      title: "Information Architecture",
      description: "Arrange information to meet user requirements that shows hierarchy of how the information on your website is organized."
    },
    {
      number: "03",
      title: "Wireframes, Mockups & Prototypes", 
      description: "Schema of web page is created to show low-fidelity representation of different screens that form a product. That schema is converted to high-fidelity mockups that mimic the look and feel of website before it is actually developed."
    },
    {
      number: "04",
      title: "Development",
      description: "Our exceptional programmers code the business logic, integrate user interface with the backend database, and build custom features that are specific to the given project."
    },
    {
      number: "05", 
      title: "Quality Assurance",
      description: "Ensure proper quality of the software and compliance with the gathered requirements. This step is crucial to ensure that the final end product is smooth and bug free."
    },
    {
      number: "06",
      title: "Launch", 
      description: "This is the final phase where the application is rolled into production and made available to users."
    }
  ];

  const frontendTechnologies = [
    { name: "React.js", logo: reactLogo, category: "Frontend Framework" },
    { name: "Next.js", logo: nextjsLogo, category: "React Framework" },
    { name: "TypeScript", logo: typescriptLogo, category: "Language" },
    { name: "JavaScript", logo: javascriptLogo, category: "Language" },
    { name: "HTML5", logo: html5Logo, category: "Markup" },
    { name: "CSS3", logo: css3Logo, category: "Styling" },
    { name: "Tailwind CSS", logo: tailwindLogo, category: "CSS Framework" },
    { name: "Bootstrap", logo: bootstrapLogo, category: "CSS Framework" }
  ];

  const backendTechnologies = [
    { name: "Node.js", logo: nodejsLogo, category: "Runtime" },
    { name: "Express.js", logo: expressLogo, category: "Backend Framework" },
    { name: "Python", logo: pythonLogo, category: "Language" },
    { name: "Django", logo: djangoLogo, category: "Python Framework" },
    { name: "Laravel", logo: laravelLogo, category: "PHP Framework" }
  ];

  const databaseTechnologies = [
    { name: "MongoDB", logo: mongodbLogo, category: "NoSQL Database" },
    { name: "PostgreSQL", logo: postgresqlLogo, category: "SQL Database" },
    { name: "MySQL", logo: mysqlLogo, category: "SQL Database" }
  ];

  const webDevSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Services",
    "provider": { "@id": "https://bitroixsolution.com/#organization" },
    "serviceType": "Web Development",
    "description": "Professional web development services including custom applications, SaaS products, e-commerce platforms, and API development.",
    "areaServed": ["US", "PK", "GB", "CA", "AU", "AE"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Products" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Applications" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API Development" } }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Custom Web Development Services | React, Node.js, Python"
        description="Professional web development services: custom applications, SaaS, e-commerce, and APIs. Expert React, Node.js, Python, and Laravel developers. 150+ projects."
        keywords="web development services, custom web applications, SaaS development, e-commerce development, API development, React development, Node.js developer, Python Django, Laravel development, full stack web development, responsive web design, enterprise web solutions, San Francisco web developer"
        canonicalUrl="https://bitroixsolution.com/web-development"
        schemaMarkup={webDevSchema}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com/" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "Web Development", url: "https://bitroixsolution.com/web-development" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background Image with Transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/lovable-uploads/eb7b0242-9c5d-4d81-9044-abe3320bd683.png')"
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Web <span className="text-blue-400">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting digital experiences that drive business growth
          </p>
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
              <div className="text-6xl text-yellow-500 mb-6">"</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We utilize top web technologies to bring your idea into existence. From simple responsive web 
                applications to complex enterprise platform, we are your one stop shop for all. We understand the 
                needs of our users and develop websites that are not only aesthetically pleasing but have great 
                user experience too.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {["SaaS Products", "Custom Applications", "Web Portals", "E-Commerce", "API Development"].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{service}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Title */}
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Our <span className="text-yellow-500">Approach</span>
              </h2>
            </div>

            {/* Right side - Steps */}
            <div className="space-y-8">
              {approachSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <span className="text-3xl font-bold text-gray-900">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-background dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Technologies <span className="text-primary">We Master</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for building modern web applications
            </p>
          </div>
          
          {/* Frontend Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Frontend & <span className="text-primary">User Interface</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {frontendTechnologies.map((tech, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Backend & <span className="text-primary">Server Technologies</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {backendTechnologies.map((tech, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Database Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Database & <span className="text-primary">Storage Solutions</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {databaseTechnologies.map((tech, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
