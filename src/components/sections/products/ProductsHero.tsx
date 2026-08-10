import SectionContainer from "@/components/layout/SectionContainer";
import type { ProductsPageData } from "@/lib/sanity/queries";


type ProductsHeroProps = {
	hero?: ProductsPageData["hero"] | null;
};

const ProductsHero = ({ hero }: ProductsHeroProps) => {
	const badgeText = hero?.badgeText ?? "BOTSMARKS MEKANISKA AB - BOTSMARK";
	const headingPre = hero?.headingPre ?? "Vårt sortiment av ";
	const headingEmphasis = hero?.headingEmphasis ?? "bommar";
	const subtext = hero?.subtext ?? "Konstruerade för att tåla det Norrländska klimatet. Vi levererar svensk kvalitet som håller i generationer. Välj mellan våra standardmodeller eller kontakta oss för en skräddarsydd lösning.";

	return (
		<section className="relative flex flex-col  py-8 px-8 md:px-16 bg-(--background)">
			<SectionContainer>
				<div className="flex items-center gap-3 text-[0.69rem] font-semibold uppercase tracking-widest text-(--accent-yellow)">
					<span className="h-px w-7 bg-(--accent-yellow)" />
					{badgeText}
				</div>
				<h1 className="text-balance mt-4 text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] text-(--foreground) sm:text-[2.35rem] lg:text-[3.05rem]"> {headingPre}  <em className="font-semibold italic text-[#c8d7c9]">{headingEmphasis}</em></h1>

				<p className="max-w-3xl text-[1rem] leading-[1.65] text-(--foreground-muted) py-4">
					{subtext}
				</p>
		</SectionContainer>
		</section>
	)
}

export default ProductsHero