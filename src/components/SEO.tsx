import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaMarkup?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "web development, AI chatbots, SEO services, digital marketing, data analytics, DevOps, MLOps, UI/UX design, custom software development, Lancaster PA, San Francisco, Karachi",
  canonicalUrl,
  ogImage = "https://bitroixsolution.com/lovable-uploads/c1164fdd-5ccc-43cd-b1d6-a0fe104c2807.png",
  ogType = "website",
  schemaMarkup
}: SEOProps) => {
  const fullTitle = title.length > 60 ? title : `${title} | Bitroix Solution LLC - Professional Web Development & Digital Marketing`;
  const siteUrl = "https://bitroixsolution.com";
  const fullCanonicalUrl = canonicalUrl || siteUrl;
  
  // Ensure description is within optimal length
  const optimizedDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="author" content="Bitroix Solution LLC" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bitroix Solution LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@bitroixsolution" />
      <meta name="twitter:site" content="@bitroixsolution" />

      {/* Geo Tags - Multiple Locations */}
      <meta name="geo.region" content="US-CA;PK-SD" />
      <meta name="geo.placename" content="San Francisco, California;Karachi, Pakistan" />
      <meta name="geo.position" content="37.7749;-122.4194;24.8607;67.0011" />
      <meta name="ICBM" content="37.7749, -122.4194" />

      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;