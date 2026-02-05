import React, { memo } from 'react';
import awsLogo from '@/assets/tech-logos/aws.png';
import azureLogo from '@/assets/tech-logos/azure.png';
import terraformLogo from '@/assets/tech-logos/terraform.png';
import gcpLogo from '@/assets/tech-logos/google-cloud.png';
import kubernetesLogo from '@/assets/tech-logos/kubernetes.png';
import dockerLogo from '@/assets/tech-logos/docker.png';

// Pre-define image sources for better caching
const SERVICE_IMAGES = {
  leadGen: "/lovable-uploads/976ae802-eca8-4e3b-980e-5670c46536ef.png",
  seo: "/lovable-uploads/74657b6a-cd12-40ee-b239-66b76822d751.png",
  paidAds: "/lovable-uploads/bec8f18d-ee2a-4a17-bd69-6a1ee4845629.png",
  automation: "/lovable-uploads/4ba4056f-25de-476f-8515-6edff94dbe63.png",
  cro: "/lovable-uploads/35a9e2d4-2082-408b-ab86-d95889dc822f.png",
  social: "/lovable-uploads/a95641c7-884d-48c4-976d-019c9672302b.png",
};

const PLATFORM_IMAGES = {
  google: "/lovable-uploads/cea41c57-635d-4dfa-b81a-9c8bd784b5e9.png",
  gmail: "/lovable-uploads/8c65f578-4125-440e-a866-fe1ea674ae17.png",
  googleAds: "/lovable-uploads/3d04489a-89f5-4052-8646-c5530a128f37.png",
  instagram: "/lovable-uploads/bbc26383-9a27-4521-a917-896380b74f93.png",
  facebook: "/lovable-uploads/aa4b3aaf-8361-4187-a853-095c5711ffc2.png",
  bitroix: "/lovable-uploads/7748c8e2-43ed-4252-b3ca-868247963c13.png",
  linkedin: "/lovable-uploads/96a1d62d-0760-4240-baba-49ada83ac158.png",
  youtube: "/lovable-uploads/9ed3812d-81ea-4710-b5a0-0cd445a12116.png",
  pinterest: "/lovable-uploads/a78b49d3-6ebe-4e39-af48-feb615ca9d7d.png",
};

