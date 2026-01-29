import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <div id="features">
        <OffersSection />
      </div>
      <FinancilaFreedom />
      {/* <div id="multi-agent">
        <FinancialFuture />
      </div>
      <div id="documentation">
        <IntroSection />
      </div>
      <div id="download">
        <JoinSection />
      </div>
      */}
      <div id="faq">
        <FAQ />
      </div> 
    </main>
  );
}
