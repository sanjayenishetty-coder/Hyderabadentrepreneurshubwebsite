import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/members', label: 'HEH Members' },
    { href: '/events', label: 'Events' },
    { href: '/stories', label: 'HEH Stories' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-platinum shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-start space-x-3 group">
              {/* Custom Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Outer hexagon border */}
                  <path
                    d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
                    stroke="#C9A961"
                    strokeWidth="2"
                    fill="none"
                    className="group-hover:fill-royal-gold/10 transition-all duration-300"
                  />
                  {/* Inner connecting nodes representing network */}
                  <circle cx="24" cy="24" r="3" fill="#0A2640" />
                  <circle cx="16" cy="16" r="2" fill="#C9A961" />
                  <circle cx="32" cy="16" r="2" fill="#C9A961" />
                  <circle cx="16" cy="32" r="2" fill="#C9A961" />
                  <circle cx="32" cy="32" r="2" fill="#C9A961" />
                  {/* Connection lines */}
                  <line x1="24" y1="24" x2="16" y2="16" stroke="#C9A961" strokeWidth="1.5" opacity="0.6" />
                  <line x1="24" y1="24" x2="32" y2="16" stroke="#C9A961" strokeWidth="1.5" opacity="0.6" />
                  <line x1="24" y1="24" x2="16" y2="32" stroke="#C9A961" strokeWidth="1.5" opacity="0.6" />
                  <line x1="24" y1="24" x2="32" y2="32" stroke="#C9A961" strokeWidth="1.5" opacity="0.6" />
                  {/* Letter H integrated */}
                  <path
                    d="M20 18V30M28 18V30M20 24H28"
                    stroke="#C9A961"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </svg>
              </div>
              
              {/* Brand Name */}
              <div className="flex flex-col items-start">
                <div className="flex items-baseline space-x-1">
                  <span className="font-playfair font-bold text-lg md:text-xl text-primary-blue">
                    Hyderabad
                  </span>
                  <span className="font-playfair font-bold text-lg md:text-xl text-royal-gold">
                    Entrepreneur
                  </span>
                  <span className="font-playfair font-bold text-lg md:text-xl text-primary-blue">
                    Hub
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-charcoal/60 -mt-0.5 tracking-wider uppercase">
                  Connect.Collaborate.Grow
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-charcoal hover:text-royal-gold transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white"
            >
              Member Login
            </Button>
            <Button 
              className="bg-royal-gold hover:bg-royal-gold/90 text-white"
              onClick={() => (window as any).navigateTo?.('apply')}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-platinum">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-charcoal hover:text-royal-gold transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-platinum">
                <Button
                  variant="outline"
                  className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white"
                >
                  Member Login
                </Button>
                <Button className="bg-royal-gold hover:bg-royal-gold/90 text-white">
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}