import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Botsmarks Mekaniska AB",
  description: "Vagbommar i norrlandskt stal for skogsbilvagar och privata markomraden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
