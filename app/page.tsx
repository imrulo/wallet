import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { MarketProof } from '@/components/MarketProof';
import { DataValidation } from '@/components/DataValidation';
import { DomainStory } from '@/components/DomainStory';
import { UseCases } from '@/components/UseCases';
import { TrustProcess } from '@/components/TrustProcess';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { SocialShare } from '@/components/SocialShare';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <Hero />
      <ValueProposition />
      <MarketProof />
      <DataValidation />
      <DomainStory />
      <UseCases />
      <TrustProcess />
      <FAQ />
      <ContactForm />
      <SocialShare />
      <Footer />
    </main>
  );
}

