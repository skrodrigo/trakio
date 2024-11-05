import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<div>
			<header className="px-4 z-50 lg:px-6 h-14 w-full flex items-center border-b border-zinc-800 fixed top-0 left-0 backdrop-blur-sm">
				<Link className="flex items-center justify-center" href="#">
					<Image src="/trakio-light.svg" width={32} height={32} alt="Trakio" />
					<span className="ml-2 text-lg font-bold">Trakio</span>
				</Link>
				<div className="ml-auto flex items-center space-x-4">
					<Button variant="default">Entrar</Button>
					<Button variant="secondary">Registrar</Button>
				</div>
			</header>
		</div>
	);
}
