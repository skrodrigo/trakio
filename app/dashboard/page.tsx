"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export default function DashboardPage() {
	const { user, isLoading, signOut } = useAuth();
	const router = useRouter();

	// Redirect to login if not authenticated
	useEffect(() => {
		if (!isLoading && !user) {
			router.push("/login");
		}
	}, [isLoading, user, router]);

	return isLoading ? (
		<div className="h-9 w-20 bg-zinc-800 animate-pulse rounded-md" />
	) : user ? (
		<div className="flex items-center gap-4">
			<span className="text-sm text-zinc-400">
				{user.user_metadata.name || user.email}
			</span>
			<Button onClick={signOut} variant="destructive" size="sm">
				Sair
			</Button>
		</div>
	) : null;
}
