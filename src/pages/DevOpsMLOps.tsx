import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUp, Database, Cloud, Monitor, Shield } from "lucide-react";
import devopsImage from '@/assets/devops-infrastructure.jpg';

// Technology Logo Imports for DevOps/MLOps
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

const DevOpsMLOps = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scheduleRedirect = () => {
    window.location.href = "mailto:contact@bitroixsolution.com?subject=Schedule Meeting - DevOps & MLOps";
  };

  const offerings = [
    "Automated Infrastructure & Deployment Processes",
    "CI/CD Implementation", 
    "Monitor & Log Your Application",
    "Containerize Your Applications",
    "Automated Testing"
  ];

  const approach = [
    {
      number: "01",
      title: "Automation",
      description: "We use automation tools to manage infrastructure and deploy code, such as Ansible, Chef, and Puppet."
    },
    {
      number: "02", 
      title: "Continuous Integration and Continuous Deployment",
      description: "Our team has experience in setting up and maintaining CI/CD pipelines."
    },
    {
      number: "03",
      title: "Monitoring and Logging", 
      description: "We use monitoring and logging tools, such as Prometheus and ELK, and have expertise in analyzing and interpreting log data to identify and troubleshoot issues."
    },
    {
      number: "04",
      title: "Containerization",
      description: "Our team uses containerization technologies such as Docker and Kubernetes, and the they have the ability to deploy and manage containerized applications."
    },
    {
      number: "05",
      title: "Agile Methodologies",
      description: "We use Agile development methodologies, such as Scrum and Kanban, as DevOps practices are built on Agile principles."
    },
    {
      number: "06",
      title: "Communication and Collaboration", 
      description: "Strong communication and collaboration skills are essential in a DevOps environment, as it involves close collaboration between development and operations teams."
    }
  ];

  const containerizationTools = [
    { name: "Docker", logo: dockerLogo, category: "Containerization" },
    { name: "Kubernetes", logo: kubernetesLogo, category: "Orchestration" }
  ];

  const cicdTools = [
    { name: "Jenkins", logo: jenkinsLogo, category: "CI/CD Platform" },
    { name: "GitHub Actions", logo: githubActionsLogo, category: "GitHub CI/CD" },
    { name: "GitLab CI/CD", logo: gitlabLogo, category: "GitLab CI/CD" }
  ];

  const infrastructureTools = [
    { name: "Terraform", logo: terraformLogo, category: "Infrastructure as Code" },
    { name: "Ansible", logo: ansibleLogo, category: "Configuration Management" }
  ];

  const cloudPlatforms = [
    { name: "AWS", logo: awsLogo, category: "Amazon Cloud" },
    { name: "Azure", logo: azureLogo, category: "Microsoft Cloud" },
    { name: "GCP", logo: gcpLogo, category: "Google Cloud" }
  ];

  const monitoringTools = [
    { name: "Prometheus", logo: prometheusLogo, category: "Monitoring" },
    { name: "Grafana", logo: grafanaLogo, category: "Visualization" }
  ];

  const mlopsTools = [
    { name: "MLflow", logo: mlflowLogo, category: "ML Lifecycle" },
    { name: "DVC", logo: dvcLogo, category: "Data Version Control" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title="DevOps & MLOps Services"
        description="Professional DevOps and MLOps services with automated CI/CD, infrastructure as code, containerization, and monitoring. Expert Kubernetes, Docker, AWS, and Azure solutions."
        keywords="DevOps services, MLOps, CI/CD, Kubernetes, Docker, infrastructure automation, Terraform, Jenkins, AWS, Azure, monitoring"
        canonicalUrl="https://bitroixsolution.com/devops-mlops"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              DevOps & MLOps
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline your development lifecycle with automated, scalable, and efficient DevOps and MLOps solutions.
            </p>
            <Button 
              onClick={scheduleRedirect}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
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
                  With the use of DevOps we automate the process of software development, testing, and deployment, with the aim of reducing the time it takes to get new features and updates into the hands of users.
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
                  <div className="text-3xl">∞</div>
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
                  <span className="text-2xl font-bold text-orange-500 bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
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
              Comprehensive DevOps and MLOps tools for modern software delivery
            </p>
          </div>
          
          {/* Containerization & Orchestration */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Containerization & <span className="text-primary">Orchestration</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {containerizationTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CI/CD Tools */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              CI/CD & <span className="text-primary">Automation</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cicdTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure as Code */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Infrastructure as <span className="text-primary">Code</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {infrastructureTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Cloud <span className="text-primary">Platforms</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{platform.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{platform.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring & Observability */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Monitoring & <span className="text-primary">Observability</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {monitoringTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MLOps Tools */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              MLOps & <span className="text-primary">ML Lifecycle</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {mlopsTools.map((tool, index) => (
                <div key={index} className="group text-center hover-lift">
                  <div className="w-20 h-20 mx-auto mb-4 bg-card rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 glow-primary group-hover:glow-tech">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`}
                      className="w-12 h-12 object-contain"
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
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default DevOpsMLOps;