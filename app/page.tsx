import { HeroSection } from '@/components/HeroSection';
import { QuoteSection } from '@/components/QuoteSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CtaBanner } from '@/components/CtaBanner';
import { ServicesSection } from '@/components/ServicesSection';
import { FounderSection } from '@/components/FounderSection';
import { ContactSection } from '@/components/ContactSection';
import { AcceptedInsurance } from '@/components/AcceptedInsurance';
import { OrganizationsMarquee } from '@/components/OrganizationsMarquee';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <TestimonialsSection />
      <OrganizationsMarquee />
      <CtaBanner />
      <ServicesSection />
      <AcceptedInsurance />
      <FounderSection />
    </>
  );
}