import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Users, Briefcase, Star } from "lucide-react";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Web Developer Intern",
      department: "Development",
      location: "Remote / Flexible",
      type: "Internship",
      salary: "Paid Internship",
      experience: "Freshly graduate or final year students",
      skills: ["Website Maintenance", "Website Upgrading", "SEO Optimization"],
      description: "We are looking for a Web Developer Intern to join our remote team of creatives!",
      requirements: [
        "Maintaining & upgrading our company website",
        "Performing SEO optimization",
        "Must be freshly graduate or final year students"
      ],
      benefits: [
        "Paid Internship",
        "Remote Work/ Flexible",
        "Completion Certificate",
        "Duration (3 - 6 Months)"
      ],
      contactEmail: "Info@bitroixsolution.com"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Team Culture",
      description: "Work with passionate professionals in a collaborative environment"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours and remote options"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Continuous learning and professional development programs"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Market-competitive salaries with performance bonuses"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 gradient-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Join Our <span className="text-gradient">Amazing Team</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up">
            Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="animate-fade-in-up hover-lift"
            onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Briefcase className="w-5 h-5 mr-2" />
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where talent thrives and innovation flourishes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your next career opportunity and join our growing team.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover-lift">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-foreground">{job.title}</CardTitle>
                      <CardDescription className="text-lg mt-2">{job.description}</CardDescription>
                    </div>
                    <Button variant="outline" className="hover-lift">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">Target Candidates: {job.experience}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {job.requirements && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.benefits && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">What We Offer:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.contactEmail && (
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Apply Here:</p>
                      <p className="text-primary font-medium">{job.contactEmail}</p>
                      <p className="text-xs text-muted-foreground mt-2">For more info visit: bitroixsolution.com</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Don't see a position that fits? We're always looking for exceptional talent.
            </p>
            <Button variant="outline" size="lg" className="hover-lift">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;