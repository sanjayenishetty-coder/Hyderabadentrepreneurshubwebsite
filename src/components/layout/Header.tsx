import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/members', label: 'HEH Members' },
    { href: '/events', label: 'Events' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-platinum shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-start group">
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
                
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === '/') {
                    (window as any).navigateTo?.('home');
                  } else if (item.href === '/members') {
                    (window as any).navigateTo?.('members');
                  } else if (item.href === '/events') {
                    (window as any).navigateTo?.('events');
                  }
                }}
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
              onClick={() => (window as any).navigateTo?.('login')}
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
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (item.href === '/') {
                      (window as any).navigateTo?.('home');
                    } else if (item.href === '/members') {
                      (window as any).navigateTo?.('members');
                    } else if (item.href === '/events') {
                      (window as any).navigateTo?.('events');
                    }
                  }}
                  className="text-charcoal hover:text-royal-gold transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-platinum">
                <Button
                  variant="outline"
                  className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white"
                  onClick={() => (window as any).navigateTo?.('login')}
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}