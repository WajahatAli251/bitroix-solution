import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaMarkup?: object;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  noindex?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  preloadImages?: string[];
  jsonLdMultiple?: object[];
}

const SEO = ({ 
  title, 
  description, 
  keywords = "web development company, AI chatbot development, SEO services, digital marketing agency, data analytics, DevOps MLOps, UI/UX design, custom software development, San Francisco, Karachi, software outsourcing, react development, full stack development",
  canonicalUrl,
  ogImage = "https://bitroixsolution.com/lovable-uploads/c1164fdd-5ccc-43cd-b1d6-a0fe104c2807.png",
  ogType = "website",
  schemaMarkup,
  article,
  noindex = false,
  breadcrumbs,
  preloadImages = [],
  jsonLdMultiple = []
}: SEOProps) => {
  const fullTitle = title === "Home" 
    ? "Bitroix Solution LLC - Expert Web Development, AI Chatbots & Digital Marketing | San Francisco & Karachi"
    : title.length > 55 ? title : `${title} | Bitroix Solution LLC`;
  const siteUrl = "https://bitroixsolution.com";
  const fullCanonicalUrl = canonicalUrl || siteUrl;
  
  // Ensure description is within optimal length (150-160 chars is ideal)
  const optimizedDescription = description.length > 155 ? description.substring(0, 152) + '...' : description;

  const robotsContent = noindex 
    ? "noindex, nofollow" 
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  // Generate breadcrumb schema if provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Current date for freshness signals
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content="index, follow" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="author" content="Bitroix Solution LLC" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="3 days" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="language" content="English" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="last-modified" content={currentDate} />
      
      {/* Performance: Preload critical images */}
      {preloadImages.map((img, index) => (
        <link key={index} rel="preload" as="image" href={img} fetchPriority="high" />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bitroix Solution LLC" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_PK" />
      <meta property="og:updated_time" content={currentDate} />
      
      {/* Article specific tags */}
      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
      {article?.author && <meta property="article:author" content={article.author} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bitroixsolution" />
      <meta name="twitter:creator" content="@bitroixsolution" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:domain" content="bitroixsolution.com" />

      {/* Geo Tags - San Francisco (Primary) */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="San Francisco, California, USA" />
      <meta name="geo.position" content="37.7749;-122.4194" />
      <meta name="ICBM" content="37.7749, -122.4194" />
      
      {/* Dublin Core Metadata for enhanced discovery */}
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.creator" content="Bitroix Solution LLC" />
      <meta name="DC.subject" content={keywords} />
      <meta name="DC.description" content={optimizedDescription} />
      <meta name="DC.publisher" content="Bitroix Solution LLC" />
      <meta name="DC.language" content="en" />
      <meta name="DC.coverage" content="Worldwide" />
      <meta name="DC.rights" content="Copyright Bitroix Solution LLC" />

      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}

      {/* Multiple JSON-LD schemas */}
      {jsonLdMultiple.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;