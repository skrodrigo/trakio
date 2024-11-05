import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-800">
			<p className="text-xs text-[#e5e7eb] opacity-70">
				© 2024 Trakio. Todos os direitos reservados.
			</p>
			<nav className="sm:ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-xs hover:underline underline-offset-4 text-[#e5e7eb] opacity-70 hover:opacity-100"
					href="#"
				>
					Termos de Serviço
				</Link>
				<Link
					className="text-xs hover:underline underline-offset-4 text-[#e5e7eb] opacity-70 hover:opacity-100"
					href="#"
				>
					Privacidade
				</Link>
			</nav>
		</footer>
	);
}
