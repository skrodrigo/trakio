import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TestemonialsSection() {
	return (
		<div className="rounded-md w-full py-12 md:py-24 lg:py-32 bg-[#18181b] flex flex-col antialiased  items-center justify-center relative overflow-hidden">
			<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
				Depoimentos
			</h2>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

const testimonials = [
	{
		quote:
			"A Trakio me ajudou a transformar meus dados em insights valiosos! A possibilidade de configurar métricas personalizadas e visualizá-las em tempo real fez toda a diferença no acompanhamento dos meus projetos.",
		name: "Mariana Silva",
		title: "Gerente de Projetos",
	},
	{
		quote:
			"Com a integração via webhooks, conseguimos automatizar a coleta de dados, poupando horas de trabalho manual. É a ferramenta ideal para quem precisa de controle e agilidade ao monitorar métricas.",
		name: "Lucas Almeida",
		title: "Analista de Dados",
	},
	{
		quote:
			"A simplicidade e funcionalidade da Trakio são incríveis. Comecei com o plano gratuito, e rapidamente fiz o upgrade para o premium. Vale cada centavo para quem busca relatórios precisos e customizados.",
		name: "Ana Pereira",
		title: "Empreendedora",
	},
	{
		quote:
			"Antes da Trakio, manter métricas atualizadas era um desafio. Agora, tudo flui de maneira automática, e posso focar no que realmente importa: tomar decisões baseadas em dados!",
		name: "Rafael Costa",
		title: "Consultor de Negócios",
	},
	{
		quote:
			"A interface intuitiva e os gráficos interativos da Trakio tornam o acompanhamento de métricas uma tarefa fácil e até prazerosa. Recomendo fortemente para qualquer pessoa que precise monitorar dados regularmente.",
		name: "Camila Souza",
		title: "Especialista em Marketing",
	},
];
