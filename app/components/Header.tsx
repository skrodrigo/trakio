"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
	const { user, isLoading, signOut } = useAuth();
	const router = useRouter();

	const handleLogin = () => router.push("/login");
	const handleRegister = () => router.push("/register");

	return (
		<header className="px-4 z-50 lg:px-6 h-14 w-full flex items-center border-b border-zinc-800">
			<Link className="flex items-center justify-center" href="/">
				<Image
					src="/trakio-light.png"
					width={1000}
					height={1000}
					alt="Trakio Logo"
					priority
					quality={100}
					className="w-8 h-8"
				/>
				<span className="ml-2 text-lg font-bold">Trakio</span>
			</Link>
			<div className="ml-auto flex items-center space-x-4">
				{isLoading ? (
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
				) : (
					<>
						<Button variant="ghost" onClick={handleLogin}>
							Entrar
						</Button>
						<Button variant="default" onClick={handleRegister}>
							Registrar
						</Button>
					</>
				)}
			</div>
		</header>
	);
}
