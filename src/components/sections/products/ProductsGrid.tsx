import ProductCard from "@/components/ui/ProductCard";
import SectionContainer from "@/components/layout/SectionContainer";
import type { ProductsPageData } from "@/lib/sanity/queries";

type ProductsGridProps = {
	products?: ProductsPageData["products"] | null;
};



const ProductsGrid = ({ products }: ProductsGridProps) => {
	const sortedProducts = [...(products ?? [])].sort((left, right) => (left.order ?? 0) - (right.order ?? 0));
	const firstProduct = sortedProducts[0];
	const secondProduct = sortedProducts[1];

	return (
		<section className="bg-(--background) px-8 py-8 md:px-16 md:py-12 flex justify-center">
			<SectionContainer>
				<div className="flex items-stretch flex-col lg:flex-row gap-8 md:gap-16 w-full h-full">
					<ProductCard
						heading={firstProduct?.heading ?? "Enkelbom"}
						description={firstProduct?.description ?? "Robust och driftsäker vägboom för skogsbilvägar och enskilda vägar. Robust konstruktion för att klara tuffa miljöer och påfrestningar. Lämplig för både privat och kommersiellt bruk."}
						length={firstProduct?.length ?? "6 eller 7 meter"}
						image="/enkelbom.jpg"
					/>
					<ProductCard
						heading={secondProduct?.heading ?? "Dubbelbom"}
						description={secondProduct?.description ?? "Dubbelbom för bredare vägar och större öppningar. Samma robusta kontruktion"}
						length={secondProduct?.length ?? "12 eller 14 meter"}
						image="/dubblbom.png"
					/>
				</div>
			</SectionContainer>
		</section>
	);
};

export default ProductsGrid;
