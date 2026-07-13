import Button from "@/components/ui/button";
import Image from "next/image";

const ProductCard = () => {
	return (
		<article className="overflow-hidden rounded-lg bg-(--surface-high) text-(--foreground) shadow-md ">
			<div className="relative">
				<Image
					src="/enbom_skogsvag.png"
					alt="Enkelbom på en skogsväg"
					width={1200}
					height={900}
					className="h-auto w-full object-cover"
				/>
				<div className="absolute left-4 top-4 inline-flex h-8 items-center rounded-xs bg-(--barrier-red) px-3 text-[0.69rem] font-medium uppercase tracking-[0.08em] text-white">
					Klassiker
				</div>
			</div>

			<div className="flex flex-col gap-7 px-6 py-8 md:px-8 md:py-10">
				<div className="flex flex-col gap-4">
					<div className="space-y-4">
						<h2 className="text-[1.9rem] font-semibold leading-none tracking-[-0.02em] text-(--foreground)">
							Enkelbom
						</h2>
						<p className="max-w-xl text-[1rem] leading-[1.7] text-(--foreground-muted)">
							Robust och driftsäker vägboom för skogsbilvägar och enskilda vägar. 6 eller 7 meters bredd.
						</p>
					</div>

					<dl className="grid gap-y-5">
						<div className="grid grid-cols-[1fr_auto] items-center gap-4">
							<dt className="text-[0.96rem] font-semibold tracking-[0.08em] text-[rgba(227,226,224,0.42)]">
								Längd
							</dt>
							<dd className="text-[0.95rem] font-semibold text-(--foreground)">3.0 - 6.0 m</dd>
						</div>
						<div className="grid grid-cols-[1fr_auto] items-center gap-4">
							<dt className="text-[0.96rem] font-semibold tracking-[0.08em] text-[rgba(227,226,224,0.42)]">
								Material
							</dt>
							<dd className="text-[0.95rem] font-semibold text-(--foreground)">Rostskyddat Stål</dd>
						</div>
						<div className="grid grid-cols-[1fr_auto] items-center gap-4">
							<dt className="text-[0.96rem] font-semibold tracking-[0.08em] text-[rgba(227,226,224,0.42)]">
								Låstyp
							</dt>
							<dd className="text-[0.95rem] font-semibold text-(--foreground)">Hänglås</dd>
						</div>
					</dl>
				</div>

				<div className="flex items-center gap-4">
					<Button
						type="button"
						variant="primary"
						className="flex h-12 flex-1 items-center justify-center"
					>
						Begär offert
					</Button>
				</div>
			</div>
		</article>
	);
};

export default ProductCard;