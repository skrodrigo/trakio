import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
	title: "Trakio",
	description:
		"para quem precisa monitorar dados e ter uma visão clara de desempenho, com o diferencial dos webhooks, automação. Simples e fácil de lembrar, sugere monitoramento.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="dark">
			<body className={cn(GeistSans.className)}>{children}</body>
		</html>
	);
}
