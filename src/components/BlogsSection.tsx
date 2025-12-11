import { ArrowUpRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch in 2025",
    excerpt: "Artificial intelligence continues to reshape industries. Discover the key AI trends that will define business strategies and operations in the coming year.",
    date: "2025-12-08",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    link: "https://techcrunch.com/category/artificial-intelligence/"
  },
  {
    id: 2,
    title: "Digital Marketing Strategies That Drive Results in 2025",
    excerpt: "From AI-powered personalization to video content dominance, learn the digital marketing strategies that are delivering exceptional ROI for businesses.",
    date: "2025-12-07",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    link: "https://www.hubspot.com/marketing-statistics"
  },
  {
    id: 3,
    title: "Cloud Computing in 2025: What Enterprises Need to Know",
    excerpt: "Multi-cloud strategies, edge computing, and serverless architecture are transforming how businesses leverage cloud infrastructure for competitive advantage.",
    date: "2025-12-06",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    link: "https://www.zdnet.com/topic/cloud/"
  },
  {
    id: 4,
    title: "Cybersecurity Threats and Prevention: A 2025 Guide",
    excerpt: "With cyber attacks becoming more sophisticated, organizations must adopt proactive security measures. Here's what you need to know to protect your business.",
    date: "2025-12-05",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    link: "https://thehackernews.com/"
  }
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "AI": "bg-purple-500",
    "Digital Marketing": "bg-orange-500",
    "Cloud": "bg-blue-500",
    "Cybersecurity": "bg-green-500"
  };
  return colors[category] || "bg-primary";
};

const BlogsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Blogs
          </h2>
          <p className="text-primary font-semibold tracking-wide uppercase">
            Insights, Tips & Industry Trends
          </p>
        </div>

        {/* All Blogs Button */}
        <div className="flex justify-end mb-8">
          <Button
            variant="outline"
            className="group border-foreground/20 hover:bg-foreground hover:text-background"
            onClick={() => window.open("https://blog.hubspot.com/marketing", "_blank")}
          >
            All Blogs
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  itemProp="image"
                />
                <span
                  className={`absolute top-3 left-3 ${getCategoryColor(post.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="font-bold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                  itemProp="headline"
                >
                  {post.title}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date} itemProp="datePublished">
                    {formatDate(post.date)}
                  </time>
                </div>

                <p
                  className="text-muted-foreground text-sm line-clamp-2 mb-4"
                  itemProp="description"
                >
                  {post.excerpt}
                </p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:underline group/link"
                  itemProp="url"
                >
                  Read More
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
