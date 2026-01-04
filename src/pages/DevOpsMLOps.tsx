import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp, Check, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Technology Logo Imports
import dockerLogo from '@/assets/tech-logos/docker.png';
import kubernetesLogo from '@/assets/tech-logos/kubernetes.png';
import jenkinsLogo from '@/assets/tech-logos/jenkins.png';
import githubActionsLogo from '@/assets/tech-logos/github-actions.png';
import gitlabLogo from '@/assets/tech-logos/gitlab.png';
import terraformLogo from '@/assets/tech-logos/terraform.png';
import ansibleLogo from '@/assets/tech-logos/ansible.png';
import awsLogo from '@/assets/tech-logos/aws.png';
import azureLogo from '@/assets/tech-logos/azure.png';
import gcpLogo from '@/assets/tech-logos/gcp.png';
import prometheusLogo from '@/assets/tech-logos/prometheus.png';
import grafanaLogo from '@/assets/tech-logos/grafana.png';
import mlflowLogo from '@/assets/tech-logos/mlflow.png';
import dvcLogo from '@/assets/tech-logos/dvc.png';
import pythonLogo from '@/assets/tech-logos/python.png';
import gitLogo from '@/assets/tech-logos/git.png';

// Project Images
import streamhubProject from '@/assets/streamhub-devsecops.jpg';
import terraformAwsProject from '@/assets/terraform-aws-pipeline.jpg';
import terraformSpotifyProject from '@/assets/terraform-spotify-project.jpg';

