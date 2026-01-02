import { useEffect, memo } from 'react';
import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const ReviewsSection = memo(() => {
  const reviews = [
    {
      name: "Robert Warren",
      company: "Warren Cleaning Services",
      position: "Founder & CEO",
      rating: 5,
      comment: "Bitroix Solution transformed our online presence completely. They built a beautiful, responsive website that showcases our cleaning services perfectly. Our online bookings increased by 60% within the first month.",
      avatar: "👨‍💼",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop"
    },
    {
      name: "James Mitchell",
      company: "Best Technology",
      position: "CTO",
      comment: "Working with Bitroix has been exceptional. They developed our e-commerce platform with cutting-edge technology and intuitive UI/UX design. The custom features they built helped us streamline our operations.",
      rating: 5,
      avatar: "👨‍💻",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      company: "iTruck Express",
      position: "Operations Director",
      comment: "The logistics management system Bitroix developed for us revolutionized our operations. Real-time tracking, automated dispatching, and comprehensive reporting features have increased our efficiency by 45%.",
      rating: 5,
      avatar: "🚚",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop"
    },
    {
      name: "Dr. Patricia Anderson",
      company: "ECC (Educational Care Center)",
      position: "Director",
      comment: "Bitroix created a comprehensive learning management system for our educational center. The student portal, attendance tracking, and parent communication features they built have made administration so much easier.",
      rating: 5,
      avatar: "👩‍🏫",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop"
    },
    {
      name: "Dr. Steven Martinez",
      company: "U.S. Surgitech",
      position: "Medical Director",
      comment: "Security and compliance are critical in medical technology. Bitroix delivered a HIPAA-compliant platform with robust security features for managing our surgical equipment inventory and distribution.",
      rating: 5,
      avatar: "⚕️",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop"
    },
    {
      name: "Sarah Thompson",
      company: "ZPD Learning",
      position: "Founder & CEO",
      comment: "The e-learning platform Bitroix built for us is outstanding. Interactive course modules, progress tracking, and seamless payment integration - everything works flawlessly. Student engagement increased by 70%!",
      rating: 5,
      avatar: "👩‍💼",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <section className="py-20 bg-slate-50" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 id="reviews-heading" className="text-4xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" aria-hidden="true"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </header>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {reviews.map((review, index) => (
              <div key={index} className="embla__slide flex-none w-80 md:w-96 mr-6">
                <article className="relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group min-h-[280px]" itemScope itemType="https://schema.org/Review">
                  {/* Background Image with lazy loading */}
                  <img 
                    src={review.image}
                    alt={`${review.company} review background`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/80"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white drop-shadow-lg" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{review.name}</span>
                      </h4>
                      <p className="text-sm text-gray-300" itemProp="jobTitle">{review.position}</p>
                      <p className="text-sm text-cyan-400 font-medium" itemProp="worksFor">{review.company}</p>
                    </div>

                    <div className="flex mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={String(review.rating)} />
                      <meta itemProp="bestRating" content="5" />
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                      <span className="sr-only">{review.rating} out of 5 stars</span>
                    </div>

                    <p className="text-gray-200 leading-relaxed italic drop-shadow-md text-sm" itemProp="reviewBody">
                      "{review.comment}"
                    </p>
                  </div>
                </article>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {reviews.map((review, index) => (
              <div key={`duplicate-${index}`} className="embla__slide flex-none w-80 md:w-96 mr-6">
                <article className="relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group min-h-[280px]">
                  <img 
                    src={review.image}
                    alt={`${review.company} review background`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/60 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/80"></div>
                  <div className="relative z-10">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white drop-shadow-lg">{review.name}</h4>
                      <p className="text-sm text-gray-300">{review.position}</p>
                      <p className="text-sm text-cyan-400 font-medium">{review.company}</p>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-gray-200 leading-relaxed italic drop-shadow-md text-sm">
                      "{review.comment}"
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#001f3f] via-[#003d66] to-[#005580] text-white p-8 rounded-xl relative overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>Ready to Join Our Success Stories?</h3>
              <p className="text-lg mb-6 opacity-90 animate-fade-in" style={{animationDelay: '0.3s'}}>Let's discuss how we can help transform your business</p>
              <button
                onClick={() => window.location.href = "mailto:info@bitroixsolution.com?subject=Project Inquiry"}
                className="bg-gradient-to-r from-[#00bfff] to-[#0077cc] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 animate-fade-in"
                style={{animationDelay: '0.4s'}}
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;
