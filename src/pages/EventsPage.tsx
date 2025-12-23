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
import eventImage from 'figma:asset/c4af7410d5d5aa227bf99d238b63839d3bfd9f38.png';
import businessModelCanvasImage from 'figma:asset/70827c9d5be172774cb5c1feccc33b5e54309585.png';

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
    id: 8,
    title: "Business Model Canvas Workshop",
    description: "Join this session to explore how the Business Model Canvas works and learn how each element helps shape a stronger business idea. This hands-on workshop will guide you through the essential building blocks of creating and refining your business model with practical examples and interactive exercises.",
    date: "2026-01-03",
    time: "15:30",
    endTime: "17:30",
    location: "JIC - Jubilee Hills International Club",
    locationType: "in-person",
    image: businessModelCanvasImage,
    category: "Workshop",
    speaker: "Praveen Dorna",
    speakerTitle: "Founder - Founders First Network, Head Founder Programs, T-Hub",
    attendees: 28,
    maxAttendees: 40,
    price: "Limited Seats Available",
    isPast: false,
    tags: ["Business Model", "Workshop", "Strategy"]
  },
  {
    id: 7,
    title: "Members Breakfast Meet",
    description: "Join us for a Productive Morning for Meaningful Networking, Business Ideations and Discuss Growth Opportunities with fellow Business Leaders and our Advisor. Key agenda includes: Members Introduction, Business Insights, Business Case Studies, HEH Roadmap, Open Discussion, and Networking.",
    date: "2025-12-06",
    time: "09:00",
    endTime: "11:00",
    location: "Jubilee Hills International Club",
    locationType: "in-person",
    image: eventImage,
    category: "Networking",
    speaker: "Sanjay Enishetty",
    speakerTitle: "Chief Mentor & Advisor - HEH",
    attendees: 45,
    maxAttendees: 50,
    price: "₹500 for Members | ₹600 for Visitors",
    isPast: true,
    tags: ["Networking", "Breakfast Meet", "Business Insights"]
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