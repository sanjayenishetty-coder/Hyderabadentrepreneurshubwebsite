import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { MembershipSection } from './components/sections/MembershipSection';
import { EligibilitySection } from './components/sections/EligibilitySection';
import { FAQSection } from './components/sections/FAQSection';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/LoginPage';
import MembersPage from './pages/MembersPage';
import EventsPage from './pages/EventsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'apply' | 'login' | 'members' | 'events' | 'privacy'>('home');

  // Simple routing handler
  const handleNavigation = (page: 'home' | 'apply' | 'login' | 'members' | 'events' | 'privacy') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Make navigation function available globally
  if (typeof window !== 'undefined') {
    (window as any).navigateTo = handleNavigation;
  }

  if (currentPage === 'apply') {
    return <ApplyPage />;
  }

  if (currentPage === 'login') {
    return <LoginPage />;
  }

  if (currentPage === 'members') {
    return <MembersPage />;
  }

  if (currentPage === 'events') {
    return <EventsPage />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicyPage />;
  }

  return (
    <div className="min-h-screen bg-heh-background">
      <Header />
      
      <main>
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <MembershipSection />
        <EligibilitySection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
}