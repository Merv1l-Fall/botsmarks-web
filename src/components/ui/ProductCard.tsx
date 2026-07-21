import Button from "@/components/ui/button";
import Image from "next/image";

type ProductCardProps = {
	heading: string;
	description: string;
	length: string;
	image: string;
};

const ProductCard = ({ heading, description, length, image }: ProductCardProps) => {
	return (
		<article className="overflow-hidden rounded-lg bg-(--surface-high) text-(--foreground) shadow-md h-full flex flex-col">
			<div className="relative">
				<Image
					src={image}
					alt={heading}
					width={1200}
					height={900}
					className="h-auto w-full object-cover"
				/>
				<div className="absolute left-4 top-4 inline-flex h-8 items-center rounded-xs bg-(--barrier-red) px-3 text-[0.69rem] font-medium uppercase tracking-[0.08em] text-white">
					Klassiker
				</div>
			</div>

			<div className="flex flex-1 flex-col gap-7 px-6 py-8 md:px-8 md:py-10 justify-between">
				<div className="flex flex-col gap-4">
					<div className="space-y-4">
						<h2 className="text-[1.9rem] font-semibold leading-none tracking-[-0.02em] text-(--foreground)">
							{heading}
						</h2>
						<p className="max-w-xl text-[1rem] leading-[1.7] text-(--foreground-muted)">
							{description}
						</p>
					</div>

					<dl className="grid gap-y-5">
						<div className="grid grid-cols-[1fr_auto] items-center gap-4">
							<dt className="text-[0.96rem] font-semibold tracking-[0.08em] text-[rgba(227,226,224,0.42)]">
								Längd
							</dt>
							<dd className="text-[0.95rem] font-semibold text-(--foreground)">
								{length}
							</dd>
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
						href="/kontakt"
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