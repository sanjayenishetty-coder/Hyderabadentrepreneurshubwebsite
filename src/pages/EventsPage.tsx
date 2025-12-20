import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Share2, 
  Check,
  Search,
  Filter,
  X,
  Linkedin,
  Mail,
  Link as LinkIcon,
  MessageCircle
} from 'lucide-react';

// Event interface
interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  locationType: 'in-person' | 'virtual' | 'hybrid';
  image: string;
  category: string;
  speaker?: string;
  speakerTitle?: string;
  attendees: number;
  maxAttendees: number;
  price: string;
  isPast: boolean;
  tags: string[];
}

// Mock events data
const eventsData: Event[] = [
  {
    id: 1,
    title: "Scaling Your Business: From 2Cr to 20Cr",
    description: "Join industry leaders as they share proven strategies for 10x business growth. Learn about market expansion, team building, funding options, and operational excellence from entrepreneurs who've successfully scaled their ventures.",
    date: "2024-12-28",
    time: "18:00",
    endTime: "20:30",
    location: "The Park Hotel, Somajiguda",
    locationType: "in-person",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    category: "Masterclass",
    speaker: "Rajesh Kumar",
    speakerTitle: "Serial Entrepreneur, 50Cr+ Revenue",
    attendees: 45,
    maxAttendees: 60,
    price: "Free for Members",
    isPast: false,
    tags: ["Growth", "Strategy", "Networking"]
  },
  {
    id: 2,
    title: "HEH Quarterly Networking Mixer",
    description: "Our signature networking event bringing together Hyderabad's elite entrepreneurs for an evening of meaningful connections, collaboration opportunities, and premium dining. Exclusive to HEH members only.",
    date: "2025-01-10",
    time: "19:00",
    endTime: "22:00",
    location: "Taj Falaknuma Palace",
    locationType: "in-person",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop",
    category: "Networking",
    attendees: 78,
    maxAttendees: 100,
    price: "Members Only",
    isPast: false,
    tags: ["Networking", "Premium", "Members Only"]
  },
  {
    id: 3,
    title: "Digital Marketing ROI Masterclass",
    description: "Deep dive into performance marketing, social media advertising, and analytics. Learn how to maximize your marketing budget and achieve measurable results with data-driven strategies.",
    date: "2025-01-15",
    time: "15:00",
    endTime: "17:00",
    location: "Online (Zoom)",
    locationType: "virtual",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    category: "Workshop",
    speaker: "Priya Sharma",
    speakerTitle: "Digital Marketing Expert, TEDx Speaker",
    attendees: 120,
    maxAttendees: 200,
    price: "₹500 for Members",
    isPast: false,
    tags: ["Marketing", "Digital", "Workshop"]
  },
  {
    id: 4,
    title: "Legal & Compliance for Growing Businesses",
    description: "Understanding corporate law, tax optimization, IPR protection, and regulatory compliance. Expert panel discussion with leading corporate lawyers and chartered accountants.",
    date: "2025-01-22",
    time: "17:30",
    endTime: "19:30",
    location: "Hyatt Regency, Gachibowli",
    locationType: "hybrid",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop",
    category: "Panel Discussion",
    attendees: 55,
    maxAttendees: 80,
    price: "Free for Members",
    isPast: false,
    tags: ["Legal", "Compliance", "Finance"]
  },
  {
    id: 5,
    title: "Pitch Perfect: Fundraising Strategies",
    description: "Learn how to create compelling pitch decks, approach investors, and negotiate term sheets. Featuring successful founders who've raised significant funding.",
    date: "2025-02-05",
    time: "18:00",
    endTime: "20:00",
    location: "T-Hub, IIIT Campus",
    locationType: "in-person",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    category: "Masterclass",
    speaker: "Vikram Singh",
    speakerTitle: "VC Partner, 100+ Investments",
    attendees: 35,
    maxAttendees: 50,
    price: "₹1000 for Members",
    isPast: false,
    tags: ["Funding", "Investors", "Growth"]
  },
  {
    id: 6,
    title: "September Networking Gala",
    description: "A memorable evening of networking, dining, and celebration with Hyderabad's top entrepreneurs. Featured keynote on emerging market trends.",
    date: "2024-09-20",
    time: "19:00",
    endTime: "22:00",
    location: "ITC Kohenur, Madhapur",
    locationType: "in-person",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=400&fit=crop",
    category: "Networking",
    attendees: 95,
    maxAttendees: 100,
    price: "Members Only",
    isPast: true,
    tags: ["Networking", "Gala", "Past Event"]
  }
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [rsvpedEvents, setRsvpedEvents] = useState<number[]>([]);
  const [shareModalOpen, setShareModalOpen] = useState<number | null>(null);
  const [rsvpModalOpen, setRsvpModalOpen] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(eventsData.map(e => e.category)))];

  // Filter events
  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesPastFilter = showPastEvents || !event.isPast;
    return matchesSearch && matchesCategory && matchesPastFilter;
  });

  const handleRSVP = (eventId: number) => {
    if (rsvpedEvents.includes(eventId)) {
      setRsvpedEvents(rsvpedEvents.filter(id => id !== eventId));
    } else {
      setRsvpedEvents([...rsvpedEvents, eventId]);
    }
    setRsvpModalOpen(null);
  };

  const handleShare = (platform: string, event: Event) => {
    const eventUrl = `https://heh.community/events/${event.id}`;
    const text = `Check out "${event.title}" at HEH - ${new Date(event.date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric' })}`;
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + eventUrl)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(event.title)}&body=${encodeURIComponent(text + '\n\n' + eventUrl)}`;
        break;
      case 'copy':
        // Fallback method for copying without Clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = eventUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
        textArea.remove();
        break;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-heh-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-blue via-primary-blue to-primary-blue/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-royal-gold mb-4">
                HEH Events
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Exclusive networking events, masterclasses, and workshops designed for elite entrepreneurs
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">{eventsData.filter(e => !e.isPast).length}</div>
                  <div className="text-sm text-white/80">Upcoming Events</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">500+</div>
                  <div className="text-sm text-white/80">Total Attendees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">{categories.length - 1}</div>
                  <div className="text-sm text-white/80">Event Types</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">Premium</div>
                  <div className="text-sm text-white/80">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 bg-white border-b border-platinum sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search */}
                <div className="flex-1 relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                  <Input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Filter className="w-5 h-5 text-charcoal/60" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border border-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-gold flex-1 md:flex-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Past Events Toggle */}
                <label className="flex items-center gap-2 cursor-pointer whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={showPastEvents}
                    onChange={(e) => setShowPastEvents(e.target.checked)}
                    className="w-4 h-4 text-royal-gold focus:ring-royal-gold rounded"
                  />
                  <span className="text-sm text-charcoal/70">Show Past Events</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {filteredEvents.length === 0 ? (
                <div className="text-center py-16">
                  <Calendar className="w-16 h-16 text-charcoal/20 mx-auto mb-4" />
                  <p className="text-charcoal/60">No events found matching your criteria.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-xl border border-platinum shadow-md hover:shadow-xl transition-all overflow-hidden"
                    >
                      <div className="md:flex">
                        {/* Event Image */}
                        <div className="md:w-80 h-64 md:h-auto relative flex-shrink-0">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          {event.isPast && (
                            <div className="absolute top-4 left-4 bg-charcoal/90 text-white px-3 py-1 rounded-full text-sm">
                              Past Event
                            </div>
                          )}
                          {!event.isPast && event.attendees >= event.maxAttendees && (
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                              Sold Out
                            </div>
                          )}
                          <div className="absolute top-4 right-4 bg-royal-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                            {event.category}
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1 p-6">
                          <div className="flex flex-col h-full">
                            {/* Title & Description */}
                            <div className="flex-1">
                              <h3 className="text-charcoal mb-3 hover:text-royal-gold transition-colors cursor-pointer">
                                {event.title}
                              </h3>
                              <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                                {event.description}
                              </p>

                              {/* Speaker */}
                              {event.speaker && (
                                <div className="bg-royal-gold/10 border-l-4 border-royal-gold px-4 py-3 mb-4">
                                  <p className="text-sm text-charcoal font-semibold">{event.speaker}</p>
                                  <p className="text-xs text-charcoal/60">{event.speakerTitle}</p>
                                </div>
                              )}

                              {/* Event Meta */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                <div className="flex items-center text-sm text-charcoal/70">
                                  <Calendar className="w-4 h-4 mr-2 text-royal-gold" />
                                  {formatDate(event.date)}
                                </div>
                                <div className="flex items-center text-sm text-charcoal/70">
                                  <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                                  {formatTime(event.time)} - {formatTime(event.endTime)}
                                </div>
                                <div className="flex items-center text-sm text-charcoal/70">
                                  <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                                  {event.location}
                                </div>
                                <div className="flex items-center text-sm text-charcoal/70">
                                  <Users className="w-4 h-4 mr-2 text-royal-gold" />
                                  {event.attendees}/{event.maxAttendees} attending
                                </div>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {event.tags.map(tag => (
                                  <span
                                    key={tag}
                                    className="px-3 py-1 bg-platinum/30 text-charcoal/70 rounded-full text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-platinum">
                              <div className="flex items-center gap-3">
                                {/* RSVP Button */}
                                {!event.isPast && (
                                  <Button
                                    onClick={() => setRsvpModalOpen(event.id)}
                                    className={`${
                                      rsvpedEvents.includes(event.id)
                                        ? 'bg-green-500 hover:bg-green-600'
                                        : 'bg-royal-gold hover:bg-royal-gold/90'
                                    } text-white`}
                                    disabled={event.attendees >= event.maxAttendees}
                                  >
                                    {rsvpedEvents.includes(event.id) ? (
                                      <>
                                        <Check className="w-4 h-4 mr-2" />
                                        RSVP'd
                                      </>
                                    ) : event.attendees >= event.maxAttendees ? (
                                      'Sold Out'
                                    ) : (
                                      'RSVP'
                                    )}
                                  </Button>
                                )}
                                
                                {/* Price */}
                                <span className="text-sm font-semibold text-primary-blue">
                                  {event.price}
                                </span>
                              </div>

                              {/* Share Button */}
                              <Button
                                variant="outline"
                                onClick={() => setShareModalOpen(event.id)}
                                className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white"
                              >
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Share Modal */}
                      {shareModalOpen === event.id && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
                            <button
                              onClick={() => setShareModalOpen(null)}
                              className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal"
                            >
                              <X className="w-5 h-5" />
                            </button>
                            
                            <h3 className="text-charcoal mb-6">Share Event</h3>
                            
                            <div className="space-y-3">
                              <button
                                onClick={() => handleShare('linkedin', event)}
                                className="w-full flex items-center gap-3 p-4 border border-platinum rounded-lg hover:bg-platinum/20 transition-colors"
                              >
                                <Linkedin className="w-5 h-5 text-blue-600" />
                                <span>Share on LinkedIn</span>
                              </button>
                              
                              <button
                                onClick={() => handleShare('whatsapp', event)}
                                className="w-full flex items-center gap-3 p-4 border border-platinum rounded-lg hover:bg-platinum/20 transition-colors"
                              >
                                <MessageCircle className="w-5 h-5 text-green-500" />
                                <span>Share on WhatsApp</span>
                              </button>
                              
                              <button
                                onClick={() => handleShare('email', event)}
                                className="w-full flex items-center gap-3 p-4 border border-platinum rounded-lg hover:bg-platinum/20 transition-colors"
                              >
                                <Mail className="w-5 h-5 text-charcoal/70" />
                                <span>Share via Email</span>
                              </button>
                              
                              <button
                                onClick={() => handleShare('copy', event)}
                                className="w-full flex items-center gap-3 p-4 border border-platinum rounded-lg hover:bg-platinum/20 transition-colors"
                              >
                                <LinkIcon className="w-5 h-5 text-charcoal/70" />
                                <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* RSVP Modal */}
                      {rsvpModalOpen === event.id && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
                            <button
                              onClick={() => setRsvpModalOpen(null)}
                              className="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal"
                            >
                              <X className="w-5 h-5" />
                            </button>
                            
                            <h3 className="text-charcoal mb-4">Confirm RSVP</h3>
                            <p className="text-charcoal/70 mb-2">{event.title}</p>
                            <p className="text-sm text-charcoal/60 mb-6">
                              {formatDate(event.date)} at {formatTime(event.time)}
                            </p>
                            
                            <div className="bg-royal-gold/10 border border-royal-gold/30 rounded-lg p-4 mb-6">
                              <p className="text-sm text-charcoal">
                                <strong>Price:</strong> {event.price}
                              </p>
                              <p className="text-sm text-charcoal mt-2">
                                <strong>Location:</strong> {event.location}
                              </p>
                            </div>

                            <div className="flex gap-3">
                              <Button
                                variant="outline"
                                onClick={() => setRsvpModalOpen(null)}
                                className="flex-1"
                              >
                                Cancel
                              </Button>
                              <Button
                                onClick={() => handleRSVP(event.id)}
                                className="flex-1 bg-royal-gold hover:bg-royal-gold/90 text-white"
                              >
                                Confirm RSVP
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-blue to-primary-blue/90 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-white mb-4">
              Don't Miss Out on Exclusive Events
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join HEH to get access to premium networking events, masterclasses, and workshops.
            </p>
            <Button
              onClick={() => (window as any).navigateTo?.('apply')}
              className="bg-royal-gold hover:bg-royal-gold/90 text-white px-8 py-3"
            >
              Become a Member
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}