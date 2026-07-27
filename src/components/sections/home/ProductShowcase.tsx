import Button from "@/components/ui/button";
import ImageCard from "@/components/ui/ImageCard";
import SectionContainer from "@/components/layout/SectionContainer";
import type { HomePageData } from "@/lib/sanity/queries";


type ProductShowcaseProps = {
	productShowcase?: HomePageData["productShowcase"] | null;
};

const ProductShowcase = ({ productShowcase }: ProductShowcaseProps) => {
	const featuredProducts = productShowcase?.featuredProducts ?? [];
	const firstProduct = featuredProducts[0];
	const secondProduct = featuredProducts[1];
	const heading = productShowcase?.heading ?? "Våra Bommar";
	const description = productShowcase?.description ?? "Hitta rätt modell för dina behov. Vi erbjuder både enkelbommar och dubbelbommar i olika utföranden.";
	const buttonText = productShowcase?.buttonText ?? "Till Produktsidan";

	return (
		<section className="flex flex-col gap-8 p-8 md:p-16 py-24 bg-(--background)">
			<SectionContainer>
			<div>
				<h2 className="text-(--foreground) text-3xl font-bold pb-4">{heading}</h2>
				<div className="flex flex-col gap-6">
					<p className="text-(--foreground-muted) max-w-xl">
						{description}
					</p>

					<Button href="/produkter" variant="primary" className="sm:w-fit">
						{buttonText}
					</Button>
				</div>
				<div className="flex flex-col lg:flex-row gap-8 mt-8 h-128 lg:h-96">
					<ImageCard
						src={firstProduct?.imageUrl ?? "/enbom_skogsvag.png"}
						alt={firstProduct?.heading ?? "Enkel Botsmarksbom på en skogsväg"}
						title={firstProduct?.heading ?? "Enkelbom"}
						description={firstProduct?.description ?? "Finns i 6 eller 7 meters genomfartsbredd."}
						className="grow"
						imageHeight="h-full"
					/>
					<ImageCard
						src={secondProduct?.imageUrl ?? "/dubblbom.png"}
						alt={secondProduct?.heading ?? "Dubbel Botsmarksbom utanför verkstaden, redo för leverans"}
						title={secondProduct?.heading ?? "Dubbelbom"}
						description={secondProduct?.description ?? "Finns i 12 eller 14 meters genomfartsbredd."}
						className="grow"
						imageHeight="h-full"
					/>
				</div>
			</div>
			</SectionContainer>
		</section>
	);
};

export default ProductShowcase;
