import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { eventsData } from '../../data/events';
import { LockedOverlay } from '../LockedOverlay';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatTime(time: string) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

export function UpcomingEventsSection() {
  // Get upcoming events sorted by date, show the soonest one first
  const upcomingEvents = eventsData
    .filter(e => !e.isPast)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 1);

  return (
    <section className="py-20 bg-heh-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Exclusive workshops, masterclasses, and networking events curated for our members.
          </p>
        </div>

        <LockedOverlay message="Our events experience is coming soon. Stay tuned!">
        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingEvents.length === 0 ? (
            <p className="text-center text-charcoal/60">No upcoming events at the moment. Check back soon!</p>
          ) : (
            upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-platinum/50">
                <div className="md:flex">
                  {/* Date Badge */}
                  <div className="md:w-32 bg-primary-blue text-white flex flex-col items-center justify-center p-6">
                    <span className="text-3xl font-bold font-playfair">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="text-sm text-white/80 uppercase">
                      {new Date(event.date).toLocaleDateString('en-IN', { month: 'short' })}
                    </span>
                    <span className="text-xs text-white/60 mt-1">
                      {new Date(event.date).getFullYear()}
                    </span>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <span className="inline-block px-3 py-1 bg-royal-gold/10 text-royal-gold text-xs font-medium rounded-full mb-3">
                          {event.category}
                        </span>
                        <h3 className="text-xl font-semibold text-primary-blue mb-2">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    {/* Speaker */}
                    {event.speaker && (
                      <div className="bg-royal-gold/10 border-l-4 border-royal-gold px-4 py-2 mb-4">
                        <p className="text-sm text-charcoal font-semibold">{event.speaker}</p>
                        <p className="text-xs text-charcoal/60">{event.speakerTitle}</p>
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-charcoal/70">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-royal-gold" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-royal-gold" />
                        {formatTime(event.time)} - {formatTime(event.endTime)}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-royal-gold" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* View All Events CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => (window as any).navigateTo?.('events')}
            className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-3 group"
          >
            View All Events
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        </LockedOverlay>
      </div>
    </section>
  );
}
