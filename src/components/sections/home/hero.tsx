import Button from "@/components/ui/button";
import Image from "next/image"

const Hero = () => {
	return (
		<section className="hero-shell grid min-h-screen items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
			<div className="reveal-up max-w-xl space-y-8">
				<div className="flex items-center gap-3 text-[0.69rem] font-semibold uppercase tracking-widest text-(--accent-yellow)">
					<span className="h-px w-7 bg-(--accent-yellow)" />
					BOTSMARKS MEKANISKA AB - BOTSMARK
				</div>

				<h1 className="text-balance text-[2rem] font-bold leading-[1.2] tracking-[-0.02em] text-(--foreground) sm:text-[2.35rem] lg:text-[3.05rem]">
					Vägbommen <em className="font-semibold italic text-[#c8d7c9]">som håller </em>skogen stängd.
				</h1>

				<p className="max-w-lg text-[1rem] leading-[1.65] text-(--foreground-muted) lg:text-[1.05rem]">
					Botsmarks-bommen är en svensk-tillverkad vägbom konstruerad for
					skogsbilvägar och privata markomraden - robust, enkel att montera
					och gjord för att hålla.
				</p>

				<div className="flex flex-col gap-3 sm:flex-row">
					<Button href="/kontakt" variant="primary">
						Begär prisuppgift
					</Button>
					<Button href="/produkter" variant="secondary">
						Se modeller
					</Button>
				</div>
			</div>

			<div className="reveal-up-delay relative mx-auto w-full max-w-[680px]">
				<div className="relative ml-auto w-full rounded bg-[rgba(255,255,255,0.06)] p-4 ring-1 ring-[rgba(255,255,255,0.12)] backdrop-blur-sm md:p-5">
					<Image
						src="/botsmarks_first_page.jpg"
						alt="Botsmarks-bommen produktpresentation"
						width={640}
						height={470}
						priority
						className="h-auto w-full rounded object-cover"
					/>
					<div className="absolute inset-0 rounded bg-gradient-to-t from-[var(--background)]/60 via-[var(--background)]/20 to-transparent hover:opacity-0 transition-opacity z-10" />

					<div className="absolute bottom-2 left-2 w-[230px] rounded-r bg-[rgba(10,12,10,0.95)] px-3 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.3)] md:bottom-4 md:left-4">
						<span className="block border-l-2 border-(--accent-yellow) pl-2 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-(--accent-yellow)">
							Alltid
						</span>
						<p className="mt-1 text-[0.76rem] font-bold uppercase tracking-[0.04em] text-(--foreground)">
							100% NORRLÄNDSKT STÅL
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero