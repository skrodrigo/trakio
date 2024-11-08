import Image from "next/image";
import RegisterForm from "./_components/RegisterForm";

export default function RegisterPage() {
	return (
		<div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center px-4 space-y-8">
			<div className="w-12 h-12">
				<Image
					src="/trakio-light.png"
					alt="Trakio"
					width={1000}
					height={1000}
				/>
			</div>
			<h2 className=" font-bold text-primary text-5xl">Registrar</h2>
			<RegisterForm />
		</div>
	);
}
