import React, { memo, useState, useEffect, useMemo } from 'react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PackagePopup from '@/components/PackagePopup';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Search, Filter, X, ChevronDown } from 'lucide-react';

// Import project images
import taoGroupImg from '@/assets/projects/taogroup-uiux.png';
import vallianiImg from '@/assets/projects/valliani-jewelers.png';
import copartImg from '@/assets/projects/copart-website.png';
import floorDecorImg from '@/assets/projects/floor-decor-website.png';
import cosbarImg from '@/assets/projects/cosbar-website.png';
import proflowersImg from '@/assets/projects/proflowers-website.png';
import truecareImg from '@/assets/projects/truecare-website.png';
import taoWebsiteImg from '@/assets/projects/taogroup-website.png';

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Bitroix Solution Portfolio - 150+ Projects",
  "description": "Explore our portfolio of 150+ successful web development, e-commerce, and digital projects across React, Vue, Angular, WordPress, Shopify, and more.",
  "url": "https://bitroixsolution.com/projects",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 150,
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "React Websites"},
      {"@type": "ListItem", "position": 2, "name": "WordPress Development"},
      {"@type": "ListItem", "position": 3, "name": "E-Commerce Solutions"},
      {"@type": "ListItem", "position": 4, "name": "Shopify Stores"}
    ]
  }
};

// Industries for categorization
const industries = [
  "All Industries",
  "Automotive",
  "Hospitality & Entertainment",
  "Jewelry & Luxury",
  "Home & Decor",
  "Beauty & Cosmetics",
  "Healthcare & Medical",
  "Flowers & Gifts",
  "Travel & Booking",
  "Real Estate",
  "Finance & Loans",
  "Sports & Fitness",
  "Fashion & Apparel",
  "Food & Beverage",
  "Education",
  "Technology",
  "Consulting",
  "Salon & Beauty Services",
  "Wedding",
  "Retail & E-Commerce"
];

// Technologies for filtering
const technologies = [
  "All Technologies",
  "React",
  "Angular",
  "Vue.js",
  "Next.js",
  "Shopify",
  "Shopify Plus",
  "WordPress",
  "WooCommerce",
  "Magento",
  "Laravel",
  "Node.js",
  "Ruby on Rails",
  "Weebly",
  "Wix",
  "Prestashop",
  "PHP",
  "AWS"
];

const Projects = memo(() => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedTechnology, setSelectedTechnology] = useState("All Technologies");
  const [showFilters, setShowFilters] = useState(false);

  // Show popup after 2 seconds
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPackagePopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('hasSeenPackagePopup', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // All projects with detailed information
  const projects = [
    // Featured Projects with real images and detailed research
    { 
      id: 1, 
      title: "Copart", 
      industry: "Automotive", 
      technology: "React", 
      url: "https://www.copart.com/", 
      image: copartImg,
      description: "Global leader in online vehicle auctions"
    },
    { 
      id: 2, 
      title: "TAO Group Hospitality", 
      industry: "Hospitality & Entertainment", 
      technology: "Angular", 
      url: "https://taogroup.com/", 
      image: taoGroupImg,
      description: "Premier hospitality platform for nightlife venues"
    },
    { 
      id: 3, 
      title: "TAO Group Website", 
      industry: "Hospitality & Entertainment", 
      technology: "Next.js", 
      url: "https://taogroup.com/", 
      image: taoWebsiteImg,
      description: "Award-winning hospitality group digital presence"
    },
    { 
      id: 4, 
      title: "Valliani Jewelers", 
      industry: "Jewelry & Luxury", 
      technology: "Shopify", 
      url: "https://www.vallianijewelers.com/", 
      image: vallianiImg,
      description: "Premium jewelry e-commerce since 1999"
    },
    { 
      id: 5, 
      title: "Floor & Decor", 
      industry: "Home & Decor", 
      technology: "React", 
      url: "https://www.flooranddecor.com/", 
      image: floorDecorImg,
      description: "Hard surface flooring retail giant"
    },
    { 
      id: 6, 
      title: "Cos Bar", 
      industry: "Beauty & Cosmetics", 
      technology: "Shopify Plus", 
      url: "https://cosbar.com/", 
      image: cosbarImg,
      description: "Luxury beauty retailer since 1976"
    },
    { 
      id: 7, 
      title: "ProFlowers", 
      industry: "Flowers & Gifts", 
      technology: "React", 
      url: "https://www.proflowers.com/", 
      image: proflowersImg,
      description: "Leading online flower delivery service"
    },
    { 
      id: 8, 
      title: "TrueCare", 
      industry: "Healthcare & Medical", 
      technology: "WordPress", 
      url: "https://www.truecare.org/", 
      image: truecareImg,
      description: "Community health centers network"
    },
    
    // React Websites
    { id: 9, title: "Industrial Discount", industry: "Retail & E-Commerce", technology: "React", url: "https://www.industrialdiscount.it/", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
    { id: 10, title: "Noon UAE", industry: "Retail & E-Commerce", technology: "React", url: "https://www.noon.com/uae-en/", image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop" },
    { id: 11, title: "Northern Trust", industry: "Finance & Loans", technology: "React", url: "https://www.northerntrust.com/asia-pac/home", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
    
    // Angular Portfolio
    { id: 12, title: "Cavenwell", industry: "Technology", technology: "Angular", url: "https://cavenwell.io/", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop" },
    { id: 13, title: "Kids City Life", industry: "Education", technology: "Angular", url: "https://kidscity.life/", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop" },
    { id: 14, title: "Blowfire", industry: "Technology", technology: "Angular", url: "https://blowfire.geex-arts.com/", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop" },
    { id: 15, title: "Mezzolab", industry: "Consulting", technology: "Angular", url: "https://www.mezzolab.com", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" },
    
    // Vue Portfolio
    { id: 16, title: "Wizz Air", industry: "Travel & Booking", technology: "Vue.js", url: "https://wizzair.com/#/", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop" },
    { id: 17, title: "Discover Your Purple", industry: "Technology", technology: "Vue.js", url: "https://discoveryourpurple.ca/", image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600&fit=crop" },
    { id: 18, title: "Melon Fashion Office", industry: "Fashion & Apparel", technology: "Vue.js", url: "http://office.melonfashion.ru/en/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    
    // Shopify Stores
    { id: 19, title: "Gymshark", industry: "Fashion & Apparel", technology: "Shopify Plus", url: "https://www.gymshark.com/", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop" },
    { id: 20, title: "Nutriseed", industry: "Food & Beverage", technology: "Shopify", url: "https://www.nutriseed.co.uk/", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop" },
    { id: 21, title: "Quad Lock Case", industry: "Technology", technology: "Shopify", url: "https://www.quadlockcase.com/", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop" },
    { id: 22, title: "Cosmetic Love", industry: "Beauty & Cosmetics", technology: "Shopify", url: "https://cosmetic-love.com/", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop" },
    { id: 23, title: "Cake Cosmetics", industry: "Beauty & Cosmetics", technology: "Shopify", url: "https://www.cakecosmetics.co.uk/", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop" },
    { id: 24, title: "Sunday Somewhere", industry: "Fashion & Apparel", technology: "Shopify", url: "https://sundaysomewhere.com/", image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&h=600&fit=crop" },
    
    // WordPress Sites
    { id: 25, title: "Family First Life", industry: "Finance & Loans", technology: "WordPress", url: "https://familyfirstliferesilience.com/", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop" },
    { id: 26, title: "American Glazing Association", industry: "Home & Decor", technology: "WordPress", url: "https://americanglazingassociation.org/", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" },
    { id: 27, title: "Lue Dental Clinic", industry: "Healthcare & Medical", technology: "WordPress", url: "https://luedentalclinic.com/", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop" },
    { id: 28, title: "Method Home", industry: "Home & Decor", technology: "WordPress", url: "https://methodhome.com/", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop" },
    { id: 29, title: "99 Percent Invisible", industry: "Education", technology: "WordPress", url: "https://99percentinvisible.org/", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=600&fit=crop" },
    
    // WooCommerce
    { id: 30, title: "Porter and York", industry: "Food & Beverage", technology: "WooCommerce", url: "https://porterandyork.com/", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop" },
    { id: 31, title: "Jack Rudy Cocktail", industry: "Food & Beverage", technology: "WooCommerce", url: "https://jackrudycocktailco.com/", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop" },
    { id: 32, title: "Joco Cups", industry: "Retail & E-Commerce", technology: "WooCommerce", url: "https://jococups.com/usa/", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop" },
    { id: 33, title: "Chuckling Goat", industry: "Food & Beverage", technology: "WooCommerce", url: "https://www.chucklinggoat.co.uk/", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop" },
    
    // Laravel
    { id: 34, title: "Fusion Invoice", industry: "Finance & Loans", technology: "Laravel", url: "https://www.fusioninvoice.com/", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop" },
    { id: 35, title: "Storyblocks", industry: "Technology", technology: "Laravel", url: "https://www.storyblocks.com/", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop" },
    { id: 36, title: "Fashionette", industry: "Fashion & Apparel", technology: "Laravel", url: "https://www.fashionette.de/", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop" },
    { id: 37, title: "Invicta Watch", industry: "Jewelry & Luxury", technology: "Laravel", url: "https://www.invictawatch.com/", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop" },
    
    // Node.js
    { id: 38, title: "Nobel Peace Center", industry: "Education", technology: "Node.js", url: "https://www.nobelpeacecenter.org/", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" },
    { id: 39, title: "Voyen Auto", industry: "Automotive", technology: "Node.js", url: "https://www.voyenauto.com/", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop" },
    
    // Travel & Booking
    { id: 40, title: "Agoda", industry: "Travel & Booking", technology: "React", url: "https://www.agoda.com/", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop" },
    { id: 41, title: "Hotel Tonight", industry: "Travel & Booking", technology: "React", url: "https://www.hoteltonight.com/", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop" },
    { id: 42, title: "Kayak", industry: "Travel & Booking", technology: "React", url: "https://www.kayak.com/", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop" },
    { id: 43, title: "Julius Homes", industry: "Travel & Booking", technology: "React", url: "https://book.juliushomes.com/", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" },
    
    // Real Estate
    { id: 44, title: "Century 21", industry: "Real Estate", technology: "React", url: "https://www.century21.com/", image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop" },
    { id: 45, title: "The Collective", industry: "Real Estate", technology: "React", url: "https://www.thecollective.com/", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop" },
    { id: 46, title: "City Sales NZ", industry: "Real Estate", technology: "WordPress", url: "https://www.citysales.co.nz/", image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop" },
    
    // Magento
    { id: 47, title: "Jimmy Lion", industry: "Fashion & Apparel", technology: "Magento", url: "https://www.jimmylion.com/us", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop" },
    { id: 48, title: "Xtrons", industry: "Technology", technology: "Magento", url: "https://xtrons.com/", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" },
    
    // Sports
    { id: 49, title: "Compressport", industry: "Sports & Fitness", technology: "PHP", url: "https://www.compressport.com/usa/en/", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop" },
    { id: 50, title: "Hyperlite", industry: "Sports & Fitness", technology: "Shopify", url: "https://www.hyperlite.com/en/", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop" },
    { id: 51, title: "Cervelo", industry: "Sports & Fitness", technology: "Shopify", url: "https://www.cervelo.com/en/", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop" },
    
    // Prestashop
    { id: 52, title: "Decathlon", industry: "Sports & Fitness", technology: "Prestashop", url: "https://www.decathlon.ma/", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop" },
    { id: 53, title: "Smallable", industry: "Fashion & Apparel", technology: "Prestashop", url: "https://en.smallable.com/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    { id: 54, title: "Footshop", industry: "Fashion & Apparel", technology: "Prestashop", url: "https://www.footshop.eu/en/", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop" },
    
    // Weebly
    { id: 55, title: "Fusedale Design", industry: "Consulting", technology: "Weebly", url: "https://www.fusedaledesign.com/", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" },
    { id: 56, title: "Sanders Family Real Estate", industry: "Real Estate", technology: "Weebly", url: "http://www.sandersfamilyrealestate.com/", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" },
    { id: 57, title: "The Ready Desk", industry: "Retail & E-Commerce", technology: "Weebly", url: "https://thereadydesk.com/", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
    
    // Wix
    { id: 58, title: "Lin-Manuel Miranda", industry: "Hospitality & Entertainment", technology: "Wix", url: "https://www.linmanuel.com/", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop" },
    { id: 59, title: "Juslyn Vineyards", industry: "Food & Beverage", technology: "Wix", url: "https://www.juslynvineyards.com/", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop" },
    
    // Salon
    { id: 60, title: "Drybar", industry: "Salon & Beauty Services", technology: "Shopify", url: "https://www.thedrybar.com/", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop" },
    { id: 61, title: "Nine Zero One Salon", industry: "Salon & Beauty Services", technology: "WordPress", url: "https://www.ninezeroonesalon.com/", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop" },
    { id: 62, title: "Bleach London", industry: "Salon & Beauty Services", technology: "Shopify", url: "https://bleachlondon.co.uk/", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop" },
    
    // Wedding
    { id: 63, title: "Boutique Weddings", industry: "Wedding", technology: "WordPress", url: "https://www.boutique-weddings.com/", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" },
    { id: 64, title: "Mason and Megan", industry: "Wedding", technology: "WordPress", url: "https://masonandmegan.com/", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop" },
    
    // Finance
    { id: 65, title: "Lending Club", industry: "Finance & Loans", technology: "React", url: "https://www.lendingclub.com/", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop" },
    { id: 66, title: "Betterment", industry: "Finance & Loans", technology: "React", url: "https://www.betterment.com/", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop" },
    { id: 67, title: "Xero", industry: "Finance & Loans", technology: "React", url: "https://www.xero.com/us/", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop" },
    
    // Consulting
    { id: 68, title: "Fresh Consulting", industry: "Consulting", technology: "WordPress", url: "https://www.freshconsulting.com/", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop" },
    { id: 69, title: "Moss Adams", industry: "Consulting", technology: "WordPress", url: "https://www.mossadams.com/home", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" },
    
    // Transportation
    { id: 70, title: "Jet Edge", industry: "Travel & Booking", technology: "React", url: "https://www.flyjetedge.com/", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop" },
    { id: 71, title: "Seastreak", industry: "Travel & Booking", technology: "WordPress", url: "https://seastreak.com/", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop" },
    
    // Hard Graft - E-commerce
    { id: 72, title: "Hard Graft", industry: "Fashion & Apparel", technology: "Shopify", url: "https://www.hardgraft.com/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    { id: 73, title: "Swag Kicks", industry: "Fashion & Apparel", technology: "Shopify", url: "https://www.swag-kicks.com/", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop" },
    
    // More projects...
    { id: 74, title: "AbeBooks", industry: "Retail & E-Commerce", technology: "PHP", url: "https://www.abebooks.com/", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop" },
    { id: 75, title: "Strand Books", industry: "Retail & E-Commerce", technology: "Shopify", url: "https://www.strandbooks.com/", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop" },
  ];

  // Filter projects based on search, industry, and technology
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technology.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesIndustry = selectedIndustry === "All Industries" || 
        project.industry === selectedIndustry;
      
      const matchesTechnology = selectedTechnology === "All Technologies" || 
        project.technology === selectedTechnology;
      
      return matchesSearch && matchesIndustry && matchesTechnology;
    });
  }, [searchQuery, selectedIndustry, selectedTechnology]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedIndustry("All Industries");
    setSelectedTechnology("All Technologies");
  };

  const hasActiveFilters = searchQuery !== "" || selectedIndustry !== "All Industries" || selectedTechnology !== "All Technologies";

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Project Portfolio - 150+ Web Development & E-Commerce Projects"
        description="Explore 150+ successful web development projects: React, Vue, Angular, WordPress, Shopify, Laravel. E-commerce, booking sites, custom applications."
        keywords="web development portfolio, React projects, WordPress websites, Shopify stores, e-commerce development, Vue.js applications, Laravel projects, custom web development"
        canonicalUrl="https://bitroixsolution.com/projects"
        schemaMarkup={projectsSchema}
        breadcrumbs={[
          { name: "Home", url: "https://bitroixsolution.com" },
          { name: "Projects", url: "https://bitroixsolution.com/projects" }
        ]}
      />
      <Navigation />
      
      {/* Package Popup */}
      <PackagePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">150+ Successful Projects</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Project</span> Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Explore our diverse portfolio of successful projects across multiple industries and technologies.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by project name, industry, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full backdrop-blur-sm focus:bg-white/15 focus:border-blue-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-slate-800/50 border-b border-white/10 sticky top-16 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Filter Toggles */}
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start w-full md:w-auto">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>

              {/* Industry Dropdown */}
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 cursor-pointer"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry} className="bg-slate-800 text-white">
                    {industry}
                  </option>
                ))}
              </select>

              {/* Technology Dropdown */}
              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-400 cursor-pointer"
              >
                {technologies.map((tech) => (
                  <option key={tech} value={tech} className="bg-slate-800 text-white">
                    {tech}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-gray-300 text-sm">
              Showing <span className="font-semibold text-blue-400">{filteredProjects.length}</span> of {projects.length} projects
            </div>
          </div>

          {/* Expanded Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Industry Tags */}
                <div>
                  <h4 className="text-white font-medium mb-3 text-sm">Filter by Industry</h4>
                  <div className="flex flex-wrap gap-2">
                    {industries.slice(0, 10).map((industry) => (
                      <Badge
                        key={industry}
                        variant={selectedIndustry === industry ? "default" : "outline"}
                        className={`cursor-pointer transition-all ${
                          selectedIndustry === industry 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'border-white/30 text-gray-300 hover:border-blue-400 hover:text-blue-300'
                        }`}
                        onClick={() => setSelectedIndustry(industry)}
                      >
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technology Tags */}
                <div>
                  <h4 className="text-white font-medium mb-3 text-sm">Filter by Technology</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 10).map((tech) => (
                      <Badge
                        key={tech}
                        variant={selectedTechnology === tech ? "default" : "outline"}
                        className={`cursor-pointer transition-all ${
                          selectedTechnology === tech 
                            ? 'bg-purple-500 text-white border-purple-500' 
                            : 'border-white/30 text-gray-300 hover:border-purple-400 hover:text-purple-300'
                        }`}
                        onClick={() => setSelectedTechnology(tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block animate-fade-in group"
                  style={{ animationDelay: `${Math.min(index * 0.03, 0.5)}s` }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50 hover:border-blue-500/50">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex items-center gap-2 text-white text-sm">
                          <ExternalLink className="w-4 h-4" />
                          Visit Website
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-0 text-xs">
                          {project.technology}
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
                          {project.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.description && (
                        <CardDescription className="text-gray-400 text-sm">
                          {project.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
              <Button onClick={clearFilters} variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              onClick={() => setShowPopup(true)}
            >
              View Our Packages
            </Button>
            <a href="/schedule-meeting">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Schedule a Meeting
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects;
