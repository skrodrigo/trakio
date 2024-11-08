import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";

export const metadata: Metadata = {
	title: "Trakio",
	description:
		"para quem precisa monitorar dados e ter uma visão clara de desempenho, com o diferencial dos webhooks, automação. Simples e fácil de lembrar, sugere monitoramento.",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const supabase = createServerComponentClient({ cookies });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<html lang="pt-BR" className="dark">
			<body className={cn(GeistSans.className)}>{children}</body>
		</html>
	);
}
