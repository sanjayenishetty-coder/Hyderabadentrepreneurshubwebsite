import { Card } from '../ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
}

function TestimonialCard({ quote, name, role, company, industry }: TestimonialProps) {
  return (
    <Card className="p-8 hover:shadow-xl transition-all duration-300 border border-platinum/50 relative">
      <div className="absolute top-6 right-6">
        <Quote className="w-8 h-8 text-royal-gold/20" />
      </div>
      <p className="text-charcoal/80 leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      <div className="border-t border-platinum/50 pt-4">
        <p className="font-semibold text-primary-blue">{name}</p>
        <p className="text-sm text-charcoal/70">{role}, {company}</p>
        <span className="inline-block mt-2 px-3 py-1 bg-royal-gold/10 text-royal-gold text-xs rounded-full">
          {industry}
        </span>
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  const testimonials: TestimonialProps[] = [
    {
      quote: "HEH connected me with the right people at the right time. Within 6 months of joining, I closed two major B2B deals worth over 1 crore — all through introductions made at HEH events.",
      name: "Aravind Reddy",
      role: "Founder & CEO",
      company: "NexGen Logistics",
      industry: "Logistics"
    },
    {
      quote: "The peer advisory sessions at HEH are invaluable. Getting candid feedback from fellow entrepreneurs who understand the challenges of scaling helped me avoid costly mistakes and accelerate our growth.",
      name: "Priya Sharma",
      role: "Managing Director",
      company: "GreenLeaf Organics",
      industry: "Food & Beverage"
    },
    {
      quote: "What sets HEH apart is the quality of members. Every conversation is meaningful, every event is well-curated, and the community genuinely wants to see each other succeed. It's not just networking — it's a growth ecosystem.",
      name: "Vikram Patel",
      role: "Co-Founder",
      company: "CloudScale Solutions",
      industry: "Technology / SaaS"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
            What Our Members Say
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Hear from entrepreneurs who have experienced the power of HEH's community-driven growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
