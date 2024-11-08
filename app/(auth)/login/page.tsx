import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

export const metadata: Metadata = {
	title: "Login - Trakio",
	description: "Login page for user authentication.",
};

export default function LoginPage() {
	return (
		<div className="h-screen bg-[#09090b] flex flex-col items-center px-4">
			<div className="flex items-start w-full justify-start mt-6 mb-8 ">
				<Link
					href="/"
					className="bg-zinc-900 flex items-center justify-center	rounded-full p-2"
				>
					<ChevronLeft />
				</Link>
			</div>

			<h2 className="font-bold text-primary text-5xl mb-4">Entrar</h2>
			<LoginForm />
		</div>
	);
}
