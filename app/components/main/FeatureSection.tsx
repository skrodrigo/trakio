import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Settings, Zap } from "lucide-react";
import React from "react";

export default function FeatureSection() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-[#18181b] ">
				<div className="container px-4 md:px-6 max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Recursos Principais
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Card className="bg-[#09090b] border-zinc-800 transition-colors duration-300">
							<CardHeader>
								<div className="flex bg-zinc-900 border border-zinc-800 rounded-lg justify-center items-center w-10 h-10">
									<LineChart
										strokeWidth={1}
										className="h-6 w-6 text-[#FFFFFF]"
									/>
								</div>
								<CardTitle className="text-xl font-bold text-[#FFFFFF]">
									Visualizações Avançadas
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-[#e5e7eb] opacity-70">
									Crie gráficos e visualizações impressionantes com nossa
									interface intuitiva.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-[#09090b] border-zinc-800 transition-colors duration-300">
							<CardHeader>
								<div className="flex bg-zinc-900 border border-zinc-800 rounded-lg justify-center items-center w-10 h-10">
									<Zap strokeWidth={1} className="h-6 w-6 text-[#FFFFFF]" />
								</div>
								<CardTitle className="text-xl font-bold text-[#FFFFFF]">
									Implementação Fácil
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-[#e5e7eb] opacity-70">
									Configure e integre com suas fontes de dados em minutos, não
									horas.
								</p>
							</CardContent>
						</Card>
						<Card className="bg-[#09090b] border-zinc-800 transition-colors duration-300">
							<CardHeader>
								<div className="flex bg-zinc-900 border border-zinc-800 rounded-lg justify-center items-center w-10 h-10">
									<Settings
										strokeWidth={1}
										className="h-6 w-6 text-[#FFFFFF]"
									/>
								</div>
								<CardTitle className="text-xl font-bold text-[#FFFFFF]">
									Controle Total
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-[#e5e7eb] opacity-70">
									Personalize todos os aspectos de seus painéis e relatórios.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
}
