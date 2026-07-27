import CheckIcon from "../../../../public/CheckIcon";
import { CraneIcon } from "../../../../public/CraneIcon";
import WrenchIcon from "../../../../public/WrenchIcon";
import type { HomePageData } from "@/lib/sanity/queries";

type InfoCardsProps = {
	heading?: string | null;
	cards?: HomePageData["infoCards"] | null;
};

type CardProps = {
	heading: string;
	description: string;
	icon: React.ReactNode;
};

const iconMap = {
	crane: <CraneIcon fill="var(--accent-yellow)" />,
	check: <CheckIcon fill="var(--accent-yellow)" />,
	wrench: <WrenchIcon fill="var(--accent-yellow)" />,
};

const defaultCards = [
	{
		heading: "Svensktillverkat",
		description:
			"Varje bom svetsas och monterasa med precision i vår verkstad i Botsmark, mitt i Norrlands hjärta.",
		icon: iconMap.crane,
	},
	{
		heading: "Norrlänsk kvalitet",
		description:
			"Vi använder endast de bästa materialen och komponenterna för att säkerställa att våra produkter håller högsta kvalitet.",
		icon: iconMap.check,
	},
	{
		heading: "Enkel installation",
		description:
			"Våra produkter är designade för att vara enkla att installera och använda, vilket sparar tid och pengar för våra kunder.",
		icon: iconMap.wrench,
	}
];

const resolveIcon = (icon?: string) => {
	if (!icon) {
		return iconMap.crane;
	}

	return iconMap[icon as keyof typeof iconMap] ?? iconMap.crane;
};

const Card = ({ heading, description, icon }: CardProps) => {
	return (
		<div className="flex flex-col gap-2 bg-(--surface-high) max-w-100 shadow:md p-8 rounded">
			<div className="w-fit bg-(--surface-higher) p-3 rounded">
				{icon}
			</div>

			<p className="my-2 text-2xl font-semibold">{heading}</p>
			<p className="my-4">
				{description}
			</p>
		</div>
	);
};




const InfoCards = ({ heading, cards }: InfoCardsProps) => {
	const cardData = cards?.length
		? cards.map((card) => ({
			heading: card.heading,
			description: card.description,
			icon: resolveIcon(card.icon),
		}))
		: defaultCards;

	return (
		<section className="bg-(--iron-grey) py-12 flex flex-col items-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<h2 className="text-(--foreground) text-3xl font-bold text-center">
					{heading ?? "Kvalitet från de Norrländska skogarna"}
				</h2>
				<span className="h-[0.2rem] w-32 bg-(--accent-yellow)" />
			</div>

			<div className="flex flex-col lg:flex-row content-center items-evenly gap-8 my-10 mx-6 max-w-7xl">
				{cardData.map((card, index) => (
					<Card key={index} {...card} />
				))}
			</div>

			<div className="lg:hidden w-full px-4 flex items-center justify-center">
				
			</div>
		</section>
	);
};

export default InfoCards;
