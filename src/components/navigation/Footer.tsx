import MapPin from "../../../public/MapPin"

const Footer = () => {

	return (
		<footer className="bg-[rgba(8,10,8,0.92)] flex w-full justify-evenly">
			<div className="flex flex-col gap-2 grow flex-1">
				<p>Botsmarks <em>Mekaniska</em></p>
				<p> Vi levererar Robusta lösningar för vägavstängningar i hela Sverige med fokus på kvalitet och pålitlighet</p>
				<p>© 2026 Botsmarks Mekaniska AB</p>
			</div>
			<div className="flex flex-col gap-2 grow flex-1">
				<p>Navigation</p>
				<nav aria-label="Footer navigation" className="flex flex-col gap-2">
					<a href="/">Hem</a>
					<a href="/produkter">Produkter</a>
					<a href="/broschyr">Broschyr</a>
					<a href="/kontakt">Kontakt</a>
				</nav>
			</div>
			<div className="flex flex-col gap-2 grow flex-1">
				<p>Kontaktuppgifter</p>
				<p>Telefon: 020-123456</p>
				<p>E-post: info@botsmarksmekaniska.se</p>
				<div className="flex items-center gap-1">
					<MapPin width={22} height={20} fill="var(--accent-yellow)" />
					<p>Botulfsvägen 24, 92276 Botsmark</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer