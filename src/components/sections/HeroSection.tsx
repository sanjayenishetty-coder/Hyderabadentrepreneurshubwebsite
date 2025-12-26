import { Button } from '../ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-blue via-charcoal to-primary-blue text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-royal-gold/20 border border-royal-gold/30 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-royal-gold" />
            <span className="text-sm font-medium text-royal-gold">Connect. Collaborete. Grow</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hyderabad's Most Exclusive
            <br />
            <span className="text-royal-gold">Entrepreneurial Community</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where business excellence meets strategic networking. Join 100+ elite entrepreneurs
            building ₹500+ crores in collective business growth through premium connections and
            world-class mentorship.
          </p>

          {/* Value Propositions */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-royal-gold" />
              <span>Early Growth Business Only</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-royal-gold" />
              <span>Verified Business Leaders</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-royal-gold" />
              <span>Strategic Growth Focus</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://forms.gle/nCFCD5x5aGdHeBPk6" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-royal-gold hover:bg-royal-gold/90 text-white px-8 py-3 text-lg font-semibold group"
              // onClick={() => (window as any).navigateTo?.('apply')}
              >
                Apply for Membership
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by industry leaders from</p>
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8 text-white/60 text-sm whitespace-nowrap"
                animate={{
                  x: [0, -1000]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }}
              >
                {/* First set */}
                <span>Technology</span>
                <span>•</span>
                <span>Manufacturing</span>
                <span>•</span>
                <span>Healthcare</span>
                <span>•</span>
                <span>Real Estate</span>
                <span>•</span>
                <span>Finance</span>
                <span>•</span>
                <span>Advisory</span>
                <span>•</span>
                <span>Travel</span>
                <span>•</span>
                <span>D2C</span>
                <span>•</span>
                {/* Duplicate set for seamless loop */}
                <span>Technology</span>
                <span>•</span>
                <span>Manufacturing</span>
                <span>•</span>
                <span>Healthcare</span>
                <span>•</span>
                <span>Real Estate</span>
                <span>•</span>
                <span>Finance</span>
                <span>•</span>
                <span>Advisory</span>
                <span>•</span>
                <span>Travel</span>
                <span>•</span>
                <span>D2C</span>
                <span>•</span>
                {/* Third set for extra smoothness */}
                <span>Technology</span>
                <span>•</span>
                <span>Manufacturing</span>
                <span>•</span>
                <span>Healthcare</span>
                <span>•</span>
                <span>Real Estate</span>
                <span>•</span>
                <span>Finance</span>
                <span>•</span>
                <span>Advisory</span>
                <span>•</span>
                <span>Travel</span>
                <span>•</span>
                <span>D2C</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-royal-gold/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-royal-gold/10 rounded-full blur-xl"></div>
    </section>
  );
}