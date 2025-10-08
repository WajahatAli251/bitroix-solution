import { useState } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, Eye } from "lucide-react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleViewPDF = (productId: string) => {
    // Create a new window to display the PDF-like content
    const pdfWindow = window.open('', '_blank');
    if (pdfWindow) {
      let content = '';
      let title = '';
      
      if (productId === 'ai-chatbot') {
        title = 'AI Chatbot Solutions - Product Brochure';
        content = `
          <img src="/lovable-uploads/fbc5a87d-fe27-4132-b43b-2802be689b95.png" alt="AI Chatbot Page 1" class="pdf-page" />
          <img src="/lovable-uploads/41d3d1a8-5e47-43a7-a682-e9ce3a9a8c55.png" alt="AI Chatbot Page 2" class="pdf-page" />
        `;
      } else if (productId === 'hotel-management') {
        title = 'Hotel Management System - Product Brochure';
        content = `
          <img src="/lovable-uploads/bb83b64e-6281-470e-bf08-f83ef102e0ef.png" alt="Hotel Management Page 1" class="pdf-page" />
          <img src="/lovable-uploads/19347c78-e62d-49cc-b8e1-1656a2115fec.png" alt="Hotel Management Page 2" class="pdf-page" />
          <img src="/lovable-uploads/756c1b02-038f-4f31-bd1c-b63ab31dcfbd.png" alt="Hotel Management Page 3" class="pdf-page" />
        `;
      } else {
        title = 'Exhibition Management System - Product Brochure';
        content = `
          <img src="/lovable-uploads/066e6a18-ccee-45a9-b6dc-65874a0d41c4.png" alt="Exhibition Page 1" class="pdf-page" />
          <img src="/lovable-uploads/db7579c0-e7b2-4de5-b840-b26ebacef273.png" alt="Exhibition Page 2" class="pdf-page" />
          <img src="/lovable-uploads/2e9340e1-b3f9-4c4a-bd4b-075696e2b6b0.png" alt="Exhibition Page 3" class="pdf-page" />
        `;
      }

      pdfWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${title}</title>
          <style>
            body { margin: 0; padding: 20px; font-family: Arial, sans-serif; background: #f5f5f5; }
            .pdf-container { max-width: 800px; margin: 0 auto; background: white; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
            .pdf-page { width: 100%; display: block; border-bottom: 2px solid #ddd; }
            .pdf-page:last-child { border-bottom: none; }
            .header { background: #333; color: white; padding: 20px; text-align: center; }
            .download-btn { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 10px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${title}</h1>
            <button class="download-btn" onclick="window.print()">Print/Save as PDF</button>
          </div>
          <div class="pdf-container">
            ${content}
          </div>
        </body>
        </html>
      `);
      pdfWindow.document.close();
    }
  };

  const products = [
    {
      id: "ai-chatbot",
      title: "AI Chatbot Solutions",
      description: "The future of customer interaction powered by Artificial Intelligence and Natural Language Processing for seamless customer experiences.",
      features: [
        "Customer Service Bots - Handle inquiries, complaints, and FAQs 24/7",
        "Sales Bots - Engage leads and close deals automatically",
        "Scheduling Bots - Book meetings and manage calendars",
        "E-commerce Bots - Assist with product selection and checkout",
        "Enterprise Bots - For HR, Operations, Sales, and Finance automation",
        "Banking & Trading Bots - Assist with investments and transactions",
        "Food & Restaurant Bots - Recommend meals and take orders",
        "Third-Party Integrations - Enrich chats with external services"
      ],
      image: "/lovable-uploads/fbc5a87d-fe27-4132-b43b-2802be689b95.png",
      category: "AI Solutions",
      status: "Available"
    },
    {
      id: "hotel-management",
      title: "Hotel Management System",
      description: "Revolutionizing hotel operations with a cutting-edge, web-based platform designed to streamline and automate all aspects of hotel management.",
      features: [
        "Quick & Simple Bookings - Hassle-free reservations anytime, anywhere",
        "Fast & Friendly Contact - Keep guests connected with responsive communication tools",
        "Exceptional Staff Tools - Manage cheerful, knowledgeable staff with ease",
        "Unified Dashboard - All hotel functions in one place",
        "Smooth Check-in & Check-out - No delays, no confusion",
        "Room & Category Management - Handle availability, pricing, and types effortlessly",
        "Automation at Its Best - Reduce manual workload and maximize efficiency",
        "Secure Payments - Multiple payment modes with real-time confirmation"
      ],
      image: "/lovable-uploads/bb83b64e-6281-470e-bf08-f83ef102e0ef.png",
      category: "Hospitality",
      status: "Available"
    },
    {
      id: "exhibition-management",
      title: "Exhibition Management System",
      description: "Revolutionizing event management with comprehensive solutions for trade shows, exhibitions, and product launches.",
      features: [
        "Centralized event information platform",
        "Real-time data access for teams and exhibitors", 
        "Mobile visitor registration",
        "Sponsorship and sales opportunity tracking",
        "Advanced analytics and reporting",
        "Multi-role user management system"
      ],
      image: "/lovable-uploads/066e6a18-ccee-45a9-b6dc-65874a0d41c4.png",
      category: "Event Management",
      status: "Available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <SEO 
        title="Software Products & Solutions"
        description="Explore Bitroix Solution LLC's innovative software products: AI chatbots, hotel management systems, and exhibition management platforms. Ready-to-deploy solutions for your business."
        keywords="software products, AI chatbot solutions, hotel management software, exhibition management system, SaaS products, business software"
        canonicalUrl="https://bitroixsolution.com/products"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Innovative software solutions designed to transform your business operations and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader className="relative overflow-hidden">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {product.category}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600">
                      {product.status}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-sm text-muted-foreground italic">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedProduct(product.id)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{product.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">{product.description}</p>
                          <div>
                            <h4 className="font-semibold mb-2">All Features:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      size="sm" 
                      onClick={() => handleViewPDF(product.id)}
                      className="flex-1"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn more about our products and how they can benefit your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/schedule-meeting">Schedule Consultation</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Sales</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;