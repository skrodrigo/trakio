import React from "react";

export default function AboutSection() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Sobre Nós
					</h2>
					<div className="grid gap-6 items-center">
						<div className="space-y-4">
							<p className="text-[#e5e7eb] opacity-70 md:text-xl text-center">
								A Trakio é líder em soluções de visualização de dados,
								fornecendo ferramentas poderosas e intuitivas para empresas de
								todos os tamanhos. Nossa missão é tornar a análise de dados
								acessível e acionável para todos.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
