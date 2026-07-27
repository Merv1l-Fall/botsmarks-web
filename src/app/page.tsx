import Hero from "@/components/sections/home/hero";
import InfoCards from "@/components/sections/home/InfoCards";
import ProductShowcase from "@/components/sections/home/ProductShowcase";
import { getHomePage } from "@/lib/sanity/queries";

export default async function Home() {
  const homePage = await getHomePage();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_24%,rgba(180,205,184,0.08),transparent_40%)]" />

      <Hero hero={homePage?.hero} />
	  <InfoCards heading={homePage?.infoCardsSectionHeading} cards={homePage?.infoCards} />
	  <ProductShowcase productShowcase={homePage?.productShowcase} />
    </main>
  );
}