import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

import "./globals.css";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Botsmarks Mekaniska AB",
	description:
		"Botsmarks-bommen är en svensk-tillverkad vägbom konstruerad for skogsbilvägar och privata markomraden - robust, enkel att montera och gjord för att hålla.",
		icons: {
			icon: "/botsmarks_logo.svg",
		},
	
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="sv" className={montserrat.variable}>
			<head>
				<link rel="icon" href="/botsmarks_logo" type="image/svg+xml" />
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
