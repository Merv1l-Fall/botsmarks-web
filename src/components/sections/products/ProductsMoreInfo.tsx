import SectionContainer from "@/components/layout/SectionContainer";
import Image from "next/image";

const ProductsMoreInfo = () => {
	return (
		<section className="p-8 md:p-16 py-24">
			<SectionContainer className="flex flex-col gap-16 items-center">
			<div className="flex flex-col gap-4">
				<p className="text-center text-(--accent-yellow) text-lg font-semibold">
					Funderar du på lås eller montering?
				</p>
				<h2 className="text-5xl font-bold text-(--foreground) text-center">Tekniska Detaljer</h2>
			</div>

			<div className="flex flex-col gap-8 lg:flex-row md:gap-32">
				<div className="flex flex-col gap-4 max-w-100 bg-black/20 rounded-md shadow-md">
					<Image
						src="/robust_fundament.jpg"
						alt="Robust fundament i betong för Botsmarks-bom"
						width={440}
						height={480}
						className="rounded-lg object-cover h-80"
					/>
					<div className="p-4">
					<h3 className="text-lg font-semibold text-(--foreground)">Robust Fundament</h3>
					<p>
						Våra stolpar gjuts i betong med 0,9 m ovan mark och 0,7 m under marknivå. Detta skapar en extremt stabil grund som klarar tyngden från bommen och yttre påfrestningar i krävande miljöer.
					</p>

					</div>
				</div>
				<div className="flex flex-col gap-4 max-w-100 bg-black/20 rounded-md shadow-md">
					<Image
						src="/lasning.png"
						alt="Olika låsningslösningar för Botsmarks-bom, samt en bild av bommens motvikt i uppfällt läge"
						width={440}
						height={480}
						className="rounded-lg object-cover h-80"
					/>
					<div className="p-4">
						<h3 className="text-lg font-semibold text-(--foreground)">Låsningslösningar</h3>
						<p>
							Systemet använder högkvalitativa låsanordningar i stål anpassade för hänglås. Vi erbjuder även versioner med plats för dubbla lås för delad åtkomst, samt detaljerade lösningar för stolpen i öppet läge.
						</p>
					</div>
				</div>
			</div>
			</SectionContainer>
		</section>
	)	
}

export default ProductsMoreInfo
