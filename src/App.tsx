import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { MembershipSection } from './components/sections/MembershipSection';
import { EligibilitySection } from './components/sections/EligibilitySection';

export default function App() {
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