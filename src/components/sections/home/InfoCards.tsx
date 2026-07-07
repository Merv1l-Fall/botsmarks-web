import Image from "next/image"
import {CraneIcon} from "../../../../public/CraneIcon"
const Card = () => {
	return (
		<div className="flex flex-col gap-2 bg-(--surface-high) shadow:md p-8 rounded">
			<div className="w-fit bg-(--surface-higher) p-3 rounded">
			<CraneIcon fill="var(--accent-yellow)"/>
			</div>

			<p className="my-2 text-2xl font-semibold">Svensktillverkat</p>
			<p className="my-4">Varje bom svetsas och monterasa med precision i vår verkstad i Botsmark, mitt i Norrlands Hjärta</p>
		</div>
	)
}

const InfoCards = () => {
	return (
		<section className="bg-(--iron-grey) py-12">
			<div className="flex flex-col items-center justify-center gap-2">
				<h2 className="text-(--foreground) text-3xl font-bold text-center">
					Kvalitet från de Norrländska skogarna
				</h2>
				<span className="h-[0.2rem] w-32 bg-(--accent-yellow)"/>
			</div>

			<div className="flex items-evenly gap-6 my-10 mx-6">
				<Card/>
				<Card/>
				<Card/>
			</div>
		</section>
	)
}

export default InfoCards