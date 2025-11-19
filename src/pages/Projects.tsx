import React from 'react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  // All projects organized by category
  const projects = [
    // React Websites
    { id: 1, title: "Industrial Discount", category: "React Websites", url: "https://www.industrialdiscount.it/", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
    { id: 2, title: "Noon UAE", category: "React Websites", url: "https://www.noon.com/uae-en/", image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop" },
    { id: 3, title: "Northern Trust", category: "React Websites", url: "https://www.northerntrust.com/asia-pac/home", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
    
    // Weebly Websites
    { id: 4, title: "Japhletba", category: "Weebly Websites", url: "http://www.japhletba.com/", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop" },
    { id: 5, title: "Fusedale Design", category: "Weebly Websites", url: "https://www.fusedaledesign.com/", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" },
    { id: 6, title: "Sanders Family Real Estate", category: "Weebly Websites", url: "http://www.sandersfamilyrealestate.com/", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" },
    { id: 7, title: "The Ready Desk", category: "Weebly Websites", url: "https://thereadydesk.com/", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" },
    { id: 8, title: "Douksnow", category: "Weebly Websites", url: "http://www.douksnow.com/", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop" },
    
    // Vue Portfolio
    { id: 9, title: "Wizz Air", category: "Vue Portfolio", url: "https://wizzair.com/#/", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop" },
    { id: 10, title: "Discover Your Purple", category: "Vue Portfolio", url: "https://discoveryourpurple.ca/", image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=600&fit=crop" },
    { id: 11, title: "Melon Fashion Office", category: "Vue Portfolio", url: "http://office.melonfashion.ru/en/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    
    // Angular Portfolio
    { id: 12, title: "Cavenwell", category: "Angular Portfolio", url: "https://cavenwell.io/", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop" },
    { id: 13, title: "Kids City Life", category: "Angular Portfolio", url: "https://kidscity.life/", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop" },
    { id: 14, title: "Ultimate Designerz", category: "Angular Portfolio", url: "https://ultimatedesignerz.site/twentyfourhours/", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" },
    { id: 15, title: "Blowfire", category: "Angular Portfolio", url: "https://blowfire.geex-arts.com/", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop" },
    { id: 16, title: "Mezzolab", category: "Angular Portfolio", url: "https://www.mezzolab.com", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" },
    
    // WordPress Elementor
    { id: 17, title: "Shake Design", category: "WordPress Elementor", url: "https://www.shakedesign.co.il/", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop" },
    { id: 18, title: "Moschalkx", category: "WordPress Elementor", url: "http://moschalkx.com/", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop" },
    { id: 19, title: "Mason and Megan", category: "WordPress Elementor", url: "https://masonandmegan.com/", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop" },
    { id: 20, title: "Michael Casado", category: "WordPress Elementor", url: "https://michaelcasado.com/", image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop" },
    
    // Booking Websites
    { id: 21, title: "Julius Homes", category: "Booking Websites", url: "https://book.juliushomes.com/", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" },
    { id: 22, title: "Agoda", category: "Booking Websites", url: "https://www.agoda.com/", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop" },
    { id: 23, title: "Sell My Timeshare Now", category: "Booking Websites", url: "https://www.sellmytimesharenow.com/", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop" },
    { id: 24, title: "Hotel Tonight", category: "Booking Websites", url: "https://www.hoteltonight.com/", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop" },
    { id: 25, title: "Villas Direct", category: "Booking Websites", url: "https://www.villasdirect.com/", image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&h=600&fit=crop" },
    { id: 26, title: "Hotels Combined", category: "Booking Websites", url: "https://www.hotelscombined.com/", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop" },
    
    // Travel Book Flight
    { id: 27, title: "Kayak", category: "Travel Book Flight", url: "https://www.kayak.com/", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop" },
    { id: 28, title: "Skiplagged", category: "Travel Book Flight", url: "https://skiplagged.com", image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=600&fit=crop" },
    { id: 29, title: "Orbitz", category: "Travel Book Flight", url: "https://www.orbitz.com/", image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&h=600&fit=crop" },
    { id: 30, title: "Travelocity", category: "Travel Book Flight", url: "https://www.travelocity.com/", image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop" },
    
    // Amazon Affiliate Websites
    { id: 31, title: "Kavella", category: "Amazon Affiliate", url: "https://kavella.com/", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop" },
    { id: 32, title: "Consumer Search", category: "Amazon Affiliate", url: "https://www.consumersearch.com/", image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop" },
    { id: 33, title: "Gift Idea Geek", category: "Amazon Affiliate", url: "https://www.giftideageek.com/", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop" },
    { id: 34, title: "The Wirecutter", category: "Amazon Affiliate", url: "https://thewirecutter.com/", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop" },
    { id: 35, title: "Gear Patrol", category: "Amazon Affiliate", url: "https://gearpatrol.com/", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop" },
    { id: 36, title: "Dog Food Advisor", category: "Amazon Affiliate", url: "https://www.dogfoodadvisor.com/", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop" },
    { id: 37, title: "Baby Gear Lab", category: "Amazon Affiliate", url: "http://www.babygearlab.com/", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=600&fit=crop" },
    
    // WordPress Websites
    { id: 38, title: "Family First Life Resilience", category: "WordPress", url: "https://familyfirstliferesilience.com/", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop" },
    { id: 39, title: "American Glazing Association", category: "WordPress", url: "https://americanglazingassociation.org/", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" },
    { id: 40, title: "Rembrandt USA", category: "WordPress", url: "https://rembrandtusa.com/", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop" },
    { id: 41, title: "Travelitesky", category: "WordPress", url: "http://www.travelitesky.com", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop" },
    { id: 42, title: "Lue Dental Clinic", category: "WordPress", url: "https://luedentalclinic.com/", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop" },
    { id: 43, title: "IVision Gate", category: "WordPress", url: "https://ivisiongate.com", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
    { id: 44, title: "E-Solution Services", category: "WordPress", url: "http://www.e-solutionservices.com/", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
    { id: 45, title: "Grette", category: "WordPress", url: "https://grette.no/en/", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop" },
    { id: 46, title: "99 Percent Invisible", category: "WordPress", url: "https://99percentinvisible.org/", image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=600&fit=crop" },
    { id: 47, title: "Method Home", category: "WordPress", url: "https://methodhome.com/", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop" },
    { id: 48, title: "We Are Unconquered", category: "WordPress", url: "https://www.weareunconquered.co/", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" },
    { id: 49, title: "Nove EU", category: "WordPress", url: "https://nove.eu/", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" },
    { id: 50, title: "Jony Guedj", category: "WordPress", url: "http://www.jonyguedj.com/", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop" },
    
    // WordPress BuddyPress
    { id: 51, title: "Caryl FR", category: "WordPress BuddyPress", url: "https://caryl.fr/", image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop" },
    { id: 52, title: "Tasty Kitchen", category: "WordPress BuddyPress", url: "https://tastykitchen.com/", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop" },
    { id: 53, title: "Blogs SCH", category: "WordPress BuddyPress", url: "https://blogs.sch.gr/", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop" },
    { id: 54, title: "Students Nepal", category: "WordPress BuddyPress", url: "https://www.studentsnepal.com/", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop" },
    { id: 55, title: "Temple MIS Community", category: "WordPress BuddyPress", url: "https://community.mis.temple.edu/", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop" },
    { id: 56, title: "Sheepworld", category: "WordPress BuddyPress", url: "https://www.sheepworld.de/", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop" },
    
    // Custom WordPress
    { id: 57, title: "Jencor", category: "Custom WordPress", url: "http://www.jencor.com/", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop" },
    { id: 58, title: "Bath Kitchen and Tile", category: "Custom WordPress", url: "https://www.bathkitchenandtile.com/", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" },
    { id: 59, title: "Nugent Sons", category: "Custom WordPress", url: "https://www.nugentsons.com/", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop" },
    { id: 60, title: "Providence Center", category: "Custom WordPress", url: "https://providencecenter.org/", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" },
    { id: 61, title: "Metrotech", category: "Custom WordPress", url: "https://metrotech-net.com/", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop" },
    { id: 62, title: "Mountain Air Utah", category: "Custom WordPress", url: "https://www.mountainairutah.com/", image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=600&fit=crop" },
    
    // E-Commerce
    { id: 63, title: "Hard Graft", category: "E-Commerce", url: "https://www.hardgraft.com/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    { id: 64, title: "Gymshark", category: "E-Commerce", url: "https://www.gymshark.com/", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop" },
    { id: 65, title: "Swag Kicks", category: "E-Commerce", url: "https://www.swag-kicks.com/", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop" },
    
    // WooCommerce
    { id: 66, title: "Porter and York", category: "WooCommerce", url: "https://porterandyork.com/", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop" },
    { id: 67, title: "Jack Rudy Cocktail", category: "WooCommerce", url: "https://jackrudycocktailco.com/", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop" },
    { id: 68, title: "Dark Horse", category: "WooCommerce", url: "http://dark-horse.co.za/", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop" },
    { id: 69, title: "Joco Cups", category: "WooCommerce", url: "https://jococups.com/usa/", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop" },
    { id: 70, title: "Goveer", category: "WooCommerce", url: "https://www.goveer.com/", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop" },
    { id: 71, title: "Mikes Organic Delivery", category: "WooCommerce", url: "https://mikesorganicdelivery.com/", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop" },
    { id: 72, title: "Chuckling Goat", category: "WooCommerce", url: "https://www.chucklinggoat.co.uk/", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop" },
    
    // Shopify Stores
    { id: 73, title: "Nutriseed", category: "Shopify", url: "https://www.nutriseed.co.uk/", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop" },
    { id: 74, title: "Quad Lock Case", category: "Shopify", url: "https://www.quadlockcase.com/", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop" },
    { id: 75, title: "Sunday Somewhere", category: "Shopify", url: "https://sundaysomewhere.com/", image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&h=600&fit=crop" },
    { id: 76, title: "Cosmetic Love", category: "Shopify", url: "https://cosmetic-love.com/", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop" },
    { id: 77, title: "Unconditional UK", category: "Shopify", url: "https://www.unconditional.uk.com/", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop" },
    { id: 78, title: "Cake Cosmetics", category: "Shopify", url: "https://www.cakecosmetics.co.uk/", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop" },
    
    // Laravel Websites
    { id: 79, title: "Fusion Invoice", category: "Laravel", url: "https://www.fusioninvoice.com/", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop" },
    { id: 80, title: "Cachet HQ", category: "Laravel", url: "https://cachethq.io/", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
    { id: 81, title: "Neighborhood Lender", category: "Laravel", url: "https://neighborhoodlender.com/", image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop" },
    { id: 82, title: "Storyblocks", category: "Laravel", url: "https://www.storyblocks.com/", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop" },
    { id: 83, title: "Fashionette", category: "Laravel", url: "https://www.fashionette.de/", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop" },
    { id: 84, title: "OneOpinion", category: "Laravel", url: "https://www.oneopinion.com/", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop" },
    { id: 85, title: "Invicta Watch", category: "Laravel", url: "https://www.invictawatch.com/", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop" },
    
    // PHP Websites
    { id: 86, title: "Few and Far", category: "PHP", url: "https://fewandfar.io/", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" },
    { id: 87, title: "Another Colour", category: "PHP", url: "https://anothercolour.com.au/", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" },
    { id: 88, title: "Compressport", category: "PHP", url: "https://www.compressport.com/usa/en/", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop" },
    { id: 89, title: "Crowdfunding Formula", category: "PHP", url: "https://thecrowdfundingformula.com/", image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&h=600&fit=crop" },
    { id: 90, title: "Alps Coffee", category: "PHP", url: "https://www.alps-coffee.it/de/", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop" },
    
    // Node.js Websites
    { id: 91, title: "Prodotti ID", category: "Node.js", url: "http://www.prodotti-id.com/", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop" },
    { id: 92, title: "Nobel Peace Center", category: "Node.js", url: "https://www.nobelpeacecenter.org/", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" },
    { id: 93, title: "Voyen Auto", category: "Node.js", url: "https://www.voyenauto.com/", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop" },
    { id: 94, title: "Glyf RU", category: "Node.js", url: "https://glyf.ru/en/", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" },
    
    // Real Estate
    { id: 95, title: "Street Porch", category: "Real Estate", url: "https://street-porch.com/", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" },
    { id: 96, title: "City Sales NZ", category: "Real Estate", url: "https://www.citysales.co.nz/", image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop" },
    { id: 97, title: "The Collective", category: "Real Estate", url: "https://www.thecollective.com/", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop" },
    { id: 98, title: "Enamer Development", category: "Real Estate", url: "https://www.enamerdevelopment.com/fr/", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop" },
    { id: 99, title: "City Foundry STL", category: "Real Estate", url: "https://cityfoundrystl.com/", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" },
    { id: 100, title: "Century 21", category: "Real Estate", url: "https://www.century21.com/", image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop" },
    
    // More categories continuing with same pattern...
    // Magento
    { id: 101, title: "Jimmy Lion", category: "Magento", url: "https://www.jimmylion.com/us", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop" },
    { id: 102, title: "Xtrons", category: "Magento", url: "https://xtrons.com/", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop" },
    { id: 103, title: "Switch BE", category: "Magento", url: "https://www.switch.be/", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop" },
    
    // Transportation
    { id: 104, title: "Seastreak", category: "Transportation", url: "https://seastreak.com/", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop" },
    { id: 105, title: "Jet Edge", category: "Transportation", url: "https://www.flyjetedge.com/", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop" },
    { id: 106, title: "Siemens Mobility", category: "Transportation", url: "http://www.siemens.com.tr/i/Assets/mobility/index_en.html", image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop" },
    { id: 107, title: "Transfers", category: "Transportation", url: "http://www.themeenergy.com/themes/html/transfers/", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop" },
    
    // Sports
    { id: 108, title: "Compressport", category: "Sports", url: "https://www.compressport.com/usa/en/", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop" },
    { id: 109, title: "Hyperlite", category: "Sports", url: "https://www.hyperlite.com/en/", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop" },
    { id: 110, title: "Cervelo", category: "Sports", url: "https://www.cervelo.com/en/", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&h=600&fit=crop" },
    { id: 111, title: "Team Elite Kickboxing", category: "Sports", url: "https://teamelitekickboxing.org/", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop" },
    { id: 112, title: "Roval Components", category: "Sports", url: "https://rovalcomponents.com/", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&h=600&fit=crop" },
    { id: 113, title: "Ocean Vagabond", category: "Sports", url: "https://www.oceanvagabond.com/fr/", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop" },
    
    // Prestashop
    { id: 114, title: "Decathlon", category: "Prestashop", url: "https://www.decathlon.ma/", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop" },
    { id: 115, title: "Smallable", category: "Prestashop", url: "https://en.smallable.com/", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" },
    { id: 116, title: "My American Market", category: "Prestashop", url: "https://www.myamericanmarket.com/us/", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop" },
    { id: 117, title: "Urbanara", category: "Prestashop", url: "https://www.urbanara.co.uk/", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop" },
    { id: 118, title: "Botland", category: "Prestashop", url: "https://botland.com.pl/en/", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=600&fit=crop" },
    { id: 119, title: "Footshop", category: "Prestashop", url: "https://www.footshop.eu/en/", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=600&fit=crop" },
    { id: 120, title: "Hat Showroom", category: "Prestashop", url: "https://www.hatshowroom.com/", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=600&fit=crop" },
    
    // Wedding
    { id: 121, title: "Boutique Weddings", category: "Wedding", url: "https://www.boutique-weddings.com/", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" },
    { id: 122, title: "Abetel Wedding", category: "Wedding", url: "https://wedding.abetel.com/", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop" },
    { id: 123, title: "The Bridal Planner", category: "Wedding", url: "http://thebridalplanner.co/", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop" },
    
    // Transportation Services
    { id: 124, title: "NZTA", category: "Transportation Services", url: "https://nzta.govt.nz/", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop" },
    { id: 125, title: "Direct Lease Private", category: "Transportation Services", url: "https://www.directleaseprivate.nl/", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop" },
    
    // Salon
    { id: 126, title: "Lisa Dinh Hair Studio", category: "Salon", url: "http://lisadinhhairstudio.com/olivia-huynh", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop" },
    { id: 127, title: "Drybar", category: "Salon", url: "https://www.thedrybar.com/", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop" },
    { id: 128, title: "Nine Zero One Salon", category: "Salon", url: "https://www.ninezeroonesalon.com/", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop" },
    { id: 129, title: "Bleach London", category: "Salon", url: "https://bleachlondon.co.uk/", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop" },
    { id: 130, title: "Fourteen Jay", category: "Salon", url: "http://www.fourteenjay.com/", image: "https://images.unsplash.com/photo-1470254934819-1c00144c8f5e?w=800&h=600&fit=crop" },
    
    // Loan & Finance
    { id: 131, title: "Lending Club", category: "Loan & Finance", url: "https://www.lendingclub.com/", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop" },
    { id: 132, title: "LendingTree", category: "Loan & Finance", url: "https://www.lendingtree.com/", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop" },
    { id: 133, title: "Americas Loans", category: "Loan & Finance", url: "https://www.americashloans.net/", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop" },
    { id: 134, title: "LSTA", category: "Loan & Finance", url: "https://www.lsta.org/", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop" },
    { id: 135, title: "Loans.no", category: "Loan & Finance", url: "https://loans.no/", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop" },
    { id: 136, title: "Financial Marketing", category: "Loan & Finance", url: "https://www.financial-marketing.co.uk/", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
    { id: 137, title: "Betterment", category: "Loan & Finance", url: "https://www.betterment.com/", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop" },
    { id: 138, title: "Earnest", category: "Loan & Finance", url: "https://www.earnest.com/homepage-new", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
    { id: 139, title: "Nutmeg", category: "Loan & Finance", url: "https://www.nutmeg.com/", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop" },
    { id: 140, title: "Xero", category: "Loan & Finance", url: "https://www.xero.com/us/", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop" },
    
    // Tender
    { id: 141, title: "Tender Impulse", category: "Tender", url: "https://tenderimpulse.com/", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop" },
    { id: 142, title: "eTendering TED", category: "Tender", url: "https://etendering.ted.europa.eu/", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" },
    { id: 143, title: "Tenderio", category: "Tender", url: "http://www.tenderio.com/", image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop" },
    
    // Medical
    { id: 144, title: "RxList", category: "Medical", url: "https://www.rxlist.com/script/main/hp.asp", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=600&fit=crop" },
    { id: 145, title: "Artversion Healthcare", category: "Medical", url: "http://artversionforhealthcare.com/", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop" },
    
    // Bookstore
    { id: 146, title: "AbeBooks", category: "Bookstore", url: "https://www.abebooks.com/", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop" },
    { id: 147, title: "Strand Books", category: "Bookstore", url: "https://www.strandbooks.com/", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop" },
    { id: 148, title: "Website Store", category: "Bookstore", url: "https://www.websitestore.co.uk/", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop" },
    
    // Wix
    { id: 149, title: "VA Group", category: "Wix", url: "https://www.vagroup.com/", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
    { id: 150, title: "Lin-Manuel Miranda", category: "Wix", url: "https://www.linmanuel.com/", image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop" },
    { id: 151, title: "eBulletins", category: "Wix", url: "https://www.ebulletins.com/", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop" },
    { id: 152, title: "3LB Seed", category: "Wix", url: "https://www.3lbseed.com/", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop" },
    { id: 153, title: "Juslyn Vineyards", category: "Wix", url: "https://www.juslynvineyards.com/", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop" },
    
    // Consulting
    { id: 154, title: "Simplicity", category: "Consulting", url: "https://simplicityc.com/", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" },
    { id: 155, title: "Moss Adams", category: "Consulting", url: "https://www.mossadams.com/home", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" },
    { id: 156, title: "Fresh Consulting", category: "Consulting", url: "https://www.freshconsulting.com/", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop" },
    { id: 157, title: "Soft Tutor", category: "Consulting", url: "http://softtutor.pl/en/", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop" },
    { id: 158, title: "Innoitus", category: "Consulting", url: "https://www.innoitus.com.au/", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop" },
    { id: 159, title: "Time is Money Pro", category: "Consulting", url: "http://timeismoneypro.com", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" },
  ];

  const categories = [
    "All",
    "React Websites",
    "Weebly Websites",
    "Vue Portfolio",
    "Angular Portfolio",
    "WordPress Elementor",
    "Booking Websites",
    "Travel Book Flight",
    "Amazon Affiliate",
    "WordPress",
    "WordPress BuddyPress",
    "Custom WordPress",
    "E-Commerce",
    "WooCommerce",
    "Shopify",
    "Laravel",
    "PHP",
    "Node.js",
    "Real Estate",
    "Magento",
    "Transportation",
    "Sports",
    "Prestashop",
    "Wedding",
    "Transportation Services",
    "Salon",
    "Loan & Finance",
    "Tender",
    "Medical",
    "Bookstore",
    "Wix",
    "Consulting"
  ];
  
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Projects Portfolio | 500+ Web Development Projects"
        description="Explore 500+ successful web development projects by Bitroix Solution LLC - React, Vue, Angular, WordPress, Laravel, Shopify, and custom web applications."
        keywords="project portfolio, React websites, Vue projects, Angular applications, WordPress development, Laravel projects, Shopify stores, web development portfolio"
        canonicalUrl="https://bitroixsolution.com/projects"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Project</span> Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Showcasing 500+ successful projects across multiple platforms and technologies. Click any project to visit the live website.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs sm:text-sm mb-2 hover-scale"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Count */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-muted-foreground">
              Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> projects
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-base sm:text-lg line-clamp-1">{project.title}</CardTitle>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    </div>
                    <Badge variant="secondary" className="w-fit text-xs">
                      {project.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                      Click to visit live website
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's build something amazing together. Schedule a free consultation to discuss your project.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-sm sm:text-base hover-scale"
            onClick={() => window.location.href = '/schedule-meeting'}
          >
            Schedule a Meeting
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;