import { Card } from '../ui/card';
import { Network, TrendingUp, DollarSign, Users, Brain, Globe } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function BenefitCard({ icon, title, description, features }: BenefitCardProps) {
  return (
    <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-platinum/50 group">
      <div className="flex items-center justify-center w-16 h-16 bg-royal-gold/10 rounded-full mb-6 group-hover:bg-royal-gold/20 transition-colors">
        <div className="text-royal-gold">
          {icon}
        </div>
      </div>
      
      <h3 className="font-playfair text-2xl font-bold text-primary-blue mb-4">
        {title}
      </h3>
      
      <p className="text-charcoal/80 mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm text-charcoal/70">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Elite Networking",
      description: "Connect with verified entrepreneurs, form strategic alliances, and unlock opportunities through our curated member community.",
      features: [
        "Exclusive networking events with 50+ attendees monthly",
        "One-on-one introductions to relevant business leaders",
        "Industry-specific roundtables and masterminds",
        "Private WhatsApp groups for instant collaboration"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Growth",
      description: "Access proven scaling strategies, expert mentorship, and collaborative opportunities that drive measurable results.",
      features: [
        "Monthly workshops by successful entrepreneurs",
        "Business growth consultations and strategy sessions",
        "Access to growth frameworks and methodologies",
        "Peer advisory groups for accountability and support"
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Capital Connect",
      description: "Direct introductions to investors, funding guidance, and financial strategies from successful entrepreneurs.",
      features: [
        "Investor introduction programs",
        "Funding strategy workshops and pitch deck reviews",
        "Access to private equity and venture capital networks",
        "Business valuation and exit strategy guidance"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Member Privileges",
      description: "Enjoy exclusive benefits, premium offers from partner brands, and access to vetted resources that support your business needs.",
      features: [
        "Privilege offers from partner brands",
        "Vetted vendor and service provider recommendations",
        "Bulk purchasing power for business services",
        "Knowledge sharing on best practices and tools"
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Knowledge Exchange",
      description: "Stay ahead with insights from industry experts, market trends, and innovative business models.",
      features: [
        "Expert speaker series and thought leadership sessions",
        "Industry trend reports and market intelligence",
        "Case study presentations from successful members",
        "Innovation showcases and technology demonstrations"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Go-To-Market",
      description: "Accelerate your product launches and market entry with proven strategies, collaborative partnerships, and insights from experienced entrepreneurs.",
      features: [
        "GTM strategy workshops and product launch support",
        "Customer acquisition and sales channel development",
        "Market positioning and competitive analysis guidance",
        "Cross-promotional opportunities with member businesses"
      ]
    }
  ];

  return (
    <section className="py-20 bg-heh-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
            Why Join HEH Community
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Unlock unprecedented growth opportunities through our comprehensive ecosystem 
            designed exclusively for successful entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              features={benefit.features}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-blue to-charcoal rounded-2xl p-8 text-white">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Ready to Accelerate Your Business Growth?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Join Hyderabad's most exclusive entrepreneurial community and unlock your business potential.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const membershipSection = document.getElementById('membership-section');
                  if (membershipSection) {
                    membershipSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-royal-gold hover:bg-royal-gold/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Membership Plans
              </button>
              <button 
                onClick={() => (window as any).navigateTo?.('apply')}
                className="border border-white/30 text-white hover:bg-white hover:text-primary-blue px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}