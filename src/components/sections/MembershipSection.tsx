import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check, Star, Crown } from 'lucide-react';

interface MembershipCardProps {
  tier: string;
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
  className?: string;
}

function MembershipCard({ tier, price, originalPrice, features, popular, premium, className }: MembershipCardProps) {
  return (
    <Card className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${popular ? 'ring-2 ring-royal-gold scale-105' : ''} ${className}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-royal-gold text-white px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          {premium ? (
            <Crown className="w-8 h-8 text-royal-gold" />
          ) : (
            <Star className="w-8 h-8 text-royal-gold" />
          )}
        </div>
        
        <h3 className="font-playfair text-2xl font-bold text-primary-blue mb-2">
          {tier} Membership
        </h3>
        
        <div className="mb-4">
          <span className="font-playfair text-4xl font-bold text-primary-blue">
            {price}
          </span>
        </div>
        
        <p className="text-charcoal/70 text-sm">
          Annual membership with exclusive benefits
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-royal-gold flex-shrink-0 mt-0.5" />
            <span className="text-charcoal/80 text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      <Button 
        className={`w-full py-3 ${popular 
          ? 'bg-royal-gold hover:bg-royal-gold/90 text-white' 
          : 'bg-primary-blue hover:bg-primary-blue/90 text-white'
        }`}
        onClick={() => (window as any).navigateTo?.('apply')}
      >
        {popular ? 'Get Started Today' : 'Choose Plan'}
      </Button>
    </Card>
  );
}

export function MembershipSection() {
  const goldFeatures = [
    "Access to all core networking events (20 per year)",
    "Monthly expert masterclasses with industry leaders",
    "Quarterly strategic business consultations",
    "Priority investor introduction services",
    "Premium member directory with contact access",
    "Business referral system and lead generation",
    "Exclusive WhatsApp groups for instant networking",
    "Discounted rates on additional HEH services",
    "Annual business growth assessment report",
    "Access to member-only resources and templates"
  ];

  const platinumFeatures = [
    "All Gold membership benefits included",
    "Monthly 1-on-1 advisory sessions with experts",
    "VIP access to exclusive premium events",
    "International business missions and trade trips",
    "Personal brand development and PR support",
    "Exclusive networking lounges and co-working access",
    "Priority speaker opportunities at HEH events",
    "Direct access to HEH leadership team",
    "Custom business introduction services",
    "Complimentary guest passes for events (2 per month)"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Select the membership tier that aligns with your business goals and networking needs. 
            Both plans offer exceptional value and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MembershipCard
            tier="Gold"
            price="₹20,000"
            originalPrice="₹30,000"
            features={goldFeatures}
            className="border-royal-gold/20"
          />
          
          <MembershipCard
            tier="Platinum"
            price="₹30,000"
            originalPrice="₹45,000"
            features={platinumFeatures}
            popular={true}
            premium={true}
            className="border-royal-gold bg-gradient-to-br from-white to-royal-gold/5"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-charcoal/70 mb-6">
            Have questions about which membership is right for you?
          </p>
          <Button variant="outline" className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}