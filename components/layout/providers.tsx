"use client";
import { useAuth } from "@/hooks/useAuth";
import type React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";

export default function Providers({
	children,
}: {
	children: React.ReactNode;
}) {
	const { user } = useAuth();

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{user ? children : <div>Please log in to access this content.</div>}
		</ThemeProvider>
	);
}
