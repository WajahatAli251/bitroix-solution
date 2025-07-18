import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Users, CheckCircle } from 'lucide-react';

// Import project images
import brailleDisplayImage from '@/assets/braille-display-project.jpg';
import iotSmartHouseImage from '@/assets/iot-smart-house-project.jpg';
import mcbSortingImage from '@/assets/mcb-sorting-machine.jpg';
import airWaterGeneratorImage from '@/assets/air-water-generator.jpg';
import hospitalSystemImage from '@/assets/hospital-appointment-system.jpg';
import terraformAwsImage from '@/assets/terraform-aws-pipeline.jpg';
import terraformSpotifyImage from '@/assets/terraform-spotify-project.jpg';
import streamhubImage from '@/assets/streamhub-devsecops.jpg';
import logoDesignImage from '@/assets/logo-design-portfolio.jpg';
import uiuxDesignImage from '@/assets/uiux-design-showcase.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Refreshable Braille Display",
      category: "IoT & Accessibility",
      description: "Assistive technology device that converts digital text to tactile Braille characters using servo motors and OCR technology for visually impaired users.",
      image: brailleDisplayImage,
      technologies: ["Python", "OpenCV", "Tesseract OCR", "gTTS", "Arduino", "Raspberry Pi", "Servo Motors", "GPIO"],
      features: [
        "Text-to-Braille conversion system",
        "OCR for image text extraction",
        "Text-to-speech functionality",
        "Physical Braille dot control",
        "Servo motor precision",
        "Real-time text processing"
      ],
      results: {
        improvement: "Enhanced accessibility for visually impaired",
        timeframe: "3 months",
        users: "Prototype for accessibility research"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "April 2024",
      client: "Accessibility Research Project"
    },
    {
      id: 2,
      title: "IoT-Based Smart House",
      category: "IoT & Automation",
      description: "Intelligent home automation system with environmental sensors, mobile app control, and automated adjustments based on sunlight and temperature.",
      image: iotSmartHouseImage,
      technologies: ["Arduino", "ESP32", "DHT11/DHT22", "LDR Sensors", "Relay Modules", "Blynk", "Python", "C++", "MQTT"],
      features: [
        "Sunlight-based light automation",
        "Temperature-controlled AC system",
        "Mobile app remote control",
        "Real-time sensor monitoring",
        "Manual override capabilities",
        "Energy optimization"
      ],
      results: {
        improvement: "30% energy savings achieved",
        timeframe: "4 months",
        users: "Smart home implementation"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "March 2024",
      client: "Smart Home Innovation"
    },
    {
      id: 3,
      title: "MCB Sorting Machine",
      category: "AI & Robotics",
      description: "Automated robotic system using computer vision and machine learning to sort and orient MCB circuit breakers with precise robotic arm control.",
      image: mcbSortingImage,
      technologies: ["Python", "OpenCV", "TensorFlow", "Scikit-learn", "Raspberry Pi", "Arduino", "Servo Motors", "6DOF Robotic Arm"],
      features: [
        "Computer vision orientation detection",
        "ML-based MCB classification",
        "Automated sorting pipeline",
        "Robotic arm precision control",
        "Real-time image processing",
        "Quality control system"
      ],
      results: {
        improvement: "95% sorting accuracy achieved",
        timeframe: "5 months",
        users: "Industrial automation pilot"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "February 2024",
      client: "Manufacturing Automation Ltd"
    },
    {
      id: 4,
      title: "Air Water Generator Monitoring",
      category: "IoT & Environmental",
      description: "Smart monitoring system for atmospheric water generators with TDS sensors, water level tracking, and mobile app control for water quality management.",
      image: airWaterGeneratorImage,
      technologies: ["ESP32", "TDS Sensor", "Ultrasonic Sensors", "Blynk", "Firebase", "C++", "OLED Display", "Push Notifications"],
      features: [
        "Water quality monitoring (TDS)",
        "Tank level measurement",
        "Mobile app dashboard",
        "Filter replacement alerts",
        "Remote ON/OFF control",
        "Real-time notifications"
      ],
      results: {
        improvement: "Improved water quality control",
        timeframe: "3 months",
        users: "Environmental monitoring system"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "January 2024",
      client: "EcoWater Solutions"
    },
    {
      id: 5,
      title: "Hospital Appointment System",
      category: "Healthcare Technology",
      description: "Comprehensive web-based appointment management system streamlining patient-doctor scheduling with role-based access and admin panel.",
      image: hospitalSystemImage,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "EJS", "JWT", "Session Management"],
      features: [
        "Online appointment booking",
        "Doctor availability management",
        "Patient registration system",
        "Admin control panel",
        "Role-based authentication",
        "Appointment scheduling optimization"
      ],
      results: {
        improvement: "60% reduction in booking time",
        timeframe: "6 months",
        users: "500+ patients, 50+ doctors"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "December 2024",
      client: "City General Hospital"
    },
    {
      id: 6,
      title: "Terraform AWS CI/CD Pipeline",
      category: "DevOps & Cloud",
      description: "Infrastructure as Code automation for AWS using Terraform with GitLab CI/CD pipeline, state management, and secure credential handling.",
      image: terraformAwsImage,
      technologies: ["Terraform", "GitLab CI", "GitHub Actions", "AWS S3", "DynamoDB", "Infrastructure as Code"],
      features: [
        "Automated infrastructure provisioning",
        "Remote state management with S3",
        "State locking with DynamoDB",
        "CI/CD pipeline automation",
        "Secure credential management",
        "Multi-environment deployment"
      ],
      results: {
        improvement: "80% faster deployment process",
        timeframe: "2 months",
        users: "DevOps team implementation"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "November 2023",
      client: "CloudOps Technologies"
    },
    {
      id: 7,
      title: "Terraform Spotify Playlist Creator",
      category: "API Integration",
      description: "Innovative Infrastructure as Code approach to create and manage Spotify playlists using Terraform with Spotify Developer API integration.",
      image: terraformSpotifyImage,
      technologies: ["Terraform", "Spotify API", "Docker", "Community Provider", "Infrastructure as Code"],
      features: [
        "Automated playlist creation",
        "Song search and addition",
        "Terraform state management",
        "Docker containerization",
        "API authentication handling",
        "Playlist URL generation"
      ],
      results: {
        improvement: "Automated music playlist management",
        timeframe: "1 month",
        users: "Music automation prototype"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "October 2024",
      client: "Music Tech Innovation"
    },
    {
      id: 8,
      title: "StreamHub DevSecOps Pipeline",
      category: "DevSecOps & Cloud",
      description: "Comprehensive DevSecOps implementation for media streaming application with security scanning, CI/CD automation, and comprehensive monitoring.",
      image: streamhubImage,
      technologies: ["Jenkins", "Docker", "AWS EC2", "SonarQube", "Trivy", "OWASP", "Prometheus", "Grafana", "Kubernetes", "Helm", "ArgoCD"],
      features: [
        "Automated security scanning",
        "Container vulnerability assessment",
        "CI/CD pipeline automation",
        "Infrastructure monitoring",
        "Kubernetes deployment",
        "Real-time alerting system"
      ],
      results: {
        improvement: "99.9% deployment reliability",
        timeframe: "8 months",
        users: "Enterprise streaming platform"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "September 2024",
      client: "StreamTech Media"
    },
    {
      id: 9,
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
      completedDate: "August 2024",
      client: "RetailMax Solutions"
    },
    {
      id: 10,
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
      completedDate: "July 2024",
      client: "DataFlow Technologies"
    },
    {
      id: 11,
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
      completedDate: "June 2024",
      client: "SecureBank Ltd"
    },
    {
      id: 12,
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
      completedDate: "May 2024",
      client: "EduLearn Academy"
    },
    {
      id: 13,
      title: "Brand Identity & Logo Design Portfolio",
      category: "UI/UX & Branding",
      description: "Comprehensive brand identity design including business logos, character design, and complete visual identity systems for various clients.",
      image: logoDesignImage,
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Adobe InDesign", "Brand Guidelines", "Typography"],
      features: [
        "Logo design and branding",
        "Character design and mascots",
        "Business card design",
        "Brand guidelines creation",
        "Typography systems",
        "Color palette development"
      ],
      results: {
        improvement: "Enhanced brand recognition",
        timeframe: "Ongoing projects",
        users: "25+ businesses branded"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "Ongoing",
      client: "Various Business Clients"
    },
    {
      id: 14,
      title: "UI/UX Design System",
      category: "UI/UX & Design",
      description: "Modern user interface and experience design with comprehensive design systems, mobile app interfaces, and user-centered design principles.",
      image: uiuxDesignImage,
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Design Systems", "Prototyping"],
      features: [
        "User interface design",
        "Mobile app wireframing",
        "Design system creation",
        "User experience optimization",
        "Interactive prototyping",
        "Usability testing"
      ],
      results: {
        improvement: "40% increase in user engagement",
        timeframe: "Ongoing projects",
        users: "Multiple app implementations"
      },
      liveUrl: "#",
      githubUrl: "#",
      completedDate: "Ongoing",
      client: "Digital Product Clients"
    }
  ];

  const categories = [
    "All", 
    "IoT & Accessibility", 
    "IoT & Automation", 
    "AI & Robotics", 
    "IoT & Environmental", 
    "Healthcare Technology", 
    "DevOps & Cloud", 
    "API Integration", 
    "DevSecOps & Cloud", 
    "Web Development",
    "Data Analytics",
    "FinTech",
    "EdTech",
    "UI/UX & Branding", 
    "UI/UX & Design"
  ];
  
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
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technical</span> Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our portfolio of innovative technical solutions, IoT systems, AI projects, DevOps implementations, and creative design work that showcase our expertise across multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="mb-12 animate-fade-in">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="mb-2 hover-scale"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover-scale">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover-scale">
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
                        <Badge key={tech} variant="outline" className="text-xs hover-scale">
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
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how we can help transform your ideas into innovative technical solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="hover-scale"
                  onClick={() => window.location.href = '/schedule-meeting'}
                >
                  Schedule a Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 hover-scale"
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