const DevOpsMLOps = () => {
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
      title: "Assessment & Planning",
      description: "We analyze your current infrastructure, workflows, and pain points. We identify opportunities for automation and create a strategic roadmap for DevOps transformation.",
      deliverables: ["Infrastructure Audit", "Workflow Analysis", "DevOps Roadmap"]
    },
    {
      number: "02", 
      title: "CI/CD Pipeline Design",
      description: "We design and implement automated pipelines that streamline your build, test, and deployment processes. Every code change is automatically validated and deployed.",
      deliverables: ["Pipeline Architecture", "Automated Testing", "Deployment Automation"]
    },
    {
      number: "03",
      title: "Infrastructure as Code", 
      description: "We codify your infrastructure using tools like Terraform and Ansible, enabling version-controlled, repeatable, and auditable infrastructure management.",
      deliverables: ["Terraform Modules", "Ansible Playbooks", "Environment Parity"]
    },
    {
      number: "04",
      title: "Containerization",
      description: "We containerize your applications using Docker and orchestrate them with Kubernetes, ensuring consistent environments and scalable deployments.",
      deliverables: ["Docker Images", "Kubernetes Clusters", "Container Registry"]
    },
    {
      number: "05", 
      title: "Monitoring & Observability",
      description: "We implement comprehensive monitoring, logging, and alerting solutions to provide full visibility into your systems and enable proactive issue resolution.",
      deliverables: ["Monitoring Dashboards", "Alerting Rules", "Log Aggregation"]
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description: "DevOps is a journey, not a destination. We continuously optimize your processes, reduce deployment times, and improve system reliability.",
      deliverables: ["Performance Optimization", "Process Refinement", "Team Training"]
    }
  ];

  const projects = [
    {
      name: "StreamHub Platform",
      image: streamhubProject,
      description: "End-to-end DevSecOps implementation for a streaming media platform.",
      challenge: "StreamHub needed to reduce deployment times from days to hours while maintaining security compliance and handling traffic spikes during live events.",
      solution: "Implemented a complete CI/CD pipeline with security scanning, automated testing, and blue-green deployments on AWS with auto-scaling Kubernetes clusters.",
      results: ["Deployment time reduced from 2 days to 30 minutes", "Zero-downtime deployments", "99.99% uptime achieved"],
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Terraform", "SonarQube"]
    },
    {
      name: "Enterprise Cloud Migration",
      image: terraformAwsProject,
      description: "Multi-cloud infrastructure automation for a Fortune 500 financial services company.",
      challenge: "Migrate legacy on-premise infrastructure to AWS while maintaining compliance with strict financial regulations and ensuring zero data loss.",
      solution: "Designed and implemented Infrastructure as Code using Terraform, with automated compliance checks and disaster recovery across multiple regions.",
      results: ["40% reduction in infrastructure costs", "Full regulatory compliance", "15-minute RTO achieved"],
      technologies: ["Terraform", "AWS", "Ansible", "GitHub Actions", "Prometheus", "Grafana"]
    },
    {
      name: "MLOps Pipeline",
      image: terraformSpotifyProject,
      description: "Automated machine learning pipeline for a data-driven recommendation system.",
      challenge: "Data science team struggled with inconsistent model training, difficult deployments, and lack of model versioning for their recommendation engine.",
      solution: "Built a comprehensive MLOps pipeline with automated model training, versioning, A/B testing, and one-click deployment to production.",
      results: ["Model deployment time reduced by 80%", "Full model lineage tracking", "Automated retraining pipelines"],
      technologies: ["MLflow", "DVC", "Python", "Docker", "Kubernetes", "AWS SageMaker"]
    }
  ];

  const allTechnologies = [
    { name: "Docker", logo: dockerLogo },
    { name: "Kubernetes", logo: kubernetesLogo },
    { name: "Jenkins", logo: jenkinsLogo },
    { name: "GitHub Actions", logo: githubActionsLogo },
    { name: "GitLab CI", logo: gitlabLogo },
    { name: "Terraform", logo: terraformLogo },
    { name: "Ansible", logo: ansibleLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Azure", logo: azureLogo },
    { name: "GCP", logo: gcpLogo },
    { name: "Prometheus", logo: prometheusLogo },
    { name: "Grafana", logo: grafanaLogo },
    { name: "MLflow", logo: mlflowLogo },
    { name: "DVC", logo: dvcLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Git", logo: gitLogo },
  ];

  const duplicatedTech = [...allTechnologies, ...allTechnologies];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="DevOps & MLOps Services - CI/CD, Kubernetes, Cloud"
        description="Professional DevOps and MLOps services: CI/CD pipelines, Kubernetes, Docker, AWS, Azure, GCP. Automate deployment, monitoring, and ML workflows."
        keywords="DevOps services, MLOps consulting, CI/CD pipeline, Kubernetes deployment, Docker containerization, AWS DevOps, Azure DevOps, Terraform infrastructure, Jenkins automation, cloud migration"
        canonicalUrl="https://bitroixsolution.com/devops-mlops"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "DevOps & MLOps Services",
          "provider": {"@type": "Organization", "name": "Bitroix Solution LLC"},
          "description": "Professional DevOps and MLOps services with automated CI/CD, infrastructure as code, containerization, and monitoring.",
          "serviceType": "DevOps Consulting"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com" },
          { name: "Services", url: "https://bitroixsolution.com/#services" },
          { name: "DevOps & MLOps", url: "https://bitroixsolution.com/devops-mlops" }
        ]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            DevOps & <span className="text-blue-400">MLOps Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your development lifecycle with automated, scalable, and efficient DevOps and MLOps solutions.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your DevOps Journey <ArrowRight className="ml-2 w-5 h-5" />
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
              <div className="text-6xl text-blue-500 mb-6">"</div>
              <p className="text-lg text-gray-700 leading-relaxed">
                With DevOps, we automate the process of software development, testing, and deployment, 
                reducing the time it takes to deliver new features to users. Our MLOps services extend 
                this automation to machine learning workflows, ensuring reproducible models and streamlined deployments.
              </p>
            </div>
          </div>

          {/* What We Offer Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What We <span className="text-gray-500">Offer</span>
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Cloud Migration", "ML Pipelines"].map((service, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{service}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Process Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">DevOps Process</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology to transform your software delivery pipeline and achieve continuous deployment excellence.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500/30 h-full" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full items-center justify-center z-10 shadow-lg shadow-blue-500/50">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-[1.02]">
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <h3 className="hidden lg:block text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-2">
                        <span className="text-sm text-blue-400 font-semibold uppercase tracking-wider">Key Deliverables</span>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
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
              Our <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore DevOps transformations we've delivered. Each project showcases our expertise in automating and optimizing software delivery.
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
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">The Challenge</h4>
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
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
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
              Technologies <span className="text-blue-400">We Master</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive DevOps and MLOps tools for modern software delivery
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
                <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:bg-white/20">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's build scalable, automated systems that accelerate your software delivery.
          </p>
          <Link to="/schedule-meeting">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold">
              Start Your DevOps Transformation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default DevOpsMLOps;
