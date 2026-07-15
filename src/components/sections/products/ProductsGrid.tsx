import ProductCard from "@/components/ui/ProductCard";
import SectionContainer from "@/components/layout/SectionContainer";


const ProductsGrid = () => {
	return (
		<section className="bg-(--background) px-8 py-8 md:px-16 md:py-12 flex justify-center items-center">
			<SectionContainer>
				<div className="flex items-center justify-center flex-col lg:flex-row gap-8 md:gap-16 w-full">
					<ProductCard />
					<ProductCard />
				</div>
			</SectionContainer>
		</section>
	);
};

export default ProductsGrid;
