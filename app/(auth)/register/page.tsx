import { ChevronLeft } from "lucide-react";

import Link from "next/link";
import RegisterForm from "./_components/RegisterForm";

export default function RegisterPage() {
	return (
		<div className="h-screen bg-[#09090b] flex flex-col items-center px-4">
			<div className="flex items-start inset-0 justify-start w-full mt-6 mb-8">
				<Link
					href="/"
					className="bg-zinc-900 flex items-center justify-center	rounded-full p-2"
				>
					<ChevronLeft />
				</Link>
			</div>

			<h2 className=" font-bold text-primary text-5xl mb-4">Registrar</h2>
			<RegisterForm />
		</div>
	);
}
