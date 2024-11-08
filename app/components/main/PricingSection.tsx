import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CircleCheck, Lock } from "lucide-react";
import React from "react";

export default function PricingSection() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-[#18181b]">
				<div className="container px-4 md:px-6 max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Preços
					</h2>
					<div className="grid gap-6 lg:grid-cols-3">
						<Card className="bg-[#09090b] border-zinc-800 transition-colors duration-300">
							<CardHeader>
								<CardTitle className="text-xl font-bold text-[#FFFFFF]">
									Básico
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-3xl font-bold text-[#FFFFFF] mb-4">
									R$49/mês
								</p>
								<ul className="space-y-2 text-[#e5e7eb] opacity-70">
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>5 painéis</li>
									</div>
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>10.000 visualizações/mês</li>
									</div>
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>Suporte por email</li>
									</div>
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									variant="default"
									className="bg-[#FFFFFF] text-[#09090b] w-full mt-20"
								>
									Começar
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-[#09090b] border-zinc-800 transition-colors duration-300">
							<CardHeader>
								<CardTitle className="text-xl font-bold text-[#FFFFFF]">
									Pro
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-3xl font-bold text-[#FFFFFF] mb-4">
									R$99/mês
								</p>
								<ul className="space-y-2 text-[#e5e7eb] opacity-70">
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>Painéis ilimitados</li>
									</div>
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>100.000 visualizações/mês</li>
									</div>
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>Suporte prioritário</li>
									</div>
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									variant="default"
									className="bg-[#FFFFFF] text-[#09090b] w-full mt-20"
								>
									Começar
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-[#09090b] border-zinc-800 transition-colors duration-300">
							<CardHeader>
								<CardTitle className="text-xl font-bold text-[#FFFFFF]">
									Empresarial
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-3xl font-bold text-[#FFFFFF] mb-4">
									Personalizado
								</p>
								<ul className="space-y-2 text-[#e5e7eb] opacity-70">
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>Recursos personalizados</li>
									</div>
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>Visualizações ilimitadas</li>
									</div>
									<div className="flex gap-2">
										<CircleCheck className="inline-block mr-2" />
										<li>Suporte dedicado</li>
									</div>
								</ul>
							</CardContent>
							<CardFooter>
								<Button
									variant="default"
									disabled
									className="bg-[#FFFFFF] text-[#09090b] w-full mt-20"
								>
									<Lock className="inline-block mr-2" />
									Começar
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
}
