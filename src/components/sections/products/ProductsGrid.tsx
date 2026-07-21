import ProductCard from "@/components/ui/ProductCard";
import SectionContainer from "@/components/layout/SectionContainer";

const productsData = [
	{
		heading: "Enkelbom",
		description: "Robust och driftsäker vägboom för skogsbilvägar och enskilda vägar. Robust konstruktion för att klara tuffa miljöer och påfrestningar. Lämplig för både privat och kommersiellt bruk.",
		length: "6 eller 7 meter",
		image: "/enbom_skogsvag.png",
	},
	{
		heading: "Dubbelbom",
		description: "Dubbelbom för bredare vägar och större öppningar. Samma robusta kontruktion",
		length: "12 eller 14 meter",
		image: "/dubblbom.png",
	}
]


const ProductsGrid = () => {
	return (
		<section className="bg-(--background) px-8 py-8 md:px-16 md:py-12 flex justify-center">
			<SectionContainer>
				<div className="flex items-stretch flex-col lg:flex-row gap-8 md:gap-16 w-full">
					<ProductCard {...productsData[0]} />
					<ProductCard {...productsData[1]} />
				</div>
			</SectionContainer>
		</section>
	);
};

export default ProductsGrid;
