"use client";

import { Button } from "@/components/ui/button";

import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
	const router = useRouter();
	const { user } = useAuth();

	const handleLogin = () => router.push("/login");
	const handleRegister = () => router.push("/register");

	if (user) {
		router.push("/dashboard");
	}

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
				<Button variant="ghost" onClick={handleLogin}>
					Entrar
				</Button>
				<Button variant="default" onClick={handleRegister}>
					Registrar
				</Button>
			</div>
		</header>
	);
}
