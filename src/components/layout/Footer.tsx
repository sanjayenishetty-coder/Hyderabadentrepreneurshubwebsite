import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/members', label: 'HEH Members' },
    { href: '/events', label: 'Events' },
    { href: '/stories', label: 'HEH Stories' },
  ];

  const resources = [
    { href: '/application', label: 'Apply for Membership' },
    { href: '/member-benefits', label: 'Membership Benefits' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-primary-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-royal-gold to-royal-gold/80 rounded-lg flex items-center justify-center">
                <span className="text-primary-blue font-playfair font-bold text-xl">H</span>
              </div>
              <div>
                <span className="font-playfair font-bold text-xl">HEH</span>
                <p className="text-xs text-white/60 -mt-1">Elite Network</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Hyderabad's most exclusive entrepreneurial community, dedicated to fostering 
              business excellence through strategic networking and collaborative growth.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/entrepreneur-hub-hyderabad-a56587356/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-royal-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/entrepreneurhubhyderabad/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-royal-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-royal-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/80 hover:text-royal-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <nav className="space-y-3">
              {resources.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/80 hover:text-royal-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-royal-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 text-sm">
                    T-Hub, IIIT-H Campus<br />
                    Gachibowli, Hyderabad<br />
                    Telangana 500032
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-royal-gold" />
                <a href="tel:+91-40-12345678" className="text-white/80 hover:text-royal-gold transition-colors">
                  +91-40-12345678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-royal-gold" />
                <a href="mailto:connect@heh.community" className="text-white/80 hover:text-royal-gold transition-colors">
                  connect@heh.community
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Hyderabad Entrepreneurs Hub. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/terms" className="text-white/60 hover:text-royal-gold transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="text-white/60 hover:text-royal-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/cookies" className="text-white/60 hover:text-royal-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}