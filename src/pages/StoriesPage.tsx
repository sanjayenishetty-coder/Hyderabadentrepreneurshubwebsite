import { useState } from 'react';
import { Clock, Calendar, ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  company: string;
  readTime: string;
  date: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "From 2 Employees to 500+: The Journey of Building Hyderabad's Leading EdTech Platform",
    excerpt: "Discover how Rajesh Kumar transformed a small tutoring service into a multi-million dollar EdTech empire, revolutionizing education access across India.",
    image: "https://images.unsplash.com/photo-1543132220-e7fef0b974e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjQwMjU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Rajesh Kumar",
    company: "LearnTech Solutions",
    readTime: "8 min read",
    date: "Dec 15, 2024"
  },
  {
    id: 2,
    title: "Disrupting Healthcare: How AI is Transforming Patient Care in Tier 2 Cities",
    excerpt: "Dr. Priya Sharma shares her journey of leveraging artificial intelligence to bring world-class healthcare diagnostics to underserved communities.",
    image: "https://images.unsplash.com/photo-1562071707-7249ab429b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjQwMjU5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Dr. Priya Sharma",
    company: "MediAI Diagnostics",
    readTime: "10 min read",
    date: "Dec 10, 2024"
  },
  {
    id: 3,
    title: "Scaling Sustainable Fashion: A $50M Revenue Story Built on Ethics",
    excerpt: "Learn how Ananya Reddy built a fashion empire that proves sustainability and profitability can go hand in hand, creating jobs for 5000+ artisans.",
    image: "https://images.unsplash.com/photo-1668112262164-56e782a6e07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZm91bmRlciUyMG9mZmljZXxlbnwxfHx8fDE3NjY0MDI1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Ananya Reddy",
    company: "EcoThreads",
    readTime: "7 min read",
    date: "Dec 5, 2024"
  },
  {
    id: 4,
    title: "The FinTech Revolution: Making Banking Accessible to 10 Million Indians",
    excerpt: "Vikram Patel's story of building a financial inclusion platform that's helping millions of unbanked Indians access credit and savings.",
    image: "https://images.unsplash.com/photo-1648747067002-e0872aae5eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZW50cmVwcmVuZXVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjQwMjU5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Vikram Patel",
    company: "FinAccess",
    readTime: "9 min read",
    date: "Nov 28, 2024"
  },
  {
    id: 5,
    title: "From Garage to Global: The Story of India's Fastest Growing SaaS Startup",
    excerpt: "Discover how Arjun Mehta's cloud-based solution went from serving 10 local businesses to powering 50,000 enterprises across 40 countries.",
    image: "https://images.unsplash.com/photo-1660854088062-c178a98550cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjBsZWFkZXJ8ZW58MXx8fHwxNzY2NDAyNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Arjun Mehta",
    company: "CloudScale Solutions",
    readTime: "11 min read",
    date: "Nov 22, 2024"
  },
  {
    id: 6,
    title: "Revolutionizing Agriculture: How Technology is Empowering Farmers",
    excerpt: "Sanjay Naidu's innovative AgriTech platform is helping farmers increase yields by 40% while reducing costs through data-driven insights.",
    image: "https://images.unsplash.com/photo-1514063364532-5abd25e38290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMHN0YXJ0dXB8ZW58MXx8fHwxNzY2Mjk5NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    author: "Sanjay Naidu",
    company: "FarmTech Innovations",
    readTime: "6 min read",
    date: "Nov 18, 2024"
  }
];

export function StoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-navy via-deep-navy to-charcoal text-white py-16 border-b border-platinum/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl mb-4">
              HEH <span className="text-royal-gold">Stories</span>
            </h1>
            <p className="text-xl text-platinum/90 mb-8">
              Inspiring journeys of exceptional entrepreneurs who are transforming industries and building the future
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-12">
              <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 text-charcoal/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-b-2 border-platinum/50 focus:border-royal-gold bg-transparent text-charcoal focus:outline-none transition-colors"
              />
            </div>

            {/* Stories List */}
            {filteredStories.length > 0 ? (
              <div className="space-y-12">
                {filteredStories.map((story) => (
                  <article
                    key={story.id}
                    className="group cursor-pointer pb-12 border-b border-platinum/30 last:border-b-0"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center text-royal-gold">
                            {story.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm text-charcoal">{story.author}</p>
                            <p className="text-xs text-charcoal/60">{story.company}</p>
                          </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl text-charcoal mb-3 group-hover:text-royal-gold transition-colors">
                          {story.title}
                        </h2>

                        <p className="text-charcoal/70 mb-4 leading-relaxed">
                          {story.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-charcoal/60">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{story.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{story.readTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="md:w-48 md:h-32 w-full h-48 flex-shrink-0">
                        <ImageWithFallback
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover rounded group-hover:opacity-90 transition-opacity"
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-charcoal/20 mx-auto mb-4" />
                <h3 className="text-2xl text-charcoal mb-2">No Stories Found</h3>
                <p className="text-charcoal/60">
                  Try adjusting your search to find more stories.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-navy to-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">
            Ready to Write Your <span className="text-royal-gold">Success Story</span>?
          </h2>
          <p className="text-xl text-platinum/90 mb-8 max-w-2xl mx-auto">
            Join Hyderabad's most exclusive network of entrepreneurs and start your journey to extraordinary success
          </p>
          <a href="https://forms.gle/nCFCD5x5aGdHeBPk6" target="_blank" rel="noopener noreferrer">
            <button
              // onClick={() => (window as any).navigateTo?.('apply')}
              className="px-8 py-4 bg-royal-gold hover:bg-royal-gold/90 text-white rounded-lg transition-all duration-200 inline-flex items-center gap-2"
            >
              Apply for Membership
              <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </section>

      {/* Overlay with Lock Symbol */}
      <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[2px] pointer-events-none z-40">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md mx-4">
          <div className="w-20 h-20 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-royal-gold"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 className="font-playfair text-3xl font-bold text-primary-blue mb-4">
            Launching Soon
          </h2>
          <p className="text-charcoal/70 text-lg mb-6">
            Our exclusive HEH Stories section is coming soon. Join HEH to get early access to inspiring entrepreneur success stories.
          </p>
          <div className="flex flex-col gap-3">
            <a href="https://forms.gle/nCFCD5x5aGdHeBPk6" target="_blank" rel="noopener noreferrer">
              <button
                // onClick={() => (window as any).navigateTo?.('apply')}
                className="bg-royal-gold hover:bg-royal-gold/90 text-white px-8 py-3 rounded-lg transition-colors pointer-events-auto"
              >
                Apply for Membership
              </button>
            </a>
            <button
              onClick={() => (window as any).navigateTo?.('home')}
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 rounded-lg transition-colors pointer-events-auto"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}