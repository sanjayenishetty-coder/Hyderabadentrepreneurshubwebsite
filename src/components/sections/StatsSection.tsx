import { Card } from '../ui/card';
import { TrendingUp, Users, Building, Handshake } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: "Elite Members" | "Collective Revenue" | "Industry Sectors" | "Strategic Partnerships";
  description: string;
}

function StatCard({ icon, number, label, description }: StatCardProps) {
  return (
    <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-platinum/50">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center">
          <div className="text-royal-gold">
            {icon}
          </div>
        </div>
      </div>
      <div className="font-playfair text-3xl lg:text-4xl font-bold text-primary-blue mb-2">
        {number}
      </div>
      <div className="font-semibold text-charcoal mb-2">
        {label}
      </div>
      <p className="text-sm text-charcoal/70">
        {description}
      </p>
    </Card>
  );
}

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "100+",
      label: "Elite Members",
      description: "Verified entrepreneurs with proven business success"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "₹500+ Cr",
      label: "Collective Revenue",
      description: "Combined annual turnover of our member businesses"
    },
    {
      icon: <Building className="w-6 h-6" />,
      number: "15+",
      label: "Industry Sectors",
      description: "Diverse business verticals represented in our network"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      number: "50+",
      label: "Strategic Partnerships",
      description: "Business collaborations facilitated through HEH"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-primary-blue mb-4">
            Building Success Together
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            Our community's collective impact speaks volumes about the power of strategic networking 
            and collaborative growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-platinum/50 to-royal-gold/10 rounded-lg p-6">
            <p className="font-semibold text-primary-blue mb-2">
              Average Member Business Growth
            </p>
            <div className="font-playfair text-2xl font-bold text-royal-gold">
              35% YoY Revenue Increase
            </div>
            <p className="text-sm text-charcoal/70 mt-2">
              Through strategic networking and collaborative opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}