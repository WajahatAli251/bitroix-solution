import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we build and design websites, from automated coding to intelligent UX decisions.",
    date: "March 15, 2024",
    author: "Bitroix Team",
    category: "AI & Technology",
    image: "/lovable-uploads/41bed1ea-35ec-4ef7-aab7-4f0d0759bcba.png"
  },
  {
    id: 2,
    title: "DevOps Best Practices for 2024",
    excerpt: "Learn the essential DevOps strategies that are shaping modern software development and deployment in enterprise environments.",
    date: "March 10, 2024",
    author: "Bitroix Team",
    category: "DevOps",
    image: "/lovable-uploads/976ae802-eca8-4e3b-980e-5670c46536ef.png"
  },
  {
    id: 3,
    title: "UI/UX Trends Transforming Digital Experiences",
    excerpt: "Explore the latest design trends that are creating more intuitive, accessible, and engaging user experiences across digital platforms.",
    date: "March 5, 2024",
    author: "Bitroix Team",
    category: "Design",
    image: "/lovable-uploads/9e75146a-f90f-4b39-99f4-35651bc5cdd0.png"
  },
  {
    id: 4,
    title: "Data Analytics: From Insights to Action",
    excerpt: "Transform your raw data into actionable business intelligence with modern analytics tools and strategic implementation.",
    date: "February 28, 2024",
    author: "Bitroix Team",
    category: "Data Science",
    image: "/lovable-uploads/ad733c59-7366-45bc-bc79-5662c8d51a89.png"
  }
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    if (currentPage < blogPosts.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  const currentPost = blogPosts[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Our Blog</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-purple-600">
            Insights & Innovation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the latest trends, insights, and stories from the world of technology
          </p>
        </div>
      </section>

      {/* 3D Book Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative max-w-5xl mx-auto perspective-1000">
            {/* Book Container */}
            <div className="relative mx-auto" style={{ perspective: '2000px' }}>
              {/* Book */}
              <div 
                className={`relative w-full transition-all duration-800 ease-in-out ${
                  isFlipping ? 'animate-flip-page' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Left Page (Book Spine) */}
                <div 
                  className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-gray-800 to-gray-700 rounded-l-xl shadow-2xl"
                  style={{
                    transform: 'rotateY(-5deg)',
                    transformOrigin: 'right',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent rounded-l-xl" />
                </div>

                {/* Right Page (Content) */}
                <div 
                  className="relative bg-white rounded-r-xl shadow-2xl overflow-hidden ml-auto w-[55%]"
                  style={{
                    transform: 'rotateY(5deg)',
                    transformOrigin: 'left',
                    transformStyle: 'preserve-3d',
                    minHeight: '600px',
                  }}
                >
                  {/* Page Content */}
                  <div className="relative h-full p-8 md:p-12">
                    {/* Page Number */}
                    <div className="absolute top-4 right-4 text-sm text-gray-400 font-serif">
                      Page {currentPage + 1} of {blogPosts.length}
                    </div>

                    {/* Blog Post Content */}
                    <div className="h-full flex flex-col">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          {currentPost.category}
                        </span>
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-serif leading-tight">
                        {currentPost.title}
                      </h2>

                      <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                        <span>{currentPost.author}</span>
                        <span>•</span>
                        <span>{currentPost.date}</span>
                      </div>

                      <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={currentPost.image} 
                          alt={currentPost.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>

                      <p className="text-gray-700 leading-relaxed font-serif text-lg mb-8 flex-grow">
                        {currentPost.excerpt}
                      </p>

                      <Button className="w-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:shadow-lg transition-all">
                        Read Full Article
                      </Button>
                    </div>
                  </div>

                  {/* Page Shadow */}
                  <div 
                    className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"
                    style={{ transform: 'translateZ(-1px)' }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-8 mt-12">
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 0 || isFlipping}
                variant="outline"
                size="lg"
                className="group hover:scale-110 transition-all"
              >
                <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Previous
              </Button>

              <div className="flex gap-2">
                {blogPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isFlipping && index !== currentPage) {
                        setIsFlipping(true);
                        setTimeout(() => {
                          setCurrentPage(index);
                          setIsFlipping(false);
                        }, 800);
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentPage 
                        ? 'bg-primary w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNextPage}
                disabled={currentPage === blogPosts.length - 1 || isFlipping}
                variant="outline"
                size="lg"
                className="group hover:scale-110 transition-all"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes flip-page {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-15deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        .animate-flip-page {
          animation: flip-page 0.8s ease-in-out;
        }

        .duration-800 {
          transition-duration: 800ms;
        }
      `}</style>
    </div>
  );
};

export default Blog;
