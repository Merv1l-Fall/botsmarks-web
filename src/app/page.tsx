import Hero from "@/components/sections/home/hero";
import InfoCards from "@/components/sections/home/InfoCards";
import ProductShowcase from "@/components/sections/home/ProductShowcase";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(180,205,184,0.08),transparent_35%)]" />

      <Hero />
	  <InfoCards />
	  <ProductShowcase />
    </main>
  );
}