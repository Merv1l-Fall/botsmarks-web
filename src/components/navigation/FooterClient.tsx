"use client"

import {useState} from "react"
import MapPin from "../../../public/MapPin"
import LetterIcon from "../../../public/LetterIcon"
import PhoneIcon from "../../../public/PhoneIcon"
import ModalWrapper from "../layout/ModalWrapper"
import MontageWrapper from "../ui/MontageWrapper"
import type {SiteSettings} from "@/lib/sanity/queries"

type FooterClientProps = {
	siteSettings: SiteSettings | null
}

const navLinks = [
	{ name: "Hem", href: "/" },
	{ name: "Produkter", href: "/produkter" },
	{ name: "Kontakt", href: "/kontakt" },
]

const FooterClient = ({ siteSettings }: FooterClientProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<footer className="bg-[rgba(8,10,8,0.92)] flex flex-col md:flex-row w-full justify-around py-16 px-8 md:p-16 gap-8 flex-wrap">
			<div className="flex flex-col gap-2 flex-1">
				<p className="text-lg font-bold uppercase">Botsmarks <em className="text-(--foreground-muted) not-italic">Mekaniska</em></p>
				<p className="text-(--foreground-muted) max-w-90">
					{siteSettings?.footerDescription}
				</p>
				<p className="text-(--foreground-muted)">© {siteSettings?.copyrightYear} Botsmarks Mekaniska AB</p>
			</div>
			<div className="flex flex-col gap-2 flex-1 items-start">
				<p className="text-md text-(--accent-yellow) font-bold uppercase">Navigation</p>
				<nav aria-label="Footer navigation" className="flex flex-col gap-2">
					{navLinks.map((link) => (
						<a className="text-(--foreground) hover:text-(--accent-yellow) w-fit" key={link.href} href={link.href}>
							{link.name}
						</a>
					))}
					<button
						className="text-(--foreground) hover:text-(--accent-yellow) w-fit cursor-pointer"
						onClick={() => setIsModalOpen(true)}
					>
						Montageanvisningar
					</button>
				</nav>
			</div>
			<div className="flex flex-col gap-2 flex-1">
				<p className="text-md text-(--accent-yellow) font-bold uppercase">Kontaktuppgifter</p>
				<div className="flex items-center gap-1">
					<PhoneIcon width={20} height={20} fill="var(--accent-yellow)" />
					<a className="text-(--foreground) hover:text-(--accent-yellow)" href={`tel:${siteSettings?.contact.phone}`}>
						{siteSettings?.contact.phone}
					</a>
				</div>
				<div className="flex items-center gap-1">
					<LetterIcon width={20} height={20} fill="var(--accent-yellow)" />
					<a className="text-(--foreground) hover:text-(--accent-yellow)" href={`mailto:${siteSettings?.contact.email}`}>
						{siteSettings?.contact.email}
					</a>
				</div>
				<div className="flex items-center gap-1">
					<MapPin width={20} height={20} fill="var(--accent-yellow)" />
					<a className="text-(--foreground) hover:text-(--accent-yellow)" href={siteSettings?.contact.mapsUrl} target="_blank" rel="noopener noreferrer">
						{siteSettings?.contact.address.street},  {siteSettings?.contact.address.city}
					</a>
				</div>
			</div>
			{isModalOpen ? (
				<ModalWrapper onClose={() => setIsModalOpen(false)}>
					<MontageWrapper onClose={() => setIsModalOpen(false)} />
				</ModalWrapper>
			) : null}
		</footer>
	)
}

export default FooterClient