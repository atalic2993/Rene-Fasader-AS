import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CtaButton, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-petrol-deep text-white">
        <div className="shell flex min-h-[60vh] flex-col justify-center py-24">
          <Eyebrow className="text-sand">Siden finnes ikke</Eyebrow>
          <h1 className="mt-6 max-w-[32rem] text-title font-semibold">
            Denne siden fant vi ikke, men fasadevasken finner vi fram til.
          </h1>
          <CtaButton className="mt-9 w-full sm:w-fit" href="/" withArrow={false}>
            Til forsiden
          </CtaButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
