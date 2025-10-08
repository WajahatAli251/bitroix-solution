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
  keywords = "web development, AI chatbots, SEO services, digital marketing, data analytics, DevOps, MLOps, UI/UX design, custom software development",
  canonicalUrl,
  ogImage = "https://bitroixsolution.com/bitroix-logo.png",
  ogType = "website",
  schemaMarkup
}: SEOProps) => {
  const fullTitle = `${title} | Bitroix Solution LLC - Professional Web Development & Digital Marketing`;
  const siteUrl = "https://bitroixsolution.com";
  const fullCanonicalUrl = canonicalUrl || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Bitroix Solution LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo Tags */}
      <meta name="geo.region" content="US-PA" />
      <meta name="geo.placename" content="Lancaster, Pennsylvania" />
      <meta name="geo.position" content="40.0379;-76.3055" />
      <meta name="ICBM" content="40.0379, -76.3055" />

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