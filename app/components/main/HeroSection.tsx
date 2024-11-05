import { Button } from "@/components/ui/button";

import React from "react";

export default function HeroSection() {
	return (
		<div>
			<div className="md:h-[700px] h-[#500]  w-full rounded-md flex md:items-center md:justify-center  bg-grid-white/[0.01] relative overflow-hidden">
				<div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
					<h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-200 bg-opacity-50">
						Visualize <br /> Suas Métricas com Facilidade
					</h1>
					<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
						Visualização de dados poderosa, implementação fácil e controle total
						sobre suas métricas.
					</p>
					<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mt-6">
						<Button
							size="lg"
							className="bg-[#FFFFFF] text-[#09090b] hover:bg-[#e5e7eb]"
						>
							Começar
						</Button>
						<Button size="lg" variant="link" className="text-white">
							Saiba Mais
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
