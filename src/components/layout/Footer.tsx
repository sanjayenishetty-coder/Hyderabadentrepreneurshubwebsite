import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import logo from 'figma:asset/528a92b2a77aeb4347472158c964c6daac014db5.png';

export function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home', onClick: () => (window as any).navigateTo?.('home') },
    { href: '/members', label: 'HEH Members', onClick: () => (window as any).navigateTo?.('members') },
    { href: '/events', label: 'Events', onClick: () => (window as any).navigateTo?.('events') },
    { href: '/stories', label: 'HEH Stories', onClick: () => (window as any).navigateTo?.('stories') },
  ];

  const resources = [
    { href: '/application', label: 'Apply for Membership', onClick: () => (window as any).navigateTo?.('apply') },
    { href: '/member-benefits', label: 'Membership Benefits', onClick: null },
    { href: '/faq', label: 'FAQ', onClick: null },
    { href: '/contact', label: 'Contact Us', onClick: null },
    { href: '/privacy', label: 'Privacy Policy', onClick: () => (window as any).navigateTo?.('privacy') },
  ];

  return (
    <footer className="bg-primary-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="Hyderabad Entrepreneur Hub" className="h-16 w-auto" />
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
                  className="block text-white/80 hover:text-royal-gold transition-colors cursor-pointer"
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
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
                  className="block text-white/80 hover:text-royal-gold transition-colors cursor-pointer"
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
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
                    Hyderabad Entrepreneurs Hub Pvt Ltd<br />
                    Plot no 115, Ashok Enclave,<br />
                    Netaji Nagar, Secunderabad,<br />
                    Telangana- 5000062
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-royal-gold" />
                <a href="tel:+91-40-12345678" className="text-white/80 hover:text-royal-gold transition-colors">
                  +91 6300799266
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-royal-gold" />
                <a href="mailto:heh@entrepreneurhub.in" className="text-white/80 hover:text-royal-gold transition-colors">
                  heh@entrepreneurhub.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              @2026 Hyderabad Entrepreneurs Hub Pvt Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}