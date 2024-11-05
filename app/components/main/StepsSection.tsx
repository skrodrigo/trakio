import { BarChart3, Sparkles, Users } from "lucide-react";
import React from "react";

export default function StepsSection() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Como Funciona
					</h2>
					<div className="grid gap-6 lg:grid-cols-3">
						<div className="flex flex-col items-center text-center">
							<div className="mb-4 p-4 rounded-full flex bg-zinc-900 border border-zinc-800  justify-center items-center">
								<Users className="h-10 w-10 text-[#FFFFFF]" />
							</div>
							<h3 className="text-xl font-bold mb-2">1. Conecte Seus Dados</h3>
							<p className="text-[#e5e7eb] opacity-70">
								Integre facilmente com suas fontes de dados e APIs existentes.
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="mb-4 p-4 rounded-full flex bg-zinc-900 border border-zinc-800  justify-center items-center">
								<Sparkles className="h-10 w-10 text-[#FFFFFF]" />
							</div>
							<h3 className="text-xl font-bold mb-2">
								2. Personalize Seu Painel
							</h3>
							<p className="text-[#e5e7eb] opacity-70">
								Crie painéis interativos e bonitos com simplicidade de arrastar
								e soltar.
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="mb-4 p-4 rounded-full flex bg-zinc-900 border border-zinc-800  justify-center items-center">
								<BarChart3 className="h-10 w-10 text-[#FFFFFF]" />
							</div>
							<h3 className="text-xl font-bold mb-2">3. Obtenha Insights</h3>
							<p className="text-[#e5e7eb] opacity-70">
								Analise seus dados com ferramentas poderosas e tome decisões
								informadas.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
