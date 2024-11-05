import { Button } from "@/components/ui/button";
import React from "react";

export default function StartedSection() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 max-w-6xl mx-auto">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Pronto para Começar?
							</h2>
							<p className="mx-auto max-w-[600px] text-[#e5e7eb] opacity-70 md:text-xl">
								Junte-se a centenas de empresas que já estão usando a Trakio
								para tomar decisões baseadas em dados.
							</p>
						</div>
						<Button
							size="lg"
							className="bg-[#FFFFFF] text-[#09090b] hover:bg-[#e5e7eb]"
						>
							Quero Começar!
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
