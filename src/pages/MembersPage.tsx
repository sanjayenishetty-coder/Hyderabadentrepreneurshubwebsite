import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Input } from '../components/ui/input';
import { Search, Mail, MessageCircle, Building2, Tag, MapPin, Globe, Users } from 'lucide-react';

// Member interface
interface Member {
  id: number;
  name: string;
  photo: string;
  company: string;
  designation: string;
  industry: string;
  location: string;
  businessSummary: string;
  specialOffer: string;
  whatsapp: string;
  email: string;
  website?: string;
  yearsInBusiness?: number;
  memberSince: string;
}

// Mock member data
const membersData: Member[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    company: "TechVista Solutions",
    designation: "Founder & CEO",
    industry: "IT Services & Consulting",
    location: "Banjara Hills, Hyderabad",
    businessSummary: "Leading IT solutions provider specializing in cloud infrastructure, cybersecurity, and digital transformation services for enterprises across India.",
    specialOffer: "15% discount on IT consulting services + Free security audit for HEH members",
    whatsapp: "+919876543210",
    email: "rajesh@techvista.in",
    website: "www.techvista.in",
    yearsInBusiness: 8,
    memberSince: "Jan 2023"
  },
  {
    id: 2,
    name: "Priya Menon",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    company: "GreenLeaf Organics",
    designation: "Managing Director",
    industry: "Organic Food & Agriculture",
    location: "Gachibowli, Hyderabad",
    businessSummary: "Premium organic food brand offering farm-fresh produce, superfoods, and health products delivered across Telangana and Andhra Pradesh.",
    specialOffer: "20% off on first order + Free home delivery for HEH members",
    whatsapp: "+919876543211",
    email: "priya@greenleaforganics.com",
    website: "www.greenleaforganics.com",
    yearsInBusiness: 5,
    memberSince: "Mar 2023"
  },
  {
    id: 3,
    name: "Arjun Reddy",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    company: "BuildRight Infrastructure",
    designation: "Chairman",
    industry: "Real Estate & Construction",
    location: "Jubilee Hills, Hyderabad",
    businessSummary: "Premium real estate development company with a portfolio of residential and commercial projects worth ₹500+ crores across Hyderabad.",
    specialOffer: "Priority allocation + Special pricing on upcoming luxury projects for HEH members",
    whatsapp: "+919876543212",
    email: "arjun@buildright.co.in",
    website: "www.buildright.co.in",
    yearsInBusiness: 12,
    memberSince: "Feb 2023"
  },
  {
    id: 4,
    name: "Sneha Patel",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    company: "WellnessHub Clinics",
    designation: "Founder & Chief Medical Officer",
    industry: "Healthcare & Wellness",
    location: "Kondapur, Hyderabad",
    businessSummary: "Chain of premium wellness clinics offering preventive healthcare, diagnostics, and holistic wellness programs with state-of-the-art facilities.",
    specialOffer: "25% discount on annual health packages + Free wellness consultation for HEH members",
    whatsapp: "+919876543213",
    email: "sneha@wellnesshub.in",
    website: "www.wellnesshub.in",
    yearsInBusiness: 6,
    memberSince: "Apr 2023"
  },
  {
    id: 5,
    name: "Vikram Singh",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    company: "LuxeStay Hospitality",
    designation: "Owner & Director",
    industry: "Hospitality & Tourism",
    location: "Hitec City, Hyderabad",
    businessSummary: "Boutique hotel chain with 5 properties offering luxury accommodations, fine dining, and event spaces for corporate and leisure travelers.",
    specialOffer: "30% off on room bookings + Complimentary breakfast for HEH members",
    whatsapp: "+919876543214",
    email: "vikram@luxestay.com",
    website: "www.luxestay.com",
    yearsInBusiness: 10,
    memberSince: "May 2023"
  },
  {
    id: 6,
    name: "Kavya Krishnan",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    company: "EduTech Innovators",
    designation: "Co-Founder & CEO",
    industry: "EdTech & E-Learning",
    location: "Madhapur, Hyderabad",
    businessSummary: "AI-powered learning platform providing personalized education solutions for K-12 students with 100,000+ active users across India.",
    specialOffer: "Free 3-month premium subscription + 40% off on annual plans for HEH members' children",
    whatsapp: "+919876543215",
    email: "kavya@edutech.in",
    website: "www.edutech.in",
    yearsInBusiness: 4,
    memberSince: "Jun 2023"
  }
];

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Get unique industries
  const industries = ['all', ...Array.from(new Set(membersData.map(m => m.industry)))];

  // Filter members
  const filteredMembers = membersData.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || member.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const handleWhatsAppClick = (whatsapp: string, name: string, company: string) => {
    const message = encodeURIComponent(`Hello ${name}, I'm reaching out as a fellow HEH member and would like to connect regarding ${company}.`);
    window.open(`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-heh-background">
      <Header />
      
      <main className="relative">
        {/* Blurred Content */}
        <div className="blur-sm pointer-events-none">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-blue via-primary-blue to-primary-blue/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-playfair text-royal-gold mb-4">
                HEH Member Directory
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Connect with Hyderabad's elite entrepreneurs. Discover exclusive offers and build meaningful business relationships.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">{membersData.length}+</div>
                  <div className="text-sm text-white/80">Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">{industries.length - 1}</div>
                  <div className="text-sm text-white/80">Industries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">₹500Cr+</div>
                  <div className="text-sm text-white/80">Combined Revenue</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-royal-gold mb-1">100%</div>
                  <div className="text-sm text-white/80">Elite Network</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 bg-white border-b border-platinum">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                  <Input
                    type="text"
                    placeholder="Search by name, company, or industry..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                {/* Industry Filter */}
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-2 border border-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-gold"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredMembers.length === 0 ? (
                <div className="text-center py-16">
                  <Users className="w-16 h-16 text-charcoal/20 mx-auto mb-4" />
                  <p className="text-charcoal/60">No members found matching your criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredMembers.map((member) => (
                    <div
                      key={member.id}
                      className="bg-white rounded-xl border border-platinum shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                    >
                      {/* Member Header */}
                      <div className="bg-gradient-to-r from-primary-blue to-primary-blue/90 p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-20 h-20 rounded-full border-4 border-white object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-white mb-1">{member.name}</h3>
                            <p className="text-royal-gold text-sm mb-2">{member.designation}</p>
                            <div className="flex items-center text-white/80 text-sm">
                              <Building2 className="w-4 h-4 mr-1" />
                              {member.company}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Member Details */}
                      <div className="p-6 space-y-4">
                        {/* Industry & Location */}
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center text-charcoal/70">
                            <Tag className="w-4 h-4 mr-1 text-royal-gold" />
                            {member.industry}
                          </span>
                          <span className="flex items-center text-charcoal/70">
                            <MapPin className="w-4 h-4 mr-1 text-royal-gold" />
                            {member.location}
                          </span>
                        </div>

                        {/* Business Summary */}
                        <div>
                          <h4 className="text-charcoal font-semibold mb-2">About</h4>
                          <p className="text-charcoal/70 text-sm leading-relaxed">
                            {member.businessSummary}
                          </p>
                        </div>

                        {/* Special Offer - Highlighted */}
                        <div className="bg-royal-gold/10 border border-royal-gold/30 rounded-lg p-4">
                          <h4 className="text-primary-blue font-semibold mb-2 flex items-center">
                            <Tag className="w-4 h-4 mr-2 text-royal-gold" />
                            Exclusive HEH Member Offer
                          </h4>
                          <p className="text-charcoal text-sm leading-relaxed">
                            {member.specialOffer}
                          </p>
                        </div>

                        {/* Additional Info */}
                        <div className="flex gap-4 text-sm text-charcoal/60">
                          {member.yearsInBusiness && (
                            <span>🏆 {member.yearsInBusiness} years in business</span>
                          )}
                          <span>📅 Member since {member.memberSince}</span>
                        </div>

                        {/* Contact Section */}
                        <div className="pt-4 border-t border-platinum space-y-3">
                          <h4 className="text-charcoal font-semibold text-sm">Connect with {member.name.split(' ')[0]}</h4>
                          
                          <div className="flex flex-wrap gap-3">
                            {/* WhatsApp */}
                            <button
                              onClick={() => handleWhatsAppClick(member.whatsapp, member.name, member.company)}
                              className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span className="text-sm">WhatsApp</span>
                            </button>

                            {/* Email */}
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center space-x-2 px-4 py-2 bg-primary-blue hover:bg-primary-blue/90 text-white rounded-lg transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              <span className="text-sm">Email</span>
                            </a>

                            {/* Website */}
                            {member.website && (
                              <a
                                href={`https://${member.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-white rounded-lg transition-colors"
                              >
                                <Globe className="w-4 h-4" />
                                <span className="text-sm">Website</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-blue to-primary-blue/90 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-white mb-4">
              Want to Be Featured Here?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join Hyderabad's most exclusive entrepreneurial community and connect with elite business leaders.
            </p>
            <button
              onClick={() => (window as any).navigateTo?.('apply')}
              className="bg-royal-gold hover:bg-royal-gold/90 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Apply for Membership
            </button>
          </div>
        </section>
        </div>

        {/* Overlay with Lock Symbol */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-[2px] pointer-events-none">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md mx-4">
            <div className="w-20 h-20 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-royal-gold"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="font-playfair text-3xl font-bold text-primary-blue mb-4">
              Launching Soon
            </h2>
            <p className="text-charcoal/70 text-lg mb-6">
              Our exclusive member directory is coming soon. Join HEH to get early access to connect with elite entrepreneurs.
            </p>
            <button
              onClick={() => (window as any).navigateTo?.('apply')}
              className="bg-royal-gold hover:bg-royal-gold/90 text-white px-8 py-3 rounded-lg transition-colors pointer-events-auto"
            >
              Apply for Membership
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}