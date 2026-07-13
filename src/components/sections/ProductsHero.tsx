

const ProductsHero = () => {
	return (
		<section className="relative flex flex-col py-16 px-8 md:p-16 bg-(--background)">
			<div className=" reveal-up">
				<div className="flex items-center gap-3 text-[0.69rem] font-semibold uppercase tracking-widest text-(--accent-yellow)">
					<span className="h-px w-7 bg-(--accent-yellow)" />
					BOTSMARKS MEKANISKA AB - BOTSMARK
				</div>
				<h1 className="text-balance text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] text-(--foreground) sm:text-[2.35rem] lg:text-[3.05rem]">Vårt sortiment av <em className="font-semibold italic text-[#c8d7c9]">Botsmarksbommar</em></h1>

				<p className="max-w-3xl text-[1rem] leading-[1.65] text-(--foreground-muted) py-4">
					Konstruerade för att tåla det Norrländska klimatet. Vi levererar svensk kvalitet som håller i generationer. Välj mellan våra standardmodeller eller kontakta oss för en skräddarsydd lösning.
				</p>
			</div>
		</section>
	)
}

export default ProductsHero