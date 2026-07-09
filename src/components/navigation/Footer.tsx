import MapPin from "../../../public/MapPin"
import LetterIcon from "../../../public/LetterIcon"
import PhoneIcon from "../../../public/PhoneIcon"

const Footer = () => {

	const navLinks = [
		{ name: "Hem", href: "/" },
		{ name: "Produkter", href: "/produkter" },
		{ name: "Broschyr", href: "/broschyr" },
		{ name: "Kontakt", href: "/kontakt" },
	]

	return (
		<footer className="bg-[rgba(8,10,8,0.92)] flex w-full justify-around p-16 gap-8 flex-wrap">
			<div className="flex flex-col gap-2 flex-1">
				<p className="text-lg font-bold uppercase">Botsmarks <em className="text-(--foreground-muted) not-italic">Mekaniska</em></p>
				<p className="text-(--foreground-muted) max-w-90">
					Vi levererar Robusta lösningar för vägavstängning i hela Sverige,§ med fokus på kvalitet och pålitlighet
				</p>
				<p className="text-(--foreground-muted)">© 2026 Botsmarks Mekaniska AB</p>
			</div>
			<div className="flex flex-col gap-2 flex-1 items-start">
				<p className="text-md text-(--accent-yellow) font-bold uppercase">Navigation</p>
				<nav aria-label="Footer navigation" className="flex flex-col gap-2">
					{navLinks.map((link) => (
						<a className="text-(--foreground) hover:text-(--accent-yellow) w-fit" key={link.href} href={link.href}>
							{link.name}
						</a>
					))}
				</nav>
			</div>
			<div className="flex flex-col gap-2 flex-1">
				<p className="text-md text-(--accent-yellow) font-bold uppercase">Kontaktuppgifter</p>
				<div className="flex items-center gap-1">
					<PhoneIcon width={20} height={20} fill="var(--accent-yellow)" />
					<a className="text-(--foreground) hover:text-(--accent-yellow)" href="tel:0934-60021">
						0934-60021
					</a>
				</div>
				<div className="flex items-center gap-1">
					<LetterIcon width={20} height={20} fill="var(--accent-yellow)" />
					<a className="text-(--foreground) hover:text-(--accent-yellow)" href="mailto:info@botsmarksmekaniska.se">
						info@botsmarksmekaniska.se
					</a>
				</div>
				<div className="flex items-center gap-1">
					<MapPin width={20} height={20} fill="var(--accent-yellow)" />
					<a className="text-(--foreground) hover:text-(--accent-yellow)" href="https://maps.app.goo.gl/XKZ5cumkaWJpASJMA" target="_blank" rel="noopener noreferrer">
						Botulfsvägen 24, 92276 Botsmark
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer