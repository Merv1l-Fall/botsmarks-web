"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import Button from "@/components/ui/button"

type NavItem = {
	href: string;
	label: string;
}

const navItems: NavItem[] = [
	{ href: "/", label: "Hem" },
	{ href: "/produkter", label: "Produkter" },
	{ href: "/broschyr", label: "Broschyr" },
	{ href: "/kontakt", label: "Kontakt" },
]

const Header = () => {
	const pathname = usePathname()

	const isActive = (href: string) => {
		if (href === "/") {
			return pathname === "/"
		}

		return pathname === href || pathname.startsWith(`${href}/`)
	}

	return (
		<header className="relative z-20 w-full bg-[rgba(8,10,8,0.92)] backdrop-blur-sm">
			<div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-2 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
				<Link
					href="/"
					className="inline-flex gap-2 text-[1.05rem] font-extrabold uppercase leading-none tracking-[-0.03em] text-(--foreground)"
				>
					<span>Botsmarks</span>
					<span className="text-(--accent-yellow)">Mekaniska</span>
					{/* <Image src="/botsmarks_logo_notext.svg" alt="Botsmarks Mekaniska" width={60} height={60} /> */}
				</Link>

				<nav aria-label="Huvudmeny" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-(--foreground-muted) md:justify-center">
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
				</nav>

				<Button
					href="/kontakt"
					variant="primary"
				>
					Offertförfrågan
				</Button>
			</div>
		</header>
	)
}

export default Header