import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { MembershipSection } from './components/sections/MembershipSection';
import { EligibilitySection } from './components/sections/EligibilitySection';
import ApplyPage from './pages/ApplyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'apply'>('home');

  // Simple routing handler
  const handleNavigation = (page: 'home' | 'apply') => {
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

  return (
    <div className="min-h-screen bg-heh-background">
      <Header />
      
      <main>
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <MembershipSection />
        <EligibilitySection />
      </main>
      
      <Footer />
    </div>
  );
}