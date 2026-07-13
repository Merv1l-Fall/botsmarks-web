"use client"
import ProductsHero from "@/components/sections/products/ProductsHero"
import ProductsGrid from "@/components/sections/products/ProductsGrid"
import ProductsMoreInfo from "@/components/sections/products/ProductsMoreInfo"

const ProductsPage = () => {
	return (
		<main className="relative min-h-screen overflow-hidden">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_304%,rgba(180,205,184,0.08),transparent_40%)]" />
			<ProductsHero />
			<ProductsGrid />
			<ProductsMoreInfo />
		</main>
	)
}

export default ProductsPage