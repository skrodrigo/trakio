import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "./_components/LoginForm";

export const metadata: Metadata = {
	title: "Login - Trakio",
	description: "Login page for user authentication.",
};

export default function LoginPage() {
	return (
		<div className="min-h-screen flex bg-[#09090b] flex-col items-center justify-center px-4 space-y-8 ">
			<div className="w-12 h-12">
				<Image
					src="/trakio-light.png"
					alt="Trakio"
					width={1000}
					height={1000}
				/>
			</div>
			<h2 className=" font-bold text-primary text-5xl">Entrar</h2>

			<LoginForm />
		</div>
	);
}
