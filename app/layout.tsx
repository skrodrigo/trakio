import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
	title: "Trakio",
	description:
		"para quem precisa monitorar dados e ter uma visão clara de desempenho, com o diferencial dos webhooks, automação. Simples e fácil de lembrar, sugere monitoramento.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="pt-BR"
			className="bg-[#09090b] dark selection:bg-zinc-900 selection:text-white"
		>
			<body className={cn(GeistSans.className)}>{children}</body>
		</html>
	);
}