// Memoized service card component for better performance
const ServiceCard = memo(({ service, index }: { service: typeof services[0]; index: number }) => {
  const handleCTAClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div 
      className="backdrop-blur-md p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 group animate-fade-in relative overflow-hidden shadow-2xl"
      style={{
        animationDelay: service.delay,
        borderColor: '#264653',
        borderWidth: '2px',
        borderStyle: 'solid',
        boxShadow: '0 10px 30px rgba(51, 243, 255, 0.1)'
      }}
    >
      {/* Background Image - Lazy loaded */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      ></div>
      
      {/* Dark Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/75"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 transition-colors duration-300 drop-shadow-lg" style={{color: '#F0F4F8'}}>
          {service.title}
        </h4>
        <p className="leading-relaxed mb-4 md:mb-6 drop-shadow-md text-sm md:text-base" style={{color: '#9BE3FF'}}>
          {service.hook}
        </p>
        <button
          onClick={() => handleCTAClick(service.link)}
          className="w-full font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 text-sm md:text-base"
          style={{
            background: 'linear-gradient(to right, #00BFFF, #33F3FF)',
            color: '#0D1B2A',
            borderColor: '#264653',
            boxShadow: '0 8px 25px rgba(0, 191, 255, 0.3)'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.background = 'linear-gradient(to right, #1EC8E8, #33F3FF)';
            target.style.boxShadow = '0 12px 35px rgba(30, 200, 232, 0.4)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.background = 'linear-gradient(to right, #00BFFF, #33F3FF)';
            target.style.boxShadow = '0 8px 25px rgba(0, 191, 255, 0.3)';
          }}
        >
          {service.cta} →
        </button>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

// Memoized platform icon for performance
const PlatformIcon = memo(({ src, alt, size = 12 }: { src: string; alt: string; size?: number }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`h-${size} w-${size} object-contain hover:scale-110 transition-transform duration-300`}
    loading="lazy"
    decoding="async"
    width={size * 4}
    height={size * 4}
  />
));

PlatformIcon.displayName = 'PlatformIcon';

const services = [
  {
    title: "Lead Generation Systems",
    hook: "Say goodbye to cold outreach. Our systems deliver hot leads — automatically.",
    cta: "Learn More",
    delay: "0s",
    link: "/solutions/lead-generation",
    image: SERVICE_IMAGES.leadGen
  },
  {
    title: "SEO That Dominates",
    hook: "Be found by customers who are already searching. Top Google rankings, guaranteed.",
    cta: "Learn More",
    delay: "0.1s",
    link: "/solutions/seo-dominance",
    image: SERVICE_IMAGES.seo
  },
  {
    title: "Paid Ads Management",
    hook: "Stop wasting ad spend. We run performance-focused Google & Meta ads that bring results.",
    cta: "Learn More",
    delay: "0.2s",
    link: "/solutions/paid-ads-management",
    image: SERVICE_IMAGES.paidAds
  },
  {
    title: "Marketing Automation",
    hook: "Work smarter, not harder. Automate follow-ups, lead nurturing, and reporting.",
    cta: "Learn More",
    delay: "0.3s",
    link: "/solutions/marketing-automation",
    image: SERVICE_IMAGES.automation
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    hook: "Visitors aren't buying? We fix that. Smart UI/UX + psychology-backed CTAs.",
    cta: "Learn More",
    delay: "0.4s",
    link: "/solutions/conversion-optimization",
    image: SERVICE_IMAGES.cro
  },
  {
    title: "Social Media Growth",
    hook: "Build a brand that people follow, trust, and buy from. No fluff — just ROI.",
    cta: "Learn More",
    delay: "0.5s",
    link: "/solutions/social-media-growth",
    image: SERVICE_IMAGES.social
  }
];

// Certification logos - using imported assets for reliable loading
const CERTIFICATIONS = [
  { name: "Docker", logo: dockerLogo },
  { name: "Kubernetes", logo: kubernetesLogo },
  { name: "Microsoft Azure", logo: azureLogo },
  { name: "Terraform", logo: terraformLogo },
  { name: "AWS Certified", logo: awsLogo },
  { name: "Google Cloud", logo: gcpLogo },
];

// Memoized certification badge component
const CertificationBadge = memo(({ cert }: { cert: typeof CERTIFICATIONS[0] }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
    <img 
      src={cert.logo} 
      alt={`${cert.name} certification`} 
      className="h-10 w-10 object-contain"
      loading="lazy"
      decoding="async"
    />
    <span className="text-white font-medium whitespace-nowrap">{cert.name}</span>
  </div>
));

CertificationBadge.displayName = 'CertificationBadge';

const SolutionsSection = () => {
  const handleCTAClick = (link: string) => {
    window.location.href = link;
  };

  const platformIcons = [
    { src: PLATFORM_IMAGES.google, alt: "Google" },
    { src: PLATFORM_IMAGES.gmail, alt: "Gmail" },
    { src: PLATFORM_IMAGES.googleAds, alt: "Google Ads" },
    { src: PLATFORM_IMAGES.instagram, alt: "Instagram" },
    { src: PLATFORM_IMAGES.facebook, alt: "Facebook" },
  ];

  const platformIconsAfterBitroix = [
    { src: PLATFORM_IMAGES.linkedin, alt: "LinkedIn" },
    { src: PLATFORM_IMAGES.youtube, alt: "YouTube" },
    { src: PLATFORM_IMAGES.pinterest, alt: "Pinterest" },
  ];

  return (
    <section id="solutions" className="py-20 relative overflow-hidden" style={{background: 'linear-gradient(to right, #0D1B2A, #1B263B)'}}>
      {/* Futuristic 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-32 left-20 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#33F3FF10'}}></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s', backgroundColor: '#00BFFF08'}}></div>
        <div className="absolute top-20 right-1/3 w-64 h-64 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s', backgroundColor: '#1EC8E808'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s', backgroundColor: '#33F3FF10'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Certifications Carousel */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide mb-2" style={{color: '#F0F4F8'}}>
              Certified by <span style={{color: '#00BFFF'}}>Industry Leaders</span>
            </h3>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(to right, #00BFFF, #33F3FF)'}}></div>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 animate-[moveLeftToRight_25s_linear_infinite]">
              {/* Triple set for seamless loop */}
              {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, index) => (
                <CertificationBadge key={`cert-${index}`} cert={cert} />
              ))}
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight animate-slide-in-left drop-shadow-lg px-4" style={{color: '#F0F4F8'}}>
            Increase Website <span style={{color: '#00BFFF'}}>Traffic</span> & <span style={{color: '#00BFFF'}}>Sales</span><br className="hidden sm:block" />
            <span className="block sm:inline"> With Proven Digital Marketing</span>
          </h2>
          <div className="w-24 md:w-32 h-1 mx-auto mb-6 md:mb-8 animate-scale-in rounded-full shadow-lg" style={{background: 'linear-gradient(to right, #00BFFF, #33F3FF)', boxShadow: '0 0 20px #33F3FF50'}}></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed animate-fade-in drop-shadow-md px-4" style={{animationDelay: '0.3s', color: '#9BE3FF'}}>
            Professional SEO services, PPC advertising, social media marketing, and conversion optimization to <span style={{color: '#F0F4F8', fontWeight: '600'}}>boost your online presence and revenue</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center p-6 md:p-12 animate-fade-in transition-all duration-500" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 animate-pulse-glow tracking-tight px-4" style={{color: '#F0F4F8'}}>
            Let's Turn Your Website into a <span style={{color: '#00BFFF'}}>Growth Machine</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button
              onClick={() => handleCTAClick('/schedule-meeting')}
              className="font-bold py-3 md:py-4 px-6 md:px-10 rounded-xl text-base md:text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl border-2"
              style={{
                background: 'linear-gradient(to right, #00BFFF, #33F3FF)',
                color: '#0D1B2A',
                borderColor: '#264653',
                boxShadow: '0 10px 30px rgba(0, 191, 255, 0.3)'
              }}
            >
              Schedule Free Strategy Call
            </button>
            <button
              onClick={() => handleCTAClick('/')}
              className="font-bold py-3 md:py-4 px-6 md:px-10 rounded-xl text-base md:text-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border-2"
              style={{
                background: 'rgba(13, 27, 42, 0.2)',
                color: '#9BE3FF',
                borderColor: '#264653'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = '#00BFFF';
                target.style.color = '#0D1B2A';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.background = 'rgba(13, 27, 42, 0.2)';
                target.style.color = '#9BE3FF';
              }}
            >
              Explore Full Services
            </button>
          </div>
        </div>

        {/* Platform Integrations */}
        <div className="text-center mt-16 animate-fade-in overflow-hidden" style={{animationDelay: '1s'}}>
          <h4 className="text-2xl md:text-3xl font-bold mb-8" style={{color: '#F0F4F8'}}>
            Launch Your Campaign from <span style={{color: '#00BFFF'}}>One Platform</span>
          </h4>
          <p className="text-lg mb-10 max-w-3xl mx-auto" style={{color: '#9BE3FF'}}>
            Launch and promote your content with ease using our integrated advertising platform.
          </p>
          
          {/* Moving Platform Icons - Carousel Style */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-8 animate-[moveRightToLeft_30s_linear_infinite]">
              {/* First set */}
              <div className="flex gap-8 flex-shrink-0 items-center">
                {platformIcons.map((icon, i) => (
                  <PlatformIcon key={i} src={icon.src} alt={icon.alt} />
                ))}
                
                {/* Bitroix Logo - Larger */}
                <div className="relative">
                  <img src={PLATFORM_IMAGES.bitroix} alt="Bitroix Solution" className="h-16 w-16 object-contain hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" width="64" height="64" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#33F3FF'}}></div>
                </div>
                
                {platformIconsAfterBitroix.map((icon, i) => (
                  <PlatformIcon key={`after-${i}`} src={icon.src} alt={icon.alt} />
                ))}
              </div>

              {/* Duplicate sets for seamless loop */}
              {[1, 2].map((setNum) => (
                <div key={setNum} className="flex gap-8 flex-shrink-0 items-center">
                  {platformIcons.map((icon, i) => (
                    <PlatformIcon key={`set${setNum}-${i}`} src={icon.src} alt={icon.alt} />
                  ))}
                  <div className="relative">
                    <img src={PLATFORM_IMAGES.bitroix} alt="Bitroix Solution" className="h-16 w-16 object-contain hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" width="64" height="64" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#33F3FF'}}></div>
                  </div>
                  {platformIconsAfterBitroix.map((icon, i) => (
                    <PlatformIcon key={`set${setNum}-after-${i}`} src={icon.src} alt={icon.alt} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
