import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mechanism from "@/components/Mechanism";
import MessageBand from "@/components/MessageBand";
import Offer from "@/components/Offer";
import PriceBlock from "@/components/PriceBlock";
import Problem from "@/components/Problem";
import Safety from "@/components/Safety";
import SocialProof from "@/components/SocialProof";
import Steps from "@/components/Steps";
import StickyCta from "@/components/StickyCta";
import type { Kommune } from "@/lib/kommuner";

/**
 * The conversion journey, in order:
 * deadline the visitor already owns -> what they get -> who we are ->
 * why it is safe -> what it costs -> how little effort it takes -> capacity ->
 * every objection -> the form.
 */
export default function LandingPage({ kommune }: { kommune: Kommune }) {
  return (
    <>
      <a
        href="#innhold"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-sand focus:px-5 focus:py-3 focus:font-semibold focus:text-petrol"
      >
        Hopp til innholdet
      </a>

      <Header />

      <main id="innhold">
        <Hero kommune={kommune} />
        <MessageBand />
        <Problem />
        <Offer />
        <SocialProof />
        <Mechanism />
        <PriceBlock />
        <Steps />
        <Safety />
        <Faq />
        <FormSection kommune={kommune} />
      </main>

      <Footer />
      <StickyCta />
    </>
  );
}
