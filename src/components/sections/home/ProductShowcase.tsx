import Button from "@/components/ui/button";
import ImageCard from "@/components/ui/ImageCard";

const ProductShowcase = () => {
	return (
		<section className="flex flex-col gap-8 p-16 py-24 bg-(--background)">
			<div>
				<h2 className="text-(--foreground) text-3xl font-bold pb-4">Våra Bommar</h2>
				<div className="flex flex-col gap-6">
					<p className="text-(--foreground-muted) max-w-xl">
						Hitta rätt modell för dina behov. Vi erbjuder både enkelbommar och dubbelbommar i olika
						utföranden.
					</p>

					<Button href="/produkter" variant="primary" className="w-fit">
						Till Produktsidan
					</Button>
				</div>
				<div className="flex lg:flex-row gap-8 mt-8 h-96 sm:flex-col">
					<ImageCard
						src="/enbom_skogsvag.png"
						alt="Enkel Botsmarksbom på en skogsväg"
						title="Enkelbom"
						description="Finns i 6 eller 7 meters längd."
						className="w-[60%] grow"
						imageHeight="h-full"
					/>
					<ImageCard
						src="/dubblbom.png"
						alt="Dubbel Botsmarksbom utanför verkstaden, redo för leverans"
						title="Dubbelbom"
						description="Finns i 12 eller 14 meters längd."
						className="w-[60%] grow"
						imageHeight="h-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;
