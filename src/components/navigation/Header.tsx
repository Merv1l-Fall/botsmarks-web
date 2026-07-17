"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "../../../public/Logo"
import { usePathname } from "next/navigation"

import Button from "@/components/ui/button"
import MobileMenu from "@/components/navigation/MobileMenu"
import ModalWrapper from "@/components/layout/ModalWrapper"
import BrochyrWrapper from "@/components/ui/BrochyrWrapper"

type NavItem = {
	href: string;
	label: string;
}

const navItems: NavItem[] = [
	{ href: "/", label: "Hem" },
	{ href: "/produkter", label: "Produkter" },
	// { href: "/broschyr", label: "Broschyr" },
	{ href: "/kontakt", label: "Kontakt" },
]

const Header = () => {
	const pathname = usePathname()
	const [menuOpen, setMenuOpen] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)

	const isActive = (href: string) => {
		if (href === "/") {
			return pathname === "/"
		}

		return pathname === href || pathname.startsWith(`${href}/`)
	}

	const openModal = () => {
		setModalOpen(true)
	}

	return (
		<header className=" z-20 w-full bg-[rgba(8,10,8,0.92)] backdrop-blur-sm sticky top-0 left-0 right-0 border-b border-(--outline)">
			<div className="mx-auto flex max-w-7xl flex-row items-center gap-4 px-4 py-2 md:flex-row md:items-center justify-between md:px-6 lg:px-8">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-[1.05rem] font-extrabold uppercase leading-none tracking-[-0.03em] text-(--foreground)"
				>
					<Logo width={65} height={60} fill="var(--foreground)" />
					<span className="hidden xs:block ">Botsmarks</span>
					<span className="text-(--accent-yellow) hidden xs:block">Mekaniska</span>
					{/* <Image src="/botsmarks_logo_notext.svg" alt="Botsmarks Mekaniska" width={60} height={60} /> */}
				</Link>

				<nav aria-label="Huvudmeny" className="hidden flex-wrap items-center gap-x-6 gap-y-4 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-(--foreground-muted) min-[820px]:flex min-[820px]:justify-center">
					{navItems.map((item) => {
						const active = isActive(item.href)

						return (
							<Link
								key={item.href}
								href={item.href}
								aria-current={active ? "page" : undefined}
								className={`relative transition-colors hover:text-(--foreground) ${active ? "text-(--accent-yellow)" : ""}`}
							>
								{item.label}
								{active ? <span className="absolute -bottom-1 left-0 h-px w-full bg-(--accent-yellow)" /> : null}
							</Link>
						)
					})}
					<button
					className="relative transition-colors hover:text-(--foreground) cursor-pointer uppercase tracking-[0.12em] text-[0.8rem] font-semibold text-(--foreground-muted)"
						onClick={openModal}
					>
						Broschyr
					</button>
				</nav>

				<div className="hidden min-[820px]:block">
					<Button
						href="/kontakt"
						variant="primary"
					>
						Offertförfrågan
					</Button>
				</div>

				<button
					type="button"
					aria-expanded={menuOpen}
					aria-controls="mobile-header-menu"
					onClick={() => setMenuOpen((current) => !current)}
					className="inline-flex items-center gap-3 rounded border border-(--outline) px-4 py-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-(--foreground) transition hover:border-(--accent-yellow) hover:text-(--accent-yellow) min-[820px]:hidden"
				>
					<span className="flex flex-col gap-1.5">
						<span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
						<span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
						<span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
					</span>
					Meny
				</button>
			</div>

			<MobileMenu openModal={openModal} open={menuOpen} onClose={() => setMenuOpen(false)} navItems={navItems} isActive={isActive} />
			{modalOpen ? (
				<ModalWrapper onClose={() => setModalOpen(false)}>
					<BrochyrWrapper onClose={() => setModalOpen(false)} />
				</ModalWrapper>
			) : null}
			
		</header>
	)
}

export default Header