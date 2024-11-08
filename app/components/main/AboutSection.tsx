import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const faqItems = [
	{
		value: "item-1",
		trigger: "O que é a Trakio?",
		content:
			"A Trakio é uma plataforma que permite monitorar e visualizar métricas de forma intuitiva. Com gráficos dinâmicos e interativos, você pode personalizar suas análises e obter insights valiosos para sua empresa.",
	},
	{
		value: "item-2",
		trigger: "Como posso integrar meus dados com a Trakio?",
		content:
			"Integrar seus dados é simples e eficiente através de webhooks, permitindo que suas métricas sejam atualizadas automaticamente, sem a necessidade de inserção manual.",
	},
	{
		value: "item-3",
		trigger: "Existe um limite de métricas na versão gratuita?",
		content:
			"A versão gratuita da Trakio permite monitorar até 15 métricas, oferecendo uma excelente oportunidade para explorar as funcionalidades da plataforma antes de considerar um upgrade para o plano premium.",
	},
	{
		value: "item-4",
		trigger: "Quais tipos de gráficos estão disponíveis?",
		content:
			"A Trakio oferece uma ampla gama de gráficos, incluindo gráficos de linha, barra, pizza e área, permitindo que você escolha a melhor forma de visualizar seus dados de acordo com suas necessidades.",
	},
	{
		value: "item-5",
		trigger: "Como funciona o pagamento e os planos de assinatura?",
		content:
			"A Trakio oferece uma versão gratuita e um plano premium que desbloqueia funcionalidades adicionais. O gerenciamento de pagamentos é feito de forma segura e prática.",
	},
];

export default function AboutSection() {
	return (
		<div>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 max-w-6xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Perguntas Frequentes
					</h2>
					<Accordion type="single" collapsible className="space-y-4">
						{faqItems.map(({ value, trigger, content }) => (
							<AccordionItem key={value} value={value}>
								<AccordionTrigger>{trigger}</AccordionTrigger>
								<AccordionContent>{content}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>
		</div>
	);
}
