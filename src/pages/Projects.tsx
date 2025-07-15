import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Multi-payment gateway integration",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
        "SEO optimized"
      ],
      results: {
        improvement: "300% increase in online sales",
        timeframe: "6 months",
        users: "10,000+ active users"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "March 2024",
      client: "RetailMax Solutions"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Healthcare Technology",
      description: "Digital transformation of healthcare operations with patient management, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "PostgreSQL", "WebRTC", "Docker"],
      features: [
        "Patient record management",
        "Appointment scheduling system",
        "Telemedicine integration",
        "Prescription management",
        "Insurance claim processing"
      ],
      results: {
        improvement: "50% reduction in administrative workload",
        timeframe: "8 months",
        users: "500+ healthcare professionals"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "January 2024",
      client: "MediCare Plus"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "Data Analytics",
      description: "Machine learning-driven analytics platform providing predictive insights and automated reporting for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      features: [
        "Predictive analytics models",
        "Real-time data visualization",
        "Automated report generation",
        "Custom dashboard creation",
        "API integration"
      ],
      results: {
        improvement: "85% faster decision making",
        timeframe: "4 months",
        users: "200+ business analysts"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "February 2024",
      client: "DataFlow Technologies"
    },
    {
      id: 4,
      title: "Mobile Banking Application",
      category: "FinTech",
      description: "Secure mobile banking solution with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Blockchain", "AWS"],
      features: [
        "Biometric authentication",
        "Real-time transaction processing",
        "Budget tracking and analytics",
        "Investment portfolio management",
        "Multi-currency support"
      ],
      results: {
        improvement: "60% increase in user engagement",
        timeframe: "10 months",
        users: "50,000+ active users"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "December 2023",
      client: "SecureBank Ltd"
    },
    {
      id: 5,
      title: "Smart Inventory System",
      category: "IoT & Automation",
      description: "IoT-enabled inventory management system with RFID tracking, automated reordering, and predictive maintenance alerts.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      technologies: ["Python", "IoT Sensors", "React", "MySQL", "Arduino"],
      features: [
        "RFID-based tracking",
        "Automated reorder notifications",
        "Predictive maintenance",
        "Real-time stock monitoring",
        "Mobile app integration"
      ],
      results: {
        improvement: "40% reduction in stock shortages",
        timeframe: "5 months",
        users: "25+ warehouse locations"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "November 2023",
      client: "LogiTech Warehouses"
    },
    {
      id: 6,
      title: "Educational Learning Platform",
      category: "EdTech",
      description: "Comprehensive online learning management system with interactive courses, progress tracking, and virtual classroom capabilities.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io"],
      features: [
        "Interactive course creation",
        "Live virtual classrooms",
        "Progress tracking and analytics",
        "Assignment and quiz system",
        "Certificate generation"
      ],
      results: {
        improvement: "90% course completion rate",
        timeframe: "7 months",
        users: "15,000+ students"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "October 2023",
      client: "EduLearn Academy"
    }
  ];

  const categories = ["All", "Web Development", "Healthcare Technology", "Data Analytics", "FinTech", "IoT & Automation", "EdTech"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Successful</span> Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our portfolio of innovative digital solutions that have transformed businesses and delivered exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.completedDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {project.client}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{project.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Project Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                      <div>
                        <div className="font-medium text-green-600">Impact</div>
                        <div className="text-muted-foreground">{project.results.improvement}</div>
                      </div>
                      <div>
                        <div className="font-medium text-blue-600">Timeline</div>
                        <div className="text-muted-foreground">{project.results.timeframe}</div>
                      </div>
                      <div>
                        <div className="font-medium text-purple-600">Users</div>
                        <div className="text-muted-foreground">{project.results.users}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how we can help transform your business with innovative digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.location.href = '/schedule-meeting'}
                >
                  Schedule a Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;