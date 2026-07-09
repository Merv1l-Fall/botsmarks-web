"use client"

import Link from "next/link"

import Button from "@/components/ui/button"

type NavItem = {
	href: string
	label: string
}

type MobileMenuProps = {
	open: boolean
	onClose: () => void
	navItems: NavItem[]
	isActive: (href: string) => boolean
}

const MobileMenu = ({ open, onClose, navItems, isActive }: MobileMenuProps) => {
	return (
		<div
			id="mobile-header-menu"
			className={`absolute left-0 right-0 top-full z-30 border-t border-(--outline) bg-[rgba(8,10,8,0.98)] px-4 shadow-[0_24px_64px_rgba(0,0,0,0.35)] transition-all duration-200 min-[820px]:hidden ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
			aria-hidden={!open}
		>
			<div className="mx-auto flex max-w-7xl flex-col gap-5 py-5">
				<nav aria-label="Mobilmeny" className="grid gap-2 text-[0.9rem] font-semibold uppercase tracking-widest text-(--foreground-muted)">
					{navItems.map((item) => {
						const active = isActive(item.href)

						return (
							<Link
								key={item.href}
								href={item.href}
								onClick={onClose}
								aria-current={active ? "page" : undefined}
								className={`rounded border px-4 py-3 transition ${active ? "border-(--accent-yellow) text-(--accent-yellow)" : "border-(--outline) hover:border-(--outline-strong) hover:text-(--foreground)"}`}
							>
								{item.label}
							</Link>
						)
					})}
				</nav>

				<Button href="/kontakt" variant="primary" className="w-full" onClick={onClose}>
					Offertförfrågan
				</Button>
			</div>
		</div>
	)
}

export default MobileMenu